import Footer from "../components/footer";

const Layout = (props: any) => {
    return (
        
        <div className="h-screen flex">
            <div>Navigation</div>
            <div className="max-w-sm m-auto">{props.children}</div>
            <Footer />
            </div>
           
    );
};

export default Layout;