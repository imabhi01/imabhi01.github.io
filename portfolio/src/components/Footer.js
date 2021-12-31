import React from 'react'

export default function Footer() {
    let newDate = new Date()
    let year = newDate.getFullYear();
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>{year}. All rights reserved.</span></strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}
