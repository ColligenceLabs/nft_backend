module.exports = {
    USER_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        SUSPEND: 'suspend',
    },
    TRANSACTION_STATUS: {
        SUCCESS: 'success',
        FAIL: 'fail',
        PENDING: 'pending',
        PROCESSING: 'processing',
        ERROR: 'error',
        CANCEL: 'cancel',
    },
    TRANSACTION_TYPE: {
        BUY: 0,
        AIRDROP: 1,
    },
    NFT_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        SUSPEND: 'suspend',
    },
    NFT_TYPE: {
        NORMAL: 0,
        AIRDROP: 1,
    },
    //listener type
    LISTENER_TYPE: {
        BURN: 0,
        MINT: 1,
    },
    SELLING_STATUS: {
        SELL: 0,
        STOP: 1,
    },
    SELLING_TIME_STATUS: {
        COMMING_SOON: 0,
        SELLING: 1,
        CLOSED: 2,
    },
    SERIAL_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        SUSPEND: 'suspend',
    },
    //transfer to wallet
    TRANSFERED: {
        NOT_TRANSFER: 0,
        TRANSFERED: 1,
    },
    COLLECTION_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        SUSPEND: 'suspend',
    },
    COMPANY_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        SUSPEND: 'suspend',
    },
    REWARD_STATUS: {
        ACTIVE: 'active',
        INACTIVE: 'inactive',
        SUSPEND: 'suspend',
    },
    REWARD_TYPE: {
        TRANSFER: 0,
        BUY: 1,
    },
    STATISTICS_TYPE: {
        LINE: 'line',
        CHART: 'chart',
    },
    USER_TABLE: [{name: 'No'}, {name: 'Address'}, {name: 'Status'}, {name: 'Action'}],
    ADMIN_FIELD: '_id full_name email admin_address createdAt updatedAt',
    USER_FIELD: '_id address status createdAt updatedAt tp_amount',
    STATISTICS_LINE_FIELD: '_id type name value date createdAt updatedAt',
    STATISTICS_CHART_FIELD:
        '_id type name nft_id company_id collection_id value date createdAt updatedAt',
    ADMIN_ADDRESS: '0x7b8340205dddee16f2f9e582c185ff5f05f4cb6e',
    CONTRACT_ADMIN_ADDRESS: '0x5739944fb2e1edd34881e293392d73c66f682bf4',
    KLAYTN_URL: 'http://139.180.191.58:8081/klaytn/',
    IPFS: {
        PROJECT_ID: '1wKv6epGPX2O1pWmi11VVIDvpGN',
        PROJECT_SECRET: 'dcc6463257ade11f564330b305d1f8ad',
    },
    IPFS_URL: 'https://ipfs.io/ipfs/',
    ALT_URL: 'https://nftbe.talken.io/talkenNft/',
    STATISTICS: {
        LINE: {
            NFT_REVENUE: 'nft_revenue',
            COLLECTION_REVENUE: 'collection_revenue',
            COMPANY_REVENUE: 'company_revenue',
            TOTAL_REVENUE: 'total_revenue',
        },
        CHART: {
            NFT_REVENUE: 'nft_revenue',
            NFT_QUANTITY: 'nft_quantity',
            COLLECTION_REVENUE: 'collection_revenue',
            COLLECTION_QUANTITY: 'collection_quantity',
            COMPANY_REVENUE: 'company_revenue',
            COMPANY_QUANTITY: 'company_quantity',
        },
    },
    COLLECTION_CATE: {
        OTHER: {
            value: 'other',
            title: 'Other',
        },
        TOP: {
            value: 'top',
            title: 'Top',
        },
        GAME: {
            value: 'game',
            title: 'Game',
        },
        KPOP: {
            value: 'kpop',
            title: 'Kpop',
        },
        POP: {
            value: 'pop',
            title: 'Pop',
        },
        BALLAD: {
            value: 'ballad',
            title: 'Ballad',
        },
        USUK: {
            value: 'usuk',
            title: 'US-UK',
        },
        DANCE: {
            value: 'dance',
            title: 'Dance',
        },
        DISCO: {
            value: 'disco',
            title: 'Disco',
        },
        JAZZ: {
            value: 'jazz',
            title: 'Jazz',
        },
        BLUES: {
            value: 'blues',
            title: 'Blues',
        },
        HIPHOP: {
            value: 'hiphop',
            title: 'Hip hop',
        },
        FOLK: {
            value: 'folk',
            title: 'Folk',
        },
        ROCK: {
            value: 'rock',
            title: 'Rock',
        },
        INSTRUMENTAL: {
            value: 'instrumental',
            title: 'Instrumental',
        },
    },
};
