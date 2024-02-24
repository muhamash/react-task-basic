/* eslint-disable react/prop-types */
const Tags = ( { tag } ) =>
{
    const colors = ['#FF5733A1', '#3498DBA1', '#9B59B6A1', '#F39C12A1', '#2ECC71A1'];
  
    return (
        <span
            className={ `inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]` }
            style={ {
                backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ],
            } }
        >
            { tag }
        </span>
    );
};
  
export default Tags;
