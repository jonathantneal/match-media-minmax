var matchMedia=function(){function matchMedia(t){return a(String(t).replace(/(?:([-+]?[0-9]*\.?[0-9]+)(%|\w+)\s*(<|>)(=)?(\s*))?(aspect-ratio|color|height|monochrome|resolution|width)(?:\s*(<|>)(=)?(\s*)([-+]?[0-9]*\.?[0-9]+)(%|\w+))?/g,function(a,t,i,r,e,n,o,c,m,d,h,s){if(!t&&!h)return a;var u="";return t&&(u+=("<"===r?"min":"max")+"-"+o+":"+n+(e?t:parseFloat(t)+("<"===r?1:-1))+i),i&&h&&(u+=") and ("),h&&(u+=("<"===c?"max":"min")+"-"+o+":"+d+(m?h:parseFloat(h)+("<"===c?-1:1))+s),u}))}var a=window.matchMedia;return matchMedia}();window.matchMedia=matchMedia;
//# sourceMappingURL=match-media-range.es5.js.map
