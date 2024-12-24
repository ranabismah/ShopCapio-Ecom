import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#6A0572] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo */}
          <div className="text-2xl font-bold mb-6 md:mb-0">
            <Link href="/" className="text-[#F5E6FE] hover:text-[#C77DFF]">
              ShopCapio
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <Link
              href="/"
              className="text-[#F5E6FE] hover:text-[#C77DFF] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-[#F5E6FE] hover:text-[#C77DFF] font-medium transition-colors"
            >
              Products
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-[#F5E6FE]">
            <p>Contact: info@shopcapio.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        <div className="mt-6 border-t border-[#C77DFF] pt-4 text-center">
  <p className="text-sm text-[#F5E6FE]">
    &copy; {new Date().getFullYear()} ShopCapio. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
