import fitz  # PyMuPDF
import os

pdf_path = "PRESS KIT - JUNGLE 2026.pdf"
output_dir = "public/images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

pdf_document = fitz.open(pdf_path)

image_count = 0

for page_num in range(len(pdf_document)):
    page = pdf_document.load_page(page_num)
    image_list = page.get_images(full=True)
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = pdf_document.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_name = f"page{page_num+1}_img{img_index+1}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        with open(image_path, "wb") as image_file:
            image_file.write(image_bytes)
        print(f"Saved: {image_path}")

print("Image extraction complete.")
