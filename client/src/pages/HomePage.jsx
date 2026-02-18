
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNews = async () => {
        try {
            // In a real scenario, you might have featured vs latest endpoints
            const { data } = await axios.get('http://localhost:5000/api/news');
            setNews(data);
            setLoading(false);
        } catch (err) {
            // If API fails (e.g. backend not running), fallback to dummy data for UI demo
            console.error(err);
            setNews([
                {
                    _id: '1',
                    title: 'Israeli settlement on Unesco heritage site sparks international outcry',
                    content: 'The two-part show reveals like never before how theft was used as a means of erasing Jewish identity.',
                    category: 'Heritage',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M113_APC_in_Hebron.jpg/1200px-M113_APC_in_Hebron.jpg',
                    createdAt: new Date().toISOString()
                },
                {
                    _id: '2',
                    title: '‘The greatest theft in history’: a new exhibition in Amsterdam',
                    content: 'The exhibition offers an unprecedented account of Nazi looting.',
                    category: 'Museums & Heritage',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Rembrandt_Night_Watch_1906.jpg',
                    createdAt: new Date().toISOString()
                },
                {
                    _id: '3',
                    title: 'Where is Salvator Mundi? In storage in Geneva—apparently',
                    content: 'The painting has not been seen in public since its sale at Christie’s in 2017.',
                    category: 'Diary',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Leonardo_da_Vinci_or_Boltraffio_%28attrib%29_Salvator_Mundi_circa_1500.jpg/800px-Leonardo_da_Vinci_or_Boltraffio_%28attrib%29_Salvator_Mundi_circa_1500.jpg',
                    createdAt: new Date().toISOString()
                },
                {
                    _id: '4',
                    title: 'US National Register of Historic Places adds first art environment',
                    content: 'The site features sculptures by an African American artist.',
                    category: 'News',
                    createdAt: new Date().toISOString()
                }
            ]);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    const featured = news[0];
    const secondary = news.slice(1);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-serif font-bold mb-8 text-black border-b-4 border-black inline-block pb-2">
                Latest
            </h1>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Main Featured Article (Left - 66%) */}
                {featured && (
                    <div className="lg:w-2/3">
                        <div className="mb-4">
                            <img
                                src={featured.image || 'https://via.placeholder.com/800x500'}
                                alt={featured.title}
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-[#D93025] font-bold text-sm uppercase tracking-wider mb-2 block">
                                {featured.category}
                            </span>
                            <Link to={`/news/${featured._id}`}>
                                <h2 className="text-4xl font-serif font-bold leading-tight hover:text-[#D93025] transition-colors mb-4">
                                    {featured.title}
                                </h2>
                            </Link>
                            <p className="text-lg text-gray-700 font-serif leading-relaxed line-clamp-4">
                                {featured.content}
                            </p>
                        </div>
                    </div>
                )}

                {/* Secondary Articles List (Right - 33%) */}
                <div className="lg:w-1/3 flex flex-col space-y-8 divide-y divide-gray-200">
                    {secondary.map((item) => (
                        <div key={item._id} className="pt-8 first:pt-0">
                            <div className="flex flex-col md:flex-row lg:flex-col gap-4">
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover md:w-1/2 lg:w-full"
                                    />
                                )}
                                <div>
                                    <span className="text-[#D93025] font-bold text-xs uppercase tracking-wider mb-1 block">
                                        {item.category}
                                    </span>
                                    <Link to={`/news/${item._id}`}>
                                        <h3 className="text-xl font-serif font-bold leading-snug hover:text-[#D93025] transition-colors mb-2">
                                            {item.title}
                                        </h3>
                                    </Link>
                                    <p className="text-sm text-gray-600 font-sans line-clamp-3 mb-2">
                                        {item.content}
                                    </p>
                                    <span className="text-xs text-gray-400 font-sans block mt-2">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
