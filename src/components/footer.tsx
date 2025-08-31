import { Contact } from "./Contacto";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Built with ❤️ using Next.js and Strapi
            </p>
            <Contact/>
        </div>
        </footer>
    );
}
