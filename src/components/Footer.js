import React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-10 col-md-7 text-center text-md-end">
          <span className="text-muted">© 2022 <i>One Bite</i>, Inc</span>
        </div>
        <ul className="nav col-12 col-md-6 justify-content-center justify-content-md-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
          <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
          <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
        </ul>
      </footer>
    </div>
  );
}
