
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const VideoTestimonial = () => {

    const url = [
        {
            link: "https://www.youtube.com/embed/VzHCtwGn6-0?si=kvYJNU7pJyh0NKX4"
        },
        {
            link: "https://www.youtube.com/embed/7_s8wssOzuc?si=iabpQEVYQukV1gdb"
        },
    ]

    return (
        <div className="mt-4 gap-3 flex flex-col">
            <div>

                <h1 className="text-center font-semibold text-[28px] md:text-[34px]  text-[#525252]"> Testimonial&apos;s</h1>
                <p className="text-center text-lg my-[3px]">What People Say About US </p>
            </div>

            <div className="flex justify-between gap-2 flex-col sm:flex-row">

                {
                    url.map((obj, i) => (
                        <iframe key={i} src={obj.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="sm:w-[400px] lg:w-[560px] h-[315px]"></iframe>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoTestimonial
