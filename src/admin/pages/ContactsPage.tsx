import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';


import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { convertDate } from '../utils';
import { Link } from 'react-router-dom';


export function ContactsPage({
  refresh,
  setRefresh
}:{
  refresh: boolean
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [showAll, setShowAll] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contactsAll, setContactsAll] = useState([]);

  const token = sessionStorage.getItem("jwtToken");
  if (!token) {
    console.error("No token found in sessionStorage");
    return;
  }

  useEffect(() => {
    axios
      .get(
        "/content-manager/collection-types/api::contact.contact",
        {
          headers: {
            Authorization: `Bearer ${token.replace(/"/g, "")}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.results.filter((item: any) => item.read != true);
        setContacts(data);
        setContactsAll(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
      });
  }, [refresh]);

  const readAll = () => {
    axios
      .post("/api/contacts/read-all-data")
      .then(() => {
        toast.success("done, all data is read");
        setRefresh(!refresh);
      })
      .catch(() => {
        toast.error("error, some data is not read");
      });
  };
  const exportToExcel = (data: any) => {
    if (data.length === 0) {
      alert("No data to export!");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "contacts_export.xlsx");
  };
  
  return (
    <>
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold mb-6">Contacts Page</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowAll(prev => !prev)}
          className="bg-green-500 text-white px-4 py-2 rounded-xl mb-6 hover:bg-green-600 disabled:bg-gray-300"
        >
          {showAll ? "Hide All" : "Show All"}
        </button>
        <button
          disabled={contacts.length === 0}
          onClick={() => readAll()}
          className="bg-green-500 text-white px-4 py-2 rounded-xl mb-6 hover:bg-green-600 disabled:bg-gray-300"
        >
          Read All
        </button>
        <button
          disabled={contacts.length === 0}
          onClick={() => exportToExcel(contacts)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-6 hover:bg-blue-600 disabled:bg-gray-300"
        >
          Export to Excel
        </button>
        <button
          onClick={() => exportToExcel(contactsAll)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-6 hover:bg-blue-600"
        >
          Export All to Excel
        </button>
      </div>
    </div>

    <div className="overflow-x-auto w-full">
      <table className="md:min-w-full bg-white !shadow-2xl rounded-xl overflow-hidden">
        <thead className="border-b">
          <tr>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">Message</th>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">Subject</th>
            <th className="px-6 py-3 border-b text-left font-medium text-gray-500 uppercase tracking-wider">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {(showAll ? contactsAll : contacts).map((contact: any) => (
            <tr key={contact.id}>
              <td className="px-6 py-4">{contact.id}</td>
              <td className="px-6 py-4">{contact.name}</td>
              <td className="px-6 py-4">{contact.email}</td>
              <td className="px-6 py-4">{contact.phone}</td>
              <td className="px-6 py-4">{contact.message}</td>
              <td className="px-6 py-4">{contact.subject}</td>
              <td className="px-6 py-4">{convertDate(contact.createdAt)}</td>
              <td className="px-6 py-4">
                <Link className='text-blue-500 hover:underline' to={`/content-manager/collection-types/api::contact.contact/${contact.documentId}`}>
                  View Details
                </Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}
