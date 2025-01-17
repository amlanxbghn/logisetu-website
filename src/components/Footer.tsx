import Link from "next/link"
import { MdMail as Mail, MdPhone as Phone } from "react-icons/md";
import { LuMapPin as MapPin } from "react-icons/lu";
import { FaXTwitter as Twitter, FaLinkedinIn as LinkedIn, FaInstagram as Instagram} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="container">
            <footer className="pb-12 pt-4">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold mb-1">LOGISETU</h3>
                                <p className="text-sm text-zinc-400">
                                    Transforming Transportation
                                </p>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="nav-item">
                                    <Twitter className="w-5 h-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="#" className="nav-item">
                                    <LinkedIn className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a href="#" className="nav-item">
                                    <Instagram className="w-5 h-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="nav-item">Home</Link></li>
                                <li><Link href="#mission" className="nav-item">Our Mission</Link></li>
                                <li><Link href="#advantage" className="nav-item">Advantages</Link></li>
                                <li><Link href="#model" className="nav-item">Business Model</Link></li>
                                <li><Link href="#team" className="nav-item">Our Team</Link></li>
                            </ul>
                        </div>
                        <div id="contact">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <a href="mailto:info@logisetu.com" className="nav-item">
                                        info@logisetu.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />

                                    <a href="tel:+911234567890" className="nav-item">
                                        +91 123 456 7890
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="nav-item cursor-default">
                                        Bengaluru, Karnataka, India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/20 text-center">
                        <p className="text-sm text-zinc-400">&copy; 2024 LogiSetu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer