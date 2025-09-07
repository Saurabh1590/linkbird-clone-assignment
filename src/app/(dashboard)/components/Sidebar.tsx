import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 bg-white shadow-md">
            <div className="p-6">
                <Link href="/dashboard">
                    <h1 className="text-2xl font-bold text-blue-600">LinkBird</h1>
                </Link>
            </div>
            <nav className="mt-6">
                <Link href="/dashboard" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                    Dashboard
                </Link>
                <Link href="/leads" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                    Leads
                </Link>
                <Link href="/campaigns" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                    Campaigns
                </Link>
            </nav>
        </aside>
    );
}