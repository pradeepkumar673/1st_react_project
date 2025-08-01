function News() {
    return (
        <section className="flex justify-center items-center m-10 px-5 hover:shadow-3xl-black">
            <div className="bg-[#ecddc9] shadow-lg rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row hover:bg-[#e6d5a3] transition duration-500">
                
               
                <div className="md:w-1/2 w-full">
                    <img
                        src="https://c.ndtvimg.com/2024-04/dintki6_kulfi_625x300_19_April_24.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
                        alt="Hero Image"
                        className="h-full w-full object-cover"
                    />
                </div>

               
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-3 text-[#810000]">This Indian Treat Has Been Named 8th Best Frozen Dessert In The World</h2>
                    <p className="text-gray-600 mb-4">Kulfi, a beloved Indian delicacy, was featured among the top 10 on Taste Atlas' list of the 50 Best Frozen Desserts in the World, as per the current rankings.</p>
                    <a
                        href="https://food.ndtv.com/news/indian-food-this-indian-dessert-was-named-8th-best-frozen-dessert-in-the-world-by-taste-atlas-8989364"
                        target="_blank"
                        className="bg-[#810000] text-white px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-[#810000] transition duration-300 font-semibold w-max"
                    >
                        Take Me There
                    </a>
                </div>
            </div>
        </section>
    );
}

export default News;
