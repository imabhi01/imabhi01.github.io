import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span><script>document.write(/\d{4}/.exec(Date())[0])</script>. All rights reserved.</span></strong>
                    </div>
                </div>
            </footer>
        </div>
    )
}
