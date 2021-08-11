export interface ISearchResultItemSnippetThumbnailsItem {
    url: string;
    width: number;
    height: number;
}

export interface ISearchResultItemSnippetThumbnails {
    default: ISearchResultItemSnippetThumbnailsItem ;
    medium: ISearchResultItemSnippetThumbnailsItem ;
    high: ISearchResultItemSnippetThumbnailsItem ;
    standard: ISearchResultItemSnippetThumbnailsItem ;
    maxres: ISearchResultItemSnippetThumbnailsItem ;
}

export interface ISearchResultItemSnippetLocalized {
    title: string;
    description: string;
}

export interface ISearchResultItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ISearchResultItemSnippetThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: ISearchResultItemSnippetLocalized;
    defaultAudioLanguage: string;
}

export interface ISearchResultItemStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

export interface ISearchResultItem {
    kind: string;
    etag: string;
    id: string;
    snippet: ISearchResultItemSnippet;
    statistics: ISearchResultItemStatistics;
}
