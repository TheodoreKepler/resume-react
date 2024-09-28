export default function ResumeHeader(header) {
  return (
    <div className="header">
      <TitleName name={header.name}/>
      <ContactInfo
        address={header.address}
        phone={header.phone}
        email={header.email}
      />
    </div>
  );
}

function TitleName({name}) {
  return (
  <div>
    <b>{name}</b>
  </div>
  );
}

function ContactInfo({address, phone, email}) {
  const mailto = "mailto:" + email;
  return (
  <div>
    <b>{address + ' / ' + phone + ' / '} 
      <a href={mailto}>{email}</a>
    </b>
  </div>
  );
}
