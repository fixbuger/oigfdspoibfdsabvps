/*!
   JW Player version 8.4.2
   Copyright (c) 2018, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.4.2/notice.txt
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[14],{127:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(0),r=a(6),s=function(e){var t=this,a=window.chrome.cast,i=a.media,s=window.cast.framework,c=s.CastContext.getInstance(),d=null,o=s.CastContextEventType.CAST_STATE_CHANGED,u=e||i.DEFAULT_MEDIA_RECEIVER_APP_ID;function l(e,a,r){var s=e.allSources.slice(0).sort(function(e,t){return!e.default&&t.default?1:0}),c=Object(n.l)(s,function(e){var t=!Object(n.G)(e.mediaTypes)||!Object(n.e)(e.mediaTypes,'video/webm; codecs="vp9"'),a=!Object(n.G)(e.drm)||Object(n.b)(e.drm,function(e,t){return"fairplay"!==t});return t&&a});if(c){var d=function(e){switch(e){case"mp4":case"webm":return"video/"+e;case"mpd":case"dash":return"application/dash+xml";case"m3u8":case"hls":return"application/x-mpegURL";case"aac":return"audio/x-aac";case"mp3":return"audio/mpeg";default:return e}}(c.type),o=f(c.file),u=e.image?f(e.image):null,l=c.drm,v=new i.MediaInfo(o,d);return v.metadata=new i.GenericMediaMetadata,v.metadata.title=e.title,v.metadata.subtitle=e.description,v.metadata.index=a||0,v.metadata.playerId=t.getPlayerId(),e.tracks&&e.tracks.length&&(v.tracks=e.tracks.map(function(e,t){var a=t+1,n=new i.Track(a,i.TrackType.TEXT);return n.trackContentId=e.file,n.trackContentType="text/vtt",n.subtype=i.TextTrackType.SUBTITLES,n.name=e.label||a,n.language="en-US",n.customData="side-loaded captions",n})),r&&(v.textTrackStyle=t.obtainTrackStyles(r)),u&&(v.metadata.images=[{url:u}]),l&&(v.customData={drm:l}),v}}function f(e){var t=document.createElement("a");return t.href=e,t.href}function v(){var e=c.getCastState()!==s.CastState.NO_DEVICES_AVAILABLE,a="";(d=c.getCurrentSession())&&(a=d.getCastDevice().friendlyName||a),t.trigger("castState",{available:e,active:!!d,deviceName:a})}function T(){var e=t.getMedia();e&&t.trigger("mediaUpdate",{field:"media",value:e})}Object(n.j)(t,r.a),c.removeEventListener(o,v),c.addEventListener(o,v),c.setOptions({receiverApplicationId:u,autoJoinPolicy:a.AutoJoinPolicy.ORIGIN_SCOPED}),t.updateCastState=v,t.setPlaylist=function(e){var a=e.get("playlist"),n=e.get("item"),r=e.mediaModel.get("position"),s=e.get("repeat"),c=e.get("captions"),o=void 0,u=[],f=1;"complete"===e.get("state")&&(n=0,r=0);for(var v=n;v<a.length;v++){var T=l(a[v],v,c),h=void 0;if(T){h=new i.QueueItem(T),T.metadata.index===n&&(h.startTime=r);var m=JSON.stringify(h).length+1;if(!(f+m<32e3))break;u.push(h),f+=m}}(o=new i.QueueLoadRequest(u)).startIndex=0,s&&(o.repeatMode=i.RepeatMode.ALL),d.getSessionObj().queueLoad(o,t.loaded,t.error)},t.getPlayerId=function(){var e=t.getMedia();return e&&e.media?e.media.metadata.playerId:d?d.getSessionObj().playerId:null},t.setPlayerId=function(e){d&&(d.getSessionObj().playerId=e)},t.loaded=function(e){(t.trigger("mediaUpdate",{field:"volume",value:{volume:d.getVolume(),isMute:d.isMute()}}),d)&&d.getSessionObj().addMediaListener(function(e){e.addUpdateListener(T)});e.addUpdateListener(T),t.play()},t.addListeners=function(){if(!d)return null;d.getSessionObj().addUpdateListener(v),d.addEventListener(s.SessionEventType.VOLUME_CHANGED,function(e){t.trigger("mediaUpdate",{field:"volume",value:e})})},t.reset=function(){t.removeListeners(),c&&c.removeEventListener(o,v)},t.removeListeners=function(){var e=void 0;if(!d)return null;(e=d.getSessionObj()).removeUpdateListener(v),e.media.forEach(function(e){e.removeUpdateListener(T)}),d.removeEventListener(s.SessionEventType.VOLUME_CHANGED)},t.getMedia=function(){if(d){var e=d.getSessionObj().media;if(e&&e.length)return e[0]}return null},t.error=function(e){console.error("Error:",e),t.disconnect()},t.item=function(e){var a=t.getMedia();if(a){var i=l(e),r=Object(n.l)(a.items,function(e){return e.media.contentId===i.contentId&&e.media.index===i.index});r?a.queueJumpToItem(r.itemId):t.trigger("setPlaylist")}else t.trigger("setPlaylist")},t.play=function(){t.getMedia()&&t.getMedia().play()},t.pause=function(){t.getMedia().pause()},t.next=function(){t.getMedia().queueNext()},t.disconnect=function(){d.endSession(!0)},t.seek=function(e,a){var n=new i.SeekRequest;n.currentTime=e,n.resumeState=i.ResumeState.PLAYBACK_START,t.getMedia().seek(n,a)},t.mute=function(e){d.setMute(e)},t.volume=function(e){d.setVolume(e/100)},t.editTracksInfo=function(e,a){var n=t.getMedia();if(n){var r=new i.EditTracksInfoRequest(e,a);n.editTracksInfo(r)}},t.extractEmbeddedCaptions=function(){var e=t.getMedia();if(e&&e.media.tracks){var a=e.media.tracks.filter(function(e){return"TEXT"===e.type&&"side-loaded captions"!==e.customData}).map(function(e,t){return e.mapId=t,e.kind="subtitles",e.cues=[],e});a.length&&t.trigger("mediaUpdate",{field:"captions",value:{tracks:a}})}},t.obtainTrackStyles=function(e){var t=function(e){return Math.round(e/100*255).toString(16)},a=new i.TextTrackStyle;return a.foregroundColor=e.color+t(e.fontOpacity),a.backgroundColor=e.backgroundColor+t(e.backgroundOpacity),a.windowColor=e.windowColor+t(e.windowOpacity),a.fontFamily=e.fontFamily,a.fontStyle=i.TextTrackFontStyle.NORMAL,a.fontScale=e.fontSize/14,a.edgeType=function(e){var t=i.TextTrackEdgeType;switch(e){case"dropshadow":return t.DROP_SHADOW;case"raised":return t.RAISED;case"depressed":return t.DEPRESSED;case"uniform":return t.OUTLINE;default:return t.NONE}}(e.edgeStyle),a.windowType=i.TextTrackWindowType.NORMAL,a}},c=function(){return'<div class="jw-cast jw-reset jw-preview"><div class="jw-cast-container"><div class="jw-cast-text jw-reset">'+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+"</div></div></div>"},d=a(9),o=a(52),u=a(71);var l=function(){var e=this,t=void 0,a=void 0,n=void 0;function r(e){if(a){var t=Array.prototype.slice.call(arguments,1);a[e]&&a[e].apply(a,t)}}function s(e){if(a){var t=a.getMedia();return t?"currentTime"===e?t.getEstimatedTime():t[e]||t.media&&t.media[e]:null}}e.destroy=function(){clearInterval(e.timeInterval)},e.setService=function(t){a=t,e.updateScreen()},e.setup=function(t){e.setState(i.Ia),r("setup",t)},e.init=function(e){n!==e&&(n=e,r("item",e))},e.load=function(t){e.init(t),e.play()},e.play=function(){r("play")},e.pause=function(){r("pause")},e.seek=function(t){e.trigger(i.O,{position:s("currentTime"),offset:t}),r("seek",t,function(){e.trigger(i.P)})},e.next=function(e){r("next",e)},e.volume=function(e){r("volume",e)},e.mute=function(e){r("mute",e)},e.setSubtitlesTrack=function(e){e>0&&a.editTracksInfo([e+function(){var e=0,t=a.getMedia();if(!t)return e;var i=t.media.tracks;if(!i)return e;for(var n=0;n<i.length;n++){var r=i[n];if("TEXT"===r.type){e=n;break}}return e}()])},e.updateScreen=function(e,a){t.innerHTML=function(e,t){var a=Object(d.e)(c(e));return t&&(a.style.backgroundImage='url("'+t+'")'),a}(e,a).outerHTML},e.setContainer=function(e){t=e},e.getContainer=function(){return t},e.remove=function(){clearInterval(e.timeInterval)},e.getDuration=function(){return s("duration")||1/0},e.stop=function(){e.clearTracks()},e.castEventHandlers={media:function(t){var i=s("items"),n="IDLE"===t.playerState&&"FINISHED"===t.idleReason,r="IDLE"===t.playerState&&"ERROR"===t.idleReason,c=n&&!i;e.castEventHandlers.playerState(c?"complete":t.playerState),e.castEventHandlers.currentTime(),clearInterval(e.timeInterval),"PLAYING"===t.playerState?e.timeInterval=setInterval(e.castEventHandlers.currentTime,100):c?(e.setState("complete"),a.disconnect()):r&&(e.setState("error"),a.disconnect())},volume:function(t){e.trigger("volume",{volume:Math.round(100*t.volume)}),e.trigger("mute",{mute:t.isMute})},captions:function(t){e.clearTracks(),e.setTextTracks(t.tracks)},playerState:function(t){var a=[i.Ia,i.La,i.Oa,i.Na,i.Pa,i.Ma,i.Ja,i.Ka];if(t&&-1!==a.indexOf(t.toLowerCase())){var n=t.toLowerCase();n!==i.La&&n!==i.Ia||e.trigger(i.C,{bufferPercent:0,currentTime:s("currentTime"),position:s("currentTime"),duration:e.getDuration()}),e.setState(n)}},currentTime:function(){e.trigger(i.Q,{position:s("currentTime"),duration:e.getDuration()})},duration:function(){e.trigger(i.Q,{position:s("currentTime"),duration:e.getDuration()})},isPaused:function(t){t?e.setState(i.Na):e.setState(i.Oa)},supports:function(){return!0}}};Object(n.j)(l.prototype,o.a,r.a,u.a,{getName:function(){return{name:"chromecast"}},getQualityLevels:Object(n.d)(["Auto"])});var f=l,v=a(29),T=a(5),h="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",m=void 0;var k=m||(m=new T.a(function(e,t){window.__onGCastApiAvailable=function(a){a?e(a):t(),delete window.__onGCastApiAvailable},new v.a(h).load().catch(t)})),g={};t.default=function(e,t){var a=g[t.get("id")],r=null;function c(){var e=t.get("cast")||{};t.set("castState",{available:!1,active:!1,deviceName:""}),a&&(a.off(),a.reset()),(a=new s(e.customAppId)).on("castState",m),a.on("mediaUpdate",T),a.on("mediaUpdate",h),a.on("setPlaylist",d),a.updateCastState(),g[t.get("id")]=a}function d(){t.set("state",i.Ia);var e=t.get("playlistItem");r.updateScreen("Connecting",e.image),a.setPlaylist(t)}function o(){var i;t.get("castClicked")&&!a.getPlayerId()&&a.setPlayerId(t.get("id")),p()&&(e.setFullscreen(!1),r=new f(t.get("id"),t.getConfiguration()),e.castVideo(r,t.get("playlistItem")),r.setService(a),a.addListeners(),(i=a.getMedia())?a.loaded(i):d(),t.on("change:playlist",d),t.on("change:itemReady",l),t.change("captions",v))}function u(n){n?o():r&&function(){var n=t.get("state"),s=n===i.Ja,c=n===i.La,o=n===i.Ka,u=t.get("item"),f=t.get("playlist"),v=t.get("playlistItem");if(a.removeListeners(),r&&r.remove(),v&&o&&(void 0===(v=f[u+1])?s=!0:(t.set("item",u+1),t.set("playlistItem",v))),t.set("castActive",!1),t.set("castClicked",!1),e.stopCast(),t.off("change:playlist",d),t.off("change:itemReady",l),v)if(s)e.trigger(i.Aa,{});else if(!c){var T=t.mediaModel;e.playVideo("interaction").catch(function(e){r&&T===t.mediaModel&&r.trigger("error",{message:e.message})})}}()}function l(){a.extractEmbeddedCaptions(),r.setSubtitlesTrack(t.get("captionsIndex"))}function v(e,t){var i=a.getMedia();if(i){var n=a.obtainTrackStyles(t);a.editTracksInfo(i.activeTrackIds,n)}}function T(e){var a=e.field,i=e.value;if(r){"media"===a&&function(e){var a=t.get("playlist"),i=void 0;if(e.media){i=e.media.metadata;var s=a[i.index];Object(n.v)(i.index)&&i.index!==t.get("item")&&(t.attributes.itemReady=!1,t.set("item",i.index),t.set("playlistItem",s),t.set("itemReady",!0));var c=t.get("castState").deviceName,d=c?"Casting to "+c:"";r.updateScreen(d,s.image)}}(i);var s=r.castEventHandlers[a];s&&s(i)}}function h(e){"media"===e.field&&(a.off("mediaUpdate",h),l())}function m(e){var a=t.get("castActive"),i=e.active;a!==i&&u(i),i=i&&p(),t.set("castAvailable",e.available),t.set("castActive",i),t.set("castState",{available:e.available,active:i,deviceName:e.deviceName})}function p(){return a.getPlayerId()===t.get("id")}this.init=function(){return k.then(c)},this.castToggle=function(){}}},67:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return s});var i={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};function n(e,t){for(var a=e.length,i=void 0,n=void 0,r=void 0,s="",c=t||0;c<a;)if(0!==(i=e[c++])&&3!==i)switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(i);break;case 12:case 13:n=e[c++],s+=String.fromCharCode((31&i)<<6|63&n);break;case 14:n=e[c++],r=e[c++],s+=String.fromCharCode((15&i)<<12|(63&n)<<6|(63&r)<<0)}return s}function r(e){var t=function(e){for(var t="0x",a=0;a<e.length;a++)e[a]<16&&(t+="0"),t+=e[a].toString(16);return parseInt(t)}(e);return 127&t|(32512&t)>>1|(8323072&t)>>2|(2130706432&t)>>3}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce(function(e,t){if(!("value"in t)&&"data"in t&&t.data instanceof ArrayBuffer){var a=new Uint8Array(t.data),s=a.length;t={value:{key:"",data:""}};for(var c=10;c<14&&c<a.length&&0!==a[c];)t.value.key+=String.fromCharCode(a[c]),c++;var d=19,o=a[d];3!==o&&0!==o||(o=a[++d],s--);var u=0;if(1!==o&&2!==o)for(var l=d+1;l<s;l++)if(0===a[l]){u=l-d;break}if(u>0){var f=n(a.subarray(d,d+=u),0);if("PRIV"===t.value.key){if("com.apple.streaming.transportStreamTimestamp"===f){var v=1&r(a.subarray(d,d+=4)),T=r(a.subarray(d,d+=4))+(v?4294967296:0);t.value.data=T}else t.value.data=n(a,d+1);t.value.info=f}else t.value.info=f,t.value.data=n(a,d+1)}else{var h=a[d];t.value.data=1===h||2===h?function(e,t){for(var a=e.length-1,i="",n=t||0;n<a;)254===e[n]&&255===e[n+1]||(i+=String.fromCharCode((e[n]<<8)+e[n+1])),n+=2;return i}(a,d+1):n(a,d+1)}}if(i.hasOwnProperty(t.value.key)&&(e[i[t.value.key]]=t.value.data),t.value.info){var m=e[t.value.key];m!==Object(m)&&(m={},e[t.value.key]=m),m[t.value.info]=t.value.data}else e[t.value.key]=t.value.data;return e},{})}},71:function(e,t,a){"use strict";var i=a(60),n=a(62),r=a(67),s=a(7),c=a(3),d=a(0),o={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_activeCuePosition:null,_initTextTracks:function(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._unknownCount=0},addTracksListener:function(e,t,a){if(!e)return;if(u(e,t,a),this.instreamMode)return;e.addEventListener?e.addEventListener(t,a):e["on"+t]=a},clearTracks:function(){Object(i.a)(this._itemTracks);var e=this._tracksById&&this._tracksById.nativemetadata;(this.renderNatively||e)&&(v(this.renderNatively,this.video.textTracks),e&&(e.oncuechange=null));this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._currentTextTrackIndex=-1,this._activeCuePosition=null,this.renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),v(this.renderNatively,this.video.textTracks))},clearCueData:function(e){var t=this._cachedVTTCues;t&&t[e]&&(t[e]={},this._tracksById&&(this._tracksById[e].data=[]))},disableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];if(e){e.mode="disabled";var t=e._id;t&&0===t.indexOf("nativecaptions")&&(e.mode="hidden")}}},enableTextTrack:function(){if(this._textTracks){var e=this._textTracks[this._currentTextTrackIndex];e&&(e.mode="showing")}},getSubtitlesTrack:function(){return this._currentTextTrackIndex},removeTracksListener:u,addTextTracks:l,setTextTracks:function(e){if(this._currentTextTrackIndex=-1,!e)return;this._textTracks?(this._unknownCount=0,this._textTracks=this._textTracks.filter(function(e){var t=e._id;return this.renderNatively&&t&&0===t.indexOf("nativecaptions")?(delete this._tracksById[t],!1):(e.name&&0===e.name.indexOf("Unknown")&&this._unknownCount++,!0)},this),delete this._tracksById.nativemetadata):this._initTextTracks();if(e.length)for(var t=0,a=e.length;t<a;t++){var i=e[t];if(!i._id){if("captions"===i.kind||"metadata"===i.kind){if(i._id="native"+i.kind+t,!i.label&&"captions"===i.kind){var r=Object(n.b)(i,this._unknownCount);i.name=r.label,this._unknownCount=r.unknownCount}}else i._id=Object(n.a)(i,this._textTracks.length);if(this._tracksById[i._id])continue;i.inuse=!0}if(i.inuse&&!this._tracksById[i._id])if("metadata"===i.kind)i.mode="hidden",i.oncuechange=k.bind(this),this._tracksById[i._id]=i;else if(T(i.kind)){var c=i.mode,o=void 0;if(i.mode="hidden",!i.cues.length&&i.embedded)continue;if(i.mode=c,this._cuesByTrackId[i._id]&&!this._cuesByTrackId[i._id].loaded){for(var u=this._cuesByTrackId[i._id].cues;o=u.shift();)f(this.renderNatively,i,o);i.mode=c,this._cuesByTrackId[i._id].loaded=!0}m.call(this,i)}}this.renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||function(){var e=this.video.textTracks,t=Object(d.k)(e,function(e){return(e.inuse||!e._id)&&T(e.kind)});if(!this._textTracks||function(e){if(e.length>this._textTracks.length)return!0;for(var t=0;t<e.length;t++){var a=e[t];if(!a._id||!this._tracksById[a._id])return!0}return!1}.call(this,t))return void this.setTextTracks(e);for(var a=-1,i=0;i<this._textTracks.length;i++)if("showing"===this._textTracks[i].mode){a=i;break}a!==this._currentTextTrackIndex&&this.setSubtitlesTrack(a+1)}.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),(s.Browser.edge||s.Browser.firefox||s.Browser.safari)&&(this.addTrackHandler=this.addTrackHandler||function(){this.setTextTracks(this.video.textTracks)}.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler)));this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})},setupSideloadedTracks:function(e){if(!this.renderNatively)return;var t=e===this._itemTracks;t||Object(i.a)(this._itemTracks);if(this._itemTracks=e,!e)return;t||(this.disableTextTrack(),function(){if(!this._textTracks)return;var e=this._textTracks.filter(function(e){return e.embedded||"subs"===e.groupid});this._initTextTracks(),e.forEach(function(e){this._tracksById[e._id]=e}),this._textTracks=e}.call(this),this.addTextTracks(e))},setSubtitlesTrack:function(e){if(!this.renderNatively)return void(this.setCurrentSubtitleTrack&&this.setCurrentSubtitleTrack(e-1));if(!this._textTracks)return;0===e&&this._textTracks.forEach(function(e){e.mode=e.embedded?"hidden":"disabled"});if(this._currentTextTrackIndex===e-1)return;this.disableTextTrack(),this._currentTextTrackIndex=e-1,this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing");this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks})},textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:function(e){var t=this._tracksById[e.name];if(!t)return;t.source=e.source;for(var a=e.captions||[],n=[],r=!1,s=0;s<a.length;s++){var c=a[s],d=e.name+"_"+c.begin+"_"+c.end;this._metaCuesByTextTime[d]||(this._metaCuesByTextTime[d]=c,n.push(c),r=!0)}r&&n.sort(function(e,t){return e.begin-t.begin});var o=Object(i.b)(n);Array.prototype.push.apply(t.data,o)},addCaptionsCue:function(e){if(!e.text||!e.begin||!e.end)return;var t=e.trackid.toString(),a=this._tracksById&&this._tracksById[t];a||(a={kind:"captions",_id:t,data:[]},this.addTextTracks([a]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));var n=void 0;e.useDTS&&(a.source||(a.source=e.source||"mpegts"));n=e.begin+"_"+e.text;var r=this._metaCuesByTextTime[n];if(!r){r={begin:e.begin,end:e.end,text:e.text},this._metaCuesByTextTime[n]=r;var s=Object(i.b)([r])[0];a.data.push(s)}},addVTTCue:function(e){this._tracksById||this._initTextTracks();var t=e.track?e.track:"native"+e.type,a=this._tracksById[t],i="captions"===e.type?"Unknown CC":"ID3 Metadata",n=e.cue;if(!a){var r={kind:e.type,_id:t,label:i,embedded:!0};a=h.call(this,r),this.renderNatively||"metadata"===a.kind?this.setTextTracks(this.video.textTracks):l.call(this,[a])}(function(e,t){var a=e.kind;this._cachedVTTCues[e._id]||(this._cachedVTTCues[e._id]={});var i=this._cachedVTTCues[e._id],n=void 0;switch(a){case"captions":case"subtitles":n=Math.floor(20*t.startTime);var r="_"+t.line,s=Math.floor(20*t.endTime),c=i[n+r]||i[n+1+r]||i[n-1+r];return!(c&&Math.abs(c-s)<=1)&&(i[n+r]=s,!0);case"metadata":var d=t.data?new Uint8Array(t.data).join(""):t.text;return n=t.startTime+d,i[n]?!1:(i[n]=t.endTime,!0);default:return!1}}).call(this,a,n)&&(this.renderNatively||"metadata"===a.kind?f(this.renderNatively,a,n):a.data.push(n))},addVTTCuesToTrack:function(e,t){if(!this.renderNatively)return;var a=this._tracksById[e._id];if(!a)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[e._id]={cues:t,loaded:!1});if(this._cuesByTrackId[e._id]&&this._cuesByTrackId[e._id].loaded)return;var i=void 0;this._cuesByTrackId[e._id]={cues:t,loaded:!0};for(;i=t.shift();)f(this.renderNatively,a,i)},renderNatively:!1};function u(e,t,a){e&&(e.removeEventListener?e.removeEventListener(t,a):e["on"+t]=null)}function l(e){var t=this;e&&(this._textTracks||this._initTextTracks(),e.forEach(function(e){if(!e.kind||T(e.kind)){var a=h.call(t,e);m.call(t,a),e.file&&(e.data=[],Object(i.c)(e,function(e){t.addVTTCuesToTrack(a,e)},function(e){t.trigger(c.w,{message:"Captions failed to load",reason:e})}))}}),this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks}))}function f(e,t,a){if(s.Browser.ie&&e&&window.TextTrackCue){var i=new window.TextTrackCue(a.startTime,a.endTime,a.text);t.addCue(i)}else t.addCue(a)}function v(e,t){t&&t.length&&Object(d.i)(t,function(t){if(!(s.Browser.ie&&e&&/^(native|subtitle|cc)/.test(t._id))){t.mode="disabled",t.mode="hidden";for(var a=t.cues.length;a--;)t.removeCue(t.cues[a]);t.embedded||(t.mode="disabled"),t.inuse=!1}})}function T(e){return"subtitles"===e||"captions"===e}function h(e){var t=void 0,a=Object(n.b)(e,this._unknownCount),i=a.label;if(this._unknownCount=a.unknownCount,this.renderNatively||"metadata"===e.kind){var r=this.video.textTracks;(t=Object(d.m)(r,{label:i}))||(t=this.video.addTextTrack(e.kind,i,e.language||"")),t.default=e.default,t.mode="disabled",t.inuse=!0}else(t=e).data=t.data||[];return t._id||(t._id=Object(n.a)(e,this._textTracks.length)),t}function m(e){this._textTracks.push(e),this._tracksById[e._id]=e}function k(e){var t=e.currentTarget.activeCues;if(t&&t.length){var a=t[t.length-1].startTime;if(this._activeCuePosition!==a){var i=[];if(Object(d.i)(t,function(e){e.startTime<a||(e.data||e.value?i.push(e):e.text&&this.trigger("meta",{metadataTime:a,metadata:JSON.parse(e.text)}))},this),i.length){var n=Object(r.a)(i);this.trigger("meta",{metadataTime:a,metadata:n})}this._activeCuePosition=a}}}t.a=o}}]);