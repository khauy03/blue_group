const mongoose = require("mongoose");
const { User, Post, Category } = require("../models");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/bat_dong_san"
    );
    console.log("✅ MongoDB connected for seeding");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

const categoriesData = [
  {
    name: "chung cư",
    description: "Căn hộ chung cư, apartment",
    icon: "fas fa-building",
    color: "#007bff",
    sortOrder: 1,
    metaTitle: "Chung cư - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin mua bán, cho thuê chung cư, căn hộ",
  },
  {
    name: "nhà riêng",
    description: "Nhà riêng, nhà phố",
    icon: "fas fa-home",
    color: "#28a745",
    sortOrder: 2,
    metaTitle: "Nhà riêng - Bất động sản",
    metaDescription:
      "Tìm kiếm và đăng tin mua bán, cho thuê nhà riêng, nhà phố",
  },
  {
    name: "đất nền",
    description: "Đất nền, đất thổ cư",
    icon: "fas fa-map",
    color: "#ffc107",
    sortOrder: 3,
    metaTitle: "Đất nền - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin mua bán đất nền, đất thổ cư",
  },
  {
    name: "nhà mặt phố",
    description: "Nhà mặt phố, mặt tiền",
    icon: "fas fa-store",
    color: "#dc3545",
    sortOrder: 4,
    metaTitle: "Nhà mặt phố - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin mua bán, cho thuê nhà mặt phố",
  },
  {
    name: "biệt thự",
    description: "Biệt thự, villa",
    icon: "fas fa-crown",
    color: "#6f42c1",
    sortOrder: 5,
    metaTitle: "Biệt thự - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin mua bán, cho thuê biệt thự, villa",
  },
  {
    name: "shophouse",
    description: "Shophouse, nhà phố thương mại",
    icon: "fas fa-shopping-bag",
    color: "#fd7e14",
    sortOrder: 6,
    metaTitle: "Shophouse - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin mua bán, cho thuê shophouse",
  },
  {
    name: "kho xưởng",
    description: "Kho xưởng, nhà máy",
    icon: "fas fa-warehouse",
    color: "#6c757d",
    sortOrder: 7,
    metaTitle: "Kho xưởng - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin cho thuê kho xưởng, nhà máy",
  },
  {
    name: "văn phòng",
    description: "Văn phòng, tòa nhà",
    icon: "fas fa-briefcase",
    color: "#20c997",
    sortOrder: 8,
    metaTitle: "Văn phòng - Bất động sản",
    metaDescription: "Tìm kiếm và đăng tin cho thuê văn phòng, tòa nhà",
  },
];

const adminData = {
  name: "Admin",
  email: "admin@gmail.com",
  password: "admin123",
  role: "admin",
  phone: "0123456789",
  emailVerified: true,
};

const usersData = [
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    password: "123456",
    phone: "0987654321",
    emailVerified: true,
  },
  {
    name: "Trần Thị B",
    email: "tranthib@gmail.com",
    password: "123456",
    phone: "0987654322",
    emailVerified: true,
  },
  {
    name: "Lê Văn C",
    email: "levanc@gmail.com",
    password: "123456",
    phone: "0987654323",
    emailVerified: true,
  },
];

const getPostsData = (users) => [
  {
    title: "Bán căn hộ chung cư 2PN tại Hà Nội",
    description:
      "Căn hộ 2 phòng ngủ, 2 toilet, đầy đủ nội thất, view đẹp, gần trường học và bệnh viện. Giá tốt cho nhà đầu tư.",
    price: 2500000000,
    area: 75,
    address: "123 Đường ABC, Quận Cầu Giấy, Hà Nội",
    phone: "0987654321",
    type: "bán",
    category: "chung cư",
    images: ["/images/sample-house.svg", "/images/no-image.svg"],
    userId: users[0]._id,
    isApproved: true,
  },
  {
    title: "Cho thuê nhà riêng 3 tầng tại TP.HCM",
    description:
      "Nhà riêng 3 tầng, 4 phòng ngủ, có sân để xe, khu vực an ninh tốt, gần chợ và trường học.",
    price: 15000000,
    area: 120,
    address: "456 Đường XYZ, Quận 1, TP.HCM",
    phone: "0987654322",
    type: "cho thuê",
    category: "nhà riêng",
    images: ["/images/sample-house.svg"],
    userId: users[1]._id,
    isApproved: true,
  },
  {
    title: "Bán đất nền dự án mới tại Đà Nẵng",
    description:
      "Đất nền dự án mới, pháp lý rõ ràng, hạ tầng hoàn thiện, giá đầu tư tốt.",
    price: 1800000000,
    area: 100,
    address: "789 Đường DEF, Quận Hải Châu, Đà Nẵng",
    phone: "0987654323",
    type: "bán",
    category: "đất nền",
    images: ["/images/sample-house.svg", "/images/no-image.svg"],
    userId: users[2]._id,
    isApproved: null, // Chờ duyệt
  },
  {
    title: "Cho thuê văn phòng cao cấp tại Hà Nội",
    description:
      "Văn phòng cao cấp, đầy đủ tiện nghi, view đẹp, parking miễn phí.",
    price: 25000000,
    area: 200,
    address: "321 Đường GHI, Quận Ba Đình, Hà Nội",
    phone: "0987654321",
    type: "cho thuê",
    category: "văn phòng",
    images: ["/images/sample-house.svg"],
    userId: users[0]._id,
    isApproved: true,
  },
];

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});
    await Category.deleteMany({});
    console.log("🗑️  Cleared existing data");

    // Create categories
    const categories = await Category.insertMany(categoriesData);
    console.log(`✅ Created ${categories.length} categories`);

    // Create admin user
    const admin = await User.create(adminData);
    console.log("✅ Created admin user");

    // Create regular users
    const users = await User.insertMany(usersData);
    console.log(`✅ Created ${users.length} regular users`);

    // Create posts
    const postsData = getPostsData(users);
    const posts = await Post.insertMany(postsData);
    console.log(`✅ Created ${posts.length} posts`);

    // Update categories posts count
    for (const category of categories) {
      await category.updatePostsCount();
    }
    console.log("✅ Updated categories posts count");

    console.log("🎉 Database seeding completed successfully!");
    console.log("\n📋 Seeded data summary:");
    console.log(`   - Admin: ${adminData.email} / ${adminData.password}`);
    console.log(`   - Users: ${users.length} users created`);
    console.log(`   - Categories: ${categories.length} categories created`);
    console.log(`   - Posts: ${posts.length} posts created`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    mongoose.connection.close();
    console.log("🔌 Database connection closed");
  }
};

if (require.main === module) {
  connectDB().then(() => {
    seedDatabase();
  });
}

module.exports = { seedDatabase, connectDB };
