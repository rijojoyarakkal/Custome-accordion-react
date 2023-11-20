import { useState } from "react";

function Accordian({ accordianData }) {
  // console.log("hi", accordianData);
  let [accords, setAccordsFn] = useState([]);
  function openclick(newid) {
    // setIsOpen(!isopen);
    setAccordsFn((preAccid) => {
      return accords.includes(newid)
        ? accords.filter((accid) => accid !== newid)
        : [...preAccid, newid];
    });
  }
  // if(id===isopen){
  //   setIsOpen(!isopen)
  // }
  console.log("hi", accords);
  return (
    <div className="accordions">
      {accordianData &&
        accordianData.map(({ id, title, desc }) => (
          <div className="accordion" key={id}>
            <div onClick={() => openclick(id)} className="accordion-title">
              <h3>{title}</h3>
            </div>
            {/* {isopen && ( */}
            {accords?.map(
              (acc_id, index) =>
                acc_id === id && (
                  <div className="accordion-desc">
                    <p>{desc}</p>
                  </div>
                )
            )}
          </div>
        ))}
    </div>
  );
}
export default Accordian;
