import Link from "next/link";

const Contact = () => {
  return (
    <div className="container mx-auto px-5 p-48 w-1/2 justify-center  text-start ">
      <div className="grid justify- ">
        <h2 className="text-4xl  font-semibold text-start">
          Love to hear from you,
        </h2>
        <h2 className="text-4xl  font-semibold text-start">Get in touch 👋🏻</h2>
      </div>
      <div className="py-10 mt-10 mx-auto justify-center ">
        <div className="flex  justify-between ">
          <div className="grid gap-3">
            <label htmlFor="name" className="mt-5 font-semibold">
              Your name
            </label>
            <input
              type="text"
              placeholder="James vince"
              className="outline-none ml-5"
            />
          </div>
          <div className="grid gap-3">
            <label htmlFor="email" className="mt-5 font-semibold">
              Your email
            </label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              className="outline-none ml-5"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="py-5 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            placeholder="tell usabout your travel plan"
            cols="30"
            rows="10"
            className="outline-none ml-5"
          />
        </div>
      </div>
      <Link
        href={"/"}
        className="text-center bg-black/90 self-start p-3 lg:py-3 lg:px-44 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-sm inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black duration-500 hover:border-white/75"
      >
        Send
      </Link>
    </div>
  );
};

export default Contact;
