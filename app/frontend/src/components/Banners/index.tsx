import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import animatedSearchIcon from "/icons8-search.gif"
import searchIcon from "/icons8-search-static.svg"
import paperIcon from "/icons8-paper.png"
import type { Paper } from "../../features/papers/paperSlice";
import { useGetPapersQuery } from "../../features/papers/paperSlice"
import { useDebounce, useOutsideDetected } from "./utils"

export const Banner = () => {
    const [text, setText] = useState('');
    const debouncedText = useDebounce(text, 500);

    const [searchResults, setSearchResults] = useState<Paper[]>([]);

    const wrapperRef = useRef(null);
    const isClickedOutside = useOutsideDetected(wrapperRef);

    // isFetching vs isLoading differences
    const { data, isFetching } = useGetPapersQuery({ query: debouncedText, limit: 10 }, { skip: debouncedText.length < 3 });

    useEffect(() => {
        if (data && data.data && data.data.length > 0) {
            setSearchResults(data.data)
        } else {
            setSearchResults([])
        }

    }, [data, debouncedText])

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center text-center mt-20">
            <h1 className="text-4xl font-semibold">Explore connected papers in a visual graph</h1>

            <h2 className="text-xl mt-8">
                Enter a paper identifier to begin searching
            </h2>

            <div className="w-full flex justify-center mt-8 px-3 pt-3" ref={wrapperRef}>
                <form className="w-2/5 ">
                    <div className="relative flex">
                        <input
                            type="search"
                            id="default-search"
                            className={classNames(
                                "w-full p-3 px-4 outline-none text-sm  text-gray-900 border border-gray-300 shadow-md hover:shadow-lg focus:shadow-lg transition duration-300",
                                (text.length > 2 && !isClickedOutside) ? "rounded-t-3xl border-b-0" : "rounded-full",
                            )}
                            placeholder="Search by keywords, paper title, DOI or another identifier"
                            required
                            onChange={handleUserInput}
                            value={text}
                        />
                        <button
                            onClick={e => {
                                e.preventDefault()
                            }}
                            className={classNames(
                                "h-full text-white absolute right-0 bg-brand-red text-sm px-9 transition duration-300 hover:bg-brand-dark-red",
                                (text.length > 2 && !isClickedOutside) ? "rounded-t-3xl rounded-bl-3xl" : "rounded-full",
                            )}
                        >
                            Build a Graph
                        </button>
                    </div>
                </form>
            </div>

            {(text.length > 2 && !isClickedOutside) && (
                <div className="w-full flex justify-center px-3">
                    <div className="w-2/5 min-w-96 p-4 border border-gray-300 rounded-b-3xl">
                        {(searchResults.length > 0 && !isFetching) &&
                            <div className="flex flex-col">
                                {
                                    searchResults.map(result => (<div key={result.paperId} className="flex flex-1 flex-row items-start text-left mb-5">
                                        <img src={paperIcon} className="w-5 mt-1 ml-1 mr-5 object-cover" alt="search-icon" />
                                        <p>{result.title}</p>
                                    </div>))
                                }
                            </div>
                        }

                        {
                            (data?.total === 0 && !isFetching) &&
                            <div className="flex flex-col">
                                <div className="flex flex-1 flex-row items-start text-left mb-5">
                                    <p>Found No Articles</p>
                                </div>
                            </div>
                        }

                        <div className="flex flex-1 flex-row items-center">
                            {isFetching ? <img src={animatedSearchIcon} className="w-5 mr-4" alt="loading..." /> : <img src={searchIcon} className="w-5 mt-1 ml-1 mr-5" alt="search-icon" />}
                            <p className="text-sm">See all paper suggestions for "{text}"</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
