import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ArticleType = "bitcoin" | "ethereum" | "global";

export default function NewsArticle() {
  const { state } = useLocation() as { state: { type: string } };

  const objectArticle: Record<
    ArticleType,
    {
      title: string;
      author: string;
      date: string;
      image: string;
      content: string;
    }
  > = {
    bitcoin: {
      title: "Bitcoin Hits New High",
      author: "Ana Costa",
      date: "August 28, 2025",
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1200&auto=format&fit=crop&q=60",
      content: `
        Bitcoin reached an all-time high today, surpassing previous records and
        reinforcing its dominance in the cryptocurrency market. Analysts suggest
        that institutional investors and global adoption are key drivers behind
        this rally.
  
        According to industry experts, this new milestone could pave the way for
        more mainstream adoption, with companies and financial institutions
        increasingly integrating Bitcoin into their operations.
  
        While some skeptics warn of potential volatility, the overall sentiment in
        the market remains optimistic, with many predicting further growth in the
        coming months.
      `,
    },
    ethereum: {
      title: "Ethereum 2.0 Ushers a New Era",
      author: "Lucas Pereira",
      date: "September 1, 2025",
      image:
        "https://images.unsplash.com/photo-1622632169740-85c306c57aa2?w=1200&auto=format&fit=crop&q=60",
      content: `
        Ethereum has officially transitioned into Ethereum 2.0, marking one of the
        most significant upgrades in blockchain history. The update brings a shift
        from the energy-intensive Proof of Work mechanism to the more efficient
        Proof of Stake system.
    
        This transition is expected to reduce Ethereum’s energy consumption by more
        than 99%, addressing one of the key criticisms of blockchain technology. In
        addition, Ethereum 2.0 introduces sharding, which will dramatically improve
        scalability and lower transaction costs.
    
        Developers and investors alike are optimistic about the future of Ethereum,
        with many decentralized applications already reporting improved performance.
        Analysts suggest this could position Ethereum as the backbone of Web3 and
        decentralized finance (DeFi) for the years ahead.
      `,
    },
    global: {
      title: "Global Adoption of Crypto is Rising",
      author: "Mariana Oliveira",
      date: "September 1, 2025",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=60",
      content: `
        The global adoption of cryptocurrencies continues to accelerate as more
        companies and institutions embrace digital assets for payments,
        investments, and financial infrastructure. From retail giants to fintech
        startups, crypto is becoming a key component of the modern economy.
    
        Recent surveys indicate that over 40% of small businesses in developed
        economies are considering accepting crypto payments within the next two
        years. Meanwhile, developing nations are leading the way in everyday usage,
        with millions relying on cryptocurrencies for remittances and financial
        inclusion.
    
        Experts suggest that regulatory clarity, combined with technological
        advancements, will further boost mainstream adoption. As trust and usage
        grow, digital currencies could play an increasingly central role in the
        global financial system, bridging the gap between traditional banking and
        decentralized finance.
      `,
    },
  };

  const { type } = state as { type: ArticleType }; // 👈 força o tipo correto

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-white min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          {objectArticle[type].title}
        </h1>

        {/* Meta info */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>By {objectArticle[type].author}</span>
          <span className="mx-2">•</span>
          <span>{objectArticle[type].date}</span>
        </div>

        {/* Image */}
        <img
          src={objectArticle[type].image}
          alt={objectArticle[type].title}
          className="w-full h-80 object-cover rounded-xl shadow mb-8"
        />

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          {objectArticle[type].content.split("\n\n").map((para, i) => (
            <p key={i} className="mb-6">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
