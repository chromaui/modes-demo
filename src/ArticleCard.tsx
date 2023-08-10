interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
  publishDate: string;
  type: 'FREE' | 'MEMBERS_ONLY';
}

/**
 * Primary UI component for user interaction
 */
export const ArticleCard = ({
  title,
  excerpt,
  image,
  author,
  publishDate,
  type,
  ...props
}: ArticleCardProps) => {
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    weekday: undefined,
    year: undefined,
    month: 'short',
    day: 'numeric',
  });
  console.log(`url('${image}')`);

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex" {...props}>
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-200 dark:border-gray-700 lg:border-l-0 lg:border-t bg-white dark:bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          {type === 'MEMBERS_ONLY' && (
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
          )}
          <div className="text-gray-900 dark:text-gray-100 font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {excerpt}
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.image}
            alt={`Avatar of ${author.name}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 dark:text-gray-100 leading-none">
              {author.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
