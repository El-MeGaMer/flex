"use client";

import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Badge from "@/components/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Toggle from "@/components/ui/toggle";
import React from "react";
import { FaGear } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { Download } from "lucide-react";
import Link from "next/link";
import { PartnerShipClientTableContent } from "../../../../types/TableTypes";

export const columns: ColumnDef<PartnerShipClientTableContent>[] = [
  {
    accessorKey: "document_name",
    header: "Documents",
  },
  {
    accessorKey: "mandatory",
    header: () => <div className="flex w-[100%]"></div>,
    cell: ({ row }) => {
      //Variable where we store the status value
      const rowMandatory = row.original.mandatory

      return (
          <div className="flex justify-center">
              {/*Badge that reflects if the Document is mandatory*/}
              {rowMandatory}
          </div>
      )
  }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      //Variable where we store the status value
      const rowStatus = row.original.status

      return (
          <div className="flex justify-center">
              {/*Badge that reflects the status of the Partnership*/}
              <Badge label={rowStatus} />
          </div>
      )
  }
  },
  {
    accessorKey: "validated",
    header: "Action",
    cell: ({ row }) => {
      //Variable where we store the boolean value of validated
      const rowValidated = row.original.validated

      return (
          <div className="flex justify-center">
              {/*Button to validate the document*/}
              {rowValidated?<></> : <><Button>Validate</Button></>}
          </div>
      )
  }
  },
  {
    accessorKey: "file",
    header: "Download",
    cell: ({ row }) => {
      //Variable where we store the status value
      const rowStatus = row.original.status

      return (
          <div className="flex justify-center">
              {/*Button that lets you upload*/}
              <Button size="icon" variant={"ghost"}><Download className="h-7 w-7 text-black dark:text-slate-900 fill-black-500" /></Button>{/*Button for the delete function*/}
          </div>
      )
  }
  },
];
