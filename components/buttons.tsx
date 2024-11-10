"use client";

"use client";

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/lib/actions";

export const CreateButton = () => {
    return (
        <Link
            href="/contacts/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
            >
            <IoAddSharp size={20} />
            Create
        </Link>
    );
};