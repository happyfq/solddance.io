const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <a href="/" className="font-bold">
          SOLDANCE
        </a>
        <div className="flex items-start ">
          <a href="#" className="mr-4 hover:underline md:mr-6">
            <img
              className="w-5 h-5"
              width="16"
              src="/facebook.svg"
              alt="image description"
              style={{ filter: 'invert(100%)', fill: 'white' }}
            />
          </a>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            <img
              className="w-5 h-5"
              width="16"
              src="/instagram.svg"
              alt="image description"
              style={{ filter: 'invert(100%)', fill: 'white' }}
            />
          </a>
          <a href="#" className=" hover:underline md:mr-6">
            <img
              className="w-5 h-5"
              src="/twitterx.svg"
              alt="image description"
              style={{ filter: 'invert(100%)', fill: 'white' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;