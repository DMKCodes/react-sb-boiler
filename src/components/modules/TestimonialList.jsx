import Testimonial from "./Testimonial.jsx";

const TestimonialList = ({ items = [] }) => {
    return (
        <div className="tst-list">
            {items.map((t, i) => <Testimonial key={i} {...t} />)}
        </div>
    );
};

export default TestimonialList;