import PropTypes from 'prop-types';

const SectionHeader = ({subTitle, title,button}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 '>
      <p className='text-neutral-content'>{subTitle}</p>
      <div className='font-rancho text-5xl text-primary cstm_text_shadow'>{title}</div>
      {
        button && button
      }
    </div>
  );
};

SectionHeader.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.element,
};

export default SectionHeader;