import { PlayerData } from './PlayerConfig';

export enum PlayerState {
  Unstarted = -1,
  Ended = 0,
  Playing = 1,
  Paused = 2,
  Buffering = 3,
  Cued = 5
}

export enum AutoNavigationState {
  Disabled = 1,
  Enabled = 2
}

export enum PlaybackQuality {
  Auto = 'auto',
  Tiny = 'tiny',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  HD720 = 'hd720',
  HD1080 = 'hd1080',
  HD1440 = 'hd1440',
  HD2160 = 'hd2160',
  Highres = 'highres'
}

export module PlaybackQuality {
  export function getValues(): PlaybackQuality[] {
    return [
      PlaybackQuality.Auto,
      PlaybackQuality.Tiny,
      PlaybackQuality.Small,
      PlaybackQuality.Medium,
      PlaybackQuality.Large,
      PlaybackQuality.HD720,
      PlaybackQuality.HD1080,
      PlaybackQuality.HD1440,
      PlaybackQuality.HD2160,
      PlaybackQuality.Highres
    ];
  }
}

export declare interface PlayerApi {
  cueVideoById: {
    (videoId: string, startSeconds?: number, suggestedQuality?: PlaybackQuality): void;
    (options: {
      videoId: string,
      startSeconds?: number,
      endSeconds?: number,
      suggestedQuality?: PlaybackQuality
    }): void;
  };

  loadVideoById: {
    (videoId: string, startSeconds?: number, suggestedQuality?: PlaybackQuality): void;
    (options: {
      videoId: string,
      startSeconds?: number,
      endSeconds?: number,
      suggestedQuality?: PlaybackQuality
    }): void;
  };
  cueVideoByUrl: {
    (mediaContentUrl: string, startSeconds?: number, suggestedQuality?: PlaybackQuality): void;
    (options: {
      mediaContentUrl: string,
      startSeconds?: number,
      endSeconds?: number,
      suggestedQuality?: PlaybackQuality
    }): void;
  };
  loadVideoByUrl: {
    (mediaContentUrl: string, startSeconds?: number, suggestedQuality?: PlaybackQuality): void;
    (options: {
      mediaContentUrl: string,
      startSeconds?: number,
      endSeconds?: number,
      suggestedQuality?: PlaybackQuality
    }): void;
  };
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  clearVideo: () => void;
  /** @deprecated */
  getVideoBytesLoaded: () => number;
  /** @deprecated */
  getVideoBytesTotal: () => number;
  getVideoLoadedFraction: () => number;
  /** @deprecated */
  getVideoStartBytes: () => number;
  cuePlaylist: {
    (playlist: string|string[], index?: number, startSeconds?: number, suggestedQuality?: PlaybackQuality): void;
    (options: {
      listType?: 'playlist'|'search'|'user_uploads',
      list: string,
      index?: number,
      startSeconds?: number,
      suggestedQuality?: PlaybackQuality
    }): void;
  };
  loadPlaylist: {
    (playlist: string|string[], index?: number, startSeconds?: number, suggestedQuality?: PlaybackQuality): void;
    (options: {
      listType?: 'playlist'|'search'|'user_uploads',
      list: string,
      index?: number,
      startSeconds?: number,
      suggestedQuality?: PlaybackQuality
    }): void;
  };
  nextVideo: () => void;
  previousVideo: () => void;
  playVideoAt: (time: number) => void;
  setShuffle: (shuffle: boolean) => void;
  setLoop: (loop: boolean) => void;
  getPlaylist: () => string[];
  getPlaylistIndex: () => number;
  getPlaylistId: Function;
  loadModule: Function;
  unloadModule: Function;
  setOption: Function;
  getOption: Function;
  getOptions: Function;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  seekTo: (time: number, allowSeekAhead?: boolean) => void;
  getPlayerState: () => PlayerState;
  getPlaybackRate: () => number;
  setPlaybackRate: (rate: number) => void;
  getAvailablePlaybackRates: () => number[];
  getPlaybackQuality: () => PlaybackQuality;
  setPlaybackQuality: (quality: PlaybackQuality) => void;
  getAvailableQualityLevels: () => PlaybackQuality[];
  getCurrentTime: () => number;
  getDuration: () => number;
  addEventListener: (type: string, fn: Function|string) => void;
  removeEventListener: (type: string, fn: Function|string) => void;
  getVideoUrl: () => string;
  getDebugText: () => string;
  getVideoEmbedCode: () => string;
  getVideoData: () => any;
  addCueRange: (id: string, start: number, end: number) => boolean;
  removeCueRange: (id: string) => boolean;
  setSize: (width: number, height: number) => void;
  getApiInterface: () => PlayerApi;
  destroy: () => void;
  showVideoInfo: () => void;
  hideVideoInfo: () => void;
  getMediaReferenceTime: () => number;
  getPresentingPlayerType: () => number;
  addInfoCardXml: Function;
  cueVideoByPlayerVars: Function;
  loadVideoByPlayerVars: (playerVars: PlayerData) => void;
  preloadVideoByPlayerVars: Function;
  seekBy: (seconds: number) => void;
  updatePlaylist: Function;
  updateLastActiveTime: Function;
  updateVideoData: Function;
  getPlayerResponse: Function;
  getStoryboardFormat: () => string;
  getProgressState: Function;
  getHousebrandProperties: Function;
  setPlaybackQualityRange: (start: PlaybackQuality, end: PlaybackQuality) => void;
  getCurrentPlaylistSequence: Function;
  canPlayType: (mediaType: string) => boolean;
  sendVideoStatsEngageEvent: Function;
  setCardsVisible: Function;
  handleGlobalKeyDown: Function;
  getAudioTrack: Function;
  setAudioTrack: Function;
  getAvailableAudioTracks: Function;
  getMaxPlaybackQuality: () => PlaybackQuality;
  setSizeStyle: Function;
  forceFrescaUpdate: Function;
  setAutonav: Function;
  setAutonavState: (state: AutoNavigationState) => void;
  showControls: Function;
  hideControls: Function;
  getVisibilityState: () => number;
  shouldSendVisibilityState: Function;
  getVideoContentRect: () => { left: number, top: number, width: number, height: number };
  setSafetyMode: Function;
  setFauxFullscreen: (fauxFullscreen: boolean) => void;
  cancelPlayback: () => void;
  getVideoStats: Function;
  updateSubtitlesUserSettings: Function;
  getSubtitlesUserSettings: Function;
  resetSubtitlesUserSettings: Function;
  isFastLoad: () => boolean;
  isPeggedToLive: () => boolean;
  setMinimized: (minimized: boolean) => void;
  getSphericalConfig: Function;
  setSphericalConfig: Function;
  setBlackout: Function;
  onAdUxClicked: Function;
  getPlayerSize: () => { width: number, height: number };
  setGlobalCrop: Function;
  wakeUpControls: Function;
  isMutedByMutedAutoplay: () => boolean;
}