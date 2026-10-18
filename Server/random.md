# Save this as Server/.env (next to Server/package.json)
# Run the backend from inside the Server/ folder: cd Server && npm run dev

# Port the Express server listens on.
# The frontend has http://localhost:8000 hardcoded, so keep this at 8000.
PORT=8000

# MongoDB connection string (local MongoDB or MongoDB Atlas)
# Local example:
MONGODB_USERNAME="umarabbasi089_db_user"
MONGODB_PASSWORD="FqLo4ZNVoYH9udle"
MONGODB_URL=mongodb+srv://umarabbasi089_db_user:FqLo4ZNVoYH9udle@cluster0.k9rexck.mongodb.net
# MONGODB_URI=mongodb+srv://umarabbasi089_db_user:YOUR_NEW_PASSWORD@cluster0.k9rexck.mongodb.net/your_db_name?retryWrites=true&w=majority&appName=Cluster0
# Atlas example:
# MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ecommerce

# Frontend origin allowed by CORS (Vite dev server default port)
CORS_ORIGIN=http://localhost:5173

# JWT secrets - use long random strings (see command in the chat reply)
ACCESS_TOKEN_SECRET=replace_with_a_long_random_string
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=replace_with_a_different_long_random_string
REFRESH_TOKEN_EXPIRY=10d

# Cloudinary (product image uploads) - from your Cloudinary dashboard
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
