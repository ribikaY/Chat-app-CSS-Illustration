const Layout = ({children}) => {
    return (
        <div className="layout">
           <div className="layout-img left"/> 
            {children}
            <div className="layout-img right"/>  
        </div>
    )
}

export default Layout;