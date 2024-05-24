import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subheading }) => {
  console.log(heading, subheading);
  return (
    <div className="container mx-auto mt-10">
      <div className="w-[80%] md:w-96 mx-auto ">
        <div className="text-center inter">
          <h4 className="text-xl text-[#D99904] mb-3">--{subheading}--</h4>
          <h2 className="text-4xl border-y-4 py-4">{heading}</h2>
        </div>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default SectionTitle;
