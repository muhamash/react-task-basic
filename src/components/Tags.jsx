/* eslint-disable react/prop-types */
const Tags = ( { tag } ) =>
{
   console.log(tag)
    const getRandomColor = () =>
    {
        const colors = [ '#00D991A1', '#1C92FFB0', '#FE1A1AB5' ];
        return colors[ Math.floor( Math.random() * colors.length ) ];
    };
  
    return (
        <span
            className={ `inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]` }
            style={ { backgroundColor: getRandomColor() } }
        >
            { tag }
        </span>
    );
};
  
export default Tags;
