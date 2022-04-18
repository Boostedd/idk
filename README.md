🏆 A little Discord preview "cdn" I made 🏆

📌 Uses OpenGraph and Twitter meta tags to make the preview
📌 Uses Multer to do upload files

🍀 Replace "DOMAIN" at line 8 to your own hosting domain to make it work properly!

-❄️️- Requests -❄️️-

❄️️ POST /upload
❄️️ - Requires a file with the key "uploaded_file"
❄️️ Uploads the file to cdn/files

❄️️ GET /file/(fileID)
❄️️ - Requires fileID
❄️️ Returns the file found in the cdn with said file ID

❄️️ GET /(fileId)
❄️️ - Requires fileID
❄️️ Returns an HTML file with meta tags in the head to make the preview appear

-❄️️- Requests -❄️️-

❤️ Thank you for looking at my repo ❤️
