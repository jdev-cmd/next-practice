import AdminHeader from "@/components/AdminHeader"
export default function AdminLayout({children,left}){
    return(
        <div>
            {/* {left} */}
            <AdminHeader/>
            {children}
        </div>
    )
}