import Link from "next/link";
import Image from "next/image";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { SearchInput } from "./search-input";

export const Navbar = () => {
    return (
        <nav className= "flex items-center justify-between h-full w-full">
            <div className="flex gap-1 items-center shrink-0 pr-6">
                <Link href="/">
                    <Image src="/logo1.png" alt="Logo" width={70} height={70} />
                </Link>
                <h3 className="text-l font-semibold">Synkris</h3>
            </div>
            <SearchInput />
            <div className="flex gap-3 items-center pl-6">
                <OrganizationSwitcher 
                    afterCreateOrganizationUrl="/"
                    afterLeaveOrganizationUrl="/"
                    afterSelectOrganizationUrl="/"
                    afterSelectPersonalUrl="/" 
                />
                <UserButton />
            </div>
        </nav>
    );
};