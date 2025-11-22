import RafiNazhmiLogo from "../assets/RAFI NAZHMI.png";
const companyLogos = Array(6).fill(RafiNazhmiLogo); // duplicate logo to show multiple

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex flex-nowrap justify-center gap-10 overflow-x-auto">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center h-[10rem]"
            key={index}
          >
            <img src={logo} width={250} height={50} alt={`RAFI NAZHMI ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
