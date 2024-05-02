import { useState, useRef } from "react";

export const UseRefSample: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);

  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisplay(!isDisplay);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="">
          Name
          <input type="text" ref={nameRef} />
        </label>
        <label htmlFor="">
          Address
          <input type="text" ref={addressRef} />
        </label>
        <label htmlFor="">
          TEL
          <input type="text" ref={telRef} />
        </label>
        <button></button>
      </form>
      <div>
        <div>name: {nameRef.current?.value}</div>
        <div>address: {addressRef.current?.value}</div>
        <div>tel: {telRef.current?.value}</div>
      </div>
    </div>
  );
};
