import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="main-footer">
            {/* <!-- To the right --> */}
            <div className="float-right d-none d-sm-inline">
                Styllth Saraiva Ribeiro
            </div>
            {/* <!-- Default to the left --> */}
            <strong>Copyright &copy; 2020 </strong> All rights reserved.
        </footer>
    );
}
