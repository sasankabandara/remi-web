import React from 'react';
import './roadmap.css';
import Container from "react-bootstrap/Container";

const Roadmap = () => {
    return (
        <Container className="roadmap-container">
            {roadmapItems.map((row, rowIndex) => (
                <div className="roadmap-row-container" key={rowIndex}>
                    <div className="roadmap-row">
                        {row.map((item, index) => (
                            <div className="col-4 roadmap-item" key={index}>
                                <div className="roadmap-step-container">
                                    <div className={`roadmap-step ${item.special ? 'special-step' : ''}`}>{item.step}</div>
                                    {index < row.length - 1 && <div className={`roadmap-line line-${rowIndex}`}></div>}
                                </div>
                                <div className="roadmap-content">
                                    <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Container>
    );
}

const roadmapItems = [
    [
        { step: '01', title: 'SOCIAL MEDIA', description: 'Continued Presence On Social Media<br />Telegram<br />Twitter/X' },
        { step: '02', title: 'AMA WITH <span class="highlight">$REMY</span><br> COMMUNITY', description: '' },
        { step: '03', title: '$REMY NFT SERIES', description: 'Limited Edition $REMY NFTs' },
    ],
    [
        { step: '04', title: 'MARKETING', description: 'Ton Trending Callers<br />Twitter/X Posts' },
        { step: '05', title: 'FUTURE LISTINGS', description: 'Reach out to exchanges for listing' },
        { step: '06', title: 'AIR DROP', description: 'Airdrop $REMY To Top Holders Of Larger Successful Projects' },
    ],
    [
        { step: '07', title: 'TRADING PAIRS', description: 'Pair $REMY with other popular TON projects' },
        { step: '08', title: 'COINGECKO & CMC', description: 'List $REMY with CoinGecko & CMC', special: true },
        { step: '09', title: '<span class="highlight">$REMY</span> TOKEN BURN', description: '', special: true },
    ]
];

export default Roadmap;
