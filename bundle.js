


!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.msgpack=t()}}(function(){return function t(r,e,n){function i(f,u){if(!e[f]){if(!r[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(o)return o(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var c=e[f]={exports:{}};r[f][0].call(c.exports,function(t){var e=r[f][1][t];return i(e?e:t)},c,c.exports,t,r,e,n)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<n.length;f++)i(n[f]);return i}({1:[function(t,r,e){e.encode=t("./encode").encode,e.decode=t("./decode").decode,e.Encoder=t("./encoder").Encoder,e.Decoder=t("./decoder").Decoder,e.createCodec=t("./ext").createCodec,e.codec=t("./codec").codec},{"./codec":10,"./decode":12,"./decoder":13,"./encode":15,"./encoder":16,"./ext":20}],2:[function(t,r,e){(function(Buffer){function t(t){return t&&t.isBuffer&&t}r.exports=t("undefined"!=typeof Buffer&&Buffer)||t(this.Buffer)||t("undefined"!=typeof window&&window.Buffer)||this.Buffer}).call(this,t("buffer").Buffer)},{buffer:29}],3:[function(t,r,e){function n(t,r){for(var e=this,n=r||(r|=0),i=t.length,o=0,f=0;f<i;)o=t.charCodeAt(f++),o<128?e[n++]=o:o<2048?(e[n++]=192|o>>>6,e[n++]=128|63&o):o<55296||o>57343?(e[n++]=224|o>>>12,e[n++]=128|o>>>6&63,e[n++]=128|63&o):(o=(o-55296<<10|t.charCodeAt(f++)-56320)+65536,e[n++]=240|o>>>18,e[n++]=128|o>>>12&63,e[n++]=128|o>>>6&63,e[n++]=128|63&o);return n-r}function i(t,r,e){var n=this,i=0|r;e||(e=n.length);for(var o="",f=0;i<e;)f=n[i++],f<128?o+=String.fromCharCode(f):(192===(224&f)?f=(31&f)<<6|63&n[i++]:224===(240&f)?f=(15&f)<<12|(63&n[i++])<<6|63&n[i++]:240===(248&f)&&(f=(7&f)<<18|(63&n[i++])<<12|(63&n[i++])<<6|63&n[i++]),f>=65536?(f-=65536,o+=String.fromCharCode((f>>>10)+55296,(1023&f)+56320)):o+=String.fromCharCode(f));return o}function o(t,r,e,n){var i;e||(e=0),n||0===n||(n=this.length),r||(r=0);var o=n-e;if(t===this&&e<r&&r<n)for(i=o-1;i>=0;i--)t[i+r]=this[i+e];else for(i=0;i<o;i++)t[i+r]=this[i+e];return o}e.copy=o,e.toString=i,e.write=n},{}],4:[function(t,r,e){function n(t){return new Array(t)}function i(t){if(!o.isBuffer(t)&&o.isView(t))t=o.Uint8Array.from(t);else if(o.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}var o=t("./bufferish"),e=r.exports=n(0);e.alloc=n,e.concat=o.concat,e.from=i},{"./bufferish":8}],5:[function(t,r,e){function n(t){return new Buffer(t)}function i(t){if(!o.isBuffer(t)&&o.isView(t))t=o.Uint8Array.from(t);else if(o.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Buffer.from&&1!==Buffer.from.length?Buffer.from(t):new Buffer(t)}var o=t("./bufferish"),Buffer=o.global,e=r.exports=o.hasBuffer?n(0):[];e.alloc=o.hasBuffer&&Buffer.alloc||n,e.concat=o.concat,e.from=i},{"./bufferish":8}],6:[function(t,r,e){function n(t,r,e,n){var o=a.isBuffer(this),f=a.isBuffer(t);if(o&&f)return this.copy(t,r,e,n);if(c||o||f||!a.isView(this)||!a.isView(t))return u.copy.call(this,t,r,e,n);var s=e||null!=n?i.call(this,e,n):this;return t.set(s,r),s.length}function i(t,r){var e=this.slice||!c&&this.subarray;if(e)return e.call(this,t,r);var i=a.alloc.call(this,r-t);return n.call(this,i,0,t,r),i}function o(t,r,e){var n=!s&&a.isBuffer(this)?this.toString:u.toString;return n.apply(this,arguments)}function f(t){function r(){var r=this[t]||u[t];return r.apply(this,arguments)}return r}var u=t("./buffer-lite");e.copy=n,e.slice=i,e.toString=o,e.write=f("write");var a=t("./bufferish"),Buffer=a.global,s=a.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Buffer,c=s&&!Buffer.TYPED_ARRAY_SUPPORT},{"./buffer-lite":3,"./bufferish":8}],7:[function(t,r,e){function n(t){return new Uint8Array(t)}function i(t){if(o.isView(t)){var r=t.byteOffset,n=t.byteLength;t=t.buffer,t.byteLength!==n&&(t.slice?t=t.slice(r,r+n):(t=new Uint8Array(t),t.byteLength!==n&&(t=Array.prototype.slice.call(t,r,r+n))))}else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}var o=t("./bufferish"),e=r.exports=o.hasArrayBuffer?n(0):[];e.alloc=n,e.concat=o.concat,e.from=i},{"./bufferish":8}],8:[function(t,r,e){function n(t){return"string"==typeof t?u.call(this,t):a(this).from(t)}function i(t){return a(this).alloc(t)}function o(t,r){function n(t){r+=t.length}function o(t){a+=w.copy.call(t,u,a)}r||(r=0,Array.prototype.forEach.call(t,n));var f=this!==e&&this||t[0],u=i.call(f,r),a=0;return Array.prototype.forEach.call(t,o),u}function f(t){return t instanceof ArrayBuffer||E(t)}function u(t){var r=3*t.length,e=i.call(this,r),n=w.write.call(e,t);return r!==n&&(e=w.slice.call(e,0,n)),e}function a(t){return d(t)?g:y(t)?b:p(t)?v:h?g:l?b:v}function s(){return!1}function c(t,r){return t="[object "+t+"]",function(e){return null!=e&&{}.toString.call(r?e[r]:e)===t}}var Buffer=e.global=t("./buffer-global"),h=e.hasBuffer=Buffer&&!!Buffer.isBuffer,l=e.hasArrayBuffer="undefined"!=typeof ArrayBuffer,p=e.isArray=t("isarray");e.isArrayBuffer=l?f:s;var d=e.isBuffer=h?Buffer.isBuffer:s,y=e.isView=l?ArrayBuffer.isView||c("ArrayBuffer","buffer"):s;e.alloc=i,e.concat=o,e.from=n;var v=e.Array=t("./bufferish-array"),g=e.Buffer=t("./bufferish-buffer"),b=e.Uint8Array=t("./bufferish-uint8array"),w=e.prototype=t("./bufferish-proto"),E=c("ArrayBuffer")},{"./buffer-global":2,"./bufferish-array":4,"./bufferish-buffer":5,"./bufferish-proto":6,"./bufferish-uint8array":7,isarray:34}],9:[function(t,r,e){function n(t){return this instanceof n?(this.options=t,void this.init()):new n(t)}function i(t){for(var r in t)n.prototype[r]=o(n.prototype[r],t[r])}function o(t,r){function e(){return t.apply(this,arguments),r.apply(this,arguments)}return t&&r?e:t||r}function f(t){function r(t,r){return r(t)}return t=t.slice(),function(e){return t.reduce(r,e)}}function u(t){return s(t)?f(t):t}function a(t){return new n(t)}var s=t("isarray");e.createCodec=a,e.install=i,e.filter=u;var c=t("./bufferish");n.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=c.Uint8Array),this},e.preset=a({preset:!0})},{"./bufferish":8,isarray:34}],10:[function(t,r,e){t("./read-core"),t("./write-core"),e.codec={preset:t("./codec-base").preset}},{"./codec-base":9,"./read-core":22,"./write-core":25}],11:[function(t,r,e){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var r=this.codec=t.codec;r.bufferish&&(this.bufferish=r.bufferish)}}e.DecodeBuffer=n;var i=t("./read-core").preset,o=t("./flex-buffer").FlexDecoder;o.mixin(n.prototype),n.prototype.codec=i,n.prototype.fetch=function(){return this.codec.decode(this)}},{"./flex-buffer":21,"./read-core":22}],12:[function(t,r,e){function n(t,r){var e=new i(r);return e.write(t),e.read()}e.decode=n;var i=t("./decode-buffer").DecodeBuffer},{"./decode-buffer":11}],13:[function(t,r,e){function n(t){return this instanceof n?void o.call(this,t):new n(t)}e.Decoder=n;var i=t("event-lite"),o=t("./decode-buffer").DecodeBuffer;n.prototype=new o,i.mixin(n.prototype),n.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()},n.prototype.push=function(t){this.emit("data",t)},n.prototype.end=function(t){this.decode(t),this.emit("end")}},{"./decode-buffer":11,"event-lite":31}],14:[function(t,r,e){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var r=this.codec=t.codec;r.bufferish&&(this.bufferish=r.bufferish)}}e.EncodeBuffer=n;var i=t("./write-core").preset,o=t("./flex-buffer").FlexEncoder;o.mixin(n.prototype),n.prototype.codec=i,n.prototype.write=function(t){this.codec.encode(this,t)}},{"./flex-buffer":21,"./write-core":25}],15:[function(t,r,e){function n(t,r){var e=new i(r);return e.write(t),e.read()}e.encode=n;var i=t("./encode-buffer").EncodeBuffer},{"./encode-buffer":14}],16:[function(t,r,e){function n(t){return this instanceof n?void o.call(this,t):new n(t)}e.Encoder=n;var i=t("event-lite"),o=t("./encode-buffer").EncodeBuffer;n.prototype=new o,i.mixin(n.prototype),n.prototype.encode=function(t){this.write(t),this.emit("data",this.read())},n.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")}},{"./encode-buffer":14,"event-lite":31}],17:[function(t,r,e){function n(t,r){return this instanceof n?(this.buffer=i.from(t),void(this.type=r)):new n(t,r)}e.ExtBuffer=n;var i=t("./bufferish")},{"./bufferish":8}],18:[function(t,r,e){function n(t){t.addExtPacker(14,Error,[u,i]),t.addExtPacker(1,EvalError,[u,i]),t.addExtPacker(2,RangeError,[u,i]),t.addExtPacker(3,ReferenceError,[u,i]),t.addExtPacker(4,SyntaxError,[u,i]),t.addExtPacker(5,TypeError,[u,i]),t.addExtPacker(6,URIError,[u,i]),t.addExtPacker(10,RegExp,[f,i]),t.addExtPacker(11,Boolean,[o,i]),t.addExtPacker(12,String,[o,i]),t.addExtPacker(13,Date,[Number,i]),t.addExtPacker(15,Number,[o,i]),"undefined"!=typeof Uint8Array&&(t.addExtPacker(17,Int8Array,c),t.addExtPacker(18,Uint8Array,c),t.addExtPacker(19,Int16Array,c),t.addExtPacker(20,Uint16Array,c),t.addExtPacker(21,Int32Array,c),t.addExtPacker(22,Uint32Array,c),t.addExtPacker(23,Float32Array,c),"undefined"!=typeof Float64Array&&t.addExtPacker(24,Float64Array,c),"undefined"!=typeof Uint8ClampedArray&&t.addExtPacker(25,Uint8ClampedArray,c),t.addExtPacker(26,ArrayBuffer,c),t.addExtPacker(29,DataView,c)),s.hasBuffer&&t.addExtPacker(27,Buffer,s.from)}function i(r){return a||(a=t("./encode").encode),a(r)}function o(t){return t.valueOf()}function f(t){t=RegExp.prototype.toString.call(t).split("/"),t.shift();var r=[t.pop()];return r.unshift(t.join("/")),r}function u(t){var r={};for(var e in h)r[e]=t[e];return r}e.setExtPackers=n;var a,s=t("./bufferish"),Buffer=s.global,c=s.Uint8Array.from,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./encode":15}],19:[function(t,r,e){function n(t){t.addExtUnpacker(14,[i,f(Error)]),t.addExtUnpacker(1,[i,f(EvalError)]),t.addExtUnpacker(2,[i,f(RangeError)]),t.addExtUnpacker(3,[i,f(ReferenceError)]),t.addExtUnpacker(4,[i,f(SyntaxError)]),t.addExtUnpacker(5,[i,f(TypeError)]),t.addExtUnpacker(6,[i,f(URIError)]),t.addExtUnpacker(10,[i,o]),t.addExtUnpacker(11,[i,u(Boolean)]),t.addExtUnpacker(12,[i,u(String)]),t.addExtUnpacker(13,[i,u(Date)]),t.addExtUnpacker(15,[i,u(Number)]),"undefined"!=typeof Uint8Array&&(t.addExtUnpacker(17,u(Int8Array)),t.addExtUnpacker(18,u(Uint8Array)),t.addExtUnpacker(19,[a,u(Int16Array)]),t.addExtUnpacker(20,[a,u(Uint16Array)]),t.addExtUnpacker(21,[a,u(Int32Array)]),t.addExtUnpacker(22,[a,u(Uint32Array)]),t.addExtUnpacker(23,[a,u(Float32Array)]),"undefined"!=typeof Float64Array&&t.addExtUnpacker(24,[a,u(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&t.addExtUnpacker(25,u(Uint8ClampedArray)),t.addExtUnpacker(26,a),t.addExtUnpacker(29,[a,u(DataView)])),c.hasBuffer&&t.addExtUnpacker(27,u(Buffer))}function i(r){return s||(s=t("./decode").decode),s(r)}function o(t){return RegExp.apply(null,t)}function f(t){return function(r){var e=new t;for(var n in h)e[n]=r[n];return e}}function u(t){return function(r){return new t(r)}}function a(t){return new Uint8Array(t).buffer}e.setExtUnpackers=n;var s,c=t("./bufferish"),Buffer=c.global,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./decode":12}],20:[function(t,r,e){t("./read-core"),t("./write-core"),e.createCodec=t("./codec-base").createCodec},{"./codec-base":9,"./read-core":22,"./write-core":25}],21:[function(t,r,e){function n(){if(!(this instanceof n))return new n}function i(){if(!(this instanceof i))return new i}function o(){function t(t){var r=this.offset?p.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=r?t?this.bufferish.concat([r,t]):r:t,this.offset=0}function r(){for(;this.offset<this.buffer.length;){var t,r=this.offset;try{t=this.fetch()}catch(t){if(t&&t.message!=v)throw t;this.offset=r;break}this.push(t)}}function e(t){var r=this.offset,e=r+t;if(e>this.buffer.length)throw new Error(v);return this.offset=e,r}return{bufferish:p,write:t,fetch:a,flush:r,push:c,pull:h,read:s,reserve:e,offset:0}}function f(){function t(){var t=this.start;if(t<this.offset){var r=this.start=this.offset;return p.prototype.slice.call(this.buffer,t,r)}}function r(){for(;this.start<this.offset;){var t=this.fetch();t&&this.push(t)}}function e(){var t=this.buffers||(this.buffers=[]),r=t.length>1?this.bufferish.concat(t):t[0];return t.length=0,r}function n(t){var r=0|t;if(this.buffer){var e=this.buffer.length,n=0|this.offset,i=n+r;if(i<e)return this.offset=i,n;this.flush(),t=Math.max(t,Math.min(2*e,this.maxBufferSize))}return t=Math.max(t,this.minBufferSize),this.buffer=this.bufferish.alloc(t),this.start=0,this.offset=r,0}function i(t){var r=t.length;if(r>this.minBufferSize)this.flush(),this.push(t);else{var e=this.reserve(r);p.prototype.copy.call(t,this.buffer,e)}}return{bufferish:p,write:u,fetch:t,flush:r,push:c,pull:e,read:s,reserve:n,send:i,maxBufferSize:y,minBufferSize:d,offset:0,start:0}}function u(){throw new Error("method not implemented: write()")}function a(){throw new Error("method not implemented: fetch()")}function s(){var t=this.buffers&&this.buffers.length;return t?(this.flush(),this.pull()):this.fetch()}function c(t){var r=this.buffers||(this.buffers=[]);r.push(t)}function h(){var t=this.buffers||(this.buffers=[]);return t.shift()}function l(t){function r(r){for(var e in t)r[e]=t[e];return r}return r}e.FlexDecoder=n,e.FlexEncoder=i;var p=t("./bufferish"),d=2048,y=65536,v="BUFFER_SHORTAGE";n.mixin=l(o()),n.mixin(n.prototype),i.mixin=l(f()),i.mixin(i.prototype)},{"./bufferish":8}],22:[function(t,r,e){function n(t){function r(t){var r=s(t),n=e[r];if(!n)throw new Error("Invalid type: "+(r?"0x"+r.toString(16):r));return n(t)}var e=c.getReadToken(t);return r}function i(){var t=this.options;return this.decode=n(t),t&&t.preset&&a.setExtUnpackers(this),this}function o(t,r){var e=this.extUnpackers||(this.extUnpackers=[]);e[t]=h.filter(r)}function f(t){function r(r){return new u(r,t)}var e=this.extUnpackers||(this.extUnpackers=[]);return e[t]||r}var u=t("./ext-buffer").ExtBuffer,a=t("./ext-unpacker"),s=t("./read-format").readUint8,c=t("./read-token"),h=t("./codec-base");h.install({addExtUnpacker:o,getExtUnpacker:f,init:i}),e.preset=i.call(h.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-unpacker":19,"./read-format":23,"./read-token":24}],23:[function(t,r,e){function n(t){var r=k.hasArrayBuffer&&t&&t.binarraybuffer,e=t&&t.int64,n=T&&t&&t.usemap,B={map:n?o:i,array:f,str:u,bin:r?s:a,ext:c,uint8:h,uint16:p,uint32:y,uint64:g(8,e?E:b),int8:l,int16:d,int32:v,int64:g(8,e?A:w),float32:g(4,m),float64:g(8,x)};return B}function i(t,r){var e,n={},i=new Array(r),o=new Array(r),f=t.codec.decode;for(e=0;e<r;e++)i[e]=f(t),o[e]=f(t);for(e=0;e<r;e++)n[i[e]]=o[e];return n}function o(t,r){var e,n=new Map,i=new Array(r),o=new Array(r),f=t.codec.decode;for(e=0;e<r;e++)i[e]=f(t),o[e]=f(t);for(e=0;e<r;e++)n.set(i[e],o[e]);return n}function f(t,r){for(var e=new Array(r),n=t.codec.decode,i=0;i<r;i++)e[i]=n(t);return e}function u(t,r){var e=t.reserve(r),n=e+r;return _.toString.call(t.buffer,"utf-8",e,n)}function a(t,r){var e=t.reserve(r),n=e+r,i=_.slice.call(t.buffer,e,n);return k.from(i)}function s(t,r){var e=t.reserve(r),n=e+r,i=_.slice.call(t.buffer,e,n);return k.Uint8Array.from(i).buffer}function c(t,r){var e=t.reserve(r+1),n=t.buffer[e++],i=e+r,o=t.codec.getExtUnpacker(n);if(!o)throw new Error("Invalid ext type: "+(n?"0x"+n.toString(16):n));var f=_.slice.call(t.buffer,e,i);return o(f)}function h(t){var r=t.reserve(1);return t.buffer[r]}function l(t){var r=t.reserve(1),e=t.buffer[r];return 128&e?e-256:e}function p(t){var r=t.reserve(2),e=t.buffer;return e[r++]<<8|e[r]}function d(t){var r=t.reserve(2),e=t.buffer,n=e[r++]<<8|e[r];return 32768&n?n-65536:n}function y(t){var r=t.reserve(4),e=t.buffer;return 16777216*e[r++]+(e[r++]<<16)+(e[r++]<<8)+e[r]}function v(t){var r=t.reserve(4),e=t.buffer;return e[r++]<<24|e[r++]<<16|e[r++]<<8|e[r]}function g(t,r){return function(e){var n=e.reserve(t);return r.call(e.buffer,n,S)}}function b(t){return new P(this,t).toNumber()}function w(t){return new R(this,t).toNumber()}function E(t){return new P(this,t)}function A(t){return new R(this,t)}function m(t){return B.read(this,t,!1,23,4)}function x(t){return B.read(this,t,!1,52,8)}var B=t("ieee754"),U=t("int64-buffer"),P=U.Uint64BE,R=U.Int64BE;e.getReadFormat=n,e.readUint8=h;var k=t("./bufferish"),_=t("./bufferish-proto"),T="undefined"!=typeof Map,S=!0},{"./bufferish":8,"./bufferish-proto":6,ieee754:32,"int64-buffer":33}],24:[function(t,r,e){function n(t){var r=s.getReadFormat(t);return t&&t.useraw?o(r):i(r)}function i(t){var r,e=new Array(256);for(r=0;r<=127;r++)e[r]=f(r);for(r=128;r<=143;r++)e[r]=a(r-128,t.map);for(r=144;r<=159;r++)e[r]=a(r-144,t.array);for(r=160;r<=191;r++)e[r]=a(r-160,t.str);for(e[192]=f(null),e[193]=null,e[194]=f(!1),e[195]=f(!0),e[196]=u(t.uint8,t.bin),e[197]=u(t.uint16,t.bin),e[198]=u(t.uint32,t.bin),e[199]=u(t.uint8,t.ext),e[200]=u(t.uint16,t.ext),e[201]=u(t.uint32,t.ext),e[202]=t.float32,e[203]=t.float64,e[204]=t.uint8,e[205]=t.uint16,e[206]=t.uint32,e[207]=t.uint64,e[208]=t.int8,e[209]=t.int16,e[210]=t.int32,e[211]=t.int64,e[212]=a(1,t.ext),e[213]=a(2,t.ext),e[214]=a(4,t.ext),e[215]=a(8,t.ext),e[216]=a(16,t.ext),e[217]=u(t.uint8,t.str),e[218]=u(t.uint16,t.str),e[219]=u(t.uint32,t.str),e[220]=u(t.uint16,t.array),e[221]=u(t.uint32,t.array),e[222]=u(t.uint16,t.map),e[223]=u(t.uint32,t.map),r=224;r<=255;r++)e[r]=f(r-256);return e}function o(t){var r,e=i(t).slice();for(e[217]=e[196],e[218]=e[197],e[219]=e[198],r=160;r<=191;r++)e[r]=a(r-160,t.bin);return e}function f(t){return function(){return t}}function u(t,r){return function(e){var n=t(e);return r(e,n)}}function a(t,r){return function(e){return r(e,t)}}var s=t("./read-format");e.getReadToken=n},{"./read-format":23}],25:[function(t,r,e){function n(t){function r(t,r){var n=e[typeof r];if(!n)throw new Error('Unsupported type "'+typeof r+'": '+r);n(t,r)}var e=s.getWriteType(t);return r}function i(){var t=this.options;return this.encode=n(t),t&&t.preset&&a.setExtPackers(this),this}function o(t,r,e){function n(r){return e&&(r=e(r)),new u(r,t)}e=c.filter(e);var i=r.name;if(i&&"Object"!==i){var o=this.extPackers||(this.extPackers={});o[i]=n}else{var f=this.extEncoderList||(this.extEncoderList=[]);f.unshift([r,n])}}function f(t){var r=this.extPackers||(this.extPackers={}),e=t.constructor,n=e&&e.name&&r[e.name];if(n)return n;for(var i=this.extEncoderList||(this.extEncoderList=[]),o=i.length,f=0;f<o;f++){var u=i[f];if(e===u[0])return u[1]}}var u=t("./ext-buffer").ExtBuffer,a=t("./ext-packer"),s=t("./write-type"),c=t("./codec-base");c.install({addExtPacker:o,getExtPacker:f,init:i}),e.preset=i.call(c.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-packer":18,"./write-type":27}],26:[function(t,r,e){function n(t){return t&&t.uint8array?i():m||E.hasBuffer&&t&&t.safe?f():o()}function i(){var t=o();return t[202]=c(202,4,p),t[203]=c(203,8,d),t}function o(){var t=w.slice();return t[196]=u(196),t[197]=a(197),t[198]=s(198),t[199]=u(199),t[200]=a(200),t[201]=s(201),t[202]=c(202,4,x.writeFloatBE||p,!0),t[203]=c(203,8,x.writeDoubleBE||d,!0),t[204]=u(204),t[205]=a(205),t[206]=s(206),t[207]=c(207,8,h),t[208]=u(208),t[209]=a(209),t[210]=s(210),t[211]=c(211,8,l),t[217]=u(217),t[218]=a(218),t[219]=s(219),t[220]=a(220),t[221]=s(221),t[222]=a(222),t[223]=s(223),t}function f(){var t=w.slice();return t[196]=c(196,1,Buffer.prototype.writeUInt8),t[197]=c(197,2,Buffer.prototype.writeUInt16BE),t[198]=c(198,4,Buffer.prototype.writeUInt32BE),t[199]=c(199,1,Buffer.prototype.writeUInt8),t[200]=c(200,2,Buffer.prototype.writeUInt16BE),t[201]=c(201,4,Buffer.prototype.writeUInt32BE),t[202]=c(202,4,Buffer.prototype.writeFloatBE),t[203]=c(203,8,Buffer.prototype.writeDoubleBE),t[204]=c(204,1,Buffer.prototype.writeUInt8),t[205]=c(205,2,Buffer.prototype.writeUInt16BE),t[206]=c(206,4,Buffer.prototype.writeUInt32BE),t[207]=c(207,8,h),t[208]=c(208,1,Buffer.prototype.writeInt8),t[209]=c(209,2,Buffer.prototype.writeInt16BE),t[210]=c(210,4,Buffer.prototype.writeInt32BE),t[211]=c(211,8,l),t[217]=c(217,1,Buffer.prototype.writeUInt8),t[218]=c(218,2,Buffer.prototype.writeUInt16BE),t[219]=c(219,4,Buffer.prototype.writeUInt32BE),t[220]=c(220,2,Buffer.prototype.writeUInt16BE),t[221]=c(221,4,Buffer.prototype.writeUInt32BE),t[222]=c(222,2,Buffer.prototype.writeUInt16BE),t[223]=c(223,4,Buffer.prototype.writeUInt32BE),t}function u(t){return function(r,e){var n=r.reserve(2),i=r.buffer;i[n++]=t,i[n]=e}}function a(t){return function(r,e){var n=r.reserve(3),i=r.buffer;i[n++]=t,i[n++]=e>>>8,i[n]=e}}function s(t){return function(r,e){var n=r.reserve(5),i=r.buffer;i[n++]=t,i[n++]=e>>>24,i[n++]=e>>>16,i[n++]=e>>>8,i[n]=e}}function c(t,r,e,n){return function(i,o){var f=i.reserve(r+1);i.buffer[f++]=t,e.call(i.buffer,o,f,n)}}function h(t,r){new g(this,r,t)}function l(t,r){new b(this,r,t)}function p(t,r){y.write(this,t,r,!1,23,4)}function d(t,r){y.write(this,t,r,!1,52,8)}var y=t("ieee754"),v=t("int64-buffer"),g=v.Uint64BE,b=v.Int64BE,w=t("./write-uint8").uint8,E=t("./bufferish"),Buffer=E.global,A=E.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Buffer,m=A&&!Buffer.TYPED_ARRAY_SUPPORT,x=E.hasBuffer&&Buffer.prototype||{};e.getWriteToken=n},{"./bufferish":8,"./write-uint8":28,ieee754:32,"int64-buffer":33}],27:[function(t,r,e){function n(t){function r(t,r){var e=r?195:194;_[e](t,r)}function e(t,r){var e,n=0|r;return r!==n?(e=203,void _[e](t,r)):(e=-32<=n&&n<=127?255&n:0<=n?n<=255?204:n<=65535?205:206:-128<=n?208:-32768<=n?209:210,void _[e](t,n))}function n(t,r){var e=207;_[e](t,r.toArray())}function o(t,r){var e=211;_[e](t,r.toArray())}function v(t){return t<32?1:t<=255?2:t<=65535?3:5}function g(t){return t<32?1:t<=65535?3:5}function b(t){function r(r,e){var n=e.length,i=5+3*n;r.offset=r.reserve(i);var o=r.buffer,f=t(n),u=r.offset+f;n=s.write.call(o,e,u);var a=t(n);if(f!==a){var c=u+a-f,h=u+n;s.copy.call(o,o,c,u,h)}var l=1===a?160+n:a<=3?215+a:219;_[l](r,n),r.offset+=n}return r}function w(t,r){if(null===r)return A(t,r);if(I(r))return Y(t,r);if(i(r))return m(t,r);if(f.isUint64BE(r))return n(t,r);if(u.isInt64BE(r))return o(t,r);var e=t.codec.getExtPacker(r);return e&&(r=e(r)),r instanceof l?U(t,r):void D(t,r)}function E(t,r){return I(r)?k(t,r):void w(t,r)}function A(t,r){var e=192;_[e](t,r)}function m(t,r){var e=r.length,n=e<16?144+e:e<=65535?220:221;_[n](t,e);for(var i=t.codec.encode,o=0;o<e;o++)i(t,r[o])}function x(t,r){var e=r.length,n=e<255?196:e<=65535?197:198;_[n](t,e),t.send(r)}function B(t,r){x(t,new Uint8Array(r))}function U(t,r){var e=r.buffer,n=e.length,i=y[n]||(n<255?199:n<=65535?200:201);_[i](t,n),h[r.type](t),t.send(e)}function P(t,r){var e=Object.keys(r),n=e.length,i=n<16?128+n:n<=65535?222:223;_[i](t,n);var o=t.codec.encode;e.forEach(function(e){o(t,e),o(t,r[e])})}function R(t,r){if(!(r instanceof Map))return P(t,r);var e=r.size,n=e<16?128+e:e<=65535?222:223;_[n](t,e);var i=t.codec.encode;r.forEach(function(r,e,n){i(t,e),i(t,r)})}function k(t,r){var e=r.length,n=e<32?160+e:e<=65535?218:219;_[n](t,e),t.send(r)}var _=c.getWriteToken(t),T=t&&t.useraw,S=p&&t&&t.binarraybuffer,I=S?a.isArrayBuffer:a.isBuffer,Y=S?B:x,C=d&&t&&t.usemap,D=C?R:P,O={boolean:r,function:A,number:e,object:T?E:w,string:b(T?g:v),symbol:A,undefined:A};return O}var i=t("isarray"),o=t("int64-buffer"),f=o.Uint64BE,u=o.Int64BE,a=t("./bufferish"),s=t("./bufferish-proto"),c=t("./write-token"),h=t("./write-uint8").uint8,l=t("./ext-buffer").ExtBuffer,p="undefined"!=typeof Uint8Array,d="undefined"!=typeof Map,y=[];y[1]=212,y[2]=213,y[4]=214,y[8]=215,y[16]=216,e.getWriteType=n},{"./bufferish":8,"./bufferish-proto":6,"./ext-buffer":17,"./write-token":26,"./write-uint8":28,"int64-buffer":33,isarray:34}],28:[function(t,r,e){function n(t){return function(r){var e=r.reserve(1);r.buffer[e]=t}}for(var i=e.uint8=new Array(256),o=0;o<=255;o++)i[o]=n(o)},{}],29:[function(t,r,e){(function(r){"use strict";function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(i()<r)throw new RangeError("Invalid typed array length");return Buffer.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=Buffer.prototype):(null===t&&(t=new Buffer(r)),t.length=r),t}function Buffer(t,r,e){if(!(Buffer.TYPED_ARRAY_SUPPORT||this instanceof Buffer))return new Buffer(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return s(this,t)}return f(this,t,r,e)}function f(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?c(t,r,e):p(t,r)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return u(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function s(t,r){if(u(r),t=o(t,r<0?0:0|d(r)),!Buffer.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function c(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!Buffer.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e);t=o(t,n);var i=t.write(r,e);return i!==n&&(t=t.slice(0,i)),t}function h(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),Buffer.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=Buffer.prototype):t=h(t,r),t}function p(t,r){if(Buffer.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||H(r.length)?o(t,0):h(t,r);if("Buffer"===r.type&&Q(r.data))return h(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),Buffer.alloc(+t)}function v(t,r){if(Buffer.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return X(t).length;default:if(n)return q(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return k(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return R(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=Buffer.from(r,n)),Buffer.isBuffer(r))return 0===r.length?-1:E(t,r,e,n,i);if("number"==typeof r)return r=255&r,Buffer.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):E(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function E(t,r,e,n,i){function o(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}var f=1,u=t.length,a=r.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,a/=2,e/=2}var s;if(i){var c=-1;for(s=e;s<u;s++)if(o(t,s)===o(r,c===-1?0:s-c)){if(c===-1&&(c=s),s-c+1===a)return c*f}else c!==-1&&(s-=s-c),c=-1}else for(e+a>u&&(e=u-a),s=e;s>=0;s--){for(var h=!0,l=0;l<a;l++)if(o(t,s+l)!==o(r,l)){h=!1;break}if(h)return s}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function m(t,r,e,n){return G(q(r,t.length-e),t,e,n)}function x(t,r,e,n){return G(W(r),t,e,n)}function B(t,r,e,n){return x(t,r,e,n)}function U(t,r,e,n){return G(X(r),t,e,n)}function P(t,r,e,n){return G(J(r,t.length-e),t,e,n)}function R(t,r,e){return 0===r&&e===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(r,e))}function k(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o=t[i],f=null,u=o>239?4:o>223?3:o>191?2:1;if(i+u<=e){var a,s,c,h;switch(u){case 1:o<128&&(f=o);break;case 2:a=t[i+1],128===(192&a)&&(h=(31&o)<<6|63&a,h>127&&(f=h));break;case 3:a=t[i+1],s=t[i+2],128===(192&a)&&128===(192&s)&&(h=(15&o)<<12|(63&a)<<6|63&s,h>2047&&(h<55296||h>57343)&&(f=h));break;case 4:a=t[i+1],s=t[i+2],c=t[i+3],128===(192&a)&&128===(192&s)&&128===(192&c)&&(h=(15&o)<<18|(63&a)<<12|(63&s)<<6|63&c,h>65535&&h<1114112&&(f=h))}}null===f?(f=65533,u=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=u}return _(n)}function _(t){var r=t.length;if(r<=$)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=$));return e}function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function I(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=V(t[o]);return i}function Y(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function D(t,r,e,n,i,o){if(!Buffer.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function M(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,i){return i||M(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,r,e,n,23,4),e+4}function F(t,r,e,n,i){return i||M(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,r,e,n,52,8),e+8}function j(t){
if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return t<16?"0"+t.toString(16):t.toString(16)}function q(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],f=0;f<n;++f){if(e=t.charCodeAt(f),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function W(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function J(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function X(t){return Z.toByteArray(j(t))}function G(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function H(t){return t!==t}var Z=t("base64-js"),K=t("ieee754"),Q=t("isarray");e.Buffer=Buffer,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,Buffer.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=i(),Buffer.poolSize=8192,Buffer._augment=function(t){return t.__proto__=Buffer.prototype,t},Buffer.from=function(t,r,e){return f(null,t,r,e)},Buffer.TYPED_ARRAY_SUPPORT&&(Buffer.prototype.__proto__=Uint8Array.prototype,Buffer.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer&&Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})),Buffer.alloc=function(t,r,e){return a(null,t,r,e)},Buffer.allocUnsafe=function(t){return s(null,t)},Buffer.allocUnsafeSlow=function(t){return s(null,t)},Buffer.isBuffer=function(t){return!(null==t||!t._isBuffer)},Buffer.compare=function(t,r){if(!Buffer.isBuffer(t)||!Buffer.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,r){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=Buffer.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!Buffer.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},Buffer.byteLength=v,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)b(this,r,r+1);return this},Buffer.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)b(this,r,r+3),b(this,r+1,r+2);return this},Buffer.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)b(this,r,r+7),b(this,r+1,r+6),b(this,r+2,r+5),b(this,r+3,r+4);return this},Buffer.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?k(this,0,t):g.apply(this,arguments)},Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},Buffer.prototype.compare=function(t,r,e,n,i){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,f=e-r,u=Math.min(o,f),a=this.slice(n,i),s=t.slice(r,e),c=0;c<u;++c)if(a[c]!==s[c]){o=a[c],f=s[c];break}return o<f?-1:f<o?1:0},Buffer.prototype.includes=function(t,r,e){return this.indexOf(t,r,e)!==-1},Buffer.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},Buffer.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},Buffer.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r=0|r,isFinite(e)?(e=0|e,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return x(this,t,r,e);case"latin1":case"binary":return B(this,t,r,e);case"base64":return U(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;Buffer.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e,t<0&&(t=0)):t>e&&(t=e),r<0?(r+=e,r<0&&(r=0)):r>e&&(r=e),r<t&&(r=t);var n;if(Buffer.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=Buffer.prototype;else{var i=r-t;n=new Buffer(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},Buffer.prototype.readUIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},Buffer.prototype.readUIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},Buffer.prototype.readUInt8=function(t,r){return r||C(t,1,this.length),this[t]},Buffer.prototype.readUInt16LE=function(t,r){return r||C(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUInt16BE=function(t,r){return r||C(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUInt32LE=function(t,r){return r||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUInt32BE=function(t,r){return r||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},Buffer.prototype.readIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},Buffer.prototype.readInt8=function(t,r){return r||C(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},Buffer.prototype.readInt16LE=function(t,r){r||C(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt16BE=function(t,r){r||C(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt32LE=function(t,r){return r||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,r){return r||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readFloatLE=function(t,r){return r||C(t,4,this.length),K.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,r){return r||C(t,4,this.length),K.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,r){return r||C(t,8,this.length),K.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,r){return r||C(t,8,this.length),K.read(this,t,!1,52,8)},Buffer.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;D(this,t,r,e,i,0)}var o=1,f=0;for(this[r]=255&t;++f<e&&(o*=256);)this[r+f]=t/o&255;return r+e},Buffer.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;D(this,t,r,e,i,0)}var o=e-1,f=1;for(this[r+o]=255&t;--o>=0&&(f*=256);)this[r+o]=t/f&255;return r+e},Buffer.prototype.writeUInt8=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,1,255,0),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},Buffer.prototype.writeUInt16LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},Buffer.prototype.writeUInt16BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},Buffer.prototype.writeUInt32LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):L(this,t,r,!0),r+4},Buffer.prototype.writeUInt32BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},Buffer.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);D(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},Buffer.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);D(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},Buffer.prototype.writeInt8=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,1,127,-128),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},Buffer.prototype.writeInt16LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},Buffer.prototype.writeInt16BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},Buffer.prototype.writeInt32LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,2147483647,-2147483648),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):L(this,t,r,!0),r+4},Buffer.prototype.writeInt32BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},Buffer.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},Buffer.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},Buffer.prototype.writeDoubleLE=function(t,r,e){return F(this,t,r,!0,e)},Buffer.prototype.writeDoubleBE=function(t,r,e){return F(this,t,r,!1,e)},Buffer.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!Buffer.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},Buffer.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t=255&t);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var o;if("number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=Buffer.isBuffer(t)?t:q(new Buffer(t,n).toString()),u=f.length;for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":30,ieee754:32,isarray:34}],30:[function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var r,e,i,o,f,u,a=t.length;f=n(t),u=new h(3*a/4-f),i=f>0?a-4:a;var s=0;for(r=0,e=0;r<i;r+=4,e+=3)o=c[t.charCodeAt(r)]<<18|c[t.charCodeAt(r+1)]<<12|c[t.charCodeAt(r+2)]<<6|c[t.charCodeAt(r+3)],u[s++]=o>>16&255,u[s++]=o>>8&255,u[s++]=255&o;return 2===f?(o=c[t.charCodeAt(r)]<<2|c[t.charCodeAt(r+1)]>>4,u[s++]=255&o):1===f&&(o=c[t.charCodeAt(r)]<<10|c[t.charCodeAt(r+1)]<<4|c[t.charCodeAt(r+2)]>>2,u[s++]=o>>8&255,u[s++]=255&o),u}function f(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function u(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(f(n));return i.join("")}function a(t){for(var r,e=t.length,n=e%3,i="",o=[],f=16383,a=0,c=e-n;a<c;a+=f)o.push(u(t,a,a+f>c?c:a+f));return 1===n?(r=t[e-1],i+=s[r>>2],i+=s[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=s[r>>10],i+=s[r>>4&63],i+=s[r<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=i,e.toByteArray=o,e.fromByteArray=a;for(var s=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)s[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},{}],31:[function(t,r,e){function n(){if(!(this instanceof n))return new n}!function(t){function e(t){for(var r in s)t[r]=s[r];return t}function n(t,r){return u(this,t).push(r),this}function i(t,r){function e(){o.call(n,t,e),r.apply(this,arguments)}var n=this;return e.originalListener=r,u(n,t).push(e),n}function o(t,r){function e(t){return t!==r&&t.originalListener!==r}var n,i=this;if(arguments.length){if(r){if(n=u(i,t,!0)){if(n=n.filter(e),!n.length)return o.call(i,t);i[a][t]=n}}else if(n=i[a],n&&(delete n[t],!Object.keys(n).length))return o.call(i)}else delete i[a];return i}function f(t,r){function e(t){t.call(o)}function n(t){t.call(o,r)}function i(t){t.apply(o,s)}var o=this,f=u(o,t,!0);if(!f)return!1;var a=arguments.length;if(1===a)f.forEach(e);else if(2===a)f.forEach(n);else{var s=Array.prototype.slice.call(arguments,1);f.forEach(i)}return!!f.length}function u(t,r,e){if(!e||t[a]){var n=t[a]||(t[a]={});return n[r]||(n[r]=[])}}"undefined"!=typeof r&&(r.exports=t);var a="listeners",s={on:n,once:i,off:o,emit:f};e(t.prototype),t.mixin=e}(n)},{}],32:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,a=(1<<u)-1,s=a>>1,c=-7,h=e?i-1:0,l=e?-1:1,p=t[r+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+t[r+h],h+=l,c-=8);for(f=o&(1<<-c)-1,o>>=-c,c+=n;c>0;f=256*f+t[r+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===a)return f?NaN:(p?-1:1)*(1/0);f+=Math.pow(2,n),o-=s}return(p?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,a,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=c):(f=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-f))<1&&(f--,a*=2),r+=f+h>=1?l/a:l*Math.pow(2,1-h),r*a>=2&&(f++,a/=2),f+h>=c?(u=0,f=c):f+h>=1?(u=(r*a-1)*Math.pow(2,i),f+=h):(u=r*Math.pow(2,h-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&u,p+=d,u/=256,i-=8);for(f=f<<i|u,s+=i;s>0;t[e+p]=255&f,p+=d,f/=256,s-=8);t[e+p-d]|=128*y}},{}],33:[function(t,r,e){(function(Buffer){var t,r,n,i;!function(e){function o(t,r,n){function i(t,r,e,n){return this instanceof i?v(this,t,r,e,n):new i(t,r,e,n)}function o(t){return!(!t||!t[F])}function v(t,r,e,n,i){if(E&&A&&(r instanceof A&&(r=new E(r)),n instanceof A&&(n=new E(n))),!(r||e||n||g))return void(t.buffer=h(m,0));if(!s(r,e)){var o=g||Array;i=e,n=r,e=0,r=new o(8)}t.buffer=r,t.offset=e|=0,b!==typeof n&&("string"==typeof n?x(r,e,n,i||10):s(n,i)?c(r,e,n,i):"number"==typeof i?(k(r,e+T,n),k(r,e+S,i)):n>0?O(r,e,n):n<0?L(r,e,n):c(r,e,m,0))}function x(t,r,e,n){var i=0,o=e.length,f=0,u=0;"-"===e[0]&&i++;for(var a=i;i<o;){var s=parseInt(e[i++],n);if(!(s>=0))break;u=u*n+s,f=f*n+Math.floor(u/B),u%=B}a&&(f=~f,u?u=B-u:f++),k(t,r+T,f),k(t,r+S,u)}function P(){var t=this.buffer,r=this.offset,e=_(t,r+T),i=_(t,r+S);return n||(e|=0),e?e*B+i:i}function R(t){var r=this.buffer,e=this.offset,i=_(r,e+T),o=_(r,e+S),f="",u=!n&&2147483648&i;for(u&&(i=~i,o=B-o),t=t||10;;){var a=i%t*B+o;if(i=Math.floor(i/t),o=Math.floor(a/t),f=(a%t).toString(t)+f,!i&&!o)break}return u&&(f="-"+f),f}function k(t,r,e){t[r+D]=255&e,e>>=8,t[r+C]=255&e,e>>=8,t[r+Y]=255&e,e>>=8,t[r+I]=255&e}function _(t,r){return t[r+I]*U+(t[r+Y]<<16)+(t[r+C]<<8)+t[r+D]}var T=r?0:4,S=r?4:0,I=r?0:3,Y=r?1:2,C=r?2:1,D=r?3:0,O=r?l:d,L=r?p:y,M=i.prototype,N="is"+t,F="_"+N;return M.buffer=void 0,M.offset=0,M[F]=!0,M.toNumber=P,M.toString=R,M.toJSON=P,M.toArray=f,w&&(M.toBuffer=u),E&&(M.toArrayBuffer=a),i[N]=o,e[t]=i,i}function f(t){var r=this.buffer,e=this.offset;return g=null,t!==!1&&0===e&&8===r.length&&x(r)?r:h(r,e)}function u(t){var r=this.buffer,e=this.offset;if(g=w,t!==!1&&0===e&&8===r.length&&Buffer.isBuffer(r))return r;var n=new w(8);return c(n,0,r,e),n}function a(t){var r=this.buffer,e=this.offset,n=r.buffer;if(g=E,t!==!1&&0===e&&n instanceof A&&8===n.byteLength)return n;var i=new E(8);return c(i,0,r,e),i.buffer}function s(t,r){var e=t&&t.length;return r|=0,e&&r+8<=e&&"string"!=typeof t[r]}function c(t,r,e,n){r|=0,n|=0;for(var i=0;i<8;i++)t[r++]=255&e[n++]}function h(t,r){return Array.prototype.slice.call(t,r,r+8)}function l(t,r,e){for(var n=r+8;n>r;)t[--n]=255&e,e/=256}function p(t,r,e){var n=r+8;for(e++;n>r;)t[--n]=255&-e^255,e/=256}function d(t,r,e){for(var n=r+8;r<n;)t[r++]=255&e,e/=256}function y(t,r,e){var n=r+8;for(e++;r<n;)t[r++]=255&-e^255,e/=256}function v(t){return!!t&&"[object Array]"==Object.prototype.toString.call(t)}var g,b="undefined",w=b!==typeof Buffer&&Buffer,E=b!==typeof Uint8Array&&Uint8Array,A=b!==typeof ArrayBuffer&&ArrayBuffer,m=[0,0,0,0,0,0,0,0],x=Array.isArray||v,B=4294967296,U=16777216;t=o("Uint64BE",!0,!0),r=o("Int64BE",!0,!1),n=o("Uint64LE",!1,!0),i=o("Int64LE",!1,!1)}("object"==typeof e&&"string"!=typeof e.nodeName?e:this||{})}).call(this,t("buffer").Buffer)},{buffer:29}],34:[function(t,r,e){var n={}.toString;r.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},{}]},{},[1])(1)});
let player;
let server;

let gameObjects = [];

const mathSQRT = Math.sqrt;
const mathABS = Math.abs;
const mathATAN2 = Math.atan2;
const mathCOS = Math.cos;
const mathSIN = Math.sin;
const mathFloor = Math.floor;
const mathPI = Math.PI;
const mathPI2 = Math.PI * 2;
const mathPI3 = Math.PI * 3;
const mathPOW = Math.pow;

const config = {};
config.maxScreenWidth = 1920;
config.maxScreenHeight = 1080;
    
        // SERVER:
config.serverUpdateRate = 9;
        config.maxPlayers =  40;
        config.maxPlayersHard =  config.maxPlayers + 10;
        config.collisionDepth = 6;
        config.minimapRate = 3000;
    
        // COLLISIONS:
        config.colGrid = 10;
    
        // CLIENT:
        config.clientSendRate = 5;
    
        // UI:
        config.healthBarWidth = 50;
        config.healthBarPad = 4.5;
        config.iconPadding = 15;
        config.iconPad = 0.9;
        config.deathFadeout = 3000;
        config.crownIconScale = 60;
        config.crownPad = 35;
    
        // CHAT:
        config.chatCountdown = 3000;
        config.chatCooldown = 500;
    
        // SANDBOX:
        config.inSandbox = true;
    
        // PLAYER:
        config.maxAge = 100;
        config.gatherAngle = Math.PI/2.6;
        config.gatherWiggle = 10;
        config.hitReturnRatio = 0.25;
        config.hitAngle = Math.PI / 2;
        config.playerScale = 35;
        config.playerSpeed = 0.0016;
        config.playerDecel = 0.993;
        config.nameY = 34;
    
        // CUSTOMIZATION:
        config.skinColors = ["#bf8f54", "#cbb091", "#896c4b",
            "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3",
             "#8bc373"];
    
        // ANIMALS:
        config.animalCount = 7;
        config.aiTurnRandom = 0.06;
        config.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper",
            "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"];
    
        // WEAPONS:
        config.shieldAngle = Math.PI/3;
        config.weaponVariants = [{
            id: 0,
            src: "",
            xp: 0,
            val: 1
        }, {
            id: 1,
            src: "_g",
            xp: 3000,
            val: 1.1
        }, {
            id: 2,
            src: "_d",
            xp: 7000,
            val: 1.18
        }, {
            id: 3,
            src: "_r",
            poison: true,
            xp: 12000,
            val: 1.18
        }];
        config.fetchVariant = function(player) {
            var tmpXP = player.weaponXP[player.weaponIndex]||0;
            for (var i = config.weaponVariants.length - 1; i >= 0; --i) {
                if (tmpXP >= config.weaponVariants[i].xp)
                    return config.weaponVariants[i];
            }
        };
    
        // NATURE:
        config.resourceTypes = ["wood", "food", "stone", "points"];
        config.areaCount = 7;
        config.treesPerArea = 9;
        config.bushesPerArea = 3;
        config.totalRocks = 32;
        config.goldOres = 7;
        config.riverWidth = 724;
        config.riverPadding = 114;
        config.waterCurrent = 0.0011;
        config.waveSpeed = 0.0001;
        config.waveMax = 1.3;
        config.treeScales = [150, 160, 165, 175];
        config.bushScales = [80, 85, 95];
        config.rockScales = [80, 85, 90];
    
        // BIOME DATA:
        config.snowBiomeTop = 2400;
        config.snowSpeed = 0.75;
    
        // DATA:
        config.maxNameLength = 15;
    
        // MAP:
        config.mapScale = 14400;
        config.mapPingScale = 40;
        config.mapPingTime = 2200;

const UTILS = {};
UTILS.randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
UTILS.randFloat = function (min, max) {
    return Math.random() * (max - min + 1) + min;
};
UTILS.lerp = function (value1, value2, amount) {
    return value1 + (value2 - value1) * amount;
};
UTILS.decel = function (val, cel) {
    if (val > 0)
        val = Math.max(0, val - cel);
    else if (val < 0)
        val = Math.min(0, val + cel);
    return val;
};
UTILS.getDistance = function (x1, y1, x2, y2) {
    return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
};
UTILS.getDirection = function (x1, y1, x2, y2) {
    return mathATAN2(y1 - y2, x1 - x2);
};
UTILS.getAngleDist = function (a, b) {
    var p = mathABS(b - a) % (mathPI * 2);
    return (p > mathPI ? (mathPI * 2) - p : p);
};
UTILS.isNumber = function (n) {
    return (typeof n == "number" && !isNaN(n) && isFinite(n));
};
UTILS.isString = function (s) {
    return (s && typeof s == "string");
};
UTILS.kFormat = function (num) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
};
UTILS.capitalizeFirst = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
UTILS.fixTo = function (n, v) {
    return parseFloat(n.toFixed(v));
};
UTILS.sortByPoints = function (a, b) {
    return parseFloat(b.points) - parseFloat(a.points);
};
UTILS.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
    var minX = x1;
    var maxX = x2;
    if (x1 > x2) {
        minX = x2;
        maxX = x1;
    }
    if (maxX > recX2)
        maxX = recX2;
    if (minX < recX)
        minX = recX;
    if (minX > maxX)
        return false;
    var minY = y1;
    var maxY = y2;
    var dx = x2 - x1;
    if (Math.abs(dx) > 0.0000001) {
        var a = (y2 - y1) / dx;
        var b = y1 - a * x1;
        minY = a * minX + b;
        maxY = a * maxX + b;
    }
    if (minY > maxY) {
        var tmp = maxY;
        maxY = minY;
        minY = tmp;
    }
    if (maxY > recY2)
        maxY = recY2;
    if (minY < recY)
        minY = recY;
    if (minY > maxY)
        return false;
    return true;
};
UTILS.containsPoint = function (element, x, y) {
    var bounds = element.getBoundingClientRect();
    var left = bounds.left + window.scrollX;
    var top = bounds.top + window.scrollY;
    var width = bounds.width;
    var height = bounds.height;

    var insideHorizontal = x > left && x < left + width;
    var insideVertical = y > top && y < top + height;
    return insideHorizontal && insideVertical;
};
UTILS.mousifyTouchEvent = function(event) {
    var touch = event.changedTouches[0];
    event.screenX = touch.screenX;
    event.screenY = touch.screenY;
    event.clientX = touch.clientX;
    event.clientY = touch.clientY;
    event.pageX = touch.pageX;
    event.pageY = touch.pageY;
};
UTILS.hookTouchEvents = function (element, skipPrevent) {
    var preventDefault = !skipPrevent;
    var isHovering = false;
    // var passive = window.Modernizr.passiveeventlisteners ? {passive: true} : false;
    var passive = false;
    element.addEventListener("touchstart", UTILS.checkTrusted(touchStart), passive);
    element.addEventListener("touchmove", UTILS.checkTrusted(touchMove), passive);
    element.addEventListener("touchend", UTILS.checkTrusted(touchEnd), passive);
    element.addEventListener("touchcancel", UTILS.checkTrusted(touchEnd), passive);
    element.addEventListener("touchleave", UTILS.checkTrusted(touchEnd), passive);
    function touchStart(e) {
        UTILS.mousifyTouchEvent(e);
        window.setUsingTouch(true);
        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (element.onmouseover)
            element.onmouseover(e);
        isHovering = true;
    }
    function touchMove(e) {
            UTILS.mousifyTouchEvent(e);
            window.setUsingTouch(true);
            if (preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (UTILS.containsPoint(element, e.pageX, e.pageY)) {
                if (!isHovering) {
                    if (element.onmouseover)
                        element.onmouseover(e);
                    isHovering = true;
                }
            } else {
                if (isHovering) {
                    if (element.onmouseout)
                        element.onmouseout(e);
                    isHovering = false;
                }
            }
        }
    function touchEnd(e) {
        UTILS.mousifyTouchEvent(e);
        window.setUsingTouch(true);
        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (isHovering) {
            if (element.onclick)
                element.onclick(e);
            if (element.onmouseout)
                element.onmouseout(e);
            isHovering = false;
        }
    }
};
UTILS.removeAllChildren = function (element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
};
UTILS.generateElement = function (config) {
    var element = document.createElement(config.tag || "div");
    function bind(configValue, elementValue) {
        if (config[configValue])
            element[elementValue] = config[configValue];
    }
    bind("text", "textContent");
    bind("html", "innerHTML");
    bind("class", "className");
    for (var key in config) {
        switch (key) {
            case "tag":
            case "text":
            case "html":
            case "class":
            case "style":
            case "hookTouch":
            case "parent":
            case "children":
                continue;
            default:
                break;
        }
        element[key] = config[key];
    }
    if (element.onclick)
        element.onclick = UTILS.checkTrusted(element.onclick);
    if (element.onmouseover)
        element.onmouseover = UTILS.checkTrusted(element.onmouseover);
    if (element.onmouseout)
        element.onmouseout = UTILS.checkTrusted(element.onmouseout);
    if (config.style) {
        element.style.cssText = config.style;
    }
    if (config.hookTouch) {
        UTILS.hookTouchEvents(element);
    }
    if (config.parent) {
        config.parent.appendChild(element);
    }
    if (config.children) {
        for (var i = 0; i < config.children.length; i++) {
            element.appendChild(config.children[i]);
        }
    }
    return element;
}
UTILS.eventIsTrusted = function(ev) {
    if (ev && typeof ev.isTrusted == "boolean") {
        return ev.isTrusted;
    } else {
        return true;
    }
}
UTILS.checkTrusted = function(callback) {
    return function(ev) {
        if (ev && ev instanceof Event && UTILS.eventIsTrusted(ev)) {
            callback(ev);
        } else {
            //console.error("Event is not trusted.", ev);
        }
    }
}
UTILS.randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
UTILS.countInArray = function(array, val) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === val) count++;
    } return count;
};

class GameObject {
    constructor(sid) {
        this.sid = sid;
    }

    // INIT:
    init(x, y, dir, scale, type, data, owner) {
        data = data||{};
        this.sentTo = {};
        this.gridLocations = [];
        this.active = true;
        this.doUpdate = data.doUpdate;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.xWiggle = 0;
        this.yWiggle = 0;
        this.scale = scale;
        this.type = type;
        this.id = data.id;
        this.owner = owner;
        this.name = data.name;
        this.isItem = (this.id!=undefined);
        this.group = data.group;
        this.health = data.health;
        this.layer = 2;
        if (this.group != undefined) {
            this.layer = this.group.layer;
        } else if (this.type == 0) {
            this.layer = 3;
        } else if (this.type == 2) {
            this.layer = 0;
        }  else if (this.type == 4) {
            this.layer = -1;
        }
        this.colDiv = data.colDiv||1;
        this.blocker = data.blocker;
        this.ignoreCollision = data.ignoreCollision;
        this.dontGather = data.dontGather;
        this.hideFromEnemy = data.hideFromEnemy;
        this.friction = data.friction;
        this.projDmg = data.projDmg;
        this.dmg = data.dmg;
        this.pDmg = data.pDmg;
        this.pps = data.pps;
        this.zIndex = data.zIndex||0;
        this.turnSpeed = data.turnSpeed;
        this.req = data.req;
        this.trap = data.trap;
        this.healCol = data.healCol;
        this.teleport = data.teleport;
        this.boostSpeed = data.boostSpeed;
        this.projectile = data.projectile;
        this.shootRange = data.shootRange;
        this.shootRate = data.shootRate;
        this.shootCount = this.shootRate;
        this.spawnPoint = data.spawnPoint;
    };

    // GET HIT:
    changeHealth(amount, doer) {
        this.health += amount;
        return (this.health <= 0);
    };

    // GET SCALE:
    getScale(sM, ig) {
        sM = sM||1;
        return this.scale * ((this.isItem||this.type==2||this.type==3||this.type==4)
            ?1:(0.6*sM)) * (ig?1:this.colDiv);
    };

    // VISIBLE TO PLAYER:
    visibleToPlayer(player) {
        return !(this.hideFromEnemy) || (this.owner && (this.owner == player ||
            (this.owner.team && player.team == this.owner.team)));
    };

    // UPDATE:
    update(delta) {
        if (this.active) {
            if (this.xWiggle) {
                this.xWiggle *= Math.pow(0.99, delta);
            } if (this.yWiggle) {
                this.yWiggle *= Math.pow(0.99, delta);
            }
            if (this.turnSpeed) {
                this.dir += this.turnSpeed * delta;
            }
        }
    };
};

class ObjectManager {
    constructor(gameObjects) {
        this.objects = gameObjects;
        this.grids = {};
        this.updateObjects = [];

        this.tmpX = undefined;
        this.tmpY = undefined;
        this.tmpS = config.mapScale / config.colGrid;
    }
    // SET OBJECT GRIDS:
    setObjectGrids(obj) {
        var objX = Math.min(config.mapScale, Math.max(0, obj.x));
        var objY = Math.min(config.mapScale, Math.max(0, obj.y));
        for (var x = 0; x < config.colGrid; ++x) {
            this.tmpX = x * this.tmpS;
            for (var y = 0; y < config.colGrid; ++y) {
                this.tmpY = y * this.tmpS;
                if (objX + obj.scale >= this.tmpX && objX - obj.scale <= this.tmpX + this.tmpS &&
                    objY + obj.scale >= this.tmpY && objY - obj.scale <= this.tmpY + this.tmpS) {
                    if (!this.grids[x + "_" + y])
                        this.grids[x + "_" + y] = [];
                    this.grids[x + "_" + y].push(obj);
                    obj.gridLocations.push(x + "_" + y);
                }
            }
        }
    };

    // REMOVE OBJECT FROM GRID:
    removeObjGrid(obj) {
        var tmpIndx;
        for (var i = 0; i < obj.gridLocations.length; ++i) {
            tmpIndx = this.grids[obj.gridLocations[i]].indexOf(obj);
            if (tmpIndx >= 0) {
                this.grids[obj.gridLocations[i]].splice(tmpIndx, 1);
            }
        }
    };

    // DISABLE OBJ:
    disableObj(obj) {
        obj.active = false;
        if (server) {
            if (obj.owner && obj.pps) obj.owner.pps -= obj.pps;
            this.removeObjGrid(obj);
            var tmpIndx = this.updateObjects.indexOf(obj);
            if (tmpIndx >= 0) {
                this.updateObjects.splice(tmpIndx, 1);
            }
        }
    };

    // HIT OBJECT:
    hitObj(tmpObj, tmpDir) {
        for (var p = 0; p < players.length; ++p) {
            if (players[p].active) {
                if (tmpObj.sentTo[players[p].id]) {
                    if (!tmpObj.active) server.send(players[p].id, "12", tmpObj.sid);
                    else if (players[p].canSee(tmpObj))
                        server.send(players[p].id, "8", UTILS.fixTo(tmpDir, 1), tmpObj.sid);
                } if (!tmpObj.active && tmpObj.owner == players[p])
                    players[p].changeItemCount(tmpObj.group.id, -1);
            }
        }
    };

    // GET GRID ARRAY:
    getGridArrays(xPos, yPos, s) {
        let tmpArray = [];
        let tmpGrid;
        this.tmpX = mathFloor(xPos / this.tmpS);
        this.tmpY = mathFloor(yPos / this.tmpS);
        tmpArray.length = 0;
        try {
            if (this.grids[this.tmpX + "_" + this.tmpY])
                tmpArray.push(this.grids[this.tmpX + "_" + this.tmpY]);
            if (xPos + s >= (this.tmpX + 1) * this.tmpS) { // RIGHT
                tmpGrid = this.grids[(this.tmpX + 1) + "_" + this.tmpY];
                if (tmpGrid) tmpArray.push(tmpGrid);
                if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP RIGHT
                    tmpGrid = this.grids[(this.tmpX + 1) + "_" + (this.tmpY - 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                } else if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM RIGHT
                    tmpGrid = this.grids[(this.tmpX + 1) + "_" + (this.tmpY + 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                }
            } if (this.tmpX && xPos - s <= this.tmpX * this.tmpS) { // LEFT
                tmpGrid = this.grids[(this.tmpX - 1) + "_" + this.tmpY];
                if (tmpGrid) tmpArray.push(tmpGrid);
                if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP LEFT
                    tmpGrid = this.grids[(this.tmpX - 1) + "_" + (this.tmpY - 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                } else if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM LEFT
                    tmpGrid = this.grids[(this.tmpX - 1) + "_" + (this.tmpY + 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                }
            } if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM
                tmpGrid = this.grids[this.tmpX + "_" + (this.tmpY + 1)];
                if (tmpGrid) tmpArray.push(tmpGrid);
            } if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP
                tmpGrid = this.grids[this.tmpX + "_" + (this.tmpY - 1)];
                if (tmpGrid) tmpArray.push(tmpGrid);
            }
        } catch (e) {}
        return tmpArray;
    };

    // ADD NEW:
    add(sid, x, y, dir, s, type, data, setSID, owner) {
        let tmpObj = null;
        for (var i = 0; i < gameObjects.length; ++i) {
            if (gameObjects[i].sid == sid) {
                tmpObj = gameObjects[i];
                break;
            }
        } if (!tmpObj) {
            for (var i = 0; i < gameObjects.length; ++i) {
                if (!gameObjects[i].active) {
                    tmpObj = gameObjects[i];
                    break;
                }
            }
        } if (!tmpObj) {
            tmpObj = new GameObject(sid);
            gameObjects.push(tmpObj);
        }
        if (setSID)
            tmpObj.sid = sid;
        tmpObj.init(x, y, dir, s, type, data, owner);
        if (server) {
            this.setObjectGrids(tmpObj);
            if (tmpObj.doUpdate)
                this.updateObjects.push(tmpObj);
        }
    };

    // DISABLE BY SID:
    disableBySid(sid) {
        for (var i = 0; i < gameObjects.length; ++i) {
            if (gameObjects[i].sid == sid) {
                this.disableObj(gameObjects[i]);
                break;
            }
        }
    };

    // REMOVE ALL FROM PLAYER:
    removeAllItems(sid, server) {
        for (var i = 0; i < gameObjects.length; ++i) {
            if (gameObjects[i].active && gameObjects[i].owner && gameObjects[i].owner.sid == sid) {
                this.disableObj(gameObjects[i]);
            }
        }
        if (server) {
            server.broadcast("13", sid);
        }
    };

    // FETCH SPAWN OBJECT:
    fetchSpawnObj(sid) {
        var tmpLoc = null;
        for (var i = 0; i < gameObjects.length; ++i) {
            tmpObj = gameObjects[i];
            if (tmpObj.active && tmpObj.owner && tmpObj.owner.sid == sid && tmpObj.spawnPoint) {
                tmpLoc = [tmpObj.x, tmpObj.y];
                this.disableObj(tmpObj);
                server.broadcast("12", tmpObj.sid);
                if (tmpObj.owner) {
                     tmpObj.owner.changeItemCount(tmpObj.group.id, -1);
                }
                break;
            }
        }
        return tmpLoc;
    };

    // CHECK IF PLACABLE:
    checkItemLocation(x, y, s, sM, indx, ignoreWater, placer) {
        for (var i = 0; i < gameObjects.length; ++i) {
            var blockS = (gameObjects[i].blocker?
                gameObjects[i].blocker:gameObjects[i].getScale(sM, gameObjects[i].isItem));
            if (gameObjects[i].active && UTILS.getDistance(x, y, gameObjects[i].x,
                gameObjects[i].y) < (s + blockS))
                return false;
        } if (!ignoreWater && indx != 18 && y >= (config.mapScale / 2) - (config.riverWidth / 2) && y <=
            (config.mapScale / 2) + (config.riverWidth / 2)) {
            return false;
        }
        return true;
    };

    // ADD PROJECTILE:
    addProjectile(x, y, dir, range, indx) {
        var tmpData = items.projectiles[indx];
        var tmpProj;
        for (var i = 0; i < projectiles.length; ++i) {
            if (!projectiles[i].active) {
                tmpProj = projectiles[i];
                break;
            }
        }
        if (!tmpProj) {
            tmpProj = new Projectile(players, UTILS);
            projectiles.push(tmpProj);
        }
        tmpProj.init(indx, x, y, dir, tmpData.speed, range, tmpData.scale);
    };

    // CHECK PLAYER COLLISION:
    checkCollision(player, other, delta) {
        delta = delta||1;
        var dx = player.x - other.x;
        var dy = player.y - other.y;
        var tmpLen = player.scale + other.scale;
        if (mathABS(dx) <= tmpLen || mathABS(dy) <= tmpLen) {
            tmpLen = player.scale + (other.getScale?other.getScale():other.scale);
            var tmpInt = mathSQRT(dx * dx + dy * dy) - tmpLen;
            if (tmpInt <= 0) {
                if (!other.ignoreCollision) {
                    var tmpDir = UTILS.getDirection(player.x, player.y, other.x, other.y);
                    var tmpDist = UTILS.getDistance(player.x, player.y, other.x, other.y);
                    if (other.isPlayer) {
                        tmpInt = (tmpInt * -1) / 2;
                        player.x += (tmpInt * mathCOS(tmpDir));
                        player.y += (tmpInt * mathSIN(tmpDir));
                        other.x -= (tmpInt * mathCOS(tmpDir));
                        other.y -= (tmpInt * mathSIN(tmpDir));
                    } else {
                        player.x = other.x + (tmpLen * mathCOS(tmpDir));
                        player.y = other.y + (tmpLen * mathSIN(tmpDir));
                        player.xVel *= 0.75;
                        player.yVel *= 0.75;
                    }
                    if (other.dmg && other.owner != player && !(other.owner &&
                        other.owner.team && other.owner.team == player.team)) {
                        player.changeHealth(-other.dmg, other.owner, other);
                        var tmpSpd = 1.5 * (other.weightM||1);
                        player.xVel += tmpSpd * mathCOS(tmpDir);
                        player.yVel += tmpSpd * mathSIN(tmpDir);
                        if (other.pDmg && !(player.skin && player.skin.poisonRes)) {
                            player.dmgOverTime.dmg = other.pDmg;
                            player.dmgOverTime.time = 5;
                            player.dmgOverTime.doer = other.owner;
                        }
                        if (player.colDmg && other.health) {
                            if (other.changeHealth(-player.colDmg)) this.disableObj(other);
                            this.hitObj(other, UTILS.getDirection(player.x, player.y, other.x, other.y));
                        }
                    }
                } else if (other.trap && !player.noTrap && other.owner != player && !(other.owner &&
                    other.owner.team && other.owner.team == player.team)) {
                    player.lockMove = true;
                    other.hideFromEnemy = false;
                } else if (other.boostSpeed) {
                    player.xVel += (delta * other.boostSpeed * (other.weightM||1)) * mathCOS(other.dir);
                    player.yVel += (delta * other.boostSpeed * (other.weightM||1)) * mathSIN(other.dir);
                } else if (other.healCol) {
                    player.healCol = other.healCol;
                } else if (other.teleport) {
                    player.x = UTILS.randInt(0, config.mapScale);
                    player.y = UTILS.randInt(0, config.mapScale);
                }
                if (other.zIndex > player.zIndex) player.zIndex = other.zIndex;
                return true;
            }
        }
        return false;
    };

};
const objectManager = new ObjectManager([]);

const items = {}
items.groups = [{
    id: 0,
    name: "food",
    layer: 0
}, {
    id: 1,
    name: "walls",
    place: true,
    limit: 30,
    layer: 0
}, {
    id: 2,
    name: "spikes",
    place: true,
    limit: 15,
    layer: 0
}, {
    id: 3,
    name: "mill",
    place: true,
    limit: 7,
    layer: 1
}, {
    id: 4,
    name: "mine",
    place: true,
    limit: 1,
    layer: 0
}, {
    id: 5,
    name: "trap",
    place: true,
    limit: 6,
    layer: -1
}, {
    id: 6,
    name: "booster",
    place: true,
    limit: 12,
    layer: -1
}, {
    id: 7,
    name: "turret",
    place: true,
    limit: 2,
    layer: 1
}, {
    id: 8,
    name: "watchtower",
    place: true,
    limit: 12,
    layer: 1
}, {
    id: 9,
    name: "buff",
    place: true,
    limit: 4,
    layer: -1
}, {
    id: 10,
    name: "spawn",
    place: true,
    limit: 1,
    layer: -1
}, {
    id: 11,
    name: "sapling",
    place: true,
    limit: 2,
    layer: 0
}, {
    id: 12,
    name: "blocker",
    place: true,
    limit: 3,
    layer: -1
}, {
    id: 13,
    name: "teleporter",
    place: true,
    limit: 2,
    layer: -1
}];

// PROJECTILES:
items.projectiles = [{
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 25,
    speed: 1.6,
    scale: 103,
    range: 1000
}, {
    indx: 1,
    layer: 1,
    dmg: 25,
    scale: 20
}, {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 35,
    speed: 2.5,
    scale: 103,
    range: 1200
}, {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 30,
    speed: 2,
    scale: 103,
    range: 1200
}, {
    indx: 1,
    layer: 1,
    dmg: 16,
    scale: 20
}, {
    indx: 0,
    layer: 0,
    src: "bullet_1",
    dmg: 50,
    speed: 3.6,
    scale: 160,
    range: 1400
}];

// WEAPONS:
items.weapons = [{
    id: 0,
    type: 0,
    name: "tool hammer",
    desc: "tool for gathering all resources",
    src: "hammer_1",
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
}, {
    id: 1,
    type: 0,
    age: 2,
    name: "hand axe",
    desc: "gathers resources at a higher rate",
    src: "axe_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 30,
    spdMult: 1,
    range: 70,
    gather: 2,
    speed: 400
}, {
    id: 2,
    type: 0,
    age: 8,
    pre: 1,
    name: "great axe",
    desc: "deal more damage and gather more resources",
    src: "great_axe_1",
    length: 140,
    width: 140,
    xOff: -8,
    yOff: 25,
    dmg: 35,
    spdMult: 1,
    range: 75,
    gather: 4,
    speed: 400
}, {
    id: 3,
    type: 0,
    age: 2,
    name: "short sword",
    desc: "increased attack power but slower move speed",
    src: "sword_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 46,
    dmg: 35,
    spdMult: 0.85,
    range: 110,
    gather: 1,
    speed: 300
}, {
    id: 4,
    type: 0,
    age: 8,
    pre: 3,
    name: "katana",
    desc: "greater range and damage",
    src: "samurai_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 59,
    dmg: 40,
    spdMult: 0.8,
    range: 118,
    gather: 1,
    speed: 300
}, {
    id: 5,
    type: 0,
    age: 2,
    name: "polearm",
    desc: "long range melee weapon",
    src: "spear_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 45,
    knock: 0.2,
    spdMult: 0.82,
    range: 142,
    gather: 1,
    speed: 700
}, {
    id: 6,
    type: 0,
    age: 2,
    name: "bat",
    desc: "fast long range melee weapon",
    src: "bat_1",
    iPad: 1.3,
    length: 110,
    width: 180,
    xOff: -8,
    yOff: 53,
    dmg: 20,
    knock: 0.7,
    range: 110,
    gather: 1,
    speed: 300
}, {
    id: 7,
    type: 0,
    age: 2,
    name: "daggers",
    desc: "really fast short range weapon",
    src: "dagger_1",
    iPad: 0.8,
    length: 110,
    width: 110,
    xOff: 18,
    yOff: 0,
    dmg: 20,
    knock: 0.1,
    range: 65,
    gather: 1,
    hitSlow: 0.1,
    spdMult: 1.13,
    speed: 100
}, {
    id: 8,
    type: 0,
    age: 2,
    name: "stick",
    desc: "great for gathering but very weak",
    src: "stick_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 1,
    spdMult: 1,
    range: 70,
    gather: 7,
    speed: 400
}, {
    id: 9,
    type: 1,
    age: 6,
    name: "hunting bow",
    desc: "bow used for ranged combat and hunting",
    src: "bow_1",
    req: ["wood", 4],
    length: 120,
    width: 120,
    xOff: -6,
    yOff: 0,
    projectile: 0,
    spdMult: 0.75,
    speed: 600
}, {
    id: 10,
    type: 1,
    age: 6,
    name: "great hammer",
    desc: "hammer used for destroying structures",
    src: "great_hammer_1",
    length: 140,
    width: 140,
    xOff: -9,
    yOff: 25,
    dmg: 10,
    spdMult: 0.88,
    range: 75,
    sDmg: 7.5,
    gather: 1,
    speed: 400
}, {
    id: 11,
    type: 1,
    age: 6,
    name: "wooden shield",
    desc: "blocks projectiles and reduces melee damage",
    src: "shield_1",
    length: 120,
    width: 120,
    shield: 0.2,
    xOff: 6,
    yOff: 0,
    spdMult: 0.7
}, {
    id: 12,
    type: 1,
    age: 8,
    pre: 9,
    name: "crossbow",
    desc: "deals more damage and has greater range",
    src: "crossbow_1",
    req: ["wood", 5],
    aboveHand: true,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 2,
    spdMult: 0.7,
    speed: 700
}, {
    id: 13,
    type: 1,
    age: 9,
    pre: 12,
    name: "repeater crossbow",
    desc: "high firerate crossbow with reduced damage",
    src: "crossbow_2",
    req: ["wood", 10],
    aboveHand: true,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 3,
    spdMult: 0.7,
    speed: 230
}, {
    id: 14,
    type: 1,
    age: 6,
    name: "mc grabby",
    desc: "steals resources from enemies",
    src: "grab_1",
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 0,
    steal: 250,
    knock: 0.2,
    spdMult: 1.05,
    range: 125,
    gather: 0,
    speed: 700
}, {
    id: 15,
    type: 1,
    age: 9,
    pre: 12,
    name: "musket",
    desc: "slow firerate but high damage and range",
    src: "musket_1",
    req: ["stone", 10],
    aboveHand: true,
    rec: 0.35,
    armS: 0.6,
    hndS: 0.3,
    hndD: 1.6,
    length: 205,
    width: 205,
    xOff: 25,
    yOff: 0,
    projectile: 5,
    hideProjectile: true,
    spdMult: 0.6,
    speed: 1500
}];

// ITEMS:
items.list = [{
    group: items.groups[0],
    name: "apple",
    desc: "restores 20 health when consumed",
    req: ["food", 10],
    consume: function(doer) {
        return doer.changeHealth(20, doer);
    },
    scale: 22,
    holdOffset: 15
}, {
    age: 3,
    group: items.groups[0],
    name: "cookie",
    desc: "restores 40 health when consumed",
    req: ["food", 15],
    consume: function(doer) {
        return doer.changeHealth(40, doer);
    },
    scale: 27,
    holdOffset: 15
}, {
    age: 7,
    group: items.groups[0],
    name: "cheese",
    desc: "restores 30 health and another 50 over 5 seconds",
    req: ["food", 25],
    consume: function(doer) {
        if (doer.changeHealth(30, doer) || doer.health < 100) {
            doer.dmgOverTime.dmg = -10;
            doer.dmgOverTime.doer = doer;
            doer.dmgOverTime.time = 5;
            return true;
        }
        return false;
    },
    scale: 27,
    holdOffset: 15
}, {
    group: items.groups[1],
    name: "wood wall",
    desc: "provides protection for your village",
    req: ["wood", 10],
    projDmg: true,
    health: 380,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 3,
    group: items.groups[1],
    name: "stone wall",
    desc: "provides improved protection for your village",
    req: ["stone", 25],
    health: 900,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    pre: 1,
    group: items.groups[1],
    name: "castle wall",
    desc: "provides powerful protection for your village",
    req: ["stone", 35],
    health: 1500,
    scale: 52,
    holdOffset: 20,
    placeOffset: -5
}, {
    group: items.groups[2],
    name: "spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 20, "stone", 5],
    health: 400,
    dmg: 20,
    scale: 49,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 5,
    group: items.groups[2],
    name: "greater spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 30, "stone", 10],
    health: 500,
    dmg: 35,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 9,
    pre: 1,
    group: items.groups[2],
    name: "poison spikes",
    desc: "poisons enemies when they touch them",
    req: ["wood", 35, "stone", 15],
    health: 600,
    dmg: 30,
    pDmg: 5,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 9,
    pre: 2,
    group: items.groups[2],
    name: "spinning spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 30, "stone", 20],
    health: 500,
    dmg: 45,
    turnSpeed: 0.003,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    group: items.groups[3],
    name: "windmill",
    desc: "generates gold over time",
    req: ["wood", 50, "stone", 10],
    health: 400,
    pps: 1,
    turnSpeed: 0.0016,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 45,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 5,
    pre: 1,
    group: items.groups[3],
    name: "faster windmill",
    desc: "generates more gold over time",
    req: ["wood", 60, "stone", 20],
    health: 500,
    pps: 1.5,
    turnSpeed: 0.0025,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 8,
    pre: 1,
    group: items.groups[3],
    name: "power mill",
    desc: "generates more gold over time",
    req: ["wood", 100, "stone", 50],
    health: 800,
    pps: 2,
    turnSpeed: 0.005,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 5,
    group: items.groups[4],
    type: 2,
    name: "mine",
    desc: "allows you to mine stone",
    req: ["wood", 20, "stone", 100],
    iconLineMult: 12,
    scale: 65,
    holdOffset: 20,
    placeOffset: 0
}, {
    age: 5,
    group: items.groups[11],
    type: 0,
    name: "sapling",
    desc: "allows you to farm wood",
    req: ["wood", 150],
    iconLineMult: 12,
    colDiv: 0.5,
    scale: 110,
    holdOffset: 50,
    placeOffset: -15
}, {
    age: 4,
    group: items.groups[5],
    name: "pit trap",
    desc: "pit that traps enemies if they walk over it",
    req: ["wood", 30, "stone", 30],
    trap: true,
    ignoreCollision: true,
    hideFromEnemy: true,
    health: 500,
    colDiv: 0.2,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 4,
    group: items.groups[6],
    name: "boost pad",
    desc: "provides boost when stepped on",
    req: ["stone", 20, "wood", 5],
    ignoreCollision: true,
    boostSpeed: 1.5,
    health: 150,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[7],
    doUpdate: true,
    name: "turret",
    desc: "defensive structure that shoots at enemies",
    req: ["wood", 200, "stone", 150],
    health: 800,
    projectile: 1,
    shootRange: 700,
    shootRate: 2200,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[8],
    name: "platform",
    desc: "platform to shoot over walls and cross over water",
    req: ["wood", 20],
    ignoreCollision: true,
    zIndex: 1,
    health: 300,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[9],
    name: "healing pad",
    desc: "standing on it will slowly heal you",
    req: ["wood", 30, "food", 10],
    ignoreCollision: true,
    healCol: 15,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 9,
    group: items.groups[10],
    name: "spawn pad",
    desc: "you will spawn here when you die but it will dissapear",
    req: ["wood", 100, "stone", 100],
    health: 400,
    ignoreCollision: true,
    spawnPoint: true,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[12],
    name: "blocker",
    desc: "blocks building in radius",
    req: ["wood", 30, "stone", 25],
    ignoreCollision: true,
    blocker: 300,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[13],
    name: "teleporter",
    desc: "teleports you to a random point on the map",
    req: ["wood", 60, "stone", 60],
    ignoreCollision: true,
    teleport: true,
    health: 200,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}]

// ASSIGN IDS:
for (var i = 0; i < items.list.length; ++i) {
    items.list[i].id = i;
    if (items.list[i].pre) items.list[i].pre = i - items.list[i].pre;
}

const hats = [{
    id: 45,
    name: "Shame!",
    dontSell: true,
    price: 0,
    scale: 120,
    desc: "hacks are for losers"
}, {
    id: 51,
    name: "Moo Cap",
    price: 0,
    scale: 120,
    desc: "coolest mooer around"
}, {
    id: 50,
    name: "Apple Cap",
    price: 0,
    scale: 120,
    desc: "apple farms remembers"
}, {
    id: 28,
    name: "Moo Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 29,
    name: "Pig Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 30,
    name: "Fluff Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 36,
    name: "Pandou Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 37,
    name: "Bear Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 38,
    name: "Monkey Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 44,
    name: "Polar Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 35,
    name: "Fez Hat",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 42,
    name: "Enigma Hat",
    price: 0,
    scale: 120,
    desc: "join the enigma army"
}, {
    id: 43,
    name: "Blitz Hat",
    price: 0,
    scale: 120,
    desc: "hey everybody i'm blitz"
}, {
    id: 49,
    name: "Bob XIII Hat",
    price: 0,
    scale: 120,
    desc: "like and subscribe"
}, {
    id: 57,
    name: "Pumpkin",
    price: 50,
    scale: 120,
    desc: "Spooooky"
}, {
    id: 8,
    name: "Bummle Hat",
    price: 100,
    scale: 120,
    desc: "no effect"
}, {
    id: 2,
    name: "Straw Hat",
    price: 500,
    scale: 120,
    desc: "no effect"
}, {
    id: 15,
    name: "Winter Cap",
    price: 600,
    scale: 120,
    desc: "allows you to move at normal speed in snow",
    coldM: 1
}, {
    id: 5,
    name: "Cowboy Hat",
    price: 1000,
    scale: 120,
    desc: "no effect"
}, {
    id: 4,
    name: "Ranger Hat",
    price: 2000,
    scale: 120,
    desc: "no effect"
}, {
    id: 18,
    name: "Explorer Hat",
    price: 2000,
    scale: 120,
    desc: "no effect"
}, {
    id: 31,
    name: "Flipper Hat",
    price: 2500,
    scale: 120,
    desc: "have more control while in water",
    watrImm: true
}, {
    id: 1,
    name: "Marksman Cap",
    price: 3000,
    scale: 120,
    desc: "increases arrow speed and range",
    aMlt: 1.3
}, {
    id: 10,
    name: "Bush Gear",
    price: 3000,
    scale: 160,
    desc: "allows you to disguise yourself as a bush"
}, {
    id: 48,
    name: "Halo",
    price: 3000,
    scale: 120,
    desc: "no effect"
}, {
    id: 6,
    name: "Soldier Helmet",
    price: 4000,
    scale: 120,
    desc: "reduces damage taken but slows movement",
    spdMult: 0.94,
    dmgMult: 0.75
}, {
    id: 23,
    name: "Anti Venom Gear",
    price: 4000,
    scale: 120,
    desc: "makes you immune to poison",
    poisonRes: 1
}, {
    id: 13,
    name: "Medic Gear",
    price: 5000,
    scale: 110,
    desc: "slowly regenerates health over time",
    healthRegen: 3
}, {
    id: 9,
    name: "Miners Helmet",
    price: 5000,
    scale: 120,
    desc: "earn 1 extra gold per resource",
    extraGold: 1
}, {
    id: 32,
    name: "Musketeer Hat",
    price: 5000,
    scale: 120,
    desc: "reduces cost of projectiles",
    projCost: 0.5
}, {
    id: 7,
    name: "Bull Helmet",
    price: 6000,
    scale: 120,
    desc: "increases damage done but drains health",
    healthRegen: -5,
    dmgMultO: 1.5,
    spdMult: 0.96
}, {
    id: 22,
    name: "Emp Helmet",
    price: 6000,
    scale: 120,
    desc: "turrets won't attack but you move slower",
    antiTurret: 1,
    spdMult: 0.7
}, {
    id: 12,
    name: "Booster Hat",
    price: 6000,
    scale: 120,
    desc: "increases your movement speed",
    spdMult: 1.16
}, {
    id: 26,
    name: "Barbarian Armor",
    price: 8000,
    scale: 120,
    desc: "knocks back enemies that attack you",
    dmgK: 0.6
}, {
    id: 21,
    name: "Plague Mask",
    price: 10000,
    scale: 120,
    desc: "melee attacks deal poison damage",
    poisonDmg: 5,
    poisonTime: 6
}, {
    id: 46,
    name: "Bull Mask",
    price: 10000,
    scale: 120,
    desc: "bulls won't target you unless you attack them",
    bullRepel: 1
}, {
    id: 14,
    name: "Windmill Hat",
    topSprite: true,
    price: 10000,
    scale: 120,
    desc: "generates points while worn",
    pps: 1.5
}, {
    id: 11,
    name: "Spike Gear",
    topSprite: true,
    price: 10000,
    scale: 120,
    desc: "deal damage to players that damage you",
    dmg: 0.45
}, {
    id: 53,
    name: "Turret Gear",
    topSprite: true,
    price: 10000,
    scale: 120,
    desc: "you become a walking turret",
    turret: {
        proj: 1,
        range: 700,
        rate: 2500
    },
    spdMult: 0.7
}, {
    id: 20,
    name: "Samurai Armor",
    price: 12000,
    scale: 120,
    desc: "increased attack speed and fire rate",
    atkSpd: 0.78
}, {
    id: 58,
    name: "Dark Knight",
    price: 12000,
    scale: 120,
    desc: "restores health when you deal damage",
    healD: 0.4
}, {
    id: 27,
    name: "Scavenger Gear",
    price: 15000,
    scale: 120,
    desc: "earn double points for each kill",
    kScrM: 2
}, {
    id: 40,
    name: "Tank Gear",
    price: 15000,
    scale: 120,
    desc: "increased damage to buildings but slower movement",
    spdMult: 0.3,
    bDmg: 3.3
}, {
    id: 52,
    name: "Thief Gear",
    price: 15000,
    scale: 120,
    desc: "steal half of a players gold when you kill them",
    goldSteal: 0.5
}, {
    id: 55,
    name: "Bloodthirster",
    price: 20000,
    scale: 120,
    desc: "Restore Health when dealing damage. And increased damage",
    healD: 0.25,
    dmgMultO: 1.2,
}, {
    id: 56,
    name: "Assassin Gear",
    price: 20000,
    scale: 120,
    desc: "Go invisible when not moving. Can't eat. Increased speed",
    noEat: true,
    spdMult: 1.1,
    invisTimer: 1000
}];

const accessories = [{
    id: 12,
    name: "Snowball",
    price: 1000,
    scale: 105,
    xOff: 18,
    desc: "no effect"
}, {
    id: 9,
    name: "Tree Cape",
    price: 1000,
    scale: 90,
    desc: "no effect"
}, {
    id: 10,
    name: "Stone Cape",
    price: 1000,
    scale: 90,
    desc: "no effect"
}, {
    id: 3,
    name: "Cookie Cape",
    price: 1500,
    scale: 90,
    desc: "no effect"
}, {
    id: 8,
    name: "Cow Cape",
    price: 2000,
    scale: 90,
    desc: "no effect"
}, {
    id: 11,
    name: "Monkey Tail",
    price: 2000,
    scale: 97,
    xOff: 25,
    desc: "Super speed but reduced damage",
    spdMult: 1.35,
    dmgMultO: 0.2
}, {
    id: 17,
    name: "Apple Basket",
    price: 3000,
    scale: 80,
    xOff: 12,
    desc: "slowly regenerates health over time",
    healthRegen: 1
}, {
    id: 6,
    name: "Winter Cape",
    price: 3000,
    scale: 90,
    desc: "no effect"
}, {
    id: 4,
    name: "Skull Cape",
    price: 4000,
    scale: 90,
    desc: "no effect"
}, {
    id: 5,
    name: "Dash Cape",
    price: 5000,
    scale: 90,
    desc: "no effect"
}, {
    id: 2,
    name: "Dragon Cape",
    price: 6000,
    scale: 90,
    desc: "no effect"
}, {
    id: 1,
    name: "Super Cape",
    price: 8000,
    scale: 90,
    desc: "no effect"
}, {
    id: 7,
    name: "Troll Cape",
    price: 8000,
    scale: 90,
    desc: "no effect"
}, {
    id: 14,
    name: "Thorns",
    price: 10000,
    scale: 115,
    xOff: 20,
    desc: "no effect"
}, {
    id: 15,
    name: "Blockades",
    price: 10000,
    scale: 95,
    xOff: 15,
    desc: "no effect"
}, {
    id: 20,
    name: "Devils Tail",
    price: 10000,
    scale: 95,
    xOff: 20,
    desc: "no effect"
}, {
    id: 16,
    name: "Sawblade",
    price: 12000,
    scale: 90,
    spin: true,
    xOff: 0,
    desc: "deal damage to players that damage you",
    dmg: 0.15
}, {
    id: 13,
    name: "Angel Wings",
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: "slowly regenerates health over time",
    healthRegen: 3
}, {
    id: 19,
    name: "Shadow Wings",
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: "increased movement speed",
    spdMult: 1.1
}, {
    id: 18,
    name: "Blood Wings",
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: "restores health when you deal damage",
    healD: 0.2
}, {
    id: 21,
    name: "Corrupt X Wings",
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: "deal damage to players that damage you",
    dmg: 0.25
}];

class Projectile {
    constructor() {}
    
    // INIT:
    init(indx, x, y, dir, spd, dmg, rng, scl, owner) {
        console.log("creation projectile")
        this.active = true;
        this.indx = indx;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.skipMov = true;
        this.speed = spd;
        this.dmg = dmg;
        this.scale = scl;
        this.range = rng;
        this.owner = owner;
        this.objectsHit = [];
        this.tmpObj = undefined;

        if (server)
            this.sentTo = {};
    };

    // UPDATE:
    update(delta) {
        if (this.active) {
            var tmpSpeed = this.speed * delta;
            var tmpScale;
            if (!this.skipMov) {
                this.x += tmpSpeed * Math.cos(this.dir);
                this.y += tmpSpeed * Math.sin(this.dir);
                this.range -= tmpSpeed;
                if (this.range <= 0) {
                    this.x += this.range * Math.cos(this.dir);
                    this.y += this.range * Math.sin(this.dir);
                    tmpSpeed = 1;
                    this.range = 0;
                    this.active = false;
                }
            } else {
                this.skipMov = false;
            }
            if (server) {
                for (var i = 0; i < players.length; ++i) {
                    if (!this.sentTo[players[i].id] && players[i].canSee(this)) {
                        this.sentTo[players[i].id] = 1;
                        server.send(players[i].id, "18", UTILS.fixTo(this.x, 1), UTILS.fixTo(this.y, 1),
                            UTILS.fixTo(this.dir, 2), UTILS.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid);
                    }
                }
                this.objectsHit.length = 0;
                for (var i = 0; i < players.lengthh; ++i) {
                    this.tmpObj = players[i];
                    if (this.tmpObj.alive && this.tmpObj != this.owner && !(this.owner.team && this.tmpObj.team == this.owner.team)) {
                        if (UTILS.lineInRect(tmpObj.x-tmpObj.scale, tmpObj.y-tmpObj.scale, tmpObj.x+tmpObj.scale,
                            this.tmpObj.y+this.tmpObj.scale, this.x, this.y, this.x+(tmpSpeed*Math.cos(this.dir)),
                            this.y+(tmpSpeed*Math.sin(this.dir)))) {
                                this.objectsHit.push(this.tmpObj);
                        }
                    }
                }
                var tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
                for (var x = 0; x < tmpList.length; ++x) {
                    for (var y = 0; y < tmpList[x].length; ++y) {
                        this.tmpObj = tmpList[x][y];
                        tmpScale = this.tmpObj.getScale();
                        if (this.tmpObj.active && !(this.ignoreObj == this.tmpObj.sid) && (this.layer <= this.tmpObj.layer) &&
                        this.objectsHit.indexOf(this.tmpObj) < 0 && !this.tmpObj.ignoreCollision && UTILS.lineInRect(this.tmpObj.x-tmpScale, this.tmpObj.y-tmpScale, this.tmpObj.x+tmpScale, this.tmpObj.y+tmpScale,
                            this.x, this.y, this.x+(tmpSpeed*Math.cos(this.dir)), this.y+(tmpSpeed*Math.sin(this.dir)))) {
                                this.objectsHit.push(this.tmpObj);
                        }
                    }
                }

                // HIT OBJECTS:
                if (this.objectsHit.length > 0) {
                    var hitObj = null;
                    var shortDist = null;
                    var tmpDist = null;
                    for (var i = 0; i < this.objectsHit.length; ++i) {
                        tmpDist = UTILS.getDistance(this.x, this.y, this.objectsHit[i].x, this.objectsHit[i].y);
                        if (shortDist == null || tmpDist < shortDist) {
                            shortDist = tmpDist;
                            hitObj = this.objectsHit[i];
                        }
                    }
                    if (hitObj.isPlayer || hitObj.isAI) {
                        var tmpSd = 0.3 * (hitObj.weightM||1);
                        hitObj.xVel += tmpSd * Math.cos(this.dir);
                        hitObj.yVel += tmpSd * Math.sin(this.dir);
                        if (hitObj.weaponIndex == undefined || (!(items.weapons[hitObj.weaponIndex].shield &&
                            UTILS.getAngleDist(this.dir+Math.PI, hitObj.dir) <= config.shieldAngle))) {
                            hitObj.changeHealth(-this.dmg, this.owner, this.owner);
                        }
                    } else {
                        if (hitObj.projDmg && hitObj.health && hitObj.changeHealth(-this.dmg)) {
                            objectManager.disableObj(hitObj);
                        }
                        for (var i = 0; i < players.length; ++i) {
                            if (players[i].active) {
                                if (hitObj.sentTo[players[i].id]) {
                                    if (hitObj.active) {
                                        if (players[i].canSee(hitObj))
                                            server.send(players[i].id, "8", UTILS.fixTo(this.dir, 2), hitObj.sid);
                                    } else {
                                        server.send(players[i].id, "12", hitObj.sid);
                                    }
                                }
                                if (!hitObj.active && hitObj.owner == players[i])
                                    players[i].changeItemCount(hitObj.group.id, -1);
                            }

                        }
                    }
                    this.active = false;
                    for (var i = 0; i < players.length; ++i) {
                        if (this.sentTo[players[i].id])
                            server.send(players[i].id, "19", this.sid, UTILS.fixTo(shortDist, 1));
                    }
                }
            }
        }
    };
};

class ProjectileManager {
    constructor () {
        this.projectiles = [];
    }

    addProjectile(x, y, dir, range, speed, indx, owner, ignoreObj, layer) {
        var tmpData = items.projectiles[indx];
        var tmpProj;
        for (var i = 0; i < this.projectiles.length; ++i) {
            if (!this.projectiles[i].active) {
                tmpProj = this.projectiles[i];
                break;
            }
        } if (!tmpProj) {
            tmpProj = new Projectile();
            tmpProj.sid = this.projectiles.length;
            this.projectiles.push(tmpProj);
        }
        tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner);
        tmpProj.ignoreObj = ignoreObj;
        tmpProj.layer = layer||tmpData.layer;
        tmpProj.src = tmpData.src;
        return tmpProj;
    };
};

const projectileManager = new ProjectileManager();

class Player {
    constructor(id, sid, isBot = false, data = {}) {
        this.id = id;
        this.sid = sid;
        this.isBot = isBot;
        if (isBot) {
            this.data = {};
            this.data.lockPos = data.lockPos ? {
                x: data.lockPos.x,
                y: data.lockPos.y
            } : false;
            this.onupdate = data.onupdate || (function() {});
            this.data.noCol = !!data.noCol;
        }
        this.tmpScore = 0;
        this.team = null;
        this.skinIndex = 0;
        this.tailIndex = 0;
        this.hitTime = 0;
        this.hits = 0;
        this.tails = {};
        for (var i = 0; i < accessories.length; ++i) {
            if (accessories[i].price <= 0)
                this.tails[accessories[i].id] = 1;
        }
        this.skins = {};
        for (var i = 0; i < hats.length; ++i) {
            if (hats[i].price <= 0)
                this.skins[hats[i].id] = 1;
        }
        this.timerCount = 0;
        this.points = 0;
        this.dt = 0;
        this.hidden = false;
        this.itemCounts = {};
        this.isPlayer = true;
        this.pps = 0;
        this.moveDir = undefined;
        this.skinRot = 0;
        this.lastPing = 0;
        this.iconIndex = 0;
        this.skinColor = 0;
    }

    // SPAWN:
    spawn(moofoll) {
        this.active = true;
        this.alive = true;
        this.lockMove = false;
        this.lockDir = false;
        this.minimapCounter = 0;
        this.chatCountdown = 0;
        this.shameCount = 0;
        this.shameTimer = 0;
        this.sentTo = {};
        this.gathering = 0;
        this.autoGather = 0;
        this.animTime = 0;
        this.animSpeed = 0;
        this.mouseState = 0;
        this.mouseState2 = 0;
        this.buildIndex = -1;
        this.weaponIndex = 0;
        this.dmgOverTime = {};
        this.noMovTimer = 0;
        this.maxXP = 300;
        this.XP = 0;
        this.age = 1;
        this.kills = 0;
        this.upgrAge = 2;
        this.upgradePoints = 0;
        this.x = 0;
        this.y = 0;
        this.zIndex = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.slowMult = 1;
        this.dir = 0;
        this.dirPlus = 0;
        this.targetDir = 0;
        this.targetAngle = 0;
        this.maxHealth = 100;
        this.health = this.maxHealth;
        this.scale = config.playerScale;
        this.speed = config.playerSpeed;
        this.resetMoveDir();
        this.resetResources(moofoll);
        this.items = [0, 3, 6, 10];
        this.weapons = [0, 0];
        this.shootCount = 0;
        this.weaponXP = [];
        this.reloads = {};
    };

    // RESET MOVE DIR:
    resetMoveDir() {
        this.moveDir = undefined;
    };

    // RESET RESOURCES:
    resetResources(moofoll) {
        for (var i = 0; i < config.resourceTypes.length; ++i) {
            this[config.resourceTypes[i]] = 999999;//moofoll?100:0;
        }
    };

    // ADD ITEM:
    addItem(id) {
        var tmpItem = items.list[id];
        if (tmpItem) {
            for (var i = 0; i < this.items.length; ++i) {
                if (items.list[this.items[i]].group == tmpItem.group) {
                    if (this.buildIndex == this.items[i])
                        this.buildIndex = id;
                    this.items[i] = id;
                    return true;
                }
            }
            this.items.push(id);
            return true;
        }
        return false;
    };

    // SET USER DATA:
    setUserData(data) {
        if (data) {
            // SET INITIAL NAME:
            this.name = "unknown";

            // VALIDATE NAME:
            var name = data.name + "";
            //name = name.slice(0, config.maxNameLength);
            //name = name.replace(/[^\w:\(\)\/? -]+/gmi, " ");  // USE SPACE SO WE CAN CHECK PROFANITY
            //name = name.replace(/[^\x00-\x7F]/g, " ");
            name = name.trim();

            // CHECK IF IS PROFANE:
            /*var isProfane = false;
            var convertedName = name.toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
            for (var word of langFilter.list) {
                if (convertedName.indexOf(word) != -1) {
                    isProfane = true;
                    break;
                }
            }*/

            if (name.length > 0) {
                this.name = name;
            }

            // SKIN:
            this.skinColor = 0;
            if (config.skinColors[data.skin])
                this.skinColor = data.skin;
        }
    };

    // GET DATA TO SEND:
    getData() {
        return [
            this.id,
            this.sid,
            this.name,
            UTILS.fixTo(this.x, 2),
            UTILS.fixTo(this.y, 2),
            UTILS.fixTo(this.dir, 3),
            this.health,
            this.maxHealth,
            this.scale,
            this.skinColor
        ];
    };

    // SET DATA:
    setData(data) {
        this.id = data[0];
        this.sid = data[1];
        this.name = data[2];
        this.x = data[3];
        this.y = data[4];
        this.dir = data[5];
        this.health = data[6];
        this.maxHealth = data[7];
        this.scale = data[8];
        this.skinColor = data[9];
    };

    setSkin(id) {
        this.skin = hats.find(hat => hat.id == id);
        this.skinIndex = id;
    }

    setTail(id) {
        this.tail = accessories.find(acc => acc.id == id);
        this.tailIndex = id;
    }

    // UPDATE:
    update(delta) {
        if (!this.alive) return;

        if (this.onupdate) {
            this.onupdate.call(this, delta);
        }

        // SHAME SHAME SHAME:
        if (this.shameTimer > 0) {
            this.skinIndex = 45;
            this.shameTimer -= delta;
            if (this.shameTimer <= 0) {
                this.skinIndex = this.skin.id || 0;
                this.shameTimer = 0;
                this.shameCount = 0;
            }
        }

        // REGENS AND AUTO:
        this.timerCount -= delta;
        if (this.timerCount <= 0) {
            var regenAmount = (this.skin && this.skin.healthRegen?this.skin.healthRegen:0) +
                (this.tail && this.tail.healthRegen?this.tail.healthRegen:0);
            if (regenAmount) {
                this.changeHealth(regenAmount, this);
            } if (this.dmgOverTime.dmg) {
                this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer);
                this.dmgOverTime.time -= 1;
                if (this.dmgOverTime.time <= 0)
                    this.dmgOverTime.dmg = 0;
            } if (this.healCol) {
                this.changeHealth(this.healCol, this);
            }
            this.timerCount = 1000;
        }

        // CHECK KILL:
        if (!this.alive)
            return;

        // SLOWER:
        if (this.slowMult < 1) {
            this.slowMult += 0.0008 * delta;
            if (this.slowMult > 1)
                this.slowMult = 1;
        }

        // MOVE:
        this.noMovTimer += delta;
        if (this.xVel || this.yVel) this.noMovTimer = 0;
        if (this.lockMove) {
            this.xVel = 0;
            this.yVel = 0;
        } else {
            var spdMult = ((this.buildIndex>=0)?0.5:1) * (items.weapons[this.weaponIndex].spdMult||1) *
                (this.skin?(this.skin.spdMult||1):1) * (this.tail?(this.tail.spdMult||1):1) * (this.y<=config.snowBiomeTop?
                                                                                               ((this.skin&&this.skin.coldM)?1:config.snowSpeed):1) * this.slowMult;
            if (!this.zIndex && this.y >= (config.mapScale / 2) - (config.riverWidth / 2) &&
                this.y <= (config.mapScale / 2) + (config.riverWidth / 2)) {
                if (this.skin && this.skin.watrImm) {
                    spdMult *= 0.75;
                    this.xVel += config.waterCurrent * 0.4 * delta;
                } else {
                    spdMult *= 0.33;
                    this.xVel += config.waterCurrent * delta;
                }
            }
            var xVel = (this.moveDir!=undefined)?mathCOS(this.moveDir):0;
            var yVel = (this.moveDir!=undefined)?mathSIN(this.moveDir):0;
            var length = mathSQRT(xVel * xVel + yVel * yVel);
            if (length != 0) {
                xVel /= length;
                yVel /= length;
            }

            if (xVel) this.xVel += xVel * this.speed * spdMult * delta;
            if (yVel) this.yVel += yVel * this.speed * spdMult * delta;
        }

        // OBJECT COLL:
        this.zIndex = 0;
        this.lockMove = false;
        this.healCol = 0;
        var tmpList;
        var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta);
        var depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40)));
        var tMlt = 1 / depth;
        for (var i = 0; i < depth; ++i) {
            if (this.xVel)
                this.x += (this.xVel * delta) * tMlt;
            if (this.yVel)
                this.y += (this.yVel * delta) * tMlt;
            tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
            for (var x = 0; x < tmpList.length; ++x) {
                for (var y = 0; y < tmpList[x].length; ++y) {
                    if (tmpList[x][y].active)
                        objectManager.checkCollision(this, tmpList[x][y], tMlt);
                }
            }
        }

        // PLAYER COLLISIONS:
        var tmpIndx = players.indexOf(this);
        for (var i = tmpIndx + 1; i < players.length; ++i) {
            if (players[i] != this && players[i].alive)
                objectManager.checkCollision(this, players[i]);
        }

        // DECEL:
        const decel = mathPOW(config.playerDecel, delta);
        if (this.xVel) {
            this.xVel *= decel;
            //if (this.xVel <= 0.01 && this.xVel >= -0.01) this.xVel = 0;
        } if (this.yVel) {
            this.yVel *= decel;
            //if (this.yVel <= 0.01 && this.yVel >= -0.01) this.yVel = 0;
        }

        // MAP BOUNDARIES:
        if (this.x - this.scale < 0) {
            this.x = this.scale;
        } else if (this.x + this.scale > config.mapScale) {
            this.x = config.mapScale - this.scale;
        } if (this.y - this.scale < 0) {
            this.y = this.scale;
        } else if (this.y + this.scale > config.mapScale) {
            this.y = config.mapScale - this.scale;
        }

        // USE WEAPON OR TOOL:
        this.useTool(delta);
        this.hits = 0;

        if (this.data && this.data.lockPos) {
            this.x = this.data.lockPos.x;
            this.y = this.data.lockPos.y;
        }
    };

    useTool(delta) {
        if (this.buildIndex < 0) {
            this.gathering = this.mouseState || this.mouseState2 || this.hits > 0;
            if (this.reloads[this.weaponIndex] > 0) {
                this.reloads[this.weaponIndex] -= delta;
            } else if (this.gathering || this.autoGather) {
                var worked = true;
                if (items.weapons[this.weaponIndex].gather != undefined) {
                    this.gather(players);
                } else if (items.weapons[this.weaponIndex].projectile != undefined &&
                           this.hasRes(items.weapons[this.weaponIndex], (this.skin?this.skin.projCost:0))) {
                    this.useRes(items.weapons[this.weaponIndex], (this.skin?this.skin.projCost:0));
                    this.noMovTimer = 0;
                    var tmpIndx = items.weapons[this.weaponIndex].projectile;
                    var projOffset = this.scale * 2;
                    var aMlt = (this.skin&&this.skin.aMlt)?this.skin.aMlt:1;
                    if (items.weapons[this.weaponIndex].rec) {
                        this.xVel -= items.weapons[this.weaponIndex].rec * mathCOS(this.dir);
                        this.yVel -= items.weapons[this.weaponIndex].rec * mathSIN(this.dir);
                    }
                    projectileManager.addProjectile(this.x+(projOffset*mathCOS(this.dir)),
                                                    this.y+(projOffset*mathSIN(this.dir)), this.dir, items.projectiles[tmpIndx].range*aMlt,
                                                    items.projectiles[tmpIndx].speed*aMlt, tmpIndx, this, null, this.zIndex);
                } else {
                    worked = false;
                }
                this.gathering = this.mouseState || this.mouseState2;
                if (worked) {
                    this.reloads[this.weaponIndex] = items.weapons[this.weaponIndex].speed*(this.skin?(this.skin.atkSpd||1):1);
                }
            }
        }
    }

    // ADD WEAPON XP:
    addWeaponXP(amnt) {
        if (!this.weaponXP[this.weaponIndex])
            this.weaponXP[this.weaponIndex] = 0;
        this.weaponXP[this.weaponIndex] += amnt;
    };

    // EARN XP:
    earnXP(amount) {
        if (this.age < config.maxAge) {
            this.XP += amount;
            if (this.XP >= this.maxXP) {
                if (this.age < config.maxAge) {
                    this.age++;
                    this.XP = 0;
                    this.maxXP *= 1.2;
                } else {
                    this.XP = this.maxXP;
                }
                this.upgradePoints++;
                server.send(this.id, "16", this.upgradePoints, this.upgrAge);
                server.send(this.id, "15", this.XP, UTILS.fixTo(this.maxXP, 1), this.age);
            } else {
                server.send(this.id, "15", this.XP);
            }
        }
    };

    // CHANGE HEALTH:
    changeHealth(amount, doer) {
        if (amount > 0 && this.health >= this.maxHealth)
            return false
        if (amount < 0 && this.skin)
            amount *= this.skin.dmgMult||1;
        if (amount < 0 && this.tail)
            amount *= this.tail.dmgMult||1;
        if (amount < 0)
            this.hitTime = Date.now();
        this.health += amount;
        if (this.health > this.maxHealth) {
            amount -= (this.health - this.maxHealth);
            this.health = this.maxHealth;
        }
        if (this.health <= 0)
            this.kill(doer);
        for (var i = 0; i < players.length; ++i) {
            if (this.sentTo[players[i].id])
                server.send(players[i].id, "h", this.sid, Math.round(this.health));
        }
        if (doer && doer.canSee(this) && !(doer == this && amount < 0)) {
            server.send(doer.id, "t", Math.round(this.x),
                        Math.round(this.y), Math.round(-amount), 1);
        }
        return true;
    };

    // KILL:
    kill(doer) {
        if (doer && doer.alive) {
            doer.kills++;
            //if (doer.skin && doer.skin.goldSteal) scoreCallback(doer, Math.round(this.points / 2));
            //else scoreCallback(doer, Math.round(this.age*100*((doer.skin&&doer.skin.kScrM)?doer.skin.kScrM:1)));
            server.send(doer.id, "9", "kills", doer.kills, 1);
        }
        this.alive = false;
        server.send(this.id, "11");
        objectManager.removeAllItems(this.sid, server);
        //iconCallback();
    };

    // ADD RESOURCE:
    addResource(type, amount, auto) {
        if (!auto && amount > 0)
            this.addWeaponXP(amount);
        /*if (type == 3) {
            scoreCallback(this, amount, true);
        } else */{
            this[config.resourceTypes[type]] += amount;
            server.send(this.id, "9", config.resourceTypes[type], this[config.resourceTypes[type]], 1);
        }
    };

    // CHANGE ITEM COUNT:
    changeItemCount(index, value) {
        this.itemCounts[index] = this.itemCounts[index]||0;
        this.itemCounts[index] += value;
        server.send(this.id, "14", index, this.itemCounts[index]);
    };

    // BUILD:
    buildItem(item) {
        var tmpS = (this.scale + item.scale + (item.placeOffset||0));
        var tmpX = this.x + (tmpS * mathCOS(this.dir));
        var tmpY = this.y + (tmpS * mathSIN(this.dir));
        let worked = false;
        if (this.canBuild(item) && !(item.consume && (this.skin && this.skin.noEat))
            && (item.consume || objectManager.checkItemLocation(tmpX, tmpY, item.scale,
                                                                0.6, item.id, false, this))) {
            if (item.consume) {
                if (this.hitTime) {
                    var timeSinceHit = Date.now() - this.hitTime;
                    this.hitTime = 0;
                    if (timeSinceHit <= 120) {
                        this.shameCount++;
                        if (this.shameCount >= 8) {
                            this.shameTimer = 30000;
                            this.shameCount = 0;
                        }
                    } else {
                        this.shameCount -= 2;
                        if (this.shameCount <= 0) {
                            this.shameCount = 0;
                        }
                    }
                }
                if (this.shameTimer <= 0)
                    worked = item.consume(this);
            } else {
                worked = true;
                if (item.group.limit) {
                    this.changeItemCount(item.group.id, 1);
                }
                if (item.pps)
                    this.pps += item.pps;
                objectManager.add(gameObjects.length, tmpX, tmpY, this.dir, item.scale,
                                  item.id, item, false, this);
            }
            if (worked) {
                this.useRes(item);
                this.buildIndex = -1;
            }
        }
        return worked;
    };

    // HAS RESOURCES:
    hasRes(item, mult) {
        for (var i = 0; i < item.req.length;) {
            if (this[item.req[i]] < Math.round(item.req[i + 1] * (mult||1)))
                return false;
            i+=2;
        }
        return true;
    };

    // USE RESOURCES:
    useRes(item, mult) {
        if (config.inSandbox)
            return;
        for (var i = 0; i < item.req.length;) {
            this.addResource(config.resourceTypes.indexOf(item.req[i]), -Math.round(item.req[i+1]*(mult||1)));
            i+=2;
        }
    };

    // CAN BUILD:
    canBuild(item) {
        if (config.inSandbox)
            return true;
        if (item.group.limit && this.itemCounts[item.group.id] >= item.group.limit)
            return false;
        return this.hasRes(item);
    };

    // GATHER:
    gather() {

        // SHOW:
        this.noMovTimer = 0;

        // SLOW MOVEMENT:
        this.slowMult -= (items.weapons[this.weaponIndex].hitSlow||0.3);
        if (this.slowMult < 0)
            this.slowMult = 0;

        // VARIANT DMG:
        var tmpVariant = config.fetchVariant(this);
        var applyPoison = tmpVariant.poison;
        var variantDmg = tmpVariant.val;

        // CHECK IF HIT GAME OBJECT:
        var hitObjs = {};
        var tmpDist, tmpDir, tmpObj, hitSomething;
        var tmpList = objectManager.getGridArrays(this.x, this.y, items.weapons[this.weaponIndex].range);
        for (var t = 0; t < tmpList.length; ++t) {
            for (var i = 0; i < tmpList[t].length; ++i) {
                tmpObj = tmpList[t][i];
                if (tmpObj.active && !tmpObj.dontGather && !hitObjs[tmpObj.sid] && tmpObj.visibleToPlayer(this)) {
                    tmpDist = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - tmpObj.scale;
                    if (tmpDist <= items.weapons[this.weaponIndex].range) {
                        tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y);
                        if (UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle) {
                            hitObjs[tmpObj.sid] = 1;
                            if (tmpObj.health) {
                                if (tmpObj.changeHealth(-items.weapons[this.weaponIndex].dmg*(variantDmg)*
                                                        (items.weapons[this.weaponIndex].sDmg||1)*(this.skin&&this.skin.bDmg?this.skin.bDmg:1), this)) {
                                    for (var x = 0; x < tmpObj.req.length;) {
                                        this.addResource(config.resourceTypes.indexOf(tmpObj.req[x]), tmpObj.req[x+1]);
                                        x+=2;
                                    }
                                    objectManager.disableObj(tmpObj);
                                }
                            } else {
                                this.earnXP(4*items.weapons[this.weaponIndex].gather);
                                var count = items.weapons[this.weaponIndex].gather+(tmpObj.type==3?4:0);
                                if (this.skin && this.skin.extraGold) {
                                    this.addResource(3, 1);
                                } this.addResource(tmpObj.type, count);
                            }
                            hitSomething = true;
                            objectManager.hitObj(tmpObj, tmpDir);
                        }
                    }
                }
            }
        }

        // CHECK IF HIT PLAYER:
        for (var i = 0; i < players.length; ++i) {
            tmpObj = players[i];
            if (tmpObj != this && tmpObj.alive && !(tmpObj.team && tmpObj.team == this.team)) {
                tmpDist = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - (tmpObj.scale * 1.8);
                if (tmpDist <= items.weapons[this.weaponIndex].range) {
                    tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y);
                    if (UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle) {

                        // STEAL RESOURCES:
                        var stealCount = items.weapons[this.weaponIndex].steal;
                        if (stealCount && tmpObj.addResource) {
                            stealCount = Math.min((tmpObj.points||0), stealCount);
                            this.addResource(3, stealCount);
                            tmpObj.addResource(3, -stealCount);
                        }

                        // MELEE HIT PLAYER:
                        var dmgMlt = variantDmg;
                        if (tmpObj.weaponIndex != undefined && items.weapons[tmpObj.weaponIndex].shield &&
                            UTILS.getAngleDist(tmpDir+Math.PI, tmpObj.dir) <= config.shieldAngle) {
                            dmgMlt = items.weapons[tmpObj.weaponIndex].shield;
                        }
                        var dmgVal = items.weapons[this.weaponIndex].dmg *
                            (this.skin && this.skin.dmgMultO?this.skin.dmgMultO:1) *
                            (this.tail && this.tail.dmgMultO?this.tail.dmgMultO:1);
                        var tmpSpd = (0.3 * (tmpObj.weightM||1)) + (items.weapons[this.weaponIndex].knock||0);
                        tmpObj.xVel += tmpSpd * mathCOS(tmpDir);
                        tmpObj.yVel += tmpSpd * mathSIN(tmpDir);
                        if (this.skin && this.skin.healD)
                            this.changeHealth(dmgVal * dmgMlt * this.skin.healD, this);
                        if (this.tail && this.tail.healD)
                            this.changeHealth(dmgVal * dmgMlt * this.tail.healD, this);
                        if (tmpObj.skin && tmpObj.skin.dmg && dmgMlt == 1)
                            this.changeHealth(-dmgVal * tmpObj.skin.dmg, tmpObj);
                        if (tmpObj.tail && tmpObj.tail.dmg && dmgMlt == 1)
                            this.changeHealth(-dmgVal * tmpObj.tail.dmg, tmpObj);
                        if (tmpObj.dmgOverTime && this.skin && this.skin.poisonDmg &&
                            !(tmpObj.skin && tmpObj.skin.poisonRes)) {
                            tmpObj.dmgOverTime.dmg = this.skin.poisonDmg;
                            tmpObj.dmgOverTime.time = this.skin.poisonTime||1;
                            tmpObj.dmgOverTime.doer = this;
                        } if (tmpObj.dmgOverTime && applyPoison &&
                              !(tmpObj.skin && tmpObj.skin.poisonRes)) {
                            tmpObj.dmgOverTime.dmg = 5;
                            tmpObj.dmgOverTime.time = 5;
                            tmpObj.dmgOverTime.doer = this;
                        } if (tmpObj.skin && tmpObj.skin.dmgK) {
                            this.xVel -= tmpObj.skin.dmgK * mathCOS(tmpDir);
                            this.yVel -= tmpObj.skin.dmgK * mathSIN(tmpDir);
                        } tmpObj.changeHealth(-dmgVal * dmgMlt, this, this);

                    }
                }
            }
        }

        // SEND FOR ANIMATION:
        this.sendAnimation(hitSomething?1:0);
    };

    // SEND ANIMATION:
    sendAnimation(hit) {
        for (var i = 0; i < players.length; ++i) {
            if (this.sentTo[players[i].id] && this.canSee(players[i])) {
                server.send(players[i].id, "7", this.sid, hit?1:0, this.weaponIndex);
            }
        }
    };

    // ANIMATE:
    animate(delta) {
        if (this.animTime > 0) {
            this.animTime -= delta;
            if (this.animTime <= 0) {
                this.animTime = 0;
                this.dirPlus = 0;
                tmpRatio = 0;
                animIndex = 0;
            } else {
                if (animIndex == 0) {
                    tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                    this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                    if (tmpRatio >= 1) {
                        tmpRatio = 1;
                        animIndex = 1;
                    }
                } else {
                    tmpRatio -= delta / (this.animSpeed * (1-config.hitReturnRatio));
                    this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                }
            }
        }
    };

    // GATHER ANIMATION:
    startAnim(didHit, index) {
        this.animTime = this.animSpeed = items.weapons[index].speed;
        this.targetAngle = (didHit?-config.hitAngle:-Math.PI);
        tmpRatio = 0;
        animIndex = 0;
    };

    // CAN SEE:
    canSee(other) {
        if (!other) return false;
        if (other.skin && other.skin.invisTimer && other.noMovTimer
            >= other.skin.invisTimer) return false;
        var dx = mathABS(other.x - this.x) - other.scale;
        var dy = mathABS(other.y - this.y) - other.scale;
        return dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3;
    };

};

function encounterPlayer(p) {
    server.send("self", "2", [
        p.id,
        p.sid,
        p.name,
        p.x,
        p.y,
        p.dir,
        p.health,
        p.maxHealth,
        p.scale,
        p.skinColor
    ], player.sid == p.sid);
    p.sentTo[player.id] = true;
}

let players = [];

let seenPlayers = [];

let lastUpdate = Date.now();
let lastPlayerUpdate = 0;
function gameLoop() {
    const now = Date.now();
    const delta = now - lastUpdate;
    lastUpdate = now;

    for (let i = 0; i < players.length; i++) players[i].update(delta);
    for (let i = 0; i < projectileManager.projectiles.length; i++) projectileManager.projectiles[i].update(delta);

    for (let i = 0; i < players.length; i++) {
        if (!player) break;
        if (!players[i].sentTo[player.id]) {
            encounterPlayer(players[i]);
            players[i].sentTo[player.id] = true;
        }
    }

    let sendObjects = [];
    for (let i = 0; i < gameObjects.length; i++) {
        if (!player) break;
        if (!gameObjects[i].sentTo[player.id]) {
            sendObjects.push(gameObjects[i]);
            gameObjects[i].sentTo[player.id] = true;
        }
    }

    if (server) {
        server.broadcast("33", players.filter(x => x.alive).map(p => [
            p.sid,
            Math.round(p.x),
            Math.round(p.y),
            UTILS.fixTo(p.dir, 2),
            p.buildIndex,
            p.weaponIndex,
            config.fetchVariant(p).id,
            p.team,
            false,
            p.skinIndex,
            p.tailIndex,
            false,
            1
        ]).flatMap(x => x));

        if (sendObjects.length > 0) {
            server.send("self", "6", sendObjects.map(object => [
                object.sid,
                Math.round(object.x),
                Math.round(object.y),
                UTILS.fixTo(object.dir, 2),
                object.scale,
                ,
                object.type,
                object.owner.sid
            ]).flatMap(x => x));
        }
    }
}

// INIT SERVER

let bots = [{
    name: "bot 1",
    lock: true,
    autoInsta: true,
    instaType: 0
}, {
    name: "bot 2",
    lock: true,
    autoInsta: true,
    instaType: 0
}];

const botOffset = 500;

let botId = 1;

for (let i = 0; i < bots.length; i++) {
    const botinfo = bots[i];

    const x = botOffset / 2 + botOffset * i;
    const y = botOffset / 2;

    let bot = new Player("bot_" + botId, botId++, true, {
        lockPos: { x, y },
        onupdate: function() {
            const angle = UTILS.getDirection(player.x, player.y, bot.x, bot.y);
            this.dir = angle;
            const dist = Math.hypot(player.x - this.x, player.y - this.y);

            if (player.alive && this.reloads[0] <= 0 && this.reloads[1] <= 0) {
                if (dist + 15 <= items.weapons[this.weapons[0]].range) {
                    this.instakilling = true;
                    this.hits = 1;
                }
            } else if (this.reloads[1] > 0 && !this.instakilling) {
                this.weaponIndex = this.weapons[1];
            } else if (this.reloads[0] > 0 && !this.instakilling) {
                this.weaponIndex = this.weapons[0];
            }
        }
    });
    bot.setSkin(12);
    bot.setTail(11);
    bot.spawn();
    bot.weapons = [5, 15];
    bot.reloads = [0, 0];
    bot.setUserData({
        name: botinfo.name,
        skinColor: 0
    })
    players.push(bot);
}


setInterval(gameLoop, 1000 / config.serverUpdateRate);

window.WebSocket = class {
    constructor() {
        server = {
            send: (pid, id, ...data) => {
                if (pid == player.id) {
                    this.receive(id, ...data);
                }
            },
            broadcast: (id, ...data) => {
                this.receive(id, ...data);
            }
        }
        this.events = [];
    }

    set onopen(callback) {
        callback();
        this.receive("io-init", "self");
        this.receive("id", {
            "teams": []
        });
    }

    set onmessage(callback) {
        this.receive = function(id, ...args) {
            let result = {
                data: msgpack.encode([id, args])
            };
            for (let event of this.events) event[1](result);
            callback(result);
        };
    }

    addEventListener(type, callback) {
        switch (type) {
            case "message":
                this.events.push(["message", callback]);
                break;
        }
    }

    close(reason) {
        console.log("Closed: " + reason);
    }

    send(msg) {
        const [id, data] = msgpack.decode(msg);
      switch(id) {
        case "sp":
            player = new Player("self",0);
            player.spawn();
            player.resetResources();
            player.setUserData({
                name: data[0].name,
                skinColor: data[0].skinColor
            });
            this.receive("1", 0);
            encounterPlayer(player);
            players.push(player);
            for (let i = 0; i < 9; i++)
                player.earnXP(player.maxXP);
          break;
          
        case "33":
          player.moveDir = data[0];
          break;
          
        case "c":
            player.mouseState = data[0];
            if (data[0] && player.buildIndex == -1) {
                player.hits++;
            }

            if (player.buildIndex >= 0) {
                if (data[1])
                    player.dir = data[1];
                const item = items.list[player.buildIndex];
                if (player.buildItem(item)) {
                    player.mouseState = 0;
                }
                ;
            }
          break;
          
        case "7":
            player.mouseState2 = data[0];
            if (data[0] && player.buildIndex == -1) {
                player.hits++;
            }

            if (player.buildIndex >= 0) {
                if (data[1])
                    player.dir = data[1];
            }
          break;
          
        case "2":
          player.dir = data[0];
          break;
          
        case "5":
            if (data[1]) {
                player.buildIndex = -1;
                player.weaponIndex = data[0];
            } else {
                if (player.buildIndex != data[0]) {
                    player.buildIndex = data[0];
                } else {
                    player.buildIndex = -1;
                }
            }
          break;
          
        case "6":
            let item = data[0];
            const upgradableItems = items.list.filter(item=>item.age == player.upgrAge);
            const upgradableWeapons = items.weapons.filter(item=>item.age == player.upgrAge);

            let worked = false;

            if (item <= 15) {
                if (upgradableWeapons.map(weapon=>weapon.id).indexOf(item) != -1) {
                    if (upgradableWeapons.filter(weapon=>weapon.type == 0).map(weapon=>weapon.id).indexOf(item) != -1) {
                        if (player.buildIndex == -1 && player.weaponIndex == player.weapons[0]) {
                            player.weaponIndex = item;
                        }
                        console.log("primary update");
                        player.weapons[0] = item;
                        player.weaponXP[0] = 0;
                    } else {
                        if (player.buildIndex == -1 && player.weaponIndex == player.weapons[1]) {
                            player.weaponIndex = item;
                        }
                        console.log("secondary update");
                        player.weapons[1] = item;
                        player.weaponXP[1] = 0;
                    }
                    worked = true;
                }
                console.log(player.weapons);
            } else {
                item -= 16;
                if (upgradableItems.map(weapon=>weapon.id).indexOf(item) != -1) {
                    player.items[items.list[item].group.id] = item;
                    worked = true;
                }
            }

            if (worked) {
                player.upgrAge++;

                server.send("self", "17", player.items, 0);
                server.send("self", "17", player.weapons, 1);

                if (player.age - player.upgrAge + 1) {
                    server.send("self", "16", player.age - player.upgrAge + 1, player.upgrAge);
                } else {
                    server.send("self", "16", 0, 0);
                }
            }
          break;
          
        case "13c":
            if (data[0] && !(data[2] ? player.tails : player.skins)[data[1]]) {
                const item = (data[2] ? accessories : hats).find(x=>x.id == data[1]);
                if (player.points >= item.price) {
                    player.addResource(3, -item.price, true);
                    player[data[2] ? "tails" : "skins"][item.id] = 1;
                }
                server.send("self", "us", false, data[1], data[2]);
            } else if (!data[0] && ((data[2] ? player.tails : player.skins)[data[1]] || !data[1])) {
                const item = data[1] ? (data[2] ? accessories : hats).find(x=>x.id == data[1]) : {
                    id: 0
                };
                player[data[2] ? "setTail" : "setSkin"](item.id);
                server.send("self", "us", true, data[1], data[2]);
            }
          break;
          
        case "ch":
          server.broadcast("ch", player.sid, data[0]);
          break;
          
        case "8":
          player.team = data[0];
          break;
          
        case "9":
          player.team = null;
          break;
      }
    }
};

(function(){/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
/*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
var u=function(){return[function(L,w,J,k,C,D,H,b,V,A,S){if((2==((L&106)==(A=["K",1,49],L)&&M.call(this,w,-1,Lg),L^9)>>3&&(w.G||(w.G=new wV(w)),S=w.G),4)>(L>>A[1]&4)&&16<=L+3)if(b=[3,7,!0],D=k[A[0]],D[A[0]]==D.B)S=J;else{if(C=(H=(V=(k.U=k[A[0]][A[0]],a[0](A[2],0,k[A[0]])),V)&b[A[1]],V)>>>b[0],!(0<=H&&H<=w))throw u[16](12,")",H,k.U);if(C<A[1])throw Error("Invalid field number: "+C+" (at position "+k.U+")");S=b[2],k.N=(k.B=H,C)}return S},function(L,w,J,k,C,D,H,b,V,A){if(((3==(L+(A=[29,"K",15],7)&A[2])&&
M.call(this,w,-1,JS),L<<1)&A[2]||(H=w.yu,C=w.lr,k=w.LY,J=g,D=u[7](11,kc,C)?C.jP():C instanceof Cg?z[12](34,C).toString():C instanceof Cg?u[35](34,z[12](33,C).toString()):"about:invalid#zSoyz",V=J('<iframe src="'+R[7](42,D)+'" frameborder="0" scrolling="no"></iframe><div>'+z[34](16,{id:k,name:H})+"</div>")),(L+7^17)>=L)&&L-8<<2<L){for(k=(H=(b=R[4](12,(C=N[23](4,w),w)),J=N[27](35),D=[],R[A[0]](34,b[0],this).toString()),0);k<H.length;k++)D[k]=J.call(H,k);this[A[1]][C]=D}return 1>((L^10)&6)&&2<=(L^62)>>
3&&(Dh.call(this),this.N=0),V},function(L,w,J,k,C){return 2<=(((k=[7,"K","o7"],L+k[0]>>1)<L&&(L-k[0]|25)>=L&&(this[k[2]]=0,this[k[1]]&&this[k[1]].call(this.B)),L)<<1&k[0])&&9>L-k[0]&&(C=(J="undefined"!=typeof Symbol&&Symbol.iterator&&w[Symbol.iterator])?J.call(w):{next:d[33](75,0,w)}),C},function(L,w,J,k,C,D,H,b,V){if(8>(L<<(b=[13,"api2",1],2)&8)&&-81<=L<<b[2])a:{for(D=u[2](b[2],["anchor","bframe"]),C=D.next();!C.done;C=D.next())if(H=u[29](8,b[1],C.value),window.location.href.lastIndexOf(H,w)==w){V=
k;break a}V=J}return(L>>b[2]&7)==b[2]&&(D=null!=C?w+encodeURIComponent(String(C)):"",V=N[b[2]](b[0],"#",k,J+D)),V},function(L,w,J,k,C,D,H,b,V,A){if((L&(1==(L-(V=[5,25,3],V)[0]&15)&&M.call(this,w),13))==L){if(H=H5(R[V[1]](60,J)[0]),H==C)H=Vx;else{for(b=0;b<H.length;b++)R[15](65,k,H[b]);H=u[39](2,H,w)}F[31](12,H,17,D)}if((L|40)==L){if(!J)throw Error("Invalid class name "+J);if("function"!==typeof w)throw Error("Invalid decorator function "+w);}if(L+V[2]>>2<L&&(L+2&23)>=L){if(null!==J&&k in J)throw Error('The object already contains the key "'+
k+w);J[k]=C}return A},function(L,w,J,k,C,D,H,b){if(36>((b=["rq","S","RL"],(L|6)>>3||(C=["-selected","-disabled","-checked"],D=k.sm(),D.replace(/\xa0|\s/g,J),k.K={1:D+C[1],2:D+w,4:D+"-active",8:D+C[0],16:D+C[2],32:D+"-focused",64:D+"-open"}),L)|9)&&22<=L-2)if(k=void 0===k?"l":k,J[b[1]]())J[b[0]]();else J[b[2]]()||(J.vm(w),d[41](6,k,J));return H},function(L,w,J,k,C,D,H,b,V,A){if((L|32)==(1==(L|((L+1^30)<(V=[9,"O8",2],L)&&(L-1|35)>=L&&(b=k.K.get(C),!b||b.eF||b.OT>b.z0?(b&&(z[16](15,k.U,D,AS,b.dc),R[49](V[2],
J,k.K,C)),H=k.B,R[4](17,w,H.B,D)&&H.U(D)):(b.OT++,D.send(b.rw(),b.Yz(),b.jP(),b[V[1]]))),V)[0])>>3&&(k=N[23](38,w),J=a[6](25,null,R[4](52,w)[0]),"object"==typeof this.K[J]?(this.K[k]={},Object.assign(this.K[k],this.K[J])):this.K[k]=this.K[J]),L))z[22](6,J,function(S,O){N[2](29,S,this,O)},w);if((L-1^6)>=L&&L+1>>V[2]<L)a:{if(Sv&&(k=J.parentElement)){A=k;break a}A=F[39](36,(k=J.parentNode,k))&&k.nodeType==w?k:null}return A},function(L,w,J,k,C,D){return 4==(L<<(((((C=[3599,70,"U"],19<=(L+8&27)&&27>(L|
5))&&(D=null!=J&&J.HM===w),(L-7^22)>=L&&(L-4^26)<L&&!w.K)&&(w.K=new Map,w.B=0,w[C[2]]&&a[5](26,null,"=",1," ",function(H,b){w.add(decodeURIComponent(H.replace(/\+/g," ")),b)},w[C[2]])),L|72)==L&&(Ow.call(this),this[C[2]]=[]),1)==(L>>2&15)&&M.call(this,w),1)&15)&&(D=u[9](C[1],C[0])(k(w(),22))),D},function(L,w,J,k,C,D){return(L|9)&(1==((L|(C=[3,4,12],C[1]))>>C[1]||(D=a[2](39,function(H,b){return H.return(Promise.all((w=u[36](64,u[36](65,u[36]((b=[9,55,4648],65),u[b[0]](50,8930),u[b[0]](18,4723)),u[36](b[1],
u[b[0]](50,7875),u[b[0]](18,4528))),u[b[0]](18,b[2])),w.map(function(V){return u[15](9,V)()}))).then(function(V){return V.map(function(A){return A.TI()}).reduce(function(A,S){return A+S.slice(0,2)},"")}))})),L)-8>>C[0]&&(this.wb=J,this.P$=w,this.Et=k),6)||(D=F[31](C[2],w,2,J)),D},function(L,w,J,k,C,D,H,b){return((((L|8)>>((b=[7,10,2],3==(L-b[2]&3))&&(C=[21,45,18],H=b[1]*k(J(),C[1],C[b[2]],C[0])+k(J(),C[1],C[b[2]],36)),4)||w&128&&F[12](16,"g",J),(L-b[0]|70)>=L)&&(L-3^16)<L&&(D=N[23](22,w),C=R[4](72,
w),k=R[29](69,C[0],this),J=R[29](31,C[1],this),this.K[D]=k[J]),L-6)^27)>=L&&(L-8^26)<L&&(J=J=((w^Mz|3)>>5)+Mz,H=uF[(J%59+59)%59]),H},function(L,w,J,k){if((J=[2,"replace",7],1<=(L-J[2]&J[2]))&&5>(L>>1&8)&&(k=(w=u[9](38,5828)(Ew+"",gV))?N[0](10,w[J[1]](/\s/g,"")):w),17<=L<<J[0]&&1>(L<<J[0]&8)&&w!==zy)throw Error("illegal external caller");return k},function(L,w,J,k,C,D,H,b,V,A,S){return 8<=((3>L+(23<=((L^22)&(L-6>>((A=["view","bubbles","clientY"],L)-1>>4||(S=g("<center>\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0430\u0443\u0434\u0438\u043e\u0444\u0430\u0439\u043b\u043e\u0432. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e.</center>")),
4)||M.call(this,w),25))&&43>L>>1&&M.call(this,w,-1,oJ),3)>>4&&29<=(L|2)&&(RJ?(D=document.createEvent("MouseEvents"),D.initMouseEvent(C,k[A[1]],k.cancelable,k[A[0]]||J,k.detail,k.screenX,k.screenY,k.clientX,k[A[2]],k.ctrlKey,k.altKey,k.shiftKey,k.metaKey,w,k.relatedTarget||J),S=D):(k.button=w,k.type=C,S=k)),L<<1)&11)&&11>(L^63)&&(k instanceof Kg?(D=k.y,k=k.x):D=J,V=w.N,H=w.U,b=w.K-w.U,C=w.B-w.N,S=((Number(k)-H)*(w.K-H)+(Number(D)-V)*(w.B-V))/(b*b+C*C)),S},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,
P,l,m,q){if((L&60)==(((m=[10,"U",1],L)&103)==L&&(H=k.Ej,D=['<div id="rc-anchor-invisible-over-quota">','"><span>',"\u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0441\u043f\u0430\u043c\u0430 <strong>reCAPTCHA</strong></span>"],C=k.Y7,b='<div class="'+R[7](26,"rc-anchor-invisible-text")+D[m[2]],b=b+D[2]+((H?D[0]+R[15](50)+w:"")+(C?D[0]+F[32](m[2])+w:"")+F[27](21,J,k)+w),q=g(b)),L)&&(q=!!(J.L1&k)&&!!(J.be&k)!=C&&(!(0&k)||d[41](36,F[17](32,64,4,w,2,k,C),J))&&!J.xd),L-8<<m[2]>=L&&(L-8|15)<L){for(E=
(H=(f=(C=Nz((A=(O=[3,0,1],O)[m[2]],String)(k)).split("."),Nz(String(J)).split(".")),Math.max(C.length,f.length)),O)[m[2]];A==O[m[2]]&&E<H;E++){V=(S=f[E]||w,C[E])||w;do{if((b=/(\d*)(\D*)(.*)/.exec(V)||["","","",""],D=/(\d*)(\D*)(.*)/.exec(S)||["","","",""],b[O[m[2]]]).length==O[m[2]]&&D[O[m[2]]].length==O[m[2]])break;V=b[A=R[40](37,b[O[2]].length==O[m[2]]?0:parseInt(b[O[2]],m[0]),(S=D[O[0]],D[O[2]].length==O[m[2]]?0:parseInt(D[O[2]],m[0])))||R[40](38,b[2].length==O[m[2]],D[2].length==O[m[2]])||R[40](36,
b[2],D[2]),O[0]]}while(A==O[m[2]])}q=A}if((L|72)==L){if(!(z[20](7,"5.0",(S=(new Date).getTime(),"Internet Explorer"))<=k))for(E=N[28](61,D.B,w,Yc),K=0;K<E.length;K++){O=(P=D.K,P.push);a:{for(c=a[36](3,(l=E[K],3),l);c<=a[36](m[0],4,l);c++)if(V=l,A=c5(C,z[40](51,V,w),c),f=new P5,f.B(A),d[m[2]](37,w,f[m[1]]())==z[40](49,V,J)){Y=c;break a}Y=-1}O.call(P,Y),b.call(void 0,JSON.stringify(D.K),(new Date).getTime()-S)}H.call(void 0,JSON.stringify(D.K),(new Date).getTime()-S)}return(L-2^21)>=L&&(L-3^15)<L&&
(this.blockSize=-1),q},function(L,w,J,k,C,D,H,b){if(2==(L>>(1==(L>>1&(H=["count","PM",45],15))&&(z[39](31,w),(D=F[49](13,!1,J,w))&&D!==k&&null!=C&&N[43](38,void 0,w,D,!1),b=N[43](44,C,w,k)),2)&7)){if((this[(this.id=(D=(this.K=(C=[1E5,"isolated_count",1],new dV(J)),window.___grecaptcha_cfg),this.K.get(lF)?C[0]+D[C[1]]++:D[H[0]]++),this.dY=w,H)[1]]=w,this.K).has(m2)){if(!(k=a[18](14,C[2],this.K.get(m2)),k))throw Error("The bind parameter must be an element or id");this[H[1]]=k}this.C=R[this.U=(this.N=
(this.I=this.O=null,0),this).B=null,47](34),R[11](22,"waf",!0,this,C[2])}return(L&108)==(16<=L-5&&32>L-3&&(this.Cc=this.Cc,this.xd=this.xd),L)&&(C=N[23](50,w),J=R[4](24,w),k=R[2](29,this,J[0]),D=R[2](H[2],this,J[1]),this.K[C]=k%D),b},function(L,w,J,k,C,D,H,b){if(H=[37,8,39],0<=(L<<2&2)&&6>((L^6)&H[1])){if(J instanceof Q)D=J.height,J=J.width;else{if(void 0==C)throw Error("missing height argument");D=C}k.style.height=z[H[0]]((k.style.width=z[H[0]](H[2],w,J),H[0]),w,D)}return(L&47)==L&&(C=z[H[0]](2,
J),k=qz.V(),B5.hasOwnProperty(C[k])||(C[k]=w),b=C),b},function(L,w,J,k,C,D,H,b,V,A){if(3==(A=[10,80,16],L+5>>3))throw Error("Invalid UTF8");if(L-9<A[0]&&7<=(L>>1&15))try{V=d[44](A[1],w).filter(function(S){return!S.startsWith(d[15](17,J))}).length}catch(S){V=-1}return(2==(1==(L+4&15)&&(V=u[24](22)?!1:N[38](A[0],w)),L>>1&14)&&(k=void 0===k?R[3].bind(null,4):k,b=[!0,2,null],w!=b[2]&&(hS&&w instanceof Uint8Array?V=w.length?new F8(new Uint8Array(w),zy):F[1](44):Array.isArray(w)?(C=d[49](75,w),C&b[1]?V=
w:!J||C&32||!(C&A[2]||0===C)?(D=z[A[0]](A[2],b[2],k,w,u[15].bind(null,4),b[0]),H=d[49](89,D),H&4&&H&b[1]&&Object.freeze(D),V=D):(d[44](76,C|b[1],w),V=w)):V=w.um===Ty?u[17](44,w):w)),4==(L-3&13))&&(C=void 0===C?d[29].bind(null,1):C,k=void 0===k?!0:k,V=function(S,O,f){var E=[15,32,3],K=ev.apply(E[2],arguments);S=void 0===S?a[E[0]](96):S;var Y,c,P,l,m=this,q,B,h;return a[2](E[1],function(T,e,p){if(1==(e=[2,(p=[11,20,18],0),3],T.K))return X8=O||X8,Qx=Qx||f,l=Math.abs(R[16](p[2],5,S)),P=z[46](8,e[0],l),
k&&N[p[1]](p[0],e[1],function(v){return v=[5812,9,18],K.unshift(u[v[1]](70,4263)(),u[v[1]](38,3754)(),u[v[1]](39,9323),u[v[1]](v[2],v[0]))}),Y=z[26](1,!0,"\\",e[1],25,function(){return w.apply(m,K)},C),a[12](81,Y.B(l),e[0],T);return(void 0!=(N[p[2]](31,(B=(h=T.B,q=h.z9,h).T,1),B,P),X8.qj(function(v){return F[31](21,v,3,P)}),f)&&Qx==f&&(c=new v5,a[36](p[0],e[2],P)==e[1]||Y.K.K()==e[1]?F[31](15,e[0],1,c):Y.U?F[31](7,e[2],1,c):Y.N?F[31](p[1],4,1,c):F[31](16,1,1,c),N[p[2]](31,e[0],q,c),pg.push(c),Qx=
void 0),T).return(new tS(J,P,q))})}),V},function(L,w,J,k,C,D,H){return(6<=((((H=[1,"K",15],2==(L>>2&H[2])&&this&&this.TT)&&(w=this.TT)&&"SCRIPT"==w.tagName&&u[21](H[0],null,w,!0,this.t0),L-H[0]&13||(D=a[48](19,w,void 0===C?0:C,a[36](34,J,k))),L+9)&25)<L&&(L+5&41)>=L&&(D=t&&"number"===typeof w.timeout&&void 0!==w.ontimeout),L<<H[0]&11)&&((L^62)&8)<H[0]&&(D=Error("Invalid wire type: "+J+" (at position "+k+w)),(L|16)==L)&&(D=w instanceof yx&&w.constructor===yx?w[H[1]]:"type_error:SafeUrl"),D},function(L,
w,J,k,C,D,H,b){if((L&107)==(((8<=(b=[64,15,"f1"],L>>2&13)&&((L|6)&b[1])<b[1]&&(u[19](32,w.rI)?H=w:(J=R[47](4,16,1,w,!0),R[40](b[0],2,J.rI),H=J)),L-1)^23)<L&&(L-4^21)>=L&&(Gy=J,k=new w(J),Gy=void 0,H=k),L))a:{switch(typeof k){case "number":H=isFinite(k)?k:String(k);break a;case "object":if(k)if(Array.isArray(k)){if(0!==(d[49](88,k)&w)){H=(F[12]((C=Array.prototype.slice.call(k),23),"g",C),C);break a}}else{if(R[19](27,J,k)){H=a[21](31,3,k);break a}if(k instanceof F8){H=(D=k[b[2]],D==J?"":"string"===
typeof D?D:k[b[2]]=a[21](37,3,D));break a}}}H=k}if((L+7^14)<((L&30)==L&&(k=typeof J,H=k!=w?k:J?Array.isArray(J)?"array":k:"null"),L)&&(L-8|36)>=L)z[2](2,!0,0,w.j8,w.url,function(V,A,S,O){if(O=["jS","responseText",(S=V.target,"")],S.nc()){try{A=S.o?S.o[O[1]]:""}catch(f){A=O[2]}J(A)}else k(S[O[0]]())},w.Xo,w.body,w.rs,w.withCredentials);return H},function(L,w,J,k,C,D,H){return L<<(2<=(D=[7,1,20],L<<D[1]&D[0])&&17>(L|D[1])&&(H=a[48](D[2],null,w,a[36](98,k,J))),D[1])&D[0]||(this.left=w,this.top=J,this.width=
k,this.height=C),H},function(L,w,J,k,C,D,H,b){return L-5<<2>=(4<=(3==(((H=["-hover",7,"K"],3==(L|2)>>3)&&(w[H[2]]||u[5](1,H[0]," ",w),b=w[H[2]][J]),L-5)&H[1])&&(b=!!(d[49](73,w)&2)),(L|8)&15)&&L-4<H[1]&&(C=[].concat(R[9](1,Object.values(sw)),R[9](67,Object.values(iF))),(w=Uw.X()).U.apply(w,R[9](3,C)),k=ng(xc.map(function(V){return V.K()})),(J=Uw.X()).B.apply(J,R[9](64,C)),b=k),L)&&(L-9|71)<L&&(J=R[4](48,w),k=R[2](57,this,J[0]),D=R[29](62,J[1],this),C=R[29](63,J[2],this),D==C&&(this.B+=k)),b},function(L,
w,J,k,C,D,H,b,V){if(!((L^32)&((L&26)==(b=[4,15,"D"],L)&&Array.isArray(k)&&(D=d[49](95,k),H=1,!C||D&J||(H|=w),(D&H)!==H&&d[44](75,D|H,k)),b[1]))){if(null==rV)a:{if(w=y.navigator)if(k=w.userAgent){J=k;break a}J=""}else J=rV;V=J}return((L-1&(L+2&27||(V=N[17](18,w,d[45](1,0,a[41](58,J,D),C.toString(),Lj),k)),13))==b[0]&&(kq=J,Cj=k,D$=N[3].bind(null,2),Ew=w),L|40)==L&&(HL.call(this,"multicaptcha"),this.A7=[],this.P=0,this.dI=!1,this.K=[],this[b[2]]=[]),V},function(L,w,J,k,C,D,H,b){if(29<=(b=["clearTimeout",
"setTimeout",2],L+5)&&(L^20)>>4<b[2])if(C=[!1,"-checked",null],D=k.sm(),J==w)H=D+C[1];else if(J==C[0])H=D+"-unchecked";else if(J==C[b[2]])H=D+"-undetermined";else throw Error("Invalid checkbox state: "+J);return(L&45)==L&&(C!=w&&y[b[0]](C),J.onload=function(){},J.onerror=function(){},J.onreadystatechange=function(){},k&&window[b[1]](function(){u[36](25,J)},0)),H},function(L,w,J,k,C,D){return(L|((L+5^((L|(C=["ZD",((L-9|13)<L&&(L+1&25)>=L&&(D=Math.floor(Math.random()*w)),"classList"),44],72))==L&&J[C[0]].push(w),
13))>=L&&L-3<<1<L&&(D=N[20](2,!0,function(){return J().parent!=J()?!0:null!=J().frameElement?!0:!1})),56))==L&&(J[C[1]]?J[C[1]].add(w):N[C[2]](2,J,w)||(k=z[34](15,"","class",J),a[12](22,"class",J,k+(0<k.length?" "+w:w)))),D},function(L,w,J,k,C,D,H,b,V){return((L&(3==(L>>(V=["removeAttribute"," ","forEach"],2)&15||(w.classList?Array.prototype[V[2]].call(J,function(A){d[22](44,A,w)}):a[12](24,"class",w,Array.prototype.filter.call(a[3](25,w),function(A){return!a[31](1,A,J)}).join(V[1]))),(L^58)&7)&&
(D=C.ms())&&(H=k.getAttribute(w)||J,D!=H&&(D?k.setAttribute(w,D):k[V[0]](w))),60))==L&&(this.K=("undefined"==typeof document?null:document)||{cookie:""}),L-2|62)>=L&&(L-2^11)<L&&(this.B=this.K=null),b},function(L,w,J,k,C){return 24>(C=[1,3,7],L<<C[0])&&4<=(L<<C[0]&C[2])&&(w[0]=J),(L^17)>>C[1]||(bJ?(w=jc,k=!!w&&0<w.brands.length):k=!1),k},function(L,w,J,k,C,D,H){if(((D=[24,"call",12],L-9)^21)>=L&&(L+9^32)<L)if(w instanceof VR||w instanceof A$||w instanceof Sc)H=w;else if("function"==typeof w.next)H=
new VR(function(){return w});else if("function"==typeof w[Symbol.iterator])H=new VR(function(){return w[Symbol.iterator]()});else if("function"==typeof w.rY)H=new VR(function(){return w.rY()});else throw Error("Not an iterator or iterable.");return(L<<1&7||(H=d[D[2]](D[0],J,w,"raw",0,C,k).catch(function(){return N[32](34,k,C)})),(L&11)==L)&&(OI[D[1]](this,w.qO),this.type="action"),H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p,v,n,X){if(L-8<<1>=(X=[0,"invisible","data-type"],L)&&
(L-3^23)<L){if(F[39]((J=void 0===(k=(m=[0,"data-pool","error-callback"],void 0===k?!0:k),J)?{}:J,34),w)&&1==w.nodeType||!F[39](22,w)||(J=w,w=N[37](16,"DIV",document),N[35](9).appendChild(w),J[qz.V()]=X[1]),E=a[18](13,1,w),!E)throw Error("reCAPTCHA placeholder element must be an element or id");if((!J[MW.V()]&&window.___grecaptcha_cfg.badge&&window.___grecaptcha_cfg.badge.length>m[X[0]]&&(J[MW.V()]=window.___grecaptcha_cfg.badge[m[X[0]]]),k?(l=E,c=l.getAttribute("data-sitekey"),S=l.getAttribute(X[2]),
O=l.getAttribute("data-theme"),P=l.getAttribute("data-size"),T=l.getAttribute("data-tabindex"),q=l.getAttribute("data-bind"),H=l.getAttribute("data-preload"),p=l.getAttribute("data-badge"),B=l.getAttribute("data-s"),v=l.getAttribute(m[1]),C=l.getAttribute("data-content-binding"),K=l.getAttribute("data-action"),b={sitekey:c,type:S,theme:O,size:P,tabindex:T,bind:q,preload:H,badge:p,s:B,pool:v,"content-binding":C,action:K},(e=l.getAttribute("data-callback"))&&(b.callback=e),(f=l.getAttribute("data-expired-callback"))&&
(b["expired-callback"]=f),(D=l.getAttribute("data-error-callback"))&&(b[m[2]]=D),(h=l.getAttribute("data-fast"))&&(b.fast="false"===h.toLowerCase()?!1:!!h),Y=b,J&&ax(Y,J)):Y=J,z)[1](14,E))throw Error("reCAPTCHA has already been rendered in this element");if("BUTTON"==E.tagName||"INPUT"==E.tagName&&("submit"==E.type||"button"==E.type))Y[m2.V()]=E,V=N[37](21,"DIV",document),E.parentNode.insertBefore(V,E),E=V;if(0!==F[8](72,1,E).length)throw Error("reCAPTCHA placeholder element must be empty");if(!Y||
!F[39](38,Y))throw Error("Widget parameters should be an object");n=((A=new fj(E,Y),window.___grecaptcha_cfg).clients[A.id]=A,A).id}if(((4>((L^48)&8)&&-37<=(L^60)&&(k=R[47](34),uJ.set(k,{filter:J,h0:w}),n=k),L)|40)==L)a:{for(C=(k=Object.getOwnPropertyNames(Date),J);C<k.length;C++)if(k[C].length==w&&87==k[C].charCodeAt(-1)){n=k[C];break a}n=""}return n},function(L,w,J,k,C){return(L-3^(k=[1,"click",33],10))<L&&L-5<<2>=L&&(C=w instanceof EI?new EI(w):new EI(w)),((L^23)&8)<k[0]&&11<=(L^23)&&(wV.call(this),
N[17](k[2],w,k[1],this,J,!1),N[17](97,w,"submit",this,J,!1)),C},function(L,w,J,k,C,D,H,b){if(b=[2,"rc-imageselect-tile",6],(L&122)==L)a:{for(D in k)if(C.call(void 0,k[D],D,k)){H=J;break a}H=w}return(L>>1&7)>=b[2]&&5>(L>>b[0]&8)&&this.Ib&&(this.Qe=void 0,Array.prototype.forEach.call(F[12](1,"*",b[1]),function(V,A,S){if(V!=a[37]((S=[22,10,"rc-imageselect-keyboard"],55),null,document))d[S[0]](S[1],S[2],V);else this.Qe=A,u[S[0]](56,S[2],V)},this)),H},function(L,w,J,k,C,D,H,b,V,A){if((39>(L+4&(V=["ctrlKey",
"api","call"],3)||(C=["enterprise/","__recaptcha_api","fallback"],k=y[C[1]]||"https://www.google.com/recaptcha/api2/",k.endsWith("api2/")||k.endsWith(C[0])||(k+="api2/"),J==C[2]&&(k=k.replace(w,V[1])),A=(u[27](11,k).K?"":"//")+k+J),L)+4&&27<=L<<1&&(H=new Date(k,D,C),0<=k&&k<J&&H.setFullYear(H.getFullYear()-w),A=H),L|40)==L&&(b=[!1,null,!0],ge[V[2]](this,w?w.type:""),this.target=b[1],this.B=b[1],this.relatedTarget=b[1],this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.keyCode=
0,this[V[0]]=b[0],this.altKey=b[0],this.shiftKey=b[0],this.metaKey=b[0],this.state=b[1],this.N=b[0],this.pointerId=0,this.pointerType="",this.qO=b[1],w)){if(D=(C=(this.target=w.target||w.srcElement,H=(this.B=J,this.type=w.type),w.changedTouches&&w.changedTouches.length?w.changedTouches[0]:null),w.relatedTarget)){if(zz){a:{try{k=(Rx(D.nodeName),b[2]);break a}catch(S){}k=b[0]}k||(D=b[1])}}else"mouseover"==H?D=w.fromElement:"mouseout"==H&&(D=w.toElement);this.pointerType=(this.state=w.state,"string"===
typeof(this[this.button=(((this.key=(this.metaKey=w.metaKey,this.altKey=w.altKey,w.key||""),(this.shiftKey=w.shiftKey,this).keyCode=w.keyCode||0,this.qO=w,this).relatedTarget=D,C)?(this.clientX=void 0!==C.clientX?C.clientX:C.pageX,this.clientY=void 0!==C.clientY?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=void 0!==w.clientX?w.clientX:w.pageX,this.clientY=void 0!==w.clientY?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0),w).button,V[0]]=
w[V[0]],(this.pointerId=w.pointerId||0,this).N=Kj?w.metaKey:w[V[0]],w).pointerType?w.pointerType:cL[w.pointerType]||""),w.defaultPrevented&&OI.R.preventDefault[V[2]](this)}return A},function(L,w,J,k,C,D,H){return((L&62)==(H=["M","K",0],L)&&(J[H[1]]=J.U||J[H[0]],J.I={Y3:w,te:!0}),L+2>>3>=H[2])&&9>L-7&&(k=[0,null,1],C=d[24](15,"recaptcha-checkbox",PL),G.call(this,k[1],C,J),this.U=k[2],this.C=k[1],this.tabIndex=w&&isFinite(w)&&w%k[2]==k[H[2]]&&w>k[H[2]]?w:0),D},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){return 1==
L+4>>((L&(K=[74,"Km9gKuG06He-isPsP6saG8cn",6],K)[0])==L&&(this.src=w,this.B=0,this.K={}),3)&&(E=u[9](38,8907)(u[9](50,2293)(u[9](38,1417)(w).replace(/\s/g,"^"),/.*[<\(\^@]([^\^>\)]+)/))),2>(L|K[2])>>4&&L>>1>=K[2]&&(E=a[2](11,function(Y,c,P){P=["K",(c=[5,2,null],"challengeAccount request failed."),"B"];switch(Y[P[0]]){case w:if(!D.U)throw Error("could not contact reCAPTCHA.");if(!D[P[2]])return Y.return(a[18](70,c[1]));return a[12](34,(Y.U=c[1],D.U),C,Y);case C:R[35](51,0,(S=Y[P[2]],Y),3);break;case c[1]:throw R[27](45,
c[2],Y),Error("could not contact reCAPTCHA.");case 3:return b={},V=(b[J]=D[P[0]],b),Y.U=c[0],a[12](49,S.send("r",V,1E4),7,Y);case 7:return O=Y[P[2]],f=new de(O),H=f.J(),A=f.Z5(),D[P[0]]=R[23](31,f,c[1]),D[P[0]]&&H!=c[1]&&6!=H&&10!=H&&A?D.N=new lJ(A):D[P[2]]=k,Y.return(a[18](67,H,f.N()));case c[0]:throw R[27](36,c[2],Y),Error(P[1]);}})),(L|56)==L&&(E=N[18](9,w,K[1],J)),E},function(L,w,J,k,C,D,H,b,V,A){if((L|64)==(L>>1&(A=["Pm",((L^9)>>3||(this.K=new Set),"mouseenter"),46],14)||M.call(this,w),L))a:{if("bottomright"==
(b=C,H))b=w;else if("bottomleft"==H)b="left";else{V=void 0;break a}(R[A[2]](54,D,D[A[0]],A[1],function(){F[31](52,this.Pm,b,J)},D),R)[A[2]](54,D,D[A[0]],"mouseleave",function(){F[31](56,this.Pm,b,k)},D)}return L<<1&7||(V=w?w.parentWindow||w.defaultView:window),V},function(L,w,J,k,C,D){return(L&(D=[8,24,89],(L|D[1])==L&&M.call(this,w,6,mk),D[2]))==L&&(C=qW&&!k?y.btoa(J):a[21](33,w,d[0](D[0],D[0],0,J),k)),C},function(L,w,J,k,C,D,H){if(D=[1,21,17],2==((L|8)&7)){if(1===BL&&!(J instanceof w))throw Error("Expected instanceof "+
R[D[1]](D[2],w)+" but got "+(J&&R[D[1]](16,J.constructor)));H=J}if(((L^6)&7)==(2==(L>>D[0]&7)&&(H=u[42](10,w,this.K,this.O_,!0)),D[0]))a:{if(k=void 0===k?!1:k,C=w.get(J)){if("function"===typeof C){H=C;break a}if("function"===typeof window[C]){H=window[C];break a}k&&console.log("ReCAPTCHA couldn't find user-provided function: "+C)}H=function(){}}return H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){return(L|32)==((L&14)==(16<=L+(E=[2,'"></div></div><div class="',42],7)&&33>L+9&&(f=k.colSpan,C=k.gs,D=k.EU,
O=k.Rt,A=["%; left: ",4,'"'],V=k.Qw,b=k.e8,H=k.rowSpan,S=F[E[2]](33,H,A[1])&&F[E[2]](39,f,A[1])?' class="'+R[7](18,"rc-image-tile-44")+A[E[0]]:F[E[2]](32,H,A[1])&&F[E[2]](32,f,E[0])?' class="'+R[7](10,"rc-image-tile-42")+A[E[0]]:F[E[2]](32,H,1)&&F[E[2]](31,f,1)?' class="'+R[7](58,"rc-image-tile-11")+A[E[0]]:' class="'+R[7](50,"rc-image-tile-33")+A[E[0]],K=g('<div class="'+R[7](26,"rc-image-tile-target")+'"><div class="'+R[7](10,"rc-image-tile-wrapper")+'" style="width: '+R[7](58,z[4](56,w,O))+"; height: "+
R[7](10,z[4](58,w,V))+J+S+" src='"+R[7](26,F[3](76,C))+'\' alt="" style="top:'+R[7](18,z[4](59,w,-100*b))+A[0]+R[7](E[0],z[4](57,w,-100*D))+'%"><div class="'+R[7](E[0],"rc-image-tile-overlay")+E[1]+R[7](26,"rc-imageselect-checkbox")+'"></div></div>')),L)&&(K=N[38](E[0],"Android")&&!(z[39](18,"CriOS")||a[8](65,"FxiOS")||u[15](61,J)||N[38](58,w))),L)&&(K=String(w).replace(h$,N[12].bind(null,3))),K},function(L,w,J,k,C,D,H,b,V){return(L+9&((((L|(V=["concat",72,41],24))==L&&w&&w.parentNode&&w.parentNode.removeChild(w),
L|40)==L&&(b=R[49](33,null,u[V[2]].bind(null,V[2]))),5)<=((L^77)&7)&&1>(L|5)>>5&&(I.call(this),this.N=void 0!==w?w:1,this.I=void 0!==D?Math.max(0,D):0,this.O=!!H,this.B=new FP(J,k,C,H),this.K=new Tz,this.U=new wV(this)),V)[1])>=L&&(L+6&26)<L&&(b=[][V[0]](w,J,k||[],k+C/1||[],k+D/2||[],k+H/5||[])),b},function(L,w,J,k,C,D,H,b,V){return 1==((L&(1>((L&(V=["Fr","inline",0],91))==L&&(H=["rc-button",!1,!0],XP.call(this),this.fY=k,this.J_=new Q(w,J),this.Y=null,this.I=this.J_,this.Fc=C||H[1],this.response=
{},this.ZD=[],D=d[20](50,"div",H[1]),this.D5=a[7](9,void 0,this,"recaptcha-reload-button",H[V[2]],C?void 0:3,D?"rc-button-reload-on-dark":"rc-button-reload","\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"),this.IL=a[7](13,void 0,this,"recaptcha-audio-button",H[V[2]],C?void 0:1,D?"rc-button-audio-on-dark":"rc-button-audio","\u041f\u0440\u043e\u0439\u0442\u0438 \u0430\u0443\u0434\u0438\u043e\u0442\u0435\u0441\u0442"),this[V[0]]=a[7](9,void 0,this,"recaptcha-image-button",H[V[2]],void 0,D?"rc-button-image-on-dark":
"rc-button-image","\u041f\u0440\u043e\u0439\u0442\u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u0441\u0442"),this.k9=a[7](13,void 0,this,"recaptcha-help-button",H[V[2]],C?void 0:2,D?"rc-button-help-on-dark":"rc-button-help","\u0421\u043f\u0440\u0430\u0432\u043a\u0430",H[2]),this.ue=a[7](41,void 0,this,"recaptcha-undo-button",H[V[2]],void 0,D?"rc-button-undo-on-dark":"rc-button-undo","\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",H[2]),this.Hm=a[7](41,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c",
this,"recaptcha-verify-button"),this.MB=new QR),(L|5)>>5)&&1<=L+6>>3&&("none"!=d[16](71,w,"display")?b=N[47](13,w):(D=w.style,H=D.display,J=D.position,C=D.visibility,D.visibility="hidden",D.position="absolute",D.display=V[1],k=N[47](14,w),D.display=H,D.position=J,D.visibility=C,b=k)),47))==L&&(w=[0,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","2fa"],U.call(this,w[V[2]],w[V[2]],w[2]),this.F=null,this.K=new vL(""),d[13](43,this.K,this),this.P=new pj,d[13](45,this.P,this),this.C=new t$,d[13](43,
this.C,this),this.D=null,this.U=a[7](45,w[1],this),this.Z=a[7](77,"\u041e\u0442\u043c\u0435\u043d\u0430",this)),(L^52)>>3)&&(this.width=J,this.height=w),b},function(L,w,J,k,C,D,H,b,V,A){if(((A=[5,8,"K"],0)<=(L-1&3)&&((L|6)&A[1])<A[0]&&(V=a[1](24,w[A[2]])+w.B[A[2]].size),(L-9&A[1])<A[0]&&26<=L-1)&&(C&&(H="string"===typeof C?C:F[10](49,k,C),C=D.O&&H?F[1](1,H,D.O)||J:null,H&&C&&(b=D.O,H in b&&delete b[H],d[19](57,w,C,D.M),C.gY(),C.B&&u[36](28,C.B),a[25](16,J,J,C))),!C))throw Error("Child is not in parent component");
return V},function(L,w,J,k,C,D,H){return 3==(L>>((L&((2==((D=["prototype",53,40],L)|3)>>3&&k&&Object.defineProperty(k,C,{get:function(b,V,A,S,O,f){return((b=(O=(A=new (V=J[f=["MB",1,0],f[0]],WL),N[f[2]](12,C)),N)[18](8,f[1],O,A),S=a[20](30,!1,b,2,2),d)[18](7,w,V,f[1],WL,S),k.attributes[C]).value}}),L|D[2])==L&&(C=z[D[2]](D[1],J,k),null!=C&&N[36](38,8,a[22](57,192,128,C),w,k)),103))==L&&(k=d[49](78,w),(k&J)!==J&&(Object.isFrozen(w)&&(w=Array[D[0]].slice.call(w)),d[44](77,k|J,w)),H=w),2)&11)&&(H=(C=
k(J(),31))?C.length+","+k(C,15).length:"-1,-1"),H},function(L,w,J,k,C){return(L&((15>L>>(k=[1,28,11],k[0])&&14<=L-k[0]&&(J=void 0===J?null:J,C={then:function(D,H){return u[J&&J(D,H),40](20,w.then(D,H))},"catch":function(D){return u[40](18,w.then(void 0,D),J)}}),16)>L>>2&&(L-k[0]&15)>=k[2]&&(d[42](10,J.O),J.N=w),79))==L&&(C=R[k[1]](62,u[8](56,w,R[k[2]](17,k[0])),[R[25](65,J)])),C},function(L,w,J,k,C,D,H,b,V,A,S,O){if(!(L-8>>(O=[28,2,7],3)))if(C=[0,1,7],J>=C[0])d[23](O[2],k,J);else{for(D=C[0];9>D;D++)k.K.push(J&
w|128),J>>=C[O[1]];k.K.push(C[1])}return((((L|40)==L&&(S=document),(L|48)==L&&(V=["rc-imageselect-carousel-offscreen-right","rc-imageselect-carousel-leaving-left",4],A=a[37](54,w,document),D.vm(k),b=void 0!==H.previousElementSibling?H.previousElementSibling:a[46](18,1,k,H.previousSibling),u[22](63,V[0],H),u[22](56,V[1],b),u[22](60,D.U.T.PK.rowSpan==V[O[1]]&&D.U.T.PK.colSpan==V[O[1]]?"rc-imageselect-carousel-mock-margin-1":"rc-imageselect-carousel-mock-margin-2",H),S=R[44](64,0,H).then(x(function(){a[0](29,
function(f){(((((f=["rc-imageselect-carousel-offscreen-left",22,0],d)[f[1]](42,"rc-imageselect-carousel-offscreen-right",H),d)[f[1]](24,"rc-imageselect-carousel-leaving-left",b),u)[f[1]](61,"rc-imageselect-carousel-entering-right",H),u)[f[1]](58,f[0],b),a)[f[2]](28,function(E,K,Y,c,P){for((Y=(K=(((((d[22](45,(c=[0,4,(P=["rc-imageselect-carousel-entering-right",1,"vm"],"rc-imageselect-tileselected")],P)[0],H),d)[22](13,this.U.T.PK.rowSpan==c[P[1]]&&this.U.T.PK.colSpan==c[P[1]]?"rc-imageselect-carousel-mock-margin-1":
"rc-imageselect-carousel-mock-margin-2",H),u)[36](29,b),this)[P[2]](!0),A)&&A.focus(),c[0]),this.U.T).PK,E=Y.WK,Y).Xy=c[0];K<E.length;K++)E[K].selected=k,d[22](12,c[2],E[K].element)},C,this)},J,this)},D))),-83)<=L>>O[1]&&4>(L<<O[1]&15)&&(C="keydown".toString(),S=u[O[0]](O[1],!1,!0,k.K,function(f,E){for(E=0;E<f.length;++E)if(f[E].type==C)return J;return w})),L-1)&23)==O[1]&&M.call(this,w,-1,yR),S},function(L,w,J,k,C,D,H,b,V,A,S,O){return(L|16)==(((S=[6,!1,"rI"],7)<=L+4&&13>L-S[0]&&(H=C=void 0===C?
!1:C,D=a[36](35,J,w,H),A=N[17](38,S[1],null,D,k),A!==D&&null!=A&&(N[43](42,A,w,J,H),R[40](24,d[49](72,w[S[2]])&-33,A[S[2]])),V=A,null==V?O=V:(u[19](32,w[S[2]])||(b=a[35](55,S[1],V),b!==V&&(V=b,N[43](42,V,w,J,C))),O=V)),(L-7|19)<L)&&(L+4^3)>=L&&(Gz.call(this,"/recaptcha/api3/accountverify",a[35](14,0,Ix),"POST"),this.U=!0,u[S[0]](32,this,w)),L)&&(w=new Z$(function(f,E){J=(k=E,f)}),O=new sI(w,k,J)),O},function(L,w,J,k,C,D,H,b){if((L-1|((b=["rc-anchor-invisible-nohover",0,58],L-9<<2<L&&(L+8^27)>=L)&&
(iJ.call(this),this.K=!1,this.B=w,this.U=new wV(this),d[13](46,this.U,this),J=this.B.B,R[46](55,R[46](b[2],N[17](41,J,UI.ID,this.U,this.I),J,UI.Oj,this.O),J,"click",this.N)),3))<L&&(L+6^4)>=L&&J.o){D=(C=(a[11](24,w,J),J.D[b[1]]?function(){}:null),J.D=w,J.o),J.o=w,k||d[41](20,"ready",J);try{D.onreadystatechange=C}catch(V){}}return(L+6&30)>=L&&(L+4^18)<L&&(C=w.nH,k=w.LH,D=w.BK,J=["</div>"," ",'<div class="'],H=g(J[2]+R[7](42,"rc-anchor")+J[1]+R[7](50,"rc-anchor-invisible")+J[1]+R[7](26,D)+"  "+(1==
C||2==C?R[7](2,"rc-anchor-invisible-hover"):R[7](34,b[0]))+'">'+a[22](15,w.ds)+N[15](64)+(1==C!=k?a[39](1,J[b[1]],J[1],w)+u[12](1,J[b[1]],J[1],w):u[12](3,J[b[1]],J[1],w)+a[39](3,J[b[1]],J[1],w))+J[b[1]])),H},function(L,w,J,k,C,D,H,b,V,A,S,O){if(3<=(L<<1&(2>(((24>((O=["l",15,"ue"],L)|9)&&6<=(L<<1&O[1])&&(S=nj?null==w||"string"===typeof w?w:void 0:w),L)|4)&8)&&7<=(L>>2&9)&&(H=[!0,null,"a"],wV.call(this),this.U=w,this.Z=k,this.N=H[1],this.Fr=C,xq=J.G,this.Qe=H[1],this.K=J,this.B=H[2],this.M=z[26](38,
H[1],this),this[O[0]]=H[1],this.S=H[1],a[2](25,d[O[1]](17,H[2]),0)?D=!1:(d[33](57,d[O[1]](27,H[2]),a[O[1]](64),0),D=H[0]),this.gI=H[1],this.vM=D,this.kz={a:{n:this.O,p:this.ye,ee:this.Y,eb:this.O,ea:this.D5,i:x(this.U.Ba,this.U),m:this.A7},b:{g:this.IL,h:this.F,i:this.kd,d:this.dI,j:this.P,q:this[O[2]]},c:{ed:this.t0,n:this.O,eb:this.O,g:this.G,j:this.P},d:{ed:this.t0,g:this.G,j:this.P},e:{n:this.O,eb:this.O,g:this.G,d:this.dI,h:this.F,i:this.kd},f:{n:this.O,eb:this.O},g:{g:this.IL,h:this.F,ec:this.MB,
ee:this.Y},h:{}},this.I=Promise.resolve()),7))&&4>(L<<1&16)&&k!=w){if(Array.isArray(k))A=z[10](49,null,J,k,D,void 0!==C);else{if(F[8](35,k)){for(b in H={},k)H[b]=u[44](66,null,J,k[b],C,D);V=H}else V=D(k,C);A=V}S=A}return(L+3&30)>=L&&(L-1^25)<L&&(S=Date.now()),S}]}(),F=function(){return[function(L,w,J,k,C){if(((L^48)&15)==(C=[2,0,14],C)[0]){for(w=C[1];kq=u[6](65,1,kq);)w++;k=w}return 9>((L|7)&((1==(8>(L^40)&&7<=((L|9)&C[2])&&M.call(this,w),L>>C[0]&27)&&(k=re.toString),L)<<C[0]&13||(k=null),C)[2])&&
17<=L>>C[0]&&(J=["POST",2,0],Gz.call(this,N[28](47,"api2","reload"),a[35](18,J[C[0]],Lu),J[C[1]]),F[11](15,!0,38,this),u[31](58,1,w),d[16](3,J[1],w),this.K=d[1](24,J[C[0]],ky,w)),k},function(L,w,J,k,C,D,H,b,V){if((L^33)>>((L|40)==(b=[55,0,61],L)&&(V=Cu||(Cu=new F8(null,zy))),4)>=b[1]&&14>(L^25)){for(C in D=[],k)d[19](18,w,D,C,k[C]);V=D.join(J)}if((L|64)==L)if(H.K(C),D)F[31](60,H.P,"opacity",w),F[31](51,H.P,"transform","scale(0)"),a[b[1]](b[2],x(function(){F[31](49,this.P,"display",J)},H),k);else F[31](b[0],
H.P,"display",J);return(L|9)>>4||(V=null!==J&&w in J?J[w]:void 0),V},function(L,w,J,k,C,D,H,b){return((11>(L^((H=["pageXOffset","scrollTop","replace"],L|72)==L&&(0,eval)(w),54))&&2<=(L^27)>>3&&(k=w.scrollingElement?w.scrollingElement:!Di&&N[12](14,w)?w.documentElement:w.body||w.documentElement,J=w.parentWindow||w.defaultView,b=t&&J.pageYOffset!=k[H[1]]?new Kg(k.scrollLeft,k[H[1]]):new Kg(J[H[0]]||k.scrollLeft,J.pageYOffset||k[H[1]])),1)==((L^49)&13)&&("string"===typeof J?(D=encodeURI(J)[H[2]](k,z[21].bind(null,
10)),C&&(D=D[H[2]](/%25([0-9a-fA-F]{2})/g,"%$1")),b=D):b=w),L)<<2&15||Hu.call(this,w,J),(L&85)==L&&(b=J.style.display!=w),b},function(L,w,J,k,C,D,H,b,V,A){return((((L&(V=[15,40,50],(L|48)==L&&(b=[":",0,1],H.K&&(u[38](27,b[2],null,b[0],H.K,H),z[21](2,H.K)),H.K=F[21](12,"canvas",J,"2fa",D),a[11](89,b[1],H.K,H),H.K.render(H.L()),d[17](10,w,C,H.L(),b[1]),R[44](2,b[1],H.L()).then(x(function(S){(d[(S=[17,41,11],S)[0]](S[2],w,C,this.L(),k),d)[S[1]](4,"c",this)},H))),V)[2])==L&&(A=N[18](11,w,k,J)),(L|V[1])==
L)&&(D={},C.forEach(function(S){D[S[w]]=S[k]}),A=function(S){return D[S.find(function(O){return O in D})]||J}),L-8)|39)>=L&&(L-3|72)<L&&(u[7](16,bY,w)||u[7](V[0],kc,w)?C=u[35](41,w):(w instanceof yx?H=u[35](42,u[16](21,w)):(w instanceof yx?D=u[35](37,u[16](22,w)):(w instanceof Cg?b=u[35](39,z[12](32,w).toString()):(w instanceof Cg?J=u[35](32,z[12](39,w).toString()):(k=String(w),J=jT.test(k)?k.replace(h$,N[12].bind(null,5)):"about:invalid#zSoyz"),b=J),D=b),H=D),C=H),A=C),A},function(L,w,J,k,C,D){return 3<=
(C=[6,5,4],2<=((L|C[0])&7)&&L-C[2]<C[1]&&(D=N[18](8,w,k,J)),(L|C[2])&C[1])&&(L^36)<C[0]&&(this.promise=new Promise(function(H,b){w=(J=H,b)}),this.resolve=J,this.reject=w),D},function(L,w,J,k,C,D,H){return(((H=["K",2,1],-38<=L<<H[2])&&7>(L-3&8)&&(z[6](H[2],VD.X(),u[42](11,w,H[1],AM)),a[47](23),k=new ST,k.render(N[35](8)),C=new Og,J=new Mm(C,w,new a0,new fu),this[H[0]]=new uY(k,J)),L-5)|3)<L&&(L+H[2]&79)>=L&&((k=J[Eg])?D=k:(k=z[H[1]](56,4,0,N[6].bind(null,H[1]),u[24].bind(null,H[1]),J[Eg]={},F[35].bind(null,
16),J,a[8].bind(null,H[2])),Eg in J&&zI in J&&(J.length=w),D=k)),D},function(L,w,J,k,C,D,H){return 3>(L>>(D=[41,0,6],2)&D[2])&&(L-5&D[2])>=D[1]&&(o0=function(){return d[24](17,w,X8,function(){return k.slice(J)})},H=k),L-8<<1>=L&&(L+7^30)<L&&(C=new Set(Array.from(k(w(),D[0])).map(function(b,V){return(V=["src","hasAttribute","U"],b&&b[V[1]])&&b[V[1]](V[0])?(new EI(b.getAttribute(V[0])))[V[2]]:"_"})),H=Array.from(C).slice(D[1],10).join(",")),H},function(L,w,J,k,C,D,H,b){return 15>(L^(((L<<1&16)<(((H=
[0,2,6],L)&75)==L&&(b=a[H[1]](12,function(V){return V.return(R[1](19,"",12,J,w))})),H[2])&&L-5>>3>=H[1]&&(D=k,b=function(){return(D=(C*D+J)%w,D)/w}),10<=(L<<1&11))&&7>(L>>1&8)&&M.call(this,w),23))&&L-8>=H[0]&&(OI.call(this,w.qO),this.type="beforeaction"),b},function(L,w,J,k,C,D,H,b,V,A){return((A=[13,1,"locale"],3==L-2>>3&&(V=u[9](18,8912)(k(R0,33),10)),(L&38)==L&&this.C)&&(w=this.C,J=VD.X().get(),k=a[36](42,6,J),w.playbackRate=a[48](21,null,A[1],null==k?k:+k),this.C.load(),this.C.play()),(L|48)==
L&&(a[46](47,w,C,Ku,k.K),a[36](2,w,C)||F[31](19,w,w,C),k.B||(b=u[42](A[0],k.K,w,Ku),H=u[42](9,b,11,Nm),H||(H=new Nm,a[46](56,11,H,Nm,b)),D=H,z[40](51,D,J)||N[18](31,J,k[A[2]],D))),4==(L+A[1]&15)&&(V=null!==w&&"object"===typeof w&&!Array.isArray(w)&&w.constructor===Object),(L|72)==L)&&(V=void 0!=J.children?J.children:Array.prototype.filter.call(J.childNodes,function(S){return S.nodeType==w})),V},function(L,w,J,k,C,D,H,b,V,A,S,O){if(-(2==((S=[20,1,34],L^57)&7)&&this.U(new Yy(void 0!==k?k:!0,new Q(w,
J))),32)<=L>>2&&(L^48)>>4<S[1]){for(D=(H=(b=(V=(A=C.flat(Infinity),A).findIndex(function(f){return R[48](4,w,1,f)==J}),[]),R)[4](40,A[V]),S[1]);D<H.length;D++)b.push(R[27](47,a[6](7,w,H[D])));O=(b.push(F[45](40,V-S[1],F[S[2]](S[0],k),F[S[2]](16,512))),b.concat(C))}return(L&14)==L&&(O=R[28](58,u[8](41,J,R[11](16,w)),[F[S[2]](24,k)])),O},function(L,w,J,k,C,D,H,b,V,A,S,O){if(((1==(L^((S=["dw","K",2],(L+4&6)!=S[2])||k.I.width==J.width&&k.I.height==J.height||(k.I=J,C&&u[22](76,F[0].bind(null,8),k),d[41](5,
w,k)),62))>>3&&(O=J.gI||(J.gI=w+(J.cB.HH++).toString(36))),L+3)&15)>=L&&L-3<<1<L)try{N[11](25,w,0).removeItem(J)}catch(f){}if(!((L^14)>>3)){H=(V=[null,0,4],cu.length?(b=cu.pop(),z[28](4,b),F[13](27,V[1],b[S[1]],k),D=b):D=new Pu(k),D);try{C=F[5](S[2],V[1],J),O=a[24](S[2],V[1],V[S[2]],new C.O_,H,C)}finally{A=H[S[1]],A.U=V[0],A[S[1]]=w,A.I=w,A.B=w,A[S[0]]=!1,H.B=-1,H.N=-1,A.O=!1,100>cu.length&&cu.push(H)}}return O},function(L,w,J,k,C,D,H,b,V,A){return((L|32)==(L-3&((V=["X",6,"ye"],(L&107)==L)&&(A=Array.prototype.filter.call(F[12](2,
J,"grecaptcha-badge"),function(S){return a[31](7,S.getAttribute("data-style"),da)}).length>w),V[1])||!J.Z.length||J[V[2]]||(J[V[2]]=w,d[41](V[1],"f",J)),L)&&(k.K.has(lY)?(H=Math,D=H.max,b=k.K.get(lY),C=D.call(H,J,parseInt(b,w))):C=J,A=C),(L-V[1]^8)<L&&(L-7|19)>=L)&&R[41](7,!1,J,VD[V[0]]())&&document.hasTrustToken&&"https://recaptcha.net"===window.origin&&(k.L6=w),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){if((L-1^24)>=(E=["I7",2,4],L)&&(L+3&61)<L&&(C[E[0]]&&(k[E[0]]=C[E[0]].slice()),H=C.K))for(S in b=
C.B,H)if(D=H[S])if(O=+S,f=!(!b||!b[S]),Array.isArray(D)){if(D.length)for(V=N[28](65,k,O,D[J].constructor,f),A=J;A<Math.min(V.length,D.length);A++)F[12](66,": ",0,V[A],D[A])}else throw Error("unexpected object: type: "+u[17](14,"object",D)+w+D);return(L-1^32)<((L+3&6)==E[3<=(L^52)>>E[2]&&16>L>>1&&(C=k||document,K=C.querySelectorAll&&C.querySelector?C.querySelectorAll("."+J):F[18](E[1],w,document,J,k)),1]&&((k=(C=J.length)?J[C-1]:void 0)&&F[8](83,k)?k[w]=1:(D={},J.push((D[w]=1,D)))),L)&&(L-E[2]^25)>=
L&&(K=u[24](16)?!1:N[38](10,"Trident")||N[38](58,w)),K},function(L,w,J,k,C,D,H,b,V){return((1>(L>>(((L-(b=[2,0,6],5)|55)>=L&&(L+b[2]&61)<L&&(C=F[27](25,w,J,mx()),V=Array.from({length:void 0===k?1:k},function(){return C()})),L+b[2])>>1<L&&(L+5&34)>=L&&(C={},J.dw=void 0===C.dw?!1:C.dw,k&&(D=z[22](9,3,4,k),J.O=D.RD,J.U=D.buffer,J.B=J.U.length,J.I=w,J.K=J.I)),b[0])&10)&&20<=L-4&&(H=["scroll","0px","bubble"],k&&D&&D.width==b[1]&&D.height==b[1]||(z[38](b[0],H[1],"top",w,J,k,D,C),d[32](34,C.S),k?(F[37](3,
"px",H[b[0]],C),C.I.focus(),C.B==H[b[0]]&&(C.S=R[35](47,H[b[1]],u[32](4),function(){return C.kd()},{passive:!0}))):C.N.focus(),C.Y=Date.now())),L)|56)==L&&(V=z[48](25,w)?"Windows"===jc.platform:N[38](b[0],"Windows")),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){if((L<<(1==(L+7&15)&&(P=w+Math.random()*(J-w)),c=[58,2,null],1)&7)>=c[1]&&11>(L|6)){for(H=(A="<table"+(b=(E=(V=w.colSpan,w).rowSpan,['"',4,0]),F[42](34,E,b[1])&&F[42](32,V,b[1])?' class="'+R[7](50,"rc-imageselect-table-44")+b[0]:F[42](34,
E,b[1])&&F[42](33,V,c[1])?' class="'+R[7](50,"rc-imageselect-table-42")+b[0]:' class="'+R[7](50,"rc-imageselect-table-33")+b[0])+"><tbody>",K=Math.max(b[c[1]],Math.ceil(E-b[c[1]])),b[c[1]]);H<K;H++){for(f=b[O=Math.max(b[c[1]],(Y=(A+="<tr>",1*H),Math.ceil(V-b[c[1]]))),c[1]];f<O;f++){for(S in k=(S=(D=(A+='<td role="button" tabindex="'+R[7]((J=1*f,18),Y*V+J+b[1])+'" class="'+R[7](c[0],"rc-imageselect-tile")+"\" aria-label='",A+="\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e".replace(qm,
z[43].bind(c[2],40)),C=w,{e8:Y,EU:J}),void 0),A),C)S in D||(D[S]=C[S]);A=k+("'>"+u[35](11,"",'"><img',D)+"</td>")}A+="</tr>"}P=g(A+"</tbody></table>")}if(1==(L+5&7)&&(J=["",null,6],this.U=J[0],this.C=!1,this.N=J[0],this.I=J[1],this.K=J[0],this.M=J[0],this.O=J[0],w instanceof EI?(this.C=w.C,a[40](21,"%2525",this,w.K),this.O=w.O,this.U=w.U,a[25](29,0,w.I,this),d[46](6,"%2525",this,w.N),a[29](71,J[1],this,F[19](13,w.B)),z[30](44,"%2525",this,w.M)):w&&(k=a[18](56,0,String(w)))?(this.C=!1,a[40](41,"%2525",
this,k[1]||J[0],!0),this.O=N[13](19,"%2525",k[c[1]]||J[0]),this.U=N[13](32,"%2525",k[3]||J[0],!0),a[25](28,0,k[4],this),d[46](7,"%2525",this,k[5]||J[0],!0),a[29](87,J[1],this,k[J[c[1]]]||J[0],!0),z[30](32,"%2525",this,k[7]||J[0],!0)):(this.C=!1,this.B=new Bu(null,this.C))),(L&73)==L)if(k=J.length,k>w){for(C=(D=Array(k),w);C<k;C++)D[C]=J[C];P=D}else P=[];return P},function(L,w,J,k,C,D,H,b,V,A,S){if(((A=["K","f1","Message parsing ended unexpectedly. Expected to read "],L&60)==L&&(u[10](17,zy),D=k[A[1]],
C=null==D||R[19](25,null,D)?D:"string"===typeof D?z[17](25,w,J,D):null,S=null==C?C:k[A[1]]=C),L)-7<<2>=L&&(L+2^26)<L){if(V=(H=(b=a[0](57,(D=k[A[0]].B,w),k[A[0]]),k[A[0]][A[0]]+b),H)-D,V<=w&&(k[A[0]].B=H,C(J,k,void 0,void 0,void 0),V=H-k[A[0]][A[0]]),V)throw Error(A[2]+(b+" bytes, instead read "+(b-V)+" bytes, either the data ended unexpectedly or the message misreported its own length"));k[A[0]][A[0]]=H,k[A[0]].B=D}return S},function(L,w,J,k,C,D,H,b,V,A){if(1==(L-9&(((((V=[57,"N",3],L)+6^11)>=L&&
(L+9^18)<L&&(J.x*=w,J.y*=w,A=J),L)&108)==L&&(b=["d",!1,1],null!=a[36](43,6,J,b[1])?k.K.K.LR(J.J()):(d[20](69,J.m3(),k),J.BM()&&(D=J.BM(),d[33](56,d[15](29,"b"),D,b[2])),N[16](1,b[0],k,z[40](49,J,5),z[40](V[0],J,w),u[42](9,J,4,hM),J.Jz(),!!C),H=u[42](15,J,7,FW),k.K[V[1]].set(H),k.K[V[1]].load())),V[2])))a[29](64,"$1",32,61,"&",D,function(S,O,f,E){return f=(S=u[3](18,C,k,(E=["sendBeacon",19,6],S),w),u[32](20).navigator)[E[0]](S,z[E[1]](E[2],O)),D.P&&!f&&(D.P=J),f});return A},function(L,w,J,k,C,D,H,
b,V){if(((b=["self","location",32],L)|b[2])==L)a:{switch(D){case 1:V=H?"disable":"enable";break a;case C:V=H?"highlight":"unhighlight";break a;case J:V=H?"activate":"deactivate";break a;case 8:V=H?"select":"unselect";break a;case k:V=H?"check":"uncheck";break a;case b[2]:V=H?"focus":"blur";break a;case w:V=H?"open":"close";break a}throw Error("Invalid component state");}return L+9>>1<L&&(L-9|13)>=L&&(C=a[18](58,0,k)[w]||J,!C&&y[b[0]]&&y[b[0]][b[1]]&&(C=y[b[0]][b[1]].protocol.slice(0,-1)),V=C?C.toLowerCase():
""),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){if((K=["call","querySelector","*"],L&26)==L)if(S=C||J,E=[0,"function","."],O=w&&w!=K[2]?String(w).toUpperCase():"",S.querySelectorAll&&S[K[1]]&&(O||k))Y=S.querySelectorAll(O+(k?E[2]+k:""));else if(k&&S.getElementsByClassName)if(f=S.getElementsByClassName(k),O){for(D=(V=(A=E[0],{}),E)[0];H=f[D];D++)O==H.nodeName&&(V[A++]=H);Y=(V.length=A,V)}else Y=f;else if(f=S.getElementsByTagName(O||K[2]),k){for(D=(A=E[0],V={},E[0]);H=f[D];D++)b=H.className,typeof b.split==
E[1]&&a[31](5,k,b.split(/\s+/))&&(V[A++]=H);V.length=A,Y=V}else Y=f;return 0<=L-6>>4&&1>(L>>1&8)&&(iJ[K[0]](this),this.N=J||0,this.B=k,this.K=w,this.U=x(this.Lw,this)),Y},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p,v,n){if(1==((L+7&(((L>>1&15)==(v=[3,66,20],v[0])&&(n=TI.now()),L|24)==L&&(C=["mouseover","mouseout","contextmenu"],D=u[0](26,J),H=J.L(),k?(R[46](54,R[46](51,R[46](54,N[17](49,H,UI.ID,D,J.R7),H,[UI.Oj,UI.Vu],J.ye),H,C[0],J.Hm),H,C[1],J.ue),J.dI!=d[7].bind(null,19)&&N[17](65,
H,C[2],D,J.dI),t&&!J.IL&&(J.IL=new $y(J),d[13](47,J.IL,J))):(z[16](v[2],z[16](12,z[16](9,z[16](19,D,H,UI.ID,J.R7),H,[UI.Oj,UI.Vu],J.ye),H,C[0],J.Hm),H,C[1],J.ue),J.dI!=d[7].bind(null,v[2])&&z[16](17,D,H,C[2],J.dI),t&&(z[21](5,J.IL),J.IL=w))),11)||(J=new Bu,J.U=w.U,w.K&&(J.K=new Map(w.K),J.B=w.B),n=J),L+6&14)||(D=N[23](v[2],w),J=R[4](48,w),C=R[2](29,this,J[0]),k=R[2](41,this,J[1]),this.K[D]=C/k),(L^16)&11)){if((C=(Gy=(H=((l=[null,(q=this.constructor.K,0),1],w==l[0])&&(w=Gy),this).constructor.B||l[1],
f=!1,void 0),H>l[1]),w)==l[0])E=!0,w=q?[q]:[],d[44](69,48,w);else{if(!Array.isArray(w))throw Error();if(q&&q!==w[l[1]])throw Error();if(E=0!==(c=T=R[40](59,l[1],w),16&c))(f=0!==(32&c))||(c|=32);if(C)if(128&c)H=l[1];else{if(w.length>l[1]&&(p=w[w.length-l[2]],F[8](v[0],p)&&"g"in p)){for(B in delete p.g,S=!0,H=l[c|=128,1],p){S=!1;break}S&&w.pop()}}else if(128&c)throw Error();T!==c&&d[44](72,c,w)}this.rI=(this.K=(this.Lc=(q?0:-1)-H,void 0),w);a:{if((b=(V=this.rI.length,V-l[2]),V)&&(e=this.rI[b],F[8](67,
e))){(this.B=e,this).U=b-this.Lc;break a}void 0!==J&&-1<J?(this.U=Math.max(J,b+l[2]-this.Lc),this.B=void 0):this.U=Number.MAX_VALUE}if(!C&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(k)for(A=this.U,P=E&&!f&&!0,O=l[1];O<k.length;O++)K=k[O],K<A?(m=K+this.Lc,(h=w[m])?u[v[2]](10,16,2,h,P):w[m]=Vx):(Y||(Y=d[39](v[1],this)),(D=Y[K])?u[v[2]](8,16,2,D,P):Y[K]=Vx)}return n},function(L,w,J,k,C){if(!((k=["call",7,1],L)<<2&k[1]))M[k[0]](this,
w,-1,eT);if((L|8)==L)M[k[0]](this,w,-1,QD);return(L+4^24)<L&&L-k[2]<<k[2]>=L&&(C={CY:w,Fy:J}),C},function(L,w,J,k,C,D,H,b,V,A,S,O){if(1==((L^77)&((L&((((L|24)==(S=[2,23,29],L)&&(b=J.K[H.toString()],V=-1,b&&(V=d[11](28,w,D,C,b,k)),O=-1<V?b[V]:null),L)-7^13)<L&&(L+8&78)>=L&&(O=a[S[0]](36,function(f,E,K){if((K=["B","withTrustTokens-",12],f.K)==k)return b=String(D.HH++),H.L6?E=a[K[2]](1,document.hasTrustToken("https://recaptcha.net"),C,f):(f.K=J,E=void 0),E;return f.return((f.K!=J&&(A=(V=f[K[0]])?"redeem":
"issue",b=K[1]+A+w+b),b))})),58))==L&&(O=R[28](65,u[8](33,J,R[11](1,w)),[R[25](72,k),R[25](80,C)])),13)))a:switch(D=["prepositional","multiselect","doscaptcha"],C){case "default":O=new vu;break a;case "nocaptcha":O=new pu;break a;case D[S[0]]:O=new tM;break a;case "imageselect":O=new Wu;break a;case "tileselect":O=new Wu("tileselect");break a;case "dynamic":O=new I0;break a;case J:O=new Zi;break a;case "multicaptcha":O=new sg;break a;case w:O=new iY;break a;case D[1]:O=new Ug;break a;case D[0]:O=
new nu;break a;case k:O=new xy}return(L&86)==L&&(k=N[S[1]](16,w),J=R[4](80,w),C=!!R[S[2]](37,J[0],this),this.K[k]=!C),O},function(L,w,J,k,C,D){return(L|(D=[16,"object","function"],(L+3^26)>=L&&(L+8^23)<L&&(k=typeof J,C=k==D[1]&&J||k==D[2]?w+R[27](49,J):k.slice(0,1)+J),D)[0])==L&&(C=F[2](51,document).y),C},function(L,w,J,k,C,D,H,b){return((1==((b=[66,71,9],L)<<2&15||(C=a[36](b[0],k,J),D=C==w?C:"string"===typeof C?C?new F8(C,zy):F[1](41):C.constructor===F8?C:R[19](24,w,C)?C.length?new F8(new Uint8Array(C),
zy):F[1](42):void 0,D!=w&&D!==C&&N[43](39,D,J,k),H=D),(L^47)>>3)&&(J=R[4](8,w),D=R[29](32,J[0],this),C=R[29](35,J[1],this),k=R[29](35,J[2],this),D[C]=k),L)|64)==L&&(C=u[b[2]](b[1],w),k=new ra(new L9(J)),wZ&&C.prototype&&wZ(k,C.prototype),H=k),(L+2^26)<L&&L-8<<1>=L&&(H="invisible"==w.get(qz)),H},function(L,w,J,k,C,D,H,b,V,A,S){if(!((L^63)>>(1==(L>>((L+3^30)>=((S=[26,"orientation",18],8)<=(L-9&15)&&16>L-5&&(H=d[5](16,w,J),D=new Kg(0,0),C=H?d[5](17,w,H):document,k=!t||Number(J8)>=w||N[12](S[2],d[S[0]](S[0],
9,C).K)?C.documentElement:C.body,J==k?A=D:(V=R[37](92,J),b=F[2](49,d[S[0]](27,9,H).K),D.x=V.left+b.x,D.y=V.top+b.y,A=D)),L)&&(L+2^25)<L&&(k&&!J.N&&(u[7](53,J),J.U=w,J.K.forEach(function(O,f,E,K){(K=(E=f.toLowerCase(),[null,0,8]),f)!=E&&(N[36](K[2],K[0],this,f),z[9](24,K[1],K[0],E,this,O))},J)),J.N=k),1)&15)&&(A=(k=d[28](1,w,J))?new ActiveXObject(k):new XMLHttpRequest),4)))z[22](12,C,function(O,f,E){((E=["U_","className","NB"],O&&"object"==typeof O&&O[E[2]])&&(O=O[E[0]]()),"style")==f?k.style.cssText=
O:"class"==f?k[E[1]]=O:"for"==f?k.htmlFor=O:kw.hasOwnProperty(f)?k.setAttribute(kw[f],O):f.lastIndexOf(J,w)==w||f.lastIndexOf("data-",w)==w?k.setAttribute(f,O):k[f]=O});return 6<=((L^14)&15)&&2>(L<<1&14)&&(D=[" ","readonly",!1],Array.isArray(k)&&(k=k.join(D[0])),H="aria-"+w,""===k||void 0==k?(C9||(b={},C9=(b.atomic=D[2],b.autocomplete="none",b.dropeffect="none",b.haspopup=D[2],b.live="off",b.multiline=D[2],b.multiselectable=D[2],b[S[1]]="vertical",b[D[1]]=D[2],b.relevant="additions text",b.required=
D[2],b.sort="none",b.busy=D[2],b.disabled=D[2],b.hidden=D[2],b.invalid="false",b)),C=C9,w in C?J.setAttribute(H,C[w]):J.removeAttribute(H)):J.setAttribute(H,k)),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p,v){return((v=[34,"apply",512],(L&124)==L&&(l=[0,6,21],V=u[22](7,65535),h=R[30](2,v[2],5),O=u[2](1,h),c=O.next().value,T=O.next().value,m=O.next().value,b=O.next().value,P=O.next().value,D=R[v[0]](58,m,b,C),B=F[v[0]](28,b),q=F[v[0]](36,T),K=R[28](61,u[8](32,P,R[11](57,3)),[R[25](73,
B),R[25](80,q)]),e=[D,K,F[21](8,10,T,F[v[0]](32,T),F[v[0]](12,b)),R[10](39,l[1],C,F[v[0]](4,P),m)],A=[R[24](3,l[2],C,F[v[0]](32,C)),u[40](7,T,V),u[40](3,c,"length"),R[v[0]](43,c,c,C),u[40](10,m,l[0]),F[32](43,w,c,m,e),u[40](2,T,V),R[10](38,l[1],C,F[v[0]](4,T),c)],(H=Uw.X()).B[v[1]](H,R[9](65,h)),S=a[8](7,v[2],1,k),E=u[2](2,S).next().value,Y=[u[40](5,E,a[13](11,"f",k.U)),z[13](12,7,[E].concat([C,J]))],(f=Uw.X()).B[v[1]](f,R[9](2,k.B)),k.B.length=l[0],p=A.concat(Y)),0)<=L+1>>3&&20>L-1&&(J=null==J?Vx:
u[39](1,J,w),p=F[31](13,J,C,k,D)),2==(L<<1&7))&&(k=w.yu,J=w.LY,p=g('<div class="grecaptcha-badge" data-style="'+R[7](2,w.style)+'"><div class="grecaptcha-logo"></div><div class="grecaptcha-error"></div>'+d[14](6,k,J)+"</div>")),p},function(L,w,J,k,C,D,H,b,V,A){return(A=[3,"I",2],L<<A[2]&7||(V=new Z$(function(S,O,f,E,K,Y,c,P){if(Y=(c=[],J).length)for(f=w,P=function(l,m){(c[Y--,l]=m,Y==w)&&S(c)},K=function(l){O(l)};f<J.length;f++)E=J[f],R[26](20,!0,!1,null,E,DZ(P,f),K);else S(c)})),L)-A[2]<<1>=L&&(L+
A[0]^12)<L&&(b=N[33](27,"q",11,D,H),H[A[1]]=H[A[1]].then(b,b).then(function(S,O,f){return a[2](39,function(E,K,Y){Y=["B",(K=[41,1,!1],12),19];switch(E.K){case K[1]:if(!(O=(f=H.K.W,C),f)){E.K=k;break}return a[Y[1]](1,u[25](Y[1],k,w,z[Y[2]](28,S),f),J,E);case J:O=E[Y[0]];case k:return a[Y[1]](82,a[49](2,K[2],null,K[0],S,H),4,E);case 4:return E.return({ji:E[Y[0]],Pi:O})}})}),V=H[A[1]]),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if((f=[35,1,0],L&49)==L){for(D=(S=(A=(C=(J=(w=void 0===(H=[1,0,!1],w)?d[15](6,
H[f[1]]):w,void 0===J)?{}:J,d[f[0]](f[0],H[f[1]],w,J)),C).ws,C.client),k=u[2](6,Object.keys(A)),k.next());!D.done;D=k.next())if(![Hd.V(),bS.V(),jN.V()].includes(D.value))throw Error("Invalid parameters to challengeAccount.");if(V=A[jN.V()]){if(b=a[18](15,H[f[2]],V),!b)throw Error("container must be an element or id.");S.B.C=b}E=(O=z[36](23,.9,S,"p",A,9E5,H[2]),u[40](22,O))}return(L^(3<=(2==(L|4)>>3&&(V=J.Do,H=["rc-anchor-over-quota-pt",'\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c</a><span aria-hidden="true" role="presentation"> - </span><a href="',
'" target="_blank">'],D=J.Zo,k=J.Ej,C=J.Y7,b='<div class="'+R[7](10,"rc-anchor-pt")+(k||C?w+R[7](10,H[f[2]])+w:"")+'"><a href="'+R[7](10,R[22](3,V))+H[2],b=b+H[f[1]]+(R[7](42,R[22](5,D))+H[2]),E=g(b+"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f</a></div>")),L-f[1])>>4&&5>((L|2)&13)&&(J=[!1,null,0],I.call(this),this.headers=new Map,this.S=J[f[2]],this.Y=J[f[1]],this.U=J[2],this.P=w||J[f[1]],this.O=J[f[2]],this.gI=this.N="",
this.l=J[f[2]],this.I=J[2],this.C="",this.B=J[f[2]],this.M=J[f[1]],this.F=J[f[2]],this.o=J[f[1]],this.K=J[f[2]],this.G=J[f[2]],this.D=J[f[1]]),73))&15||(C=F[7](32,Vu[2],Vu[f[2]],Math.abs(k),Vu[w]),E=function(){return Math.floor(C()*Vu[2])%J}),E},function(L,w,J,k){return 3>(((k=[4,8,2],(L+k[1]&27)>=L&&L+k[1]>>k[2]<L)&&(J=R[25](58,w)),L)^5)>>k[0]&&((L^k[2])&7)>=k[2]&&(J=w.o?w.o.readyState:0),J},function(L,w,J,k,C,D,H,b,V){if(4==((((b=[2,"N","blockSize"],L+b[0])>>4||(ge.call(this,w),this.coords=J.coords,
this.x=J.coords[0],this.y=J.coords[1],this.z=J.coords[b[0]],this.duration=J.duration,this.progress=J.progress,this.state=J.K),L)|4)&13)&&(D=void 0===D?null:D,wV.call(this),this.I=D,H=this,this.K=w||this.I.port1,this.U=new Map,J.forEach(function(A,S,O,f){for(O=(f=u[2](5,Array.isArray(S)?S:[S]),f).next();!O.done;O=f.next())H.U.set(O.value,A)}),this[b[1]]=k,new EI(C),this.B=new Map,R[46](53,this,this.K,"message",function(A){return z[33](8,1,"x",A,H)}),this.K.start()),(L+7&15)<L&&(L+b[0]^9)>=L)z[4](84,
null,this);if(12<=(L<<b[0]&31)&&7>(L<<b[0]&14)&&(k=J.tabIndex,V="number"===typeof k&&k>=w&&32768>k),(L|72)==L){for(H=((this[b[this[b[this.K=w,this[b[2]]=-1,2]]=k||w[b[2]]||16,this.I=Array((C=J,this[b[2]])),1]]=Array(this[b[2]]),C).length>this[b[2]]&&(this.K.B(C),C=this.K.U(),this.K.reset()),0);H<this[b[2]];H++)D=H<C.length?C[H]:0,this.I[H]=D^92,this[b[1]][H]=D^54;this.K.B(this[b[1]])}return V},function(L,w,J,k,C,D,H,b,V,A,S,O,f){return(6<=(L>>((L&(4==(L|(O=((L|40)==L&&(this.K=new A8,this.B=w),[2,
1,108]),4))>>4&&M.call(this,w),O)[2])==L&&(D=[0,1900,100],"number"===typeof w?(this.K=u[29](15,D[O[1]],D[O[0]],w,k||O[1],J||D[0]),d[44](58,this,k||O[1])):F[39](32,w)?(this.K=u[29](14,D[O[1]],D[O[0]],w.getFullYear(),w.getDate(),w.getMonth()),d[44](90,this,w.getDate())):(this.K=new Date(u[44](21)),C=this.K.getDate(),this.K.setHours(D[0]),this.K.setMinutes(D[0]),this.K.setSeconds(D[0]),this.K.setMilliseconds(D[0]),d[44](62,this,C))),O[1])&15)&&25>L-5&&(this.N=!!A,S=[0,!1,null],this.O8=H||S[O[0]],this.B=
J||"GET",this.dc=k,this.OT=S[0],this.I=w,this.U=V||"",this.st=C,this.va=S[O[1]],this.z0=void 0!==b?b:1,this.l7=S[O[0]],this.K=D,this.eF=S[O[1]]),((L^16)&3)>=O[0]&&(L^28)>>4<O[0])&&(this.top=k,this.right=w,this.bottom=J,this.left=C),f},function(L,w,J,k,C,D,H,b,V,A,S,O){if((O=[2,70,20],(L^68)&3)==O[0]){if((A=(C=(H=[3,1,0],new SN),function(f,E){return E.length>=f.length?E:f}),R)[3](21,7)){for(D=(V=u[O[0]](1,u[9](O[1],8613)(w,k,function(f,E){return parseInt((f[E=["reduce","","match"],E[2]](/(1[2-9]\d{8,11})/g)||
[])[E[0]](A,E[1]).substring(1,6),10)})),V).next();!D.done;D=V.next())if(b=D.value)F[31](17,(a[36](67,H[1],C)||H[O[0]])+H[1],H[1],C),F[31](O[2],Math.max(a[36](10,H[0],C)||H[O[0]],b),H[0],C),F[31](13,Math.min(a[36](11,O[0],C)||b,b),O[0],C),F[31](21,(a[36](O[0],4,C)||H[O[0]])+b,4,C);a[36](35,H[1],C)&&F[31](12,Math.floor(a[36](O[0],4,C)/a[36](67,H[1],C)),4,C)}S=z[19](28,C)}if(!((L^57)>>(L-7>>4||(z[39](15,k),S=N[43](38,w,k,J,C)),4)))if("string"===typeof J)(H=R[19](49,"g",J,w))&&(w.style[H]=k);else for(C in J)V=
J[C],b=w,(D=R[19](48,"g",C,b))&&(b.style[D]=V);return S},function(L,w,J,k,C,D,H,b,V,A,S,O,f){return(L+((((f=["push","flat",1],L<<f[2])&14||(V=d[11](6,C,function(){},F[26](4,J,[z[27](5,k,18,b,H),H.M]).then(function(E,K,Y,c){return(K=(Y=(c=[7,"n",3],u[2](c[2],E)),Y).next().value,Y.next()).value.send(c[1],new Ok(N[31](89,c[0],11,K,D,H).toJSON(),H.S))})),a[0](63,function(){(V.cancel(),H).C(D,w)},15E3),O=V),(L>>f[2]&11)==f[2])&&(S=[1,10,512],A=[],H=w,b=void 0===b?1:b,k||(k=R[30](4,S[2],S[0])[0],A[f[0]](u[40](9,
k,0)),H=!0),V=C[f[1]](Infinity).length+2,D=V+S[0],A[f[0]](F[45](41,V,F[34](24,J),F[34](4,k)),C,F[21](34,S[f[2]],k,F[34](28,k),b),F[45](43,-1*D,S[0],S[0])),H&&Uw.X().B(k),O=A),(L|6)>>4)||(O=g('<div>\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0430 <a href="https://cloud.google.com/recaptcha-enterprise/billing-information" target="_blank">\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043a\u0432\u043e\u0442\u0430 reCAPTCHA Enterprise</a>.</div>')),
7)&46)>=L&&(L+f[2]^24)<L&&(this.NB=!0,this.K=J===MK?w:""),O},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(((E=["concat",34,4],L)+6^20)>=L&&L+E[2]>>2<L){for(S=(V=[][E[0]](R[9](1,(A=N[O=(void 0===D?0:D)%am.length,27](E[b=am.slice(),1]),H))),C);S<V.length;S++)b[O]=((b[O]<<w^Math.pow(A.call(V[S],C)-am[O],J))+(b[O]>>J))/am[O]|C,O=(O+k)%am.length;f=Math.abs(b.reduce(function(K,Y){return K^Y},C))}return(L&94)==L&&M.call(this,w),f},function(L,w,J,k,C){return((L&(C=[75,2,1],C)[0])==L&&(k=J.B==w?J.K:a[15](88,C[2],
!1,J.K)),L)<<C[2]&7||(J=new f9,k=u[13](C[1],J,uS,C[2],w)),k},function(L,w,J,k,C,D,H,b,V,A,S){return 0<=(((2==(2>(L-(A=[4,7,"CriOS"],8)&8)&&5<=(L>>1&A[1])&&(k=["Silk","Edge","Opera"],S=N[38](10,J)&&!(z[39](50,A[2])||(u[24](21)?0:N[38](50,"Coast"))||u[15](29,k[2])||d[21](A[0],k[1])||d[2](73,!1,"Edg/")||(u[24](23)?a[25](3,!1,k[2]):N[38](50,w))||a[8](64,"FxiOS")||N[38](2,k[0])||N[38](2,"Android"))),(L|6)>>3)&&(b=k.CY,V=N[31](1,0,A[0],C),H=F[5](1,0,C).O_,w[J]=function(O,f,E){return b(O,f,E,H,V,D)}),L)^
35)&3)&&1>(L+8&14)&&(S=a[2](32,function(O,f){if((f=["B",24,97],O.K)==k)return b=z[f[1]](41,C,function(E){return a[26](13,E.parse(D))}),a[12](f[2],F[7](2,b[J],b[k]+b[w]),w,O);return O.return(new (H=O[f[0]],Ek)(z[f[1]](8,C,function(E){return a[26](5,E.parse(H))}),b[k],b[w]))})),S},function(L,w,J,k,C){return(k=[8,1,"K"],L&111)==L&&(this.B=J=void 0===J?!1:J,this.locale=null,this[k[2]]=new gZ,F[31](20,w,2,this[k[2]]),J||(this.locale=document.documentElement.getAttribute("lang")),F[k[0]](49,k[1],5,this,
new Ku)),L>>k[1]>=k[0]&&25>(L|4)&&ge.call(this,"event-logged",void 0),C},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B){if((B=[1,32,19],(L-7^8)>=L)&&(L-2|8)<L){if(D=[!0,null,"IFRAME"],z8){k=w;try{k=!z[30](43,D[B[0]]).document}catch(h){k=D[0]}k&&(u[36](31,z8),z8=D[B[0]])}q=((H=om||N[35](41),!z8&&H)&&(z8=Rm(D[2]),F[31](63,z8,"display","none"),H.appendChild(z8)),C=u[B[1]](36),z8&&(C=z[30](B[2],D[B[0]])||C),J)(C)}if((2==(L<<B[0]&7)&&w.push(J),(L>>B[0]&8)<B[0])&&-87<=L-5&&(H=[.5,.1,0],"visible"==
N[8](24,"","g",k.K))){D=u[37](28,F[34](B[0],"inline",k));a:{if(V=(K=window,K.document),l=H[2],V){if((C=(c=V.documentElement,V).body,!c)||!C){O=H[2];break a}N[12]((A=N[9](13,K).height,16),V)&&c.scrollHeight?l=c.scrollHeight!=A?c.scrollHeight:c.offsetHeight:(b=c.offsetHeight,Y=c.scrollHeight,c.clientHeight!=b&&(Y=C.scrollHeight,b=C.offsetHeight),l=Y>A?Y>b?Y:b:Y<b?Y:b)}O=l}if((P=(f=(m=(S=Math.max(O,R[B[0]](79,H[2],k).height),z)[22](56,9,k),R[41](20,m.y-D.height*H[0],F[2](55,document).y+10,F[2](53,document).y+
R[B[0]](64,H[2],k).height-D.height-10)),R)[41](B[2],R[41](21,f,m.y-.9*D.height,m.y-D.height*H[B[0]]),10,Math.max(10,S-D.height-10)),k).B==J)E=m.x>R[B[0]](48,H[2],k).width*H[0],F[31](59,k.K,{left:z[22](57,9,k,E).x+(E?-D.width:0)+w,top:P+w}),d[4](17,9,"top",H[2],"px",k,P,E);else F[31](57,k.K,{left:F[2](54,document).x+w,top:P+w,width:R[B[0]](64,H[2],k).width+w})}return q},function(L,w,J,k,C,D){if((L&(1==(D=[23,2,"K"],L+D[1]>>3)&&(C=N[37](19,w,J[D[2]])),D[0]))==L&&(K9[K9.length]=J,m3))for(k=w;k<qK.length;k++)J(x(qK[k][D[2]],
qK[k]));return C},function(L,w,J,k,C){return(((k=[23,39,"U"],(L&91)==L&&0!==J.length)&&(w[k[2]].push(J),w.B+=J.length),L)&118)==L&&(J=typeof w,C="object"==J&&null!=w||"function"==J),L-3<<1>=L&&(L-2|k[1])<L&&(w=['\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435</div></div><div class="',"rc-doscaptcha-body","rc-doscaptcha-header-text"],J='<div><div class="'+R[7](50,"rc-doscaptcha-header")+'"><div class="'+R[7](58,w[2])+
'">',J=J+w[0]+(R[7](34,w[1])+'"><div class="'+R[7](58,"rc-doscaptcha-body-text")+'" tabIndex="0">'),J=J+'\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0438\u043b\u0438 \u0441\u0435\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0427\u0442\u043e\u0431\u044b \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441. \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043d\u0430 <a href="https://developers.google.com/recaptcha/docs/faq#my-computer-or-network-may-be-sending-automated-queries" target="_blank">\u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435</a>.</div></div></div><div class="'+
(R[7](42,"rc-doscaptcha-footer")+'">'+z[44](10," ")+"</div>"),C=g(J)),C},function(L,w,J,k,C,D,H,b,V,A,S,O){if((L+8&(O=[19,"push",40],15))>=L&&(L-9|14)<L){for(V=(H=[(b=(A=w.sm(),w.sm()),b)],A!=b&&H[O[1]](A),J.be),D=[];V;)C=V&-V,D[O[1]](u[O[0]](25,w,C)),V&=~C;S=((k=(H[O[1]].apply(H,D),J.D))&&H[O[1]].apply(H,k),H)}return((L|O[2])==L&&M.call(this,w),L+2&58)<L&&(L-2|3)>=L&&(S=u[17](1,128,null,J)),S},function(L,w,J,k,C,D,H,b,V){if((b=["tagName",50,7],L|24)==L){for(C=[],k=w;k<J;k++)C[k]=w;V=C}if((L+1^25)<
L&&(L-1^13)>=L){for(J=(H=(k='<div class="'+R[b[2]](26,(C=[1,"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438: ",'(CC BY-SA)</div>\u0418\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435 \u0444\u0440\u0430\u0437 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435. \u041d\u0435 \u0432\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0444\u0440\u0430\u0437\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438, \u0438 \u0442\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u0430\u0436\u0443\u0442\u0441\u044f \u0431\u0435\u0441\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0431\u0435\u0437 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430. <a href="https://support.google.com/recaptcha" target="_blank">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\u2026</a>'],
D=w.sources,"rc-prepositional-attribution"))+'">',k+=C[1],0),D).length;H<J;H++)k+='<a target="_blank" href="'+R[b[2]](b[1],R[22](9,D[H]))+'">'+z[1](b[2],H+C[0])+"</a>"+(H!=D.length-C[0]?",":"")+" ";V=g(k+C[2])}if(!(L-b[2]>>4)){if(void 0!==w[b[0]]){if("script"===w[b[0]].toLowerCase())throw Error("Use setTextContent with a SafeScript.");if("style"===w[b[0]].toLowerCase())throw Error("Use setTextContent with a SafeStyleSheet.");}w.innerHTML=z[0](54,J)}return V},function(L,w,J,k,C){return(((L&(k=["qx",
"HM","toString"],91))==L&&(Bd.call(this),this.B=J),L)+1^6)>=L&&(L+5&29)<L&&(C=w&&J&&w[k[0]]&&J[k[0]]?w[k[1]]!==J[k[1]]?!1:w[k[2]]()===J[k[2]]():w instanceof h8&&J instanceof h8?w[k[1]]!=J[k[1]]?!1:w[k[2]]()==J[k[2]]():w==J),C},function(L,w,J,k,C,D,H,b,V){return(L<<1&(V=[80,32,45],5)||(J={next:w},J[Symbol.iterator]=function(){return this},b=J),4)>(L-2&8)&&-83<=L-5&&(D=[19,0,75],H=d[V[2]](2,D[1],a[41](57,w,C),k.toString(),Lj),b=N[17](V[0],3,R[22](V[1],D[1],F[7](33,D[2],D[0],H.length,J),H),"b")),b},
function(L,w,J,k){return(((L|8)&(J=[2,3,22],J)[1]||(k=z[48](26,w)?"macOS"===jc.platform:N[38](26,"Macintosh")),(L-8&7)==J[0])&&(z[J[2]](14,w.W,function(C,D){this.W.hasOwnProperty(D)&&d[32](2,C)},w),w.W={}),24)>L+1&&6<=L<<J[0]&&d[44](J[0],0).forEach(function(C,D,H){if(C.startsWith(d[15](19,(H=[1,(D=["d",1E4,"-"],2),10],D[0]))))try{Date.now()>parseInt(C.split(D[H[1]])[H[0]],H[2])+D[H[0]]&&F[H[2]](H[1],H[0],C)}catch(b){}}),k},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q){if((m=["t",0,13],L-5&12)>=
m[1]&&4>(L>>1&14)){if((D=[1,0,!1],k.O)&&k.U&&d[29](12,D[m[1]],k)){if(b=(S=k.O,Fc)[S])y.clearTimeout(b.K),delete Fc[S];k.O=J}for(V=(c=(k.K&&(k.K.M--,delete k.K),k.B),D[2]),C=D[2];k.I.length&&!k.C;)if(l=k.I.shift(),H=l[2],Y=l[D[m[1]]],P=l[J],O=k.N?Y:P)try{if(f=O.call(H||k.Y,c),f===T8&&(f=void 0),void 0!==f&&(k.N=k.N&&(f==c||f instanceof Error),k.B=c=f),d[42](7,D[2],c)||"function"===typeof y.Promise&&c instanceof y.Promise)V=w,k.C=w}catch(B){c=B,k.N=w,d[29](m[2],D[m[1]],k)||(C=w)}(k.B=c,V&&(K=x(k.l,
k,w),A=x(k.l,k,D[2]),c instanceof $w?(z[31](39,D[1],!0,K,A,c),c.D=w):c.then(K,A)),C)&&(E=new eN(c),Fc[E.K]=E,k.O=E.K)}if(1>(10>(L-7&16)&&2<=L+3&&(q=R[28](62,R[11](49,19),[R[25](65,w),R[25](81,J),R[25](81,k)])),L-5>>5)&&9<=L+1){if(J==(V=["uninitialized",9,11],w)||J==m[0])k.K.M=Date.now();if((R[7](16,(k.K.C=Date.now(),k.I)),k.K).U==V[m[1]]&&null!=k.K.O)F[16](4,V[1],k.K.O,k);else H=x(function(B){this.K.B.send(B).then(function(h){F[16](32,9,h,this,!1)},this.U,this)},k),D=x(function(B){this.K.B.send(B).then(function(h,
T,e,p){if(e=(p=[1,65,""],[10,2,4]),null==h.J()||0==h.J()||h.J()==e[0])T=h.Z5(),d[20](71,R[23](96,h,e[p[0]])||p[2],this),N[16](2,"d",this,"2fa",R[23](p[1],h,e[p[0]])||p[2],h,T?60*u[18](5,0,T,e[2]):60,!1)},this.U,this)},k),C?z[40](51,C,V[2])?(b={},D(new Xc((b.avrt=z[40](55,C,V[2]),b)))):H(new yu(z[30](2,6,C,J))):"embeddable"==k.K.K.S2()?k.K.K.Iu(x(function(B,h,T,e,p,v){e=(v=[3,30,18],T=F[4](v[0],2,z[v[1]](v[0],6,new G8,J),this.K.m3()),p=N[v[2]](v[1],13,h,T),N[v[2]](9,12,B,p)),H(new yu(e))},k),k.K.m3(),
!1):(A=x(function(B,h,T,e){T=(h=F[e=[6,2,4],e[2]](e[1],e[1],z[30](e[0],e[0],new G8,J),this.K.m3()),N)[18](9,e[2],B,h),H(new yu(T))},k),k.K.N.execute().then(A,A))}return q},function(L,w,J,k,C,D,H,b){if(3==(L^(H=["classList","forEach","B"],59))>>3&&(k.K=J,J>k[H[2]]))throw N[22](12,w,k[H[2]],J);if((L|24)==(10<=(L<<2&15)&&26>L+6&&(C=J.L?J.L():J)&&(k?F[46].bind(null,24):u[23].bind(null,2))(C,[w]),L))if(w[H[0]])Array.prototype[H[1]].call(J,function(V){u[22](60,V,w)});else{for(C in(Array.prototype[H[1]].call((k=
{},a)[3](24,w),function(V){k[V]=!0}),Array).prototype[H[1]].call(J,function(V){k[V]=!0}),D="",k)D+=0<D.length?" "+C:C;a[12](23,"class",w,D)}return L-4&13||(b=k[H[2]]==J||"fullscreen"==k[H[2]]?a[13](4,w,k.K):null),b},function(L,w,J,k,C,D){return 2==(L-((((C=[3,6,8],L+C[0])&15)>=C[1]&&9>(L^27)&&(D=N[18](30,w,k,J)),L+C[1])>>1>=L&&(L-9|12)<L&&y.setTimeout(function(){throw w;},0),C[2])&7)&&(D=w.hasAttribute("tabindex")),D},function(L,w,J,k,C,D){return((17>(C=[5,3,9],L-C[1])&&0<=(L>>2&C[1])&&(J?u[22](59,
w,k):d[22](43,w,k)),L-C[0])^14)<L&&L-C[2]<<1>=L&&M.call(this,w),D},function(L,w,J,k,C,D,H,b,V){if(!((L&(V=["call",1,"h"],78))==L&&(k=["m",null,"g"],wV[V[0]](this),this.B=w,d[13](44,this.B,this),this.K=J,d[13](45,this.K,this),this.I=k[V[1]],this.N=k[V[1]],d[47](39,!1,k[2],k[0],V[2],this)),L-9>>4)){for(D=H=0;H<J.length;H++)C=J[H],null!=a[36](67,C,k)&&(0!==D&&N[43](41,void 0,k,D,w),D=C);b=D}return b}]}(),N=function(){return[function(L,w,J,k,C,D,H){return L+(L-(D=[0,"K",2],3)>>3==D[2]&&(this[D[1]]=null),
6)>>3==D[2]&&(J=void 0===J?8:J,k=new P5,k.B(w),C=k.U(),H=d[1](38,1,C).slice(D[0],J)),1==((L^55)&13)&&(J=[],R[23](91,3,J,w,!1),H=J.join("")),H},function(L,w,J,k,C,D,H,b,V,A,S,O){if(O=["indexOf","B",3],(L+O[2]&70)>=L&&(L-9|52)<L&&(this[O[1]]=0,this.U=[],this.K=new Im),(L|32)==L){for(H=k.pop(),D=C[O[1]]+C.K.length()-H;127<D;)k.push(D&127|w),D>>>=J,C[O[1]]++;k.push(D),C[O[1]]++}return(L-6^O[2])<L&&(L-9|9)>=L&&(V=[0,"&",1],k?(A=J[O[0]](w),A<V[0]&&(A=J.length),H=J[O[0]]("?"),H<V[0]||H>A?(H=A,C=""):C=J.substring(H+
V[2],A),D=[J.slice(V[0],H),C,J.slice(A)],b=D[V[2]],D[V[2]]=k?b?b+V[1]+k:k:b,S=D[V[0]]+(D[V[2]]?"?"+D[V[2]]:"")+D[2]):S=J),S},function(L,w,J,k,C,D,H,b,V,A,S){return L-3>>((L<<1&(S=[37,21,2],5)||(J.N.K["delete"](k),J.N.add(k,w)),(L^60)>>4)||(A=-1!=w.indexOf(J)),4)||(V=["ct",null,"c"],Gz.call(this,N[28](31,"api2","userverify"),a[35](19,0,ZZ),"POST"),N[S[2]](33,w,this,V[S[2]]),N[S[2]](28,J,this,"response"),k!=V[1]&&N[S[2]](32,k,this,"t"),C!=V[1]&&N[S[2]](S[0],C,this,V[0]),D!=V[1]&&N[S[2]](S[1],D,this,
"bg"),H!=V[1]&&N[S[2]](36,H,this,"dg"),b!=V[1]&&N[S[2]](24,b,this,"mp")),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(E=["proxy","addEventListener and attachEvent are unavailable.",14],3>(L<<1&6)&&-61<=L>>2){if(!k)throw Error("Invalid event type");if(V=((S=(A=F[39](50,J)?!!J.capture:!!J,N[46](38,C)))||(C[sk]=S=new iS(C)),S).add(k,b,D,A,H),V[E[0]])f=V;else{if((((O=z[E[2]](2),V)[E[0]]=O,O).src=C,O).listener=V,C.addEventListener)Uk||(J=A),void 0===J&&(J=w),C.addEventListener(k.toString(),O,J);else if(C.attachEvent)C.attachEvent(N[8](73,
"on",k.toString()),O);else if(C.addListener&&C.removeListener)C.addListener(O);else throw Error(E[1]);f=(n9++,V)}}return(L&122)==L&&(f=""+Array.from(xw.keys())),f},function(L,w,J,k,C,D,H,b,V,A,S){if(3==((S=["K",11,2],L^S[2])&15))a:{for(D=(b=k[H=0,S[0]],V=b+w,k.U);b<V;)if(C=D[b++],H|=C,0===(C&128)){A=(F[46](33," > ",b,k),!!(H&J));break a}throw z[1](12);}return((1==(1==(L>>1&(3==(L-6&15)&&(A=w[S[0]]?R[22](26,w[S[0]].I):new Q(0,0)),S)[1])&&(this[S[0]]=C,this.size=w,this.box=k,this.time=17*J),L-1&13)&&
(D=this,J=N[23](36,w),b=[],k=R[4](76,w),V=R[S[2]](13,this,k[0]),C=R[29](37,k[1],this),H=a[6](23,null,k[S[2]]),C.forEach(function(O,f,E){(((E=[24,"K","I"],D)[E[1]][H]=O,f=R[28](63,u[8](E[0],J,new rZ),k.slice(3)),D[E[2]])[V].call(D,f),b).push(D[E[1]][J])}),this[S[0]][J]=b),L)&90)==L&&M.call(this,w,17,LN),A},function(L,w,J,k,C,D,H,b,V){if(L-(1==(L>>2&7)&&(this.K=w),b=["Tried to read a negative byte length: ",4,"B"],9)<<2>=L&&(L-6|27)<L){if(k<J)throw Error(b[0]+k);if((D=(H=C.K,H)+k,D)>C[b[2]])throw N[22](b[1],
w,k,C[b[2]]-H);C.K=(V=H,D)}return V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){if(2==(Y=[6,(L<<1&7||(this.B=[]),"childNodes"),18],(L^10)>>3)){if(V=(O=(A=d[26](24,9),H=u[35](9,C,k,D||wT),N[35](36,J,H)),A.K),f=N[37](Y[2],"DIV",V),t)b=Jk(k6,O),z[16](60,f,b),f.removeChild(f.firstChild);else z[16](61,f,O);if(f[Y[1]].length==w)S=f.removeChild(f.firstChild);else{for(E=V.createDocumentFragment();f.firstChild;)E.appendChild(f.firstChild);S=E}K=S}return 1==L+Y[0]>>3&&(D=k.CY,w[J]=C?function(c,P,l){return D(c,
P,l,C)}:D),K},function(L,w,J,k,C,D,H,b,V,A){return L+((A=[2,9,"iterator"],-71<=L>>1)&&1>L-6>>4&&(k instanceof String&&(k+=w),D=0,H={next:function(S){if(!b&&D<k.length)return S=D++,{value:C(S,k[S]),done:!1};return{done:(b=J,!0),value:void 0}}},b=!1,H[Symbol[A[2]]]=function(){return H},V=H),A[1])&A[0]||(J=this,k=N[23](6,w),C=R[4](20,w),this.K[k]=z[24](A[1],!1,function(S){return S.stringify(R[29](69,C[0],J))})),V},function(L,w,J,k,C,D,H){return((L|((L&((L>>2&(H=[1,40,24],11))>=H[0]&&13>(L|4)&&(this.B=
void 0,w=[1,0,!1],this.I=null,this.K=w[0],this.O=w[2],this.M=w[H[0]],this.U=w[H[0]],this.N=null),88))==L&&(C=k.style[N[30](H[2],"visibility")],D="undefined"!==typeof C?C:k.style[R[19](50,J,"visibility",k)]||w),72))==L&&(D=J in CN?CN[J]:CN[J]=w+J),L|H[1])==L&&(D=F[37](27,w,function(b,V){return(V=b.crypto||b.msCrypto)?k(V.subtle||V.IJ,V):k(J,J)})),L-2&15||(J=[],w.U.T.PK.WK.forEach(function(b,V){b.selected&&J.push(V)}),D=J),D},function(L,w,J,k,C,D){if((L&60)==(L-(C=["call",26,12],1)<<2>=L&&(L+9^29)<
L&&(k=w.document,J=N[C[2]](20,k)?k.documentElement:k.body,D=new Q(J.clientWidth,J.clientHeight)),L))M[C[0]](this,w,-1,D7);return 11<=(L<<2&14)&&L-9<C[1]&&(I[C[0]](this),this.K=0,this.endTime=this.startTime=null),D},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T){if(((h=[6,0,28],L)&46)==L){if(m=(K=(D=a[h[1]](43,h[1],(q=[null,194,1023],J.K)),H=J.K,N)[5](31," > ",h[1],D,H),H).U,HE){B=(O=((b=bh,B=m,b)||(b=bh=new TextDecoder("utf-8",{fatal:!0})),Y=K+D,b),0===K&&Y===B.length)?B:B.subarray(K,Y);
try{A=O.decode(B)}catch(e){if(void 0===jU){try{O.decode(new Uint8Array([128]))}catch(p){}try{O.decode(new Uint8Array([97])),jU=!0}catch(p){jU=!1}}!jU&&(bh=void 0);throw e;}}else{for(V=(P=q[f=K,h[1]],[]),k=f+D;f<k;){if(S=m[f++],128>S)V.push(S);else if(224>S)if(f>=k)u[15](19);else E=m[f++],S<q[1]||128!==(E&192)?(f--,u[15](19)):V.push((S&31)<<h[0]|E&63);else if(S<w)if(f>=k-1)u[15](21);else E=m[f++],128!==(E&192)||224===S&&160>E||237===S&&160<=E||128!==((c=m[f++])&192)?(f--,u[15](20)):V.push((S&15)<<
12|(E&63)<<h[0]|c&63);else if(244>=S)if(f>=k-2)u[15](26);else E=m[f++],128!==(E&192)||0!==(S<<h[2])+(E-144)>>30||128!==((c=m[f++])&192)||128!==((C=m[f++])&192)?(f--,u[15](24)):(l=(S&7)<<18|(E&63)<<12|(c&63)<<h[0]|C&63,l-=65536,V.push((l>>10&q[2])+55296,(l&q[2])+56320));else u[15](22);8192<=V.length&&(P=z[7](9,q[h[1]],V,P),V.length=h[1])}A=z[7](10,q[h[1]],V,P)}T=A}return(L&(2==(L>>1&7)&&(T=w instanceof h8?!!w.jP():!!w),122))==L&&(C=a[36](11,k,J),null!=C&&null!=C&&(d[23](5,w.K,8*k),d[23](4,w.K,C))),
T},function(L,w,J,k,C,D){if(((((C=["call","B",1],L-9<<2)>=L&&(L+8^10)<L&&(0===w[C[1]].length&&(w[C[1]]=w.K,w[C[1]].reverse(),w.K=[]),D=w[C[1]].pop()),2)==L-7>>3&&(k=u[32](40),D=J==w?k.sessionStorage:k.localStorage),L)|64)==L)M[C[0]](this,w,-1,VW);if(!(L-9>>(9<=(L+5&15)&&14>(L|2)&&(w=["prepositional",null,0],U[C[0]](this,Ak.width,Ak.height,w[0],!0),this.D=w[C[2]],this.P=w[2],this.U=w[C[2]],this.C=w[C[2]],this.K=[]),4))){if(!(J=d[13](58,a[28](17,"-",w),document),J))throw Error("reCAPTCHA client element has been removed: "+
w);D=J}return D},function(L,w,J,k){return((J=["compatMode",16,7],L<<2)&4||(k="CSS1Compat"==w[J[0]]),L)+3<J[1]&&1<=((L|9)&J[2])&&(k=SU[w]),k},function(L,w,J,k,C,D){return 1==(L-6<<(C=[4,"replace",2],C[2])>=L&&(L-C[0]|15)<L&&(D=J?k?decodeURI(J[C[1]](/%25/g,w)):decodeURIComponent(J):""),L>>C[2]&7)&&(Ol.call(this,w,J),this.P=this.k9=null,this.Qe=!1),D},function(L,w,J,k,C,D,H){if(D=[31," must not be null or undefined",5],1>L+9>>D[2]&&20<=L+3){if(null==J)throw new TypeError("The 'this' value for String.prototype."+
C+D[1]);if(k instanceof RegExp)throw new TypeError("First argument to String.prototype."+C+" must not be a regular expression");H=J+w}if(!((L|8)&D[2]))F[D[0]](63,a[42](9,"rc-imageselect-progress"),w,100-k/J*100+"%");return H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T){return(3==((((L+(12<=(h=[7,"</span>","rc-anchor-error-msg"],(L|2)&27)&&26>L-9&&(J.C||(J.C=J.dI()<w?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true"),T=J.C),8)^
16)<L&&(L+3&54)>=L&&(E=[" ","recaptcha-checkbox-checkmark",'" role="presentation"></div><div class="'],w=w||{},A=w.Tv,P=w.checked,B=w.A0,l=w.disabled,O=w.attributes,c=w.aD,Y=g,J=w.pH,m=w.NZ,k=w.id,q='<span class="'+R[h[0]](50,"recaptcha-checkbox")+E[0]+R[h[0]](42,"goog-inline-block")+(P?E[0]+R[h[0]](26,"recaptcha-checkbox-checked"):E[0]+R[h[0]](58,"recaptcha-checkbox-unchecked"))+(l?E[0]+R[h[0]](26,"recaptcha-checkbox-disabled"):"")+(m?E[0]+R[h[0]](42,m):"")+'" role="checkbox" aria-checked="'+(P?
"true":"false")+'"'+(A?' aria-labelledby="'+R[h[0]](18,A)+'"':"")+(k?' id="'+R[h[0]](18,k)+'"':"")+(l?' aria-disabled="true" tabindex="-1"':' tabindex="'+(J?R[h[0]](42,J):"0")+'"'),O?(u[h[0]](23,M2,O)?V=O.jP():(D=String(O),V=a9.test(D)?D:"zSoyz"),C=V,u[h[0]](17,M2,C)&&(C=C.jP()),H=(C&&!C.startsWith(E[0])?" ":"")+C):H="",b=b={A0:B,aD:c},K=b.aD,f=q+H+' dir="ltr">',S=g((b.A0?'<div class="'+(K?R[h[0]](50,"recaptcha-checkbox-nodatauri")+E[0]:"")+R[h[0]](2,"recaptcha-checkbox-border")+E[2]+(K?R[h[0]](58,
"recaptcha-checkbox-nodatauri")+E[0]:"")+R[h[0]](26,"recaptcha-checkbox-borderAnimation")+E[2]+R[h[0]](26,"recaptcha-checkbox-spinner")+'" role="presentation"><div class="'+R[h[0]](50,"recaptcha-checkbox-spinner-overlay")+'"></div></div>':'<div class="'+R[h[0]](18,"recaptcha-checkbox-spinner-gif")+'" role="presentation"></div>')+'<div class="'+R[h[0]](34,E[1])+'" role="presentation"></div>'),T=Y(f+S+h[1])),(L&114)==L)&&(T=g('<div class="'+R[h[0]](34,"rc-anchor-error-msg-container")+'" style="display:none"><span class="'+
R[h[0]](18,h[2])+'" aria-hidden="true"></span></div>')),L)-h[0]&h[0])&&(this.K=J[y.Symbol.iterator](),this.B=w),L)-4&30||(this.promise=J,this.resolve=k,this.reject=w),T},function(L,w,J,k,C,D,H,b,V,A,S){return(L+7^29)<((L|7)>>(S=((L|24)==L&&(this.type=w,this.B=this.target=J,this.defaultPrevented=this.U=!1),[34,3,"F"]),4)||(V=["audio","","active"],J.K.U=V[2],F[S[1]](49,")",V[0],V[1],100,k,J.B),J.B.K.Y=J.N,N[44](4,!0,w,J.B.K,D,C,b),J.I=a[0](32,J.l,1E3*H,J)),L)&&(L+9&31)>=L&&(H=void 0===H?new fN(0,0,
0,0):H,b.K||b.M(),b.U=H||new fN(0,0,0,0),D[k]="width: 100%; height: 100%;",D[J]=C+b[S[2]],b.I=d[19](S[1],"",w,D),F[S[0]](2,"inline",b).appendChild(b.I)),A},function(L,w,J,k,C,D,H,b,V,A){if(2==((V=[3,"um",!1],L<<1)&15)){for(b=(Array.isArray(J)||(J&&(uh[0]=J.toString()),J=uh),0);b<J.length;b++){if(!(H=R[35](45,J[b],w,C||k.handleEvent,D||V[2],k.D||k),H))break;k.W[H.key]=H}A=k}return((4==((1<=(L+9&V[0])&&15>(L^11)&&M.call(this,w),L)>>2&15)&&(A=k+a[21](32,w,J,4)),(L^85)&15)==V[0]&&(H=w,k==J||"object"!==
typeof k||(H=Array.isArray(k))||k[V[1]]!==Ty?H?A=new C(k):D&&(A=new C):A=k),L|56)==L&&(Wu.call(this,w),this.K=[[]],this.D=1),A},function(L,w,J,k,C,D){return(L+((D=[35,"K",8],L|D[2])==L&&(C=F[31](7,d[4](22,"object",J),w,k)),3)&31)>=L&&(L+2^18)<L&&(I.call(this),this.N=-1,this[D[1]]=w,this.U=new El(this[D[1]]),d[13](47,this.U,this),(gT&&zW||o9||R9)&&R[D[0]](46,["touchstart","touchend"],this[D[1]],this.I,!1,this),J||(R[D[0]](43,"action",this.U,this.B,!1,this),R[D[0]](45,"keyup",this[D[1]],this.O,!1,this)),
this.C=k),C},function(L,w,J,k,C,D,H,b){if(!(((H=[6,24,20],40>(L|7)&&L-8>=H[2])&&(D=k[KN],D||(D=function(V,A){return a[5](64,w,J,C,V,A)},k[KN]=D),b=D),L|H[0])>>4))if("FORM"==J.tagName)for(C=0,D=J.elements;J=D.item(C);C++)N[19](2,!0,J,k);else k==w&&J.blur(),J.disabled=k;return(((L-((L&124)==L&&G.call(this,w,J||N2.X(),k),4)^17)>=L&&(L+H[0]&15)<L&&(k=F[H[1]](1,w,J),C=u[37](22,J),b=new fN(k.y,k.x,C.width,C.height)),L)|80)==L&&this.K(w,J),b},function(L,w,J,k,C,D,H,b,V,A,S,O){if(!(L+2>>((S=[7,"indexOf",
4],8<=(L-6&15))&&15>(L^88)&&(J=VD.X().get(),O=z[40](51,J,w)),S[2])))try{O=J()}catch(f){O=w}if((L&109)==(1==(((L&124)==L&&((D=k.Ru)?O=N[31](5,w,J,D):(C=k.B5)&&(O=z[44](17,k.Tu,k.G0.O_,C))),L)+5&13)&&(J.I&&(u[36](30,J.I),J.I=w),J.K&&(J.B=w,R[S[0]](12,J.l),J.l=w,F[44](34,J),u[36](28,J.K),J.K=w)),L)){for(H=(b=[],A=(C=[],(k.K.cookie||"").split(w)),J);H<A.length;H++)D=Nz(A[H]),V=D[S[1]]("="),-1==V?(C.push(""),b.push(D)):(C.push(D.substring(J,V)),b.push(D.substring(V+1)));O={keys:C,values:b}}return O},function(L,
w,J,k,C,D,H,b,V,A,S,O,f,E){if((E=["capture",18,10],22>L-1)&&3<=L-9){for(k=(C=u[2](7,J),C).next();!k.done&&w.add(k.value);k=C.next());f=w}if((14>(L^37)&&L>>1>=E[2]&&(w=['<span class="','\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.</div><div class="',"rc-prepositional-select-more"],J='<div id="rc-prepositional"><span class="'+R[7](34,"rc-prepositional-tabloop-begin")+'" tabIndex="0"></span><div class="'+R[7](2,w[2])+'" style="display:none" tabindex="0">',
J=J+'\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442\u044b.</div><div class="'+(R[7](34,"rc-prepositional-verify-failed")+'" style="display:none" tabindex="0">'),J=J+w[1]+(R[7](E[1],"rc-prepositional-payload")+'"></div>'+z[44](3," ")+w[0]+R[7](E[2],"rc-prepositional-tabloop-end")+'" tabIndex="0"></span></div>'),f=g(J)),2)==(L<<1&7))if(H=k.W.K[String(D)]){for(A=(H=H.concat(),!0),V=
0;V<H.length;++V)(O=H[V])&&!O.N7&&O[E[0]]==J&&(b=O.lm||O.src,S=O.listener,O.j2&&z[27](3,w,O,k.W),A=!1!==S.call(b,C)&&A);f=A&&!C.defaultPrevented}else f=!0;return f},function(L,w,J,k,C,D){if((L&(D=[15,"call",90],D)[2])==L&&(w.style.display=J?"":"none"),2==(L-5&14))M[D[1]](this,w);return 3==((L^26)&(((L&44)==L&&(C=Error("Tried to read past the end of the data "+k+w+J)),L)+3&23||(ge[D[1]](this,"b"),this.error=w),D[0]))&&(k=new Y6,C=N[18](8,w,J,k)),C},function(L,w,J,k,C,D,H){if((L+4^31)>=((L>>(H=[2,29,
"call"],H[0])&15)==H[0]&&(D=N[38](58,w)&&!N[38](18,J)&&!N[38](10,"iPad")),L)&&(L-1^28)<L)M[H[2]](this,w);if(!((L^82)>>((L-H[0]^H[1])>=((L&118)==L&&(D=a[48](17,null,0,a[36](66,H[0],w))),L)&&(L-4^H[1])<L&&(k=N[23](18,w),C=R[4](60,w),J=R[H[1]](31,C[0],this),this.K[k]=u[32](24)[J]),4)))M[H[2]](this,w);return D},function(L,w,J,k,C,D,H){return(L-6|(2==(L<<(10<=(H=["rc-image-tile-overlay",1,14],L<<H[1]&13)&&3>(L>>2&6)&&(w=void 0===w?d[15](5,0):w,J=void 0===J?{}:J,k=d[35](33,0,w,J).client,J&&(C=k.K,ax(C.K,
J),C.K=u[H[2]](9,null,C.K)),a[40](16,!0,k)),H)[1]&15)&&(iJ.call(this),this.I=k,this.N=!1,this.O=w,this.B=J||window,this.K=null,this.U=x(this.C,this)),27))<L&&L-8<<2>=L&&(F[31](52,a[42](12,H[0],k.element),{opacity:"0.5",display:"block",top:"0px"}),a[0](31,function(b){F[31]((b=[53,"rc-image-tile-overlay",42],b[0]),a[b[2]](8,b[1],k.element),"opacity",w)},J)),D},function(L,w,J,k){return(L+7>>2<(J=["K","B",0],L)&&(L+1^29)>=L&&(this.N=null,this[J[0]]=J[2],this.U=new cE,this[J[1]]=new cE),L-7)>>4||(this[J[0]]=
function(){return DZ(function(C,D){return(D=F[19](6)-C,Math).floor(D/w)?0:w-D},F[19](39))}()),k},function(L,w,J,k,C,D,H){return(L^(L>>(H=[": ",23,9],2)&7||(C=z[10](17,w,z[10].bind(null,24),J.rI,a[H[2]].bind(null,1)),z[5](64,16,C),Gy=C,k=new J.constructor(C),Gy=void 0,F[12](65,H[0],0,k,J),D=k),H)[1])>>3||(this.B=w,this.K=J),D},function(L,w,J,k,C,D,H,b){if(7<=(H=["contains","charCodeAt","nodeType"],L+7)&&21>(L^23))if(D&&C)if(D[H[0]]&&C[H[2]]==w)b=D==C||D[H[0]](C);else if("undefined"!=typeof D.compareDocumentPosition)b=
D==C||!!(D.compareDocumentPosition(C)&J);else{for(;C&&D!=C;)C=C.parentNode;b=C==D}else b=k;return 1==(L>>1&5)&&(b="a-"[H[1]]),b},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c){if(L<<(Y=["D",8,15],2)&Y[2]||(k.Em(),A=k.response,V=z[19](24,k.MB),b=F[43](3,12,w,"enterDocument",V),A.e=b,D=k.response,z[17](65,!1,D)?H="":(C=JSON.stringify(D),H=u[33](1,J,C,J)),c=H),1==((L^46)&Y[2])&&(c=(new EI(u[29](52,w,J))).N),4==L+5>>4){if(!(S=(b=N[30](9,(O=[8,2,3],D=u[19](56,w.rI),33),O[1],J,w,C,D,D,k),N[39](Y[1],16,C,w,
J,D,O[2])),D)&&S&&!(d[49](93,S)&O[0])){for(V=0;V<b.length;V++)A=b[V],H=a[35](53,!1,A),A!==H&&(b[V]=H,S[V]=b[V].rI);R[40](56,O[0],S)}c=b}if(0<=(L|3)>>4&&(L|4)<Y[1])if(E=H.K&&H.K[A])K=E.length>J?E[J].constructor:void 0,f=d[49](94,E),f&w?O=E:(S=PE(E,u[17].bind(null,36)),R[3](12,f,S),Object.freeze(S),O=S),d[34](53,Y[1],C,K,A,O,D);else F[31](Y[2],u[Y[2]](5,b,V,k),A,C,D);if((L&90)==L)for("function"===typeof k.l&&(J=k.l(J)),k.coords=Array(k.U.length),C=w;C<k.U.length;C++)k.coords[C]=(k[Y[0]][C]-k.U[C])*
J+k.U[C];return c},function(L,w,J,k,C,D,H,b){return(L|((L&38)==L&&(b=a[2](33,function(V,A,S,O,f,E,K,Y){return S=(f=(Y=(O=V.return,[29,"call",19]),K=new dT,F[31](17,D.N,1,K)),E=N[18](13,k,"Km9gKuG06He-isPsP6saG8cn",f),N)[18](Y[0],2,w+H,E),A=N[18](12,C,d[31](72),S),O[Y[1]](V,R[37](31,J,C,0,w,z[Y[2]](4,A),z[49](36,lh,D.K)||R[47](2)))})),8))==L&&M.call(this,w),b},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p){if(1==(L-8&(9<=((L^(2==((L^(p=[0,29,"K"],58))&15)&&(e=String(w).replace(/\-([a-z])/g,
function(v,n){return n.toUpperCase()})),43))&15)&&11>(L-8&14)&&(this.ae=!0,w=this.L(),d[22](8,"label-input-label",w),d[18](p[1],null)||R[42](26,"",this)||this.I||(k=function(){J.L()&&(J.L().value="")},J=this,t?a[p[0]](34,k,10):k())),15))){if(P=(A=C[(T=[8,(C[p[2]]||(C[p[2]]={}),16),!1],p)[2]][k],N[39](1,T[1],D,C,k,b,3)),A)b||(Object.isFrozen(A)?H||(A=Array.prototype.slice.call(A),C[p[2]][k]=A):H&&Object.freeze(A));else{for(h=(Y=(f=!!(d[49](90,(A=[],C.rI))&T[1]),u[19](72,P)),!b&&Y&&(P=a[p[1]](25,1,
Array.prototype.slice.call(P)),N[43](40,P,C,k,D)),l=p[0],Y);l<P.length;l++)q=P[l],K=f,O=V,c=T[2],c=void 0===c?!1:c,K=void 0===K?!1:K,S=Array.isArray(q)?new O(K?z[5](35,T[1],q):q):c?new O:void 0,B=S,void 0!==B&&(h=h||u[19](64,q),A.push(B),Y&&R[40](49,J,B.rI));(Object.isFrozen((C[(m=P,p)[2]][k]=A,m))||(E=d[49](91,m)|w,d[44](65,h?E&-9:E|T[p[0]],m)),(b||H&&Y)&&R[40](50,J,A),b||H)&&Object.freeze(A)}e=A}return 5>((L|4)&14)&&14<=L<<1&&(e=N[20](10,C,function(v,n,X){return(v=(n=(X=function(W5,$c){return(-1!=
($c=["trim","indexOf","replace"],W5)[$c[1]](w)&&(W5=W5.slice(W5[$c[1]](w))),W5)[$c[2]](/\s+/g,J)[$c[2]](/\n/g,k)[$c[0]]()},X(k+D)),X(k+H)),n)==v})),e},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){return(L+((L|(P=[3,23,10],(L&13)==L&&(D=k[mr],D||(C=F[5](11,w,k),D=function(l,m){return a[24](1,w,J,l,m,C)},k[mr]=D),Y=D),48>(L|9)&&28<=(L^4)&&(VR.call(this,function(){return w}),this.U=w),88))==L&&(S=[15,1,"b"],O=u[2](6,k),E=O.next().value,V=O.next().value,f=O.next().value,b=O.next().value,C=void 0===C?
{}:C,A=d[16](4,2,u[31](56,S[1],F[4](1,2,new G8,D.U.C.value))),f&&N[18](8,P[0],f,A),E&&N[18](13,5,E,A),V&&N[18](12,4,V,A),b&&N[18](8,16,b,A),(H=a[2](P[1],d[15](31,S[2]),S[1]))&&N[18](9,w,H,A),C[Hd.DD]&&N[18](P[2],8,C[Hd.DD],A),C[q2.DD]&&N[18](12,9,C[q2.DD],A),C[bS.DD]&&N[18](P[2],J,C[bS.DD],A),C[BE.DD]&&N[18](P[2],P[2],C[BE.DD],A),C[hk.DD]&&N[18](13,S[0],C[hk.DD],A),C[FV.DD]&&N[18](29,17,C[FV.DD],A),Y=A),(L^86)&9||M.call(this,w),P[0])^26)<L&&(L-9|66)>=L&&(c=function(l){return w.next(l)},K=function(l){return w["throw"](l)},
Y=new Promise(function(l,m){function q(B){B.done?l(B.value):Promise.resolve(B.value).then(c,K).then(q,m)}q(w.next())})),Y},function(L,w,J,k,C,D){return((C=[5,3,48],1)==((L^C[1])&7)&&(D=Promise.resolve(u[20](30,C[1],12,"B",J,w))),1>(L<<1&4)&&((L|C[0])&7)>=C[1])&&w.L()&&F[C[2]](1,k,J,w.L()),D},function(L,w,J,k,C,D,H){return((((D=["aL",!1,41],L)&105)==L&&(this.vm(D[1]),this.NO(D[1]),d[D[2]](4,"g",this)),5)<=(L>>1&7)&&17>(L^24)&&(H=function(){return z[27](4,"",18,new TW(k.B),C).then(function(b,V){return z[30]((V=
[7,6,1],V[2]),V[1],N[31](88,V[0],J,b,k.K,C),w)})}),L+8>>4)||0<this.K[D[0]]().length&&this.NO(D[1]),H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B){if((L<<((q=["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438</strong>.",4,1],8)>((L^23)&8)&&5<=((L|q[2])&7)&&M.call(this,w,-1,$6),q[2])&q[1])<q[1]&&-59<=
L<<2){Y=["Select all squares that match the label: <strong>",(P="","/m/01_m7"),"/m/07yv9"],E=w.label;switch(F[39](q[1],E)?E.toString():E){case "stop_sign":P+='<div class="'+R[7](34,"rc-imageselect-candidates")+'"><div class="'+R[7](10,"rc-canonical-stop-sign")+'"></div></div><div class="'+R[7](2,"rc-imageselect-desc")+'">';break;case "vehicle":case Y[2]:case "/m/0k4j":P+='<div class="'+R[7](34,"rc-imageselect-candidates")+'"><div class="'+R[7](26,"rc-canonical-car")+'"></div></div><div class="'+R[7](58,
"rc-imageselect-desc")+'">';break;case "road":P+='<div class="'+R[7](50,"rc-imageselect-candidates")+'"><div class="'+R[7](26,"rc-canonical-road")+'"></div></div><div class="'+R[7](10,"rc-imageselect-desc")+'">';break;case "/m/015kr":P+='<div class="'+R[7](50,"rc-imageselect-candidates")+'"><div class="'+R[7](2,"rc-canonical-bridge")+'"></div></div><div class="'+R[7](58,"rc-imageselect-desc")+'">';break;default:P+='<div class="'+R[7](34,"rc-imageselect-desc-no-canonical")+'">'}k=P,O=w.Si,J="";switch(F[39](68,
O)?O.toString():O){case "tileselect":case "multicaptcha":A=(D="",l=J,C=w.label,w.Si);switch(F[39](36,C)?C.toString():C){case "TileSelectionStreetSign":case "/m/01mqdt":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u043a\u0438</strong>.";break;
case "TileSelectionBizView":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439</strong>.";break;case "stop_sign":case "/m/02pv19":D+='\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0437\u043d\u0430\u043a\u0438 "\u0421\u0442\u043e\u043f"</strong>.';
break;case "sidewalk":case "footpath":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0442\u0440\u043e\u0442\u0443\u0430\u0440\u044b</strong>.";break;case "vehicle":case Y[2]:case "/m/0k4j":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430</strong>.";
break;case "road":case "/m/06gfj":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0434\u043e\u0440\u043e\u0433\u0438</strong>.";break;case "house":case "/m/03jm5":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0434\u043e\u043c\u0430</strong>.";
break;case "/m/015kr":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043c\u043e\u0441\u0442\u044b</strong>.";break;case "/m/0cdl1":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043f\u0430\u043b\u044c\u043c\u044b</strong>.";
break;case "/m/014xcs":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043f\u0435\u0448\u0435\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b</strong>.";break;case "/m/015qff":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0441\u0432\u0435\u0442\u043e\u0444\u043e\u0440\u044b</strong>.";
break;case "/m/01pns0":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043f\u043e\u0436\u0430\u0440\u043d\u044b\u0435 \u0433\u0438\u0434\u0440\u0430\u043d\u0442\u044b</strong>.";break;case "/m/01bjv":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0430\u0432\u0442\u043e\u0431\u0443\u0441\u044b</strong>.";
break;case "/m/0pg52":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0442\u0430\u043a\u0441\u0438</strong>.";break;case "/m/04_sv":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c <strong>\u043c\u043e\u0442\u043e\u0446\u0438\u043a\u043b\u044b</strong>.";
break;case "/m/0199g":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u044b</strong>.";break;case "/m/015qbp":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043f\u0430\u0440\u043a\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u0447\u0430\u0441\u044b</strong>.";
break;case "/m/01lynh":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u043b\u0435\u0441\u0442\u043d\u0438\u0446\u044b</strong>.";break;case "/m/01jk_4":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0434\u044b\u043c\u043e\u0432\u044b\u0435 \u0442\u0440\u0443\u0431\u044b</strong>.";
break;case "/m/013xlm":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b <strong>\u0442\u0440\u0430\u043a\u0442\u043e\u0440\u0430</strong>.";break;case "/m/07j7r":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c <strong>\u0434\u0435\u0440\u0435\u0432\u044c\u044f</strong>.";
break;case "/m/0c9ph5":D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c <strong>\u0446\u0432\u0435\u0442\u044b</strong>.";break;case "USER_DEFINED_STRONGLABEL":D+=Y[0]+z[q[2]](37,w.GT)+"</strong>";break;default:D+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0438\u0436\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043d\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u0440\u0430\u0432\u0430 \u043e\u0431\u0440\u0430\u0437\u0435\u0446."}J=
(S=(F[42](39,A,"multicaptcha")&&(D+='<span class="'+R[7](58,"rc-imageselect-carousel-instructions")+'">',D+='\u0415\u0441\u043b\u0438 \u0438\u0445 \u043d\u0435\u0442, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c".</span>'),g)(D),l)+S;break;default:b=(V=(K="",w.label),m=J,w.Si);switch(F[39](52,V)?V.toString():V){case "1000E_sign_type_US_stop":case "/m/02pv19":K+='\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e <strong>\u0437\u043d\u0430\u043a\u0430\u043c\u0438 "\u0421\u0442\u043e\u043f"</strong>.';
break;case "signs":case "/m/01mqdt":K+=q[0];break;case "ImageSelectStoreFront":case "storefront":case "ImageSelectBizFront":case "ImageSelectStoreFront_inconsistent":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0432\u0438\u0442\u0440\u0438\u043d\u0430\u043c\u0438</strong>.";break;case "/m/05s2s":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0440\u0430\u0441\u0442\u0435\u043d\u0438\u044f</strong>.";
break;case "/m/0c9ph5":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0446\u0432\u0435\u0442\u044b</strong>.";break;case "/m/07j7r":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0434\u0435\u0440\u0435\u0432\u044c\u044f</strong>.";
break;case "/m/08t9c_":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0442\u0440\u0430\u0432\u0430</strong>.";break;case "/m/0gqbt":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043a\u0443\u0441\u0442\u044b</strong>.";
break;case "/m/025_v":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f <strong>\u043a\u0430\u043a\u0442\u0443\u0441\u0430</strong>.";break;case "/m/0cdl1":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043f\u0430\u043b\u044c\u043c\u044b</strong>";break;case "/m/05h0n":K+=
"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043f\u0440\u0438\u0440\u043e\u0434\u0430</strong>.";break;case "/m/0j2kx":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0432\u043e\u0434\u043e\u043f\u0430\u0434\u044b</strong>.";
break;case "/m/09d_r":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0433\u043e\u0440\u044b \u0438\u043b\u0438 \u0445\u043e\u043b\u043c\u044b</strong>.";break;case "/m/03ktm1":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0432\u043e\u0434\u043e\u0435\u043c\u044b</strong>, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043e\u0437\u0435\u0440\u0430 \u0438\u043b\u0438 \u043e\u043a\u0435\u0430\u043d\u044b.";
break;case "/m/06cnp":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0440\u0435\u043a\u0438</strong>.";break;case "/m/0b3yr":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043f\u043b\u044f\u0436\u0438</strong>.";
break;case "/m/06m_p":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0441\u043e\u043b\u043d\u0446\u0435</strong>.";break;case "/m/04wv_":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043b\u0443\u043d\u0430</strong>.";
break;case "/m/01bqvp":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043d\u0435\u0431\u043e</strong>.";break;case Y[2]:K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438</strong>";
break;case "/m/0k4j":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438</strong>";break;case "/m/0199g":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u044b</strong>.";
break;case "/m/04_sv":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043c\u043e\u0442\u043e\u0446\u0438\u043a\u043b\u044b</strong>.";break;case "/m/0cvq3":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043f\u0438\u043a\u0430\u043f\u044b</strong>.";
break;case "/m/0fkwjg":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0433\u0440\u0443\u0437\u043e\u0432\u0438\u043a\u0438</strong>.";break;case "/m/019jd":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043b\u043e\u0434\u043a\u0438</strong>.";
break;case "/m/01lcw4":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043b\u0438\u043c\u0443\u0437\u0438\u043d\u044b</strong>.";break;case "/m/0pg52":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0442\u0430\u043a\u0441\u0438</strong>.";
break;case "/m/02yvhj":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0448\u043a\u043e\u043b\u044c\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u0431\u0443\u0441</strong>.";break;case "/m/01bjv":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0430\u0432\u0442\u043e\u0431\u0443\u0441</strong>.";
break;case "/m/07jdr":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u043f\u043e\u0435\u0437\u0434\u0430\u043c\u0438</strong>.";break;case "/m/02gx17":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e <strong>\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u043e\u0439</strong>.";
break;case "/m/013_1c":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e <strong>\u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u0430\u043c\u0438</strong>.";break;case "/m/0h8lhkg":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0444\u043e\u043d\u0442\u0430\u043d\u0430\u043c\u0438</strong>.";
break;case "/m/015kr":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u043c\u043e\u0441\u0442\u0430\u043c\u0438</strong>.";break;case "/m/01phq4":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u043f\u0438\u0440\u0441\u0430\u043c\u0438</strong>.";break;case "/m/079cl":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u043d\u0435\u0431\u043e\u0441\u043a\u0440\u0435\u0431\u0430\u043c\u0438</strong>.";
break;case Y[q[2]]:K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e <strong>\u0441\u0442\u043e\u043b\u0431\u0430\u043c\u0438 \u0438\u043b\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u0430\u043c\u0438</strong>.";break;case "/m/011y23":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0432\u0438\u0442\u0440\u0430\u0436\u0430\u043c\u0438</strong>.";
break;case "/m/03jm5":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0434\u043e\u043c\u0430\u043c\u0438</strong>.";break;case "/m/01nblt":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u043c\u043d\u043e\u0433\u043e\u044d\u0442\u0430\u0436\u043d\u044b\u043c\u0438 \u0434\u043e\u043c\u0430\u043c\u0438</strong>.";
break;case "/m/04h7h":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u043c\u0430\u044f\u043a\u0430\u043c\u0438</strong>.";break;case "/m/0py27":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0436\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u043d\u0446\u0438\u044f\u043c\u0438</strong>.";
break;case "/m/01n6fd":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438</strong>.";break;case "/m/01pns0":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0433\u0438\u0434\u0440\u0430\u043d\u0442\u0430\u043c\u0438</strong>.";
break;case "/m/01knjb":case "billboard":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 <strong>\u0431\u0438\u043b\u0431\u043e\u0440\u0434\u0430\u043c\u0438</strong>.";break;case "/m/06gfj":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0434\u043e\u0440\u043e\u0433\u0438</strong>.";
break;case "/m/014xcs":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043f\u0435\u0448\u0435\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b</strong>.";break;case "/m/015qff":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0441\u0432\u0435\u0442\u043e\u0444\u043e\u0440\u044b</strong>.";
break;case "/m/08l941":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0434\u0432\u0435\u0440\u0438 \u0433\u0430\u0440\u0430\u0436\u0435\u0439</strong>.";break;case "/m/01jw_1":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0430\u0432\u0442\u043e\u0431\u0443\u0441\u043d\u044b\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438</strong>.";
break;case "/m/03sy7v":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u043a\u043e\u043d\u0443\u0441\u044b</strong>.";break;case "/m/015qbp":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043f\u0430\u0440\u043a\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u0447\u0430\u0441\u044b</strong>.";
break;case "/m/01lynh":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u043b\u0435\u0441\u0442\u043d\u0438\u0446\u044b</strong>.";break;case "/m/01jk_4":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0434\u044b\u043c\u043e\u0432\u044b\u0435 \u0442\u0440\u0443\u0431\u044b</strong>.";
break;case "/m/013xlm":K+="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0435\u0441\u0442\u044c <strong>\u0442\u0440\u0430\u043a\u0442\u043e\u0440\u0430</strong>.";break;default:f="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u044d\u0442\u043e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442: <strong>"+
z[q[2]](5,w.GT)+"</strong>.",K+=f}J=(F[42](39,b,"dynamic")&&(K+='<span>\u041a\u043e\u0433\u0434\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u043e\u043d\u0447\u0430\u0442\u0441\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c".</span>'),H=g(K),m+H)}c=g(J),B=g(k+(c+"</div>"))}return B},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(0<=L-((L&114)==(E=["toString",41,15],L)&&(b=R[22](22,C.I).width-
14,H=D==w&&k==w?1:2,O=new Q((k-J)*H*2,(D-J)*H*2),V=new Q(b-O.width,b-O.height),A=J/D,S=J/k,V.width*=S,V.height*="number"===typeof A?A:S,V.floor(),f={Qw:V.height+"px",Rt:V.width+"px",rowSpan:D,colSpan:k}),9)>>3&&3>(L>>1&E[2])){if(F[39](70,J)){if(J instanceof h8){if(J.HM!==eU)throw Error("Sanitized content was not of kind HTML.");D=(z[k=J[E[0]](),25](E[1],R[32](1,new XV(QW,"Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."))),d[13](89,k))}else D=a[43](6,"<",w);C=D}else C=
a[43](10,"<",String(J));f=C}return(((L&105)==L&&(f=document.body),L)|72)==L&&((C=k.K)||(D={},d[28](2,w,k)&&(D[w]=!0,D[J]=!0),C=k.K=D),f=C),f},function(L,w,J,k,C,D,H,b){if(1==(L>>(b=[27,"K",23],1)&15))a[0](32,function(){try{this.s_()}catch(V){if(!t)throw V;}},t?300:100,w);return L<<2&((L+4&(1==L-8>>3&&(k=["",3," "],D=[],R[b[2]](88,k[1],D,J,w),C=D.join(k[0]),C=C.replace(/ \xAD /g,k[2]).replace(/\xAD/g,k[0]),C=C.replace(/\u200B/g,k[0]),C=C.replace(/ +/g,k[2]),C!=k[2]&&(C=C.replace(/^\s*/,k[0])),H=C),
25))<L&&(L-6^6)>=L&&(d[b[2]](4,k[b[1]],C*w+2),d[b[2]](6,k[b[1]],J.length),F[39](3,k,k[b[1]].end()),F[39](1,k,J)),14)||(u[7](85,J),k=R[37](b[0],k,J),J[b[1]].has(k)&&(J.U=w,J.B-=J[b[1]].get(k).length,J[b[1]]["delete"](k))),H},function(L,w,J,k,C,D,H,b){return((2==((L^8)&(((b=[31,"box",109],(L&b[2])==L)&&(D=new vE(d[25](19,k,C.K),C.size,C[b[1]],C.time,void 0,!0),z[23](59,w,x(function(V,A){((V=(A=["","backgroundPositionX","backgroundPositionY"],this.C).style,V).backgroundPosition=A[0],"undefined")!=typeof V[A[1]]&&
(V[A[1]]=A[0],V[A[2]]=A[0])},D),D,J),H=D),(L|64)==L)&&(H=!!window.___grecaptcha_cfg.fallback),11))&&M.call(this,w,-1,pN),L>>1<b[0])&&24<=L>>1&&M.call(this,w,-1,tk),13>(L>>1&b[0])&&6<=(L>>1&15))&&(w=String(w),"application/xhtml+xml"===J.contentType&&(w=w.toLowerCase()),H=J.createElement(w)),H},function(L,w,J,k,C,D,H,b){if((L&((2==(b=[45,"call",1],L+8&7)&&(H=N[2](51,u[20](32),w)),11<=L<<b[2])&&19>(L^b[0])&&(C=J||"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c",D=w.Hm,R[8](b[2],0,
9,"object",D.L(),C),D.fc=C,F[48](5,"rc-button-red",!!k,w.Hm.L())),61))==L)M[b[1]](this,w);return H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){return((E=["toString",null,44],(L-4^23)<L&&(L-3^15)>=L&&(this.K=w),L-7<<2<L&&(L-1^32)>=L)&&(O=[1,2],b=a[36](42,C,k,J),Array.isArray(b)||(b=Vx),V=d[49](74,b),V&O[0]||a[29](27,O[0],b),D?(V&O[1]||R[40](58,O[1],b),H&O[0]||Object.freeze(b)):(S=!(H&O[1]),A=V&O[1],H&O[0]||!A?S&&V&w&&!A&&d[43](10,w,b):(b=a[29](28,O[0],Array.prototype.slice.call(b)),N[43](47,b,k,C,J))),
f=b),L^50)&6||(O=["ru",12,"v"],J=VD.X(),z[6](7,J,u[42](8,w,3,AM)),a[47](22),D=a[36](34,1,u[42](15,w,6,WE)),3==D?S=new yW(a[36](75,2,u[42](7,w,6,WE)),a[36](75,3,u[42](11,w,6,WE)),u[42](8,w,O[1],GW),z[23](32,w,19)||!1,z[23](36,w,20)||!1):S=new I9(a[36](10,2,u[42](8,w,6,WE)),D,u[42](11,w,O[1],GW),z[23](37,w,19)||!1,z[23](4,w,20)||!1),S.render(N[35](9)),H=new Og,V=new a0,V.set(u[42](7,w,1,FW)),V.load(),A=new Z7(H,w,V),C=E[1],A.U&&(C=new sl(1453,function(){return null},null,u[17].bind(E[1],21),void 0,
!1,!1,!0,void 0,void 0,void 0)),k=E[1],z[23](33,J.get(),10)?k=new ih(null):(b=u[27](12,u[29](48,"api2","webworker.js")),a[E[2]](7,O[0],"hl",b),a[E[2]](64,"Km9gKuG06He-isPsP6saG8cn",O[2],b),k=new ih(b[E[0]]())),this.K=new Ul(S,A,k,C)),f},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){return(L^(c=[36,"aria-",3],21>L+1&&1<=((L^16)&6)&&(this.U=J,this.N=w,this.K=null,this.B=0),28))>>4||M.call(this,w),2==((L^27)&c[2])&&(f=["SCRIPT","nonce",0],b={timeout:1E4},S=b.document||document,H=z[12](c[0],D).toString(),
Y=F[38](8,f[0],new nN(S)),K={TT:Y,t0:void 0},O=new $w(x6,K),E=null!=b.timeout?b.timeout:5E3,V=null,E>f[2]&&(V=window.setTimeout(function(l,m){(l=(u[m=[4,null,26],21](m[0],m[1],Y,!0),new rT(1,"Timeout reached for loading script "+H)),d)[m[2]](7,w,O),a[m[0]](20,!0,w,O,l)},E),K.t0=V),Y.onload=Y.onreadystatechange=function(l){Y[l=["kO",null,"readyState"],l[2]]&&Y[l[2]]!=k&&"complete"!=Y[l[2]]||(u[21](5,l[1],Y,b[l[0]]||w,V),O.h0(l[1]))},Y.onerror=function(l,m){(u[m=[21,!0,4],m[0]](8,null,Y,m[1],V),l=new rT(0,
"Error while loading script "+H),d)[26](8,w,O),a[m[2]](18,m[1],w,O,l)},A=b.attributes||{},ax(A,{type:"text/javascript",charset:"UTF-8"}),F[24](49,f[2],c[1],Y,A),R[5](4,f[1],C,Y,D),d[21](9,f[2],J,S).appendChild(Y),P=O),P},function(L,w,J,k,C,D,H,b,V,A,S){return((L-2^12)>=(((21>L+((L&(A=[22,28,6],89))==L&&(iJ.call(this),this.W=new iS(this),this.vM=null,this.Rz=this),4)&&12<=L+A[2]&&(V=[null,"hpm",2E4],D=void 0===D?2:D,u[40](31,V[0],C.B),H=R[1](1,"api2",V[1],"cb","ar",k,C),C.B.render(H,a[A[1]](15,"-",
C.id),String(F[11](37,w,0,C)),z[49](16,qz,C.K)),b=C.B.N,S=R[23](A[0],"http",0,H,b,new Map([["j",C.xd],["e",C.M],["d",C.W],["i",C.G],["m",C.Y],["t",C.D],["o",C.F],["a",function(O){return R[34](6,J,null,"HEAD",5,O,C)}],["f",C.P],["v",C.l]]),C,V[2]).catch(function(O,f,E,K){if(C[(E=(K=["dY",!0,28],["?",0,10]),K)[0]].contains(b)){if(f=D-1,f>E[1])return N[41](6,E[2],2,k,C,f);C.B.P(N[45](13,"hl",E[0],C),a[K[2]](14,"-",C.id),K[1])}throw O;})),L)|72)==L&&(w=['"></div>','" tabIndex="0"></span></div>','<span class="'],
S=g('<div id="rc-imageselect" aria-modal="true" role="dialog"><div class="'+R[7](26,"rc-imageselect-response-field")+'"></div><span class="'+R[7](18,"rc-imageselect-tabloop-begin")+'" tabIndex="0"></span><div class="'+R[7](58,"rc-imageselect-payload")+w[0]+z[44](A[2]," ")+w[2]+R[7](26,"rc-imageselect-tabloop-end")+w[1])),L)&&(L+5^A[1])<L&&(C=[4,0,29],D=k(J(),C[0],C[2],C[1]),S=D>C[1]?k(J(),C[0],C[2],30)-D:-1),(L|56)==L&&u[12](24,16,k,w,J))&&a[32](40,1,w,k,J),S},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,
K,Y){return 1==(1==(L-6&(L+(Y=[8,"onmessage","port1"],1)>>3||(J=[],Lh(64,0,w,function(c){J.push(c)}),K=J),7))&&(H=y.MessageChannel,"undefined"===typeof H&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!N[38](10,"Presto")&&(H=function(c,P,l,m,q,B,h,T){this[(q=(P=(m=(h=(document.documentElement.appendChild(((T=["location",(l=["callImmediate","IFRAME","none"],37),"protocol"],B=N[T[1]](15,l[1],document),B).style.display=l[2],B)),B).contentWindow,h).document,m.open(),m.close(),
l)[0]+Math.random(),h[T[0]])[T[2]]==w?"*":h[T[0]][T[2]]+"//"+h[T[0]].host,c=x(function(e){if(("*"==q||e.origin==q)&&e.data==P)this.port1.onmessage()},this),h.addEventListener("message",c,k),this).port1={},C]={postMessage:function(){h.postMessage(P,q)}}}),"undefined"===typeof H||F[12](37,"MSIE")?K=function(c){y.setTimeout(c,0)}:(V=new H,D=b={},V[Y[2]][Y[1]]=function(c){void 0!==b.next&&(b=b.next,c=b.ur,b.ur=J,c())},K=function(c){(D=(D.next={ur:c},D).next,V)[C].postMessage(0)})),L+Y[0]&7)&&(K=a[2](35,
function(c,P,l){l=(P=[1,null,2],[16,"C",32]);switch(c.K){case P[0]:return a[12](50,u[25](4,P[2],w,z[19](24,H),V),P[2],c);case P[2]:if(!(E=(A=wG+u[O=c.B,33](l[0],3,z[19](24,a[l[2]](2,P[2],d[35](l[0],C,P[0],new Jr,D.U[l[1]].value),O)),4),P[1]),b)){c.K=(a[49](4,!1,P[1],J,H,D).then(function(m){return a[2](34,function(q,B){if(!(B=["J",0,25],m)||m[B[0]]())return q.return();(d[B[2]](89,"b",m.BM()),m.Ve())&&D.N.send(k,new k7(m.Ve())),q.K=B[1]})}),3);break}return(S=new Ch(z[25](4,P[0],new Vm,H)),a)[12](65,
D.K.B.send(S),4,c);case 4:f=c.B,f.J()||(E=f.Ve(),d[25](90,"b",f.BM()));case 3:return c.return(new Ar(A,120,null,E))}})),K},function(L,w,J,k,C,D,H,b){if(3==(((L&29)==(H=[9,2,"Lc"],L)&&(k=[12,0,9876],b=z[18](18,"",k[0],o0().slice(u[H[0]](70,k[H[1]])[J],u[H[0]](18,w)[J+1]),u[H[0]](50,6191)+d[24](20,k[1],X8,function(){return o0().slice(0,u[9](39,4164)[J])}))),L&71)==L&&M.call(this,w),L-1)>>3)a[26](3,0,null,void 0,k,J,C,w);return 10>(L^47)&&5<=L-3&&(J.I&&(J.I=void 0),k>=J.U||C&&!Sl?(d[39](35,J)[k]=w,b=
J):(J.rI[k+J[H[2]]]=w,(D=J.B)&&k in D&&delete D[k],b=J)),b},function(L,w,J,k,C,D,H,b,V,A){return 2>((L-1^(A=[4,"response",""],18))>=L&&L+6>>2<L&&(k[A[1]]={},k.vm(w),b=x(function(){this.Yd(D,C,H)},k),R[22](22,k.I).width!=k.Wm().width||R[22](20,k.I).height!=k.Wm().height?(u[22](75,b,k),F[10](22,J,k.Wm(),k)):b()),(L^47)>=A[0]&&21>(L^49)&&(V=(A[2]+C(J(),6)()).length||0),L<<1&8)&&2<=(L^55)>>A[0]&&(V=w.classList?w.classList.contains(J):a[31](1,J,a[3](16,w))),V},function(L,w,J,k,C,D,H,b){return(1==((L^(b=
["add","k","X"],20))&7)&&(C=["ru","Km9gKuG06He-isPsP6saG8cn","api2"],D=new Oe,D[b[0]](b[1],z[49](4,lh,k.K)),D[b[0]](w,C[0]),D[b[0]]("v",C[1]),D[b[0]]("t",Date.now()-k.N),N[37](67)&&D[b[0]]("ff",!0),H=u[29](4,C[2],"fallback")+J+D.toString()),(L&26)==L)&&(H=M_[b[2]]().flush()),H},function(L,w,J,k,C,D,H,b,V){if(b=[34,1,0],18>(L^77)&&15<=(L^13)&&(this.K=J===ay?w:""),(L+b[1]&13)==b[1]){for(H=(C='<div class="'+R[7](2,(J=(D=["</table></div></div>",0,"rc-prepositional-challenge"],w.text),D[2]))+'"><div id="rc-prepositional-target" class="'+
R[7](b[0],"rc-prepositional-target")+'" dir="ltr"><div tabIndex="0" class="'+R[7](18,"rc-prepositional-instructions")+'"></div><table class="'+R[7](b[0],"rc-prepositional-table")+'" role="region">',Math.max(D[b[1]],Math.ceil(J.length-D[b[1]]))),k=D[b[1]];k<H;k++)C+='<tr role="presentation"><td role="checkbox" tabIndex="0">'+z[b[1]](5,J[k*b[1]])+"</td></tr>";V=g(C+D[b[2]])}return(L+5^((L-6^21)>=L&&(L+2^11)<L&&(J=w[sk],V=J instanceof iS?J:null),28))>=L&&L-9<<b[1]<L&&(13==w.keyCode?u[5](24,!1,this):
this.D&&this.K&&N[36](19,!0,this.K).length>b[2]&&this.NO(!1)),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){if((((L|(K=[2,0,36],8))==L&&(C=w.offsetWidth,k=w.offsetHeight,D=Di&&!C&&!k,(void 0===C||D)&&w.getBoundingClientRect?(J=R[37](90,w),E=new Q(J.right-J.left,J.bottom-J.top)):E=new Q(C,k)),L)+7^30)>=L&&L+3>>K[0]<L)a:if(A=d[16](72,D,"fontSize"),V=(H=A.match(fh))&&H[w]||J,A&&"px"==V)E=parseInt(A,k);else{if(t){if(String(V)in u3){E=z[47](31,k,A,D);break a}if(D.parentNode&&1==D.parentNode.nodeType&&String(V)in
Ee){O=d[b=D.parentNode,16](70,b,"fontSize"),E=z[47](29,k,A==O?"1em":A,b);break a}}(S=Rm(C,{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"}),D.appendChild(S),A=S.offsetHeight,u)[K[2]](25,S),E=A}if((L|6)>>3==K[0])if(H=[4294967296,1E6,4294967295],k)if(/^-?\d+$/.test(k)){if(16>k.length)d[44](11,J,Number(k));else if(gG)A=BigInt(k),zK=Number(A&BigInt(H[K[0]]))>>>J,oy=Number(A>>BigInt(w)&BigInt(H[K[0]]));else{for(O=J+(S=((V=(C=+("-"===k[J]),zK=J,oy=J,k.length),
V)-C)%6+C,C);S<=V;O=S,S+=6)f=Number(k.slice(O,S)),oy*=H[1],zK=zK*H[1]+f,zK>=H[K[1]]&&(oy+=zK/H[K[1]]|J,zK%=H[K[1]]);C&&(b=u[K[0]](K[0],R[10](58,1,zK,oy)),D=b.next().value,oy=b.next().value,zK=D)}E=new Ry(zK,oy)}else E=null;else E=Kh||(Kh=new Ry(0,0));return E},function(L,w,J,k,C,D){return(L|16)==(((L+(C=[1,null,20],4)&3)==C[0]&&(this.K=[]),5>L>>C[0])&&0<=(L<<C[0]&7)&&(D=R[49](35,C[1],function(){return u[32](16).frames})),L)&&(k=z[42](3,J),t&&void 0!==w.cssText?w.cssText=k:y.trustedTypes?d[C[2]](30,
w,k):w.innerHTML=k),D},function(L,w,J,k,C){return((C=[1,"GI","Promise"],(L+4&24)<L&&(L-8^15)>=L)&&(y[C[2]]&&y[C[2]].resolve?(w=y[C[2]].resolve(void 0),N_=function(){w.then(z[43].bind(null,2))}):N_=function(){a[34](2,z[43].bind(null,3))}),(L^15)&7)==C[0]&&(this[C[1]]=w,this.i7=J),k}]}(),d=function(){return[function(L,w,J,k,C,D,H,b,V,A){if(!(L-(((L^22)&(V=[8,255,3],13)||(this.K=J===Y7?w:"",this.NB=!0),2==(L|V[2])>>V[2])&&h8.call(this),7)>>V[2])){for(D=H=(b=[],J);D<k.length;D++)C=k.charCodeAt(D),C>V[1]&&
(b[H++]=C&V[1],C>>=w),b[H++]=C;A=b}return 1==L+V[0]>>V[2]&&(w instanceof Z$?A=w:(J=new Z$(d[7].bind(null,16)),z[41](2,null,2,w,J),A=J)),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((L+7&62)>=(L+((L+(O=["getOwnPropertyDescriptor",42,4],O)[2]^23)>=L&&(L-2^15)<L&&(D=Object[O[0]](C,k),f=void 0==D||void 0==D.get||N[30](20,"{"," ","",!1,D.get,z[24](O[1],J,function(E){return E.stringify}))?C:new co(z[24](11,J,function(E){return E.stringify(w+D.get)}))),8)>>O[2]||(D=N[20](3,k,function(E){return(E=/SamsungBrowser\/([.\d]+)/.exec(navigator.userAgent))&&
parseFloat(E[C])>=w}),!document.hasStorageAccess||D?f=d[0](2,C):(H=u[O[1]](19),document.hasStorageAccess().then(function(E){return H.resolve(E?2:3)},function(){return H.resolve(J)}),f=H.promise)),(L^O[1])>>O[2]||(f=Array.prototype.map.call(J,function(E,K){return(K=E.toString(16),K.length)>w?K:"0"+K}).join("")),L)&&(L+O[2]^5)<L&&M.call(this,w,-1,Po),(L&56)==L){for(V=(R[21](1,0,(H=new dG,1),k,H,z[49](40,0,J)),F[39](9,H,H.K.end()),D=new Uint8Array(H.B),b=w,H.U),C=V.length,A=w;b<C;b++)S=V[b],D.set(S,
A),A+=S.length;f=(H.U=[D],D)}return f},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(f=[5,57,50],4==L+8>>4){A=(S=function(E){A||(A=w,D.call(H,E))},V=function(E){A||(A=w,k.call(H,E))},J);try{b.call(C,S,V)}catch(E){V(E)}}if(4<=(((L-3|((L-(4==L-3>>4&&(O=u[24](19)?a[25](10,w,"Microsoft Edge"):N[38](f[2],J)),6)|40)>=L&&(L+2^29)<L&&(D=["animation-play-state","display","opacity"],C.K(J),F[31](55,C.P,D[1],w),F[31](49,C.P,D[0],"running"),F[31](f[1],C.P,D[2],k),F[31](48,C.k9,D[0],"running")),76))>=L&&L-f[0]<<1<L&&
U.call(this,0,0,"nocaptcha"),L-2)&27)&&20>(L^3)){H='<div class="'+R[7](42,(b=(D=(k=k||{},[7,'"><div class="',"ERROR for site owner:<br>Invalid endpoint for host domain. Please contact your assigned Security Sales Specialists if you have one or reach out to Google Cloud support through https://cloud.google.com/contact otherwise."]),C=k.errorMessage,k.errorCode),"rc-inline-block"))+D[1]+R[7](26,"rc-anchor-center-container")+D[1]+R[7](58,"rc-anchor-center-item")+" "+R[7](f[2],"rc-anchor-error-message")+
'">';switch(b){case 1:H+="\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442.";break;case 2:H+="\u0412\u0440\u0435\u043c\u044f \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e.";break;case 3:H+="\u0421\u043a\u0440\u044b\u0442\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 captcha \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.";
break;case 4:H+="\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c reCAPTCHA. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443 \u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.";
break;case f[0]:H+='\u0414\u043e\u043c\u0435\u043d localhost \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 <a href="https://developers.google.com/recaptcha/docs/faq#localhost_support" target="_blank">\u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445</a> \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.';break;case w:H+="\u041e\u0428\u0418\u0411\u041a\u0410:<br>\u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0434\u043e\u043c\u0435\u043d \u043a\u043b\u044e\u0447\u0430";
break;case D[0]:H+="\u041e\u0428\u0418\u0411\u041a\u0410: \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043b\u044e\u0447.";break;case 8:H+="\u041e\u0428\u0418\u0411\u041a\u0410: \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043b\u044e\u0447";break;case 9:H+="\u041e\u0428\u0418\u0411\u041a\u0410: \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430";break;case 10:H+="\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0441\u0430\u0439\u0442\u0430: \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435: g.co/recaptcha/actionnames.";
break;case J:H+=D[2];break;default:H=H+"\u041e\u0428\u0418\u0411\u041a\u0410:<br>"+z[1](6,C)}O=g(H+"</div></div></div>")}return O},function(L,w,J,k,C,D,H){return-39<=(14<=(H=["call",4,"n1"],L-2)&&(L<<1&H[1])<H[1]&&(J.oL=w,J[H[2]]&&(J.K.clearTimeout(J[H[2]]),J[H[2]]=null)),L+5)&&1>(L|9)>>H[1]&&(this.F=w,this.G=!!C,l3[H[0]](this,J,k)),D},function(L,w,J,k,C,D,H,b,V,A){if(2>(L<<2&(10>(V=[!0,".",6],L-V[2])&&2<=(L+5&15)&&(R9||o9?(C=screen.availWidth,k=screen.availHeight):mC||gT?(k=window.outerHeight||screen.availHeight||
screen.height,C=window.outerWidth||screen.availWidth||screen.width,zW||(k-=w)):(C=window.outerWidth||window.innerWidth||N[35](1).clientWidth,k=window.outerHeight||window.innerHeight||N[35](41).clientHeight),A=new Q(C||J,k||J)),16))&&3<=(L-1&10))for(k=w.split(V[1]),C=y,(k[0]in C)||"undefined"==typeof C.execScript||C.execScript("var "+k[0]);k.length&&(D=k.shift());)k.length||void 0===J?C[D]&&C[D]!==Object.prototype[D]?C=C[D]:C=C[D]={}:C[D]=J;if((L-5^21)<((L&57)==L&&Array.prototype.forEach.call(F[12](5,
"*","g-recaptcha-bubble-arrow",D.K),function(S,O,f,E){F[E=[22,31,53],E[1]](60,S,J,z[E[0]](59,w,this).y-H+C),f=O==k?"#ccc":"#fff",F[E[1]](E[2],S,b?{left:"100%",right:"","border-left-color":f,"border-right-color":"transparent"}:{left:"",right:"100%","border-right-color":f,"border-left-color":"transparent"})},D),L)&&(L-1^2)>=L){if(nj&&null!=J&&"string"!==typeof J)throw Error("Expected a string or null or undefined but got "+J+" a "+u[17](4,w,J));A=J}return L+4&15||(C.set(J,R[47](18)),A=a[29](83,null,
new EI(u[29](4,w,k)),C.toString(),V[0]).toString()),A},function(L,w,J,k,C){return(L-5|((C=[!1,"ye","nodeType"],L&49)==L&&(k=J[C[2]]==w?J:J.ownerDocument||J.document),4))<L&&(L-7^12)>=L&&(Wu.call(this,w),this[C[1]]=C[0],this.F=[],this.Z=[]),k},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){return 7>((L>>(P=[31,47,"Chromium"],1)&5||(K=[null,!1,"Safari"],I.call(this),this.rs=0,this.F=-1,this.Qe=1,Y=this,this.kd=-1,this.P=K[1],this.B=[],this.N=0,this.Z="",I.call(this),this.gI=J||function(){},this.Y=new q_(H,
w),this.S=O,this.IL=C,this.dI=DZ(F[14].bind(null,10),0,1),this.C=D||K[0],this.M=b||K[1],this.D=A||K[0],this.I=k||K[0],this.withCredentials=!V,this.G=H||K[1],!this.G&&(65<=z[20](13,"5.0",P[2])||45<=z[20](6,"5.0","Firefox")||12<=z[20](6,"5.0",K[2])||a[34](8,"iPod")&&z[8](18,"","kaios",1,K[1])),E=F[P[0]](17,1,1,new Ku),F[8](48,1,5,this.Y,E),this.U=new Bo(1E4),this.K=new hr(this.U.aL()),d[13](43,this.K,this),f=z[2](22,this,S),R[35](44,"tick",this.K,f,K[1],this),this.O=new hr(6E5),d[13](P[1],this.O,this),
R[35](44,"tick",this.O,f,K[1],this),this.M||this.O.start(),this.G||(R[35](41,"visibilitychange",document,function(){"hidden"===document.visibilityState&&Y.l()}),R[35](46,"pagehide",document,this.l,K[1],this))),L^29)&8)&&-38<=L>>2&&(c=Object.prototype.hasOwnProperty.call(w,J)),c},function(L,w,J,k,C,D,H){return(L|(H=["I",3,1],6))>>4||(J[H[0]]&&R[16](H[1],null,J),J.U=k,J.N=R[35](46,"keypress",J.U,J,C),J.C=R[35](45,"keydown",J.U,J.M,C,J),J[H[0]]=R[35](44,w,J.U,J.l,C,J)),D},function(L,w,J,k,C,D,H,b,V,
A){return((L&(((L>>1&15)==((L|40)==(A=[0,3,"I"],L)&&(w=[null,!1],this.N=w[A[0]],this.U=w[A[0]],this.K=w[A[0]],this.B=w[A[0]],this.next=w[A[0]],this[A[2]]=w[1]),A[1])&&M.call(this,w),L|48)==L&&(k=J.N,H={hl:"ru",v:"Km9gKuG06He-isPsP6saG8cn"},C=k.send,H.k=N[20](85,w),b=new Oe,R[26](15,H,b),D=new FF(J.U.Wa(),{query:b.toString(),title:"\u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 reCAPTCHA \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0435\u0449\u0451 \u0434\u0432\u0443\u0445 \u043c\u0438\u043d\u0443\u0442"}),
C.call(k,"f",D)),108))==L&&(D=[],a[16](8,J,w,C,w,k,D),V=D),L-7>>A[1]==A[1])&&(k=[null],wV.call(this),this.U=k[A[0]],this[A[2]]=k[A[0]],this.C=k[A[0]],this.N=k[A[0]],this.K=k[A[0]],this.B=k[A[0]],this.O=w,this.F=J,this.Y=Date.now(),this.Z=k[A[0]],this.S=k[A[0]],this.l=k[A[0]]),V},function(L,w,J,k,C,D,H){return H=["msCancelRequestAnimationFrame",4,"webkitCancelRequestAnimationFrame"],L-6>>3||(C=new TK,D=d[34](55,J,C,rZ,w,k)),2>L+H[1]>>5&&15<=(L^1)&&(k=J.B,D=k.cancelAnimationFrame||k.cancelRequestAnimationFrame||
k[H[2]]||k.mozCancelRequestAnimationFrame||k.oCancelRequestAnimationFrame||k[H[0]]||w),D},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p){if(((p=['"></div>',"K",49],1==((L^48)&15))&&(f=['<div id="','">'," "],q=w.size,1==q?(C=w.Ej,h=w.BK,K=g,V=w.Y7,m=w.errorMessage,k=w.errorCode,P=f[0]+R[7](34,"rc-anchor-container")+'" class="'+R[7](10,"rc-anchor")+f[2]+R[7](58,"rc-anchor-normal")+f[2]+R[7](2,h)+f[1]+a[22](14,w.ds)+N[15](32)+'<div class="'+R[7](26,"rc-anchor-content")+f[1]+(N[10](21,
m)||0<k?d[2](10,6,15,w):d[18](8,f[2]))+(C?'<div id="rc-anchor-over-quota">'+R[15](p[2])+"</div>":"")+(V?'<div id="rc-anchor-over-quota">'+F[32](5)+"</div>":"")+'</div><div class="'+R[7](42,"rc-anchor-normal-footer")+f[1],H=w.Ej,b=w.Y7,(l=N[10](5,t))&&(l=F[42](31,$7,"8.0")),Y=g('<div class="'+R[7](58,"rc-anchor-logo-portrait")+(H||b?f[2]+R[7](10,"rc-anchor-over-quota-logo"):"")+'" aria-hidden="true" role="presentation">'+(l?'<div class="'+R[7](10,"rc-anchor-logo-img-ie8")+f[2]+R[7](34,"rc-anchor-logo-img-portrait")+
p[0]:'<div class="'+R[7](26,"rc-anchor-logo-img")+f[2]+R[7](34,"rc-anchor-logo-img-portrait")+p[0])+'<div class="'+R[7](2,"rc-anchor-logo-text")+'">reCAPTCHA</div></div>'),A=K(P+Y+F[27](19,f[2],w)+"</div></div>")):2==q?(B=g,T=w.errorMessage,c=w.Ej,E=w.Y7,S=w.BK,D=f[0]+R[7](42,"rc-anchor-container")+'" class="'+R[7](42,"rc-anchor")+f[2]+R[7](2,"rc-anchor-compact")+f[2]+R[7](34,S)+f[1]+a[22](7,w.ds)+N[15](80)+'<div class="'+R[7](18,"rc-anchor-content")+f[1]+(T?d[2](1,6,15,w):d[18](16,f[2]))+(c?'<div id="rc-anchor-over-quota">'+
R[15](48)+"</div>":"")+(E?'<div id="rc-anchor-over-quota">'+F[32](4)+"</div>":"")+'</div><div class="'+R[7](26,"rc-anchor-compact-footer")+f[1],(J=N[10](20,t))&&(J=F[42](34,$7,"8.0")),O=g('<div class="'+R[7](10,"rc-anchor-logo-landscape")+'" aria-hidden="true" role="presentation" dir="ltr">'+(J?'<div class="'+R[7](34,"rc-anchor-logo-img-ie8")+f[2]+R[7](50,"rc-anchor-logo-img-landscape")+p[0]:'<div class="'+R[7](26,"rc-anchor-logo-img")+f[2]+R[7](18,"rc-anchor-logo-img-landscape")+p[0])+'<div class="'+
R[7](58,"rc-anchor-logo-landscape-text-holder")+'"><div class="'+R[7](34,"rc-anchor-center-container")+'"><div class="'+R[7](58,"rc-anchor-center-item")+f[2]+R[7](18,"rc-anchor-logo-text")+'">reCAPTCHA</div></div></div></div>'),A=B(D+O+F[27](20,f[2],w)+"</div></div>")):A="",e=g(A)),2)==(L>>1&15))a[2](36,function(v,n){if(n=[68,25,"K"],1==v[n[2]])return a[12](1,el(a[15](n[0]),R[n[1]](36),void 0,u[32](60).Error()),2,v);D=(C=v.B,function(X){return F[X=[null,0,32],X[2]](16,"ed",X[1],"",X[0],k,J,C.K())}),
J.I=J.I.then(D,D),v[n[2]]=w});return 3==(L>>((L-4|6)>=L&&(L-1^27)<L&&(iJ.call(this),this.B=w),2)&15)&&(this[p[1]]=[],this.B=[]),e},function(L,w,J,k,C,D,H,b,V,A){if((L|((L&(A=[83,"K",26],106))==L&&(V=XF||(XF=new Uint8Array(0))),40))==L){for(H=y.recaptcha,D=function(S,O,f){Object.defineProperty(S,O,{get:f,configurable:!0})};C.length>J;)H=H[C[w]],C=C.slice(J);D(H,C[w],function(){return D(H,C[w],function(){}),k})}if((1==L+3>>3&&(V=d[A[2]](39,null,void 0,k,J,w)),28<=(L^A[0]))&&1>((L^92)&14))a:{for(b=w;b<
C.length;++b)if(H=C[b],!H.N7&&H.listener==k&&H.capture==!!J&&H.lm==D){V=b;break a}V=-1}return(L-5|56)<L&&(L+8^25)>=L&&(this[A[1]]=w,this.f1=J),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(((f=["format",7,1],L)|24)==L&&(O=N[8](40,!1,null,function(E,K,Y,c,P,l,m,q){return a[2](38,function(B,h,T,e,p,v){if(e=[!1,12,(v=["set",12,1],3)],B.K==v[2]){if(!E)throw 1;return T=(h=((p=((c=(Y=a[41](59,e[v[2]],H),new Uint8Array(12)),K).getRandomValues(c),new P5),p).B(D),new Uint8Array(p.U())),E.importKey(k,h,{name:"AES-GCM",
length:h.length},e[0],["encrypt","decrypt"])),a[v[1]](2,T,J,B)}if(B.K!=e[2])return m=B.B,a[v[1]](33,E.encrypt({name:"AES-GCM",iv:c,additionalData:new Uint8Array(0),tagLength:128},m,new Uint8Array(Y)),e[2],B);return((q=new Uint8Array((P=B.B,P)),l=new Uint8Array(e[v[2]]+q.length),l)[v[0]](c,C),l[v[0]](q,e[v[2]]),B).return(N[17](16,e[2],l,w))})})),!((L^38)>>3))a:{for(A=b;0<=(A=H.indexOf(f[0],A))&&A<D;){if(S=H.charCodeAt(A-f[2]),S==J||S==w)if(V=H.charCodeAt(A+C),!V||V==k||V==J||35==V){O=A;break a}A+=
f[1]}O=-1}return O},function(L,w,J,k,C,D,H,b,V,A){return(L^61)>>(((L+1&(((V=["error",0,"Cc"],L-2)^17)>=L&&(L+5^25)<L&&(k=DZ(z[21].bind(null,1),w),J.xd?k():(J[V[2]]||(J[V[2]]=[]),J[V[2]].push(k))),11))>=V[1]&&1>L-4&&(Qm||(vo?Qm=new ph(function(S){a[8](32,S)},vo):Qm=new tr(function(){a[8](33,u[44](17))},20)),w=Qm,w.isActive()||w.start()),(L|88)==L&&(J=w,k=(C=Wo(25,27,V[0],null))?C.createHTML(J):J,A=new ym(k,MK)),(L-9|34)>=L)&&(L+9^17)<L&&(b=R[7](7,1,V[1],C),D=z[49](42,V[1],C).O_,H=k.Fy,w.push(J,function(S,
O,f){return H(S,O,f,D,b)})),4)||(A="string"===typeof w?J.getElementById(w):w),A},function(L,w,J,k,C,D,H,b,V,A,S){if((S=["__",6,44],(L-2|S[1])<L)&&L-2<<1>=L){if(C=(D=y.window,D[J]),!C)throw Error(J+" not on global?");D[D[J]=function(O,f){var E=[!1,2,"apply"];if(("string"===typeof O&&(O=DZ(F[E[1]].bind(null,73),O)),O&&(arguments[0]=O=a[7](48,"__",E[0],k,O)),C)[E[2]])return C[E[2]](this,arguments);var K=O;if(arguments.length>E[1])var Y=Array.prototype.slice.call(arguments,(K=function(){O.apply(this,
Y)},E[1]));return C(K,f)},J][a[46](9,S[0],k,w)]=C}return L<<((L+(3<=((12<=((L|S[1])&15)&&3>(L^59)>>4&&(J="",J=F[42](33,w.S8,"imageselect")?J+'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0432 \u0442\u0435\u043a\u0441\u0442\u0435 \u0438\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u044d\u043a\u0440\u0430\u043d\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c". \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. <a href="https://support.google.com/recaptcha" target="_blank">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\u2026</a>':
J+'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0441\u0442\u0435. \u0415\u0441\u043b\u0438 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438, \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0438\u0445. \u041a\u043e\u0433\u0434\u0430 \u043d\u0443\u0436\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0447\u0430\u0442\u0441\u044f, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c".',
A=g(J)),L-4)&15)&&23>(L|1)&&(this.K=w),8)&46)>=L&&L+5>>2<L&&(A=g('<textarea id="'+R[7](42,J)+'" name="'+R[7](50,w)+'" class="g-recaptcha-response"></textarea>')),2)&15||(V=[0,1],this.K="number"===typeof w?new Date(w,J||V[0],k||V[1],C||V[0],D||V[0],H||V[0],b||V[0]):new Date(w&&w.getTime?w.getTime():u[S[2]](17))),A},function(L,w,J,k,C,D){if(((3<=(L<<((L>>1&15)==(D=[4,":","count"],D)[0]&&(C=function(){},C.prototype=J.prototype,w.R=J.prototype,w.prototype=new C,w.prototype.constructor=w,w.rp=function(H,
b,V){for(var A=Array(arguments.length-2),S=2;S<arguments.length;S++)A[S-2]=arguments[S];return J.prototype[b].apply(H,A)}),2)&7)&&20>(L^29)&&(k=F[0](6).call(768,28).padEnd(D[0],D[1])+w),L)&71)==L)a:{for(J=w;J<window.___grecaptcha_cfg[D[2]];J++)if(N[35](40).contains(window.___grecaptcha_cfg.clients[J].dY)){k=J;break a}throw Error("No reCAPTCHA clients exist.");}return(3==(L>>2&15)&&M.call(this,w),(L|80)==L)&&(J.fc=w),k},function(L,w,J,k,C,D,H,b,V,A,S){if(((3<=(L|(L-6<<2<(A=[42,41,"constructor"],L)&&
(L+9&47)>=L&&(k=N[20](95,w),S=N[18](9,14,k,J)),8))>>4&&4>L-5>>4&&M.call(this,w,-1,GK),L)&A[0])==L){if(!(V=(XP.call(this,k),J))){for(D=this[A[2]];D;){if(H=R[27](A[1],D),C=Iy[H])break;D=(b=Object.getPrototypeOf(D.prototype))&&b[A[2]]}V=C?"function"===typeof C.X?C.X():new C:null}this.I=(this.fc=void 0!==w?w:null,V)}return-86<=(L^34)&&2>(L^64)>>4&&(S=R[43](94,w,J)||(w.currentStyle?w.currentStyle[J]:null)||w.style&&w.style[J]),S},function(L,w,J,k,C,D,H,b){return(L+9>>(H=[2,7,"MozOpacity"],1)<L&&L-H[1]<<
H[0]>=L&&(D=k.style,"opacity"in D?D.opacity=C:"MozOpacity"in D?D[H[2]]=C:"filter"in D&&(D.filter=""===C?"":"alpha(opacity="+Number(C)*J+w)),L-6)<<H[0]<L&&(L-1^20)>=L&&(b=N[32](H[0],a[21](32,C,d[1](8,0,Zg,D)),d[37](13,J,w)).then(function(V){return d[33](60,d[15](25,k),V,J)})),b},function(L,w,J,k,C,D,H,b,V,A,S,O){return 3==(L>>1&(((((L&(O=[40,34,2],88))==L&&(k=['"><div class="','" aria-hidden="true" role="presentation"><span aria-live="polite" aria-labelledby="',"recaptcha-accessible-status"],J='<div class="'+
R[7](42,"rc-inline-block")+k[0]+R[7](O[1],"rc-anchor-center-container")+k[0]+R[7](42,"rc-anchor-center-item")+w+R[7](42,"rc-anchor-checkbox-holder")+'"></div></div></div><div class="'+R[7](O[1],"rc-inline-block")+k[0]+R[7](50,"rc-anchor-center-container")+'"><label class="'+R[7](O[1],"rc-anchor-center-item")+w+R[7](O[1],"rc-anchor-checkbox-label")+k[1]+R[7](O[2],k[O[2]])+'"></span>',S=g(J+"\u042f \u043d\u0435 \u0440\u043e\u0431\u043e\u0442</label></div></div>")),(L|24)==L)&&(se==w&&(se="placeholder"in
N[37](17,"INPUT",document)),S=se),L|O[0])==L&&(S=w),-43<=L>>1)&&(L-O[2]&12)<O[2]&&(C=[10,3,!1],i3.call(this,w,k),this.l=u[42](12,J,5,Ue),this.O=z[O[0]](53,J,4),this.C=a[36](11,1,u[42](15,J,6,WE))==C[1],this.I=!!z[23](32,J,C[0]),this.gI=this.C&&!this.I,this.K=!!z[23](4,J,14),this.U=!!z[23](36,J,15),this.F=a[36](66,11,J)||86400,this.W=z[O[0]](49,J,13),this.M=!!z[23](33,J,17),this.G=a[36](67,18,J)||Date.now()+36E5,this.P=z[O[0]](22,C[O[2]],J,21),this.Y=z[O[0]](49,J,22)||"",this.D=z[O[0]](18,C[O[2]],
J,23)),15))&&(A=[16,2,!1],z[39](15,J),H=N[30](25,33,A[1],k,J,void 0,A[O[2]],A[O[2]],C),V=null!=D?u[O[1]](18,C,D):new C,b=N[39](7,A[0],void 0,J,k,A[O[2]],A[1]),H.push(V),b.push(V.rI),V.RD()&&d[43](8,w,b),S=V),S},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((L+2&(O=[1,"match","add"],5))==O[0]&&(D=nh(k,J),(C=0<=D)&&Array.prototype.splice.call(k,D,w),f=C),L+5>>2<L&&(L-9|18)>=L)if(Array.isArray(C))for(D=0;D<C.length;D++)d[19](19,null,J,k,String(C[D]));else C!=w&&J.push(k+(""===C?"":"="+encodeURIComponent(String(C))));
if(!((L|4)>>4)){for(H=(A=(k[S=(ax(k,{frameborder:"0",scrolling:"no",sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation"}),D=["allow-modals","allow-popups-to-escape-sandbox","allow-storage-access-by-user-activation"],k)[J],S instanceof yx?C=S:(S="object"==typeof S&&S.NB?S.U_():String(S),x7.test(S)?V=new yx(S,rG):(b=String(S).replace(/(%0A|%0D)/g,w),V=b[O[1]](LG)?new yx(b,rG):null),C=V),J]=u[16](16,C||wM),Rm)("IFRAME",k),0);H<D.length;H++)A.sandbox&&A.sandbox.supports&&
A.sandbox[O[2]]&&A.sandbox.supports(D[H])&&A.sandbox[O[2]](D[H]);f=A}return f},function(L,w,J,k,C,D,H){if((L-(((L&(H=["O",48,"backgroundColor"],23))!=L||J[H[0]]||(J[H[0]]=w,d[H[1]](3,w,J.M,J)),L|H[1])==L&&(zz&&JT?(C=document.createElement(w),C.style[H[2]]="rgb(255, 255, 255)",document.body.appendChild(C),k=R[43](92,C,H[2]),document.body.removeChild(C),D="rgb(255, 255, 255)"!==k):D=J),7)^19)<L&&(L+9&41)>=L)if("textContent"in w)w.textContent=J;else if(3==w.nodeType)w.data=String(J);else if(w.firstChild&&
3==w.firstChild.nodeType){for(;w.lastChild!=w.firstChild;)w.removeChild(w.lastChild);w.firstChild.data=String(J)}else d[42](58,w),w.appendChild(d[5](32,9,w).createTextNode(String(J)));return(L&71)==L&&(J.K.I=w,J.B.U.value=w),D},function(L,w,J,k,C,D,H){return((D=[25,17,38],L+1)&56)<L&&(L-6|32)>=L&&(H=(C=R[D[0]](57,J,k))&&0!==C.length?C[w]:k.documentElement),-61<=(L|4)&&1>((L^D[2])&8)&&(H=u[24](D[1])?!1:N[D[2]](18,w)),H},function(L,w,J,k,C){return(L+2^13)>=((L|8)==(2<=((C=[16,"Error in protected function: ",
"call"],2==(L^3)>>3)&&(iJ[C[2]](this),this.B=this.U=null,this.K=window.Worker&&w?new Worker(z[12](38,R[37](5,null,w)),void 0):null),L<<2&15)&&(L+9&C[0])<C[0]&&(Bd[C[2]](this,C[1]+(w&&w.message?String(w.message):String(w)),w),(J=w&&w.stack)&&"string"===typeof J&&(this.stack=J)),L)&&(J.classList?J.classList.remove(w):N[44](17,J,w)&&a[12](21,"class",J,Array.prototype.filter[C[2]](a[3](8,J),function(D){return D!=w}).join(" "))),L)&&(L-2^6)<L&&(this.K=w),k},function(L,w,J,k,C,D,H,b){if(L-(b=["push",2,
128],8)<<b[1]>=L&&(L-9^16)<L){for(D=(C=w,[]);C<k.length;C++)D[b[0]](k[C]^J[C]);H=D}if(1==(L>>b[1]&5)){for(;127<J;)w.K[b[0]](J&127|b[2]),J>>>=7;w.K[b[0]](J)}return H},function(L,w,J,k,C,D,H){return(L&106)==((L|16)==((((L&102)==(D=[5,7,1],L)&&(J=[],w.U.T.PK.WK.forEach(function(b,V){b.selected&&-1==nh(this.F,V)&&J.push(V)},w),H=J),L)+D[0]&8)<D[2]&&(L<<D[2]&D[1])>=D[0]&&(k=new J,k.sm=function(){return w},H=k),L)&&(H=k&&J.K()>w?k():null),L)&&(this.K=k,this.N=J,this.U=w,this.B=C),H},function(L,w,J,k,C,
D,H,b){return(((L|32)==((H=[43,((L&27)==L&&(b=w.B?a[42](13,J,w.B||w.l.K):null),"I"),1],L-8^25)>=L&&(L+7&35)<L&&(this.next=function(V,A,S){return(S=["C",12,!1],d)[30](S[1],!0,w.K),w.K.N?A=R[44](57,S[2],w.K.N.next,V,w,w.K[S[0]]):(w.K[S[0]](V),A=a[30](7,S[2],w)),A},this["throw"]=function(V,A,S){return(S=["K",13,30],d[S[2]](S[1],!0,w[S[0]]),w[S[0]]).N?A=R[44](56,!1,w[S[0]].N["throw"],V,w,w[S[0]].C):(u[S[2]](20,V,w[S[0]]),A=a[S[2]](5,!1,w)),A},this.return=function(V){return d[27](8,!0,"return",!1,V,w)},
this[Symbol.iterator]=function(){return this}),L)&&(XP.call(this),this.C=D,this.K=C,this.U=k,this.Y=kG[J]||kG[H[2]],this[H[1]]=w),(L|88)==L)&&J&&d[33](61,d[15](21,w),J,H[2]),L+3^14)>=L&&(L+5^14)<L&&(C=new CG,k&&(N[H[0]](31,u[0](31,J),C,"play",x(J.ZD,J,!0)),N[H[0]](26,u[0](30,J),C,"end",x(J.ZD,J,w))),b=C),b},function(L,w,J,k,C,D,H,b,V){if(L-((L|(b=[21,8,7],32))==L&&(H=a[0](68,w,w,w),H.K=new Z$(function(A,S){H.N=(H.B=C?function(O,f){try{f=C.call(J,O),void 0===f&&O instanceof D9?S(O):A(f)}catch(E){S(E)}}:
S,D?function(O,f){try{f=D.call(J,O),A(f)}catch(E){S(E)}}:A)}),H.K.U=k,z[5](4,!0,3,k,H),V=H.K),b)[1]<<1<L&&(L-5|b[0])>=L&&J.U){if(!J.W)throw new Hl(J);J.W=w}return L-9<<1>=L&&(L-b[2]^16)<L&&(V=J?new nN(d[5](1,w,J)):bW||(bW=new nN)),V},function(L,w,J,k,C,D,H,b,V,A){if(5>(1==(L>>((A=[13,"U",2],L&43)==L&&(d[30](11,w,D.K),(H=D.K.N)?V=R[44](58,k,"return"in H?H[J]:function(S){return{value:S,done:!0}},C,D,D.K.return):(D.K.return(C),V=a[30](4,k,D))),3>(L^22)>>4&&27<=(L^30)&&(V="complete"==document.readyState||
"interactive"==document.readyState&&!t),A[2])&7)&&w.push(J,k.Fy),L>>1&8)&&22<=L>>1){if(3==H&&C.B&&!C.I)for(b=k;b&&b.I;b=b[A[1]])b.I=!1;if(C.K)C.K[A[1]]=w,a[A[0]](20,J,H,C,D);else try{C.I?C.N.call(C[A[1]]):a[A[0]](19,J,H,C,D)}catch(S){jH.call(w,S)}d[35](A[2],100,C,VM)}return V},function(L,w,J,k,C,D,H,b,V){if(V=[20,21,64],23>L<<1&&7<=((L|8)&11))a:{if(!J.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(C=w,k=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];C<
k.length;C++){D=k[C];try{b=J.B=(new ActiveXObject(D),D);break a}catch(A){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}b=J.B}return 3==(L^70)>>(L-8&V[1]||(D=N[V[0]](16,J,w,k),C=k.Mx.CY,H=k.G0,b=D?function(A,S){return C(A,S,H,D)}:function(A,S){return C(A,S,H)}),3)&&(b=u[9](70,4147)(k(w(),35))),(L^V[2])>>4||(i3.call(this,w,k),this.U="uninitialized",this.M=this.C=0,this.K=C,this.I=null,this.O=u[42](7,J,5,Lu)),b},function(L,w,J,k,C){return L+
((k=[23,24,7],(L+k[2]&43)<L)&&(L+8&k[1])>=L&&(C=AT(J.I,function(D){return"function"===typeof D[w]})),4)>>4||(C=Promise.resolve(F[43](2,12,k[0],J,w))),C},function(L,w,J,k,C,D,H,b,V){if((L<<1&(b=["window","enterprise",6],15))>=b[2]&&22>L-3){if(J.O)throw new TypeError("Generator is already running");J.O=w}return 4==(L<<1&(17>(1==(L>>2&7)&&M.call(this,w,-1,SH),(L|56)!=L||k.F||(k.F=J,d[41](36,"complete",k),d[41](4,w,k)),L)-1&&(L-9&15)>=b[2]&&(this.C=w,this.U=null,this.B=0,this.M=k,this.K=[],this.N="",
this.O=J,this.I=[this.Pa,this.l,this.pw,this.Y,this.V1,this.W$,this.kr,this.gb,this.iA,this.s8,this.W,this.Iz,this.JN,this.zl,this.az,this.Ss,this.BB,this.AN,this.XJ,this.FJ,this.Z0,this.Ul,this.KY,this.c$,this.rb,this.Tl,this.Gl,this.Nx,this.tQ]),15))&&(D=["___grecaptcha_cfg","load","isolated_count"],y[b[0]][D[0]]||d[4](11,D[0],{}),void 0===y[b[0]][D[0]][k]&&(y[b[0]][D[0]][k]=function(A){return z[45](12,J,w,"*","render",A)},y[b[0]][D[0]].es=function(A,S,O,f,E,K,Y){for(K=(O=u[2](3,(y.window[Y=[72,
4,".reset"],E=["___grecaptcha_cfg",".render","grecaptcha.enterprise"],S=y.window[E[0]].enterprise2fa&&-1!==y.window[E[0]].enterprise2fa.indexOf(J),E[0]].enterprise2fa=[],A)),O).next();!K.done;K=O.next())f=K.value,d[Y[1]](43,f+E[1],u[26].bind(null,24)),d[Y[1]](42,f+Y[2],N[24].bind(null,6)),d[Y[1]](42,f+".getResponse",z[13].bind(null,24)),d[Y[1]](74,f+".execute",R[42].bind(null,Y[0])),f==E[2]&&S&&(d[Y[1]](80,f+".challengeAccount",F[27].bind(null,1)),d[Y[1]](11,f+".eap.initTwoFactorVerificationHandle",
z[6].bind(null,Y[1])))},y[b[0]][D[0]].count=C,y[b[0]][D[0]][D[2]]=C,y[b[0]][D[0]].clients={},y[b[0]][D[0]].auto_render_clients={},R[23](9,w,!1,D[1],function(){return M_.X().start()})),H=(window[D[0]][b[1]]||[]).map(function(A){return A?"grecaptcha.enterprise":"grecaptcha"}),H.length==C&&H.push("grecaptcha"),y[b[0]][D[0]][b[1]]=[],y[b[0]][D[0]].es(H),R[27](88,J,D[1],w,!1,function(){return y.window.___grecaptcha_cfg[k](H)})),V},function(L,w,J,k,C,D,H,b){return(L^((L&(10>(L^((L|(2==(b=[39,"","split"],
(L|7)>>3)&&(z[b[0]](63,D),C!==k?N[43](43,C,D,J):N[43](45,void 0,D,J,w),H=D),5))>>4||(H=(w.stack||b[1])[b[2]](O9)[0]),58))&&9<=L+2&&(H=!!C.relatedTarget&&N[27](4,w,J,!1,C.relatedTarget,k)),58))==L&&(C=J,"function"===typeof k.toString&&(C=J+k),H=C+k[w]),75))>>3||(H=document.URL),H},function(L,w,J,k,C,D,H,b,V){if(L+(b=["capture",2,"removeListener"],3)&7||M.call(this,w),!(L>>b[1]&7)&&(J=["on",null,1],"number"!==typeof w&&w&&!w.N7))if(H=w.src,R[29](13,H))z[27](8,J[b[1]],w,H.W);else if(C=w.proxy,D=w.type,
H.removeEventListener?H.removeEventListener(D,C,w[b[0]]):H.detachEvent?H.detachEvent(N[8](74,J[0],D),C):H.addListener&&H[b[2]]&&H[b[2]](C),n9--,k=N[46](39,H))z[27](b[1],J[b[1]],w,k),0==k.B&&(k.src=J[1],H[sk]=J[1]);else d[39](19,J[1],w);return V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(!((L|6)>>(((f=[2,"",null],L)<<1&31)==f[0]&&Mc.call(this,"canvas"),4))&&(O=[2,1,3],C.K==J))if(C.U){if(A=C.U,A.B){for(V=(D=A.B,b=w),S=J;D&&(D.I||(S++,D.K==C&&(b=D),!(b&&S>O[1])));D=D.next)b||(V=D);if(b)if(A.K==J&&S==
O[1])d[33](11,f[2],0,k,A);else{if(V)H=V,H.next==A.N&&(A.N=H),H.next=H.next.next;else R[0](13,f[2],A);d[27](44,f[2],O[0],A,b,k,O[f[0]])}}C.U=w}else z[41](8,w,O[f[0]],k,C);if((L-8^25)<L&&(L+8&78)>=L)try{N[11](28,1,k).setItem(w,J),E=J}catch(K){E=f[2]}return 4==((L&90)==L&&(J=f[1],J=w.Bi?J+"<div>\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c reCAPTCHA. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443 \u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.</div>":
J+'<noscript>\u0427\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c reCAPTCHA, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 JavaScript.<br></noscript><div class="if-js-enabled">\u0427\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c reCAPTCHA, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 <a href="https://support.google.com/recaptcha/?hl=en#6223828">\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>.</div><br><br><a href="https://support.google.com/recaptcha#6262736" target="_blank">\u0417\u0430\u0447\u0435\u043c \u044d\u0442\u043e \u043d\u0443\u0436\u043d\u043e?</a>',
E=g(J)),(L|3)>>4)&&(k=w,E=function(){return k<J.length?{done:!1,value:J[k++]}:{done:!0}}),E},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(!((f=[5,40,"freeze"],L^64)>>4)){if(!(b=(H=(C=u[D=(S=[4,1,!1],u[44]).bind(null,4),19](f[1],k.rI),N[39](f[0],w,S[2],k,J,C,S[1])),d)[49](77,H),b&S[0])){for(A=V=(Object.isFrozen(H)&&(H=a[29](26,S[1],H.slice()),N[43](41,H,k,J,S[2])),0);A<H.length;A++)O=D(H[A]),null!=O&&(H[V++]=O);R[f[1]](48,f[0],(V<A&&(H.length=V),H)),C&&(R[f[1]](25,2,H),Object[f[2]](H))}!C&&(b&2||Object.isFrozen(H))&&
(H=Array.prototype.slice.call(H),R[f[1]](57,f[0],H),F[25](2,S[1],H,k,J,S[2])),E=H}if(2==(L^((((L+2&46)>=L&&(L-7^13)<L&&(k=J,E=d[11](f[0],J,function(K){R[7](4,k);throw K;},new Z$(function(K,Y){-1==(k=a[0](29,function(){K(void 0)},w),k)&&Y(Error("Failed to schedule timer."))}))),(L-4|f[0])<L)&&(L-3|4)>=L&&M.call(this,w),(L&122)==L)&&(E=RegExp("^https://www.gstatic.c..?/recaptcha/releases/Km9gKuG06He-isPsP6saG8cn/recaptcha__.*")),34))>>3){if((z[39](79,J),null)!=D){for(A=(S=(V=a[29](24,1,[]),0),!1);S<
D.length;S++)V[S]=u[34](2,k,D[S]).rI,A=A||u[19](48,V[S]);b=((J.K||(J.K={}),J.K)[C]=D,V),A?d[43](2,w,b):R[f[1]](27,w,b)}else J.K&&(J.K[C]=void 0),V=Vx;E=N[43](f[1],V,J,C,H)}return E},function(L,w,J,k,C,D,H,b,V){if((((L|5)>>(V=[0,"replace",2],4)||(k.U(J),k.B<w&&(k.B++,J.next=k.K,k.K=J)),L)-5^18)<L&&(L-8|10)>=L){if("object"===(k=(D="",["]",(H=typeof J,":"),"["]),H))for(C in J)D+=w+H+k[1]+C+d[35](24,k[V[2]],J[C])+k[V[0]];else D="function"===H?D+(w+H+k[1]+J.toString()+k[V[0]]):D+(w+H+k[1]+J+k[V[0]]);b=
D[V[1]](/\s/g,"")}if(9>(L+1&((L+9^26)<L&&(L+9^32)>=L&&(b=u[13](3,k,aX,J,d[4](21,w,C))),16))&&1<=L-3>>4){if(k=void 0===(C=["auto_render_clients","___grecaptcha_cfg","Invalid site key or not loaded in api.js: "],J=void 0===J?d[15](V[2],w):J,k)?{}:k,F[39](54,J))k=J,H=d[15](4,w);else if("string"===typeof J&&/[^0-9]/.test(J)){if(H=window[C[1]][C[V[0]]][J],null==H)throw Error(C[V[2]]+J);}else H=J;if(!(D=window[C[1]].clients[H],D))throw Error("Invalid reCAPTCHA client id: "+H);b={client:D,ws:k}}return b},
function(L,w,J,k,C){if((L&(3<=(L-1&(k=[13,"B",9878],7))&&L>>2<k[0]&&(J=w().querySelectorAll(N[43](16,k[2],25)),C=0==J.length?"":u[9](50,6273)(J[J.length-1])),27))==L)this[k[1]](new Ok(null,new Q(w-20,J)));return C},function(L,w,J,k,C,D){return(L|8)==(C=["U","K",1],L)&&(k=new P5,k.B((a[2](17,d[15](23,"b"),w)||"")+J),D=d[C[2]](34,C[2],k[C[0]]())),4>((L^32)&4)&&((L|5)&7)>=C[2]&&(this[C[0]]=w,this.B=this[C[1]]=w),D},function(L,w,J,k,C){return L<<(C=[11,16,24],1)&7||(this.K=y.setTimeout(x(this.U,this),
0),this.B=w),L>>1&6||(k=u[8](C[2],J,R[C[0]](C[1],w))),k},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((L|24)==(f=["U",7,!0],L))a:if(A=[13,189,!1],Kj&&D)O=a[41](2,A[1],H);else if(D&&!V)O=A[2];else{if(!zz&&("number"===typeof k&&(k=R[36](19,91,k)),S=k==w||18==k||Kj&&91==k,(!C||Kj)&&S||Kj&&k==J&&(V||b))){O=A[2];break a}if((Di||fG)&&V&&C)switch(H){case 220:case 219:case 221:case 192:case 186:case A[1]:case 187:case 188:case 190:case 191:case 192:case 222:O=A[2];break a}if(t&&V&&k==H)O=A[2];else{switch(H){case A[0]:O=
zz?b||D?!1:!(C&&V):!0;break a;case 27:O=!(Di||fG||zz);break a}O=zz&&(V||D||b)?!1:a[41](34,A[1],H)}}return((1==(L>>(3==(4>(L^70)>>4&&12<=(L+f[1]&15)&&(k=R[27](33,J),delete uW[k],z[17](3,w,uW)&&Qm&&Qm.u7()),L+f[1])>>3&&(J.N7=f[2],J.listener=w,J.proxy=w,J.src=w,J.lm=w),1)&15)&&(O=w.B||(w.B=w.rI[w[f[0]]+w.Lc]={})),L)&15)==L&&(this.NB=f[2],this.K=J===E9?w:""),O},function(L,w,J,k,C,D,H,b,V,A){return((L^(A=["I",5,6],A[1]))&3||(C=J[k],"function"==typeof C&&0===C.length&&(C=C(),J[k]=C),V=Array.isArray(C)&&
(Eg in C||zI in C||C.length>w&&"function"==typeof C[w])?C:void 0),-40<=L+8)&&4>((L|8)&A[2])&&(b=N[33](26,w,11,H,D),D[A[0]]=D[A[0]].then(b,b).then(function(S,O,f){return a[2](13,function(E,K,Y){return(O=!!a[35]((K=[1,"v",(Y=["K","W",2],0)],f=D[Y[0]][Y[1]],6),12),(H.U||O)&&f)?E.return(N[42](9,k,42,K[1],C,D,S,O,f)):E.return(a[49](24,"b",K[Y[2]],K[0],J,D,S))})}),V=D[A[0]]),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c){if(1==(L>>2&((c=[3,"vM",0],L-c[0]^6)<L&&L-9<<2>=L&&(k=void 0===k?null:k,Array.from(F[12](c[0],
w,"g-recaptcha")).filter(function(P){return!z[1](13,P)}).filter(function(P){return null==k||P.getAttribute("data-sitekey")==k}).forEach(function(P){return u[26](26,P,{},J)})),c[0]))){if(f=[1,!1,(H=J[c[1]],!0)],H)for(E=[],D=f[c[2]];H;H=H[c[1]])E.push(H),++D;if("string"===(O=(S=(b=E,w),C=J.Rz,S.type)||S,typeof S)?S=new ge(S,C):S instanceof ge?S.target=S.target||C:(V=S,S=new ge(O,C),ax(S,V)),K=f[2],b)for(k=b.length-f[c[2]];!S.U&&k>=c[2];k--)A=S.B=b[k],K=N[21](5,f[c[2]],f[2],A,S,O)&&K;if(S.U||(A=S.B=
C,K=N[21](25,f[c[2]],f[2],A,S,O)&&K,S.U||(K=N[21](1,f[c[2]],f[1],A,S,O)&&K)),b)for(k=c[2];!S.U&&k<b.length;k++)A=S.B=b[k],K=N[21](9,f[c[2]],f[1],A,S,O)&&K;Y=K}return Y},function(L,w,J,k,C,D){if((L+(C=[3,2,"Android"],C[0])&7)==C[1])if(J)try{D=!!J.$goog_Thenable}catch(H){D=w}else D=w;if(1==(L+C[0]&(L-4>>C[0]==C[1]&&(D=z[48](24,w)?"Android"===jc.platform:N[38](18,C[2])),15))&&(k=N[23](48,w),J=R[4](20,w),this.K[k]=R[29](62,J[0],this)+R[29](34,J[1],this)),!(L-9&14))for(;J=w.firstChild;)w.removeChild(J);
return D},function(L,w,J,k,C){return 2<=L+(2>(C=[3,7,15],L<<2&6)&&5<=((L^C[2])&C[1])&&(gM?J[gM]&&(J[gM]&=~w):void 0!==J.ei&&(J.ei&=~w)),C)[0]>>4&&(L^33)<C[1]&&(k=w.um===Ty?w.toJSON():u[17](C[0],128,null,w)),k},function(L,w,J,k,C,D,H,b,V,A,S){if(S=[2,39,4],(L&118)==L)try{A=Object.keys(N[11](27,1,w)||{})}catch(O){A=[]}return(((L&(L+6&11||w.getDate()!=J&&w.K.setUTCHours(w.K.getUTCHours()+(w.getDate()<J?1:-1)),61))==L&&(k=u[9](S[1],w),A=function(){return Mz==J?".":k.apply(this,arguments)}),(L|S[0])>>
S[2]==S[2])&&(gM?J[gM]=w:void 0!==J.ei?J.ei=w:Object.defineProperties(J,{ei:{value:w,configurable:!0,writable:!0,enumerable:!1}})),1<=L+5>>S[2]&&14>L>>S[0])&&(D=J<w,J=Math.abs(J),C=J>>>w,b=Math.floor((J-C)/4294967296),D&&(V=u[S[0]](1,R[10](59,1,C,b)),k=V.next().value,H=V.next().value,C=k,b=H),zK=C>>>w,oy=b>>>w),A},function(L,w,J,k,C,D,H,b,V){if((L+1^((L-5|(b=[23,"K","captureStackTrace"],40))<L&&(L+8&47)>=L&&(H=R[9](5,255,25,k+C,re),D=J.map(function(A,S){return H[S%H.length]}),V=d[b[0]](25,w,D,J)),
b[0]))<L&&(L-2^5)>=L){if(Error[b[2]])Error[b[2]](this,Bd);else if(k=Error().stack)this.stack=k;w&&(this.message=String(w)),this[b[1]]=!0,void 0!==J&&(this.cause=J)}return V},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(3==L+9>>(f=[1,4,34],3)&&(H=C.I7))for(F[39](8,D,D.K.end()),b=w;b<H.length;b++)F[39](11,D,F[15](8,J,k,H[b])||d[11](72));if(15>(2==(L<<f[0]&7)&&M.call(this,w,-1,zq),L)+f[0]&&0<=L+f[0]>>f[1]&&(J.N=C?N[13](17,w,k,!0):k,O=J),!(L<<f[0]&15)){if(F[42](31,(V=(b=w.Si,['">','" style="display:none">',
"/m/07yv9"]),b),"canvas")){S='<div id="rc-imageselect-candidate" class="'+R[7](f[2],(D=(H=w.GT,w.label),"rc-imageselect-candidates"))+'"><div class="'+R[7](2,"rc-canonical-bounding-box")+'"></div></div><div class="'+R[7](18,"rc-imageselect-desc")+V[0];switch(F[39](22,D)?D.toString():D){case "TileSelectionStreetSign":S+="\u041e\u0431\u0432\u0435\u0434\u0438\u0442\u0435 <strong>\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u043a\u0438</strong>";break;case "vehicle":case V[2]:case "/m/0k4j":S+=
"\u041e\u0431\u0432\u0435\u0434\u0438\u0442\u0435 <strong>\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430</strong>.";break;case "USER_DEFINED_STRONGLABEL":S+="Select around the <strong>"+z[f[0]](37,H)+"s</strong>";break;default:S+="\u041e\u0431\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0431\u044a\u0435\u043a\u0442"}A=g(S+"</div>")}else A=F[42](33,b,"multiselect")?a[10](10,"</div>",V[0],w.label):N[f[2]](8,w,J);O=(k=(k=(k=(C=
A,k='<div class="'+R[7](10,"rc-imageselect-instructions")+'"><div class="'+R[7](50,"rc-imageselect-desc-wrapper")+V[0]+C+'</div><div class="'+R[7](42,"rc-imageselect-progress")+'"></div></div><div class="'+R[7](18,"rc-imageselect-challenge")+'"><div id="rc-imageselect-target" class="'+R[7](50,"rc-imageselect-target")+'" dir="ltr" role="presentation" aria-hidden="true"></div></div><div class="'+R[7](2,"rc-imageselect-incorrect-response")+V[f[0]],k+'\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.</div><div aria-live="polite"><div class="'+
(R[7](10,"rc-imageselect-error-select-more")+V[f[0]])),k+'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f.</div><div class="'+(R[7](18,"rc-imageselect-error-dynamic-more")+V[f[0]])),k+'\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435 \u043d\u043e\u0432\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.</div><div class="'+
(R[7](f[2],"rc-imageselect-error-select-something")+V[f[0]])),g(k+"\u041e\u0431\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0431\u044a\u0435\u043a\u0442. \u0415\u0441\u043b\u0438 \u0435\u0433\u043e \u043d\u0435\u0442, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438.</div></div>"))}return O},function(L,w,J,k,C,D,H,b,V){return L+9&(1>(((L&27)==(b=[46,"L","response"],L)&&(this[b[2]]=w),L)|1)>>5&&
2<=(L<<2&7)&&(w[b[1]]().disabled=!J,k=w[b[1]](),F[48](6,"label-input-label-disabled",!J,k)),14)||(H=["j","i","e"],R[b[0]](54,D,D.B,"c",function(){return R[43](11,D,!0)}),R[b[0]](50,D,D.B,"d",function(A){D[A=[4,"K",9],A[1]][A[1]].f6(N[A[0]](A[2],D.B))}),R[b[0]](52,D,D.B,H[2],function(){return R[43](12,D,w)}),R[b[0]](57,D,D.B,J,function(){return F[45](26,"fi","r",D)}),R[b[0]](51,D,D.B,C,function(){(R[43](11,D,w),D.K.K).gq()}),R[b[0]](53,D,D.B,H[0],function(){return F[45](25,"fi","i",D)}),R[b[0]](56,
D,D.B,H[1],function(){return F[45](23,"fi","a",D)}),R[b[0]](48,D,D.B,"f",function(A){return z[A=[1,31,"m3"],A[1]](6,function(S,O,f,E,K,Y,c,P,l){if(a[36]((O=(l=[1,3,null],[3,!0,16]),10),O[0],S,w)!=l[2])D.U();else{for(Y=(K=(f=((P=z[40](53,S,l[0]))&&d[20](66,P,D),c=[],D.B.K),f.ye=w,E=d[34](70,O[2],2,S),u[2](l[1],E)),K).next();!Y.done;Y=K.next())c.push(f.Qu(z[40](49,S,5),Y.value));(f.Kw(c,N[28](70,S,4,hM)),F)[11](27,O[l[0]],f)}},new oX(D.K[A[2]](),R[A[1]](A[0],D.B.K)),D)}),N[17](25,D.B,"l",D,D.O),N[17](41,
D.B,"n",D,D.P),N[17](25,D.B,k,D,D.C)),(L^27)&7||M.call(this,w,-1,RX),V},function(L,w,J,k,C,D,H,b,V,A){return((34>((A=[3,1,40],2)==(L+A[0]&10)&&(N_||N[49](9),KG||(N_(),KG=w),Nc.add(J,k)),L>>A[1])&&26<=L>>A[1]&&(z[39](31,k),H=a[36](74,D,k),b=a[35](54,w,N[17](22,w,J,H,C,!0)),H!==b&&N[43](46,b,k,D),V=b),(L&30)==L&&(C=void 0===C?new Map:C,D=void 0===D?null:D,z[23](7),H=new MessageChannel,J.postMessage("recaptcha-setup",R[45](A[0],w,k),[H.port2]),V=new YG(H.port1,C,D,k,H)),L)|A[2])==L&&M.call(this,w),V},
function(L,w,J,k,C,D,H,b,V,A,S,O){return 3==(L|(((S=["I",null,43],3==(L+2&15)&&(k[S[0]]=w,d[48](31,w,function(){k.I&&jH.call(J,C)})),L)|48)==L&&(b=2==D,A=["finish","play","recaptcha-checkbox-border"],H=N[37](4,S[1],"end",J,k?b?cl:C?Pl:dM:b?lW:C?mb:qc),V=d[25](1,J,A[2]),N[S[2]](26,u[0](27,J),H,A[1],x(function(){N[22](16,V,w)},J)),N[S[2]](30,u[0](26,J),H,A[0],x(function(){k&&N[22](66,V,!0)},J)),O=H),(L|72)==L&&(gM?J=w[gM]:J=w.ei,O=J==S[1]?0:J),L-2>>3||(!w||J instanceof Bl||(J=new Bl(J,w)),O=J),6))>>
3&&(C=N[35](35,"zSoyz",J(k||wT,void 0)),z[16](55,w,C)),O}]}(),R=function(){return[function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(!(L-(f=[3,"B",5],1)<<2>=L&&(L+7^21)<L&&(k=w,J[f[1]]&&(k=J[f[1]],J[f[1]]=k.next,k.next=w),J[f[1]]||(J.N=w),O=k),L+f[0]>>4)){if(C instanceof Map)for(b={},A=u[2](6,C),H=A.next();!H.done;H=A.next())D=u[2](f[2],H.value),V=D.next().value,S=D.next().value,b[V]=S;else b=C;z[2](f[0],!0,0,b,w,null,J,k)}return O},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c){if(2==(((14>(((L&(Y=[30,0,6],L-7<<
2>=L&&(L-1|14)<L&&(J.C?c=u[37](23,J.C):(k=N[9](17,window).width,(C=u[32](36).innerWidth)&&C<k&&(k=C),c=new Q(k,Math.max(N[9](14,window).height,u[32](40).innerHeight||w)))),47))==L&&(b=["logging",!0,"___grecaptcha_cfg"],V=new Oe,V.add(C,D.toString()),window[b[2]][b[Y[1]]]&&V.add(b[Y[1]],b[1]),R[40](13,J)&&V.add(J,b[1]),R[26](47,z[Y[1]](88,Y[1],H.K),V),c=d[4](28,w,k,"anchor",V)),(L|24)==L&&(D=["\n",0,"\nCaused by: "],C||(C={}),C[d[31](24,w,"",k)]=!0,b=k.cause,H=k[w]||"",b&&!C[d[31](26,w,"",b)]&&(H+=
D[2],b.stack&&b.stack.indexOf(b.toString())==D[1]||(H+="string"===typeof b?b:b.message+J),H+=R[1](57,"stack",D[Y[1]],b,C)),c=H),L)^28)&&1<=(L^65)>>3&&(k.K=w,k.o&&(k.B=!0,k.o.abort(),k.B=w),k.U=J,k.N=C,d[Y[0]](57,"error",!0,k),u[43](28,null,k)),L)^97)&7)){if("B"!==(S=[15,63,55296],C[Y[1]]))throw 1;for(O=(K=d[45](3,Y[1],N[42](3,C.slice((b=[],1))),k.toString(),Lj),Y)[1],D=Y[1];D<K.length;)H=K[D++],128>H?b[O++]=String.fromCharCode(H):191<H&&224>H?(V=K[D++],b[O++]=String.fromCharCode((H&31)<<Y[2]|V&S[1])):
239<H&&365>H?(V=K[D++],A=K[D++],f=K[D++],E=((H&7)<<18|(V&S[1])<<J|(A&S[1])<<Y[2]|f&S[1])-65536,b[O++]=String.fromCharCode(S[2]+(E>>10)),b[O++]=String.fromCharCode(56320+(E&1023))):(V=K[D++],A=K[D++],b[O++]=String.fromCharCode((H&S[Y[1]])<<J|(V&S[1])<<Y[2]|A&S[1]));c=b.join(w)}return c},function(L,w,J,k,C,D,H,b,V,A){if(1==(L+8&(A=[2,null,91],11)))a:switch(k=[3,0,"number"],F[49](16,!1,uS,J)){case 1:if((C=w.K[a[6](13,A[1],J)],typeof C)!=k[A[0]])throw Error();V=C;break a;case k[0]:V=R[45](15,A[1],!1,
J);break a;default:V=k[1]}if(1==(L>>A[0]&7))a[A[0]](35,function(S,O){((b=(H=(O=[42,33,39],R[O[2]](22,w,D,hT)),H).V())&&b.startsWith("recaptcha")&&F4.set(b,R[23](O[1],H,C),{MZ:u[O[0]](11,H,5,Tq)?u[18](1,J,u[O[0]](10,H,5,Tq),k):void 0,path:"/",Hi:"strict",yw:"https:"==document.location.protocol?!0:!1}),S).K=J});if((L&A[2])==L)a:{for(D=k(w(),41),C=0;C<D.length;C++)if(D[C].src&&d[34](16).test(D[C].src)){V=C;break a}V=-1}return V},function(L,w,J,k,C){if(((L^13)&(C=[3,5,1],C)[1])==C[2])d[44](71,(w|18)&
-41,J);return(L>>C[2]&4)<C[0]&&23<=(L|C[0])&&(J=Cj.get(),k=z[23](36,J,w)),k},function(L,w,J,k,C,D,H,b){return 2==(L<<1&((L^(L<<2&((L+((b=[14,7,49],2)==(L+b[1]&15)&&(D=a[42](8,"rc-canvas-canvas"),D.nodeType==w?(C=R[37](88,D),H=new Kg(C.left,C.top)):(k=D.changedTouches?D.changedTouches[J]:D,H=new Kg(k.clientX,k.clientY))),2)^17)>=L&&(L-5^23)<L&&(this.N=null,this.U=J,this.K=w,this.B=!0),b[0])||(H=N[28](67,w,3,f9)),51))&b[0]||(this.U=w||null,this.N=!!J,this.B=this.K=null),15))&&(C=F[22](9,w,k),D=R[b[2]](6,
1,J.K,C),J.size=J.K.size,H=D),H},function(L,w,J,k,C,D,H,b){return 12>(((((b=["a7",null,36],(L+7&26)>=L&&(L+3&46)<L)&&(J.L().value=w,J[b[0]]!=b[1]&&(J[b[0]]=w)),L)&116)==L&&((D=R[42](9,J,w,"script[nonce]",k.ownerDocument&&k.ownerDocument.defaultView))&&k.setAttribute(w,D),k.src=z[12](32,C)),L-8)&14)&&6<=(L>>2&7)&&(k=u[42](12,VD.X().get(),w,$G),H=a[b[2]](99,J,k)),H},function(L,w,J,k,C,D,H){if(1==(L+9&(D=[41,"N","K"],7))){for(this.I=(this.B=(this[D[C=0,this[D[2]]=(k=void 0===k?20:k,void 0===w?60:w),
1]]=Math.floor(this[D[2]]/6),[]),void 0===J)?2:J;C<this[D[1]];C++)this.B.push(F[D[0]](25,0,6));this.U=k}return 1==(L>>1&7)&&(z[25](60,R[32](2,new XV(QW,"From proto message. b/12014412"))),H=new eH(w,Y7)),H},function(L,w,J,k,C,D,H,b){return((L&(1==(b=[2,null,93],L-6&7)&&(D=k[KN],D||(C=z[49](41,J,k),D=function(V,A){return R[21](2,J,w,V,A,C)},k[KN]=D),H=D),b[2]))==L&&y.clearTimeout(w),L-b[0])&7||(u[7](11,eU,w)?(k=String(w.jP()).replace(X4,"").replace(QM,"&lt;"),J=String(k).replace(qm,z[43].bind(b[1],
8))):J=String(w).replace(vl,z[43].bind(b[1],16)),H=J),H},function(L,w,J,k,C,D,H,b,V){if(1==((V=[43,'"/>',77],L^40)&7)&&C&&(d[42](42,C),D))if("string"===typeof D)d[20](25,C,D);else H=function(A,S){A&&(S=d[5](1,J,C),C.appendChild("string"===typeof A?S.createTextNode(A):A))},Array.isArray(D)?D.forEach(H):!R[12](74,k,D)||"nodeType"in D?H(D):F[14](72,w,D).forEach(H);return L+1>>1<L&&(L+3&25)>=L&&(J='<img src="'+R[7](50,F[3](V[2],w.Qu))+'" alt="',J+="\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 reCAPTCHA".replace(qm,
z[V[0]].bind(null,24)),b=g(J+V[1])),b},function(L,w,J,k,C,D,H,b,V,A,S){if(S=[46,17,3],0<=L-4>>S[2]&&13>L+1){for(C=(b=[],V=(D=(H=[17,1,8],0),0),void 0===C?4:C);D<=k.length/12;D++)V=F[33](S[2],5,S[2],H[1],0,V,k.slice(12*D,Math.min(12*(D+H[1]),k.length))),b.push.apply(b,R[9](66,new Uint8Array([w&V>>24,w&V>>16,w&V>>H[2],w&V])));A=R[22](29,0,F[7](34,J,H[0],V,11),b).slice(0,C)}if(!(4>(L-4&4)&&24<=L>>1&&(this.K=z[26](S[1],5,1,[])),(L^S[0])>>4))throw Error("Do not instantiate directly");if(!(L>>2&15)){if(w instanceof
Array)D=w;else{for(C=(k=u[2](S[2],w),[]);!(J=k.next()).done;)C.push(J.value);D=C}A=D}return A},function(L,w,J,k,C,D,H,b){if((((-60<=(b=[7,5,63],L<<2)&&1>L+2>>b[1]&&(H=(w=y.document)?w.documentMode:void 0),L-1<<1>=L&&(L+6&b[2])<L)&&(k=~k,J?J=~J+w:k+=w,H=[J,k]),20)<=(L|b[1])&&(L-3&16)<b[0]&&(H=R[28](60,R[11](16,w),[F[34](16,J),F[34](28,C),R[25](64,k)])),3)==L-b[1]>>3)a[2](37,function(V){return(D.I=z[45](11,J,C,k,w,D),V).return(D.I)});return H},function(L,w,J,k,C,D,H,b,V){return L+3>>2<(29>(L|(V=["dY",
"N",12],2))&&27<=L+6&&(H=["hl",9,2],k[V[1]]=Date.now(),om=k[V[0]],k.B=F[23](21,k.K)?new Wl(k[V[0]],k.C,z[49](20,MW,k.K)):new yM(k[V[0]],k.C),k.B.U=N[19](17,H[1],k.PM),N[37](66)?k.B.P(N[45](5,H[0],"?",k),a[28](30,"-",k.id),!1):(k.U=N[41](7,10,H[2],C,k),F[23](18,k.K)&&window.___grecaptcha_cfg[w]&&window.___grecaptcha_cfg[w].includes("session")&&a[46](V[2],H[2],0,k),F[23](17,k.K)&&k.PM!=k[V[0]]&&(D=function(){return N[19](1,!0,k.PM,!1)},k.I=new Gq(k.PM,function(A,S){A[S=["PM",3,"preventDefault"],S[2]](),
N[19](S[1],!0,k[S[0]],J),z[36](S[1],.9,k,"n").then(D,D)}),D()))),L)&&(L+2^18)>=L&&M.call(this,w,-1,IX),(L&121)==L&&(J=new rZ,b=F[31](19,w,1,J)),b},function(L,w,J,k,C,D,H,b){return(L|((((L|48)==((H=[12,13,72],L&82)==L&&(k=a[43](2,w,Z9),D=function(V,A,S){S=["toString",53,"push"],Array.isArray(V)?V.forEach(D):(A=a[43](22,w,V),C[S[2]](z[0](S[1],A)[S[0]]()))},C=[],J.forEach(D),b=d[H[1]](93,C.join(z[0](49,k).toString()))),L)&&M.call(this,w,-1,s9),L)+2&25)>=L&&L-6<<1<L&&M.call(this,w),H[2]))==L&&(k=u[17](H[0],
w,J),b="array"==k||k==w&&"number"==typeof J.length),b},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if((L-(f=[21,39,34],9)^f[0])>=L&&(L-3^f[0])<L)a:{if(H=C((b=["-",23,46],k)(J(),4),b[1]))if(D=H()||[],0<D.length){for(V=(O=u[2](6,D),O.next());!V.done;V=O.next())if(S=V.value,d[f[2]](10).test(S.name)){E=(A=+!k(S,9),u[9](70,8904)(k(S,b[2]))+b[0]+A);break a}E="";break a}E="."}return 2==(L>>2&7)&&(E=0==u[9](f[1],7505)(k(w(),24)).length%2?5:4),(L|48)==L&&(E=g(z[44](4," "))),E},function(L,w,J,k,C,D,H,b,V,A,S,O,f,
E,K){if(!(L<<(K=["B",21,2],K[2])&15)&&(this.K=u[14](8,null,w),J=z[38](3,this),0<J.length))throw Error("Missing required parameters: "+J.join());return(L^(-86<=L<<K[2]&&7>(L<<K[2]&16)&&(f=[8,2,28],A=k(J(),4,43),C=new iW,V=k(A,f[0]),b=F[31](7,V,1,C),D=k(A,f[K[2]]),S=F[31](12,D,f[1],b),H=k(A,19),O=F[31](K[1],H,3,S),E=z[19](28,O)),(L-K[2]|17)>=L&&(L-K[2]^13)<L&&(E=a[10](K[2],"</div>",'">',w.label)),25))>>4||(d[23](14,C.K,k*w+J),D=C.K.end(),F[39](10,C,D),D.push(C[K[0]]),E=D),E},function(L,w,J,k,C,D,H,
b){if(!((L^((L-3^(((L|6)>>(H=["N",2,!1],4)||(b=a[H[1]](12,function(V,A){if(V[A=["K",50,40],A[0]]==J)return a[12](A[1],N[32](26,z[24](10,k,function(S){return S.stringify(C.message)}),C.messageType+C[A[0]]),w,V);return V.return(z[24](A[2],k,(D=V.B,function(S){return S.stringify([D,C.messageType,C.K])})))})),L&27)==L&&this.oL&&(w=u[44](26)-this[H[0]],0<w&&w<.8*this.B?this.n1=this.K.setTimeout(this.U,this.B-w):(this.n1&&(this.K.clearTimeout(this.n1),this.n1=null),d[41](4,"tick",this),this.oL&&(d[3](16,
H[2],this),this.start()))),7))>=L&&L+9>>1<L&&(this.HK=k,this.B=w,this.K=J),(L|48)==L&&(b=g('<div>\u0421\u0430\u0439\u0442 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 <a href="https://developers.google.com/recaptcha/docs/faq#are-there-any-qps-or-daily-limits-on-my-use-of-recaptcha" target="_blank">\u043a\u0432\u043e\u0442\u0443 \u0434\u043b\u044f reCAPTCHA</a>.</div>')),65))>>4)){if(nj&&"string"!==typeof J)throw Error("Expected a string but got "+J+" a "+u[17](6,w,J));b=J}return b},function(L,
w,J,k,C,D,H,b,V){if(!(L+(b=[32,2,5],1)>>4||(J.N&&(d[b[0]](b[1],J.N),d[b[0]](33,J.C),d[b[0]](b[0],J.I),J.C=w,J.N=w,J.I=w),J.B=-1,J.K=-1,J.U=w),L<<b[1]&b[2]))if(H=N[27](38),k=0,J){for(D=0;D<J.length;D++)C=H.call(J,D),k=(k<<w)-k+C,k&=k;V=k}else V=k;return 14<=L>>1&&4>(L-7&16)&&M.call(this,w,-1,U9),V},function(L,w,J,k,C,D,H){return((D=["U",36,23],(L&56)==L)&&(C=a[D[1]](42,k,J),null!=C&&null!=C&&(d[D[2]](13,w.K,8*k),u[41](10,127,C,w.K))),L-1)&7||(XP.call(this,J),this[D[0]]=w||""),H},function(L,w,J,k,C,
D,H,b,V,A,S,O,f){return((L+1^21)<(f=[2,0,"add"],(L|48)==L&&(Gz.call(this,"/recaptcha/api3/accountchallenge",a[35](17,f[1],de),"POST"),u[6](37,this,w),this.U=!0),L)&&(L+9&57)>=L&&(H=["none",!1,3],C==(k.U==H[f[0]])?O=d[f[1]](1):C?(A=k.U,b=k.mW(),S=d[25](5,H[1],k),k.C1()?S[f[2]](z[10](3,"play",H[1],k)):S[f[2]](d[49](48,H[1],k,H[1],b,A)),d[f[0]](20,"block",H[1],"1",k),J&&J.resolve(),V=u[42](22),N[43](31,u[f[1]](29,k),S,w,x(function(){V.resolve()},k)),k.zn(H[f[0]]),S.play(),O=V.promise):(F[1](64,"0",H[f[1]],
250,!0,D,k),k.zn(1),O=d[f[1]](5))),L>>1)&14||(O=k(w(),13)),O},function(L,w,J,k,C,D,H,b,V){return(L-(((V=["call",27,"prototype"],L)|8)==L&&(b=hS&&J!=w&&J instanceof Uint8Array),L-6>>4||(b=Object[V[2]].hasOwnProperty[V[0]](w,J)),8)|34)<L&&L-3<<1>=L&&(D=nG[J],D||(D=H=N[30](8,J),void 0===k.style[H]&&(C=(Di?"Webkit":zz?"Moz":t?"ms":null)+a[V[1]](16,w,H),void 0!==k.style[C]&&(D=C)),nG[J]=D),b=D),b},function(L,w,J,k,C,D,H,b,V,A){return((L-1|(2==((V=[54,8,"K"],(L-1^18)>=L&&(L-V[1]|78)<L&&(H=[!0,0,"rc-anchor-checkbox"],
xG.call(this,w,k,C,D),this[V[2]]=new rM,z[11](41,'"',this[V[2]],"recaptcha-anchor"),a[36](4,H[0],this[V[2]],H[2]),a[11](90,H[1],this[V[2]],this),this.U=null,this.Y=J),L)>>2&14)&&J.U&&d[20](29,J.U,w),V[0]))>=L&&(L+3^5)<L&&(C=[0,8909,8282],H=k(w(),41),H.length==C[0]?A="-1,":(b=Math.floor(Math.random()*H.length),D=H[b].hasAttribute("src")?u[9](39,C[1])(H[b].getAttribute("src").split(/[?#]/)[C[0]]):u[9](70,7503)(u[9](50,C[2])(H[b].text,Cj),500),A=b+","+D)),(L-7|20)<L&&L-V[1]<<2>=L)&&M.call(this,w),A},
function(L,w,J,k,C,D,H,b,V,A,S){if(A=[2,3,65],!(L>>A[0]&6)){for(V=D.length,H=(b=V%A[0]==J)?1:0;H<V;H+=A[0])(0,D[H+J])(C,k,D[H]);a[5](A[2],A[1],4,b?D[w]:void 0,k,C)}return 32>(L|6)&&18<=L+A[0]&&(S=w.displayName||w.name||"unknown type name"),S},function(L,w,J,k,C,D,H,b,V,A){if(V=["push",7,37],3==(L>>2&V[1])){for(;0<k||127<D;)C.K[V[0]](D&127|128),D=(D>>>w|k<<J)>>>0,k>>>=w;C.K[V[0]](D)}if(((L&30)==(L-3>>4||(u[V[1]](17,bY,w)||u[V[1]](16,kc,w)?D=u[35](33,w):(w instanceof yx?H=u[35](40,u[16](18,w)):(w instanceof
yx?b=u[35](36,u[16](20,w)):(w instanceof Cg?k=u[35](38,z[12](V[2],w).toString()):(w instanceof Cg?J=u[35](35,z[12](35,w).toString()):(C=String(w),J=LH.test(C)?C.replace(h$,N[12].bind(null,1)):"about:invalid#zSoyz"),k=J),b=k),H=b),D=H),A=D),L)&&(A=new Q(w.width,w.height)),L-5)<<1>=L&&(L-2|27)<L){for(H=w;H<k.length;H++)D=H+Math.floor(J()*(k.length-H)),C=u[2](3,[k[D],k[H]]),k[H]=C.next().value,k[D]=C.next().value;A=k}return A},function(L,w,J,k,C,D,H,b,V,A,S){if(((S=[40,3,1],L)-4|85)<L&&(L-S[2]|12)>=
L&&!(k.nodeName in wA))if(k.nodeType==w)C?J.push(String(k.nodeValue).replace(/(\r\n|\r|\n)/g,"")):J.push(k.nodeValue);else if(k.nodeName in Js)J.push(Js[k.nodeName]);else for(D=k.firstChild;D;)R[23](90,S[1],J,D,C),D=D.nextSibling;return(L^((L-2^((L-((L+8&15)==S[2]&&(window.addEventListener?window.addEventListener(k,C,J):window.attachEvent&&window.attachEvent(w,C)),9)|82)<L&&L+9>>S[2]>=L&&(k=k||w,A=function(){return J.apply(this,Array.prototype.slice.call(arguments,w,k))}),23))<L&&(L+S[2]^24)>=L&&
(A=a[48](16,null,"",z[S[0]](55,w,J))),54))&27||(b=void 0===b?15E3:b,z[23](6),V=function(O,f,E,K,Y,c){return(E=!(K=R[45](1,(f=(Y=(c=["origin","source","recaptcha-setup"],O.qO),Y).data==c[2],w),Y[c[0]])==R[45](2,w,k),C)||Y[c[1]]==C.contentWindow,f&&K&&E&&Y.ports.length>J)?Y.ports[J]:null},A=new Promise(function(O,f,E){E=u[26](2,function(K,Y,c){O(((Y=(uJ[c=[46,"delete",32],c[1]](E),new YG(K,D,H,k)),R)[c[0]](59,Y,u[c[2]](44),"message",function(P,l){(l=V(P))&&l!=K&&a[18](82,Y,l)}),Y))},V),a[0](60,function(){f((uJ["delete"](E),
"Timeout"))},b)})),A},function(L,w,J,k,C,D){return(L-(C=[41,9,25],L+C[1]>>4||(D=R[28](61,u[8](C[2],J,R[11](1,w)),[R[C[2]](72,k)])),7)<<1>=L&&(L-1|C[0])<L&&Bd.call(this),L-2)&13||(D=u[C[1]](71,7506)(k(w(),3))),D},function(L,w,J,k,C,D,H,b){if((((L|(b=[89,13,1],(L&29)==L&&(k=w.y-J.y,C=J.x-w.x,H=[k,C,k*J.x+C*J.y]),56))==L&&(H=(J||document).getElementsByTagName(String(w))),L|88)==L&&M.call(this,w),L&b[0])==L)a:switch(J=[2,"string","object"],typeof w){case J[b[2]]:H=u[D=new f9,b[1]](2,D,uS,4,d[4](30,J[2],
w));break a;case "number":H=(k=new f9,u)[b[1]](66,k,uS,3,w);break a;case "boolean":H=u[C=new f9,b[1]](67,C,uS,J[0],w);break a;default:H=(null==w?0:1===F[49](11,!1,uS,w))?w:new f9}return(L^35)>>4||(w=void 0===w?1E3:w,J=new kH,J.K=function(){return DZ(function(V,A){return Math.floor((A=F[19](7)-V,A)/w)?(J.K=function(){return 0},J.K()):w-A},F[19](38))}(),H=J),H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){if(3==(L+(E=["N",0,20],4)&15))z[22](10,w,function(Y,c){this.add(c,Y)},J);if(L+4>>1>=L&&(L-9|89)<L&&
(C=new CH(w),d[41](E[2],C,J))){k=new Dy(w);try{d[41](6,k,J)}finally{w.K()}}if(4==(L>>2&15)&&(O=[!1,0,"setInterval"],I.call(this),this.B={},this.U=J||null,this.I=w,this.O=R[E[1]].bind(null,1),!k)){for(D=(b=(C=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame",(H=((this.K=new Hx(x(this[E[0]],(this.K=null,this))),d[14](73,O[E[1]],"setTimeout",this.K),d)[14](49,O[E[1]],O[2],this.K),O[1]),"msRequestAnimationFrame")],y.window),this.K);H<C.length;H++)f=C[H],C[H]in b&&d[14](65,O[E[1]],
f,D);for(S=(A=x((m3=(V=this.K,!0),V).K,V),O[1]);S<K9.length;S++)K9[S](A);qK.push(V)}return 3==(2==((L^94)&23)&&(a[21](2,J,k,D,k,C,H)||d[48](15,w,DZ(D,C))),L-2>>3)&&(bq.length?(k=bq.pop(),F[13](29,E[1],k,w),J=k):J=new jJ(w),this.B=this[E[0]]=-1,this.K=J,this.U=this.K.K,z[28](6,this)),K},function(L,w,J,k,C,D,H,b,V,A){return(L>>1&11)==(((L<<(((3==(((A=["U",0,2],L)^44)&11)&&(V=u[8](48,w,R[11](1,9))),L+5)&11)>=L&&L-9<<1<L&&M.call(this,w,-1,VZ),1)&15)==A[2]&&(V=Object.prototype.hasOwnProperty.call(w,As)&&
w[As]||(w[As]=++SJ)),(L|88)==L)&&(d[27](48)?D():(b=C,H=function(){b||(b=w,D())},window.addEventListener?(window.addEventListener(J,H,C),window.addEventListener("DOMContentLoaded",H,C)):window.attachEvent&&(window.attachEvent("onreadystatechange",function(){d[27](49)&&H()}),window.attachEvent(k,H)))),A[2])&&(J[A[0]]=A[1],k=J.I.Y3,J.I=w,V=k),V},function(L,w,J,k,C,D){if((L-9^17)>=((L>>1&15)==((L&(C=[3,18,"call"],76))==L&&(D=u[9](C[1],7493)(k(w(),24))),C[0])&&(D=w?{getEndpointIdentifier:function(){return w.B},
getEndpointType:function(){return w.U},getExpirationTime:function(){return new Date(w.K.getTime())}}:null),L)&&(L+7&30)<L)M[C[2]](this,w);return L-1<<1>=L&&(L-2|41)<L&&(D=d[34](49,8,w,f9,C[0],J)),D},function(L,w,J,k,C,D,H){if((L>>(H=["D",15,((L+4^22)<L&&(L-7^17)>=L&&(D=!(!w||!w[O6])),6)],2)&13||(this[H[0]]=void 0,this.M=new Mi,aQ.call(this,w,J)),L-9)<<1>=L&&(L-H[2]|27)<L)a:switch(k=[null,!1,3],F[49](19,k[1],uS,w)){case 1:D=J.K[a[H[2]](9,k[0],w)];break a;case 2:D=(C=2===F[49](H[1],k[1],uS,w)?2:-1,
a[48](22,k[0],k[1],z[23](4,w,C)));break a;case k[2]:D=R[45](14,k[0],k[1],w);break a;case 4:D=R[23](95,w,4===F[49](17,k[1],uS,w)?4:-1);break a;default:D=k[0]}return(L>>2&7)>=H[2]&&L>>1<H[1]&&(J="",w=w||{},w.Je||(J+="\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 R, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437. "),D=g(J+'\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f. <a href="https://support.google.com/recaptcha/#6175971" target="_blank">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...</a>')),
D},function(L,w,J,k,C,D,H,b,V,A,S){return 1<=((L|4)&((L|16)==(S=[9,3,29],L)&&(V=N[19](S[2],S[1],4,C,H),b=k.Fy,w.push(J,function(O,f,E){return b(O,f,E,C,V)})),7))&&19>(L|S[0])&&(k=Uw.X(),A=Array.from({length:void 0===J?1:J},function(O,f,E){if(E=(O=w,["has","add","K"]),k[E[2]].size<w){do O=Math.floor(Math.random()*w);while(k[E[2]][E[0]](O))}return k[E[2]][f=O,E[1]](f),f})),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h){if((L+7&(1==(B=[31,"prototype","K"],L>>2&11)&&(k=void 0===k?0:k,V=N[26](2,
J,C[B[2]]),H=F[B[0]](7,Date.now().toString(),4,V),b=d[34](52,8,H,fH,3,D),k&&F[B[0]](7,k,w,b),h=b),29))<L&&(L-5^32)>=L&&(this.next=this.B=this[B[2]]=null),2==L+2>>3){P=['"','Unknown Error of type "null/undefined"',"UnknownError"];b:{for(O=(H=["window",(b=y,"location"),"href"],0);O<H.length;O++)if(b=b[H[O]],b==C){V=C;break b}V=b}if((D==C&&(D=P[1]),"string")===typeof D)h={message:D,name:"Unknown error",lineNumber:"Not available",fileName:V,stack:"Not available"};else{A=k;try{q=D.lineNumber||D.line||
"Not available"}catch(T){A=J,q="Not available"}try{m=D.fileName||D.filename||D.sourceURL||y.$googDebugFname||V}catch(T){m="Not available",A=J}!(E=R[1](56,"stack","\n",D),A)&&D.lineNumber&&D.fileName&&D.stack&&D.message&&D.name?(D.stack=E,h={message:D.message,name:D.name,lineNumber:D.lineNumber,fileName:D.fileName,stack:D.stack}):(K=D.message,K==C&&(D.constructor&&D.constructor instanceof Function?(D.constructor.name?S=D.constructor.name:(Y=D.constructor,uq[Y]?S=uq[Y]:(l=String(Y),uq[l]||(c=/function\s+([^\(]+)/m.exec(l),
uq[l]=c?c[1]:"[Anonymous]"),S=uq[l])),f='Unknown Error of type "'+S+P[0]):f="Unknown Error of unknown type",K=f,"function"===typeof D.toString&&Object[B[1]].toString!==D.toString&&(K+=w+D.toString())),h={message:K,name:D.name||P[2],lineNumber:q,fileName:m,stack:E||"Not available"})}}return(L-4^27)<L&&(L+4^29)>=L&&(J=w.Z,w.Z=[],h=J),h},function(L,w,J,k,C,D,H,b,V,A,S){if(12<=((L|((L&((L+(A=["K",74,32],6)^28)<L&&(L-1^27)>=L&&(S=N[21](12,new cE,u[9](70,7129)(w,k,function(O){return O.split("=")[0]})).toString()),
23))==L&&(S=w instanceof XV&&w.constructor===XV&&w.B===E6?w[A[0]]:"type_error:Const"),5))&13)&&(L^64)<A[2])switch(C=["Unmatched start-group tag: stream EOF",1," > "],J.B){case 0:0!=J.B?R[A[2]](75,4,J):N[4](1,10,127,J[A[0]]);break;case C[1]:F[46](37,(V=J[A[0]],C[2]),V[A[0]]+8,V);break;case 2:if(2!=J.B)R[A[2]](72,4,J);else k=a[0](51,0,J[A[0]]),H=J[A[0]],F[46](39,C[2],H[A[0]]+k,H);break;case 5:F[46](A[2],(b=J[A[0]],C[2]),b[A[0]]+w,b);break;case 3:D=J.N;do{if(!u[0](17,5,!1,J))throw Error(C[0]);if(J.B==
w){if(J.N!=D)throw Error("Unmatched end-group tag");break}R[A[2]](A[1],4,J)}while(1);break;default:throw u[16](13,")",J.B,J.U);}return S},function(L,w,J,k,C,D,H,b,V){return L+4>>((L&124)==(b=["C","call","N"],L)&&(gA[b[1]](this,[k.left,k.top],[k.right,k.bottom],C,D),this.Y=!!H,this[b[0]]=w,this[b[2]]=J),4)||("function"===typeof w?V=w:(w[z2]||(w[z2]=function(A){return w.handleEvent(A)}),V=w[z2])),V},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){return 3==(((L-((L^(L>>1&(P=[57,34,"B"],14)||(this.K=w===
QW&&J||"",this[P[2]]=E6),74))&10||(c=R[28](65,u[8](P[0],J,R[11](48,5)),[F[P[1]](20,k),F[P[1]](12,w)])),5)^31)>=L&&(L+3^29)<L&&(c=d[P[1]](52,J,k,oQ,w,C)),L)>>1&3)&&(c=a[2](37,function(l,m,q){if(l.K==(m=[2E3,1,(q=[25,1,38],255)],m[q[1]])){for(K=(Y=(A=(u[(z[6](9,(O=new VD,O),R[39](21,16,D.B,AM)),z[23](33,O.get(),13))&&(E=R[35](77,m[q[1]],N[22](q[0],m[q[1]],D.K),D.HK),z[18](8,m[2],m[q[1]],E,H.O)),20](5,u[34](23,H.K,H.K.has(RQ)?RQ:KH),H.dY,O),b=function(B){return(B.FL(K),B).TI()},R[q[0]](q[2],m[0])),Promise).resolve(R[47](19)),
pg=[],f={cK:0},[]);f.cK<Ni.length;f={cK:f.cK},f.cK++)Y=Y.then(function(B){return function(h){return u[15](89,Ni[B.cK],YH[B.cK]).call(H,h,A,B.cK)}}(f)).then(b);return a[12](81,Y.then(function(B){return cx(B,R[25](35,100))}).then(b).then(function(B){return Px(B,R[25](32,100))}).then(b),w,l)}return(S=(V=new dA(K),u[4](q[1],C,k,"object",J,V),R)[q[1]](96,0,H.B),l).return(new lq(S,V.toJSON()))})),c},function(L,w,J,k,C,D,H,b,V,A){if((L|(1==(L>>((L&42)==(V=[25,"isArray",15],L)&&(Hu.call(this,w,J),this.G=
k,this.Pm=null),2)&V[2])&&(k="Jsloader error (code #"+w+")",J&&(k+=": "+J),Bd.call(this,k),this.code=w),40))==L)if(H=[!1,0,null],C&&C.once)A=z[23](56,H[2],k,J,w,C,D);else if(Array[V[1]](w)){for(b=H[1];b<w.length;b++)R[35](44,w[b],J,k,C,D);A=H[2]}else k=R[33](1,k),A=R[29](V[2],J)?J.W.add(String(w),k,H[0],F[39](38,C)?!!C.capture:!!C,D):N[3](1,H[0],C,w,J,H[0],D,k);return(L|((L-5|76)<L&&(L-9|79)>=L&&(A=F[V[0]](3,w,k,J,2)),48))==L&&(J.U=w,J.K=k),A},function(L,w,J,k,C,D,H){if((L+3&(D=["call",5,187],24))>=
L&&(L+4^24)<L&&(iJ[D[0]](this),this.D=w,this.W={}),!(L>>2&9)){if(zz)k=z[16](29,173,186,59,D[2],J);else{if(Kj&&Di)a:switch(J){case 93:C=w;break a;default:C=J}else C=J;k=C}H=k}return L>>2&D[1]||R[42](57,"",this)||(this.L().value=this.U),H},function(L,w,J,k,C,D,H,b,V,A,S){if((L|((A=["N","error","toLowerCase"],L>>2&19)||(k=w.U,C=w[A[0]],S=new Kg(k+J*(w.K-k),C+J*(w.B-C))),88))==L)try{S=w.getBoundingClientRect()}catch(O){S={left:0,top:0,right:0,bottom:0}}return 4==(L<<2&(3==((L+8&28)>=L&&L+4>>1<L&&(C=J,
D=(k=Wo(25,27,A[1],w))?k.createScriptURL(C):C,S=new Cg(D,ay)),(L^100)&7)&&(S=a[2](12,function(O,f){return b=(V=(f=["forEach",27,"slice"],N)[f[1]](2),R)[47](3).split(C)[f[2]](k,J).map(function(E){return V.call(E,k)}),encodeURIComponent(D).split(C)[f[0]](function(E,K){b.push(a[28](4,V.call(H,K%H.length),V.call(E,k),b[K%J]))}),O.return(N[17](82,J,b,w))})),23))&&(k=String(w),J[A[0]]&&(k=k[A[2]]()),S=k),S},function(L,w,J,k){return((k=[2,1,'"></div><span class="'],L>>k[0])&7)==k[1]&&M.call(this,w),(L-k[1]^
27)<L&&(L-3^7)>=L&&(w=['" tabIndex="0"></span></div>',"rc-2fa-payload",'<div class="rc-2fa"><span class="'],J=g(w[k[0]]+R[7](10,"rc-2fa-tabloop-begin")+'" tabIndex="0"></span><div class="'+R[7](34,w[k[1]])+k[2]+R[7](50,"rc-2fa-tabloop-end")+w[0])),J},function(L,w,J,k,C,D,H){if(H=[11,60,25],(L+8^15)<L&&(L-7|H[2])>=L)if(null==J||""==J)D=new k;else{if(!(C=JSON.parse(J),Array).isArray(C))throw Error(void 0);D=u[17](19,k,z[5](65,w,C))}return 1==(L+9&7)&&(D=R[28](H[1],u[8](H[2],C,R[H[0]](17,w)),[R[H[2]](64,
J),R[H[2]](72,k)])),D},function(L,w,J,k,C,D,H,b){return 3==((((b=[2,12,0],L^44)>>4||(H=w<J?-1:w>J?1:0),L)>>b[0]&3)>=b[2]&&5>L-4&&(k=N[23](16,w),J=R[4](28,w),D=!!R[29](34,J[b[2]],this),C=!!R[29](36,J[1],this),this.K[k]=D||C),6>(L<<1&b[1])&&1<=L-8>>4&&(gM?H=J[gM]|=w:void 0!==J.ei?H=J.ei|=w:(Object.defineProperties(J,{ei:{value:w,configurable:!0,writable:!0,enumerable:!1}}),H=w)),L>>b[0]&15)&&(H=!!window.___grecaptcha_cfg[w]),H},function(L,w,J,k,C,D,H,b,V,A,S,O){return(3==(L>>((O=[10,26,40],3==(L>>1&
15))&&(S=k.K?a[31](3,J,z[O[2]](16,w,k.K,8)):!1),1)&15||(J=w.ci,k=w.ir,b=[" ",'"><div class="',"rc-2fa-response-field-error"],H=w.identifier,V=w.Wi,A='<div class="'+R[7](58,"rc-2fa-background")+b[0]+R[7](O[1],"rc-2fa-background-override")+b[1]+R[7](2,"rc-2fa-container")+b[0]+R[7](O[1],"rc-2fa-container-override")+b[1]+R[7](34,"rc-2fa-header")+b[0]+R[7](O[0],"rc-2fa-header-override")+'">',A=("phone"==J?A+"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":
A+"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b")+('</div><div class="'+R[7](18,"rc-2fa-instructions")+b[0]+R[7](O[0],"rc-2fa-instructions-override")+'">'),"phone"==J?(D="<p>\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u044d\u0442\u043e \u0432\u044b, \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 "+
z[1](38,H)+".</p><p>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435. \u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u0434\u0430 \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 "+z[1](39,k)+" \u043c\u0438\u043d.</p>",A+=D):(C="<p>\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u044d\u0442\u043e \u0432\u044b, \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 "+
z[1](38,H)+".</p><p>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435. \u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u0434\u0430 \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 "+z[1](6,k)+" \u043c\u0438\u043d.</p>",z[1](5,H),z[1](39,k),A+=C),A+='</div><div class="'+R[7](42,"rc-2fa-response-field")+
b[0]+R[7](O[0],"rc-2fa-response-field-override")+b[0]+(V?R[7](50,b[2])+b[0]+R[7](18,"rc-2fa-response-field-error-override"):"")+'"></div><div class="'+R[7](42,"rc-2fa-error-message")+b[0]+R[7](O[1],"rc-2fa-error-message-override")+'">',V&&(A+="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434."),A+='</div><div class="'+R[7](2,"rc-2fa-submit-button-holder")+b[0]+R[7](O[0],"rc-2fa-submit-button-holder-override")+'"></div><div class="'+R[7](50,"rc-2fa-cancel-button-holder")+b[0]+R[7](42,
"rc-2fa-cancel-button-holder-override")+'"></div></div></div>',S=g(A)),L+6>>3)&&(S=Math.min(Math.max(w,J),k)),6<=L-2)&&1>(L|8)>>4&&(b=["Left","Bottom","Right"],t?(V=a[19](O[0],w,J,k+b[0]),H=a[19](11,w,J,k+b[2]),C=a[19](13,w,J,k+"Top"),D=a[19](14,w,J,k+b[1]),S=new mQ(V,C,D,H)):(V=R[43](28,J,k+b[0]),H=R[43](28,J,k+b[2]),C=R[43](86,J,k+"Top"),D=R[43](36,J,k+b[1]),S=new mQ(parseFloat(V),parseFloat(C),parseFloat(D),parseFloat(H)))),S},function(L,w,J,k,C,D,H,b,V,A,S,O){if((S=[2,3,"recaptcha::2fa"],L+1>>
1<L)&&(L+4&46)>=L)a:if(b=(C||y).document,b.querySelector){if((H=b.querySelector(k))&&(D=H[J]||H.getAttribute(J))&&qi.test(D)){O=D;break a}O=w}else O=w;if(!((-44<=(L^4)&&7>(L+8&16)&&(O=!!J.L()&&J.L().value!=w&&J.L().value!=J.U),L^69)>>4)){if(!(V=(C=(k=(J=(w=(b=["n",.9,"Invalid parameters to grecaptcha.execute."],void 0===w?d[15](S[1],0):w),void 0===J?{}:J),d[35](32,0,w,J)),k.client),k.ws),F[23](22,C.K)))throw Error("grecaptcha.execute only works with invisible reCAPTCHA.");for(H=(A=u[S[0]](5,Object.keys(V)),
A).next();!H.done;H=A.next())if(![Hd.V(),q2.V(),Bx.V(),jN.V(),hk.V(),hs.V()].includes(H.value))throw Error(b[S[0]]);O=((V[q2.V()]&&0<V[q2.V()].length||V[Bx.V()])&&(D=a[S[0]](16,S[2],0))&&(V[BE.V()]=D),u[40](19,z[36](35,b[1],C,b[0],V),function(f){C.K.has(KH)||C.K.set(KH,f)}))}return(L>>1&6)==S[0]&&(O=N[18](29,w,k,J)),O},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((L-4^(O=[15,1,38],5))>=L&&(L-6^16)<L)a:{if((C=d[5](16,9,w),C.defaultView&&C.defaultView.getComputedStyle)&&(k=C.defaultView.getComputedStyle(w,
null))){f=k[J]||k.getPropertyValue(J)||"";break a}f=""}if(10<=(L>>(L+(L-7<<O[1]<L&&(L-7|19)>=L&&w.K.K.u_(J,N[4](25,w.B)).then(function(E){(E=["K","B","N"],w[E[1]][E[0]])&&(w[E[1]][E[0]].Y=w[E[2]])}),7)>>4<O[1]&&4<=(L|6)&&(k<C.startTime&&(C.endTime=k+C.endTime-C.startTime,C.startTime=k),C.progress=(k-C.startTime)/(C.endTime-C.startTime),C.progress>w&&(C.progress=w),N[28](18,0,C.progress,C),C.progress==w?(C.K=0,d[39](72,!1,C),C.O(),C.B(J)):C.K==w&&C.M()),2)&13)&&((L^80)&16)<O[0]){a:{if((A=(V=w(J||wT,
k),H=F[O[2]](9,"DIV",C||d[26](28,9)),N[35](37,"zSoyz",V)),z)[16](57,H,A),H.childNodes.length==O[1]&&(b=H.firstChild,b.nodeType==O[1])){D=b;break a}D=H}f=D}if(18>(L^73)&&4<=L<<2&&(S=[0,1],this.K=[],w))a:{if(w instanceof FO){if(D=w.E_(),A=w.Xr(),this.K.length<=S[0]){for(k=S[H=this.K,0];k<D.length;k++)H.push(new T2(A[k],D[k]));break a}}else{for(J in b=(D=z[35](O[0],S[V=S[0],0],w),[]),w)b[V++]=w[J];A=b}for(C=S[0];C<D.length;C++)a[7](O[2],S[O[1]],S[0],D[C],A[C],this)}return f},function(L,w,J,k,C,D,H,b,
V,A,S){if((L|56)==((S=[6,2,15],L>>S[1])&S[2]||(A=new Z$(function(O,f,E){(E=[null,"img","load"],f=F[18](24,E[1],document,E[0],J),f.length==w)?O():R[35](43,E[2],f[w],function(){O()})})),L))a:{V=["Iterator result ",!1,null];try{if(H=J.call(C.K.N,k),!(H instanceof Object))throw new TypeError(V[0]+H+" is not an object");if(!H.done){A=(C.K.O=w,H);break a}b=H.value}catch(O){A=(u[30](16,(C.K.N=V[S[1]],O),C.K),a)[30](8,V[1],C);break a}D.call(C.K,(C.K.N=V[S[1]],b)),A=a[30](S[0],V[1],C)}return 3==(((L+7&S[0])==
S[1]&&(C=k||$H.X(),G.call(this,null,C,J),this.F=void 0!==w?w:!1),L)>>S[1]&7)&&(A=(C=k(J(),4,17))?k(C,"type"):-1),A},function(L,w,J,k,C,D,H,b,V){return((V=[19,1,"K"],L)<<2<V[0]&&0<=(L^34)>>4&&(D=["",null,0],"*"==J?b="*":(k=d[46](3,"%2525",new EI(J),D[0]),C=a[29](V[0],D[V[1]],k,D[0]),H=a[40](85,"%2525",z[30](40,"%2525",C,D[0]),F[17](10,V[1],D[V[1]],J)),H.I!=D[V[1]]||("https"==H[V[2]]?a[25](27,D[2],443,H):H[V[2]]==w&&a[25](30,D[2],80,H)),b=H.toString())),L+2^16)<L&&L-4<<2>=L&&(b=u[16](99,w,3===F[49](9,
J,uS,k)?3:-1,k)),b},function(L,w,J,k,C,D,H,b){return(L|48)==(2==((L-8>>3==(H=[28,1,65],H)[1]&&(b=R[H[0]](58,u[8](33,J,R[11](49,w)),[R[25](64,k),R[25](H[2],C)])),L>>2)&7)&&(w=[" ","\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u0439.</div>",'<div tabindex="0"></div><div class="'],J=w[2]+R[7](50,"rc-defaultchallenge-response-field")+'"></div><div class="'+
R[7](18,"rc-defaultchallenge-payload")+'"></div><div class="'+R[7](42,"rc-defaultchallenge-incorrect-response")+'" style="display:none">',J=J+w[H[1]]+z[44](2,w[0]),b=g(J)),L)&&(b=N[17](73,J,k,w,C,D)),b},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){if((L-(1==((P=[3,7,2],L)>>1&P[1])&&(c=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^u[44](25)).toString(36)),6)^P[0])<L&&(L+4&56)>=L){for(D=(b=!!((K=(V=((A=(Y=z[5](66,(O=[!1,(f=k.rI,0),128],w),[]),k.constructor.K))&&
Y.push(A),0!==(d[49](76,f)&O[P[2]])&&F[12](24,"g",Y),C||k.RD()?R[P[0]].bind(null,6):z[10].bind(null,23)),u)[17](17,k.constructor,Y),k).I7&&(K.I7=k.I7.slice()),d[49](92,f)&w),O[1]);D<f.length;D++)if(H=f[D],D===f.length-J&&F[8](19,H))for(S in H)E=+S,Number.isNaN(E)?d[39](34,K)[E]=H[E]:N[28](P[0],P[2],O[1],V,K,!0,k,H[S],b,E);else N[28](1,P[2],O[1],V,K,O[0],k,H,b,D-k.Lc);c=K}return c},function(L,w,J,k,C,D,H){return(((3>(H=["K","N",1],(L|5)>>5)&&6<=((L|9)&7)&&k[H[0]]&&(k.U=a[0](62,k[H[1]],J,k),k[H[0]].postMessage(z[7](7,
w,z[19](2,C)))),L)-8&7)==H[2]&&M.call(this,w),(L&28)==L)&&(C=a[36](66,J,k),D=C==w?0:C),D},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c){return(L|((L-9^11)>=((((L|2)&27)==(L+5>>(Y=[0,3,1],2)<L&&L+9>>Y[2]>=L&&(d[6](8,J.B,k)?(delete J.B[k],J.size-=w,J.U++,J.K.length>2*J.size&&z[12](16,w,J),c=!0):c=!1),Y[1])&&(c=function(){var P=arguments,l=this;return N[20](2,w,function(){return d[24](16,0,X8,function(){return J.apply(l,P)})})}),L-Y[1])>>Y[1]==Y[2]&&(c=function(P){P.forEach(function(l,m){(m=["target",
"attributeName","B"],"attributes")===l.type&&(Math.random()<w&&J.K++,l[m[1]]&&J.U.add(l[m[1]]),l[m[0]]&&l[m[0]].tagName&&J[m[2]].add(l[m[0]].tagName))})}),L)&&(L+8&30)<L&&(O=["HEAD","nonce",'style[nonce],link[rel="stylesheet"][nonce]'],A=d[26](25,w,D),f=A.K,t&&f.createStyleSheet?(K=f.createStyleSheet(),N[48](18,K,H)):(E=F[18](24,O[Y[0]],A.K)[Y[0]],E||(S=F[18](16,k,A.K)[Y[0]],E=A.B(O[Y[0]]),S.parentNode.insertBefore(E,S)),V=A.B(J),(b=R[42](8,C,O[Y[2]],O[2]))&&V.setAttribute(O[Y[2]],b),N[48](16,V,H),
A.U(E,V))),64))==L&&(c=new Z$(function(P,l){l(void 0)})),c}]}(),a=function(){return[function(L,w,J,k,C,D,H){if((L+(2==(L<<(H=[11,"N",27],1)&H[0])&&(D=J[H[1]]()>>>w),5)^29)>=L&&(L-4^17)<L){if("function"===typeof w)k&&(w=x(w,k));else if(w&&"function"==typeof w.handleEvent)w=x(w.handleEvent,w);else throw Error("Invalid listener argument");D=2147483647<Number(J)?-1:y.setTimeout(w,J||0)}return(L&H[2])==L&&J.isEnabled()&&N[32](4,J,w,"recaptcha-checkbox-clearOutline"),(L|64)==L&&(C=VM.get(),C.U=J,C[H[1]]=
w,C.B=k,D=C),D},function(L,w,J,k,C){return((C=[4,"B",19],L|24)==L&&(k=w[C[1]].length+w.K.length),(L-8^9)<L)&&(L-C[0]|C[2])>=L&&(this.x=void 0!==J?J:0,this.y=void 0!==w?w:0),k},function(L,w,J,k,C){if(k=[1,26,14],(L|16)==L)try{C=N[11](k[1],k[0],J).getItem(w)}catch(D){C=null}return L-5<<k[0]>=L&&(L+k[0]&k[1])<L&&(C=N[31](k[2],new ra(new L9(w)))),C},function(L,w,J,k,C,D,H,b,V,A){return(((A=[7,83,2],12>L+6)&&0<=((L|8)&3)&&(H=[0,!0,"rc-button-default"],b=d[24](11,w||H[A[2]],N2),eJ.call(this,J,b,C),this.P=
D||null,this.U=k||H[0],this.C=w||H[A[2]],a[36](6,H[1],this,"goog-inline-block")),(L-A[2]|6)<L)&&L-1<<1>=L&&(V=w.classList?w.classList:z[34](13,"","class",w).match(/\S+/g)||[]),(L+6&29)<L&&(L-4^A[0])>=L)&&(this.O=J,D=["k","GET",!1],this.L6=D[A[2]],this.I=k||D[1],this.U=D[A[2]],this.B=new EI,d[46](A[2],"%2525",this.B,w),this.K=null,this.N=new Oe,C=N[20](A[1],A[2]),a[44](65,C,D[0],this.B),N[A[2]](1,"Km9gKuG06He-isPsP6saG8cn",this,"v")),V},function(L,w,J,k,C,D,H){return(L+((L^17)>>(D=[8,"B",1],5)<D[2]&&
4<=(L>>2&7)&&(k[D[1]]=C,k.N=!J,k.U=w,F[45](D[2],!0,0,k)),D[0])^19)>=L&&L+D[2]>>D[2]<L&&(H=a[2](35,function(b,V){return(k=a[V=["c","6d",1],2](16,d[15](23,V[0]),V[2]))?b.return(F[7](V[2],k,d[37](12,V[2],V[1])).then(function(A,S){return S=N[42](6,A),F[10](8,w,Zg,S)}).catch(function(){return J})):b.return(J)})),H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(((L&57)==(E=[2,"G0",31],L)&&M.call(this,w,E[2],XO),28<=L+E[0]&&8>(L-4&8))&&H)for(O=H.split("&"),b=0;b<O.length;b++)S=O[b].indexOf(J),V=w,0<=S?(A=O[b].substring(0,
S),V=O[b].substring(S+k)):A=O[b],D(A,V?decodeURIComponent(V.replace(/\+/g,C)):"");if((L|((L&43)==L&&(D=["",1,0],C=new QZ,V=D[E[0]],H=u[9](70,8817)(27,7,12,37,D[1]),A=u[42](14,Cj.get(),9,$G),Array.prototype.forEach.call(F[28](3,"INPUT"),function(K,Y,c,P,l,m,q,B){u[9](71,7972)(K.name+(K.getAttribute((B=[(q=[1,5,4],!1),35,0],H[q[2]]()))||""),H[B[2]](),"i")&&(V++,Y=u[9](50,9220)(u[9](18,2113)(K).replace(/\s/g,"")),Y()&&(P=Y().length,a[20](29,B[0],C,P,2),A&&a[36](B[1],2,A)&&(l=a[36](3,2,A),c=Y().substr(B[2],
vx[q[B[2]]])+Y().substr(Y().length-vx[B[2]]),m=F[B[2]](21).call(parseFloat(l+c)+l,30),N[18](11,q[1],m,C))))}),b=u[9](39,5593)(k(N[35](40),44).slice(D[E[0]],5E4)),S=u[9](38,9147)(u[9](18,1928)(b(),H[3](),"i").replace(/\D/g,D[0]).slice(-4)),S()&&A&&a[36](75,E[0],A)&&a[7](24,6,a[15](9,D[E[0]],35,a[36](10,E[0],A),S),C),f=z[19](E[0],F[47](19,4,F[3](E[0],3,F[E[2]](19,V,D[1],C),u[9](71,863)(b(),H[E[0]]()+H[D[1]](),"i",10)),u[9](38,2288)(b(),H[D[1]]())))),64))==L){if(k)for(b in V={},k)H=k[b],A=H.iR,A||(V.mc=
H.U9||H.Mx.Fy,H.Ru?(V.x7=R[7](15,1,0,H.Ru),A=function(K){return function(Y,c,P){return K.mc(Y,c,P,K.x7)}}(V)):H.Tu?(V.qZ=N[19](30,3,4,H[E[1]].O_,H.Tu),A=function(K){return function(Y,c,P){return K.mc(Y,c,P,K.qZ)}}(V)):A=V.mc,H.iR=A),A(D,C,H[E[1]]),V={mc:V.mc,x7:V.x7,qZ:V.qZ};d[46](15,0,J,w,C,D)}return f},function(L,w,J,k,C,D,H,b,V,A,S){return(S=[5,36,2],3)<=(L>>1&7)&&7>((L^S[1])&7)&&(k=1===F[49](18,!1,uS,J)?1:-1,A=a[48](23,w,0,a[S[1]](98,k,J))),L<<S[2]&S[0]||(A=a[S[2]](13,function(O,f){return(V=D[H=
D[b=D[f=["D","send","K"],f[2]][f[0]],f[2]].Y,f[2]].P,pH.X()[f[2]]=z[26](19,C,k,V),a)[12](81,D.N[f[1]](w,new ts(V,b,H)),J,O)})),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((3==(f=["nR",75,6],L^47)>>3&&(D=a[46](f[1],w,k,!0),C[D]||((C[D]=z[42](79,0,J,w,k,C))[a[46](11,w,k,J)]=C),O=C[D]),(L-4^32)<L)&&(L-f[2]^11)>=L){for(b=(V=(H=D.K,H.push(new T2(C,k)),S=H.length-w,D.K),V[S]);S>J;)if(A=S-w>>w,V[A].K>b.K)V[S]=V[A],S=A;else break;V[S]=b}if((L|24)==L)N[18](8,w,J,k);return 3==(L-((L&98)==L&&(C==J?O=F[1](43):
(H=N[5](30,w,J,C,k),k.dw&&k.O?A=k.U.subarray(H,H+C):(D=k.U,V=H+C,A=H===V?d[11](34):Wx?D.slice(H,V):new Uint8Array(D.subarray(H,V))),b=A,O=b.length==J?F[1](40):new F8(b,zy))),f[2])&11)&&(S=[16,1,!0],A=new yZ(C,w,D,J.l,function(E){return d[18](6,8,J.MB,1,WL,E)}),k&&z[11](40,'"',A,k),b&&A[f[0]](b),H&&a[36](5,S[2],A,H),V&&z[46](21,S[1],A,S[2],S[0]),a[11](91,0,A,J),O=A),O},function(L,w,J,k,C,D,H,b,V,A,S,O){return((L-((S=[50,4,5],(L<<2&16)<S[2]&&3<=L-9>>S[1])&&(O=N[38](S[0],"Firefox")||N[38](26,w)),S)[2]>>
S[1]||(C=R[30](1,w,J),k.B.push.apply(k.B,R[9](67,C)),O=C),(L&27)==L)&&(A=k.CY,V=z[44](16,H,C,D),w[J]=function(f,E,K){return A(f,E,K,C,V,b)}),(L|32)==L)&&(z[22](S[1],uW,function(f){R[43](2,1,"end",w,f)}),z[17](64,!1,uW)||d[13](2)),O},function(L,w,J,k){if((6>(k=[18,"um",35],L<<1&7)&&(L^11)>=k[0]&&(I.call(this),this.K=w,R[k[2]](43,"keydown",w,this.U,!1,this),R[k[2]](43,"click",w,this.B,!1,this)),L&29)==L)a:if(w){if("object"===typeof w){if(R[19](26,null,w)){J=new Uint8Array(w);break a}if(w[k[1]]===Ty){J=
N[26](3,null,w);break a}}J=w}else J=w;return J},function(L,w,J,k,C,D,H,b){if((L+(b=["\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432 \u0446\u0435\u043d\u0442\u0440 \u0432\u0441\u0435\u0445 <strong>\u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0445 \u044f\u0449\u0438\u043a\u043e\u0432</strong>.",26,0],5)^25)>=L&&(L-1^3)<L)a:{if(C!=k)switch(C.p6){case w:H=w;break a;case -1:H=-1;break a;case J:H=J;break a}H=k}if(!((L|8)&5)){C=["\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432 \u0446\u0435\u043d\u0442\u0440 \u0432\u0441\u0435\u0445 <strong>\u043c\u0430\u0448\u0438\u043d</strong>.",
'<div class="',"TileSelectionStreetSign"],D=C[1]+R[7](b[1],"rc-imageselect-desc-no-canonical")+J;switch(F[39](50,k)?k.toString():k){case C[2]:D+="\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432 \u0446\u0435\u043d\u0442\u0440 \u0432\u0441\u0435\u0445 <strong>\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439</strong>.";break;case "/m/0k4j":D+=C[b[2]];break;case "/m/04w67_":D+=b[0]}H=g(D+w)}return H},
function(L,w,J,k,C,D,H,b,V,A,S){if(A=[2,"O","M"],4==((L^56)&15)){for(D=(J=(k=R[4](88,w),[]),u[A[0]](1,k)),C=D.next();!C.done;C=D.next())J.push(this.K[a[6](15,null,C.value)]);this[A[1]](J)}if((L|88)==L){if((H=k[A[b=[1,":","Child component index out of bounds"],2]]?k[A[2]].length:0,J).t7&&!k.t7)throw Error("Component already rendered");if(H<w||H>(k[A[2]]?k[A[2]].length:0))throw Error(b[A[0]]);if((k[A[1]]&&k[A[2]]||(k[A[1]]={},k[A[2]]=[]),J.N)==k)V=F[10](48,b[1],J),k[A[1]][V]=J,d[19](25,b[0],J,k[A[2]]);
else u[4](3,'"',k[A[1]],F[10](53,b[1],J),J);(a[25](23,null,k,J),G2)(k[A[2]],H,w,J),J.t7&&k.t7&&J.N==k?(C=k.Ot(),(C.childNodes[H]||null)!=J.L()&&(J.L().parentElement==C&&C.removeChild(J.L()),D=C.childNodes[H]||null,C.insertBefore(J.L(),D))):k.t7&&!J.t7&&J.B&&J.B.parentNode&&J.B.parentNode.nodeType==b[0]&&J.A()}return(L+5&((L-(L-8&15||(J.o&&J.S&&(J.o.ontimeout=w),J.Y&&(R[7](13,J.Y),J.Y=w)),3)^25)>=L&&(L-8|77)<L&&(C=N[23](6,w),D=R[4](84,w),J=!!R[29](32,D[0],this),k=!!R[29](35,D[1],this),this.K[C]=J&&
k),15))==A[0]&&(this.K[N[23](52,w)]=null),S},function(L,w,J,k,C,D){return(L-1&15)==((L+7&(((L-3<<((L-1^(D=[2,16,"string"],D[0]))>=L&&(L-4|12)<L&&(k.K=J,C={value:w}),D[0])>=L&&L-8<<D[0]<L&&(Bd.call(this,w),this.K=!1),L)-1^27)<L&&(L+5&27)>=L&&(typeof J.className==D[2]?J.className=k:J.setAttribute&&J.setAttribute(w,k)),15))==D[0]&&(C=F[31](D[1],k,w,J)),D[0])&&IQ.call(this,"string"===typeof w?w:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",J),C},function(L,w,J,k,C,D,H){return(L|
(L-6<<(9<=(L-2&((H=[109,46,1],L&H[0])==L&&(D=void 0!==J.firstElementChild?J.firstElementChild:a[H[1]](17,w,!0,J.firstChild)),15))&&19>L-6&&(k=void 0===k?globalThis:k,C=w+R[47](2),globalThis[C]=function(){return J.apply(k,(delete globalThis[C],arguments))},D=C),H[2])>=L&&(L+2^7)<L&&(J==w?k.N.call(k.U,C):k.B&&k.B.call(k.U,C)),64))==L&&(this.K=null),D},function(L,w,J,k,C,D,H,b,V,A,S,O){if((L-7|36)<((L&(S=[90,66,64],54))==L&&Bd.call(this),L)&&(L-6^9)>=L&&(C=[!1,null,3],this.I=C[0],this.B=C[1],this.C=
void 0,this.U=C[1],this.N=C[1],this.O=C[0],this.K=0,w!=d[7].bind(null,17)))try{k=this,w.call(J,function(f){z[41](26,null,2,f,k)},function(f){z[41](16,null,3,f,k)})}catch(f){z[41](18,C[1],C[2],f,this)}if((L|24)==L)for(k=J||["rc-challenge-help"],C=["INPUT",0,"A"],A=C[1];A<k.length;A++)if((b=a[42](11,k[A]))&&F[2](17,"none",b)&&F[2](65,"none",u[6](S[1],w,b))){((D=b.tagName==C[2]&&b.hasAttribute("href")||b.tagName==C[0]||"TEXTAREA"==b.tagName||"SELECT"==b.tagName||"BUTTON"==b.tagName?!b.disabled&&(!F[47](18,
b)||F[29](44,C[1],b)):F[47](34,b)&&F[29](45,C[1],b))&&t?(V=void 0,"function"!==typeof b.getBoundingClientRect||t&&null==b.parentElement?V={height:b.offsetHeight,width:b.offsetWidth}:V=b.getBoundingClientRect(),H=null!=V&&V.height>C[1]&&V.width>C[1]):H=D,H)?b.focus():a[13](33,w,b).focus();break}if(15<=L>>2&&3>L+3>>5)a:if(H=a[42](9,"rc-challenge-help"),D=!F[2](5,"none",H),C==w||C==D){if(D){if(!(k.yF(H),F)[8](73,1,H)){O=void 0;break a}u[b=(N[22](S[0],H,J),u[37](28,H).height),22](74,x(function(f){(f=
["focus","Safari",10],z[20](12,"5.0",f[1])>=f[2])||H[f[0]]()},k),k)}else b=-1*u[37](20,H).height,d[42](9,H),N[22](S[2],H,!1);F[10](31,"d",((V=R[22](20,k.I),V).height+=b,V),k)}return O},function(L,w,J,k,C,D,H,b){if(1==(L+1&(L-7<<(b=[0,42,36],1)<L&&(L-9|79)>=L&&(D=C().substr(w,vx[w]),H=F[b[0]](7).call(parseFloat(k+D-k)^k,J)),27))){for(J=(w=(k=[],b[0]),void 0===J)?8:J;w<J;w++)k.push(mx()%(Zy+1)^u[22](8,Zy));H=u[33](9,3,a[19](2,b[2],4,k))}return(((L&56)==L&&(w=["RecaptchaMFrame.shown",null,"RecaptchaMFrame.token"],
this.B=w[1],this.K=w[1],this.U=w[1],d[4](64,"RecaptchaMFrame.show",x(this.Yx,this)),d[4](91,w[b[0]],x(this.El,this)),d[4](75,w[2],x(this.E8,this))),(L-5|22)>=L&&(L-7^21)<L&&(J=[1,0,12],(new s6(a[b[2]](3,J[b[0]],u[b[1]](7,w,6,WE)),a[b[2]](99,2,u[b[1]](8,w,6,WE)),u[b[1]](9,w,J[2],GW),z[40](49,w,7),w.J()||J[1])).render(N[35](1))),L)|88)==L&&(H=void 0!==k.lastElementChild?k.lastElementChild:a[46](19,w,J,k.lastChild)),H},function(L,w,J,k,C,D,H,b,V,A){if(!((A=[22,1,7],L)<<2&14))a:{if(D!=w)for(b=D.firstChild;b;){if(k(b)&&
(H.push(b),C)){V=!0;break a}if(a[16](12,null,!1,k,C,b,H)){V=!0;break a}b=b.nextSibling}V=J}return(L|((L>>2&15)==((L|16)==L&&(J=[0,"ubd",2],Gz.call(this,N[28](79,"api2",J[A[1]]),a[35](16,J[0],iq),"POST"),F[11](14,!0,38,this),d[16](A[1],J[2],u[31](57,A[1],d[48](54,!1,null,w,G8,A[1]))),this.K=d[A[1]](56,J[0],U6,w)),A)[1]&&(k=w.b7,J='<a class="'+R[A[2]](2,w.dE)+'" target="_blank" href="'+R[A[2]](10,R[A[0]](A[2],k))+'" title="',J+="\u0421\u043a\u0430\u0447\u0430\u0442\u044c MP3-\u0444\u0430\u0439\u043b".replace(qm,
z[43].bind(null,8)),V=g(J+'"></a>')),32))==L&&(this.K=w||y.document||document),V},function(L,w,J,k,C,D,H,b,V,A){if(1==((V=[2,"apply","charCodeAt"],25)<=(L^31)&&42>L<<V[0]&&(w=this,this.promise=new Promise(function(S,O){w.reject=O,w.resolve=S})),(L^30)>>3)){for(H=(D=F[27](9,w,J,(b=0,k)),[]);b<C.length;b++)H.push(C[V[2]](b)^D());A=String.fromCharCode[V[1]](String,R[9](V[0],H))}return A},function(L,w,J,k,C,D){return 4==L-(8<=L-(1==((L|24)==((L-2|(D=["K",64,7],D)[1])<L&&(L-D[2]|41)>=L&&(w[D[0]].close(),
w[D[0]]=J,R[46](56,w,w[D[0]],"message",function(H){return z[33](9,1,"x",H,w)}),w[D[0]].start()),L)&&(k=J.match(nH),xH&&["http","https","ws","wss","ftp"].indexOf(k[1])>=w&&xH(J),C=k),(L^8)&D[2])&&(k?J.tabIndex=w:(J.tabIndex=-1,J.removeAttribute("tabIndex"))),5)&&2>(L|D[2])>>4&&(k=null,"string"===typeof J?k=d[13](51,J,document):F[39](4,J)&&J.nodeType==w&&(k=J),C=k),2)>>4&&(k=new rA(w,void 0===J?"":J),C={isSuccess:function(){return k.nc()},getVerdictToken:function(){return k.B},getStatusCode:function(){return Ll.has(k.K)?
Ll.get(k.K):"unknown"}}),C},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){if(!(L+6>>(P=[2,"splice",46],4))){for(C=(D=[0,1,8],D)[0],V="";C<=k.length/J-D[1];C++){for(A=(H=(b=(C+D[1])*J-D[1],D)[0],D[0]);b>=C*J;b--)H+=k[b]<<A,A+=D[P[0]];V+=(H>>>D[0]).toString(w)}c=V}if(!(((6>(L-7&16)&&(L^77)>>4>=P[0]&&(c=(C=J.currentStyle?J.currentStyle[k]:null)?z[47](30,w,C,J):0),L)^24)>>3))if(A=[1,0,null],Array.isArray(C))for(K=A[1];K<C.length;K++)a[19](29,A[P[0]],J,k,C[K],D,H);else E=F[39](34,H)?!!H.capture:!!H,J=
R[33](3,J),R[29](12,D)?(O=D.W,S=String(C).toString(),S in O.K&&(Y=O.K[S],b=d[11](13,A[1],E,J,Y,k),-1<b&&(d[39](17,w,Y[b]),Array.prototype[P[1]].call(Y,b,A[0]),Y.length==A[1]&&(delete O.K[S],O.B--)))):D&&(V=N[P[2]](41,D))&&(f=F[21](27,A[1],V,k,J,E,C))&&d[32](3,f);return L<<P[0]&14||(b=[!1,"aria-",0],H=k[1],D=N[37](20,String(k[w]),C),H&&("string"===typeof H?D.className=H:Array.isArray(H)?D.className=H.join(" "):F[24](50,w,b[1],D,H)),k.length>J&&w9(C,"string",D,k,b[P[0]],b[0],"number"),c=D),c},function(L,
w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p,v,n,X){if(L-(X=[0,2,7],8)<<1<L&&(L+8^18)>=L){for(e=(f=(V=(S=[0,6,3],S[X[0]]),J.W),S[X[0]]),P=J.I;V<P.length;)f[e++]=P[V]<<24|P[V+1]<<16|P[V+X[1]]<<8|P[V+S[X[1]]],V=4*e;for(H=16;64>H;H++)k=f[H-15]|S[X[0]],v=(f[H-16]|S[X[0]])+((k>>>X[2]|k<<25)^(k>>>18|k<<14)^k>>>S[X[1]])|S[X[0]],Y=f[H-X[1]]|S[X[0]],c=(f[H-X[2]]|S[X[0]])+((Y>>>17|Y<<15)^(Y>>>19|Y<<13)^Y>>>10)|S[X[0]],f[H]=v+c|S[X[0]];for(K=J.K[l=(B=J.K[S[X[0]]]|S[X[0]],J.K)[X[1]]|(T=J.K[5]|(D=J.K[S[1]]|
S[X[0]],S[E=J.K[1]|S[X[h=J.K[S[(H=S[X[0]],X)[1]]]|S[X[0]],0]],q=J.K[X[2]]|S[X[0]],X[0]]),S[X[0]]),4]|S[X[0]];64>H;H++)A=(B>>>X[1]|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),C=(K>>>S[1]|K<<w)^(K>>>11|K<<21)^(K>>>25|K<<X[2]),v=q+C|S[X[0]],c=(K&T^~K&D)+(JR[H]|S[X[0]])|S[X[0]],p=B&E^B&l^E&l,q=D,b=c+(f[H]|S[X[0]])|S[X[0]],O=v+b|S[X[0]],D=T,T=K,m=A+p|S[X[0]],K=h+O|S[X[0]],h=l,l=E,E=B,B=O+m|S[X[0]];J.K[((J.K[5]=J.K[J.K[4]=J.K[J.K[S[X[J.K[1]=(J.K[S[X[0]]]=J.K[S[X[0]]]+B|S[X[0]],J.K[1]+E)|S[X[0]],J.K[X[1]]=J.K[X[1]]+
l|S[X[0]],1]]]=J.K[S[X[1]]]+h|S[X[0]],4]+K|S[X[0]],5]+T|S[X[0]],J.K)[S[1]]=J.K[S[1]]+D|S[X[0]],X)[2]]=J.K[X[2]]+q|S[X[0]]}if((L>>((L&108)==L&&(k=w.m1,J=["rc-audiochallenge-response-field",'" style="display:none" tabIndex="0"></div><div class="',"rc-response-label"],n=g('<div id="rc-audio" aria-modal="true" role="dialog"><span class="'+R[X[2]](58,"rc-audiochallenge-tabloop-begin")+'" tabIndex="0"></span><div class="'+R[X[2]](58,"rc-audiochallenge-error-message")+J[1]+R[X[2]](42,"rc-audiochallenge-instructions")+
'" id="'+R[X[2]](X[1],k)+'" aria-hidden="true"></div><div class="'+R[X[2]](18,"rc-audiochallenge-control")+'"></div><div id="'+R[X[2]](58,J[X[1]])+'" style="display:none"></div><div class="'+R[X[2]](X[1],"rc-audiochallenge-input-label")+'" id="'+R[X[2]](10,"rc-response-input-label")+'"></div><div class="'+R[X[2]](18,J[X[0]])+'"></div><div class="'+R[X[2]](26,"rc-audiochallenge-tdownload")+'"></div>'+z[44](5," ")+'<span class="'+R[X[2]](58,"rc-audiochallenge-tabloop-end")+'" tabIndex="0"></span></div>')),
1)&X[2])==X[1]){if(!k.B){for(b in k.K||u[5](X[1],"-hover"," ",k),C={},H=k.K,H)C[H[b]]=b;k.B=C}n=isNaN((D=parseInt(k.B[J],w),D))?0:D}return(L|24)==L&&(z[39](47,J),N[39](4,16,w,J,C,w,X[1]).push(k),n=J),n},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B){if(!(L+(B=[0,7,64],2)>>4))a:if(V=[!0,!1,3],D instanceof Z$)z[5](5,V[B[0]],V[2],D,a[B[0]](69,k||d[B[1]].bind(null,18),C,H||J)),q=V[B[0]];else if(d[42](15,V[1],D))D.then(k,H,C),q=V[B[0]];else{if(F[39](6,D))try{if(b=D.then,"function"===typeof b){d[2](62,
V[B[0]],V[1],H,D,k,C,b),q=V[B[0]];break a}}catch(h){H.call(C,h),q=V[B[0]];break a}q=w}if((L+B[1]^9)>=L&&(L-B[1]|26)<L){for(O=(K=(A=(C=(z[5](28,5,(b=[1,(void 0===k&&(k=B[0]),2),15],"")),kf[k]),Array(Math.floor(J.length/w))),S=B[0],B[0]),C)[B[2]]||"";K<J.length-b[1];K+=w)D=J[K+b[1]],c=C[D&63],H=J[K],m=J[K+b[B[0]]],P=C[(H&w)<<4|m>>4],Y=C[H>>b[1]],l=C[(m&b[2])<<b[1]|D>>6],A[S++]=""+Y+P+l+c;f=(V=O,B)[0];switch(J.length-K){case b[1]:f=J[K+b[B[0]]],V=C[(f&b[2])<<b[1]]||O;case b[B[0]]:E=J[K],A[S]=""+C[E>>
b[1]]+C[(E&w)<<4|f>>4]+V+O}q=A.join("")}return q},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){if((L&(K=[6,63,"Ib"],77))==L)a:{try{Y=y[J].parse(D);break a}catch(c){}if(/^\s*$/.test((H=String(D),H))?0:/^[\],:{}\s\u2028\u2029]*$/.test(H.replace(/\\["\\\/bfnrtu]/g,k).replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,C)))try{Y=eval(w+H+")");break a}catch(c){}throw Error("Invalid JSON string: "+
H);}if((L&((L-((L|80)==L&&(uF[J]=w),7)^31)>=L&&(L+9^21)<L&&(J=['<div id="',"recaptcha-accessible-status",". </div>"],Y=g(J[0]+R[7](18,J[1])+'" class="'+R[7](2,"rc-anchor-aria-status")+'" aria-hidden="true">'+z[1](7,w)+J[2])),43))==L&&(J=[null,"imageselect",1],U.call(this,Cl.width,Cl.height,w||J[1]),this.U={T:{PK:null,element:null}},this.SF=J[0],this.Qe=void 0,this.kd=J[0],this[K[2]]=!1,this.NN=J[2],this.C=J[0]),(L|40)==L){if(E=(E=(f=[1024,224,57343],!1),void 0)===E?!1:E,Dj){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(k))throw Error("Found an unpaired surrogate");
O=(H2||(H2=new TextEncoder)).encode(k)}else{for(D=(S=new Uint8Array((V=(C=0,E),3)*k.length),0);D<k.length;D++)if(A=k.charCodeAt(D),A<J)S[C++]=A;else{if(2048>A)S[C++]=A>>K[0]|w;else{if(55296<=A&&A<=f[2]){if(56319>=A&&D<k.length)if(H=k.charCodeAt(++D),56320<=H&&H<=f[2]){(S[S[S[b=(A-55296)*f[0]+H-56320+65536,C++]=b>>18|240,C++]=b>>12&K[1]|J,C++]=b>>K[0]&K[1]|J,S)[C++]=b&K[1]|J;continue}else D--;if(V)throw Error("Found an unpaired surrogate");A=65533}S[S[C++]=A>>12|f[1],C++]=A>>K[0]&K[1]|J}S[C++]=A&K[1]|
J}O=C===S.length?S:S.subarray(0,C)}Y=O}return Y},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h){if(2==((L^67)&(2>(L^19)>>(B=["call","L","K"],4)&&1<=(L>>2&10)&&(l=[8,5,"object"],H[B[2]].U&&(m=new bp,b=N[20](81,2),A=d[31](20,w,2,"",d[4](29,l[2],b),m),P=d[31](21,w,3,0,D,A),S=d[31](19,w,4,0,Date.now()-C,P),void 0!=k&&d[31](17,w,l[1],0,k,S),q=H.Fr,E=new fH,O=z[19](4,S),c=N[18](11,l[0],O,E),V=F[31](7,2,J,c),V instanceof fH?q.log(V):(Y=new fH,K=z[19](6,V),f=N[18](31,l[0],K,Y),q.log(f)))),15)))a:if(C=
[38,"recaptcha-verify-button",39],37==J.keyCode||J.keyCode==C[2]||J.keyCode==C[0]||40==J.keyCode||9==J.keyCode)if(this.Ib=!0,9!=J.keyCode){if(k=(Array.prototype.forEach[D=[],B[0]](R[25](61,"TABLE"),function(T,e){(e=[4,"display",43],"none"!==R[e[2]](30,T,e[1]))&&jA(F[12](e[0],"*","rc-imageselect-tile",T),function(p){D.push(p)})}),D).length-1,0<=this.Qe&&D[this.Qe]==a[37](57,null,document))switch(k=this.Qe,J.keyCode){case 37:k--;break;case C[0]:k-=w;break;case C[2]:k++;break;case 40:k+=w;break;default:h=
void 0;break a}J[(0<=k&&k<D.length?D[k].focus():k>=D.length&&d[13](55,C[1],document).focus(),J).preventDefault(),B[2]]()}if(2<=(L<<1&(0<=L-2>>3&&6>L-8&&(H=[],Array.prototype.forEach[B[0]](F[18](18,J,document,w,a[42](9,"rc-prepositional-target")),function(T,e,p,v){((p=(v=["D0",46,54],this.K.push(e),{selected:!1,element:T,index:e}),H).push(p),R[v[1]](v[2],u[0](24,this),new V$(T),k,x(this[v[0]],this,p)),F)[24](64,"checked",T,C)},D)),13))&&19>(L^36))F[48](3,"rc-response-input-field-error",J,w[B[1]]());
return h},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q){if((L-(m=[32,9,"U"],m[1])>>4||(k=new AR(J,w),q={challengeAccount:function(B){return u[B=[31,40,"avrt"],B[1]](21,u[B[0]](12,1,B[2],!1,4,k))},verifyAccount:function(B,h){return u[h=[24,17,2],40](h[1],z[16](h[0],3,10,4,h[2],k,B))},getChallengeMetadata:function(){return R[28](6,k.N)},isValid:function(){return k.B}}),L+7>>1>=L)&&(L-8|54)<L){for(Y=[5,4," > "];u[0](16,Y[0],!1,C)&&C.B!=J;)l=C.N,E=D[l],E||(A=D[w])&&(c=A[l])&&(E=D[l]=d[28](40,Y[1],
0,c)),E&&E(C,k,l)||(H=k,V=C,O=V[m[2]],R[m[0]](73,Y[1],V),K=V,S=H,K.VO||(P=K.K.K-O,K.K.K=O,b=a[7](m[0],Y[2],0,K.K,P),(f=S.I7)?f.push(b):S.I7=[b]));q=k}return L-8&14||(k%=1E6,C=Math.ceil(Math.random()*w),q=[C].concat(R[m[1]](2,J.map(function(B,h){return(B+J.length+(k+C)*(h+C))%w})))),q},function(L,w,J,k,C,D,H,b,V){if((((L&((V=["gI","U",13],(L|5)>>4)||(b=bJ?(k=jc)?k.brands.some(function(A,S){return(S=A.brand)&&N[2](54,S,J)}):!1:w),109))==L&&(U.call(this,SA.width,SA.height,"default"),this.C=null,this.K=
new vL,d[V[2]](46,this.K,this),this[V[1]]=new t$,d[V[2]](43,this[V[1]],this)),L)+1&57)>=L&&L+3>>1<L){if(k==J)throw Error("Unable to set parent component");if(C=J&&k.N&&k[V[0]])D=k[V[0]],H=k.N,C=H.O&&D?F[1](2,D,H.O)||w:null;if(C&&k.N!=J)throw Error("Unable to set parent component");XP.R.BH.call(k,(k.N=J,J))}if((L+6^32)<L&&(L+7^18)>=L)if(J){if(isNaN((J=Number(J),J))||J<w)throw Error("Bad port number "+J);k.I=J}else k.I=null;return b},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(((f=[23,6,3],L-f[2])>=f[0]&&
(L<<2&8)<f[2]&&(k=Nc,J=w,k.K&&(J=k.K,k.K=k.K.next,k.K||(k.B=w),J.next=w),O=J),9)>(L<<2&16)&&(L|8)>=f[2])if(Array.isArray(C))for(A=w;A<C.length;A++)a[26](2,0,null,k,C[A],D,H,b,V);else(S=z[f[0]](57,J,H||b.handleEvent,D,C,k,V||b.D||b))&&(b.W[S.key]=S);if((L&29)==L)if(Array.isArray(w)){for(H=(k=u[D=[],2](f[2],w),k.next());!H.done;H=k.next())D.push(a[26](4,H.value));O=D}else if(F[39](32,w)){for(b=(J=u[2](f[1],(C={},Object.keys(w))),J.next());!b.done;b=J.next())V=b.value,C[V]=a[26](12,w[V]);O=C}else O=
w;return 4>((L^64)&8)&&26<=L+4&&M.call(this,w),O},function(L,w,J,k,C,D){return((L^23)>>(D=["msRequestAnimationFrame","mozRequestAnimationFrame","(^|[\\s]+)([a-z])"],4)||(C=J.replace(RegExp(D[2],w),function(H,b,V){return b+V.toUpperCase()})),(L|8)==L)&&(k=J.B,C=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k[D[1]]||k.oRequestAnimationFrame||k[D[0]]||w),C},function(L,w,J,k,C,D,H,b,V,A){if(((V=[43,"g-recaptcha-response",2],-77<=(L^60)&&(L+V[2]&12)<V[2]&&(A=V[1]+(J?w+J:"")),L)&V[0])==L)a:{for(D=
(J instanceof String&&(J=String(J)),J.length),H=w;H<D;H++)if(b=J[H],k.call(C,b,H,J)){A={oD:H,sj:b};break a}A={oD:-1,sj:void 0}}return(L&((L|32)==L&&(A=g("<div><div></div>"+z[34](17,{id:w.LY,name:w.yu})+"</div>")),86))==L&&(A=w^J^k),A},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l){if(3==(((P=[1,31,"search"],L)|24)==L&&(R[40](26,w,J),l=J),(L^28)>>3)&&(this.K=w>>>0,this.B=J>>>0),18<=L+5&&4>(L+2&24)&&(O=["auth",0,!1],0!==D.B.length)){for(A=(E=(K=N[15](22,.01,D),K[P[2]](Ox)),S=O[P[0]],[]);(b=d[12](32,
63,38,k,6,E,K,S))>=O[P[0]];)A.push(K.substring(S,b)),S=Math.min(K.indexOf(C,b)+P[0]||E,E);for(c=(f=(A.push(K.slice(S)),A).join("").replace(M7,w),f=af(f,O[0],D.gI(),"authuser",D.I||"0"),O[P[0]]);10>c&&D.B.length;++c){if(!(Y=R[P[1]](5,14,null,D.N,(V=D.B.slice(O[P[0]],J),D.Y),V),H)(f,Y))break;D.B=D.B.slice((D.N=O[P[0]],V.length))}D.K.oL&&d[3](24,O[2],D.K)}return(L|32)==L&&M.call(this,w,-1,fl),(L-2&11)==P[0]&&(k instanceof Bu?(J.B=k,F[24](14,null,J.B,J.C)):(C||(k=F[2](82,w,k,up)),J.B=new Bu(k,J.C)),l=
J),l},function(L,w,J,k,C,D,H){if(!(L-(H=["M","K",1],4)>>4))a:{for(;J[H[1]][H[1]];)try{if(k=J.B(J[H[1]])){D={value:k.value,done:!(J[H[1]].O=w,1)};break a}}catch(b){J[H[1]].B=void 0,u[30](18,b,J[H[1]])}if(J[(J[H[1]].O=w,H)[1]].I){if((C=J[H[1]].I,J)[H[1]].I=null,C.te)throw C.Y3;D={value:C.return,done:!0}}else D={value:void 0,done:!0}}return(L-5^21)<L&&L-4<<2>=L&&(this.I=[],k=[null,!1,0],this.W=k[H[2]],this.D=k[H[2]],this.N=k[H[2]],this.U=k[H[2]],this.B=void 0,this[H[1]]=k[0],this.O=k[2],this.C=k[H[2]],
this[H[0]]=k[2],this.Y=J||k[0],this.xd=w),D},function(L,w,J,k,C,D,H,b,V,A){if(A=[21,5,1],!(L<<2&6))a[2](34,function(S,O,f){if(1==(f=[68,(O=[2,3,0],15),50],S.K))return a[12](f[2],Ex(a[f[1]](f[0]),R[25](41)),O[0],S);if(S.K!=O[1])return b=S.B,a[12](34,g9(b.TI()),O[1],S);R[35](41,(H=S.B,"storage"),u[32](16),function(E,K,Y,c,P,l,m,q,B,h,T,e){(q=[4,(e=["TI",30,2],3),(m=E.qO,1)],m.key&&m.newValue)&&m.key.match(d[15](29,k)+"-\\d+$")&&(Y=new zn,l=N[18](13,q[e[2]],m.key,Y),P=F[31](20,Math.floor(performance.now()/
6E4),e[2],l),c=N[0](14,""+D||"",w),h=N[18](12,q[1],c,P),B=a[46](57,q[0],b.K(),TW,h),T=N[18](e[1],C,H[e[0]](),B),K=a[21](35,q[1],d[1](48,0,of,T)),d[33](62,m.key+"-"+N[0](11,a[e[2]](23,d[15](25,J),q[e[2]])||""),K,0),a[0](31,F[44].bind(null,3),11))}),S.K=O[2]});return L-A[1]<<A[2]<L&&(L+A[1]^A[0])>=L&&(V=0<=nh(J,w)),V},function(L,w,J,k,C,D,H,b){return 0<=(L>>((L|32)==(b=['\u041d\u0430\u0436\u0438\u043c\u0430\u0439\u0442\u0435 \u0432 \u0446\u0435\u043d\u0442\u0440 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0432\u044b\u0448\u0435. \u0415\u0441\u043b\u0438 \u0441\u043e\u043c\u043d\u0435\u0432\u0430\u0435\u0442\u0435\u0441\u044c \u0438\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. <a href="https://support.google.com/recaptcha" target="_blank">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\u2026</a>',
29,2],(L+b[2]^b[1])<L&&L-8<<1>=L&&(H=g(b[0])),L)&&(D||J!=w?k.L1&J&&C!=!!(k.be&J)&&(k.I.im(J,k,C),k.be=C?k.be|J:k.be&~J):k.K(!C)),b)[2]&6)&&6>(L+5&8)&&(H=N[18](b[1],w,k,J)),H},function(L,w,J,k,C){if((L>>2&(C=[28,"keyCode",0],6)||13!=w[C[1]]||6!=this.K.aL().length||(this.U.K(!1),u[5](29,!1,this,"n")),L-1|8)<L&&(L+5&60)>=L){for(J=(N[C[0]](62,w,1,Yc),C)[2];J<N[C[0]](62,w,1,Yc).length;J++)N[C[0]](73,w,1,Yc);this.K=[],this.B=w}return k},function(L,w,J,k,C,D){return((((((D=[26,3,"iPad"],L+2)^27)<L&&(L-7|
45)>=L&&M.call(this,w),L)-2^14)>=L&&(L+1^14)<L&&(C=N[23](8,"iPhone",w)||N[38](D[0],D[2])||N[38](D[0],w)),L)+1&25)<L&&L+5>>1>=L&&(k=w,J&&(k=x(w,J)),k=Rf(k),"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!d[21](D[1],"Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Kl||(Kl=N[42](7,"file:",null,!1,"port2")),Kl(k)):y.setImmediate(k)),C},function(L,w,J,k,C,D,H){return(L|((8<=(L+2&(H=[5,"rc-canvas-image",15],(L&67)==L&&(k=["rc-canvas-canvas",'"></div>','" src="'],J=w.gs,D=g('<div id="rc-canvas"><canvas class="'+
R[7](42,k[0])+'"></canvas><img class="'+R[7](42,H[1])+k[2]+R[7](2,F[3](75,J))+k[1])),H)[2])&&24>L-7&&(J=VD.X().get(),D=z[23](H[0],J,w)),L-8^17)>=L&&(L-H[0]^H[2])<L&&(D=function(b,V,A,S,O,f){if(S=["(",(f=["responseText",4,")]}'\n"],""),5],b.o)b:{if((A=b.o[f[0]],A.indexOf(f[2])==w&&(A=A.substring(S[2])),O=A,y).JSON)try{V=y.JSON.parse(O);break b}catch(E){}V=a[22](f[1],S[0],"JSON","@",S[1],O)}else V=void 0;return new J(V)}),48))==L&&(u[19](48,J.rI)?(k=R[47](H[0],16,1,J,w),k.I=J,C=k):C=J,D=C),D},function(L,
w,J,k,C,D,H,b,V,A,S,O){if(1==((L+6&15)==(O=[3,"rI",17],O)[0]&&(S=u[9](38,1460)(k(J(),39))),L>>1&11))a:if(-1===w)S=null;else if(w>=J.U)S=J.B?J.B[w]:void 0;else{if(k&&J.B&&(C=J.B[w],null!=C)){S=C;break a}S=J[O[1]][w+J.Lc]}if((L+8^(1==(L>>2&O[0])&&k&&(J.D?a[31](7,k,J.D)||J.D.push(k):J.D=[k],F[46](7,k,J,w)),O[0]))>=L&&(L-2|30)<L&&J)a:{for(k=(D=(A=N7,w.split(".")),0);k<D.length-1;k++){if(b=D[k],!(b in A))break a;A=A[b]}(V=(H=(C=D[D.length-1],A[C]),J(H)),V)!=H&&null!=V&&Yf(A,C,{configurable:!0,writable:!0,
value:V})}return S},function(L,w,J,k,C,D,H,b,V,A){if((((A=[49,7,4],L+1)&14||(J=w.b7,V=g('<div class="'+R[A[1]](42,"rc-audiochallenge-play-button")+'"></div><audio id="audio-source" src="'+R[A[1]](58,R[22](11,J))+'" style="display: none"></audio>')),L)+A[1]&26)>=L&&(L+8^21)<L&&(H=N[23](68,w),C=R[A[2]](8,w),J=R[29](33,C[0],this).toString(),k=R[29](33,C[1],this).toString(),D=d[A[0]](5,k,J),this.K[H]=D),L+3>>A[2]==A[2]&&(V=g('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u041d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u0430 \u0438\u043b\u0438 \u0446\u0438\u0444\u0440\u044b? \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. <a href="https://support.google.com/recaptcha" target="_blank">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...</a>')),
8>(L>>2&16)&&27<=L>>1)try{V=(k=J&&J.activeElement)&&k.nodeName?k:null}catch(S){V=w}return(L|5)>>3||(D.N=d[19](2,J,w,{title:"reCAPTCHA",src:H,tabindex:b,width:String(C.width),height:String(C.height),role:"presentation",name:"a-"+D.F}),k.appendChild(D.N)),V},function(L,w,J,k,C,D,H,b){return(1==(L^(b=["K",3,2],b[2]))>>b[1]&&(u[7](53,w),J=R[37](41,J,w),H=w[b[0]].has(J)),(L|9)&b[1])>=b[2]&&14>(L^22)&&(this.listener=w,this.proxy=null,this.src=D,this.type=C,this.capture=!!J,this.lm=k,this.key=++c2,this.j2=
this.N7=!1),H},function(L,w,J,k,C,D,H,b,V,A,S){return(L-(7<=(S=[1,10,"K"],L|6)&&23>L<<S[0]&&(H=g,V=['" role="presentation">','<div class="','"></div>'],C=V[S[0]]+R[7](2,"rc-anchor-normal-footer")+'">',(D=N[S[1]](37,t))&&(D=F[42](31,$7,"8.0")),b=g(V[S[0]]+R[7](50,"rc-anchor-logo-large")+V[0]+(D?V[S[0]]+R[7](S[1],"rc-anchor-logo-img-ie8")+J+R[7](18,"rc-anchor-logo-img-large")+V[2]:V[S[0]]+R[7](34,"rc-anchor-logo-img")+J+R[7](26,"rc-anchor-logo-img-large")+V[2])+w),A=H(C+b+F[27](18,J,k)+w)),6)|S[1])<
L&&(L-4^31)>=L&&(I.call(this),this.B=w||S[0],this[S[2]]=J||y,this.U=x(this.nY,this),this.N=u[44](20)),A},function(L,w,J,k,C,D,H){return(L&116)==(1==(L-4&(((L-((D=["B",13,21],2)==(L>>2&15)&&(iJ.call(this),this[D[0]]=w,d[D[1]](46,this[D[0]],this),this.N=J),8)^D[2])<L&&(L-1^14)>=L&&(this.errorCode=w),22<=L>>1)&&30>L>>1&&(J=R[4](92,w),this.N=R[29](68,J[0],this)),11))&&(J.K=C?N[D[1]](18,w,k,!0):k,J.K&&(J.K=J.K.replace(/:$/,"")),H=J),L)&&(k=void 0===k?1:k,J.U.then(function(b){return z[21](4,b)},function(){}),
J.U=null,z[D[2]](3,J[D[0]]),J[D[0]]=null,J.I&&J.I.MO(),R[11](D[2],"waf",w,J,k)),H},function(L,w,J,k,C,D,H,b,V,A){if((L|56)==(A=[4,1023,192],L)){for(D=H=(k=(b=[],[224,63,128]),0);H<J.length;H++)C=J.charCodeAt(H),C<k[2]?b[D++]=C:(2048>C?b[D++]=C>>6|A[2]:(55296==(C&64512)&&H+1<J.length&&56320==(J.charCodeAt(H+1)&64512)?(C=65536+((C&A[1])<<10)+(J.charCodeAt(++H)&A[1]),b[D++]=C>>18|240,b[D++]=C>>w&k[1]|k[2]):b[D++]=C>>w|k[0],b[D++]=C>>6&k[1]|k[2]),b[D++]=C&k[1]|k[2]);V=b}if(1==((L&76)==(L-5&5||(k==w?C=
k:(D=k.f1||J,C="string"===typeof D?D:new Uint8Array(D)),V=C),L)&&(C=void 0===C?2:C,V=a[19](1,36,A[0],R[9](A[0],J,w,k)).slice(0,C)),L>>1&15))a:if(k=[222,221,106],48<=J&&57>=J||96<=J&&J<=k[2]||65<=J&&90>=J||(Di||fG)&&0==J)V=!0;else switch(J){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case w:case 187:case 61:case 188:case 190:case 191:case A[2]:case k[0]:case 219:case 220:case k[1]:case 163:case 58:V=!0;break a;case 173:V=zz;break a;default:V=!1}return V},function(L,
w,J,k,C,D,H,b,V,A){if(L>>2<((V=[16,12,"getElementsByClassName"],(L+5^29)>=L&&(L-6|6)<L)&&(H=J||document,b=[0,null,"*"],H[V[2]]?D=H[V[2]](w)[b[0]]:(k=document,C=J||k,D=C.querySelectorAll&&C.querySelector&&w?C.querySelector(w?"."+w:""):F[18](V[0],b[2],k,w,J)[b[0]]||b[1]),A=D||b[1]),V[0])&&1<=(L^V[1])>>3){if(w.prototype=P2(J.prototype),w.prototype.constructor=w,wZ)wZ(w,J);else for(k in J)"prototype"!=k&&(Object.defineProperties?(C=Object.getOwnPropertyDescriptor(J,k))&&Object.defineProperty(w,k,C):w[k]=
J[k]);w.R=J.prototype}return A},function(L,w,J,k,C,D,H,b){return(L^38)>>(1==(((L+(H=[4,"&lt;",">"],9)&45)<L&&(L+H[0]&23)>=L&&(I.call(this),w&&d[7](11,"keyup",this,w,J)),L+7)&3)&&(C=["&quot;","\x00","'"],J instanceof ym?D=J:(k="object"==typeof J&&J.NB?J.U_():String(J),d9.test(k)&&(-1!=k.indexOf("&")&&(k=k.replace(lp,"&amp;")),-1!=k.indexOf(w)&&(k=k.replace(m0,H[1])),-1!=k.indexOf(H[2])&&(k=k.replace(q7,"&gt;")),-1!=k.indexOf('"')&&(k=k.replace(B2,C[0])),-1!=k.indexOf(C[2])&&(k=k.replace(hR,"&#39;")),
-1!=k.indexOf(C[1])&&(k=k.replace(FI,"&#0;"))),D=d[13](91,k)),b=D),3)||(k=N[23](36,w),J=R[H[0]](40,w),C=R[29](63,J[0],this).toString(),this.K[k]=R[16](24,5,C)),b},function(L,w,J,k,C,D,H,b,V,A,S){if((A=["Y","K",9],19>(L^84))&&10<=((L^30)&15))try{H||!C?C=new Tn:b&&a[20](25,w,C,-1,J),D&&(V=z[40](24,w,D,J))&&V.length&&a[20](26,w,C,V[k],J),S=C}catch(O){}return(L+6&58)>=((((L&54)==(L>>2&14||(Array.isArray(w)||(w=[String(w)]),z[A[2]](25,0,null,J,k.B,w)),L)&&(J&&d[20](70,J,w),w[A[1]][A[1]].ab(x(w.G,w),x(w.gI,
w),x(w.Z,w))),L)-A[2]^A[2])>=L&&(L+8&10)<L&&(xG.call(this,w,k,C,D),this.U=null,this[A[1]]=J),L)&&(L-6^22)<L&&(w[A[1]](),this.isEnabled()&&3!=this.U&&!w.target.href&&(J=!this.C1(),d[41](5,J?"before_checked":"before_unchecked",this)&&(w.preventDefault(),this[A[0]](J)))),S},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c){return((L<<(c=[2,7,34],1)&11||13==w.keyCode&&u[5](25,!1,this),L-c[1])<<1>=L&&(L-5^22)<L&&(K=[1,438,"join"],k=void 0===k?null:k,H=R[30](3,512,6),O=u[c[0]](1,H),A=O.next().value,D=O.next().value,
S=O.next().value,V=O.next().value,b=O.next().value,E=O.next().value,f=[u[40](c[0],A,0),R[24](1,21,D,F[c[2]](36,J)),$f(S,3,D,A,F[c[2]](24,A),F[c[2]](16,341)),$f(V,15,S,A,F[c[2]](24,A),F[c[2]](28,K[1])),$f(w,5,V,A,F[c[2]](4,278),F[c[2]](16,A)),u[40](9,b,K[c[0]]),u[40](6,E,""),eA(w,w,b,E),R[27](31,b)],null!=k&&(f=[F[45](45,f.length+K[0],F[c[2]](32,J),new f9)].concat(f,[F[45](50,K[0],K[0],K[0]),u[40](11,w,k)])),(C=Uw.X()).B.apply(C,R[9](66,H)),Y=f),L-c[1])<<c[0]<L&&(L+c[1]&59)>=L&&Mc.call(this,"multiselect"),
Y},function(L,w,J,k,C,D,H,b,V,A,S){if(15<=(A=[17,3,2],L-1)&&27>L-9){for(;k&&k.nodeType!=w;)k=J?k.nextSibling:k.previousSibling;S=k}return(((L>>((L&92)==L&&(C=void 0===C?0:C,S=a[A[2]](14,function(O,f){if(1==(f=["set","n",.9],O.K))return k.K[f[0]](FV,"session"),a[12](97,z[36](21,f[2],k,f[1]),w,O);a[0](62,(D=C<w?6E4:174E4,function(){return a[46](64,2,0,k,++C)}),D),O.K=J})),A[2])&7)==A[2]&&(S=(k?"__wrapper_":"__protected_")+R[27](57,J)+w),(L|40)==L)&&(z[39](47,C),null!=J?u[34](10,k,J):J=void 0,S=N[43](39,
J,C,w)),(L-A[2]|7)>=L&&(L-7^19)<L)&&(H=new XI,D=C(new Date,38)(),b=F[31](A[0],D,1,H),V=F[31](19,mx(),A[1],b),S=z[19](56,V)),S},function(L,w,J){return((L-(J=[6,18,24],J)[0]^J[2])<L&&L-8<<2>=L&&new Q$("/recaptcha/api2/jserrorlogging",void 0,void 0),(L+J[0]^8)>=L&&(L+J[0]^J[1])<L)&&(this.K=[]),w},function(L,w,J,k,C,D){return(L&((2==(L+(D=["K","U",7],4)&14||(this.GI=void 0===J?null:J,this[D[0]]=void 0===w?null:w),L|2)>>3&&(C=k==w?J:k),(L&75)==L)&&(k=R[43](22,a[42](13,v2),pl),C=N[20](D[2],J,function(){return k.match(/[^,]*,([\w\d\+\/]*)/)[w]})),
45))==L&&(this[D[1]]=J,this.B=w,this[D[0]]=k),C},function(L,w,J,k,C,D,H,b,V,A){return L-(17<=((L&(V=[78,11,2],V[0]))==L&&(A=a[V[2]](V[1],function(S,O){if(O=[25,5,"send"],!R[41](39,w,k,VD.X()))return S.return(J);return H=new Ch(z[O[0]](O[1],1,new Vm,C)),S.return(D.K.B[O[2]](H))})),L)-7&&1>((L^V[1])&12)&&(A=a[V[2]](V[1],function(S,O){if((O=["BM",2,"J"],S.K)==k)return a[12](O[1],D.K.B.send(new yu(H)),C,S);if((b=S.B,b)[O[2]]())return S.return(new Ar("",0,tR[b[O[2]]()]||tR[J]));return(d[25](88,w,b[O[0]]()),
D).Y(),S.return(new Ar(b.m3(),b.Jz(),null,b.Ve(),b.J1(),b.KR()?z[19](4,b.KR()):null))})),5)&V[1]||(this.K=w),A}]}(),z=function(){return[function(L,w,J,k,C,D,H,b){return(L|((L&((L-9|(L+1>>(b=[2,35,25],b)[0]<L&&(L+7&46)>=L&&(H=Math.abs(k.x-J.x)<=w&&Math.abs(k.y-J.y)<=w),61))<L&&(L-3^18)>=L&&w.M&&w.M.forEach(J,void 0),b[2]))==L&&(D=[40,4,14],C=k(J(),D[1],29,D[0]),H=0<C?k(J(),D[1],29,D[b[0]])-C:-1),48))==L&&(H=w instanceof ym&&w.constructor===ym?w.K:"type_error:SafeHtml"),(L|88)==L&&(C={},k=void 0===
k?{}:k,z[b[1]](16,w,W2).forEach(function(V,A,S){(S=W2[V],S.DD)&&(A=k[S.V()]||this.get(S))&&(C[S.DD]=A)},J),H=C),H},function(L,w,J,k){return L<<((((J=[32,1,"some"],L>>2)&7)==J[1]&&(k=u[7](19,eU,w)?w:w instanceof ym?g(z[0](52,w).toString()):w instanceof ym?g(z[0](50,w).toString()):g(String(String(w)).replace(vl,z[43].bind(null,J[0])),a[10](3,J[1],0,null,w))),L)-5>>3==J[1]&&(k=Object.values(window.___grecaptcha_cfg.clients)[J[2]](function(C){return C.PM==w})),J)[1]&7||(k=Error("Failed to read varint, encoding is invalid.")),
k},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q){if((L|56)==((((L&15)==(q=["complete",30,2],L)&&(S=new y$,Gn.push(S),D&&S.W.add(q[0],D,!1,void 0,void 0),S.W.add("ready",S.IL,w,void 0,void 0),V&&(S.I=Math.max(J,V)),A&&(S.O=A),S.send(C,H,b,k)),4)==(L<<q[2]&31)&&(C=this,D=N[23](54,w),b=R[4](44,w),H=R[29](32,b[0],this),k=R[29](q[1],b[1],this),J=b.slice(q[2]).map(function(B){return R[29](33,B,C)}),this.K[D]=H[k].apply(H,R[9](65,J))),L-6>>4)||this.xd||(this.xd=!0,this.H()),L)){for((K=(l=[(D.O_=b[J],
1),"unexpected number of binary field arguments: ",3],l[0]),b.length>K)&&"number"!==typeof b[K]&&(c=b[K++],C(D,c));K<b.length;){for(E=(O=b[K++],K+l[0]);E<b.length&&"number"!==typeof b[E];)E++;Y=(A=b[K++],E-K);switch(Y){case J:k(D,O,A);break;case l[0]:(S=d[40](13,J,b,K))?(K++,H(D,O,A,S)):k(D,O,A,b[K++]);break;case q[2]:f=d[40](5,J,b,(P=K++,P)),H(D,O,A,f,b[K++]);break;case l[q[2]]:V(D,O,A,b[K++],b[K++],b[K++]);break;case w:V(D,O,A,b[K++],b[K++],b[K++],b[K++]);break;default:throw Error(l[1]+Y);}}m=D}return 26>
(L^14)&&19<=(L|7)&&(m=J?function(){J().then(function(){w.flush()})}:function(){w.flush()}),m},function(L,w,J,k,C,D){return(L|((C=[23,9,3],L)+C[1]>>4||(k.t7&&J!=k.kd&&F[19](24,w,k,J),k.kd=J),4))&C[2]||(J=this,k=N[C[0]](20,w),null!=this.U?this.U.qj(function(H){return J.K[k]=H}):this.K[k]=0),D},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(2==(L^((L&(f=[28,"constructor",5],(L|40)==L&&(D=["]]\\>",null],u[7](15,If,J)?A=z[11](35,D[0],J.jP()):(J==D[1]?H=w:(J instanceof Zj?C=z[11](19,D[0],z[4](19,J)):(J instanceof
Zj?V=z[11](83,D[0],z[4](20,J)):(J instanceof eH?S=z[11](51,D[0],z[42](4,J)):(J instanceof eH?k=z[11](27,D[0],z[42](6,J)):(b=String(J),k=sx.test(b)?b:"zSoyz"),S=k),V=S),C=V),H=C),A=H),O=A),47))==L&&(J=[4,null,7],this.B=R[23](63,w,1),this.U=2==R[48](f[0],J[1],J[2],w)?"phone-number":"email-address",this.K=new ip,this.K.add(new Ux(u[18](6,0,w,J[0])))),69))>>3){if((k=[!0,10,""],C=J.L(),d)[18](31,w))J.L().placeholder!=J.U&&(J.L().placeholder=J.U);else z[14](24,"submit",k[0],J);F[24](16,"label",C,J.U),R[42](27,
k[2],J)?(D=J.L(),d[22](f[0],"label-input-label",D)):(J.I||J.ae||(D=J.L(),u[22](62,"label-input-label",D)),d[18](f[0],w)||a[0](62,J.D,k[1],J))}return 3==L+((L-3^16)>=L&&(L-9^12)<L&&(O=g('\u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0432\u043e\u043a\u0440\u0443\u0433 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043d\u0430\u0436\u0438\u043c\u0430\u044f \u043d\u0430 \u0443\u0433\u043b\u044b, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0440\u043e\u043b\u0438\u043a\u0435 \u0432\u044b\u0448\u0435. \u0415\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0435 \u0438\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. <a href="https://support.google.com/recaptcha" target="_blank">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\u2026</a>')),
f[2])>>3&&(O=w instanceof Zj&&w[f[1]]===Zj?w.K:"type_error:SafeStyle"),O},function(L,w,J,k,C,D,H,b,V,A,S){if(3==L-3>>(L>>(L+1>>(A=["B",0,"split"],4)||(k[A[0]]||2!=k.K&&k.K!=J||d[20](17,w,k),k.N?(k.N.next=C,k.N=C):(k[A[0]]=C,k.N=C)),2)&7||(R[40](51,w,J),S=J),3)&&!nl)for(C=["+/=","+/","-_=","-_.","-_"],H=A[1],V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),nl={};H<w;H++)for(D=V.concat(C[H][A[2]](J)),kf[H]=D,b=A[1];b<D.length;b++)k=D[b],void 0===nl[k]&&(nl[k]=b);return(L|
40)==L&&(S=w?w:Array.prototype.fill),S},function(L,w,J,k,C,D){return((L+(C=[22,1,10],2)^C[0])>=L&&(L+C[1]&20)<L&&(J=void 0===J?new AM:J,w.K=J),(L&126)==L)&&(k=d[35](34,0,w).client,D=a[24](C[2],J,k.U)),D},function(L,w,J,k,C,D,H){return(L-(((D=[1,"U",2],(L>>D[2]&7)==D[2])&&(C=String.fromCharCode.apply(w,J),H=k==w?C:k+C),L-7&7)==D[0]&&(J=[null,0,!1],this.K=J[D[0]],this[D[1]]=J[0],this.O=J[D[2]],this.B=J[D[0]],this.I=J[D[0]],F[13](28,J[D[0]],this,w)),6)|23)>=L&&(L-8^22)<L&&(H={type:w,data:void 0===J?
null:J}),H},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){if(((L&((L&(3==(L>>1&((L|40)==(K=[106,50,"length"],L)&&(Y=a[2](33,function(c,P){return w=(P=["C",8,255],a)[15](4),c.return({T:P[0]+w,z9:a[41](P[1],25,P[2],w)})})),15))&&(this.NO(!1),(J=!w.selected)?(u[22](61,"rc-prepositional-selected",w.element),d[19](39,1,w.index,this.K)):(d[22](41,"rc-prepositional-selected",w.element),this.K.push(w.index)),w.selected=J,F[24](80,"checked",w.element,w.selected?"true":"false")),29))==L&&(this.K=function(){return 0}),
K[0]))==L&&(Y=k(J(),34,K[2])),L-2<<1)>=L&&(L-1^25)<L){if(F[13](57,(S=w,A=u[20](96),C)))V=/Windows (?:NT|Phone) ([0-9.]+)/,S=(E=V.exec(A))?E[k]:"0.0";else if(a[34](7,"iPod"))V=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,S=(D=V.exec(A))&&D[k].replace(/_/g,".");else if(F[44](28,C))V=/Mac OS X ([0-9_.]+)/,S=(b=V.exec(A))?b[k].replace(/_/g,"."):"10";else if(N[2](K[1],u[20](80).toLowerCase(),J))V=/(?:KaiOS)\/(\S+)/i,S=(O=V.exec(A))&&O[k];else if(d[42](21,C))V=/Android\s+([^\);]+)(\)|;)/,S=(H=V.exec(A))&&H[k];
else if(z[48](27,C)?"Chrome OS"===jc.platform:N[38](58,"CrOS"))V=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,S=(f=V.exec(A))&&f[k];u[12](21,w,12,S||w)}return Y},function(L,w,J,k,C,D,H,b,V,A,S){return 2==((L&121)==((L|((A=[1,"f1",41],0<=(L|7)>>3&&16>(L|A[0]))&&(this[A[1]]=null,this.K=new kH,this.B=z[8].bind(null,A[2]),this.U=this.N=!1),56))==L&&(b=[4,"","6d"],(H=a[2](18,d[15](19,J),0))?(C=new xf(new P5,d[0](9,8,0,H+b[2])),C.reset(),C.B(k),D=C.U(),V=d[A[0]](36,w,D).slice(0,b[0])):V=b[A[0]],S=V),L)&&(N[36](4,
null,C,k),D.length>w&&(C.U=J,C.K.set(R[37](57,k,C),F[14](64,w,D)),C.B+=D.length)),(L|6)>>3)&&(this.FL=function(O){O[w-1]=k.toJSON()},this.TI=function(){return J},this.K=function(){return k}),S},function(L,w,J,k,C,D,H,b,V,A,S,O){if((S=["prototype","call",4],14<=L-S[2])&&21>L>>1)d[44](67,(w|0)&-51,J);if(2<=L+5>>3&&2>((L^74)&16))M[S[1]](this,w);if((L-6|23)>=L&&(L+9^26)<L){for(b=d[49](79,(A=Array[S[0]].slice[S[1]](k),k)),V=D?!!(b&16):void 0,H=0;H<A.length;H++)A[H]=u[44](2,w,J,A[H],V,C);O=(J(b,A),A)}return(L&
107)==L&&(D=N[37](1,null,"end",k,J?r9:Le),N[43](27,u[0](28,k),D,w,x(function(){F[31](61,this.L(),"overflow","visible")},k)),N[43](30,u[0](26,k),D,"finish",x(function(){J||F[31](51,this.L(),"overflow",""),C&&C()},k)),O=D),O},function(L,w,J,k,C,D,H,b){if((L&(b=["B","K",7],75))==L){if((this.C=(iJ.call(this),J)||10,this.P=w||0,this.P)>this.C)throw Error("[goog.structs.Pool] Min can not be greater than max");(this.l=(this.delay=(this[this[b[1]]=new wx,b[0]]=new J0,0),null),this).N()}return 1==(L-((0<=
(((L|40)==L&&(J.N&&J.N.O&&(C=J.gI,D=J.N.O,C in D&&delete D[C],u[4](2,w,J.N.O,k,J)),J.gI=k),L<<1)&3)&&19>(L|b[2])&&M.call(this,w,-1,kK),L|88)==L&&(this[b[1]]=J,this[b[0]]=w),2)&b[2])&&(H=J.replace(/<\//g,"<\\/").replace(/\]\]>/g,w)),H},function(L,w,J,k,C,D,H,b,V){if((L+8^27)<(((L^(b=["K",10,4],47))>>b[2]||(V=w instanceof Cg&&w.constructor===Cg?w[b[0]]:"type_error:TrustedResourceUrl"),L-8|13)>=L&&L+9>>1<L&&M.call(this,w),L)&&L-5<<2>=L){if(J.size!=J[b[0]].length){for(k=C=0;k<J[b[0]].length;)H=J[b[0]][k],
d[6](b[1],J.B,H)&&(J[b[0]][C++]=H),k++;J[b[0]].length=C}if(J.size!=J[b[0]].length){for(C=k=0,D={};k<J[b[0]].length;)H=J[b[0]][k],d[6](13,D,H)||(J[b[0]][C++]=H,D[H]=w),k++;J[b[0]].length=C}}return V},function(L,w,J,k,C,D,H,b,V,A,S){if(A=["a7","reduce",32],(L-2^8)>=L&&(L-4^14)<L){for(D=[],H=k||0;H<C.length;H+=J)d[19](16,w,D,C[H],C[H+1]);S=D.join("&")}if((L+((L&43)==L&&27==w.keyCode&&("keydown"==w.type?this[A[0]]=this.L().value:"keypress"==w.type?this.L().value=this[A[0]]:"keyup"==w.type&&(this[A[0]]=
null),w.preventDefault()),8)^25)>=L&&(L+3^18)<L){if(!(J=(w=void 0===w?d[15](1,0):w,window.___grecaptcha_cfg.clients[w]),J))throw Error("Invalid reCAPTCHA client id: "+w);S=N[11](12,J.id).value}return(L-((L+9^31)<L&&(L-3|7)>=L&&(S=R[28](60,R[11](56,w),J.map(function(O){return F[34](12,O)}))),9)|6)<L&&(L+1&50)>=L&&(V=H.C.concat(z[40](26,!1,D,C))[A[1]](function(O,f){return O^f}),b=a[17](17,w,k,V,R[23](A[2],D,w)),S=F[10](9,J,Ce,N[42](2,b))),S},function(L,w,J,k,C,D){return(1==(L-2>>(D=[41,"Y","HH"],4)||
(J=Dt,C=w=function(H){return J.call(w.src,w.listener,H)}),L-4&7)&&(iJ.call(this),this.ww=new HZ(0,bd,1,10,5E3),d[13](44,this.ww,this),R[35](D[0],"ready",this.ww,function(H,b,V){(H[b=H.id.lastIndexOf("withTrustTokens-",(V=[0,"l7",58],V)[0])==V[0],V[1]].M={type:""},b)&&(N[2](V[2],H.id,"issue")?H[V[1]].M={type:"token-request"}:N[2](59,H.id,"redeem")&&(H[V[1]].M={type:"token-redemption",issuer:"https://recaptcha.net",fH:"none"}))}),this[D[2]]=0),(L&124)==L&&!k[D[1]]&&k.K)&&k.L().form&&(R[46](53,k.K,k.L().form,
w,k.ob),k[D[1]]=J),C},function(L,w,J,k,C,D,H,b,V,A,S){return(L^(((L-7|20)>=(A=[10,0,97],(L&50)==L&&(J=[null,9,!1],I.call(this),this.l=w||d[26](23,J[1]),this.B=J[A[1]],this.gI=J[A[1]],this.N=J[A[1]],this.M=J[A[1]],this.kz=jj,this.O=J[A[1]],this.G=void 0,this.t7=J[2]),L)&&(L+1&62)<L&&(k=VD.X().get(),S=u[16](A[2],J,w,k,A[0])),L-7)&12||(D=[0,17,4],b=k(J(),D[2]),C(b,A[0])&&(V=C(b,A[0])(N[43](12,9878,D[1])))&&V[D[A[1]]]&&(H=k(V[D[A[1]]],46)||""),S=u[9](39,1441)(H)),27))>>4||(100<=k.K.length&&(k.K=[R[16](26,
w,d[35](25,"[",k.K)).toString()]),k.K.push(J)),S},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){if((K=["isArray",1,4],L|48)==L){if(Vw())for(;w.lastChild;)w.removeChild(w.lastChild);w.innerHTML=z[0](51,J)}if(((L&120)==L&&(Y=a[2](33,function(c,P,l){P=[5,(l=[0,"avrt","U"],"verifyAccount request failed."),null];switch(c.K){case 1:if(!D[l[2]])throw Error("could not contact reCAPTCHA.");if(!D.B)return c.return(a[18](68,C));if("string"!==typeof H||6!=H.length)return c.return(a[18](69,k));return(c[l[2]]=C,a)[12](34,
D[l[2]],k,c);case k:R[35]((E=c.B,52),l[0],c,w);break;case C:throw R[27](12,P[2],c),Error("could not contact reCAPTCHA.");case w:return f={},S={pin:H},V=(f[l[1]]=D.K,f.response=u[33](8,w,JSON.stringify(S),w),f),c[l[2]]=P[l[0]],a[12](33,E.send("s",V,1E4),7,c);case 7:return b=c.B,A=new Ix(b),O=A.J(),D.K=R[23](31,A,C),D.K&&O!=C&&6!=O&&O!=J||(D.B=!1),A.J1()&&d[33](57,"recaptcha::2fa",A.J1(),l[0]),c.return(a[18](66,O,A.N()));case P[l[0]]:throw R[27](37,P[2],c),Error(P[1]);}})),10<=(L|K[2]))&&27>(L|K[2])){if(Array[K[0]](k))for(O=
0;O<k.length;O++)z[16](18,w,J,k[O],C,D,H);else A=C||w.handleEvent,V=F[39](52,D)?!!D.capture:!!D,E=H||w.D||w,A=R[33](5,A),b=!!V,S=R[29](17,J)?F[21](25,0,J.W,E,A,b,String(k)):J?(f=N[46](40,J))?F[21](29,0,f,E,A,b,k):null:null,S&&(d[32](K[1],S),delete w.W[S.key]);Y=w}if((L-7|49)>=L&&(L+3^32)<L)a:switch(H=[61,224,91],D){case H[0]:Y=C;break a;case k:Y=J;break a;case w:Y=189;break a;case H[K[1]]:Y=H[2];break a;case 0:Y=H[K[1]];break a;default:Y=D}return((L^62)&14)==K[2]&&(this.B=w,this.K=void 0===J?null:
J,this.yt=void 0===C?!1:C,this.DD=void 0===k?null:k),Y},function(L,w,J,k,C,D,H,b,V,A,S){if((L&(((((L^31)>>(A=["B",!0,"subarray"],3)||(b=["=.",0,2],C=k.length,D=C*J/w,D%J?D=Math.floor(D):N[2](58,b[0],k[C-1])&&(D=N[2](55,b[0],k[C-b[2]])?D-b[2]:D-1),H=new Uint8Array(D),V=b[1],Lh(64,b[1],k,function(O){H[V++]=O}),S=V!==D?H[A[2]](b[1],V):H),L)^53)&12||(k=["ds","POST","c"],Gz.call(this,N[28](15,"api2","replaceimage"),a[35](15,0,A0),k[1]),N[2](25,w,this,k[2]),N[2](20,JSON.stringify(J),this,k[0])),L&54)==
L&&(this[A[0]]=J,this.K=w),71))==L)a:{for(k in J){S=w;break a}S=A[1]}return S},function(L,w,J,k,C,D,H,b,V){if((b=["I","U",13],19>(L|3)&&5<=(L<<2&15)&&M.call(this,w),L&108)==L)for(C.B=0,H=N[28](59,z[b[2]](16,J,0,w,2,k,C),J,rZ),C[b[1]]=new Sj(C.M);0<=C.B&&C.B<H.length;){D=H[C.B];try{C[b[0]][R[48](24,null,J,D)].call(C,D)}catch(A){C.Pa(D);break}C.B++}if(4==(L^6)>>4&&(u[10](16,J),this.f1=w,null!=w&&0===w.length))throw Error("ByteString should be constructed with non-empty values");return((4==(L<<1&15)&&
(V=R[1](51,w,J,C,k)),L)&81)==L&&(C=void 0===C?{}:C,V=a[2](14,function(A,S,O){if(A.K==(O=(S=[0,2,"a"],[1,null,!1]),O)[0]){if((D=(k.U.eS(O[2]),k).B,k.B)==J){A.K=S[O[0]];return}return a[12](34,(k.B=w,k.U.hz()),S[O[0]],A)}A.K=(D==S[2]?d[10](36,S[0],k,C):"c"!=D&&k.M.then(function(f){return f.send(J)},F[47].bind(O[1],3)),S[0])})),V},function(L,w,J,k,C,D,H,b,V,A){if(!((A=[46,8,40],L)<<2&7)){Oz=!0;try{V=JSON.stringify(w.toJSON(),F[A[2]].bind(null,10))}finally{Oz=!1}}return L+7>>(L-5<<1>=L&&(L-A[1]^11)<L&&
(OI.call(this,C),this.type="key",this.keyCode=w,this.repeat=k),2)<L&&(L-7|21)>=L&&(b=[10,"api2",1],H.K.tabindex=String(F[11](38,b[0],0,D)),H.K.src=d[4](12,b[1],"cb",C,new Oe(H.K[k])),N[16](16,"src",w,"style","c-",H.K,H.B,D.B),F[A[0]](4,b[2],"bubble",D.B)&&R[35](41,"click",F[A[0]](6,b[2],"bubble",D.B),function(){this.M(new Yy(!1))},J,D)),V},function(L,w,J,k,C,D,H,b,V,A){if(13<=(V=[28,43,0],L>>1&15)&&7>(L>>2&8)&&(C=[null,"]",4],k.K&&"undefined"!=typeof MR&&(!k.D[1]||F[V[0]](29,k)!=C[2]||2!=k.jS())))if(k.l&&
F[V[0]](V[0],k)==C[2])a[V[2]](63,k.kd,V[2],k);else if(d[41](7,"readystatechange",k),F[V[0]](1,k)==C[2]){k.K=!1;try{if(k.nc())d[41](4,"complete",k),d[41](4,"success",k);else{k.U=6;try{D=2<F[V[0]](25,k)?k.o.statusText:""}catch(S){D=w}d[30](56,J,!0,(k.N=D+" ["+k.jS()+C[1],k))}}finally{u[V[1]](36,C[V[2]],k)}}if(((L-2^6)>=L&&(L+5&55)<L&&(C=z[15](75,14,null),this.K=k,this.U=C,this.B=J,this.HK=w),27)>L<<1&&7<=L<<1)a:{if((C=[".","","9.0"],u)[24](18)&&"Silk"!==J){if((D=jc.brands.find(function(S){return S.brand===
J}),!D)||!D.version){A=NaN;break a}H=D.version.split(C[V[2]])}else{if((k=z[32](2,C[1],C[2],"10.0",w,J),"")===k){A=NaN;break a}H=k.split(C[V[2]])}A=0===H.length?NaN:Number(H[V[2]])}if((L&89)==L)a:{for(H=(b=[k==typeof globalThis&&globalThis,C,k==typeof window&&window,k==typeof self&&self,k==typeof global&&global],J);H<b.length;++H)if((D=b[H])&&D[w]==Math){A=D;break a}throw Error("Cannot find global object");}return A},function(L,w,J,k,C,D){return 10<=(L+9>>(D=[1,16,"MO"],D[0])>=L&&L-8<<2<L&&w&&"function"==
typeof w[D[2]]&&w[D[2]](),L|3)&&5>(L|8)>>5&&(k=[4,"%",0],J=w.charCodeAt(k[2]),C=k[D[0]]+(J>>k[0]&15).toString(D[1])+(J&15).toString(D[1])),C},function(L,w,J,k,C,D,H,b,V){if(V=[13,24,.5],(L&105)==L)if("string"===typeof k)b={buffer:z[17](V[1],J,w,k),RD:!1};else if(Array.isArray(k))b={buffer:new Uint8Array(k),RD:!1};else if(k.constructor===Uint8Array)b={buffer:k,RD:!1};else if(k.constructor===ArrayBuffer)b={buffer:new Uint8Array(k),RD:!1};else if(k.constructor===F8)b={buffer:F[15](4,J,w,k)||d[11](32),
RD:!0};else if(k instanceof Uint8Array)b={buffer:new Uint8Array(k.buffer,k.byteOffset,k.byteLength),RD:!1};else throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");if((12<=(L>>1&14||(w=['"',null,"audio-response"],mC||gT||o9||R9?U.call(this,ak.width,ak.height,"audio",!0):U.call(this,fe.width,fe.height,"audio",!0),this.F=w[1],this.D=mC||gT||o9||R9,this.K=w[1],this.U=new vL(""),z[11](44,w[0],this.U,w[2]),
d[V[0]](44,this.U,this),this.P=new t$,d[V[0]](44,this.P,this),this.C=w[1]),L>>2&V[0])&&9>(L+8&16)&&(H=k?J.U.left-10:J.U.left+J.U.width+10,C=F[V[1]](4,w,J.gI()),D=J.U.top+J.U.height*V[2],H instanceof Kg?(C.x+=H.x,C.y+=H.y):(C.x+=Number(H),"number"===typeof D&&(C.y+=D)),b=C),L&30)==L)for(C in w)J.call(k,w[C],C,w);return b},function(L,w,J,k,C,D,H,b,V,A){if((L|56)==(((((V=[68,"capture",46],3!=(L>>1&15)||ud)||(u[26](1,function(S){return xw.add(S)},function(S){return S.qO.origin}),ud=new wV,R[V[2]](52,
ud,u[32](52),"message",function(S,O,f,E,K){for(E=(f=u[2](7,uJ.values()),f.next());!E.done;E=f.next())K=E.value,(O=K.filter(S))&&K.h0(O)})),L+7)&28)>=L&&(L-3|8)<L&&M.call(this,w,-1,Ez),(L&37)==L)&&(k=a[36](42,J,w),A=null==k?k:!!k),L))if(Array.isArray(C)){for(b=0;b<C.length;b++)z[23](60,null,J,k,C[b],D,H);A=w}else J=R[33](2,J),A=R[29](14,k)?k.W.add(String(C),J,!0,F[39](V[0],D)?!!D[V[1]]:!!D,H):N[3](4,!1,D,C,k,!0,H,J);return(L^40)>>3||(this.K=new Tz,this.size=0),A},function(L,w,J,k,C,D,H,b,V){return L>>
(((V=[18,"K",32],L)-8|V[0])>=L&&(L+4^14)<L&&(b=u[3](1,0,w,!0)?J(gx):F[37](26,w,function(A,S,O,f){S=Object[(f=["prototype","toJSON","JSON"],f)[0]][f[1]],O=Array[f[0]][f[1]];try{return delete Array[f[0]][f[1]],delete Object[f[0]][f[1]],J(A[f[2]])}finally{O&&(Array[f[0]][f[1]]=O),S&&(Object[f[0]][f[1]]=S)}})),(L+2^V[0])<L&&L-8<<1>=L&&(H=this,D=N[23](70,w),J=R[4](56,w),k=R[29](30,J[0],this),C=J.slice(1).map(function(A){return R[29](68,A,H)}),this[V[1]][D]=u[V[2]](20)[k].apply(u[V[2]](44),R[9](3,C))),
1)&13||(w[V[1]].U="timed-out"),b},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q){if((L&106)==((L-6^21)<(m=[1,2,31],L)&&(L-9|25)>=L&&(q=J.nc()||k.U&&J.jS()==w),L))if(8192>=J.length)q=String.fromCharCode.apply(w,J);else{for(C=(k="",0);C<J.length;C+=8192)k+=String.fromCharCode.apply(w,Array.prototype.slice.call(J,C,C+8192));q=k}return((L-8|(13<=(L|8)&&26>(L^63)&&(q=/^[\s\xa0]*$/.test(w)),19))>=L&&(L+m[1]&46)<L&&(Y=[32,6,1],f=J(),b=new wt,O=k(f,11),D=F[m[2]](17,O,5,b),E=k(f,26),C=F[m[2]](16,E,4,
D),c=k(f,Y[0]),l=F[m[2]](19,c,Y[m[0]],C),H=k(f,5,20),A=F[m[2]](12,H,m[1],l),V=k(f,5,42),P=F[m[2]](20,V,Y[m[1]],A),K=k(f,5,16),S=F[m[2]](16,K,3,P),q=z[19](m[1],S)),(L>>m[0]&11)==m[1])&&(q=a[46](45,w,k,G8,J)),q},function(L,w,J,k,C,D,H,b,V,A,S,O){return 9<=((L|((L-(L>>(2<=(S=[26,1,25],L<<2&6)&&(L^31)>>4<S[1]&&(C=F[27](41,S[1],w,mx()),O=function(f,E){return{vi:(f=F[13]((E=[72,"concat",1],E)[0],E[2],255,J+C()),k[E[1]](f)).reduce(function(K,Y){return K^Y}),HK:f}}),S[1])&15||(b=X8,V=new JW,V.B=function(f,
E){return a[2](38,function(K,Y,c){c=[1,5,(Y=[null,'"',"number"],4)];switch(K.K){case c[0]:if(K.U=(E=Y[0],2),V.K.K()==k){K.K=c[2];break}return a[12](2,d[24](21,k,b,D),c[1],K);case c[1]:if(E=K.B,E!=Y[0])return"string"!=typeof E||E.includes(Y[c[0]])||E.includes(J)?typeof E==Y[2]?E=""+E:E instanceof co?(E=E.K,V.N=w):E=z[24](43,!1,function(P){return P.stringify(E)}):E=Y[c[0]]+E+Y[c[0]],K.return(A(f,E));case c[2]:R[35](49,k,K,3);break;case 2:R[27](69,Y[0],K),V.U=w;case 3:return K.return(z[8](43,f))}})},
A=function(f,E){return a[2](36,function(K,Y){return 1==(Y=[2,41,4],K).K?a[12](82,H(E,f),Y[0],K):K.return({T:K.B,z9:a[Y[1]](Y[2],C,255,E)})})},V.K=R[S[2]](37,200),O=V),7)|55)<L&&(L-4^6)>=L&&(H=["/m/0k4j","/m/04w67_","TileSelectionStreetSign"],C=["TileSelectionStreetSign","/m/0k4j","/m/04w67_"],"/m/0k4j"==z[40](51,u[42](9,k.kd,J,k$),J)&&(C=H),D=a[42](8,"rc-imageselect-desc-wrapper"),d[42](74,D),d[49](S[0],D,R[14].bind(null,13),{label:C[k.K.length-J],Si:"multiselect"}),z[27](S[0],w,k)),9))&12)&&19>(L^
33)&&(k=R[23](18,"http",0,u[29](36,"api2","bframe"),w,new Map([[["q","g","d","j","i"],J.C]]),J),k.catch(function(){}),O=k),O},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P){if(((((L&75)==(P=[63,"C",39],L)&&(C=J.type,C in k.K&&d[19](31,w,J,k.K[C])&&(d[P[2]](20,null,J),0==k.K[C].length&&(delete k.K[C],k.B--))),(L|64)==L)&&(this.response=J,this.timeout=w,this.error=void 0===k?null:k,this.U=void 0===H?null:H,this.B=void 0===D?null:D,this.K=void 0===C?null:C),L)|24)==L&&(b=["px",0,10],S=a[42](11,"rc-imageselect-desc",
J[P[1]]),A=a[42](11,"rc-imageselect-desc-no-canonical",J[P[1]]),H=S?S:A)){for(D=((C=u[f=R[22](2,(V=R[25](P[0],(k=R[25](56,"STRONG",(O=a[42](10,"rc-imageselect-desc-wrapper",J[P[1]]),H)),"SPAN"),H),J.I)).width-w*R[41](10,b[2],O,"padding").left,S&&(f-=u[37](20,a[42](13,"rc-imageselect-candidates",J[P[1]])).width),37](30,O).height-w*R[41](11,b[2],O,"padding").top+w*R[41](9,b[2],H,"padding").top,H.style).width=z[37](38,b[0],f),b[1]);D<k.length;D++)z[42](73,b[0],k[D],-1);for(E=b[1];E<V.length;E++)z[42](72,
b[0],V[E],-1);z[42](40,b[0],H,C)}return(L&53)==L&&(E=w,K=[1,!1,13],D=[],f=new Cr,z[23](5,VD.X().get(),K[2])?(Y=u[19](1),b=Y.K,H=[],E=R[23](33,b,K[0]),D=z[40](2,K[1],b,2),C.Qe=function(l){try{H.push(globalThis[l[0]](l)),H.length>=Y.B&&f.resolve(H)}catch(m){f.resolve(H)}},a[0](60,function(){f.resolve(H)},z[15](76,14,null))):f.resolve([]),A=Dr(a[15](96),R[25](P[2])).then(function(l,m){return a[2](14,function(q,B){if(1==(B=[28,12,"N"],q).K)return a[B[1]](65,C[B[2]].send("a",new H$(z[19](B[0],VD.X().get()),
E,D)),2,q);return(l.FL((m=q.B,m.i7)),q).return(m)})}),V=F[26](2,0,[A,d[1](2,J,4,K[1],K[0]),ba(a[15](4),void 0,void 0,A,C.K.O),js(),V7(),AW(),f.promise]).then(function(l,m,q,B,h,T,e,p,v,n,X){return(p=(X=(v=(m=(n=(B=(h=(T=u[2](6,l),T).next().value,T.next().value),T).next().value,T.next()).value,T.next().value),T.next().value),T).next().value,a)[2](14,function(W5,$c,XW,NK,Yw,cd,we,Pd,ox,dZ,$q,IJ,lS,aJ,J$,ec,jv){return(ox=(cd=(Yw=(we=(Pd=(XW=(NK=(aJ=(J$=(IJ=((((q=(e=z[jv=[20,(C.S=(ec=[0,"a",6],h.GI),
36),"call"],9](59,1,ec[1],N[jv[0]](82,2)),2)*u[15](14,ec[0],"d"),C).vM&&--q,n).FL(h.i7),m).FL(h.i7),v.FL(h.i7),X.FL(h.i7),W5.return),new dA(h.i7)),$q=N[18](12,5,e,J$),F)[31](16,q,ec[2],$q),F[31](13,B,J,aJ)),a)[15](jv[1]),dZ=N[18](10,19,XW,NK),N[jv[0]](7,ec[0],u[9](50,4428))),F)[31](19,Pd,65,dZ),N[jv[0]](3,null,C.ZD)),lS=a[46](44,73,Yw,Ss,we),$c=new O8(p),a[46](46,74,$c,O8,lS)),a[46](44,47,k,TW,cd)),IJ)[jv[2]](W5,z[19](2,ox))})}),O=V.then(function(l,m,q){return(m=F[0]((q=[5,"execute","N"],q)[0]).call(492,
29),C.K)[q[2]][q[1]](function(B){C.K[B=["M",0,11],B[0]]||d[B[2]](41,B[1],1,l,[M5,m])}).then(function(B){return B},function(){return null})}),S=new Z$(function(l,m){(m=[72,"Z",48],C[m[1]]).isEnabled()||l(w),z[45](m[0],C[m[1]],function(q){"error"==q.type?l(w):"finish"==q.type&&l(q.data)}),R[m[2]](6,"start",1E3,C[m[1]],C.K.l)}),c=F[26](14,0,[V.then(function(l){return w+R[16](16,5,l)}),O,S,V.then(function(l,m,q){return(q=["0","M",24],C.K[q[1]])?m=Promise.resolve(N[17](19,3,a[q[2]](8,256,a[41](56,12,l),
xq),q[0])):m=w,m})])),c},function(L,w,J,k,C,D){if(1>(L>>1&((L^60)&((C=[4,2,"VO"],(L-7^31)>=L)&&(L+C[0]^12)<L&&(this.K=new Map,this.B=w||null),C[0])||(J={},w[C[2]]=void 0===J[C[2]]?!1:J[C[2]]),C[0]))&&(L<<C[1]&7)>=C[1])if("function"==typeof J.MO)J.MO();else for(k in J)J[k]=w;return D},function(L,w,J,k,C,D,H){return(L^(((D=[0,7,"K"],(L|1)&14||(k=R[4](16,w),C=R[29](30,k[D[0]],this),J=R[29](36,k[1],this),u[32](56)[C]=J),L)&108)==L&&M.call(this,w),35))&D[1]||(this.O=D[0],this.N=D[0],this.I=D[0],this.B=
D[0],this[D[2]]=D[0],this.U=w),H},function(L,w,J,k,C,D,H){if((((L^5)>>(L<<(H=[7,2,1],H[2])&H[0]||(J.M=C?N[13](16,w,k):k,D=J),4)||(D=N[18](30,w,k,J)),L)|24)==L&&(D=w),3==(L-8&23))a:{J=z8;try{D=J.contentWindow||(J.contentDocument?u[32](48,J.contentDocument):null);break a}catch(b){}D=w}return D},function(L,w,J,k,C,D,H,b,V){return 1==((L|(1>(((((V=[3,45,9],L)+4^12)>=L&&(L-6|37)<L&&(D.I.push([k,C,H]),D.U&&F[V[1]](2,J,w,D)),L<<1)&7)>=V[0]&&(L^86)<V[2]&&u[12](60,w,k,2,J)&&a[32](36,1,2,k,J),(L|1)>>4)&&L<<
1>=V[0]&&k.K.B.send(J).then(w,k.U,k),1))&15)&&(D=["rc-imageselect-target",600,"rc-imageselect-carousel-instructions"],u[22](57,"rc-imageselect-carousel-leaving-left",a[15](89,1,J,d[25](27,k,D[0]))),k.P>=k.K.length||(H=k.WM(k.K[k.P]),k.P+=1,C=k.A7[k.P],u[41](49,null,100,J,D[1],k,H).then(x(function(A,S){(((S=[1,(A=a[42](11,"rc-imageselect-desc-wrapper"),90),55],d)[42](73,A),d)[49](27,A,N[34].bind(null,S[0]),{label:z[40](S[2],C,S[0]),Si:"multicaptcha",GT:z[40](51,C,w)}),F)[41](7,A,d[13](S[1],A.innerHTML.replace(".",
""))),z[27](24,2,this)},k)),N[38](43,k,"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),d[22](56,"rc-imageselect-carousel-instructions-hidden",a[42](V[2],D[2])))),(L|V[0])>>V[0]==V[0]&&(w.k6=void 0,w.X=function(){return w.k6?w.k6:w.k6=new w}),b},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m){if(!(l=["K",1,"exec"],L-2>>3))a:if(P=["Silk",0,"OPR"],A=u[20](80),"Internet Explorer"===D){if(F[12](36,"MSIE"))if((E=/rv: *([\d\.]*)/[l[2]](A))&&E[l[1]])H=E[l[1]];else{if((K=/MSIE +([\d\.]+)/[S=
w,l[2]](A))&&K[l[1]])if(O=/Trident\/(\d.\d)/[l[2]](A),"7.0"==K[l[1]])if(O&&O[l[1]])switch(O[l[1]]){case "4.0":S="8.0";break;case C:S=J;break;case "6.0":S=k;break;case "7.0":S="11.0"}else S="7.0";else S=K[l[1]];H=S}else H=w;m=H}else{for(b=(V=[],RegExp)("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");f=b[l[2]](A);)V.push([f[l[1]],f[2],f[3]||void 0]);c=F[3](40,P[l[1]],w,l[1],V);switch(D){case "Opera":if(u[15](45,"Opera")){m=c(["Version","Opera"]);break a}if(u[24](16)?a[25](2,!1,"Opera"):N[38](2,
P[2])){m=c(["OPR"]);break a}break;case "Microsoft Edge":if(d[21](l[1],"Edge")){m=c(["Edge"]);break a}if(d[2](72,!1,"Edg/")){m=c(["Edg"]);break a}break;case "Chromium":if(z[39](34,"CriOS")){m=c(["Chrome","CriOS","HeadlessChrome"]);break a}}m="Firefox"===D&&a[8](66,"FxiOS")||"Safari"===D&&F[35](10,P[2],"Safari")||"Android Browser"===D&&u[35](4,P[0],"Opera")||"Silk"===D&&N[38](58,P[0])?(Y=V[2])&&Y[l[1]]||w:w}return(2<=(L>>(L<<2&13||(XP.call(this),this.C=d[13](54,"recaptcha-token",document),this.BK=kG[w]||
kG[l[1]],this.P=k,this.I=J,this.D=C),l)[1]&7)&&15>(L^63)&&(this.U=void 0===C?!1:C,this.GI=void 0===J?null:J,this.B=void 0===k?null:k,this[l[0]]=void 0===w?null:w),(L+2^31)>=L)&&(L+5&44)<L&&(m=a[2](12,function(q,B,h){h=[5,1,(B=[2,4,9],2)];switch(q.K){case h[1]:V=J,H=C;case B[0]:if(!(3>H)){q.K=B[h[1]];break}if(!(H>C)){q.K=h[0];break}return a[12](33,d[34](h[1],1E3,J),h[0],q);case h[0]:return q.U=7,a[12](81,N[40](h[1],!1,w,"loaded",k,D),B[h[2]],q);case B[h[2]]:return q.return(q.B);case 7:V=b=R[27](44,
J,q);case 3:q.K=B[0],H++;break;case B[h[1]]:throw V;}})),m},function(L,w,J,k,C,D,H,b,V,A,S,O,f){if(2>(((((f=[1,23,"U"],L)|f[0])&7)==f[0]&&(O=a[2](13,function(E,K,Y){if(K=[0,(Y=["K","qO","B"],"y"),!1],E[Y[0]]==w)return H=k[Y[1]],a[12](49,F[35](8,2,K[0],w,K[2],H.data),2,E);if((b=(A=(V=(D=E[Y[2]],D[Y[0]]),D).message,D.messageType),b)==J||b==K[1])V&&C[Y[2]].has(V)&&(b==J?C[Y[2]].get(V).resolve(A):C[Y[2]].get(V).reject(A),C[Y[2]]["delete"](V));else if(C.U.has(b))S=C.U.get(b),(new Promise(function(c){c(S.call(C.N,
A||void 0,b))})).then(function(c){z[37](43,1,c||null,C,J,V)},function(c){z[37](40,1,(c=c instanceof Error?c.name:c||null,c),C,"y",V)});else z[37](42,1,null,C,K[1],V);E[Y[0]]=K[0]})),L)|2)>>4&&(L^10)>>3>=f[0]){if(!(Ow.call(this),Array).isArray(w)||!Array.isArray(J))throw Error("Start and end parameters must be arrays");if(w.length!=J.length)throw Error("Start and end points must be the same length");this[f[this.duration=k,this.coords=(this.progress=0,[]),this.D=J,2]]=w,this.l=C}return(L+4^25)<L&&(L-
3^3)>=L&&(C=N[f[1]](38,w),D=R[4](16,w),k=R[2](29,this,D[0]),J=R[2](13,this,D[f[0]]),this.K[C]=k-J),O},function(L,w,J,k,C,D,H,b,V,A,S){if(((L|(1==((A=[4,0,"wholeText"],L)-A[0]&5)&&(S="string"==typeof k.className?k.className:k.getAttribute&&k.getAttribute(J)||w),16))==L&&(S=d[14](5,w.name,w.id)),L-9|43)<L&&(L+6^29)>=L){if(C=void 0===(H=[5,0,3],C)?!1:C){if(D&&D.attributes&&(z[15](17,H[A[1]],D.tagName,k),"INPUT"!=D.tagName))for(b=J;b<D.attributes.length;b++)z[15](21,H[A[1]],D.attributes[b].name+w+D.attributes[b].value,
k)}else for(V in D)z[15](19,H[A[1]],V,k);if(D.nodeType==H[2]&&D[A[2]]&&z[15](20,H[A[1]],D[A[2]],k),1==D.nodeType)for(D=D.firstChild;D;)z[34](1,":",H[1],k,C,D),D=D.nextSibling}return S},function(L,w,J,k,C,D,H,b){if(!(L-6>>(b=["e8",1,49],(L&107)==L&&(XP.call(this,w),this.K=null,this.U=d[13](53,"recaptcha-token",document)),4))){for(C in D=(k=[],w),J)k[D++]=C;H=k}return((L+((L|24)==L&&(J=new a5,k=d[34](b[2],8,J,v5,b[1],pg),w=N[18](11,2,b[0],k),H=z[19](56,w)),3)>>b[1]<L&&(L+b[1]&78)>=L&&M.call(this,w),
L)|48)==L&&(H=!!(J.XL&w)&&!!(J.L1&w)),H},function(L,w,J,k,C,D,H,b,V,A,S){return(((A=[34,14,8],L&62)==L&&(ge.call(this,w,J),this.id=k,this.l7=C),(L-2|18)<L&&(L+A[2]^18)>=L)&&(S=new fr(J,w)),(L-4^28)<L)&&(L-3^A[1])>=L&&(H=void 0===H?!0:H,S=a[2](A[0],function(O){return(V=J.U.then(x(function(f,E){return el(R[47](18),R[25](40),void 0,f).then(function(K,Y,c,P,l,m,q,B){return(q=(Y=(B=["call",1,89],E.send),z)[0](B[2],0,J.K,C),P=R[B[1]](80,0,J.B),c=K.K().toJSON(),C&&hs.V()in C)?l=!!C[hs.V()]:l=(m=J.K.get(hs))?
!("0"===m||0===m||!1===m||"false"===m):!1,Y[B[0]](E,k,new E8(P,l,c,q),D)})},(b=function(f,E){E=["error",34,"K"],J[E[2]].has(ua)?u[E[1]](39,J[E[2]],ua,!0)(f):f&&H&&console[E[0]](f)},J),u[32](56).Error())),O).return(V.then(function(f,E){if(E=["error","W","response"],f){if(f[E[0]])throw b(f[E[0]]),f[E[0]];return f[J[E[1]](f),E[2]]}return null},function(f,E,K,Y){if(E=(K=(Y=["Challenge cancelled by user.",0,4],f&&(f.stack||f==Y[0])),["HF",3,""]),K&&.001>Math.random()||!K&&Math.random()<w)return N[29](2,
E[2],E[Y[1]],Y[2],E[1],J,f);b(f);throw f;}))})),S},function(L,w,J,k,C,D,H,b,V){if(5>(((b=[0,13,8],1<=L-b[2]>>4)&&1>((L^23)&4)&&("number"==typeof J&&(J=Math.round(J)+w),V=J),L>>2)&b[2])&&(L-6&b[1])>=b[0]){for(J in k={},w)k[J]=w[J];V=k}return(L|40)==L&&(V=a[2](39,function(A,S){if(A[S=["K",4,15],S[0]]==w)return a[12](65,R[S[2]](S[1],2,w,!1,new Ek(J,C,D)),2,A);A[k[S[0]].postMessage((H=A.B,H)),S[0]]=0})),V},function(L,w,J,k,C,D,H,b,V,A,S,O){return((S=[2,"Z",14],L+5&1)||(J=[],z[35](17,0,W2).forEach(function(f){W2[f].yt&&
!this.has(W2[f])&&J.push(W2[f].V())},w),O=J),L-3^15)<L&&(L+4^9)>=L&&(A=["g","visible","inline"],V=N[8](16,k,A[0],b.K)==A[1],F[31](59,b.K,{visibility:D?"visible":"hidden",opacity:D?"1":"0",transition:D?"visibility 0s linear 0s, opacity 0.3s linear":"visibility 0s linear 0.3s, opacity 0.3s linear"}),V&&!D?b[S[1]]=a[0](60,function(){F[31](61,this.K,J,"-10000px")},500,b):D&&(R[7](5,b[S[1]]),F[31](63,b.K,J,w)),H&&(u[S[2]](17,"px",H.width,F[34](3,A[S[0]],b),H.height),u[S[2]](19,"px",H.width,a[13](8,C,F[34](9,
A[S[0]],b)),H.height))),O},function(L,w,J,k,C,D,H,b){if((L+3&15)==(b=[2,23,"rI"],b[0])&&u[19](40,w[b[2]]))throw Error("Cannot mutate an immutable Message");return((((((L&60)==L&&U.call(this,gt.width,gt.height,"doscaptcha"),L)|80)==L&&(k=N[b[1]](22,w),D=R[4](28,w),J=R[b[0]](41,this,D[0]),C=R[b[0]](57,this,D[1]),this.K[k]=J*C),L)&114)==L&&(H=u[24](20)?a[25](6,!1,"Chromium"):(N[38](10,"Chrome")||N[38](26,w))&&!d[21](b[0],"Edge")||N[38](b[0],"Silk")),L-7&b[1])==b[0]&&(this.B=w,this.U=void 0===k?null:
k,this.K=void 0===J?null:J),H},function(L,w,J,k,C,D){return L+2>>(-46<=(L^(C=[53,1,((L|48)==L&&(D=u[44](5,a[36](35,J,w))),3)],C[0]))&&2>(L<<2&6)&&(D=N[39](6,16,w,J,k,u[19](16,J.rI),0)),C[1])<L&&(L+C[2]&76)>=L&&(this.K=J===rG?w:""),D},function(L,w,J,k,C,D,H,b){return((b=["",42,6],1!=((L^b[2])&7)||R[b[1]](24,b[0],this)||(this.L().value=b[0],a[0](34,this.nw,10,this)),L)&58)==L&&(D=[3,0,!0],C.K==D[1]&&(C===k&&(J=D[0],k=new TypeError("Promise cannot resolve to itself")),C.K=1,a[21](4,!1,null,C.W,C,k,C.l)||
(C.K=J,C.C=k,C.U=w,d[20](18,D[2],C),J!=D[0]||k instanceof D9||d[49](1,D[2],null,C,k)))),H},function(L,w,J,k,C,D,H,b,V){if(4==(L>>((L-(((b=[37,56,5],L)+2^3)>=L&&L-7<<1<L&&(V=w instanceof eH&&w.constructor===eH?w.K:"type_error:SafeStyleSheet"),6)|75)<L&&(L-6^21)>=L&&(H=function(){var A=["xd","Error in protected function: ","indexOf"];if(C[A[0]])return D.apply(this,arguments);try{return D.apply(this,arguments)}catch(O){var S=O;if(!(S&&"object"===typeof S&&"string"===typeof S.message&&S.message[A[2]](A[1])==
w||"string"===typeof S&&S[A[2]](A[1])==w))throw C.B(S),new zS(S);}},H[a[46](73,k,C,J)]=D,V=H),1)&15))for(H=["fontSize",10,null],C=N[47](2,0,H[2],H[1],"SPAN",J),F[31](48,J,H[0],C+w),D=u[b[0]](31,J).height;12<C&&!(0>=k&&D<=2*C)&&!(D<=k);)C-=2,F[31](b[1],J,H[0],C+w),D=u[b[0]](29,J).height;return((L+b[2]&41)<L&&(L+b[2]&50)>=L&&(this.message=w,this.messageType=J,this.K=k),L+3&14)||M.call(this,w),V},function(L,w,J,k){if((k=["call","D",1],20>L-k[2])&&4<=(L<<k[2]&7)){for(;w=a[26](44,null);){try{w.B[k[0]](w.K)}catch(C){F[47](3,
C)}d[35](k[2],100,w,o5)}KG=!1}if(!((L^50)>>(L<<k[2]&15||(J=R5[w]),(L|64)==L&&(HL[k[0]](this,"dynamic"),this[k[1]]={},this.K=0),4)))Kr[k[0]](this,8,N5);return J},function(L,w,J,k,C,D){return(L&105)==(3<=(L-(D=[2,((L|16)==L&&(C=J[mr]||(J[mr]=function(H,b){return k(H,b,w)})),18),0],7)&7)&&20>L-8&&(J=['"></div><div class="',"verify-button-holder",'"><div class="'],C=g('<div class="'+R[7](D[0],"rc-footer")+J[D[0]]+R[7](10,"rc-separator")+J[D[2]]+R[7](58,"rc-controls")+J[D[0]]+R[7](D[1],"primary-controls")+
J[D[0]]+R[7](58,"rc-buttons")+J[D[0]]+R[7](10,"button-holder")+w+R[7](42,"reload-button-holder")+J[D[2]]+R[7](10,"button-holder")+w+R[7](D[0],"audio-button-holder")+J[D[2]]+R[7](42,"button-holder")+w+R[7](58,"image-button-holder")+J[D[2]]+R[7](50,"button-holder")+w+R[7](D[1],"help-button-holder")+J[D[2]]+R[7](D[0],"button-holder")+w+R[7](D[1],"undo-button-holder")+'"></div></div><div class="'+R[7](50,J[1])+'"></div></div><div class="'+R[7](26,"rc-challenge-help")+'" style="display:none" tabIndex="0"></div></div></div>')),
L)&&this.O([this.N,u[16](1,null,4,w)]),C},function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q){if(((m=["auto_render_clients",2,5],L-m[1])&13||(z[6](m[2],VD.X(),u[42](11,w,m[1],AM)),C=new ST,C.render(N[35](8)),J=new Og,k=new Mm(J,w,new a0,new Y$),this.K=new uY(C,k),a[44](18,this.K,z[40](59,w,1))),L&30)==L){for(Y=(K=(O=["___grecaptcha_cfg","reCAPTCHA couldn't find user-provided function: ","explicit"],u[m[1]](m[1],D)),K.next());!Y.done;Y=K.next())d[4](27,Y.value+".ready",function(B){a[0](28,B,0)});for(l=
u[Array.isArray((window[(H=window[O[0]][C],O)[0]][C]=[],H))||(H=[H]),m[1]](m[2],H),A=l.next();!A.done;A=l.next())if(E=A.value,E==J)d[41](13,k,w);else E!=O[m[1]]&&(b=u[26](25,{sitekey:E,isolated:!0}),y.window[O[0]][m[0]][E]=b,d[41](14,k,w,E));for(S=(f=((V=window[(window[O[0]][c=window[O[0]][J],J]=[],Array.isArray(c))||(c=[c]),O[0]].fns,window[O[0]].fns=[],V&&Array.isArray(V))&&(c=c.concat(V)),u[m[1]](1,c)),f.next());!S.done;S=f.next())P=S.value,"function"===typeof window[P]?Promise.resolve().then(window[P]):
"function"===typeof P?Promise.resolve().then(P):P&&console.log(O[1]+P)}return((((L|72)==L&&w.K&&(w.B=J,w.K.onmessage=x(w.I,w)),L)+4^26)>=L&&L-8<<m[1]<L&&(k=[0,64,"Uint8Array"],this.blockSize=-1,this.blockSize=k[1],this.I=y[k[m[1]]]?new Uint8Array(this.blockSize):Array(this.blockSize),this.M=w,this.K=[],this.C=J,this.N=k[0],this.O=k[0],this.W=y.Int32Array?new Int32Array(64):Array(k[1]),void 0===JR&&(y.Int32Array?JR=new Int32Array(c$):JR=c$),this.reset()),3==(L-8&23))&&(q=a[m[1]](33,function(B,h,T){h=
[0,6,(T=["parent",27,"F"],"eb")];switch(B.K){case w:if(!(H=D.K.O,H)){d[48](8,(D.B="h","http"),u[32](4)[T[0]],"*").send("j"),B.K=h[0];break}return(B.U=(Mz=((D.N=d[48](2,"http",u[32](28)[T[0]],H,new Map([[["g","n","p","h","i"],D.C],["r",D.Hm],["s",D.BH],["u",D.k9]]),D),R)[46](52,D,D.U,"a",x(D.C,D,null,h[2])),R[5](25,C,w)),k),a)[12](49,D.Y(),5,B);case 5:if(!z[23](37,VD.X().get(),13)){B.K=h[1];break}return a[12](66,a[6](2,"t",h[0],1,5,D),h[1],B);case h[1]:R[35](48,h[0],B,4);break;case k:R[T[1]](68,null,
B);case 4:a[31](10,8,J,"d",5,H),a[0](32,function(){return D.C(null,"m")},1E3*D.K[T[2]]),D.K.I||(d[8](49,2,D),D.K.C&&D.C(null,"ea")),B.K=h[0]}})),q},function(L,w,J,k,C,D,H){if(2==(L+5&(H=[4,"L1",31],7))){if(J.t7&&J.be&C&&!k)throw Error("Component already rendered");J[(!k&&J.be&C&&a[32](41,w,C,J,!1),H)[1]]=k?J[H[1]]|C:J[H[1]]&~C}return 1==(L|((L|48)==L&&(R[29](16,k)?D=u[41](16,J,w,k.W):(C=N[46](42,k),D=!!C&&u[41](H[0],J,w,C))),H[0]))>>3&&(k=new TW,D=F[H[2]](21,J,w,k)),D},function(L,w,J,k,C,D,H,b,V,
A){if(L-9<<(4<=(A=[1,5,3],L>>2&7)&&(L<<A[0]&14)<A[1]&&(Number.isFinite(w)?(C=String(w),k=C.indexOf("."),-1===k&&(k=C.length),(D="-"===C[0]?"-":"")&&(C=C.substring(A[0])),V=D+P$("0",Math.max(0,J-k))+C):V=String(w)),A[0])<L&&L-A[2]<<A[0]>=L)a[46](45,w,k,Tn,J);if(((((L&60)==L&&(this.K=this.B=null),L)|A[0])&15)==A[2]){for(J=(C=new cE,k=d[8](8,!1,null,w(),function(S,O){return("INPUT"==(O=["tagName","TEXTAREA",2043],S[O[0]])||S[O[0]]==O[1])&&""!=u[9](50,O[2])(S)}),0);J<k.length&&C.add(k[J].name);J++);V=
C.toString()}return(L^45)>>4>=A[2]&&19>(L+A[2]&28)&&(b=["left","pixelLeft"],/^\d+px?$/.test(J)?V=parseInt(J,w):(C=k.style[b[0]],D=k.runtimeStyle[b[0]],k.runtimeStyle[b[0]]=k.currentStyle[b[0]],k.style[b[0]]=J,H=k.style[b[A[0]]],k.style[b[0]]=C,k.runtimeStyle[b[0]]=D,V=+H)),V},function(L,w,J,k,C,D,H){return((L&(D=[30,0,75],D[2]))==L&&(C.N.send(w,k),C.l&&C.l.resolve(k),a[D[1]](D[0],function(){return C.C(k.response,"ec")},k.timeout*J),H=C.Y()),L|24)==L&&(bJ?(J=jc,H=!!J&&!!J.platform):H=w),H},function(L,
w,J,k,C,D){return((((D=[1,4,7],(L+D[1]&8)<D[2]&&28<=L+D[2])&&(J=[16,"%s_%d",2],"start"==w.data.type&&(k=R[39](D[2],J[0],w.data.data,Ue),u[12](72,D[0],J[2],D[2],J[D[0]],new dt(k),DZ(function(H,b){H.postMessage(z[7](30,"finish",b))},self),DZ(function(H,b){H.postMessage(z[7](6,"progress",b))},self)))),(L^20)&11)||(C=(k=J.get(w))?k.toString():null),L|40)==L&&((k=J[zI])?C=k:(k=z[2](58,D[1],0,d[27].bind(null,D[1]),F[37].bind(null,17),J[zI]=[],d[13].bind(null,9),J,R[30].bind(null,16)),Eg in J&&zI in J&&
(J.length=w),C=k)),(L|64)==L)&&(d[18](26,null)||(z[16](13,this.K,this.L(),"click",this.K6),this.a7=null),this.ae=!1,z[D[1]](85,null,this)),C}]}(),Sj=function(L){return N[25].call(this,15,L)},ra=function(L){return d[25].call(this,12,L)},xf=function(L,w,J,k,C,D){return F[29].call(this,72,L,w,J,k,C,D)},pH=function(){return R[9].call(this,52)},Js={IMG:" ",BR:"\n"},u3={cm:1,"in":1,mm:1,pc:1,pt:1},la=function(L,w,J){if(!L)throw Error();if(2<arguments.length){var k=Array.prototype.slice.call(arguments,2);
return function(){var C=["unshift","prototype","apply"],D=Array[C[1]].slice.call(arguments);return L[Array[C[1]][C[0]][C[2]](D,k),C[2]](w,D)}}return function(){return L.apply(w,arguments)}},DZ=function(L,w){var J=Array.prototype.slice.call(arguments,1);return function(){var k=J.slice();return(k.push.apply(k,arguments),L).apply(this,k)}},fj=function(L,w,J,k,C){return u[13].call(this,9,L,w,J,k,C)},mL=function(){return F[39].call(this,21)},iY=function(){return d[33].call(this,17)},w9=function(L,w,J,
k,C,D,H,b,V,A,S){S=["item","object",14];function O(f){f&&J.appendChild("string"===typeof f?L.createTextNode(f):f)}for(A=2;A<k.length;A++)if(b=k[A],!R[12](75,S[1],b)||F[39](6,b)&&b.nodeType>C)O(b);else{a:{if(b&&typeof b.length==H){if(F[39](54,b)){V="function"==typeof b[S[0]]||typeof b[S[0]]==w;break a}if("function"===typeof b){V="function"==typeof b[S[0]];break a}}V=D}jA(V?F[S[2]](9,C,b):b,O)}},q5=function(L,w,J){return d[30].call(this,1,w,J,L)},P5=function(){return z[43].call(this,49)},B$="g",SU=
{"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29",
"<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB",
"\uff3d":"%EF%BC%BD"},vl=/[\x00\x22\x26\x27\x3c\x3e]/g,oQ=function(L){return z[35].call(this,4,L)},QZ=function(L){return R[27].call(this,2,L)},QR=function(L){return N[34].call(this,6,L)},T8={},hW=function(L,w,J){return a[48].call(this,4,L,w,J)},M7=/[?&]($|#)/,Fx=function(L){return u[33].call(this,26,L)},TS=function(){return d[0].call(this,16)},bp=function(L){return R[28].call(this,41,L)},L9=function(L){return F[30].call(this,41,L)},$$=function(L){return R[16].call(this,39,L)},es=function(L){return N[11].call(this,
64,L)},lp=/&/g,Rx=function(L){return Rx[" "](L),L},y$=function(L,w){return F[27].call(this,50,L,w)},ip=function(L,w,J,k,C,D,H,b){return d[14].call(this,20,L,w,J,k,C,D,H,b)},Xx=function(L){return z[12].call(this,12,L)},LG=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Q7=function(){return a[36].call(this,80)},Jr=function(L){return z[29].call(this,4,L)},jT=/^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,v$=function(L,w,J,k){return d[24].call(this,8,L,J,w,k)},Tq=
function(L){return d[32].call(this,5,L)},pr=function(L,w,J,k,C){return a[38].call(this,18,k,L,C,w,J)},tW={width:"250px",height:"40px",border:"1px solid #c1c1c1",margin:"10px 25px",padding:"0px",resize:"none",display:"none"},eH=function(L,w){return d[0].call(this,36,L,w)},W$={border:"10px solid transparent",width:"0",height:"0",position:"absolute","pointer-events":"none","margin-top":"-10px","z-index":"2000000000"},B2=/"/g,V$=function(L,w,J){return N[18].call(this,16,L,w,J)},y7=function(L,w){return a[15].call(this,
5,L,w)},eN=function(L){return d[38].call(this,4,L)},Ix=function(L){return a[26].call(this,22,L)},GS={border:"11px solid transparent",width:"0",height:"0",position:"absolute","pointer-events":"none","margin-top":"-11px","z-index":"2000000000"},Yy=function(L,w,J){return z[39].call(this,9,L,w,J)},tr=function(L,w,J){return F[18].call(this,6,L,w,J)},uF=[],ev=function(){for(var L=Number(this),w=[],J=L;J<arguments.length;J++)w[J-L]=arguments[J];return w},I5=function(L){return N[22].call(this,5,L)},uh=[],
jJ=function(L,w){return z[7].call(this,16,L,w)},A8=function(L){return N[8].call(this,4,L)},oX=function(L,w,J){return z[17].call(this,21,L,w,J)},Zr={margin:"0px","margin-top":"-4px",padding:"0px",background:"#f9f9f9",border:"1px solid #c1c1c1","border-radius":"3px",height:"60px",width:"300px"},G=function(L,w,J,k,C,D,H,b){return d[16].call(this,8,L,w,J,k,C,D,H,b)},WL=function(L){return z[11].call(this,4,L)},r,Yf="function"==typeof Object.defineProperties?Object.defineProperty:function(L,w,J){if(L==
Array.prototype||L==Object.prototype)return L;return L[w]=J.value,L},s8=function(){return F[36].call(this,16)},dV=function(L,w){return R[14].call(this,4,L,w)},sx=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,ia=function(L){return N[17].call(this,2,L)},N7=z[20](1,"Math",0,"object",
this),U8=/[#\/\?@]/g,O8=function(L){return F[48].call(this,20,L)},nr=function(L,w,J,k,C,D,H,b){return N[2].call(this,3,L,w,J,k,C,D,H,b)},x$={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ux=function(L){return z[29].call(this,3,L)},Bo=function(L){return d[37].call(this,1,L)},rt=function(L){return d[8].call(this,41,L)},Im=function(){return N[48].call(this,13)},
Lp=function(L,w){return N[26].call(this,16,L,w)},Vu=[277,4391,32779],Wo=((a[36](33,"Symbol",function(L,w,J,k,C,D){if(D=[0,"_","random"],L)return L;return w="jscomp_symbol_"+(((C=function(H,b){Yf(this,(this.K=H,"description"),{configurable:!0,writable:!0,value:b})},C.prototype).toString=function(){return this.K},J=function(H){if(this instanceof J)throw new TypeError("Symbol is not a constructor");return new C(w+(H||"")+"_"+k++,H)},k=D[0],1E9*Math[D[2]]())>>>D[0])+D[1],J}),a)[36](64,"Symbol.iterator",
function(L,w,J,k,C){if(L)return L;for(k=(w=(J=0,Symbol)("Symbol.iterator"),"Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array").split(" ");J<k.length;J++)C=N7[k[J]],"function"===typeof C&&"function"!=typeof C.prototype[w]&&Yf(C.prototype,w,{configurable:!0,writable:!0,value:function(){return F[43](1,d[33](73,0,this))}});return w}),function(L,w,J,k,C,D,H){if(void 0===(H=["console",30,null],w4))if(C=y.trustedTypes,D=k,C&&C.createPolicy){try{D=
C.createPolicy("goog#html",{createHTML:z[H[1]].bind(H[2],L),createScript:z[H[1]].bind(H[2],26),createScriptURL:z[H[1]].bind(H[2],w)})}catch(b){if(y[H[0]])y[H[0]][J](b.message)}w4=D}else w4=D;return w4}),P2="function"==typeof Object.create?Object.create:function(L,w){return w=function(){},w.prototype=L,new w},E9={},aQ=function(L,w){return z[11].call(this,64,L,w)},Zy=255,JI;
if("function"==typeof Object.setPrototypeOf)JI=Object.setPrototypeOf;else{var kr;a:{var Cp={},Dx={a:!0};try{kr=(Cp.__proto__=Dx,Cp.a);break a}catch(L){}kr=!1}JI=kr?function(L,w){if((L.__proto__=w,L).__proto__!==w)throw new TypeError(L+" is not extensible");return L}:null}
var Ug=(A8.prototype.C=function(L){this.B=L},function(){return a[45].call(this,1)}),bM=function(){H0.apply(this,arguments)},Ox=(A8.prototype.return=function(L){this.K=(this.I={return:L},this).M},/#|$/),Ku=function(L){return R[48].call(this,1,L)},wZ=JI,ja=function(L,w,J,k){return F[5].call(this,19,L,w,J,k)},yu=function(L,w){return F[0].call(this,69,L,w)},TK=function(L){return u[41].call(this,3,L)},CG=function(){return u[1].call(this,10)},Lh=function(L,w,J,k,C,D,H,b,V,A,S){D=[5,2,""],S=[240,4,5];function O(f,
E,K){for(;A<J.length;){if((K=(E=J.charAt(A++),nl[E]),null)!=K)return K;if(!z[25](39,E))throw Error("Unknown base64 encoding at char: "+E);}return f}for(A=(z[S[2]](27,D[0],D[2]),w);;){if(H=(V=O(-1),C=O(w),O(L)),b=O(L),64===b&&-1===V)break;(k(V<<D[1]|C>>S[1]),H)!=L&&(k(C<<S[1]&S[0]|H>>D[1]),b!=L&&k(H<<6&192|b))}},af=function(L,w){var J=[null,9,1],k=[1,2,0],C=arguments.length==k[J[2]]?z[13](67,J[0],k[J[2]],k[2],arguments[k[0]]):z[13](66,J[0],k[J[2]],k[0],arguments);return N[J[2]](J[1],"#",L,C)},aX=[1,
3],zn=function(L){return N[23].call(this,83,L)},Vf=(a[22](94,["uib-"],47),/[#\?]/g),AI=["POST","PUT"],Dh=(a[36](96,"Promise",function(L,w,J,k,C){C=["prototype","M","W"];function D(){this.K=null}function H(b){return b instanceof J?b:new J(function(V){V(b)})}if(L)return L;return(((w=(((((((D[C[0]].B=function(b,V,A){this[((A=[null,"K","push"],this[A[1]])==A[0]&&(this[A[1]]=[],V=this,this.U(function(){V.I()})),A)[1]][A[2]](b)},(D[C[0]].U=(J=(k=N7.setTimeout,function(b,V,A){V=(((A=[0,!1,"C"],this.B=[],
this).K=A[0],this)[this.U=void 0,A[2]]=A[1],this).N();try{b(V.resolve,V.reject)}catch(S){V.reject(S)}}),function(b){k(b,0)}),J[C[0]].O=function(b){this.M(b,1)},D)[C[0]].N=function(b){this.U(function(){throw b;})},J)[C[0]].xd=function(b,V,A){if(b===(A=["O","I","P"],this))this[A[1]](new TypeError("A Promise cannot resolve to itself"));else if(b instanceof J)this[A[2]](b);else{a:switch(typeof b){case "object":V=null!=b;break a;case "function":V=!0;break a;default:V=!1}V?this.Y(b):this[A[0]](b)}},J)[C[0]].D=
function(b){k(function(V){b.l()&&(V=N7.console,"undefined"!==typeof V&&V.error(b.U))},(b=this,1))},J[C[0]].I=function(b){this.M(b,2)},J[C[0]].N=function(b,V){function A(S){return function(O){b||(b=!0,S.call(V,O))}}return{resolve:A((V=(b=!1,this),this).xd),reject:A(this.I)}},J[C[0]]).l=function(b,V,A,S,O,f){if((f=(S=[!1,"document","CustomEvent"],[1,"U",0]),this).C)return S[f[2]];if((V=(b=(A=N7.Event,N7[S[2]]),N7.dispatchEvent),"undefined")===typeof V)return!0;return((("function"===typeof b?O=new b("unhandledrejection",
{cancelable:!0}):"function"===typeof A?O=new A("unhandledrejection",{cancelable:!0}):(O=N7[S[f[0]]].createEvent(S[2]),O.initCustomEvent("unhandledrejection",S[f[2]],!0,O)),O).promise=this,O).reason=this[f[1]],V)(O)},D[C[0]].I=function(b,V,A,S){for(S=["K",0,"N"];this[S[0]]&&this[S[0]].length;)for(V=S[1],A=this[S[0]],this[S[0]]=[];V<A.length;++V){A[b=A[V],V]=null;try{b()}catch(O){this[S[2]](O)}}this[S[0]]=null},J)[C[0]].Y=function(b,V){V=void 0;try{V=b.then}catch(A){this.I(A);return}"function"==typeof V?
this.F(b,V):this.O(b)},J[C[0]])[C[2]]=function(b,V){if((V=["B",null,0],this[V[0]])!=V[1]){for(b=V[2];b<this[V[0]].length;++b)w[V[0]](this[V[0]][b]);this[V[0]]=V[1]}},J[C[0]])[C[1]]=function(b,V,A){if(A=[0,"D",", "],this.K!=A[0])throw Error("Cannot settle("+V+A[2]+b+"): Promise already settled in state"+this.K);(((this.K=V,this).U=b,2)===this.K&&this[A[1]](),this).W()},new D),J[C[0]].P=function(b,V){(V=this.N(),b).M7(V.resolve,V.reject)},J)[C[0]].F=function(b,V,A){A=this.N();try{V.call(b,A.resolve,
A.reject)}catch(S){A.reject(S)}},J[C[0]].then=function(b,V,A,S,O){function f(E,K){return"function"==typeof E?function(Y){try{S(E(Y))}catch(c){O(c)}}:K}return A=new J(function(E,K){S=(O=K,E)}),this.M7(f(b,S),f(V,O)),A},J[C[0]].catch=function(b){return this.then(void 0,b)},J[C[0]].M7=function(b,V,A,S){S=[!0,null,"push"];function O(f){f=["Unexpected state: ","U","K"];switch(A[f[2]]){case 1:b(A[f[1]]);break;case 2:V(A[f[1]]);break;default:throw Error(f[0]+A[f[2]]);}}this.C=(this.B==(A=this,S)[1]?w.B(O):
this.B[S[2]](O),S)[0]},J.resolve=H,J).reject=function(b){return new J(function(V,A){A(b)})},J).race=function(b){return new J(function(V,A,S,O){for(O=(S=u[2](5,b),S.next());!O.done;O=S.next())H(O.value).M7(V,A)})},J.all=function(b,V,A){return(A=(V=u[2](5,b),V.next()),A.done)?H([]):new J(function(S,O,f,E){function K(Y){return function(c){(f[Y]=(E--,c),0)==E&&S(f)}}E=(f=[],0);do f.push(void 0),E++,H(A.value).M7(K(f.length-1),O),A=V.next();while(!A.done)})},J}),function(){return u[7].call(this,72)}),
kw={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:(a[36](32,"Array.prototype.find",function(L){return L?L:function(w,J){return a[28](3,0,this,w,J).sj}}),a[36](97,"WeakMap",function(L,w,J,k,C){C=["prototype","preventExtensions","has"];function D(){}function H(A,S){return(S=typeof A,"object"===S)&&null!==A||"function"===S}function b(A,S){R[19](18,A,w)||(S=new D,Yf(A,w,{value:S}))}
function V(A,S){(S=Object[A])&&(Object[A]=function(O){if(O instanceof D)return O;return(Object.isExtensible(O)&&b(O),S)(O)})}if(function(A,S,O,f,E){if(!(O=[4,!1,(E=["set","has","seal"],2)],L)||!Object[E[2]])return O[1];try{if((S=(A=Object[E[2]]({}),Object[E[2]]({})),f=new L([[A,2],[S,3]]),f.get(A)!=O[2])||3!=f.get(S))return O[1];return f["delete"](A),f[E[0]](S,O[0]),!f[E[1]](A)&&f.get(S)==O[0]}catch(K){return O[1]}}())return L;return(((J=(V((w=(k=function(A,S,O,f,E){if(this.K=(E=[1,"set",6],(J+=Math.random()+
E[0]).toString()),A)for(f=u[2](E[2],A);!(O=f.next()).done;)S=O.value,this[E[1]](S[0],S[E[0]])},"$jscomp_hidden_")+Math.random(),"freeze")),V(C[1]),V("seal"),0),k[C[0]]).set=function(A,S){if(!H(A))throw Error("Invalid WeakMap key");if(!(b(A),R[19](20,A,w)))throw Error("WeakMap key fail: "+A);return A[w][this.K]=S,this},k)[C[0]].get=function(A){return H(A)&&R[19](17,A,w)?A[w][this.K]:void 0},k[C[0]][C[2]]=function(A){return H(A)&&R[19](17,A,w)&&R[19](21,A[w],this.K)},k)[C[0]]["delete"]=function(A,S){return H((S=
["K",19,16],A))&&R[S[1]](S[1],A,w)&&R[S[1]](S[2],A[w],this[S[0]])?delete A[w][this[S[0]]]:!1},k}),a[36](33,"Map",function(L,w,J,k,C,D,H,b){if(b=["entries","prototype","has"],function(V,A,S,O,f,E){if(O=["t",(E=[1,4,2],0),"function"],!L||typeof L!=O[E[2]]||!L.prototype.entries||typeof Object.seal!=O[E[2]])return!1;try{if("s"!=(A=(V=Object.seal({x:4}),new L(u[E[2]](7,[[V,"s"]]))),A).get(V)||A.size!=E[0]||A.get({x:4})||A.set({x:4},O[0])!=A||A.size!=E[2])return!1;if((S=(f=A.entries(),f.next()),S).done||
S.value[O[E[0]]]!=V||"s"!=S.value[E[0]])return!1;return(S=f.next(),S.done||S.value[O[E[0]]].x!=E[1]||S.value[E[0]]!=O[0]||!f.next().done)?!1:!0}catch(K){return!1}}())return L;return((((((((C=(H=(k=function(V,A,S,O,f){if(((f=[0,(this.B={},"K"),1],this)[f[1]]=w(),this).size=f[0],V)for(A=u[2](2,V);!(O=A.next()).done;)S=O.value,this.set(S[f[0]],S[f[2]])},D=function(V,A,S,O,f,E,K,Y,c){if((O=((c=[0,"",(S=A&&typeof A,"object")],S)==c[2]||"function"==S?H.has(A)?E=H.get(A):(Y=c[1]+ ++J,H.set(A,Y),E=Y):E="p_"+
A,V.B[E]))&&R[19](19,V.B,E))for(K=c[0];K<O.length;K++)if(f=O[K],A!==A&&f.key!==f.key||A===f.key)return{id:E,list:O,index:K,zT:f};return{id:E,list:O,index:-1,zT:void 0}},new WeakMap),w=function(V){return V={},V.vK=V.next=V.head=V},function(V,A,S){return F[43](12,(S=V.K,function(){if(S){for(;S.head!=V.K;)S=S.vK;for(;S.next!=S.head;)return S=S.next,{done:!1,value:A(S)};S=null}return{done:!0,value:void 0}}))}),k)[b[1]].set=function(V,A,S,O){return(S=D(this,(V=0===(O=["K","B","push"],V)?0:V,V)),S.list||
(S.list=this[O[1]][S.id]=[]),S.zT)?S.zT.value=A:(S.zT={next:this[O[0]],vK:this[O[0]].vK,head:this[O[0]],key:V,value:A},S.list[O[2]](S.zT),this[O[0]].vK.next=S.zT,this[O[0]].vK=S.zT,this.size++),this},k[b[1]]["delete"]=function(V,A,S){return(A=D((S=[!0,!1,"B"],this),V),A.zT)&&A.list?(A.list.splice(A.index,1),A.list.length||delete this[S[2]][A.id],A.zT.vK.next=A.zT.next,A.zT.next.vK=A.zT.vK,A.zT.head=null,this.size--,S[0]):S[1]},k[b[1]]).clear=function(){this.size=((this.B={},this).K=this.K.vK=w(),
0)},k)[b[1]][b[2]]=function(V){return!!D(this,V).zT},k)[b[1]].get=function(V,A){return(A=D(this,V).zT)&&A.value},k)[b[1]][b[0]]=function(){return C(this,function(V){return[V.key,V.value]})},k[b[1]]).keys=function(){return C(this,function(V){return V.key})},k[b[1]].values=function(){return C(this,function(V){return V.value})},k)[b[1]].forEach=function(V,A,S,O,f){for(O=this.entries();!(f=O.next()).done;)S=f.value,V.call(A,S[1],S[0],this)},k)[J=0,b[1]][Symbol.iterator]=k[b[1]][b[0]],k}),"rowSpan"),type:"type",
usemap:"useMap",valign:"vAlign",width:"width"},Ry=(a[36](65,"Number.isFinite",function(L){return L?L:function(w){return"number"!==typeof w?!1:!isNaN(w)&&Infinity!==w&&-Infinity!==w}}),function(L,w){return a[29].call(this,1,w,L)}),Wu=function(L,w){return a[22].call(this,2,L,w)},Sa=((a[36](64,"Array.from",function(L){return L?L:function(w,J,k,C,D,H,b,V,A,S){if("function"==(S=(J=null!=J?J:function(O){return O},C=[],[0,(D="undefined"!=typeof Symbol&&Symbol.iterator&&w[Symbol.iterator],"push"),"call"]),
typeof D))for(w=D[S[2]](w),b=S[0];!(A=w.next()).done;)C[S[1]](J[S[2]](k,A.value,b++));else for(H=S[0],V=w.length;H<V;H++)C[S[1]](J[S[2]](k,w[H],H));return C}}),a)[36](1,"Array.prototype.keys",function(L){return L?L:function(){return N[7](1,"",!0,this,function(w){return w})}}),function(){H0.apply(this,arguments)}),wV=(((a[36](65,"Array.prototype.values",function(L){return L?L:function(){return N[7](2,"",!0,this,function(w,J){return J})}}),a)[36](64,"Number.isNaN",function(L){return L?L:function(w){return"number"===
typeof w&&isNaN(w)}}),a)[36](32,"Array.prototype.fill",function(L){return L?L:function(w,J,k,C,D,H,b){if(((C=[(b=[1,0,"max"],null),0],H=this.length||C[b[0]],J)<C[b[0]]&&(J=Math[b[2]](C[b[0]],H+J)),k==C[b[1]])||k>H)k=H;for(D=Number((k=Number(k),k<C[b[0]]&&(k=Math[b[2]](C[b[0]],H+k)),J||C[b[0]]));D<k;D++)this[D]=w;return this}}),function(L){return R[36].call(this,13,L)}),O1=((((a[36](32,"Int8Array.prototype.fill",z[5].bind(null,40)),a[36](97,"Uint8Array.prototype.fill",z[5].bind(null,41)),a)[36](96,
"Uint8ClampedArray.prototype.fill",z[5].bind(null,42)),a)[36](32,"Int16Array.prototype.fill",z[5].bind(null,43)),a)[36](1,"Uint16Array.prototype.fill",z[5].bind(null,44)),function(L,w){return F[29].call(this,1,L,w)}),fH=function(L){return a[5].call(this,16,L)},MG=(a[36](96,"Int32Array.prototype.fill",z[5].bind(null,45)),function(L){return N[43].call(this,2,L)}),Ok=function(L,w){return a[48].call(this,28,L,w)},c5=function(L,w){var J=["shift","[goog.string.format] Template required","prototype"],k=
Array[J[2]].slice.call(arguments),C=k[J[0]]();if("undefined"==typeof C)throw Error(J[1]);return C.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(D,H,b,V,A,S,O,f){var E=[1,2,0],K=[null,"%","undefined"];if(S==K[E[0]])return K[E[0]];var Y=k.shift();if(typeof Y==K[E[1]])throw Error("[goog.string.format] Not enough arguments");return arguments[E[2]]=Y,a3[S].apply(K[E[2]],arguments)})},vx=[4,6],fp=(a[36](1,"Uint32Array.prototype.fill",z[5].bind(null,46)),function(L,w,J){return L.call.apply(L.bind,
arguments)}),vu=function(){return a[25].call(this,41)},uM=(a[36](33,"Float32Array.prototype.fill",z[5].bind(null,47)),a[36](96,"Float64Array.prototype.fill",z[5].bind(null,56)),function(L,w,J,k,C,D,H,b,V,A,S){return N[39].call(this,10,L,w,J,k,C,D,H,b,V,A,S)}),E1="function"==typeof Object.assign?Object.assign:function(L,w){for(var J=1;J<arguments.length;J++){var k=arguments[J];if(k)for(var C in k)R[19](18,k,C)&&(L[C]=k[C])}return L},Lu=function(L){return R[38].call(this,4,L)},q7=(a[36](64,"Object.assign",
function(L){return L||E1}),/>/g),Dy=function(L){return u[25].call(this,1,L)},QW=(a[36](97,"Set",function(L,w,J){if((J=(w=function(k,C,D){if(this.K=new Map,k)for(C=u[2](1,k);!(D=C.next()).done;)this.add(D.value);this.size=this.K.size},["iterator","prototype","clear"]),function(k,C,D,H,b,V){if((V=["add","has",(H=[4,0,1],!1)],!L||"function"!=typeof L)||!L.prototype.entries||"function"!=typeof Object.seal)return V[2];try{if((D=(C=Object.seal({x:4}),new L(u[2](6,[C]))),!D[V[1]](C)||D.size!=H[2]||D[V[0]](C)!=
D||D.size!=H[2]||D[V[0]]({x:4})!=D)||2!=D.size)return V[2];if((b=(k=D.entries(),k.next()),b.done)||b.value[H[1]]!=C||b.value[H[2]]!=C)return V[2];return(b=k.next(),b.done||b.value[H[1]]==C)||b.value[H[1]].x!=H[0]||b.value[H[2]]!=b.value[H[1]]?!1:k.next().done}catch(A){return V[2]}})())return L;return w[w[w[((w[(w[(w[J[1]].add=function(k){return(k=0===k?0:k,this).K.set(k,k),this.size=this.K.size,this},J)[1]]["delete"]=function(k,C){return(C=this.K["delete"](k),this).size=this.K.size,C},J)[1]][J[2]]=
function(){this.K.clear(),this.size=0},w)[J[1]].has=function(k){return this.K.has(k)},w[J[1]].entries=function(){return this.K.entries()},J)[1]].values=function(){return this.K.values()},w[J[1]].keys=w[J[1]].values,J[1]][Symbol[J[0]]]=w[J[1]].values,J[1]].forEach=function(k,C,D){(D=this,this).K.forEach(function(H){return k.call(C,H,H,D)})},w}),{}),k$=function(L){return d[1].call(this,17,L)},A$=function(L){return N[39].call(this,20,L)},v2=(a[36](1,"String.prototype.endsWith",function(L){return L?L:
function(w,J,k,C,D,H,b){for(C=(D=(void 0===(k=N[14]((H=(b=[17,"max",0],[0,"endsWith",""]),b[0]),H[2],this,w,H[1]),w+=H[2],J)&&(J=k.length),Math)[b[1]](H[b[2]],Math.min(J|H[b[2]],k.length)),w.length);C>H[b[2]]&&D>H[b[2]];)if(k[--D]!=w[--C])return!1;return C<=H[b[2]]}}),"rc-anchor-pt"),g4=(a[36](64,"String.prototype.startsWith",function(L){return L?L:function(w,J,k,C,D,H,b,V,A){for(b=(k=(H=(D=N[C=[(A=[0,2,"min"],""),!1,"startsWith"],14](21,C[A[0]],this,w,C[A[1]]),D).length,w+=C[A[0]],w.length),Math.max(A[0],
Math[A[2]](J|A[0],D.length))),V=A[0];V<k&&b<H;)if(D[b++]!=w[V++])return C[1];return V>=k}}),function(L){return d[47].call(this,2,L)}),Y7=(a[36](65,"String.prototype.repeat",function(L){return L?L:function(w,J,k,C,D){if((J=(C=(D=[20,0,null],["repeat",1,""]),N[14](D[0],C[2],this,D[2],C[D[1]])),w<D[1])||1342177279<w)throw new RangeError("Invalid count value");k=C[2];for(w|=D[1];w;)if(w&C[1]&&(k+=J),w>>>=C[1])J+=J;return k}}),{}),FI=/\x00/g,SN=function(L){return u[7].call(this,4,L)},zV=(a[36](97,"Array.prototype.findIndex",
function(L){return L?L:function(w,J){return a[28](8,0,this,w,J).oD}}),a[36](32,"Array.prototype.flat",function(L){return L?L:function(w,J,k,C,D,H){for(H=(w=void 0===w?1:w,J=0,["apply","flat","push"]),k=[];J<this.length;J++)if(C=this[J],Array.isArray(C)&&0<w)D=Array.prototype[H[1]].call(C,w-1),k[H[2]][H[0]](k,D);else k[H[2]](C);return k}}),function(){return a[47].call(this,10)}),Hx=(a[36](33,"globalThis",function(L){return L||N7}),function(L){return d[10].call(this,20,L)}),PL=function(){return a[14].call(this,
8)},o3=function(){return z[30].call(this,21)},sg=function(){return u[20].call(this,40)},R3=function(L){return d[14].call(this,1,L)},Ty={},Kp=function(L){return u[42].call(this,1,L)},zy=((a[36](65,"Object.is",function(L){return L?L:function(w,J){return w===J?0!==w||1/w===1/J:w!==w&&J!==J}}),a)[36](96,"Array.prototype.includes",function(L){return L?L:function(w,J,k,C,D,H,b){C=((H=this,b=[0,"is","max"],H)instanceof String&&(H=String(H)),k=J||b[0],H.length);for(k<b[0]&&(k=Math[b[2]](k+C,b[0]));k<C;k++)if(D=
H[k],D===w||Object[b[1]](D,w))return!0;return!1}}),a[36](65,"String.prototype.includes",function(L){return L?L:function(w,J,k){return(k=["indexOf",0,19],-1)!==N[14](k[2],"",this,w,"includes")[k[0]](w,J||k[1])}}),a[36](1,"String.prototype.padEnd",function(L){return L?L:function(w,J,k,C,D,H,b){return k=(H=(C=(D=(b=[14,22,"substring"],N[b[0]](b[1],"",this,null,"padStart")),w-D.length),void 0!==J?String(J):" "),0<C&&H)?H.repeat(Math.ceil(C/H.length))[b[2]](0,C):"",D+k}}),a[36](33,"Object.values",function(L){return L?
L:function(w,J,k){for(k in J=[],w)R[19](16,w,k)&&J.push(w[k]);return J}}),{}),Fc={},y=this||self,d9=/[\x00&<>"']/,gZ=function(L){return N[4].call(this,8,L)},MR=MR||{},NG="try again",Yr=function(){H0.apply(this,arguments)},M5="anchor",As="closure_uid_"+(1E9*Math.random()>>>0),SJ=0,Uw=function(){return u[32].call(this,9)},x=function(L,w,J){var k=["indexOf","apply","prototype"];return Function[k[2]].bind&&-1!=Function[k[2]].bind.toString()[k[0]]("native code")?x=fp:x=la,x[k[1]](null,arguments)};
function Bd(L,w,J){return d[45].call(this,18,L,w,J)}
var xy=function(L){return u[37].call(this,32,L)},k7=function(L){return d[22].call(this,32,L)},fN=(d[15](8,Bd,Error),Bd.prototype.name="CustomError",function(L,w,J,k){return u[18].call(this,4,w,L,J,k)}),ym=function(L,w){return F[32].call(this,25,L,w)},c0=function(){return u[23].call(this,4)},bW,P0={},F8=function(L,w){return z[18].call(this,67,L,w)},HE="undefined"!==typeof TextDecoder,Dj="undefined"!==typeof TextEncoder,jU=void 0,m0=/</g,bh,rZ=function(L){return N[37].call(this,10,L)},H2,hR=/'/g,hr=
function(L,w){return a[39].call(this,4,L,w)},LH=/^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i,Gz=function(L,w,J,k,C){return a[3].call(this,28,L,w,J,k,C)},rV=null,d4=y.navigator,Nz=String.prototype.trim?function(L){return L.trim()}:function(L){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(L)[1]},jc,bJ=(jc=d4?d4.userAgentData||null:null,!1),lM=function(L){return N[29].call(this,8,L)},x6=function(L){return u[16].call(this,8,L)},mN=function(L){return u[11].call(this,17,L)},tS=function(L,w,J){return z[9].call(this,
18,L,J,w)},XV=function(L,w){return R[34].call(this,1,L,w)},a0=function(){return z[47].call(this,4)},qG={"background-color":"#fff",border:"1px solid #ccc","box-shadow":"2px 2px 3px rgba(0, 0, 0, 0.2)",position:"absolute",transition:"visibility 0s linear 0.3s, opacity 0.3s linear",opacity:"0",visibility:"hidden","z-index":"2000000000",left:"0px",top:"-10000px"},B0=function(L){return a[40].call(this,1,L)},hI=function(L,w,J,k){return z[19].call(this,23,L,w,J,k)},kf={},nN=function(L){return a[16].call(this,
33,L)},nu=function(L){return N[11].call(this,4,L)},nh=(a[22](94,R[13].bind(null,8),19),Array.prototype).indexOf?function(L,w){return Array.prototype.indexOf.call(L,w,void 0)}:function(L,w,J){if("string"===typeof L)return"string"!==typeof w||1!=w.length?-1:L.indexOf(w,0);for(J=0;J<L.length;J++)if(J in L&&L[J]===w)return J;return-1},AT=Array.prototype.some?function(L,w){return Array.prototype.some.call(L,w,void 0)}:function(L,w,J,k,C,D){for(C=(J="string"===(D=["call","",!1],k=L.length,typeof L)?L.split(D[1]):
L,0);C<k;C++)if(C in J&&w[D[0]](void 0,J[C],C,L))return!0;return D[2]},K9=[],PE=Array.prototype.map?function(L,w){return Array.prototype.map.call(L,w,void 0)}:function(L,w,J,k,C,D){for(C=(D=L.length,J=(k="string"===typeof L?L.split(""):L,Array(D)),0);C<D;C++)C in k&&(J[C]=w.call(void 0,k[C],C,L));return J},FL=function(L){return d[46].call(this,25,L)},jA=Array.prototype.forEach?function(L,w,J){Array.prototype.forEach.call(L,w,J)}:function(L,w,J,k,C,D){for(k=(C=(D="string"===typeof L?L.split(""):L,
L).length,0);k<C;k++)k in D&&w.call(J,D[k],k,L)},TV=function(L,w){return F[4].call(this,32,L,w)};function $r(L,w){for(var J=["push",73,12],k=1;k<arguments.length;k++){var C=arguments[k];if(R[J[2]](J[1],"object",C)){var D=L.length||0,H=C.length||0;for(var b=(L.length=D+H,0);b<H;b++)L[D+b]=C[b]}else L[J[0]](C)}}function G2(L,w,J,k){Array.prototype.splice.apply(L,ea(arguments,1))}
function ea(L,w,J){var k=["slice","prototype","call"];return 2>=arguments.length?Array[k[1]][k[0]][k[2]](L,w):Array[k[1]][k[0]][k[2]](L,w,J)}
var XL=u[Rx[" "]=function(){},15](13,"Opera"),ts=function(L,w,J,k){return z[20].call(this,3,w,L,J,k)},t=F[12](38,"MSIE"),fG=N[38](26,"Edge"),zz=N[38](58,"Gecko")&&!(N[2](50,u[20](48).toLowerCase(),"webkit")&&!N[38](2,"Edge"))&&!(N[38](18,"Trident")||N[38](10,"MSIE"))&&!N[38](18,"Edge"),Di=N[2](54,u[20](32).toLowerCase(),"webkit")&&!N[38](18,"Edge"),mC=Di&&N[38](50,"Mobile"),Qf=function(L){return d[34].call(this,19,L)},x7=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,$H=function(){return d[28].call(this,
17)},dT=function(L){return u[4].call(this,6,L)},v0=[],Kj=F[44](24,!1),JT=F[13](56,!1),gT=d[42](20,!1),gA=function(L,w,J,k){return z[33].call(this,2,L,w,J,k)},R9=N[23](9,"iPhone","iPod"),Z7=function(L,w,J,k){return d[18].call(this,2,L,w,J,k)},o9=N[38](50,"iPad"),Mi=function(){FO.apply(this,arguments)},pp=function(){return R[32].call(this,8)},$G=function(L){return z[10].call(this,12,L)},tI=N[38](18,"iPod"),W0=a[34](9,"iPod"),yf;
a:{var GV="",I3=function(L,w){if(L=(w=["exec",20,64],u)[w[1]](w[2]),zz)return/rv:([^\);]+)(\)|;)/[w[0]](L);if(fG)return/Edge\/([\d\.]+)/[w[0]](L);if(t)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/[w[0]](L);if(Di)return/WebKit\/(\S+)/[w[0]](L);if(XL)return/(?:Version)[ \/]?(\S+)/[w[0]](L)}();if(I3&&(GV=I3?I3[1]:""),t){var Zx=R[10](2);if(null!=Zx&&Zx>parseFloat(GV)){yf=String(Zx);break a}}yf=GV}var s1,$7=yf;if(y.document&&t){var iM=R[10](1);s1=iM?iM:parseInt($7,10)||void 0}else s1=void 0;
var U1=function(L,w,J,k){return N[4].call(this,3,L,k,J,w)},J8=s1,zW=(u[35](2,"Silk","Opera"),z[39](2,"CriOS")),VR=function(L){return a[49].call(this,5,L)},qW=(F[35](11,"OPR","Safari"),zz)||Di||"function"==typeof y.btoa,hS="undefined"!==typeof Uint8Array,Hu=function(L,w,J){return d[8].call(this,31,L,w,J)},nl=null,TW=function(L){return R[12].call(this,1,L)},np=/[#\?:]/g,XF,J0=function(){return z[23].call(this,40)},up=/[#\?@]/g,xr=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e){return F[19].call(this,
1,L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e)},Cu,gM=(F8.prototype.le=function(){return null==this.f1},"function"===typeof Symbol)&&"symbol"===typeof Symbol()?Symbol():void 0,T2=function(L,w){return d[11].call(this,1,w,L)},Wl=function(L,w,J){return R[35].call(this,2,L,w,J)},ih=function(L){return d[22].call(this,18,L)},Oz,Ol=(d[44](73,23,v0),function(L,w,J,k){return u[30].call(this,1,L,w,J,k)}),Vx=Object.freeze(v0),r4=/^https?$/i,LM=function(L,w,J,k){return z[45].call(this,34,L,w,J,k)},w$=function(L){return F[7].call(this,
5,L)},JW=function(){return z[9].call(this,2)},Sl=!1,yZ=function(L,w,J,k,C,D,H){return a[3].call(this,1,L,w,J,k,C,D,H)},mQ=function(L,w,J,k){return F[30].call(this,2,k,J,w,L)},BL=1,nj=!1,JH=u[36](67,u[36](70,0,u[36](65,23,u[36](68,40,u[36](68,49,61,77,9,52,555),209,12,70,255),285,9,60)),u[36](68,u[36](64,u[36](69,u[36](70,u[36](64,320,336,351,20,80,245),412),u[36](70,u[36](66,420,435,447,9,48,335),535,544,20,58,225),602),u[36](67,613,632)),u[36](55,651,752,776,7,62,210),826,9,44,175)),Pu=function(L,
w,J){return R[26].call(this,26,L,w,J)},VD=function(){return a[13].call(this,66)},eJ=function(L,w,J){return N[19].call(this,20,L,w,J)},Q$=function(L,w,J,k,C,D,H,b,V,A,S,O){return R[26].call(this,16,L,w,J,k,C,D,H,b,V,A,S,O)},Gy,nG={},wG="FE",pl="backgroundImage",AM=function(L){return a[29].call(this,38,L)},kD=function(L){return u[11].call(this,45,L)},Jk=function(L){var w=[2,"slice","call"];return R[12](w[0],"<",Array.prototype[w[1]][w[2]](arguments))},CM=u[36](67,u[36](55,0,u[36](64,18,20,33,56,94,
290)),u[36](55,u[36](66,114,138,148,17,86,315),223,242,0)),DL=function(L){return d[47].call(this,35,L)},Vm=function(L){return F[0].call(this,41,L)},FW=function(L){return d[48].call(this,40,L)},vE=(xr.prototype.toJSON=function(L,w){return L=this[w=[43,null,"rI"],w[2]],Oz?L:z[10](48,w[1],u[9].bind(w[1],2),L,d[w[0]].bind(w[1],33))},xr.prototype.RD=function(){return u[19](16,this.rI)},function(L,w,J,k,C,D){return R[33].call(this,12,L,w,J,k,C,D)}),zS=function(L,w){return d[22].call(this,2,L,w)},hT=function(L){return z[18].call(this,
3,L)},HI="invalid",ng=function(){var L=[0,22,1],w=[1,255,0],J=ev.apply(w[2],arguments).flat(Infinity),k=J.filter(function(H){return 7==R[48](16,null,1,H)}).length,C=pH.X().K(),D=C.HK;return new Lp((D=(J=a[17](16,w[L[0]],w[L[2]],C.vi,a[21](31,3,d[L[2]](16,w[2],Ce,d[9](6,w[L[0]],8,J)),2)),R[35](79,w[L[0]],N[L[1]](41,w[L[0]],J),D)),k),D)},bH=function(L){return u[32].call(this,1,L)},j_=function(L,w,J,k){return z[16].call(this,26,L,w,J,k)},lJ=function(L,w){return z[4].call(this,1,L,w)},Cr=function(L){return a[17].call(this,
1,L)},Vk=function(L){return d[30].call(this,36,L)},O5=(((a[22](94,function(L,w,J){return(w=d[49](2,"g"+J,w),(""+L)[AH+S_](w)||[]).length},5),xr).prototype.um=Ty,xr.prototype.toString=function(){return this.rI.toString()},a)[22](93,function(L,w){return N[20](6,null,function(){return L[N[43](8,9878,w)].bind(L)})},3),/#/g),XI=function(L){return F[30].call(this,65,L)},zK=0,Wx="function"===typeof Uint8Array.prototype.slice,oy=0,dG=function(){return N[1].call(this,1)},gG="function"===typeof BigInt,Rm=function(L,
w,J){return a[19](32,0,2,arguments,document)},Z$=function(L,w,J,k){return a[14].call(this,39,L,w,J,k)},El=(jJ.prototype.reset=(jJ.prototype.N=function(L,w,J,k,C,D){if((L=(D=(w=(J=[127,128,7],this.K),[1,0,(C=this.U,8)]),C)[w++],k=L&J[D[1]],L&J[D[0]])&&(L=C[w++],k|=(L&J[D[1]])<<J[2],L&J[D[0]]&&(L=C[w++],k|=(L&J[D[1]])<<14,L&J[D[0]]&&(L=C[w++],k|=(L&J[D[1]])<<21,L&J[D[0]]&&(L=C[w++],k|=L<<28,L&J[D[0]]&&C[w++]&J[D[0]]&&C[w++]&J[D[0]]&&C[w++]&J[D[0]]&&C[w++]&J[D[0]]&&C[w++]&J[D[0]])))))throw z[D[0]](D[2]);
return F[46](34," > ",w,this),k},function(){this.K=this.I}),function(L){return a[9].call(this,18,L)}),X4=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,FP=function(L,w,J,k){return d[3].call(this,1,L,w,J,k)},Mw=function(){return F[31].call(this,1)},bq=[],l3=(a[22](93,z[15].bind(null,7),14),function(L,w){return R[29].call(this,1,L,w)}),dA=(Pu.prototype.reset=function(L){this[(this.B=(this[L=["U","N","K"],L[2]].reset(),this)[L[1]]=-1,L)[0]]=this[L[2]][L[2]]},function(L){return u[0].call(this,
2,L)}),aM=(a[22](89,function(L){return F[37](30,!1,function(w){return"string"===typeof L?new w.String(L):L})},49),function(L){return R[12].call(this,48,L)}),fM=function(L,w){return N[40].call(this,2,w,L)},yx=(a[22](85,R[44].bind(null,13),45),function(L,w){return z[40].call(this,3,L,w)}),cu=[],Kh,H$=(Im.prototype.end=(Im.prototype.length=function(){return this.K.length},function(L){return L=this.K,this.K=[],L}),function(L,w,J){return R[15].call(this,20,L,w,J)}),Y$=function(L){return a[15].call(this,
8,L)},Q=function(L,w){return u[37].call(this,56,w,L)},uH=function(){return u[12].call(this,10)},E5="incorrect",Ee={em:1,ex:(a[22](85,z[35].bind(null,24),42),1)},mr=Symbol(),KN=Symbol(),zI=Symbol(),g$={visibility:"hidden",position:"absolute",width:"100%",top:"-10000px",left:"0px",right:"0px",transition:"visibility 0s linear 0.3s, opacity 0.3s linear",opacity:"0"},Eg=Symbol(),FF=function(L,w){return z[11].call(this,88,L,w)},a9=/^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
zJ=function(){return u[23].call(this,10)},Og=function(){return z[14].call(this,21)},oM=function(L){return N[22].call(this,7,L)},RM=((a[22](87,CM,55),a)[22](91,N[45].bind(null,2),58),{width:"100%",height:"100%",position:"fixed",top:"0px",left:"0px","z-index":"2000000000","background-color":"#fff",opacity:"0.05",filter:"alpha(opacity=5)"}),YH=u[36](55,u[36](70,u[36](66,u[36](64,42,45,53,-23,-50,5),29,31,1,4),u[36](69,34,35,37,-1,2,10),43,-3,-4),u[36](68,u[36](69,46,48,57,1,6,20),u[36](70,62,63,64,2,
8,25),71,1)),E6={},Ue=(a[22](84,F[6].bind(null,16),54),function(L){return R[11].call(this,2,L)}),qK=[],Zj=function(L,w){return d[39].call(this,1,L,w)},Ek=function(L,w,J){return z[42].call(this,1,L,w,J)},Cg=(a[22](91,function(L){return function(){return d[24](19,0,X8,function(){return L})}},12),function(L,w){return N[46].call(this,65,L,w)}),uY=function(L,w,J){return F[49].call(this,2,L,w,J)},Tz=(a[22](94,R[24].bind(null,18),1),function(L,w){var J=["set",0,(this.B={},2)],k=[1,0,(this.K=[],"Uneven number of arguments")],
C=(this.size=k[this.U=k[1],1],arguments.length);if(C>k[J[1]]){if(C%J[2])throw Error(k[J[2]]);for(var D=k[1];D<C;D+=J[2])this[J[0]](arguments[D],arguments[D+k[J[1]]])}else if(L)if(L instanceof Tz)for(C=L.E_(),D=k[1];D<C.length;D++)this[J[0]](C[D],L.get(C[D]));else for(D in L)this[J[0]](D,L[D])}),re=32,KM={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"},MK={},Nw={width:"100%",height:"100%",
position:"fixed",top:"0px",left:"0px","z-index":"2000000000","background-color":"#fff",opacity:"0.5",filter:"alpha(opacity=50)"},YD="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),wA={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},lq=function(L,w){return N[49].call(this,6,L,w)},h$=(a[22](92,z[47].bind(null,2),9),/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g),
qi=/^[\w+/_-]+[=]{0,2}$/,EI=function(L,w,J){return F[14].call(this,4,L,w,J)},cI=F[20](49,function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){if((Y=[2147483648,"K",0],H=[1,4,127],0)!==L.B)return!1;V=(S=(K=(E=Y[2],L)[Y[f=(A=Y[2],Y[2]),1]],K.U),K[Y[1]]);do k=S[V++],A|=(k&H[2])<<E,E+=7;while(32>E&&k&128);for(32<E&&(f|=(k&H[2])>>H[1]),E=3;32>E&&k&128;E+=7)k=S[V++],f|=(k&H[2])<<E;if(128>(F[46](35," > ",V,K),k))C=f>>>Y[2],b=C&Y[0],O=A>>>Y[2],b&&(C=~C>>>Y[2],O=~O+H[Y[2]]>>>Y[2],O==Y[2]&&(C=C+H[Y[2]]>>>Y[2])),D=4294967296*
C+(O>>>Y[2]);else throw z[1](24);return!(F[31](19,b?-D:D,J,w),0)},function(L,w,J,k,C,D,H,b){(H=(k=[25,null,8],b=[0,15,23],a[36](74,J,w)),H!=k[1])&&("string"===typeof H&&N[47](17,32,b[0],H),H!=k[1]&&(d[b[2]](6,L.K,J*k[2]),"number"===typeof H?(D=L.K,d[44](b[1],b[0],H),R[22](45,7,k[b[0]],oy,D,zK)):(C=N[47](16,32,b[0],H),R[22](44,7,k[b[0]],C.K,L.K,C.B))))}),i3=function(L,w){return a[40].call(this,8,L,w)},PI=F[20](17,function(L,w,J,k){if(0!==(k=[!1,"K",!0],L).B)return k[0];return F[31](7,L[k[1]].N(),J,
w),k[2]},R[17].bind(null,8)),hM=function(L){return N[23].call(this,28,L)},d$=F[20](55,function(L,w,J,k,C,D,H,b){if((b=["K","call","push"],0)!==L.B&&2!==L.B)return!1;if(C=z[40](14,!1,w,J),2==L.B)for(D=jJ.prototype.N,H=a[0](43,0,L[b[0]]),k=L[b[0]][b[0]]+H;L[b[0]][b[0]]<k;)C[b[2]](D[b[1]](L[b[0]]));else C[b[2]](L[b[0]].N());return!0},function(L,w,J,k,C,D,H,b,V){if(H=z[40](20,(V=(b=[null,8,!1],[9,12,0]),b[2]),w,J),H!=b[V[2]])for(k=V[2];k<H.length;k++)C=L,D=H[k],D!=b[V[2]]&&(d[23](V[1],C.K,J*b[1]),u[41](V[0],
127,D,C.K))}),lH=F[20](51,function(L,w,J,k,C){if(0!==(C=["K",66,13],L.B))return!1;return u[C[2]](C[1],w,k,J,L[C[0]].N()),!0},R[17].bind(null,16)),fh=/[^\d]+$/,m$=F[20](53,function(L,w,J,k,C){if(C=[10,35,"B"],0!==L[C[2]])return!1;return u[13](C[1],w,k,J,N[4](17,C[0],127,L.K)),!0},function(L,w,J,k,C){(k=z[C=[null,"K",23],C[2]](5,w,J),k!=C[0])&&(d[C[2]](15,L[C[1]],8*J),L[C[1]][C[1]].push(k?1:0))}),qw=F[20](19,function(L,w,J,k){if((k=[7,240,12],2)!==L.B)return!1;return F[31](k[0],N[10](k[2],k[1],L),J,
w),!0},u[39].bind(null,40)),BI=F[20](23,function(L,w,J,k,C){if(C=["B",!0,28],2!==L[C[0]])return!1;return(k=N[10](14,240,L),a)[20](C[2],!1,w,R[15](64,"object",k),J),C[1]},function(L,w,J,k,C,D,H,b,V,A){if((k=d[34](68,(D=[null,8,16],A=[2,0,56],D[A[0]]),J,w),k)!=D[A[1]])for(H=A[1];H<k.length;H++)C=L,b=k[H],V=J,b!=D[A[1]]&&N[36](30,D[1],a[22](A[2],192,128,b),C,V)}),hH=F[20](51,function(L,w,J,k,C){if(2!==L[C=[240,"B",10],C[1]])return!1;return u[13](35,w,k,J,N[C[2]](6,C[0],L)),!0},u[39].bind(null,41)),Ch=
function(L,w){return a[16].call(this,17,L,w)},FR=F[20](21,function(L,w,J,k,C,D){if(2!==L[D=[15,"B",48],D[1]])return!1;return!(F[D[0]](D[0],0,d[D[2]](53,!1,null,w,k,J),L,C),0)},function(L,w,J,k,C,D,H,b){(H=u[b=[128,14,22],42](b[1],w,J,k),null!=H)&&(D=R[b[1]](b[2],8,2,J,L),C(H,L),N[1](33,b[0],7,D,L))}),TJ=F[20](23,function(L,w,J,k,C,D){if(2!==(D=[18,15,38],L.B))return!1;return F[D[1]](14,0,d[D[0]](D[2],8,w,J,k),L,C),!0},function(L,w,J,k,C,D,H,b,V,A){if((D=N[28](61,w,J,(V=[(A=[0,14,7],2),128,0],k)),
null)!=D)for(b=V[2];b<D.length;b++)H=R[A[1]](21,8,V[A[0]],J,L),C(D[b],L),N[1](32,V[1],A[2],H,L)}),$D=F[20](19,function(L,w,J,k,C,D){if(2!==(D=["K",2,!0],L).B)return!1;return(C=a[0](41,0,L[D[0]]),k=a[7](D[1]," > ",0,L[D[0]],C),F)[31](21,k,J,w),D[2]},function(L,w,J,k,C){(k=F[23]((C=[31,8,40],C[1]),null,w,J),null!=k)&&N[36](C[0],C[1],z[22](C[2],3,4,k).buffer,L,J)}),e_=F[20](17,function(L,w,J,k){if(0!==(k=[31,!0,"K"],L).B)return!1;return F[k[0]](12,a[0](49,0,L[k[2]]),J,w),k[1]},N[10].bind(null,16)),Qk=
F[20](21,function(L,w,J,k,C){if(0!==(C=["K",41,13],L.B))return!1;return u[C[2]](67,w,k,J,a[0](C[1],0,L[C[0]])),!0},N[10].bind(null,18)),Xc=function(L){return R[18].call(this,55,L)},vI=F[20](49,function(L,w,J,k){if((k=["K",!0,!1],0)!==L.B)return k[2];return(F[31](20,L[k[0]].N(),J,w),k)[1]},function(L,w,J,k,C,D){(k=a[36](74,J,(D=["K",null,13],w)),k)!=D[1]&&(C=parseInt(k,10),d[23](5,L[D[0]],8*J),u[41](D[2],127,C,L[D[0]]))}),Gn=[],Kg=(a[22](84,z[25].bind(null,14),27),function(L,w){return a[1].call(this,
4,w,L)}),t$=function(L,w){return a[43].call(this,12,L,w)},pM=function(L,w,J,k){return z[36].call(this,2,L,w,J,k)},OI=function(L,w,J,k,C,D,H){return u[29].call(this,41,L,w,J,k,C,D,H)},rM=function(L,w){return N[13].call(this,4,L,w)},Bu=function(L,w){return R[4].call(this,18,L,w)},XP=function(L,w){return z[15].call(this,2,L,w)},I=function(){return N[41].call(this,1)},FO=function(L,w,J,k,C,D,H,b,V,A){return R[43].call(this,64,L,w,J,k,C,D,H,b,V,A)},uq={},co=function(L){return N[5].call(this,4,L)},qm=/[\x00\x22\x27\x3c\x3e]/g;
function tH(L){return u[34].call(this,4,L)}var WE=function(L){return z[42].call(this,29,L)},Oe=function(L){return z[28].call(this,8,L)},wx=function(){return d[10].call(this,12)},iS=function(L){return u[31].call(this,2,L)},M=xr;(a[22](93,F[31].bind(null,6),30),a[42](16,Tq,M),a)[22](91,R[14].bind(null,1),56);function ax(L,w){for(var J,k,C=1;C<arguments.length;C++){for(k in J=arguments[C],J)L[k]=J[k];for(var D=0;D<YD.length;D++)k=YD[D],Object.prototype.hasOwnProperty.call(J,k)&&(L[k]=J[k])}}
XV.prototype.U_=function(){return this.K};
var w4,ay=(XV.prototype.NB=!0,(Cg.prototype.U_=function(){return this.K.toString()},Cg).prototype.toString=function(){return this.K+""},{}),HZ=function(L,w,J,k,C,D){return u[36].call(this,2,L,w,J,k,C,D)},rG=((Cg.prototype.NB=(yx.prototype.U_=function(){return this.K.toString()},yx.prototype.toString=function(){return this.K.toString()},!0),yx).prototype.NB=!0,{}),wM=new yx("about:invalid#zClosurez",rG),ph=(Zj.prototype.toString=(Zj.prototype.U_=function(){return this.K},function(){return this.K.toString()}),
function(L,w,J){return N[24].call(this,1,L,w,J)}),Z9=new ym(y.trustedTypes&&y.trustedTypes.emptyHTML||"",(eH.prototype.U_=(eH.prototype.toString=function(){return this.K.toString()},function(){return this.K}),ym.prototype.U_=function(){return this.K.toString()},ym.prototype.toString=function(){return this.K.toString()},MK)),k6=d[13](92,"<br>"),fr=(a[22](85,R[32].bind(null,14),32),function(L,w){return N[15].call(this,10,L,w)}),s6=function(L,w,J,k,C){return d[25].call(this,32,L,w,J,k,C)},am=[3,(((a[42](23,
MG,M),a)[22](87,u[31].bind(null,4),57),a)[22](91,d[31].bind(null,1),20),6),4,11],Ar=function(L,w,J,k,C,D){return z[27].call(this,68,w,L,J,k,C,D)},YG=function(L,w,J,k,C,D){return F[29].call(this,22,L,w,J,k,C,D)},h8=function(){return R[9].call(this,32)},WI={"z-index":"2000000000",position:"relative"},Vw=function(L,w,J){return w=!1,function(){return w||(J=L(),w=!0),J}}(function(L,w,J,k){return(w=document[(J=document[k=["createElement","appendChild","firstChild"],k[0]]("div"),k)[0]]("div"),w[k[1]](document[k[0]]("div")),
J[k[1]](w),L=J[k[2]][k[2]],J).innerHTML=z[0](48,Z9),!L.parentElement}),P$=String.prototype.repeat?function(L,w){return L.repeat(w)}:function(L,w){return Array(w+1).join(L)},kH=function(){return z[8].call(this,1)},nH=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),xH=null,Nm=((a[22](85,function(L,w,J,k){return(k=(""+(w=d[49](6,J,w),L))[AH+S_](w))&&2<=k.length?k[1]:""},4),EI).prototype.toString=function(L,w,
J,k,C,D,H,b,V,A){if(((J=["/","@",(A=[(L=[],"push"),"charAt",(w=this.K,!0)],"file")],w)&&L[A[0]](F[2](18,null,w,U8,A[2]),":"),H=this.U)||w==J[2])L[A[0]]("//"),(C=this.O)&&L[A[0]](F[2](34,null,C,U8,A[2]),J[1]),L[A[0]](encodeURIComponent(String(H)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),V=this.I,null!=V&&L[A[0]](":",String(V));if(b=this.N)this.U&&b[A[1]](0)!=J[0]&&L[A[0]](J[0]),L[A[0]](F[2](2,null,b,b[A[1]](0)==J[0]?Vf:np,A[2]));return((k=((D=this.B.toString())&&L[A[0]]("?",D),this.M))&&L[A[0]]("#",
F[2](66,null,k,O5)),L).join("")},function(L){return F[40].call(this,40,L)}),Hl=((Bu.prototype.toString=function(L,w,J,k,C,D,H,b,V){if(this[(V=["K","Xr","U"],V)[2]])return this[V[2]];if(!this[V[0]])return"";for(w=(C=[],Array.from(this[V[0]].keys())),k=0;k<w.length;k++)for(J=w[k],D=encodeURIComponent(String(J)),H=this[V[1]](J),L=0;L<H.length;L++)b=D,""!==H[L]&&(b+="="+encodeURIComponent(String(H[L]))),C.push(b);return this[V[2]]=C.join("&")},((Bu.prototype.add=function(L,w,J,k){return(this.U=(u[7]((k=
[84,"set",1],k[0]),this),null),L=R[37](43,L,this),(J=this.K.get(L))||this.K[k[1]](L,J=[]),J.push(w),this).B+=k[2],this},r=Bu.prototype,EI.prototype).resolve=function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((O=(f=["pop",55,(V=["/","/.","%2525"],!0)],new EI(this)),(S=!!L.K)?a[40](25,V[2],O,L.K):S=!!L.O,S)?O.O=L.O:S=!!L.U,S?O.U=L.U:S=null!=L.I,w=L.N,S)a[25](26,0,L.I,O);else if(S=!!L.N)if(w.charAt(0)!=V[0]&&(this.U&&!this.N?w=V[0]+w:(J=O.N.lastIndexOf(V[0]),-1!=J&&(w=O.N.slice(0,J+1)+w))),k=w,".."==k||"."==k)w=
"";else if(N[2](51,k,"./")||N[2](f[1],k,V[1])){for(D=(C=(H=0==(A=k.split(V[0]),k.lastIndexOf(V[0],0)),[]),0);D<A.length;)b=A[D++],"."==b?H&&D==A.length&&C.push(""):".."==b?((1<C.length||1==C.length&&""!=C[0])&&C[f[0]](),H&&D==A.length&&C.push("")):(C.push(b),H=f[2]);w=C.join(V[0])}else w=k;return S?d[46](4,V[2],O,w):S=""!==L.B.toString(),S?a[29](23,null,O,F[19](9,L.B)):S=!!L.M,S&&z[30](16,V[2],O,L.M),O},r.le=function(){return 0==(u[7](52,this),this).B},r).forEach=function(L,w){u[7](54,this),this.K.forEach(function(J,
k){J.forEach(function(C){L.call(w,C,k,this)},this)},this)},r.Xr=function(L,w,J,k,C){if(((C=[38,86,59],u)[7](C[1],this),J=[],"string")===typeof L)a[C[0]](9,this,L)&&(J=J.concat(this.K.get(R[37](C[2],L,this))));else for(k=Array.from(this.K.values()),w=0;w<k.length;w++)J=J.concat(k[w]);return J},r).E_=function(L,w,J,k,C,D,H){for(w=((H=[0,52,"K"],u)[7](H[1],this),k=Array.from(this[H[2]].values()),D=[],J=Array.from(this[H[2]].keys()),H)[0];w<J.length;w++)for(L=k[w],C=H[0];C<L.length;C++)D.push(J[w]);return D},
r.set=function(L,w,J){return this[((this[u[7](54,(J=["B","U","set"],this)),J[1]]=null,L=R[37](25,L,this),a)[38](8,this,L)&&(this[J[0]]-=this.K.get(L).length),this.K)[J[2]](L,[w]),J[0]]+=1,this},r.get=function(L,w,J){if(!L)return w;return(J=this.Xr(L),0)<J.length?String(J[0]):w},function(){return R[24].call(this,42)}),vL=function(L,w){return a[12].call(this,3,L,w)},Kr=function(L,w,J){return z[45].call(this,1,L,w,J)},yk={margin:"0 auto",top:"0px",left:"0px",right:"0px",position:"absolute",border:"1px solid #ccc",
"z-index":"2000000000","background-color":"#fff",overflow:"hidden"},rT=function(L,w,J){return R[35].call(this,4,L,w,J)},a3={},G8=(a[22](92,JH,51),function(L){return F[33].call(this,10,L)}),dt=function(L,w){return a[33].call(this,9,L,w)},CN={},eU=(h8.prototype.p6=null,h8.prototype.jP=function(){return this.K},{}),kc={},R5={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;",
"`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},AS="ready complete success error abort timeout".split(" "),If={},bY={},M2={},iJ=function(){return u[13].call(this,21)},g=((d[15](72,TS,(h8.prototype.toString=function(){return this.K},h8)),TS.prototype.HM=eU,a[22](93,function(L,w,J,k){if((k=[9,3,"nodeType"],!L)||L[k[2]]==k[1])return!1;if(L.innerHTML)for(J=u[2](2,u[k[0]](71,9998)),w=J.next();!w.done;w=J.next())if(-1!=L.innerHTML.indexOf(w.value))return!1;return 1==
L[k[2]]&&L.src&&d[34](8).test(L.src)?!1:!0},33),a)[22](89,N[41].bind(null,18),2),function(L){function w(J){this.K=J}return w.prototype=L.prototype,function(J,k,C){return(C=new w(String(J)),void 0)!==k&&(C.p6=k),C}})(TS),QM=/</g,iW=(a[22](95,d[28].bind(null,88),36),function(L){return R[20].call(this,23,L)}),Sv=((a[42](38,bp,M),a[22](95,F[8].bind(null,26),11),bp).prototype.J=function(){return u[18](3,0,this,5)},bp.prototype.jS=function(){return R[48](8,null,3,this)},t||Di),GJ=function(L,w,J){return u[8].call(this,
18,L,w,J)},rA=(Kg.prototype.floor=function(){return(this.x=Math.floor(this.x),this).y=Math.floor(this.y),this},nN.prototype.U=function(L,w){L.appendChild(w)},(r=Q.prototype,Kg.prototype.round=function(){return this.y=(this.x=Math.round(this.x),Math).round(this.y),this},Kg.prototype).ceil=function(){return this.y=Math.ceil((this.x=Math.ceil(this.x),this.y)),this},r.aspectRatio=function(){return this.width/this.height},r.le=function(){return!(this.width*this.height)},r.ceil=function(){return(this.width=
Math.ceil(this.width),this).height=Math.ceil(this.height),this},r.floor=function(){return this.height=(this.width=Math.floor(this.width),Math.floor(this.height)),this},r.round=function(){return this.height=Math.round((this.width=Math.round(this.width),this.height)),this},function(L,w){return z[17].call(this,16,L,w)}),A0=(nN.prototype.L=function(L){return d[13](60,L,this.K)},function(L){return N[37].call(this,48,L)}),ge=(nN.prototype.B=function(L,w,J){return a[19](36,0,2,arguments,this.K)},function(L,
w){return N[16].call(this,24,L,w)}),IM=(iJ.prototype.MO=(ge.prototype.K=function(){this.U=!0},function(){return z[2].call(this,16)}),function(L){return d[16].call(this,48,L)}),gV=/[^\{]*\{([\s\S]*)\}$/,wT={},tR={0:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",1:"\u041e\u0448\u0438\u0431\u043a\u0430: \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b API. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",
2:((ge.prototype.preventDefault=function(){this.defaultPrevented=!0},iJ.prototype).xd=(iJ.prototype.H=function(){if(this.Cc)for(;this.Cc.length;)this.Cc.shift()()},!1),"\u0412\u0440\u0435\u043c\u044f \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),10:"\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f: \u0434\u043e\u043b\u0436\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e A-Za-z/_ \u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."},
Uk=function(L,w,J){if((J=["removeEventListener","defineProperty","test"],!y.addEventListener)||!Object[J[1]])return!1;L=Object[J[1]]({},"passive",(w=!1,{get:function(){w=!0}}));try{y.addEventListener(J[2],function(){},L),y[J[0]](J[2],function(){},L)}catch(k){}return w}(),cL=(d[15](41,OI,ge),{2:"touch",3:"pen",4:"mouse"}),m3=!(OI.prototype.preventDefault=(OI.prototype.K=function(L){this[(L=["call","qO","K"],OI.R)[L[2]][L[0]](this),L[1]].stopPropagation?this[L[1]].stopPropagation():this[L[1]].cancelBubble=
!0},function(L,w){(L=(OI[w=["R","preventDefault","qO"],w[0]][w[1]].call(this),this[w[2]]),L)[w[1]]?L[w[1]]():L.returnValue=!1}),1),O6="closure_listenable_"+(1E6*Math.random()|0),c2=0,ZL={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},sk="closure_lm_"+((iS.prototype.add=function(L,w,J,k,C,D,H,b,V,A){return-1<
(b=d[V=(D=(A=["toString","K",11],L)[A[0]](),this)[A[1]][D],V||(V=this[A[1]][D]=[],this.B++),A[2]](29,0,k,w,V,C),b)?(H=V[b],J||(H.j2=!1)):(H=new pr(!!k,D,this.src,w,C),H.j2=J,V.push(H)),H},1E6)*Math.random()|0),Dt=function(L,w,J,k,C,D,H){return L[H=["j2","listener","N7"],H[2]]?k=!0:(J=new OI(w,this),D=L[H[1]],C=L.lm||L.src,L[H[0]]&&d[32](35,L),k=D.call(C,J)),k},n9=0,z2="__closure_events_fn_"+(1E9*Math.random()>>>0),CH=((((((((F[38](2,0,function(L){Dt=L(Dt)}),d[15](41,I,iJ),I).prototype[O6]=!0,I.prototype).BH=
function(L){this.vM=L},I.prototype).removeEventListener=function(L,w,J,k){a[19](31,null,w,k,L,this,J)},I.prototype).H=function(L,w,J,k,C,D){if(I[D=[39,"K","R"],D[2]].H.call(this),this.W)for(C in k=this.W,w=0,k[D[1]]){for(L=k[J=0,D[1]][C];J<L.length;J++)++w,d[D[0]](18,null,L[J]);delete k[D[1]][k.B--,C]}this.vM=null},d[15](8,El,I),El).prototype.H=function(L,w){delete this[(L=[null,(w=[2,25,"K"],"keydown"),!1],El.R.H.call(this),a)[19](w[1],L[0],this.U,this,L[1],this[w[2]],L[w[0]]),a[19](30,L[0],this.B,
this,"click",this[w[2]],L[w[0]]),w[2]]},El.prototype).B=function(L){R[26](2,L,this)},El).prototype.U=function(L,w){(13==(w=[3,1,"keyCode"],L[w[2]])||Di&&L[w[2]]==w[0])&&R[26](w[1],L,this)},d[15](8,Dy,OI),function(L){return F[7].call(this,16,L)});d[15](72,CH,OI),a[42](17,V$,I);
var C9,Rf=(((V$.prototype.O=function(L){return 32==L.keyCode&&"keyup"==L.type?this.B(L):!0},V$.prototype).B=(V$.prototype.H=function(L){(a[19](27,(L=["B",null,26],L[1]),this[L[0]],this,"action",this.U,!1),a)[19](L[2],L[1],this.I,this,["touchstart","touchend"],this.K,!1),I.prototype.H.call(this)},function(L,w,J,k){if((J=Date.now()-this[k=["N","action","K"],k[0]],w)||1E3<J)L.type=k[1],d[41](20,L,this),L[k[2]](),this.C||L.preventDefault();return!1}),V$).prototype.I=(fM.prototype.get=function(L,w){return this.B>
(w=["K",null,0],w[2])?(this.B--,L=this[w[0]],this[w[0]]=L.next,L.next=w[1]):L=this.N(),L},function(L,w,J,k){if(k=[0,(w=[!0,"touchend",500],"now"),1],"touchstart"==L.type)this.N=Date[k[1]](),L.K();else if(L.type==w[k[2]]&&(J=Date[k[1]]()-this.N,0!=L.qO.cancelable&&J<w[2]))return this.B(L,w[k[0]]);return w[k[0]]}),function(L){return L}),Kl,o5=new fM(function(L){return L.reset()},(F[38](1,0,function(L){Rf=L}),zJ.prototype.add=function(L,w,J){this.B=(J=o5.get(),J.set(L,w),this.B?this.B.next=J:this.K=
J,J)},function(){return new s5})),s5=function(){return R[31].call(this,25)};s5.prototype.set=(s5.prototype.reset=function(){this.next=this.K=this.B=null},function(L,w){this.K=w,this.next=null,this.B=L});
var N_,KG=!1,Nc=new zJ,VM=new fM((rt.prototype.reset=function(L){this.N=(this[this.K=(this.B=(this.I=(L=["U",null,!1],L[2]),L[1]),L)[1],L[0]]=L[1],L[1])},function(L){L.reset()}),function(){return new rt}),jH=F[47].bind(null,(Z$.prototype.$goog_Thenable=!(Z$.prototype.then=function(L,w,J){return d[26](40,null,J,this,"function"===typeof w?w:null,"function"===typeof L?L:null)},0),Z$.prototype.M=function(L,w){for(w=[27,45,2];L=R[0](14,null,this);)d[w[0]](w[1],null,w[2],this,L,this.C,this.K);this.O=!1},
Z$.prototype.cancel=(Z$.prototype.l=function(L,w){this[w=["K",0,null],w[0]]=w[1],z[41](24,w[2],3,L,this)},function(L,w){0==this.K&&(w=new D9(L),d[48](19,!0,function(){d[33](9,null,0,w,this)},this))}),1)),D9=((a[22](88,R[20].bind(null,18),44),Z$).prototype.W=function(L,w){z[41](10,((w=[null,2,0],this).K=w[2],w[0]),w[1],L,this)},function(L){return a[12].call(this,4,L)}),sI=(d[15](40,D9,Bd),D9.prototype.name="cancel",function(L,w,J){return N[15].call(this,4,w,L,J)}),ST=(d[15](40,wV,iJ),function(L){return z[35].call(this,
1,L)}),iH=((fN.prototype.ceil=(wV.prototype.H=(wV.prototype.handleEvent=(mQ.prototype.round=function(){return this.left=Math.round(((this.right=(this.top=Math.round(this.top),Math.round(this.right)),this).bottom=Math.round(this.bottom),this).left),this},function(){throw Error("EventHandler.handleEvent not implemented");}),mQ.prototype.floor=function(){return(this.bottom=Math.floor((this.right=Math.floor((this.top=Math.floor(this.top),this).right),this.bottom)),this).left=Math.floor(this.left),this},
mQ.prototype.ceil=function(){return this.left=Math.ceil(((this.right=Math.ceil((this.top=Math.ceil(this.top),this).right),this).bottom=Math.ceil(this.bottom),this.left)),this},function(){(wV.R.H.call(this),F)[44](26,this)}),function(){return this.height=Math.ceil(((this.top=Math.ceil((this.left=Math.ceil(this.left),this).top),this).width=Math.ceil(this.width),this.height)),this}),fN.prototype.floor=function(){return this.height=(this.width=(this.top=(this.left=Math.floor(this.left),Math.floor(this.top)),
Math.floor(this.width)),Math.floor(this.height)),this},fN.prototype).round=function(){return this.height=Math.round((this.width=Math.round(((this.left=Math.round(this.left),this).top=Math.round(this.top),this.width)),this.height)),this},zz?"MozUserSelect":Di||fG?"WebkitUserSelect":null),U5=(((((z[31](27,Q7),Q7.prototype).HH=0,d)[15](41,XP,I),XP).prototype.cB=Q7.X(),XP.prototype).K1=function(){this.B=F[38](10,"DIV",this.l)},function(L,w,J,k,C){return F[30].call(this,4,L,w,J,k,C)}),jj=(XP.prototype.BH=
(XP.prototype.render=function(L,w){if(w=["appendChild","K1",null],this.t7)throw Error("Component already rendered");(this.B||this[w[1]](),L?L.insertBefore(this.B,w[2]):this.l.K.body[w[0]](this.B),this.N)&&!this.N.t7||this.A()},function(L,w){if((w=["N","call","Method not supported"],this[w[0]])&&this[w[0]]!=L)throw Error(w[2]);XP.R.BH[w[1]](this,L)}),(r=XP.prototype,XP).prototype.L=function(){return this.B},null),nM=(((((r.H=function(L){this[(((L=[36,"B","gY"],this).t7&&this[L[2]](),this).G&&(this.G.MO(),
delete this.G),z[0](67,this,function(w){w.MO()}),this[L[1]])&&u[L[0]](29,this[L[1]]),this.O=this.M=this.N=null,L[1]]=null,XP.R.H.call(this)},(r.Ot=function(){return this.B},r).gY=(r.A=function(){z[this.t7=!0,0](68,this,function(L){!L.t7&&L.L()&&L.A()})},r.Um=function(L){this.B=L},function(L){this[(z[0](69,(L=[42,44,"t7"],this),function(w){w.t7&&w.gY()}),this).G&&F[L[1]](L[0],this.G),L[2]]=!1}),d)[15](72,hI,OI),d[15](41,t$,I),t$.prototype).M=function(L,w,J){if(w=[(J=[0,"metaKey","handleEvent"],17),
91,16],Di||fG)if(this.K==w[J[0]]&&!L.ctrlKey||18==this.K&&!L.altKey||Kj&&this.K==w[1]&&!L[J[1]])this.B=this.K=-1;if(d[39](25,(-1==this.K&&(L.ctrlKey&&L.keyCode!=w[J[0]]?this.K=w[J[0]]:L.altKey&&18!=L.keyCode?this.K=18:L[J[1]]&&L.keyCode!=w[1]&&(this.K=w[1])),w[J[0]]),w[2],this.K,L.shiftKey,L.altKey,L.keyCode,L[J[1]],L.ctrlKey))this.B=R[36](18,w[1],L.keyCode),nM&&(this.O=L.altKey);else this[J[2]](L)},t$).prototype.U=null,t$).prototype.l=function(L){(this.K=-1,this).B=(this.O=L.altKey,-1)},t$.prototype.B=
-1,t$.prototype.O=!1,Kj&&zz),UI={ID:"mousedown",Oj:"mouseup",Vu:"mousecancel",mP:"mousemove",Vw:"mouseover",Fo:"mouseout",x3:((t$.prototype.L=function(){return this.U},t$.prototype).handleEvent=function(L,w,J,k,C,D,H,b,V,A){if((b=V=R[36](17,((C=(k=L.qO,[0,9,(A=[63,2,"keyIdentifier"],91)]),w=k.altKey,t)&&"keypress"==L.type?(V=this.B,D=13!=V&&27!=V?k.keyCode:0):(Di||fG)&&"keypress"==L.type?(V=this.B,D=k.charCode>=C[0]&&63232>k.charCode&&a[41](3,189,V)?k.charCode:0):("keypress"==L.type?(nM&&(w=this.O),
k.keyCode==k.charCode?32>k.keyCode?(D=C[0],V=k.keyCode):(D=k.charCode,V=this.B):(D=k.charCode||C[0],V=k.keyCode||this.B)):(V=k.keyCode||this.B,D=k.charCode||C[0]),Kj&&D==A[0]&&224==V&&(V=191)),C[A[1]]),V))?63232<=V&&V in ZL?b=ZL[V]:25==V&&L.shiftKey&&(b=C[1]):k[A[2]]&&k[A[2]]in x$&&(b=x$[k[A[2]]]),!zz||"keypress"!=L.type||d[39](26,17,16,this.K,L.shiftKey,w,b,L.metaKey,L.ctrlKey))H=b==this.K,this.K=b,J=new hI(b,D,H,k),J.altKey=w,d[41](36,J,this)},t$.prototype.K=-(((t$.prototype.H=function(L){(L=["R",
null,"call"],t$[L[0]].H[L[2]](this),R)[16](1,L[1],this)},t$.prototype).C=null,t$.prototype).N=(t$.prototype.I=null,null),1),"mouseenter"),Ld:"mouseleave"},xD,Iy=(z[31](30,PL),{}),AH="mat",Ow=(((((((r=((((PL.prototype.pR=(PL.prototype.ms=(PL.prototype.h7=(r=(PL.prototype.Re=function(L,w,J,k){if((k=[0,29,"mW"],L).L1&32&&(J=L.L())){if(!w&&L[k[2]]()){try{J.blur()}catch(C){}L[k[2]]()&&L.A7(null)}(F[47](50,J)&&F[k[1]](60,k[0],J))!=w&&a[18](33,k[0],J,w)}},PL.prototype),PL.prototype.Mj=function(L,w){F[46](11,
this.sm()+"-rtl",L,w)},function(L,w,J,k,C,D,H,b){(D=((b=["selected","role","checked"],xD)||(xD={1:"disabled",8:"selected",16:"checked",64:"expanded"}),xD)[w],(k=L.getAttribute(b[1])||null)?(H=KM[k]||D,C=D==b[2]||D==b[0]?H:D):C=D,C)&&F[24](72,C,L,J)}),function(){}),function(L,w,J,k,C,D,H,b){if(D=(b=(k=!w,["setAttribute","unselectable","*"]),t?L.getElementsByTagName(b[2]):null),iH){if(J=k?"none":"",L.style&&(L.style[iH]=J),D)for(C=0;H=D[C];C++)H.style&&(H.style[iH]=J)}else if(t&&(J=k?"on":"",L[b[0]](b[1],
J),D))for(C=0;H=D[C];C++)H[b[0]](b[1],J)}),r).sm=function(){return"goog-control"},r).im=function(L,w,J,k,C,D){if(D=[3,46,"L"],k=w[D[2]]())(C=u[19](27,this,L))&&F[D[1]](D[0],C,w,J),this.h7(k,L,J)},r).jF=(PL.prototype.h1=function(L,w){return(w=[40," ","B"],L.l)[w[2]]("DIV",F[w[0]](4,this,L).join(w[1]),L.jP())},function(L,w,J){return L.L1&(J=[10,28,"L"],32)&&(w=L[J[2]]())?F[47](J[0],w)&&F[29](J[1],0,w):!1}),r.Gu=function(L,w){((w=["l","B","isEnabled"],null)==L.kz&&(L.kz="rtl"==d[16](69,L.t7?L[w[1]]:
L[w[0]].K.body,"direction")),L).kz&&this.Mj(L.L(),!0),L[w[2]]()&&this.Re(L,L.isVisible())},r.qB=function(L,w,J,k,C,D,H,b,V,A,S){return(D=((w.be=((H=(C=(((S=[20,"firstChild",(b=[0,"class",!1],2)],L.id)&&z[11](42,'"',w,L.id),L)&&L[S[1]]?d[15](80,L[S[1]].nextSibling?F[14](8,b[0],L.childNodes):L[S[1]],w):w.fc=null,V=b[0],this).sm(),J=this.sm(),A=b[S[2]],k=b[S[2]],F)[14](8,b[0],a[3](9,L)),H).forEach(function(O,f,E){(f=[0,10,(E=[20,29,42],1)],A||O!=C)?k||O!=J?V|=a[E[0]](E[0],f[1],O,this):k=!0:(A=!0,J==
C&&(k=!0)),a[E[0]](21,f[1],O,this)==f[2]&&F[47](E[2],L)&&F[E[1]](E[1],f[0],L)&&a[18](41,f[0],L,!1)},this),V),A)||(H.push(C),J==C&&(k=!0)),k||H.push(J),w.D))&&H.push.apply(H,D),A&&k&&!D||a[12](S[0],b[1],L,H.join(" ")),L},d[15](73,G,XP),G.prototype),r).fc=null,r).XL=255,G).prototype.A=function(L,w,J,k,C,D){((this[this[(((J=(L=(w=["key",1,8],D=["L1","C1",0],G.R.A.call(this),this.I),this.B),this.isVisible())||F[24](32,"hidden",J,!this.isVisible()),this).isEnabled()||L.h7(J,w[1],!this.isEnabled()),D)[0]]&
w[2]&&L.h7(J,w[2],!!(this.be&w[2])),this[D[0]]&16&&L.h7(J,16,this[D[1]]()),D[0]]&64&&L.h7(J,64,!!(this.be&64)),this.I).Gu(this),this[D[0]])&-2&&(this.kd&&F[19](28,null,this,!0),this[D[0]]&32&&(k=this.L()))&&(C=this.Z||(this.Z=new t$),d[7](8,"keyup",C,k),R[46](59,R[46](49,R[46](58,u[D[2]](31,this),C,w[D[2]],this.D5),k,"focus",this.MB),k,"blur",this.A7))},r).Ot=function(){return this.L()},G.prototype).kd=!0,G.prototype).Um=function(L,w){this[((u[this.B=L=this.I.qB((w=[25,"none","Cw"],L),this),23](w[0],
"role",null,L,this.I),this.I).pR(L,!1),w)[2]]=L.style.display!=w[1]},function(){return N[9].call(this,3)}),r$=((r.L1=39,r.Cw=!0,r).K1=function(L,w,J){(this[L=(J=["B","I",26],w=["hidden",!1,null],this[J[1]].h1(this)),J[0]]=L,u[23](9,"role",w[2],L,this[J[1]]),this)[J[1]].pR(L,w[1]),this.isVisible()||(N[22](J[2],L,w[1]),L&&F[24](24,w[0],L,!0))},{done:!(r.be=0,0),value:void 0}),Lj=(((((((((((((((((a[22](86,u[9].bind(null,17),23),G.prototype.D=null,G.prototype).H=function(L){this.fc=(delete ((L=["I","MO",
"Z"],G).R.H.call(this),this[L[2]]&&(this[L[2]][L[1]](),delete this[L[2]]),this)[L[0]],this.IL=this.D=null)},G.prototype).gY=function(L){(((L=[5,"I","Re"],G).R.gY.call(this),this).Z&&R[16](L[0],null,this.Z),this).isVisible()&&this.isEnabled()&&this[L[1]][L[2]](this,!1)},a)[22](90,function(L,w){return N[20](6,"",(w=void 0===w?100:w,function(J){return Array[J=["toString",0,"from"],J[2]](L[J[0]]()).slice(J[1],w).join("")}))},21),G.prototype.jP=function(){return this.fc},G).prototype.isVisible=function(){return this.Cw},
G.prototype.isEnabled=function(){return!(this.be&1)},G).prototype.K=function(L,w,J,k){(w=["function",(k=[1,(J=this.N,2),"isEnabled"],!1),4],J&&typeof J[k[2]]==w[0])&&!J[k[2]]()||!u[12](8,16,this,k[0],!L)||(L||(N[41](58,w[k[1]],w[k[0]],this),z[31](83,16,w[k[0]],this)),this.isVisible()&&this.I.Re(this,L),a[32](39,k[0],k[0],this,!L,!0))},G).prototype.isActive=function(){return!!(this.be&4)},G.prototype.S=function(L,w,J,k,C){return(w=new (((z[35](48,16,(C=["C1",32,12],k=[1,8,!0],this))&&this.Y(!this[C[0]]()),
z[35](52,k[1],this)&&u[C[2]](28,16,this,k[1],k[2]))&&a[C[1]](38,k[0],k[1],this,k[2]),z[35](50,64,this))&&(J=!(this.be&64),u[C[2]](40,16,this,64,J)&&a[C[1]](35,k[0],64,this,J)),ge)("action",this),L)&&(w.altKey=L.altKey,w.ctrlKey=L.ctrlKey,w.metaKey=L.metaKey,w.shiftKey=L.shiftKey,w.N=L.N),d[41](5,w,this)},G.prototype).gw=function(L){return 13==L.keyCode&&this.S(L)},G.prototype).C1=function(){return!!(this.be&16)},G.prototype).ye=function(L,w,J){J=(w=[2,!1,!0],[35,48,"isActive"]),this.isEnabled()&&
(z[J[0]](53,w[0],this)&&z[31](87,16,w[2],this),this[J[2]]()&&this.S(L)&&z[J[0]](J[1],4,this)&&N[41](62,4,w[1],this))},G.prototype).xz=function(L,w){u[12]((w=[56,32,42],w[0]),16,this,w[1],L)&&a[w[1]](w[2],1,w[1],this,L)},G).prototype.mW=function(){return!!(this.be&32)},G.prototype).Y=function(L,w){u[w=[12,16,1],w[0]](8,w[1],this,w[1],L)&&a[32](37,w[2],w[1],this,L)},G.prototype).dI=d[7].bind(null,21),G).prototype.R7=function(L,w,J){(J=(w=[2,4,0],[1,!0,2]),this.isEnabled()&&(z[35](50,w[0],this)&&z[31](82,
16,J[1],this),L.qO.button!=w[J[2]]||Kj&&L.ctrlKey||(z[35](55,w[J[0]],this)&&N[41](61,w[J[0]],J[1],this),this.I&&this.I.jF(this)&&this.L().focus())),L.qO.button!=w[J[2]]||Kj&&L.ctrlKey)||L.preventDefault()},G).prototype.A7=function(L){z[(L=[4,35,51],L)[1]](L[2],L[0],this)&&N[41](59,L[0],!1,this),z[L[1]](49,32,this)&&this.xz(!1)},G).prototype.Hm=function(L,w,J){(w=[!0,16,(J=[1,36,35],1)],!d[31](57,w[2],w[J[0]],this.L(),L)&&d[41](J[1],"enter",this))&&this.isEnabled()&&z[J[2]](54,2,this)&&z[31](94,w[J[0]],
w[0],this)}," parent component");
if(((G.prototype.ue=function(L,w,J){!d[31](51,(w=[4,16,(J=[2,86,0],1)],w[J[0]]),w[1],this.L(),L)&&d[41](36,"leave",this)&&(z[35](52,w[J[2]],this)&&N[41](60,w[J[2]],!1,this),z[35](51,J[0],this)&&z[31](J[1],w[1],!1,this))},G).prototype.D5=function(L,w){return w=["K",!1,"preventDefault"],this.isVisible()&&this.isEnabled()&&this.gw(L)?(L[w[2]](),L[w[0]](),!0):w[1]},G.prototype).MB=function(){z[35](49,32,this)&&this.xz(!0)},"function"!==typeof G)throw Error("Invalid component class "+G);
if("function"!==typeof PL)throw Error("Invalid renderer class "+PL);
var Lt=R[27](25,G),$y=(Iy[Lt]=PL,u[4](41,function(){return new G(null)},"goog-control"),function(L,w){return u[43].call(this,1,L,w)}),RJ=(d[15](8,$y,iJ),!t||9<=Number(J8)),$w=function(L,w,J){return a[30].call(this,21,L,w,J)},Zi=((((((((((r=(((r=(a[42](16,Ol,(($y.prototype.N=function(L,w,J,k,C,D,H,b){this[b=[2,"K",(H=["mousedown",!1,null],"B")],b[1]]?this[b[1]]=H[1]:(w=L.qO,J=w.button,k=w.type,D=u[11](29,0,H[b[0]],w,H[0]),this[b[2]].R7(new OI(D,L[b[2]])),C=u[11](28,0,H[b[0]],w,"mouseup"),this[b[2]].ye(new OI(C,
L[b[2]])),RJ||(w.button=J,w.type=k))},$y.prototype.H=function(){$y.R.H.call((this.B=null,this))},$y.prototype.O=function(){this.K=!0},$y.prototype).I=function(){this.K=!1},G)),Ol).prototype,r.x6=function(){2==this.U||this.zn(2)},r).R7=function(L,w){G.prototype.R7[w=[0,"call",10],w[1]](this,L),a[w[0]](w[2],!0,this)},r.A=function(L,w,J,k){((G.prototype.A.call((w=[(k=[57,24,"Hm"],"mousedown"),"mouseout",":"],this)),this.kd)&&(J=u[0](26,this),this.C&&R[46](k[0],R[46](50,R[46](48,R[46](56,R[46](k[0],J,
new V$(this.C),"action",this.PH),this.C,"mouseover",this[k[2]]),this.C,w[1],this.ue),this.C,w[0],this.R7),this.C,"mouseup",this.ye),R[46](53,R[46](51,J,new V$(this.L()),"action",this.PH),new El(document),"action",this.PH)),this.C)&&(this.C.id||(this.C.id=F[10](52,w[2],this)+".lbl"),L=this.L(),F[k[1]](k[1],"labelledby",L,this.C.id))},r).Dr=function(L){return 3==(L=[49,"U",64],this)[L[1]]?R[L[0]](L[2]):this.zn(3)},r.K1=function(L){this[(L=["B",13,"isEnabled"],L)[0]]=R[43](51,N[15].bind(null,L[1]),{id:F[10](49,
":",this),NZ:this.D,checked:this.C1(),disabled:!this[L[2]](),pH:this.tabIndex},void 0,this.l)},Ol.prototype),Ol.prototype.gw=function(L,w){return(w=[13,32,"keyCode"],L[w[2]])==w[1]||L[w[2]]==w[0]?(this.PH(L),!0):!1},r).xz=function(L,w){(G[(w=["prototype",0,!1],w)[0]].xz.call(this,L),a)[w[1]](8,w[2],this)},r.C1=function(){return 0==this.U},r.PH=function(L,w){return a[44].call(this,23,L,w)},Ol.prototype.Y=function(L){L&&this.C1()||!L&&1==this.U||this.zn(L?0:1)},r).zn=function(L,w,J,k){if((J=[1,"recaptcha-checkbox-loading",
(k=[36,"xz",2],3)],0==L)&&this.C1()||L==J[0]&&this.U==J[0]||L==k[2]&&this.U==k[2]||L==J[k[2]]&&this.U==J[k[2]])return d[0](k[2]);return(w=((((L==k[2]&&this[k[1]](!1),this).U=L,N[32](5,this,0==L,"recaptcha-checkbox-checked"),N)[32](1,this,L==k[2],"recaptcha-checkbox-expired"),N)[32](8,this,L==J[k[2]],J[1]),this.L()))&&F[24](40,"checked",w,0==L?"true":"false"),d[41](k[0],"change",this),d[0](3)},Ol).prototype.K=function(L,w){w=["L","tabIndex","K"],G.prototype[w[2]].call(this,L),L&&(this[w[0]]()[w[1]]=
this[w[1]])},r).mW=function(L){return(L=[44,"L",18],G).prototype.mW.call(this)&&!(this.isEnabled()&&this[L[1]]()&&N[L[0]](L[2],this[L[1]](),"recaptcha-checkbox-clearOutline"))},d)[15](9,ph,iJ),ph.prototype.start=function(L,w,J,k){(J=(w=((L=[(k=["N",35,4],null),0,!1],this).u7(),this[k[0]]=L[2],a[27](9,L[0],this)),d)[9](16,L[0],this),w&&!J&&this.B.mozRequestAnimationFrame)?(this.K=R[k[1]](45,"MozBeforePaint",this.B,this.U),this.B.mozRequestAnimationFrame(L[0]),this[k[0]]=!0):this.K=w&&J?w.call(this.B,
this.U):this.B.setTimeout(R[23](k[2],L[1],this.U),20)},ph).prototype.u7=function(L,w,J){this.K=(J=["B",null,"call"],this.isActive()&&(w=a[27](8,J[1],this),L=d[9](14,J[1],this),w&&!L&&this[J[0]].mozRequestAnimationFrame?d[32](1,this.K):w&&L?L[J[2]](this[J[0]],this.K):this[J[0]].clearTimeout(this.K)),J)[1]},ph.prototype.isActive=function(){return null!=this.K},ph.prototype).H=function(){(this.u7(),ph.R.H).call(this)},ph).prototype.C=function(L){this[(L=["I","K",32],this.N)&&this[L[1]]&&d[L[2]](3,this[L[1]]),
L[1]]=null,this.O.call(this[L[0]],u[44](27))},d)[15](73,hr,I),r=hr.prototype,function(L){return z[22].call(this,3,L)}),Qm=((((r=(d[15]((((r.setInterval=(r.nY=(r.start=function(L){L=(this.oL=!0,["setTimeout","n1","K"]),this[L[1]]||(this[L[1]]=this[L[2]][L[0]](this.U,this.B),this.N=u[44](21))},function(L){return R[15].call(this,16,L)}),function(L,w){this[w=["oL","B",!1],w[1]]=L,this.n1&&this[w[0]]?(d[3](17,w[2],this),this.start()):this.n1&&d[3](20,w[2],this)}),r.n1=null,r).oL=!1,hr.prototype).H=function(L){hr.R[(L=
[!1,"H",3],L)[1]].call(this),d[L[2]](21,L[0],this),delete this.K},73),tr,iJ),tr).prototype,r).o7=0,r.H=function(L){delete (delete this[(tr[(L=["R","u7","K"],L)[0]].H.call(this),this)[L[1]](),L[2]],this).B},r).start=function(L,w){this.o7=(w=["U",30,"N"],this.u7(),a[0](w[1],this[w[0]],void 0!==L?L:this[w[2]]))},r.u7=function(L){(this[L=[0,"o7","isActive"],L[2]]()&&R[7](17,this[L[1]]),this)[L[1]]=L[0]},r).isActive=function(){return 0!=this.o7},null),vo=null,uW=(r.Lw=function(){return u[2].call(this,
8)},{}),U=(((((((((((((((((d[15](41,Ow,I),Ow).prototype.B=function(L){d[41](5,L,this)},Ow.prototype.O=function(){this.B("finish")},d[15](9,gA,Ow),gA.prototype).play=function(L,w,J,k,C){if(C=(k=[0,1,!0],["K","play","startTime"]),L||this[C[0]]==k[0])this.progress=k[0],this.coords=this.U;else if(this[C[0]]==k[1])return!1;return(this[((this.endTime=(-1==this[w=(d[39](70,!1,this),u[44](24)),this[C[2]]=w,C[0]]&&(this[C[2]]-=this.duration*this.progress),this[C[2]]+this.duration),this.progress||this.B("begin"),
this).B(C[1]),-1)==this[C[0]]&&this.B("resume"),C[0]]=k[1],J=R[27](17,this),J in uW||(uW[J]=this),d)[13](1),R[43](1,k[1],"end",w,this),k[2]},gA.prototype).I=function(L,w,J){(((this.K=(w=[!1,"end",(J=["progress",1,10],0)],d[39](69,w[0],this),w[2]),L)&&(this[J[0]]=J[1]),N)[28](J[2],w[2],this[J[0]],this),this).B("stop"),this.B(w[J[1]])},gA).prototype.pause=function(L){(L=["K",39,1],this)[L[0]]==L[2]&&(d[L[1]](71,!1,this),this[L[0]]=-1,this.B("pause"))},gA.prototype).M=function(){this.B("animate")},gA.prototype.H=
function(L){((0==(L=["K",!1,"I"],this[L[0]])||this[L[2]](L[1]),this).B("destroy"),gA).R.H.call(this)},gA.prototype.B=function(L){d[41](6,new O1(L,this),this)},d)[15](41,O1,ge),d)[15](8,Dh,Ow),Dh.prototype.add=function(L,w){a[31]((w=["C",35,"U"],3),L,this[w[2]])||(this[w[2]].push(L),R[w[1]](47,"finish",L,this[w[0]],!1,this))},Dh.prototype).H=function(L){((this[L=["U","H",0],L[0]].forEach(function(w){w.MO()}),this)[L[0]].length=L[2],Dh).R[L[1]].call(this)},d)[15](72,CG,Dh),CG.prototype.play=function(L,
w,J){if(this.U.length==(J=[1,(w=["begin",0,"resume"],"K"),44],w[J[0]]))return!1;if(L||this[J[1]]==w[J[0]])this.N<this.U.length&&this.U[this.N][J[1]]!=w[J[0]]&&this.U[this.N].I(!1),this.N=w[J[0]],this.B(w[0]);else if(this[J[1]]==J[0])return!1;return(this.endTime=(this.startTime=((this.B("play"),-1==this[J[1]])&&this.B(w[2]),u[J[2]](28)),null),this)[J[1]]=J[0],this.U[this.N].play(L),!0},CG.prototype).pause=function(L){this.K==(L=["B",1,"N"],L)[1]&&(this.U[this[L[2]]].pause(),this.K=-1,this[L[0]]("pause"))},
CG.prototype.C=function(L){L=["K","N","endTime"],1==this[L[0]]&&(this[L[1]]++,this[L[1]]<this.U.length?this.U[this[L[1]]].play():(this[L[2]]=u[44](20),this[L[0]]=0,this.O(),this.B("end")))},CG.prototype.I=function(L,w,J,k,C){if((this.K=(w=["end",!(C=["N",0,"endTime"],0),"stop"],C[1]),this)[C[2]]=u[44](24),L)for(k=this[C[0]];k<this.U.length;++k)J=this.U[k],J.K==C[1]&&J.play(),J.K==C[1]||J.I(w[1]);else this[C[0]]<this.U.length&&this.U[this[C[0]]].I(!1);this.B(w[2]),this.B(w[C[1]])},d[15](40,vE,gA),
vE.prototype.O=function(L){((L=["call",!0,"O"],this.Y)||this.play(L[1]),vE.R)[L[2]][L[0]](this)},vE).prototype.M=function(L){this.C.style[(L=["N",1,"backgroundPosition"],L)[2]]=-Math.floor(this.coords[0]/this[L[0]].width)*this[L[0]].width+"px "+-Math.floor(this.coords[L[1]]/this[L[0]].height)*this[L[0]].height+"px",vE.R.M.call(this)},vE.prototype).H=function(){(vE.R.H.call(this),this).C=null},a)[42](20,rM,Ol),rM.prototype.K1=function(L){this.B=(L=["tabIndex",43,11],R[L[1]](61,N[15].bind(null,14),
{id:F[10](50,":",this),NZ:this.D,checked:this.C1(),disabled:!this.isEnabled(),pH:this[L[0]],A0:!0,aD:!!(8>=z[20](L[2],"5.0","Internet Explorer"))},void 0,this.l))},rM).prototype.Y=function(L,w,J,k,C,D,H,b,V){(V=(J=[3,"end",!0],["play",!1,52]),L&&this.C1())||!L&&1==this.U||this.Qe||(w=this.U,b=L?0:1,k=this.mW(),H=x(function(){this.zn(b)},this),C=d[25](21,V[1],this,J[2]),this.U==J[0]?D=R[18](15,J[1],void 0,this,V[1],!L):(D=d[0](5),C.add(this.C1()?z[10](8,V[0],V[1],this):d[49](53,V[1],this,V[1],k,w))),
L?C.add(z[10](2,V[0],J[2],this,H)):(D.then(H),C.add(d[49](V[2],V[1],this,J[2],k,b))),D.then(function(){C.play()},function(){}))},rM).prototype.Dr=function(L,w){if(3==(w=["Qe",42,49],this.U)||this[w[0]])return R[w[2]](66);return L=u[w[1]](20),R[18](16,"end",L,this,!0),L.promise},rM).prototype.x6=function(L,w,J,k,C,D,H){(D=[(H=[!0,"play",0],3),!1,2],this.U==D[2]||this.Qe)||(w=this.U,L=this.mW(),k=x(function(){this.zn(2)},this),J=d[25](6,D[1],this,H[0]),this.U==D[H[2]]?C=R[18](17,"end",void 0,this,D[1],
H[0]):(C=d[H[2]](3),J.add(this.C1()?z[10](1,H[1],D[1],this):d[49](50,D[1],this,D[1],L,w))),C.then(k),J.add(d[49](51,D[1],this,H[0],D[1],D[2])),C.then(function(){J.play()},function(){}))},function(L,w,J,k,C,D){return u[37].call(this,64,L,w,J,k,C,D)}),Pl=new U1(new (rM.prototype.ZD=function(L){if(this.Qe==L)throw Error("Invalid state.");this.Qe=L},rM.prototype.A=function(L){(L=["prototype",26,"recaptcha-checkbox-spinner-overlay"],Ol[L[0]].A.call(this),this).P||(this.P=d[25](L[1],this,"recaptcha-checkbox-spinner"),
this.k9=d[25](25,this,L[2]))},Q)(28,28),"recaptcha-checkbox-borderAnimation",new mQ(0,0,560,28),20),mb=new U1(new Q(28,28),"recaptcha-checkbox-borderAnimation",new mQ(0,560,840,28),10),dM=new U1(new Q(28,28),"recaptcha-checkbox-borderAnimation",new mQ(28,0,560,56),20),qc=new U1(new Q(28,28),"recaptcha-checkbox-borderAnimation",new mQ(28,560,840,56),10),cl=new U1(new Q(28,28),"recaptcha-checkbox-borderAnimation",new mQ(56,0,560,84),20),lW=new U1(new Q(28,28),"recaptcha-checkbox-borderAnimation",new mQ(56,
560,840,84),10),r9=new U1(new Q(38,30),"recaptcha-checkbox-checkmark",new mQ(0,0,600,30),20),Le=new U1(new Q(38,30),"recaptcha-checkbox-checkmark",new mQ(0,600,1200,30),20),GW=(a[42](6,FW,M),function(L){return d[15].call(this,12,L)}),Jv=((((a[22](87,a[5].bind(null,2),35),FW).K="bgdata",d)[15](73,$w,d[20].bind(null,8)),$w.prototype.cancel=function(L,w,J,k){(k=["xd","B",!1],this).U?this[k[1]]instanceof $w&&this[k[1]].cancel():(this.K&&(J=this.K,delete this.K,L?J.cancel(L):(J.M--,0>=J.M&&J.cancel())),
this[k[0]]?this[k[0]].call(this.Y,this):this.W=!0,this.U||(w=new w6(this),d[26](5,k[2],this),a[4](16,!0,k[2],this,w)))},$w.prototype.l=function(L,w){a[4](19,!0,(this.C=!1,L),this,w)},$w).prototype.h0=function(L,w){(d[26]((w=[!1,6,17],w[1]),w[0],this),a)[4](w[2],!0,!0,this,L)},"chAll"),w6=(((d[15](($w.prototype.then=($w.prototype.$goog_Thenable=!0,function(L,w,J,k,C,D){return(D=new Z$(function(H,b){k=(C=H,b)}),z)[31](38,0,!0,C,function(H){return H instanceof w6?D.cancel():k(H),T8},this,this),D.then(L,
w,J)}),8),Hl,Bd),Hl.prototype).message="Deferred has already fired",Hl.prototype).name="AlreadyCalledError",function(){return a[14].call(this,16)}),wt=((((d[15](41,w6,Bd),w6.prototype).message="Deferred was canceled",w6).prototype.name="CanceledError",eN).prototype.U=function(){delete Fc[this.K];throw this.B;},a[22](86,z[0].bind(null,9),10),function(L){return a[34].call(this,14,L)});
(((d[15](8,rT,Bd),a0.prototype.set=function(L){(this.B=null,this).K=L},a0.prototype).load=function(L,w,J,k,C){((L=[1,null,(C=["","B",40],"HEAD")],window).botguard&&(window.botguard=L[1]),z[C[2]](51,this.K,3))&&(z[C[2]](57,this.K,L[0])||z[C[2]](51,this.K,2))?(J=z[25](2,L[1],N[42](3,z[C[2]](57,this.K,3))),z[C[2]](53,this.K,L[0])?(w=z[25](10,L[1],N[42](4,z[C[2]](59,this.K,L[0]))),this[C[1]]=z[32](11,L[2],L[1],C[0],0,R[37](6,L[1],w)).then(function(){return new window.botguard.bg(J,function(){})})):z[C[2]](53,
this.K,2)?(k=z[25](8,L[1],N[42](2,z[C[2]](49,this.K,2))),this[C[1]]=new Promise(function(D){D((F[2](74,k),new window.botguard.bg(J,function(){})))})):this[C[1]]=Promise.reject()):this[C[1]]=Promise.reject()},a0.prototype).execute=function(L){return this.B.then(function(w){return new Promise(function(J){L&&L(),w.invoke(J,!1)})})},/\uffff/.test("\uffff"),mL.prototype).K=null;
var k8,E8=(((((((d[15](9,pp,mL),k8=new pp,d[15](9,y$,I),y$.prototype.A_=function(){return this.O},y$.prototype).ou=function(){return this.C},y$.prototype.IL=function(){this.MO(),d[19](33,1,this,Gn)},y$.prototype).send=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m){if((P=[(m=[32,34,"getPrototypeOf"],!0),!1,5],this).o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.gI+"; newUri="+L);(this.D=(this.o=(this.gI=(this.K=((this.F=(Y=w?w.toUpperCase():"GET",P)[1],this).N="",this.U=
0,P[0]),L),this).P?F[24](35,0,this.P):F[24](m[1],0,k8),this.P)?N[35](75,0,1,this.P):N[35](74,0,1,k8),this.o).onreadystatechange=x(this.kd,this);try{this.G=P[0],this.o.open(Y,String(L),P[0]),this.G=P[1]}catch(q){R[1](17,P[1],P[2],this,q);return}if(V=J||"",K=new Map(this.headers),k)if(Object[m[2]](k)===Object.prototype)for(b in k)K.set(b,k[b]);else if("function"===typeof k.keys&&"function"===typeof k.get)for(H=u[2](5,k.keys()),O=H.next();!O.done;O=H.next())l=O.value,K.set(l,k.get(l));else throw Error("Unknown input type for opt_headers: "+
String(k));for(f=(A=(D=(S=Array.from(K.keys()).find(function(q){return"content-type"==q.toLowerCase()}),y.FormData&&V instanceof y.FormData),!a[31](9,Y,AI)||S||D||K.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),u)[2](7,K),A).next();!f.done;f=A.next())E=u[2](3,f.value),c=E.next().value,C=E.next().value,this.o.setRequestHeader(c,C);if((this.C&&(this.o.responseType=this.C),"withCredentials"in this.o)&&this.o.withCredentials!==this.O&&(this.o.withCredentials=this.O),"setTrustToken"in
this.o&&this.M)try{this.o.setTrustToken(this.M)}catch(q){}try{a[11](8,null,this),0<this.I&&((this.S=u[16](m[0],this.o))?(this.o.timeout=this.I,this.o.ontimeout=x(this.t0,this)):this.Y=a[0](m[1],this.t0,this.I,this)),this.l=P[0],this.o.send(V),this.l=P[1]}catch(q){R[1](20,P[1],P[2],this,q)}},y$.prototype).t0=function(L,w){(L=[8,(w=[0,"N",7],"undefined"),"ms, aborting"],typeof MR!=L[1])&&this.o&&(this.U=L[w[0]],this[w[1]]="Timed out after "+this.I+L[2],d[41](w[2],"timeout",this),this.abort(L[w[0]]))},
y$.prototype).abort=function(L,w,J){(w=["abort",null,(J=[7,"abort",!1],"complete")],this.o)&&this.K&&(this.K=J[2],this.B=!0,this.o[J[1]](),this.U=L||J[0],this.B=J[2],d[41](J[0],w[2],this),d[41](J[0],w[0],this),u[43](32,w[1],this))},y$.prototype).Z=function(){z[20](27,"","error",this)},y$.prototype).kd=function(L){if(L=["B",28,"xd"],!this[L[2]])if(this.G||this.l||this[L[0]])z[20](L[1],"","error",this);else this.Z()},y$.prototype.H=function(L){(L=["o","H","B"],this[L[0]]&&(this.K&&(this[L[2]]=!0,this.K=
!1,this[L[0]].abort(),this[L[2]]=!1),u[43](40,null,this,!0)),y$).R[L[1]].call(this)},y$.prototype.isActive=function(){return!!this.o},function(L,w,J,k){return z[32].call(this,53,k,L,J,w)}),a5=((F[38](3,((y$.prototype.getResponse=function(L,w){w=(L=["text",null,"arraybuffer"],[1,"C","mozResponseArrayBuffer"]);try{if(!this.o)return L[w[0]];if("response"in this.o)return this.o.response;switch(this[w[1]]){case "":case L[0]:return this.o.responseText;case L[2]:if("mozResponseArrayBuffer"in this.o)return this.o[w[2]]}return L[w[0]]}catch(J){return L[w[0]]}},
y$).prototype.jS=(y$.prototype.nc=function(L,w,J,k,C,D,H){k=this[C=(H=["jS",!0,"test"],[206,null,202]),H[0]]();a:switch(k){case 200:case 201:case C[2]:case 204:case C[0]:case 304:case 1223:L=H[1];break a;default:L=!1}if(!(w=L)){if(J=0===k)D=F[17](11,1,C[1],String(this.gI)),J=!r4[H[2]](D);w=J}return w},function(){try{return 2<F[28](24,this)?this.o.status:-1}catch(L){return-1}}),0),function(L){y$.prototype.Z=L(y$.prototype.Z)}),wx.prototype).Xr=function(L,w,J,k){for(J=(w=this[(k=[0,"B","push"],k)[1]].length-
1,[]);w>=k[0];--w)J[k[2]](this[k[1]][w]);for(L=(w=k[0],this).K.length;w<L;++w)J[k[2]](this.K[w]);return J},wx.prototype.le=function(){return 0===this.B.length&&0===this.K.length},function(L){return N[9].call(this,4,L)}),S_=((fr.prototype[Symbol.iterator]=function(){return this},fr.prototype).next=function(L){return L=this.K.next(),{value:L.done?void 0:this.B.call(void 0,L.value),done:L.done}},"ch"),Sc=((((a[Mw.prototype.rY=(Mw.prototype.next=function(){return r$},function(){return this}),VR.prototype[Symbol.iterator]=
function(){return new Sc(this.K())},VR.prototype.rY=(VR.prototype.B=function(){return new Sc(this.K())},function(){return new A$(this.K())}),42](21,A$,Mw),A$.prototype).next=function(){return this.K.next()},A$.prototype)[Symbol.iterator]=function(){return new Sc(this.K)},A$.prototype).B=function(){return new Sc(this.K)},function(L){return N[31].call(this,33,L)}),yM=((a[42](19,Sc,VR),Sc.prototype.next=function(){return this.U.next()},Tz.prototype).E_=function(){return(z[12](18,1,this),this.K).concat()},
function(L,w){return F[2].call(this,8,L,w)}),Yc=(Tz.prototype.forEach=(Tz.prototype.set=((Tz.prototype.Xr=((Tz.prototype.keys=function(){return u[25](23,this.rY(!0)).B()},Tz.prototype.entries=function(L){return z[36](1,(L=this,this.keys()),function(w){return[w,L.get(w)]})},Tz.prototype).le=function(){return 0==this.size},function(L,w,J){for(w=(L=(z[J=["push",12,"B"],J[1]](17,1,this),[]),0);w<this.K.length;w++)L[J[0]](this[J[2]][this.K[w]]);return L}),Tz.prototype.get=function(L,w){return d[6](9,this.B,
L)?this.B[L]:w},Tz.prototype).has=(Tz.prototype.values=(J0.prototype.add=function(L,w){this.size=(this[w=["K",10,22],w[0]].set(F[w[2]](w[1],"o",L),L),this[w[0]]).size},function(){return u[25](41,this.rY(!1)).B()}),function(L){return d[6](12,this.B,L)}),(r=J0.prototype,Tz.prototype).rY=function(L,w,J,k,C){return k=(z[12](19,1,this),this.U),C=this,J=0,w=new Mw,w.next=function(D){if(k!=C.U)throw Error("The map has changed since the iterator was created");if(J>=C.K.length)return r$;return{value:(D=C.K[J++],
L?D:C.B[D]),done:!1}},w},function(L,w,J){(d[6]((J=["U",11,"B"],J[1]),this[J[2]],L)||(this.size+=1,this.K.push(L),this[J[0]]++),this[J[2]])[L]=w}),function(L,w,J,k,C,D){for(k=this.E_(),J=0;J<k.length;J++)C=k[J],D=this.get(C),L.call(w,D,C,this)}),function(L){return d[8].call(this,6,L)}),Gq=(((r.values=((r.Xr=function(){return this.K.Xr()},J0.prototype[Symbol.iterator]=function(){return this.values()},r.rY=function(){return this.K.rY(!1)},r).le=function(){return 0===this.K.size},r.has=function(L,w){return w=
F[22](8,"o",L),this.K.has(w)},function(){return this.K.values()}),d[15](73,aQ,iJ),aQ).prototype.N=function(L,w,J){for(w=(J=[null,"P","K"],this)[J[2]];u[38](4,this)<this[J[1]];)L=this.W(),w[J[2]].push(L);for(;u[38](3,this)>this.C&&0<a[1](26,this[J[2]]);)z[28](3,J[0],N[11](34,w))},aQ).prototype.le=function(){return this.K.le()&&this.B.le()},FO.prototype.Xr=function(L,w,J,k){for(w=(J=(L=this.K,(k=0,L).length),[]);k<J;k++)w.push(L[k].aL());return w},function(L,w){return u[27].call(this,1,L,w)}),cE=(((aQ.prototype.I=
function(L,w,J,k){if(k=[11,"Y",(L=Date.now(),"C")],!(null!=this.l&&L-this.l<this.delay)){for(;0<a[1](25,this.K)&&(w=N[k[0]](38,this.K),!this[k[1]](w));)this.N();if(J=(!w&&u[38](2,this)<this[k[2]]&&(w=this.W()),w))this.l=L,this.B.add(J);return J}},aQ.prototype.U=function(L,w){(w=["K",1,9],R)[4](w[2],"o",this.B,L),this.Y(L)&&u[38](w[1],this)<this.C?this[w[0]][w[0]].push(L):z[28](w[1],null,L)},FO.prototype).E_=function(L,w,J,k){for(L=(w=(J=this.K,[]),k=0,J.length);k<L;k++)w.push(J[k].K);return w},FO.prototype).le=
function(){return 0===this.K.length},function(L,w,J,k){return R[6].call(this,8,L,w,J,k)}),Ss=(T2.prototype.aL=function(){return this.f1},aQ.prototype.W=(aQ.prototype.H=function(L,w){if(0<((w=["B","call","K"],aQ).R.H[w[1]](this),this)[w[0]][w[2]].size)throw Error("[goog.structs.Pool] Objects not released");for(L=this[(delete this[w[0]],w)[2]];!L.le();)z[28](17,null,N[11](35,L));delete this[w[2]]},function(){return{}}),aQ.prototype.Y=function(L){return"function"==typeof L.fw?L.fw():!0},function(L){return u[1].call(this,
12,L)}),Y6=((((((((a[42](26,Mi,FO),d)[15](41,l3,aQ),l3.prototype).H=function(L){(((L=["R","M",null],l3[L[0]].H).call(this),y).clearTimeout(this.D),this[L[1]].K.length=0,this)[L[1]]=L[2]},l3).prototype.O=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y){for(J=(f=(Y=["K",0,"I"],[1,2,0]),this.M);J[Y[0]].length>f[2];)if(E=this[Y[2]]()){if(A=(k=(D=J,O=D[Y[0]],O.length),O[f[2]]),k<=f[2])V=void 0;else{if(k==f[Y[1]])O.length=f[2];else{for(K=(H=(S=(O[f[2]]=O.pop(),D)[Y[0]],L=S.length,f)[2],S[H]);H<L>>f[Y[1]];){if(b=
(C=H*f[1]+(w=H*f[1]+f[1],f[Y[1]]),w<L&&S[w][Y[0]]<S[C][Y[0]]?w:C),S[b][Y[0]]>K[Y[0]])break;S[H]=S[b],H=b}S[H]=K}V=A.aL()}V.apply(this,[E])}else break},a)[22](88,R[2].bind(null,1),39),l3.prototype).N=function(){l3.R.N.call(this),this.O()},l3.prototype).I=function(L,w,J,k){if(k=[1,"O",39],!L)return(J=l3.R.I.call(this))&&this.delay&&(this.D=y.setTimeout(x(this[k[1]],this),this.delay)),J;this[a[7](k[2],k[0],0,void 0!==w?w:100,L,this.M),k[1]]()},l3.prototype).U=function(L){l3.R.U.call(this,L),this.O()},
function(L){return F[20].call(this,2,L)}),Ct=(((((((d[15](9,FP,l3),FP.prototype).W=function(L,w){return((L=(w=new y$,this.F))&&L.forEach(function(J,k){w.headers.set(k,J)}),this.G)&&(w.O=!0),w},FP).prototype.Y=function(L){return!L.xd&&!L.isActive()},d[15](9,HZ,I),HZ.prototype).send=function(L,w,J,k,C,D,H,b,V,A,S,O,f){if((f=["N","C","set"],this.K).get(L))throw Error("[goog.net.XhrManager] ID in use");return(O=new Ct(J,w,x(this[f[1]],this,L),k,C,H,void 0!==b?b:this[f[0]],V,void 0!==A?A:this.O),this.K[f[2]](L,
O),S=x(this.M,this,L),this).B.I(S,D),O},HZ).prototype.abort=function(L,w,J,k,C){if(J=this.K.get((C=[14,1,null],L)))J.va=!0,k=J.l7,w&&(k&&(z[16](C[0],this.U,k,AS,J.dc),z[23](58,C[2],function(D,H){R[4]((D=(H=["U","B",25],this[H[1]]),H[2]),"o",D[H[1]],k)&&D[H[0]](k)},k,"ready",!1,this)),R[49](4,C[1],this.K,L)),k&&k.abort()},HZ.prototype.M=function(L,w,J,k,C){(k=(C=["ou",4,"I"],this.K.get(L)))&&!k.l7?(N[17](89,w,AS,this.U,k.dc),w[C[2]]=Math.max(0,this[C[2]]),w.C=k[C[0]](),w.O=k.A_(),k.l7=w,d[41](5,new pM("ready",
this,L,w),this),u[6](21,"o",1,this,L,w),k.va&&w.abort()):(J=this.B,R[C[1]](41,"o",J.B,w)&&J.U(w))},HZ).prototype.C=function(L,w,J,k,C,D,H,b){b=(H=w.target,[20,"st",(J=["success","abort",7],6)]);switch(w.type){case "ready":u[b[2]](16,"o",1,this,L,H);break;case "complete":a:{if((D=this.K.get(L),H.U==J[2])||H.nc()||D.OT>D.z0)if(d[41](b[0],new pM("complete",this,L,H),this),D&&(D.eF=!0,D[b[1]])){C=D[b[1]].call(H,w);break a}C=null}return C;case J[0]:d[41](36,new pM("success",this,L,H),this);break;case "timeout":case "error":(k=
this.K.get(L),k).OT>k.z0&&d[41](b[2],new pM("error",this,L,H),this);break;case J[1]:d[41](b[0],new pM("abort",this,L,H),this)}return null},HZ).prototype.H=function(L,w,J){this.K=(((L=(this.U=((this[(HZ.R.H.call((w=(J=["B",1,0],[null,0]),this)),this[J[0]]).MO(),J[0]]=w[J[2]],this).U.MO(),w[J[2]]),this).K,L)[J[0]]={},L.K).length=w[J[1]],L.size=w[J[1]],w)[J[2]],L.U=w[J[1]]},d[15](9,pM,ge),function(L,w,J,k,C,D,H,b,V,A){return F[30].call(this,13,w,L,J,D,k,C,H,b,V,A)}),Mc=function(L){return N[17].call(this,
56,L)},bd=new (a[42]((Ct.prototype.Yz=((Ct.prototype.A_=function(){return this.N},Ct.prototype.rw=function(){return this.I},Ct.prototype).ou=function(){return this.U},function(){return this.B}),Ct.prototype.jP=function(){return this.K},26),Og,iJ),Og.prototype.send=function(L){return new Z$(function(w,J,k,C,D,H,b){((C=(b=(D=["-",1,2],k=(H=function(V,A,S,O,f,E){z[E=(O=S.target,["jP","N",24]),25](E[2],400,O,A)?w((0,A.O)(O)):("string"===typeof O[E[1]]?O[E[1]]:String(O[E[1]]))&&V?(f=String(this.HH++),
this.ww.send(f,A.B.toString(),A.Yz(),A[E[0]](),C,void 0,function(K){return H(!1,A,K)})):J(new DH(A,O))},this),[0,2,21]),new Tz(bd)),L).jP()instanceof Uint8Array&&C.set("Content-Type","application/x-protobuffer"),F[b[2]](1,D[b[0]],D[b[1]],D[1],3,this,L)).then(function(V,A){A=["jP","Yz","ww"],k[A[2]].send(V,L.B.toString(),L[A[1]](),L[A[0]](),C,void 0,function(S){return H(L.L6,L,S)})})},this)},Tz),DH=function(L,w){return F[42].call(this,1,L,w)},Ul=((a[42](16,DH,Bd),DH.prototype.name="XhrError",a)[42](31,
i3,iJ),function(L,w,J,k,C,D){return u[44].call(this,32,L,w,J,k,C,D)}),M_=(((((a[42](6,WE,M),a)[22](92,function(){return ev.apply(0,arguments).map(function(L,w){return(w=[38,9,9878],u)[w[1]](w[0],9123)(N[43](w[1],w[2],L))})},26),a)[42](23,Yc,M),a)[22](92,F[0].bind(null,2),8),Yc).K="hctask",function(){return N[25].call(this,3)}),IX=(a[42](25,Ue,M),Ue.K="ctask",[1]),fl=[((a[42](19,$G,M),a)[42](6,AM,M),a[22](84,R[13].bind(null,19),52),a[22](85,a[46].bind(null,2),0),8)],de=(AM.K="conf",function(L){return R[25].call(this,
90,L)}),GK=[21,((((a[42](22,GW,M),a[42](6,IM,M),a[22](90,u[10].bind(null,1),16),a)[22](91,u[39].bind(null,12),13),IM.prototype).J=function(){return a[36](98,8,this)},a)[22](90,d[36].bind(null,4),22),IM.K="ainput",23)];a[42](31,Z7,i3);function xG(L,w,J,k){return z[32].call(this,16,L,w,J,k)}
var Ht=function(){H0.apply(this,arguments)},kG={2:(d[15](40,xG,XP),a[22](90,R[18].bind(null,1),24),"rc-anchor-dark"),1:"rc-anchor-light"},Bl=(((xG.prototype.T0=function(){},((((xG.prototype.Ej=(Oe.prototype.add=function(L,w,J){((J=this.K.get(L))||this.K.set(L,J=[]),J).push(w)},function(){return this.P}),r=xG.prototype,Oe.prototype.toString=function(L,w){if((w=["B","join","&"],this)[w[0]])return this[w[0]];return this[this.K.forEach((L=[],function(J,k,C){(C=encodeURIComponent(String(k)),J).forEach(function(D,
H){((H=C,"")!==D&&(H+="="+encodeURIComponent(String(D))),L).push(H)})})),w[0]]=L[w[1]](w[2])},Oe.prototype.set=function(L,w){this.K.set(L,[w])},xG.prototype.Y6=function(){},r).A=function(L){this[(L=["call","U",13],xG).R.A[L[0]](this),L[1]]=d[L[2]](57,"recaptcha-accessible-status",document)},r.VA=function(){},r).hz=function(){return d[0](1)},r).Y7=function(){return this.D},r.au=function(){R[20](11,"\u0412\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443",
this)},r).rc=function(L){this.eS(!0,(L=["\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0444\u043b\u0430\u0436\u043e\u043a \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",20,"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0444\u043b\u0430\u0436\u043e\u043a \u0435\u0449\u0451 \u0440\u0430\u0437."],
L[2])),R[L[1]](9,L[0],this),this.T0()},r).Zr=function(){},r.mU=function(){},r).Ba=function(L){(this.eS(!0,(L=["\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0444\u043b\u0430\u0436\u043e\u043a \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",20,13],L[0])),R)[L[1]](L[2],L[0],this)},r.eS=function(){},RegExp),
Mz=0,gx={stringify:JSON.stringify,parse:JSON.parse},z8=null,om=null,mx=Date.now,TI=Date,B5=(d[1](10,"",!1,u[26](40,3,0),TI)instanceof co&&(TI={},TI[u[26](41,3,0)]=function(){return 0}),{normal:new Q(304,78),compact:new Q(164,144),invisible:new Q(256,60)}),AR=function(L,w){return R[4].call(this,30,w,L)},pu=(((a[42](39,Hu,wV),Hu.prototype).H=function(L){(u[N[20]((L=[30,40,null],L)[0],L[2],this),L[1]](L[0],L[2],this),wV.prototype).H.call(this)},Hu).prototype.kd=function(L){Date.now()-this.Y>(L=[10,2,
7],L[0])?(F[37](L[1],"px","bubble",this),this.Y=Date.now()):(R[L[2]](8,this.l),this.l=a[0](28,this.kd,L[0],this))},Hu.prototype.M=function(L,w,J,k,C,D,H,b,V){("fullscreen"==(this.K=Rm((((H=["DIV","inline","g-recaptcha-bubble-arrow"],V=(L=void 0===L?"fullscreen":L,[49,48,35]),this.C)&&(L=H[1]),this).B=L,H[0])),L)?(F[31](52,this.K,g$),J=Rm(H[0]),F[31](61,J,Nw),this.K.appendChild(J),k=Rm(H[0]),F[31](53,k,yk),this.K.appendChild(k)):"bubble"==L&&(F[31](53,this.K,qG),b=Rm(H[0]),F[31](V[0],b,RM),this.K.appendChild(b),
w=Rm(H[0]),F[31](55,w,GS),u[22](58,H[2],w),this.K.appendChild(w),C=Rm(H[0]),F[31](V[1],C,W$),u[22](63,H[2],C),this.K.appendChild(C),D=Rm(H[0]),F[31](V[0],D,WI),this.K.appendChild(D)),this.C||N[V[2]](40)).appendChild(this.K)},function(){return d[2].call(this,3)}),lh=new j_("sitekey",null,"k",(j_.prototype.V=function(){return this.B},!0)),b0;
if(y.window){var jx=new EI(window.location.href),Vp=(jx.O="",null!=jx.I||("https"==jx.K?a[25](34,0,443,jx):"http"==jx.K&&a[25](35,0,80,jx)),a)[18](59,0,jx.toString()),Av=Vp[3],Sx="",OH=Vp[2],M4=Vp[4],a1=Vp[1];b0=u[33](17,3,((a1&&(Sx+=a1+":"),Av)&&(Sx+="//",OH&&(Sx+=OH+"@"),Sx+=Av,M4&&(Sx+=":"+M4)),Sx),3)}else b0=null;
var qz=new j_("size",function(L){return L.has(m2)?"invisible":"normal"},"size"),MW=new j_("badge",null,"badge"),hk=new j_("s",null,"s"),Hd=new j_("action",null,"sa"),q2=new j_("username",null,"u"),bS=new j_("account-token",null,"avrt"),BE=new j_("verification-history-token",null,"svht"),FV=new j_("waf",null,"waf"),RQ=new j_("callback"),KH=new j_("promise-callback"),ft=new j_("expired-callback"),ua=new j_("error-callback"),lY=new j_("tabindex","0"),m2=new j_("bind"),lF=new j_("isolated",null),jN=new j_("container"),
hs=new j_("fast",!1),Bx=new j_("twofactor",!1),W2={sU:lh,he:new j_("origin",b0,"co"),uy:new j_("hl","ru","hl"),TYPE:new j_("type",null,"type"),VERSION:new j_("version","Km9gKuG06He-isPsP6saG8cn","v"),WX:new j_("theme",null,"theme"),wE:qz,iy:MW,Qp:hk,O2:new j_("pool",null,"pool"),w7:new j_("content-binding",null,"tpb"),yp:Hd,DR:q2,Vp:bS,Ae:BE,OU:FV,DV:new j_("hpm",null,"hpm"),pd:RQ,KH:KH,ZV:ft,vX:ua,Cd:lY,k$:m2,by:new j_("preload",function(L){return F[23](19,L)}),ZR:lF,E2:jN,N2:hs,ot:Bx};
((dV.prototype.has=function(L){return!!this.get(L)},((cE.prototype.add=function(L,w,J,k,C,D,H){if((H=(D=[!1,5,0],[0,"",20]),this.U)<=D[2])return D[H[0]];for(w=D[H[0]],C=D[2];C<this.I;C++)k=R[16](H[2],D[1],L),J=(k%this.K+this.K)%this.K,this.B[Math.floor(J/6)][J%6]==D[2]&&(this.B[Math.floor(J/6)][J%6]=1,w=!0),L=H[1]+k;return!(w&&this.U--,0)},dV).prototype.get=function(L,w,J){return(w=(J=["K","V"],this[J[0]][L[J[1]]()]))||(w=L[J[0]]?"function"===typeof L[J[0]]?L[J[0]](this):L[J[0]]:null),w},cE.prototype.toString=
function(L,w,J,k){for(L=(k=[(J=[],"charAt"),73,"N"],0);L<this[k[2]];L++)w=F[14](k[1],0,this.B[L]).reverse(),J.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k[0]](parseInt(w.join(""),2)));return J.join("")},dV).prototype.set=function(L,w){this.K[L.V()]=w},VD).prototype.get=function(){return this.K},z)[31](28,VD);
var JR,tM=function(){return z[39].call(this,4)},u0=(d[15](40,Kr,uH),[]).concat(128,F[41](26,0,63)),c$=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,(Kr.prototype.U=function(L,w,J,k,C,D,H){for(k=((C=this.O*(w=(L=[],[24,8,(H=[1,"N",0],56)]),w)[H[0]],this[H[1]]<w[2])?this.B(u0,w[2]-this[H[1]]):this.B(u0,this.blockSize-(this[H[1]]-w[2])),63);k>=w[2];k--)this.I[k]=C&255,C/=256;for(D=(k=(a[20](3,26,this),H)[2],H)[2];k<this.M;k++)for(J=w[H[2]];J>=H[2];J-=w[H[0]])L[D++]=this.K[k]>>J&255;
return L},2453635748),2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,(Kr.prototype.B=function(L,w,J,k,C,D,H){if("string"===(C=(k=(J=(void 0===w&&(w=L.length),H=["N","number","blockSize"],["message must be a byte array",26,0]),this[H[0]]),J[2]),typeof L))for(;C<w;)this.I[k++]=L.charCodeAt(C++),k==this[H[2]]&&(a[20](2,J[1],this),k=J[2]);else if(R[12](72,"object",L))for(;C<w;){if(!((D=L[C++],H)[1]==typeof D&&J[2]<=D&&255>=D&&D==(D|J[2])))throw Error(J[0]);(this.I[k++]=D,k==
this[H[2]])&&(a[20](1,J[1],this),k=J[2])}else throw Error("message must be string or array");(this.O+=w,this)[H[0]]=k},Kr.prototype.reset=function(L){this.K=(this.O=(this.N=(L=["C",0,14],L[1]),L)[1],y.Int32Array)?new Int32Array(this[L[0]]):F[L[2]](65,L[1],this[L[0]])},2614888103),3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,
1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],N5=[1779033703,3144134277,1013904242,2773480762,1359893119,(d[15](73,P5,Kr),2600822924),528734635,1541459225],EH=[w$,((((a[42](6,bH,M),M_.prototype.start=function(L){R[40](12,(L=["N",.5,"observe"],"hpm"))||
(null==this[L[0]]&&(this[L[0]]=new MutationObserver(R[49](11,L[1],this))),this[L[0]][L[2]](N[35](8),{attributes:!0,childList:!1,subtree:!0}))},M_).prototype.flush=function(L,w,J,k,C,D){return this.B=(this[(C=(w=(J=(k=new (D=["U",31,3],bH),F[D[1]](12,this.K,1,k)),L=N[18](10,2,this[D[0]].toString(),J),N[18](11,D[2],this.B.toString(),L)),z[19](24,w)),this.K=0,D)[0]]=new cE,new cE),C},z[31](24,M_),kH.prototype).qj=function(L){L(this.K())},a[42](21,w$,M),a)[22](84,u[8].bind(null,2),31),1),$D,2,$D],fu=
(a[22](95,z[8].bind(null,2),25),function(){return N[0].call(this,19)}),g6=(a[42](24,ia,M),a[22](84,N[44].bind(null,32),40),[ia,1,FR,EH,2,cI,3,$D,4,$D]),SH=[(a[42](24,Vk,M),2)],zH=[Vk,1,PI,2,TJ,g6],Tn=((a[22](87,u[22].bind(null,1),48),a)[42](17,kD,M),a[22](95,function(L,w,J,k,C,D){return F[23](65,4977,function(H,b,V){if(((b=[(V=[450,7,0],3),2,1],H).K==b[2]&&(C=u[2](V[1],w(L(),b[1]).split(";")),k=C.next()),H.K)!=b[V[2]]){if(k.done){H.K=V[2];return}return a[12](33,J(u[9](70,6527)((D=k.value,u[9](18,
V[0]))(D).trim())),b[V[2]],H)}H.K=(k=C.next(),b[1])})},28),function(L){return F[20].call(this,9,L)}),QD=(a[42](22,Tn,M),a[22](89,function(L){return F[37](28,!1,function(w){return w.Object.hasOwnProperty.call(L,"value")?"":L.value})},7),[1]),Zg=[kD,7,qw,1,PI,2,PI,4,PI,5,PI,6,BI,8,PI,9,FR,zH,10,FR,[Tn,1,d$]],oJ=[6],v5=((a[22](92,function(L,w,J,k){return w=d[49](3,J,w),(k=(""+L)[AH+S_](w))&&2<=k.length?k.index:null},29),a)[22](87,function(L,w,J){return(L=(J=[0,"",16],L).replace(/(["'`])(?:\\\1|.)*?\1/g,
J[1]).replace(/[^a-zA-Z]/g,J[1]),R[41](38,!1,J[2],w))?N[J[0]](11,L)+","+L:N[J[0]](17,L)},41),a[42](26,a5,M),function(L){return z[23].call(this,2,L)}),D7=[((a[42](19,v5,M),v5.prototype).jS=function(){return a[36](43,1,this)},1)],Ez=[(v5.prototype.TI=function(){return z[40](59,this,2)},3)],pj=(a[22](86,N[48].bind(null,2),18),a[42](22,SN,M),function(L,w,J,k){return R[44].call(this,4,L,w,J,k)}),VZ=[(((a[42](18,QZ,M),a)[22](88,function(L,w,J,k,C,D,H,b){for(C=(D=(w=(b=[1,49,3],d)[b[1]](4,"g"+J,w),H=void 0,
u[2](b[2],(""+L)[AH+Jv](w))),D.next());!C.done&&!(H=C.value,0>=--k);C=D.next());return H&&2<=H.length?H[b[0]]:""},37),a)[22](88,F[22].bind(null,16),34),2)],eA=((a[42](24,iW,M),a)[42](7,TW,M),function(L,w,J){var k=[8,1,40],C=ev.apply(3,arguments).map(function(D){return F[34](16,D)});return R[28](59,u[k[0]](k[2],L,R[11](48,4)),[F[34](12,w),F[34](36,J)].concat(R[9](k[1],C)))}),H0=function(){return N[6].call(this,12)},o1=[TW,1,qw,2,PI,3,PI],Qx=(((a[22](93,function(L,w,J,k,C,D,H,b,V,A){A=(H=[!1,9230,"i"],
[2,27,19]);try{return b=new Tn,D=u[9](39,H[1])(J(N[35](1),44)),V=u[9](39,2057)(D(),C.join("|"),H[A[0]]),a[20](A[1],H[0],b,V,1),z[A[2]](4,b)}catch(S){}},17),a)[42](21,wt,M),a[22](86,u[36].bind(null,40),46),a[22](90,R[28].bind(null,4),38),a)[42](38,XI,M),a[22](88,function(L,w,J){return(J=["className","tagName",16],L&&L instanceof Element)?(w=N[0](J[2],L[J[1]]+L.id+L[J[0]]),L[J[1]]+","+w):u[9](50,5346)(L)},50),void 0),pg=[],X8=(a[22](86,function(L){for(var w=[1,43,9878],J=[null,!1,""],k=u[2](5,ev.apply(w[0],
arguments)),C=k.next();!C.done;C=k.next()){C=C.value;try{var D="number"==typeof C?N[w[1]](13,w[2],C):C,H=d[w[0]](28,J[2],J[w[0]],D,L);if(H instanceof co)return H;L=L[D]}catch(b){return J[0]}}return u[9](70,471)(L)},15),new kH),H5=(a[22](89,u[7].bind(null,2),6),R[49](1,null,function(L,w,J,k,C,D,H,b,V,A){for(H=(J=new (D=d[8](4,(w=(A=[!0,38,""],[5,"[",":"]),!1),null,L,u[9](A[1],8531)),cE)(240,7,25),0);H<D.length&&(C=J,b=C.add,k=new zV,z[34](2,w[2],0,k,A[0],D[H]),V=R[16](22,w[0],d[35](26,w[1],k.K)),b.call(C,
A[2]+V));H++);return[J.toString()]})),Ex=u[15](73,u[9](71,1925)),Dr=u[15](55,u[9](18,1664),50),el=(a[22](94,a[36].bind(null,13),53),u[15](9,d[44](1,3740,0),void 0,!1)),O9="promiseReactionJob",R1=u[15](73,u[9](38,2882),void 0,!0,N[32].bind(null,2)),Kt=u[15](57,u[9](71,4534),void 0,!0,N[32].bind(null,10)),N4=u[15](9,u[9](71,4328),void 0,!0,N[32].bind(null,18)),g9=u[15](57,u[9](38,2662)),cx=u[15](89,u[9](38,1363),56),Y8="undefined"!==typeof window?window:null,o0=function(){return""},R0=Y8&&Y8.document?
Y8.document.currentScript:null,Cj,D$,Ew,kq,Ni=u[36](64,u[36](68,u[36](69,u[36](65,u[36](65,u[36](64,u[36](67,u[9](39,2615),u[36](68,u[9](50,6673),u[36](69,u[9](71,4528),u[9](39,8066)))),u[9](70,6883)),u[36](65,u[9](39,610),u[36](67,u[36](66,u[9](50,1543),u[36](66,u[9](18,8801),u[9](38,6706))),u[36](66,u[9](50,5722),u[9](39,4044))))),u[36](66,u[36](68,u[36](69,u[36](67,u[36](64,u[36](67,u[9](71,5968),u[9](50,2336)),u[9](71,8734)),u[9](18,7644)),u[36](69,u[9](71,340),u[9](50,1418))),u[36](66,u[36](68,
u[36](55,u[36](55,u[36](70,u[36](69,u[36](70,u[9](70,3346),u[9](38,4893)),u[36](55,u[9](38,8373),u[9](70,1309))),u[9](39,6093)),u[9](50,1737)),u[36](67,u[9](18,9249),function(){return D$()})),u[9](39,1875)),u[9](18,2089))),u[9](18,2863))),u[36](65,u[36](65,u[9](38,9809),u[9](70,2760)),u[9](71,9448))),u[9](71,3030)),u[9](39,5588)),s9=[(a[42](16,aM,M),4)],of=(a[42](18,zn,M),[zn,1,qw,2,PI,3,qw,4,FR,o1,5,qw]),ba=((d[15](40,xf,(zn.prototype.rw=function(){return u[42](15,this,4,TW)},uH)),xf).prototype.reset=
function(){(this.K.reset(),this.K).B(this.N)},xf.prototype.U=function(L,w){return this[this[this[(L=this[(w=["B","K","I"],w)[1]].U(),this[w[1]]).reset(),w[1]][w[0]](this[w[2]]),w[1]][w[0]](L),w[1]].U()},xf.prototype.B=function(L,w){this.K.B(L,w)},u[15](41,function(L,w,J,k,C,D,H,b,V){return(L.then=(H=(J=new (D=(b=(C=(k=(V=[31,2,36],["d","c",""]),d)[15](21,k[0])+"-"+Date.now(),N[0](13,a[V[1]](18,d[15](V[0],k[1]),1)||k[V[1]])),new Set),aM),N[0](10,k[V[1]]+w||k[V[1]],8)),F[44](5),d[33](56,C,a[15](V[2]),
0),L.then||function(){}),L).then(function(A,S,O,f,E,K,Y,c,P){for(E=(O=u[2]((S=["/L",(P=[1,13,8],1),0],2),d[44](6,S[2])),O).next();!E.done;E=O.next())if(A=E.value,A.startsWith(C+"-")){Y=a[2](26,A,S[2])||"";try{c=F[10](10,S[2],of,N[42](5,Y))}catch(l){c=new zn}K=c,!z[40](53,K,S[P[0]])||D.has(A)||A.includes(b)||(D.add(A),F[31](15,Math.max(a[36](75,2,J)||S[2],a[36](74,2,K)),2,J),z[40](59,K,5)==S[0]&&F[31](P[1],(a[36](2,5,J)||S[2])+S[P[0]],5,J),z[40](57,K,3)==H&&(F[31](15,(u[16](3,null,3,J,S[2])||S[2])+
S[P[0]],3,J),f=[K.rw()],d[34](54,P[2],J,TW,4,f))),F[10](3,S[P[0]],A)}return(F[10](P[0],S[P[0]],C),z)[19](6,F[31](15,D.size,S[P[0]],J))})},52,!1)),js=u[15](87,function(){return a[4](2,0,null).then(function(L){return z[19](6,L||new kD)})},51),V7=u[15](87,function(L,w){return(L=d[44](82,(w=[0,7510,"random"],w[0])),L).length?u[9](71,w[1])(L[Math.floor(Math[w[2]]()*L.length)]):"-1"},59),AW=u[15](55,function(L){return a[L=[27,24,2],L[2]](L[1],d[15](L[0],"e"),1)},67),Px=u[15](41,function(){return a[2](17,
"_"+B$+"recaptcha",0)},70),$f=(((a[42]((a3.u=((a3.d=(a3.s=(a3.f=function(L,w,J,k,C,D,H,b,V,A){if(Number(L)>=(b=((H=L[V=[(A=[2,0,"toString"],"-")," ",0],A[2]](),isNaN(C)||""==C)||(H=parseFloat(L).toFixed(C)),Number(L)<V[A[0]]?"-":w.indexOf("+")>=V[A[0]]?"+":w.indexOf(V[1])>=V[A[0]]?" ":""),V[A[0]])&&(H=b+H),isNaN(J)||H.length>=Number(J))return H;return H=w.indexOf(V[A[1]],(D=Number(J)-(H=isNaN(C)?Math.abs(Number(L))[A[2]]():Math.abs(Number(L)).toFixed(C),H).length-b.length,V)[A[0]])>=V[A[0]]?b+H+P$(V[1],
D):b+P$(w.indexOf("0",V[A[0]])>=V[A[0]]?"0":" ",D)+H},function(L,w,J,k,C){return isNaN((C=["",(k=L,"-")," "],J))||J==C[0]||k.length>=Number(J)?k:k=-1<w.indexOf(C[1],0)?k+P$(C[2],Number(J)-k.length):P$(C[2],Number(J)-k.length)+k}),function(L,w,J,k,C,D,H,b){return a3.f(parseInt(L,10),w,J,k,0,D,H,b)}),a3).i=a3.d,a3.d),30),ih,iJ),ih.prototype).isEnabled=function(){return!!this.K},ih.prototype).I=function(L){R[7](1,this.U),this.B&&this.B(L.data)},ih.prototype.H=function(){this.K=(this.K&&this.K.terminate(),
null)},ih.prototype.N=function(){this.B&&this.B(z[7](31,"error"))},function(L,w,J,k){var C=[32,"map",9],D=ev.apply(4,arguments)[C[1]](function(H){return R[25](81,H)});return R[28](58,u[8](49,L,R[11](57,26)),[R[25](73,w),F[34](C[0],J),F[34](28,k)].concat(R[C[2]](64,D)))}),ky=(((((((((y.document||y.window||(self.onmessage=z[49].bind(null,28)),Gz.prototype.jP=function(){return this.K?this.K:this.N.toString()},Gz.prototype.Yz=function(){return this.I},a[42](38,Qf,M),a[42](21,de,M),de.prototype.Z5=function(){return u[42](12,
this,3,Qf)},de).prototype.J=function(){return R[48](20,null,1,this)},de.prototype).N=function(){return R[23](32,this,5)},a[42](26,Xc,Gz),a)[42](17,Ix,M),Ix.prototype).J1=function(){return R[23](64,this,3)},Ix).prototype.N=function(){return R[23](64,this,4)},Ix).prototype.Z5=function(){return u[42](10,this,5,Qf)},Ix.prototype.J=function(){return R[48](12,null,1,this)},a)[42](21,Kp,Gz),a)[42](19,G8,M),[G8,1,qw,2,qw,3,qw,4,qw,5,qw,16,qw,6,qw,7,qw,8,qw,9,qw,10,qw,11,qw,12,qw,13,qw,14,qw,15,qw,17,qw,18,
qw]),sl=(G8.K=(G8.prototype.BM=function(){return z[40](57,this,7)},"rreq"),function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){return d[6].call(this,1,L,w,J,k,C,D,H,b,V,A,S,O,f,E,K)}),iq=(a[42](23,Xx,M),a[42](30,oM,M),function(L){return N[38].call(this,1,L)}),Po=(a[42](22,k$,M),[8]),RX=[(a[42](25,DL,M),1),2],U9=[1,(a[42](19,$$,M),2)],IQ=(((((((r=(((a[42](25,hM,M),hM).K="pmeta",a[42](38,hT,M),hT.prototype.V=function(){return R[23](96,this,1)},hT.K="exemco",a)[42](25,Lu,M),Lu).prototype,r.Jz=function(){return a[36](34,
3,this)},r.m3=function(){return z[40](57,this,1)},r).setTimeout=function(L){return F[31](15,L,3,this)},r).clearTimeout=function(){return F[31](13,void 0,3,this,!1)},Lu).K="rresp",r).J1=function(){return z[40](55,this,10)},r.KR=function(){return u[42](8,this,11,hT)},r.BM=function(){return z[40](49,this,8)},r).Ve=function(){return z[40](57,this,12)},r.J=function(){return a[36](35,6,this)},a)[42](17,yu,Gz),a[42](21,Vm,M),function(L,w){return R[17].call(this,1,L,w)}),U6=[Vm,1,(Vm.K="ubdreq",FR),ky],ZZ=
((((a[42](7,iq,M),iq).prototype.J=function(){return a[36](99,3,this)},iq.K="ubdresp",iq.prototype).BM=function(){return z[40](59,this,1)},iq).prototype.Ve=function(){return z[40](55,this,2)},a[42](31,Ch,Gz),function(L){return N[40].call(this,16,L)}),f9=(z[31](24,pH),Uw.prototype.B=function(){for(var L=["has",2,"delete"],w=u[L[1]](L[1],ev.apply(0,arguments)),J=w.next();!J.done;J=w.next())J=J.value,this.K[L[0]](J)&&this.K[L[2]](J)},Uw.prototype.U=function(){for(var L=["add",2,0],w=u[L[1]](L[1],ev.apply(L[2],
arguments)),J=w.next();!J.done;J=w.next())this.K[L[0]](J.value)},z[31](29,Uw),a[42](31,rZ,M),function(L){return N[31].call(this,2,L)}),uS=[1,2,3,(a[42](20,f9,M),4)],ct=[rZ,1,vI,2,e_,3,TJ,[f9,1,Qk,uS,2,m$,uS,3,lH,uS,4,hH,uS],4,PI],pN=[3],Ce=(a[42](23,TK,M),[TK,1,TJ,ct]),yR=[1],iF={br:(a[42](7,Y6,M),0),gE:278,U2:438,Xv:341},eT=[2],da=["bottomleft","bottomright"],sw={M2:0,Se:122,PX:(a[42](7,es,M),441),d7:442,x$:143,q2:362,Y$:445,HX:104,T9:452,CH:28,g7:296,UU:313,rE:181,z$:416,Fv:112,MW:239,fd:422,ly:338,
cX:90,r7:149,BX:195,qW:351},VW=[1],I0=((((((a[42](24,(H0.prototype.U=function(L,w,J,k){return w=(J=(k=[1,20,25],new es),F)[k[2]](6,k[0],L[k[0]],J,k[0]),F[31](k[1],L[2],2,w)},bM),H0),bM).prototype.K=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m){return(S=(H=(k=(C=(c=(l=(w=(V=(K=(D=(J=(f=u[b=a[8](6,(P=(m=[22,1,34],[22,452,1]),512),15,this),2](7,b),f.next().value),f.next()).value,E=f.next().value,A=f.next().value,L=f.next().value,f).next().value,f).next().value,O=f.next().value,Y=f.next().value,f.next().value),
f.next().value),f.next().value),f.next()).value,f.next().value),f.next().value),[d[38](17,28,C),a[45](53,J,P[m[1]]),F[9](8,17,J,J),a[45](59,D,104),a[45](31,E,445),eA(A,J,D,E),a[45](25,L,362),R[m[2]](26,L,K,A),R[27](63,L),R[27](47,E),a[45](m[0],w,351," "),R[39](8,P[0],F[m[2]](4,w),"g",l),R[27](43,w),u[40](5,c,""),a[45](33,Y,296),eA(K,K,Y,l,c),R[27](27,Y),R[27](63,l),u[40](5,O,-4),a[45](35,V,28),eA(K,K,V,O),R[27](43,V),d[38](m[1],28,k),F[45](46,2,F[m[2]](36,C),0),R[46](m[0],11,H,F[m[2]](16,C),F[m[2]](32,
k)),F[45](44,P[2],P[2],P[2]),u[40](8,H,-1),F[25](24,!1,H,this,K)]),F)[9](49,null,7,104,S)},a)[42](20,Yr,H0),Yr.prototype).K=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e,p,v,n,X,W5,$c,XW,NK,Yw,cd,we,Pd,ox,dZ,$q,IJ,lS,aJ,J$,ec,jv,yD,GI,Qu,zF,vd,ok,Rk,Ke,NR,YK,Dg,cZ,PZ,pG,dx,ld,bF,mR,fg,qR,tT,BZ,h0,p9,Ho,FD,TF,t8,$K,ej,b3,NW,XD,Qw,vZ,Yq,pe,t0,WZ,yw,GF,Ik,wa,Zh,Zt,jl,Wd,sz,Z,id,JM,Uz,ne,xK,rx,Lr,W){return(Y=(NK=[(v=(yw=(ne=(ld=(BZ=(cd=(t0=u[(S=(mR=($c=u[(w=(qR=(dZ=(XD=[(m=(W5=(Ik=(T=(Pd=
(J=(ec=(id=u[(YK=(Zt=(sz=(D=(xK=(n=(Rk=(FD=(k=(NR=(rx=(lS=(Ke=(H=(h0=(b=(P=(ok=[(PZ=[(pe=(vZ=(zF=[(cZ=(Uz=[($K=(q=(jv=(bF=(X=(jl=(yD=(vd=($q=(C=(L=(K=(XW=(p9=(tT=(J$=(p=(b3=(Qu=(IJ=(O=(Yq=(E=(fg=(pG=(A=(NW=(Zh=(Ho=(V=(we=(t8=(Wd=(Z=u[WZ=a[8](12,512,(W=[45,(aJ=[1,112,149],40),9],41),this),2](3,WZ),Z).next().value,Z.next().value),Z.next().value),Z.next()).value,Z.next().value),Z.next().value),Z.next().value),Z.next().value),Z.next().value),GI=Z.next().value,Z.next()).value,Z.next()).value,c=Z.next().value,
Z.next().value),Z).next().value,ox=Z.next().value,wa=Z.next().value,Z.next()).value,Z).next().value,Z.next().value),B=Z.next().value,JM=Z.next().value,Z.next().value),e=Z.next().value,Z.next()).value,Z).next().value,Z.next().value),Z.next().value),Z.next()).value,Z.next().value),Z.next().value),Z.next()).value,Z.next().value),Z.next()).value,Z.next().value),Z.next().value),Z.next()).value,Z.next().value),Z.next().value),Dg=Z.next().value,Z.next()).value,d[38](33,28,J$))],[a[W[0]](36,Wd,452),F[W[2]](10,
17,Wd,Wd),a[W[0]](28,t8,181),R[34](59,t8,t8,Wd),a[W[0]](21,we,aJ[1]),R[34](74,we,we,t8),a[W[0]](22,wa,28),u[W[1]](2,bF,0),u[W[1]](3,jv,5E4),eA(we,we,wa,bF,jv),a[W[0]](28,V,416),u[W[1]](10,Ho,"\n"),eA(Zh,we,V,Ho),R[27](63,Ho)]),u[W[1]](10,Dg,!1)),R[34](43,fg,jv,Zh),R[34](10,Yq,jv,jv),u[W[1]](1,q,0),F[W[0]](42,5,F[34](36,jv),F[34](16,q)),u[W[1]](7,q,aJ[0]),F[W[0]](46,3,F[34](24,jv),F[34](36,q)),u[W[1]](1,q,2),F[W[0]](41,aJ[0],F[34](24,jv),F[34](24,q)),u[W[1]](1,Dg,!0),F[W[0]](43,3,F[34](20,Dg),F[34](4,
O)),eA($K,Zh,X,fg,bF),R[46](20,11,fg,F[34](12,fg),aJ[0]),R[46](19,11,c,F[34](32,c),aJ[0])],Qw=[u[W[1]](W[2],fg,0),u[W[1]](1,bF,aJ[0]),u[W[1]](6,O,!0),u[W[1]](3,ox,!1),a[W[0]](55,X,195),a[W[0]](27,Yq,313),R[34](10,Yq,c,Zh),F[32](34,!1,c,fg,zF),R[27](79,X)],[R[34](11,fg,NW,Zh),eA(pG,GI,A,NW),R[10](37,6,E,F[34](36,pG),fg)]),[eA(E,Zh,wa),u[W[1]](1,fg,0),a[W[0]](25,A,338),R[34](74,Yq,c,Zh),a[W[0]](29,GI,422),R[39](16,22,F[34](20,GI),"i",GI),F[32](42,!1,c,fg,vZ),R[27](27,GI)]),R[34](42,JM,NW,IJ)),eA(bF,
p,A,NW),F[W[0]](49,aJ[0],F[34](36,bF),F[34](32,ox)),u[W[1]](7,b3,!0)],R)[34](26,JM,NW,IJ),eA(bF,e,A,NW),F[W[0]](47,aJ[0],F[34](28,bF),F[34](12,ox)),u[W[1]](3,B,!0)],R[34](42,fg,NW,E)),f=F[W[0]](W[0],59,F[34](4,NW),F[34](12,ox)),Yw=R[46](16,11,bF,F[34](20,fg),3),u)[W[1]](W[2],jv,0),eA)($q,K,L,jv,bF),h=F[21](10,10,bF,F[34](4,fg),4),eA)(vd,K,C,c,bF),eA(IJ,Zh,wa,$q,vd)),R)[34](11,Yq,Qu,IJ),u[W[1]](8,b3,!1)),GF=u[W[1]](6,JM,0),a[W[0]](23,p,90)),R)[39](24,22,F[34](4,p),"i",p),F)[32](67,!1,Qu,JM,PZ),R)[27](31,
p),R)[46](17,11,bF,F[34](12,fg),3),u)[W[1]](4,jv,0),eA)($q,K,L,jv,bF),F)[21](32,10,vd,F[34](28,fg),aJ[0]),Lr=eA(IJ,Zh,wa,$q,vd),R)[34](75,Yq,Qu,IJ),u[W[1]](10,B,!1)),W)[1]](2,JM,0),a)[W[0]](21,e,aJ[2]),R)[39](32,22,F[34](20,e),"i",e),l=F[32](66,!1,Qu,JM,ok),R[27](79,e)),F[34](28,B)),R[28](59,u[8](41,B,R[11](56,25)),[R[25](73,T)])),F[34](20,b3)),dx=F[34](20,B),R)[28](59,u[8](32,bF,R[11](48,23)),[R[25](64,W5),R[25](80,dx)]),P),f,Yw,b,h0,h,H,Ke,lS,rx,GF,NR,k,FD,Rk,n,xK,D,sz,Lr,Zt,YK,id,ec,J,l,Pd,Ik,
m,F[W[0]](W[1],3,F[34](12,bF),F[34](4,ox)),eA(bF,yD,jl,IJ),F[21](W[1],10,p9,F[34](16,p9),aJ[0]),F[W[0]](48,2,F[34](24,p9),F[34](20,XW))],u[W[1]](8,fg,0)),u[W[1]](4,K,"Math")),F)[W[2]](4,17,K,K),W)[1]](8,L,"max"),u[W[1]](7,C,"min")),u)[W[1]](5,jl,"push"),W)[1]](4,bF,""),R[34](59,Yq,c,Zh)),eA(yD,bF,V,bF)),u[W[1]](4,p9,0)),u[W[1]](6,XW,3)),ej=F[32](35,!1,c,fg,XD),F)[34](16,yD),R[28](63,u[8](W[1],yD,R[11](17,27)),[R[25](65,yw)])),TF=[dZ,qR,w,$c,mR,S,t0,cd,BZ,ld,ne,ej,v,R[27](75,L),R[27](15,C),R[27](43,
K),R[27](15,V),R[27](47,A),R[27](11,Yq),R[27](15,wa),R[27](11,jl)],d[38](3,28,tT))],[F[W[0]](52,2,F[34](32,J$),0),R[46](23,11,J$,F[34](28,J$),F[34](32,tT)),F[W[0]](42,aJ[0],aJ[0],aJ[0]),u[W[1]](11,J$,-1),F[25](32,!1,J$,this,yD)]),F)[W[2]](48,null,7,422,[].concat(Uz,cZ,Qw,pe,TF,NK,Y))},a)[42](18,Sa,H0),Sa.prototype.K=function(L,w,J,k,C,D,H,b,V,A,S,O,f){return O=(S=(L=(k=(C=(H=(V=(A=(J=a[8](5,512,(f=[(b=[11,1,!1],9),1,51],f[0]),this),u[2](2,J)),A.next()).value,D=A.next().value,A.next().value),A).next().value,
w=A.next().value,A.next().value),A).next().value,A.next().value),A.next().value),[d[38](34,28,L),a[45](57,V,122),F[f[0]](6,17,C,V),R[27](31,V),a[45](54,D,442),R[34](58,D,w,C),R[27](11,D),R[27](75,C),a[45](30,H,313),R[34](27,H,k,w),R[27](59,H),R[27](27,w),d[38](2,28,S),F[45](f[2],2,F[34](24,L),0),R[46](21,b[0],O,F[34](20,L),F[34](16,S)),F[45](53,b[f[1]],b[f[1]],b[f[1]]),u[40](11,O,-1),F[25](28,b[2],O,this,k)]},a)[42](38,Ht,H0),function(){return z[43].call(this,65)}),xc=[new (Ht.prototype.K=function(L,
w,J,k,C,D,H,b,V,A,S){return[(H=(C=(b=(J=(V=(L=(A=a[8](13,512,7,(D=(S=[2,45,1],[2,441,!1]),this)),k=u[S[0]](S[2],A),k.next().value),k.next()).value,k.next().value),w=k.next().value,k).next().value,k.next().value),k.next()).value,d[38](18,28,b)),a[S[1]](23,J,122),a[S[1]](27,w,D[S[2]]),F[9](S[0],17,L,J),R[34](27,w,V,L),R[27](59,J),R[27](59,w),d[38](19,28,C),F[S[1]](54,D[0],F[34](24,b),0),R[46](18,11,H,F[34](12,b),F[34](36,C)),F[S[1]](44,S[2],S[2],S[2]),u[40](11,H,-1),F[25](36,D[S[0]],H,this,V)]},Ht),
new bM,new Sa,new Yr],uJ=new Map,xw=new Set,ud,JS=[(((a[42](7,YG,wV),YG.prototype.send=function(L,w,J,k,C,D){return a[2](11,(J=(k=this,void 0===J?15E3:J),w=void 0===w?null:w,function(H,b){return H.K==(b=["B",1,35],b[1])?(C=R[47](b[2]),D=new TV,k[b[0]].set(C,D),a[0](61,function(){(D.reject("Timeout ("+L+")"),k).B["delete"](C)},J),a[12](50,z[37](41,b[1],w,k,L,C),2,H)):H.return(D.promise)}))},YG.prototype).H=function(){wV.prototype.H.call(this),this.K.close()},a[42](19,Jr,M),Jr.K="setoken",a)[42](26,
oQ,M),a[42](22,Ss,M),1)],Pt=function(L){return function(){return Date.now()-L}}((((a[42](24,O8,M),a)[42](26,dA,M),dA.prototype).Ve=function(){return u[42](13,this,70,TW)},Date.now())),Lg=[17],XO=[3,(a[42]((dA.prototype.rw=function(){return u[42](13,this,28,TW)},39),fH,M),a[22](89,Pt,43),20),27],xq=Date.now();
((((((((((((((a[42](16,Ul,wV),Ul.prototype.t0=function(L,w,J,k){J=[2,(k=["parent",10,"c-"],"a-"),"j"];try{w=u[32](24).name.replace(J[1],k[2]),u[32](24)[k[0]].frames[w].document&&d[k[1]](5,0,this,L)}catch(C){this.U.T0(),this.M=z[26](37,null,this),this.B="a",d[8](50,J[0],this),this.N.send(J[2])}},Ul).prototype.G=function(L,w,J){w=(J=[47,"K","send"],["e",0,"c"]),L.U?this.M.then(function(k){return k.send("g",new Yy(L.B))},F[J[0]].bind(null,4)):this.B==w[2]?this.B=w[0]:L[J[1]]&&L[J[1]].width<=w[1]&&L[J[1]].height<=
w[1]?(this.B="b",this.M.then(function(k){return k.send("g",new Yy(L.B))},F[J[0]].bind(null,5))):(this.B=w[0],this.N[J[2]](w[0],L))},Ul.prototype.O=function(L,w,J,k,C,D){if((D=[18,(J=this,C=["d",null,12],"q"),"A"],this).K.I)return k=d[40](2,D[1],2,D[2],"object",this,L),this.K.U&&(w=Date.now(),k.then(function(){return a[23](15,!1,11,void 0,w,1,J)},function(H,b){return a[23](14,(b=["B",!1,11],b[1]),b[2],H instanceof DH?H[b[0]].U:void 0,w,H instanceof DH?4:2,J)})),k;return(a[35](7,C[2])&&L&&this.K.gI&&
(this.gI=F[26](5,D[2],3,2,C[1],L,this)),z)[D[0]](16,C[0],"e",this)},Ul).prototype.ue=function(){this.l.reject((this.B="a","Challenge cancelled by user."))},Ul.prototype.ZD=function(L,w){return R[42](20,3,a[12](11,2,(L=(w=[34,1,"navigator"],u[32](48)[w[2]].userAgentData),R[w[0]](16,w[1],8,new Ss,L.brands.map(function(J,k,C,D){return k=(C=(D=[2,"brand",29],new oQ),N[18](D[2],1,J[D[1]],C)),N[18](13,D[0],J.version,k)}))),L.mobile),L.platform)},Ul.prototype).Hm=function(L,w,J){return a[2]((J=this,37),
function(k,C){if(C=[2,"K"," client for challengeAccount."],1==k[C[1]]){if(!J[C[1]][C[1]])throw Error(HI+C[2]);return a[12](C[0],J[C[1]].B.send(new Xc(L)),C[0],k)}return(w=k.B,k).return(w.toJSON())})},Ul.prototype).F=function(L,w){(w=["U","K","M"],"g")===this.B?this[w[0]].Y6():(L.B?(this.B="b",L[w[1]]&&0==L[w[1]].width&&0==L[w[1]].height||this[w[0]].VA()):(this.B="e",this[w[0]].Zr()),this[w[2]].then(function(J){return J.send("g",L)},F[47].bind(null,6)))},Ul.prototype.C=function(L,w,J,k){if(k=this.kz[this.B][w])return k.call(this,
null==L?void 0:L,J)},Ul.prototype).Y=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K){return D=(L=void 0===L?{id:null,timeout:null}:L,this),a[2](32,function(Y,c,P){P=[2,36,(c=[!1,9,4],"X")];switch(Y.K){case 1:return a[12](97,a[4](3,0,null),P[0],Y);case P[0]:return H=c[0],b=c[0],O=Y.B,f=!R[41](6,c[0],P[1],VD[P[2]]()),V=[],f&&(V=[NG,E5,HI]),a[12](82,D.N.send("o",new hW(R[5](26,c[1],1),F[6](P[0],0,10,a[48](P[0],1,"")),V)),3,Y);case 3:if((K=Y.B,L).id&&(!O||z[40](57,O,7)!=L.id))return Y.return();return(E=(Y.U=
((null==(O||(O=new kD,H=!0),L.id)&&(L.id=a[15](64),N[18](30,7,L.id,O),1!=a[P[1]](74,c[P[0]],O)&&(F[31](15,(a[P[1]](67,5,O)||0)+1,5,O),b=!0),F[31](21,0,c[P[0]],O)),F[31](16,(a[P[1]](98,1,O)||0)+1,1,O),F)[31](21,Math.floor((a[P[1]](66,P[0],O)||0)+(L.timeout||0)),P[0],O),F[31](13,(a[P[1]](43,c[P[0]],O)||0)+1,c[P[0]],O),c[P[0]]),new TW(K.P$)),a)[12](66,F[7](3,z[40](57,E,1),a[P[1]](43,P[0],E)),6,Y);case 6:return J=Y.B,J=J.replace(/"/g,""),d[34](71,16,6,O).includes(J)||a[20](31,c[0],O,R[15](66,"object",
J),6),k=new TW(K.wb),a[12](98,F[7](8,z[40](57,k,1),a[P[1]](43,P[0],k)),7,Y);case 7:if(F[w=Y.B,31](13,+w+(a[P[1]](3,8,O)||0),8,O),!f||!K.Et){Y.K=8;break}return A=new TW(K.Et),a[12](98,F[7](9,z[40](49,A,1),a[P[1]](75,P[0],A)),c[1],Y);case c[1]:C=Y.B,C=C.replace(/"/g,""),z[47](6,10,O,a[44](80,c[0],1,0,u[42](9,O,10,Tn),R[39](20,16,C,Tn),H,b));case 8:R[35](50,0,Y,5);break;case c[P[0]]:R[27](13,null,Y);case 5:return a[12](66,d[17](1,"6d",1,"c",3,O),10,Y);case 10:L.timeout=5E3*(1+Math.random())*a[P[1]](99,
c[P[0]],O),S=R[25](34,L.timeout+500),a[0](30,function(){return D.C(L,d[24](18,0,S,function(){return"ee"}))},L.timeout),Y.K=0}})},Ul).prototype.IL=function(L){this.N.send("e",L)},Ul).prototype.k9=function(L){try{this.Qe(L.K)}catch(w){}},Ul).prototype.dI=function(L,w,J){return null!==(this.B=(this[J=["g",1E3,(w=this,"U")],J[2]].au(),J[0]),this.gI)?this.gI.then(function(k){return a[2](13,function(C,D,H,b,V){return((b=[2,(V=[2,"object",1],1E3),"d"],k).ji&&!k.ji.J()&&(k.ji.Ve()&&(L.K=k.ji.Ve()),d[25](91,
"b",k.ji.BM())),k.Pi)&&(D=new Jr,H=u[13](3,D,aX,3,d[4](34,V[1],L.response)),L.response=wG+u[33](V[2],3,z[19](V[0],a[32](V[2],b[0],H,k.Pi)),4)),C.return(z[48](V[0],b[V[0]],b[V[2]],L,w))})}):z[48](1,"d",J[1],L,this)},Ul.prototype.BH=function(L,w,J){return a[2](32,(J=this,function(k,C){if((C=["K","toJSON",49],1)==k[C[0]]){if(!J[C[0]][C[0]])throw Error(HI+" client for verifyAccount.");return a[12](C[2],J[C[0]].B.send(new Kp(L)),2,k)}return k.return((w=k.B,w)[C[1]]())}))},Ul.prototype.P=function(L,w){((w=
["j","a","B"],this.U.mU(L.errorCode),this)[w[2]]=w[1],this.N).send(w[0],L)},Ul.prototype).D5=function(){d[10](4,0,(this.B="c",this))},Ul).prototype.MB=function(L,w){this.N.send((this[(w=["B","M","i"],w)[0]]="f",w)[2]),this[w[1]].then(function(J){return J.send("i",new g4(L))},F[47].bind(null,1))},Ul.prototype.A7=function(L,w){u[L=this,w=["send",20,"online"],32](w[1]).navigator.onLine?this.N[w[0]]("m"):N[43](27,this,u[32](60),w[2],function(){return L.N.send("m")})},Ul.prototype.kd=function(L){this.U[L=
["N","rc","send"],L[1]](),this.B="f",this[L[0]][L[2]]("e",new Yy(!1))},Ul.prototype).ye=function(L,w){return a[2](34,(w=this,function(J,k,C){if((k=[2,(C=["l",12,8],"e"),"d"],1)==J.K){if(!w.K.K)throw Error(HI+" client for challengeAccount.");return((w.M=z[26](36,null,w),d)[C[2]](48,k[0],w),a)[C[1]](98,z[18](1,k[2],k[1],w,L.K||void 0),k[0],J)}return w[C[0]]=u[42](21),J.return(w[C[0]].promise)}))},a)[42](31,s6,XP),s6.prototype).K1=function(L){this[(this.B=R[43](52,d[10].bind((L=["Um","K",1],null),L[2]),
{size:this.I,BK:this.Y,ds:this[L[1]],Do:z[40](55,this.U,L[2]),Zo:z[40](51,this.U,2),Ej:!1,Y7:!1,errorMessage:this[L[1]],errorCode:this.C}),L)[0]](this.L())},d)[4](43,"recaptcha.anchor.ErrorMain.init",function(L,w,J){new y7(((w=new IM(JSON.parse((J=[48,"send",6],L))),d)[J[0]](J[2],"http",u[32](52).parent,"*")[J[1]]("j",new B0(w.J())),w))});function I9(L,w,J,k,C,D){return R[20].call(this,1,L,w,J,k,C,D)}
((((((r=(d[15](8,I9,xG),I9.prototype),r).Um=function(L,w,J,k){this[(J=(w=((k=["Um","A","K"],I9.R[k[0]]).call(this,L),d[25](1,this,"rc-anchor-checkbox-label")),w.setAttribute("id","recaptcha-anchor-label"),this)[k[2]],J.t7)?(J.gY(),J.C=w,J[k[1]]()):J.C=w,k[2]].render(d[25](24,this,"rc-anchor-checkbox-holder"))},r.Ba=function(L){this[this[I9[L=["R","focus","K"],L[0]].Ba.call(this),L[2]].x6(),L[2]].L()[L[1]]()},r).VA=function(){this.K.Y(!1)},r.K1=function(L){(L=["I",null,"B"],this[L[2]]=R[43](50,d[10].bind(L[1],
17),{size:this.Y,BK:this.BK,ds:"\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 reCAPTCHA.",Do:z[40](53,this[L[0]],1),Zo:z[40](49,this[L[0]],2),Ej:this.Ej(),Y7:this.Y7()}),this).Um(this.L())},r.T0=function(){this.K.Y(!1)},r.au=function(L){this.K[(L=["au",!1,"Y"],L)[2]](!0),this.K.L().focus(),I9.R[L[0]].call(this),this.eS(L[1])},r).hz=function(){return(I9.R.hz.call(this),this.K).Dr()},r.A=function(L){(I9.R.A[L=[46,"call",0],L[1]](this),R)[L[0]](51,
R[L[0]](57,u[L[2]](24,this),this.K,["before_checked","before_unchecked"],x(function(w){("before_checked"==w.type&&d[41](5,"a",this),w).preventDefault()},this)),document,"focus",function(w,J){(J=["target","focus","tabIndex"],w[J[0]]&&0==w[J[0]][J[2]])||this.K.L()[J[1]]()},this)},r.Wa=function(L){return N[(L=[42,9,19],L)[2]](18,L[1],a[L[0]](12,"recaptcha-checkbox"))},r).Zr=function(){this.K.L().focus()},r.rc=function(L){(((L=["x6","R","rc"],I9[L[1]])[L[2]].call(this),this.K)[L[0]](),this.K).L().focus()},
r).Y6=function(){this.K.L().focus()},r.mU=function(L,w,J){(this.K[(w=(J=[8,!1,"Y"],tR)[L]||tR[0],J)[2]](J[1]),2!=L)&&(this.K.K(J[1]),this.eS(!0,w),R[20](J[0],w,this))},r).eS=function(L,w,J,k){(F[48](2,"rc-anchor-error",L,this[k=[41,74,"L"],k[2]]()),N[22](k[1],d[25](26,this,"rc-anchor-error-msg-container"),L),L)&&(J=d[25](26,this,"rc-anchor-error-msg"),d[42](k[0],J),d[20](34,J,w))};function yW(L,w,J,k,C){return a[44].call(this,9,L,w,J,k,C)}
var zq=((((((((d[15](8,yW,xG),yW.prototype.Wa=function(L){return(L=[19,10,"rc-anchor-invisible"],N)[L[0]](L[0],9,a[42](L[1],L[2]))},yW.prototype.K1=function(L,w){this[this.B=L=R[43](48,u[43].bind(null,(w=[59,"Um",1],13)),{ds:"\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 reCAPTCHA.",Do:z[40](53,this.I,w[2]),Zo:z[40](w[0],this.I,2),BK:this.BK,nH:this.K,LH:!1,Ej:this.Ej(),Y7:this.Y7()}),a[34](w[2],function(J,k,C,D,H){u[J=((u[37](30,(k=[(D=L.querySelector(".rc-anchor-invisible-text span"),
"rc-anchor-normal-footer"),65,160],H=[1,0,(C=L.querySelectorAll(".rc-anchor-invisible-text .rc-anchor-pt a"),21)],C[H[1]])).width+u[37](H[2],C[H[0]]).width>k[2]||u[37](22,D).width>k[2])&&u[22](58,"smalltext",a[42](11,"rc-anchor-invisible-text")),L).querySelectorAll(".rc-anchor-normal-footer .rc-anchor-pt a"),37](H[2],J[H[1]]).width+u[37](23,J[H[0]]).width>k[H[0]]&&u[22](62,"smalltext",a[42](8,k[H[1]]))},this),w[1]](this.L())},d[15](72,Hx,iJ),Hx.prototype).K=function(L){return a[7](49,"__",!1,this,
L)},Hx).prototype.H=function(L,w,J,k,C,D){J=((C=(w=(D=[10,(L=y.window,"R"),!1],L.setTimeout),w[a[46](D[0],"__",this,D[2])])||w,L).setTimeout=C,L.setInterval),k=J[a[46](74,"__",this,D[2])]||J,L.setInterval=k,Hx[D[1]].H.call(this)},d[15](9,zS,Bd),d[15](72,Q$,I),d)[15](72,I5,ge),Q$).prototype.H=function(L){(z[L=["K",21,"R"],L[1]](6,this[L[0]]),Q$[L[2]].H).call(this)},Q$.prototype.N=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if((f=((E=(k=[null,!0,": "],[17,37,0]),L=L.error||L,J=w?z[E[1]](1,w):{},L instanceof
Error)&&ax(J,L.__closure__error__context__984382||{}),R[31](14,k[2],k[1],!1,k[E[2]],L)),this).U)try{this.U(f,J)}catch(K){}if(!((S=f.message.substring(E[2],1900),L)instanceof Bd)||L.K){H=f.stack;try{if((D=af(this.I,"script",f.fileName,"error",S,"line",f.lineNumber),z[E[0]](1,!1,this.B))||(A=D,C=F[1](E[0],k[E[2]],"&",this.B),D=N[1](11,"#",A,C)),b={},b.trace=H,J)for(O in J)b["context."+O]=J[O];V=F[1](16,k[E[2]],"&",b),this.O(D,"POST",V,this.C)}catch(K){}}try{d[41](4,new I5(f,J),this)}catch(K){}},Bo.prototype.reset=
function(){this.K=this.B=this.U},Bo.prototype).aL=function(){return this.B},a)[42](23,Nm,M),a)[42](18,FL,M),[1]),HL=(new FL,a[42](22,Ku,M),function(L){return d[5].call(this,7,L)}),N2=(a[42](18,gZ,M),function(){return a[19].call(this,73)}),LN=[3,5],mk=(a[42](23,Fx,M),[5]),d6=new function(L,w){(this.O_=L,this).B=(this.K=w,tH)}(mN,(a[42](7,mN,M),175237375)),q_=(((((a[42](39,sl,I),sl.prototype).H=function(){this.l(),I.prototype.H.call(this)},sl).prototype.log=function(L,w,J,k,C){for(w=(((k=(L=N[26](1,
null,(J=(C=[31,"B",36],[1E3,1,15]),L)),this.Qe++),F[C[0]](16,k,21,L),a)[C[2]](10,J[1],L)||F[C[0]](13,Date.now().toString(),J[1],L),null!=a[C[2]](34,J[2],L,!1))||F[C[0]](12,60*(new Date).getTimezoneOffset(),J[2],L),L);this[C[1]].length>=J[0];)this[C[1]].shift(),++this.N;((this[C[1]].push(w),d)[41](20,new s8(w),this),this).M||this.K.oL||this.K.start()},sl.prototype.flush=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E){if(0===(E=[(b=this,"authuser"),15,(A=["=",0,"Authorization"],56)],this.B).length)L&&L();else if(this.P)F[16](2,
"json",!1,"format",A[0],this);else D=Date.now(),this.kd>D&&this.F<D?w&&w("throttled"):(f=R[31](4,14,null,this.N,this.Y,this.B),C={},(S=this.gI())&&(C[A[2]]=S),J=N[E[1]](21,.01,this),this.I&&(C["X-Goog-AuthUser"]=this.I,J=u[3](2,A[0],E[0],J,this.I)),this.D&&(C["X-Goog-PageId"]=this.D,J=u[3](3,A[0],"pageId",J,this.D)),S&&this.Z===S?w&&w("stale-auth-token"):(this.B=[],this.K.oL&&d[3](25,!1,this.K),this.N=A[1],H=z[19](E[2],f),V=function(K,Y,c,P,l,m,q,B){if(((B=[1,0,(c=[null,"",0],"K")],b).U.reset(),b)[B[2]].setInterval(b.U.aL()),
K){m=c[B[1]];try{P=JSON.parse(K.replace(")]}'\n",c[B[0]])),m=new Fx(P)}catch(h){}m&&(l=Number(a[48](18,c[B[1]],"-1",a[36](42,B[0],m))),l>c[2]&&(b.F=Date.now(),b.kd=b.F+l),q=d6.B(m))&&(Y=u[16](67,c[B[1]],B[0],q,-1),-1!=Y&&(b.U=new Bo(Y<B[0]?1:Y),b[B[2]].setInterval(b.U.aL())))}L&&L()},k=function(K,Y,c,P,l,m,q){((((P=(l=N[28](71,f,(c=[600,(q=[2,"start","B"],.5),3E5],3),fH),Y),m=b.U,m.K=Math.min(c[q[0]],m.K*q[0]),m)[q[2]]=Math.min(c[q[0]],m.K+Math.round(.2*(Math.random()-c[1])*m.K)),b.K).setInterval(b.U.aL()),
401===K&&S&&(b.Z=S),void 0)===P&&(P=500<=K&&K<c[0]||401===K||0===K),P)&&(b[q[2]]=l.concat(b[q[2]]),b.M||b.K.oL||b.K[q[1]]()),w&&w("net-send-failed",K)},O={url:J,body:H,It:1,j8:C,Xo:"POST",withCredentials:this.withCredentials,rs:this.rs},b.S?b.S.send(O,V,k):b.IL(O,V,k)))},sl.prototype).l=function(){this.flush()},a)[42](17,s8,ge),function(L,w){return F[36].call(this,1,w,L)}),Mm=function(L,w,J,k){return d[28].call(this,64,L,w,J,k)},$6=((d[4](27,"recaptcha.anchor.Main.init",function(L,w,J){J=[1,3,"K"],
w=new IM(JSON.parse(L)),R[10](30,9,J[0],J[1],"c",(new uM(w))[J[2]])}),a)[42](21,QR,M),a[42](30,WL,M),[1]),kK=[2];
(((((r=(((((((r=((((((((r=(((((((((d[15](73,o3,(WL.prototype.L=function(){return z[40](55,this,1)},PL)),z[31](31,o3),r=o3.prototype,r).yO=function(L){return L.title},r.h7=function(L,w,J,k){k=["R","call",8];switch(w){case k[2]:case 16:F[24](32,"pressed",L,J);break;default:case 64:case 1:o3[k[0]].h7[k[1]](this,L,w,J)}},r).sm=function(){return"goog-button"},r.aL=function(){},r).h1=function(L,w,J,k){return(J=(w=o3[(k=["h7","yO","R"],k)[2]].h1.call(this,L),this.nR(w,L[k[1]]()),L.aL()))&&this.yA(w,J),L.L1&
16&&this[k[0]](w,16,L.C1()),w},r).ms=function(){return"button"},r).nR=function(L,w){L&&(w?L.title=w:L.removeAttribute("title"))},r.qB=function(L,w,J,k){return(w.Fr=(w.f1=(L=o3[k=[16,"R","call"],k[1]].qB[k[2]](this,L,w),J=this.aL(L),J),this.yO(L)),w.L1)&k[0]&&this.h7(L,k[0],w.C1()),L},r).yA=function(){},d)[15](9,N2,o3),z)[31](26,N2),N2).prototype,r).aL=function(L){return L.value},r).h1=function(L,w,J,k,C,D,H,b){return w=(C=((z[3](1,(b=["join","BUTTON",0],D=[!1,"",null],D[2]),D[b[2]],L),L).XL&=-256,
z[46](29,1,L,D[b[2]],32),k=L.l,J=k.B,{"class":F[40](5,this,L)[b[0]](" "),disabled:!L.isEnabled(),title:L.yO()||D[1],value:L.aL()||D[1]}),(H=L.jP())?("string"===typeof H?H:Array.isArray(H)?H.map(N[b[2]].bind(null,4))[b[0]](D[1]):N[36](17,!0,H)).replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,D[1]):""),J.call(k,b[1],C,w||D[1])},r).Re=function(){},r).h7=function(){},r.Gu=function(L,w){R[w=[0,46,59],w[1]](w[2],u[w[0]](24,L),L.L(),"click",L.S)},r.qB=function(L,w,J,k,C){return((((z[3](2,(C=
[22,(k=[32,!1,null],5),46],k[2]),k[1],w),w).XL&=-256,z)[C[2]](C[1],1,w,k[1],k[0]),L.disabled)&&(J=u[19](26,this,1),u[C[0]](56,J,L)),N2.R.qB).call(this,L,w)},r).ms=function(){},r).im=function(L,w,J,k){(k=(N2.R.im.call(this,L,w,J),w.L()))&&1==L&&(k.disabled=J)},r.pR=function(){},r.yA=function(L,w){L&&(L.value=w)},r.jF=function(L){return L.isEnabled()},r).Mj=function(){},d[15](40,eJ,G),eJ.prototype),r.yO=function(){return this.Fr},r.aL=function(){return this.f1},r).gw=function(L,w){return L[w=["keyCode",
"S",13],w[0]]==w[2]&&"key"==L.type||32==L[w[0]]&&"keyup"==L.type?this[w[1]](L):32==L[w[0]]},r).nR=function(L){this.I.nR((this.Fr=L,this).L(),L)},r).H=function(){eJ.R.H.call(this),delete this.f1,delete this.Fr},r).A=function(L,w){((w=["R",46,"gw"],eJ[w[0]].A).call(this),this.L1)&32&&(L=this.L())&&R[w[1]](50,u[0](27,this),L,"keyup",this[w[2]])},u[4](40,function(){return new eJ(null)},"goog-button"),a)[42](39,yZ,eJ),yZ.prototype.A=function(L,w,J,k,C,D){(J=(((C=(eJ.prototype.A.call((k=(D=[0,"id",46],
w=this,["action","click",":"]),this)),this.L()),C).setAttribute(D[1],F[10](48,k[2],this)),C).tabIndex=this.U,!1),L=C.click,Object.defineProperty(C,k[1],{get:function(){function H(){J=!0,L.call(this)}return H.toString=function(){return L.toString()},H}}),R[D[2]](52,u[D[0]](27,this),this,k[D[0]],function(H,b,V,A){(A=[1,20,"P"],w.isEnabled())&&(b=new WL,V=N[0](15,w.C),H=N[18](31,A[0],V,b),J&&a[A[1]](24,!1,H,A[0],2),w[A[2]](H))}),R)[D[2]](55,u[D[0]](25,this),new V$(this.L(),!0),k[D[0]],function(){this.isEnabled()&&
this.S.apply(this,arguments)})},yZ.prototype).K=function(L,w,J,k,C){if(eJ.prototype.K.call(this,(C=[!1,9,"L"],L)),L){if(this.U=J=this.U,w=this[C[2]]())0<=J?w.tabIndex=this.U:a[18](C[1],0,w,C[0])}else(k=this[C[2]]())&&a[18](49,0,k,C[0])},a[42](22,ZZ,M),ZZ.prototype),r).Jz=function(){return a[36](2,3,this)},r.setTimeout=function(L){return F[31](17,L,3,this)},r.clearTimeout=function(){return F[31](17,void 0,3,this,!1)},ZZ).K="uvresp",r.Ve=function(){return z[40](59,this,9)},r).J=function(){return a[36](99,
4,this)},r.KR=function(){return u[42](9,this,8,hT)},a)[42](19,U,XP),U.prototype).RL=function(){return!1};
var se,l0=((((r=(((r=(d[15](73,((U.prototype.Em=(((U.prototype.Xg=function(){},(U.prototype.S=(U.prototype.V=function(){return this.fY},function(){return!1}),U).prototype.rq=function(){return N[33].call(this,8)},U).prototype.h_=function(){return""},U.prototype).Wm=function(){return R[22](24,this.J_)},U.prototype.yF=function(){},U.prototype.s_=function(){this.IL.L().focus()},U.prototype.cM=function(L,w,J){if(J=["ZD","slice",2],L)if(0==this[J[0]].length)N[36](J[2],this);else w=this[J[0]][J[1]](0),this[J[0]]=
[],w.forEach(function(k){k()})},U.prototype.A=function(L,w,J){(((w=["action",(L=this,J=[46,"Hm",0],"keyup")],XP.prototype).A.call(this),R[J[0]](50,u[J[2]](29,this),this.D5,w[J[2]],this.rq),R[J[0]](48,u[J[2]](25,this),this.IL,w[J[2]],function(){this.vm(!1),d[41](7,"i",this)}),R[J[0]](49,u[J[2]](30,this),this.Fr,w[J[2]],function(){(this.vm(!1),d)[41](20,"j",this)}),R[J[0]](52,u[J[2]](30,this),this.k9,w[J[2]],function(k){a[14](65,(k=[!0,"k",null],k[2]),k[0],this),d[41](6,k[1],this)}),R[J[0]](58,u[J[2]](29,
this),this.ue,w[J[2]],this.Xg),R)[J[0]](56,u[J[2]](24,this),this.L(),w[1],function(k){27==k.keyCode&&d[41](6,"e",this)}),R)[J[0]](49,u[J[2]](24,this),this[J[1]],w[J[2]],function(){return u[5](26,!1,L)})},U.prototype.Um=function(L,w,J){(this[(((XP.prototype.Um.call(this,(w=["audio-button-holder","verify-button-holder",(J=["Hm",!1,25],"reload-button-holder")],L)),this.D5).render(d[J[2]](24,this,w[2])),this.IL).render(d[J[2]](19,this,w[0])),this.Fr.render(d[J[2]](26,this,"image-button-holder")),this).k9.render(d[J[2]](26,
this,"help-button-holder")),this.ue.render(d[J[2]](27,this,"undo-button-holder")),N[22](80,this.ue.L(),J[1]),J[0]].render(d[J[2]](2,this,w[1])),this).Fc?N[22](16,this.IL.L(),J[1]):N[22](10,this.Fr.L(),J[1])},(U.prototype.NO=function(L,w,J,k,C,D){if((w=(D=(C=[!0,10,"none"],[41,1,2]),void 0===w?null:w),L)||!w||F[D[2]](D[1],C[D[2]],w))L&&(J=this.J7(w,C[0])),!w||L&&!J||(k=R[22](D[2],this.I),k.height+=(L?1:-1)*(u[37](29,w).height+R[D[0]](8,C[D[1]],w,"margin").top+R[D[0]](12,C[D[1]],w,"margin").bottom),
F[10](7,"d",k,this,!L)),L||this.J7(w,!1)},U).prototype.Qu=function(L,w,J,k,C,D,H){return(((k=((D=new EI((C=[(H=(J=void 0===J?"":J,["set","B","X"]),2),"k","payload"],u[29](12,"api2",C[2]))+J),D)[H[1]][H[0]]("p",L),VD[H[2]]().get()),D)[H[1]][H[0]](C[1],z[40](55,k,C[0])),w)&&D[H[1]][H[0]]("id",w),D).toString()},function(){}),U.prototype.J7=function(L,w,J){if(!(J=[!0,21,0],L)||F[2](J[1],"none",L)==w)return!1;return N[22](2,L,w),a[18](1,J[2],L,w),J[0]},U).prototype.vm=function(L,w){((this.D5[w=["K",14,
64],w[0]](L),this).IL[w[0]](L),this.Fr)[w[0]](L),this.Hm[w[0]](L),this.k9[w[0]](L),a[w[1]](w[2],null,!0,this,!1)},IQ),XP),IQ.prototype),r.wq=function(){return z[49].call(this,69)},r).ob=function(){return z[41].call(this,7)},r.A=function(L,w,J,k){(((L=new (w=["submit",null,"load"],k=["K6",33,14],IQ.R.A.call(this),wV)(this),R[46](59,L,this.L(),"focus",this[k[0]]),R)[46](53,L,this.L(),"blur",this.wq),d[18](27,w[1]))?this.K=L:(zz&&R[46](55,L,this.L(),["keypress","keydown","keyup"],this.hN),J=d[5](17,
9,this.L()),N[17](k[1],u[32](16,J),w[2],L,this.bR),this.K=L,z[k[2]](20,w[0],!0,this)),z)[4](86,w[1],this),this.L().K=this},r).hN=function(L){return z[13].call(this,8,L)},r.a7=null,r.bR=function(){return F[29].call(this,14)},IQ).prototype,r.Um=function(L,w,J,k,C){((((IQ.R.Um.call(this,(C=[(k=[null,"label",!0],"getAttribute"),18,"U"],L)),this)[C[2]]||(this[C[2]]=L[C[0]](k[1])||""),a[37](56,k[0],d[5](33,9,L)))==L&&(this.ae=k[2],J=this.L(),d[22](60,"label-input-label",J)),d[C[1]](25,k[0]))&&(this.L().placeholder=
this[C[2]]),w=this.L(),F)[24](88,k[1],w,this[C[2]])},r).nw=function(){return R[36].call(this,32)},r.H=function(L){((L=["MO","K","H"],IQ.R[L[2]]).call(this),this[L[1]])&&(this[L[1]][L[0]](),this[L[1]]=null)},r.ae=!1,r.K6=function(L,w,J){return N[30].call(this,1,L,w,J)},r.gY=function(L){this[((L=["call","R","L"],IQ)[L[1]].gY[L[0]](this),this.K)&&(this.K.MO(),this.K=null),L[2]]().K=null},r.K1=function(){this.B=this.l.B("INPUT",{type:"text"})},IQ.prototype).reset=function(L){R[42](25,(L=[5,"",4],L[1]),
this)&&(R[L[0]](14,L[1],this),z[L[2]](83,null,this))},IQ.prototype.aL=function(L){return null!=this[L=["a7","","L"],L[0]]?this[L[0]]:R[42](1,L[1],this)?this[L[2]]().value:""},IQ.prototype.isEnabled=function(){return!this.L().disabled},IQ.prototype.C=function(){this.I=!1},IQ.prototype).D=function(L){!this[L=["ae","","L"],L[2]]()||R[42](58,L[1],this)||this[L[0]]||(this[L[2]]().value=this.U)},a[42](23,vL,IQ),vL.prototype.K1=function(L,w){u[(this[(this[this[IQ.prototype.K1.call((w=["setAttribute","L",
2],L=["false","spellcheck","off"],this)),w[1]]()[w[0]]("id",F[10](51,":",this)),this[w[1]]()[w[0]]("autocomplete",L[w[2]]),w[1]]()[w[0]]("autocorrect",L[w[2]]),this[w[1]]()[w[0]]("autocapitalize",L[w[2]]),w)[1]]()[w[0]](L[1],L[0]),this[w[1]]())[w[0]]("dir","ltr"),22](57,"rc-response-input-field",this[w[1]]())},function(L,w,J,k){return(J=(k=["exec",2,48],[0,".",1]),JT)?(w=/Windows NT ([0-9.]+)/,(L=w[k[0]](u[20](96)))?L[J[k[1]]]:"0"):Kj?(w=/1[0|1][_.][0-9_.]+/,(L=w[k[0]](u[20](32)))?L[J[0]].replace(/_/g,
J[1]):"10"):gT?(w=/Android\s+([^\);]+)(\)|;)/,(L=w[k[0]](u[20](64)))?L[J[k[1]]]:""):R9||o9||tI?(w=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(L=w[k[0]](u[20](k[2])))?L[J[k[1]]].replace(/_/g,J[1]):""):""})(),fe=new Q(280,275),ak=new Q(280,235),Cl=((((((((((r=(a[42](39,Zi,U),Zi.prototype),r).RL=function(L){return(this[L=["U","C","aL"],L[1]]&&this[L[1]].pause(),z)[25](38,this[L[0]][L[2]]())?(d[13](59,"audio-instructions",document).focus(),!0):!1},r.s_=function(L,w){!((L=[0,10,(w=[21,2,1],!0)],this.K)&&N[36](w[0],
L[w[1]],this.K).length>L[0])||W0&&u[12](18,"",L[w[2]],l0)>=L[0]?a[42](10,"rc-audiochallenge-play-button").children[L[0]].focus():this.K.focus()},r).Em=function(L){this[L=["aL",15,"response"],L[2]][L[2]]=this.U[L[0]](),d[47](L[1],this.U,!1)},r).A=function(L,w,J){(((L=(this.F=((J=[(w=["rc-audiochallenge-response-field","focus","rc-audiochallenge-control"],7),50,0],U).prototype.A.call(this),d[25](17,this,w[2])),this.U.render(d[25](3,this,w[J[2]])),this.U).L(),F)[24](40,"labelledby",L,["rc-response-input-label"]),
R[46](55,R[46](56,R[46](49,u[J[2]](25,this),a[42](10,"rc-audiochallenge-tabloop-begin"),w[1],function(){a[14](28,1)}),a[42](13,"rc-audiochallenge-tabloop-end"),w[1],function(){a[14](31,1,["rc-audiochallenge-error-message","rc-audiochallenge-play-button"])}),L,"keydown",function(k){k.ctrlKey&&17==k.keyCode&&this.U8()}),this.K=d[25](27,this,"rc-audiochallenge-error-message"),d)[J[0]](9,"keyup",this.P,document),R)[46](J[1],u[J[2]](30,this),this.P,"key",this.js)},r).J7=function(L,w,J,k){if(k=["\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u0439.",
!1,"K"],L)return J=!!this[k[2]]&&0<N[36](18,!0,this[k[2]]).length,N[22](82,this[k[2]],w),a[23](34,this.U,w),d[42](57,this[k[2]]),w&&d[20](33,this[k[2]],k[0]),w!=J;return this.NO(w,this[k[2]]),k[1]},r).yF=function(L,w){(w=[28,49,29],d)[w[1]](w[0],L,R[w[2]].bind(null,24),{Je:this.D})},r).cM=function(L,w){(w=["call","C","pause"],U.prototype.cM[w[0]](this,L),!L&&this[w[1]])&&this[w[1]][w[2]]()},r).K1=function(L){this.B=((L=["call","K1",43],U.prototype)[L[1]][L[0]](this),R[L[2]](49,a[20].bind(null,8),
{m1:"audio-instructions"})),this.Um(this.L())},r.js=function(L){return N[46].call(this,1,L)},r).Yd=function(L,w,J,k,C,D,H,b){if((((this.NO((D=[!1,'\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438".',"rc-audiochallenge-instructions"],b=["\u041f\u0420\u041e\u0421\u041b\u0423\u0428\u0410\u0422\u042c","action",30],!!J)),R[5](15,"",this.U),
d)[47](13,this.U,!0),this).D||(d[49](27,d[25](17,this,"rc-audiochallenge-tdownload"),a[16].bind(null,5),{b7:this.Qu(L,void 0,"/audio.mp3"),dE:d[20](49,"div",D[0])?"rc-audiochallenge-tdownload-link-on-dark":"rc-audiochallenge-tdownload-link"}),u[39](16,8,this,a[13](9,1,d[25](2,this,"rc-audiochallenge-tdownload")),"href")),document.createElement("audio")).play)w&&u[42](10,w,8,Xx)&&u[42](15,w,8,Xx),d[20](26,d[25](25,this,D[2]),D[1]),d[20](27,d[25](2,this,"rc-audiochallenge-input-label"),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0437\u0432\u0443\u0447\u0430\u0432\u0448\u0438\u0435 \u0441\u043b\u043e\u0432\u0430."),
this.D||d[20](35,d[13](52,"rc-response-label",document),"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 CTRL, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c."),k=this.Qu(L,""),d[49](b[2],this.F,a[37].bind(null,31),{b7:k}),this.C=d[13](56,"audio-source",document),u[39](18,8,this,this.C,"src"),C=d[25](3,this,"rc-audiochallenge-play-button"),H=a[7](73,b[0],this),d[13](45,H,this),H.render(C),F[24](64,"labelledby",H.L(),["audio-instructions","rc-response-label"]),R[46](53,
u[0](25,this),H,b[1],this.U8);else d[49](25,this.F,u[11].bind(null,1));return d[0](2)},r).U8=function(L,w,J){return F[8].call(this,2,L,w,J)},new Q(400,580)),SA=new (((((((((((((((((a[42](31,Wu,U),Wu.prototype).Wm=function(L,w,J,k){return new Q((w=Math.max((L=(k=[2,300,(J=[400,20,180],4)],this).Y||d[k[2]](k[2],J[1],0),Math.min(L.height-194,J[0],L.width)),k[1]),w),J[k[0]]+w)},Wu.prototype).pY=function(){return u[28].call(this,12)},Wu.prototype.K1=function(L){((U.prototype[L=["K1",74,48],L[0]].call(this),
this).B=R[43](L[2],N[41].bind(null,L[1])),this).Um(this.L())},Wu.prototype.kx=function(L,w,J,k,C){return a[23].call(this,1,L,w,J,k,C)},Wu.prototype.S=function(L){return(L=0===this.U.T.PK.Xy,"tileselect")===this.V()&&L},Wu).prototype.A1=function(L,w,J){(((w=!(this[(J=[22,18,"NO"],J)[2]](!1),L.selected))?u[J[0]](57,"rc-imageselect-tileselected",L.element):d[J[0]](40,"rc-imageselect-tileselected",L.element),L.selected=w,this.U).T.PK.Xy+=w?1:-1,N[J[0]](J[1],a[42](12,"rc-imageselect-checkbox",L.element),
w),this.S())?N[38](35,this,"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"):N[38](35,this)},Wu).prototype.RL=function(L){return(L=["NN",42,"NO"],this).U.T.PK.Xy<this[L[0]]?(this[L[2]](!0,a[L[1]](9,"rc-imageselect-error-select-more")),!0):!1},Wu.prototype.J7=function(L,w,J){return((J=["rc-imageselect-error-select-more","rc-imageselect-incorrect-response","rc-imageselect-error-dynamic-more"],!w)&&L||J.forEach(function(k,C){C=a[42](10,k),C!=L&&this.NO(!1,C)},this),L)?U.prototype.J7.call(this,
L,w):!1},Wu).prototype.yF=function(L,w){d[49]((w=[null,14,30],w)[2],L,d[w[1]].bind(w[0],42),{S8:this.V()})},Wu.prototype).A=function(L){(U.prototype[(L=[31,"A",59],L)[1]].call(this),R[46](55,u[0](L[0],this),a[42](9,"rc-imageselect-tabloop-end"),"focus",function(){a[14](26,1,["rc-imageselect-tile"])}),R)[46](L[2],u[0](L[0],this),a[42](9,"rc-imageselect-tabloop-begin"),"focus",function(){a[14](25,1,["verify-button-holder"])})},Wu.prototype).s_=function(){},Wu.prototype.Yd=function(L,w,J,k,C,D,H,b){return(((H=
(D=(this.NN=(this.SF=(C=u[(b=(k=["image/png",0,null],[2,1,"C"]),this).kd=w,42](14,this.kd,b[1],k$),z[40](51,C,b[1])),a[36](34,3,C)||b[1]),k)[0],a[36](35,6,C)==b[1]&&(D="image/jpeg"),z)[40](59,C,7),H)!=k[b[0]]&&(H=H.toLowerCase()),d[49](24,this[b[2]],d[46].bind(null,24),{label:this.SF,je:a[41](5,k[b[0]],"",F[23](4,k[b[0]],C,b[0])),tN:D,Si:this.V(),GT:H}),F[41](8,{assert:d[18].bind(null,40)}.assert(this[b[2]]),d[13](88,this[b[2]].innerHTML.replace(".",""))),this.U.T).element=document.getElementById("rc-imageselect-target"),
F)[10](6,"d",this.Wm(),this,!0),z[27](25,b[0],this),R[44](b[1],k[b[1]],this.WM(this.Qu(L))).then(x(function(){J&&this.NO(!0,a[42](8,"rc-imageselect-incorrect-response"))},this))},Wu).prototype.Em=function(){this.response.response=N[8](2,this)},Wu.prototype.Um=function(L,w){this[(U.prototype.Um.call(this,(w=["C",25,"rc-imageselect-payload"],L)),w)[0]]=d[w[1]](1,this,w[2])},Wu).prototype.WM=function(L,w,J,k,C,D,H,b,V){return(this[((J=((w=(b=(H=(D=(k=a[36](11,4,u[42](7,this.kd,(C=(V=[null,"U",8],["keydown",
"td",!0]),1),k$)),a)[36](2,5,u[42](V[2],this.kd,1,k$)),N)[35](16,4,1,D,this,k),H.gs=L,R[43](58,F[14].bind(V[0],2),H)),[]),d[25](27,this,"rc-imageselect-target").appendChild(b),Array.prototype.forEach).call(F[18](18,C[1],document,V[0],b),function(A,S,O){(O=["push",(S={selected:!1,element:A},46),"action"],w)[O[0]](S),R[O[1]](51,u[0](28,this),new V$(A,!1,!0),O[2],x(this.A1,this,S))},this),jA(F[18](26,C[1],document,"rc-imageselect-tile",b),function(A,S){((R[46](52,(S=[2,"kx","call"],u[0](26,this)),A,
["focus","blur"],x(this.pY,this)),R)[46](58,u[0](28,this),A,"keydown",x(this[S[1]],this,D)),Array.prototype).forEach[S[2]](F[18](S[0],"img",document,null,A),function(O){u[39](17,8,this,O,"src")},this)},this),d[13](50,"rc-imageselect",document)),z)[46](48,C[2],!1,J)||R[35](46,C[0],J,x(this.kx,this,D)),V)[1]].T.PK={rowSpan:k,colSpan:D,WK:w,Xy:0},this).S()?N[38](38,this,"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"):N[38](46,this),b},a[42](16,Mc,Wu),Mc.prototype.UT=function(L){(this.NO((L=
[!1,"ue",!0],L[0])),N)[22](10,this[L[1]].L(),L[2])},Mc.prototype).Em=function(L,w,J,k,C,D,H){for(D=(J=(H=["K",0,"push"],H[1]),[]);J<this[H[0]].length;J++){for(k=(C=[],H)[1];k<this[H[0]][J].length;k++)L=this[H[0]][J][k],w=F[16](13,1/this.D,new Kg(L.x,L.y)).round(),C[H[2]]({x:w.x,y:w.y});D[H[2]](C)}this.response.response=D},Mc).prototype.WM=function(L,w,J,k,C,D,H){return(D=(J=(((((C=((k=R[w=[(H=[30,(this.K=[[]],null),8],"2d"),386,"rc-imageselect-target"],43](52,a[35].bind(H[1],1),{gs:L}),a)[42](H[2],
w[2]).appendChild(k),a)[42](13,"rc-canvas-canvas"),C).width=R[22](H[0],this.I).width-14,C).height=C.width,k.style).height=z[37](36,"px",C.height),this).D=C.width/w[1],C).getContext(w[0]),a)[42](12,"rc-canvas-image"),R[35](47,"load",D,function(){J.drawImage(D,0,0,C.width,C.height)}),R)[46](58,u[0](H[0],this),new V$(C),"action",x(function(b){this.UT(b)},this)),k},Mc.prototype.S=function(){return!1},a[42](16,iY,Mc),r=iY.prototype,r).UT=function(L,w,J,k,C,D,H,b,V,A,S,O,f,E,K,Y,c,P,l,m,q,B,h,T,e){if(l=
3<=(S=(q=[!0,0,1],e=[54,26,27],Mc.prototype.UT.call(this,L),Y=R[4](e[2],q[2],q[1]),C=new Kg(L.clientX-Y.x,L.clientY-Y.y),this.K[this.K.length-q[2]]),S.length))O=S[q[1]],b=C.y-O.y,w=C.x-O.x,l=15>Math.sqrt(w*w+b*b);K=l;a:{if(2<=S.length)for(A=S.length-q[2];A>q[1];A--)if(E=C,m=S[A],D=S[S.length-q[2]],H=S[A-q[2]],T=R[25](5,m,H),P=R[25](4,E,D),T==P?f=q[0]:(c=T[q[1]]*P[q[2]]-P[q[1]]*T[q[2]],1E-5>=Math.abs(c-q[1])?f=!1:(k=F[16](11,q[2]/c,new Kg(P[q[2]]*T[2]-T[q[2]]*P[2],T[q[1]]*P[2]-P[q[1]]*T[2])),z[0](29,
1E-5,H,k)||z[0](e[2],1E-5,m,k)||z[0](30,1E-5,D,k)||z[0](2,1E-5,E,k)?f=!1:(J=new v$(D.x,E.x,D.y,E.y),V=R[37](32,J,R[41](22,u[11](e[0],J,k.y,k.x),q[1],q[2])),B=new v$(H.x,m.x,H.y,m.y),f=z[0](28,1E-5,R[37](2,B,R[41](18,u[11](53,B,k.y,k.x),q[1],q[2])),k)&&z[0](e[1],1E-5,V,k)))),f){h=K&&A==q[2];break a}h=q[0]}h?(K?(S.push(S[q[1]]),this.K.push([])):S.push(C),this.Kc()):(this.Kc(C),a[0](61,this.Kc,250,this))},r.Kc=function(L,w,J,k,C,D,H,b){for(((((J=(C=(b=["K","fill","getContext"],["rc-canvas-canvas",1,
0]),a[42](10,C[0])),w=J[b[2]]("2d"),w).drawImage(a[42](13,"rc-canvas-image"),C[2],C[2],J.width,J.height),w).strokeStyle="rgba(100, 200, 100, 1)",w).lineWidth=2,t)&&(w.setLineDash=function(){}),D=C[2];D<this[b[0]].length;D++)if(H=this[b[0]][D].length,H!=C[2]){for(k=(D==this[b[0]].length-C[1]&&(L&&(w.beginPath(),w.strokeStyle="rgba(255, 50, 50, 1)",w.moveTo(this[b[0]][D][H-C[1]].x,this[b[0]][D][H-C[1]].y),w.lineTo(L.x,L.y),w.setLineDash([0]),w.stroke(),w.closePath()),w.strokeStyle="rgba(255, 255, 255, 1)",
w.beginPath(),w.fillStyle="rgba(255, 255, 255, 1)",w.arc(this[b[0]][D][H-C[1]].x,this[b[0]][D][H-C[1]].y,3,C[2],2*Math.PI),w[b[1]](),w.closePath()),w.beginPath(),w.moveTo(this[b[0]][D][C[2]].x,this[b[0]][D][C[2]].y),C)[1];k<H;k++)w.lineTo(this[b[0]][D][k].x,this[b[0]][D][k].y);((w[w.fillStyle="rgba(255, 255, 255, 0.4)",b[1]](),w).setLineDash([0]),w.stroke(),w.lineTo(this[b[0]][D][C[2]].x,this[b[0]][D][C[2]].y),w.setLineDash([10]),w).stroke(),w.closePath()}},r).RL=function(L,w,J,k,C,D,H,b){if(!(L=
(b=(C=[0,"rc-imageselect-error-select-something",.5],[2,!0,10]),this.K[C[0]].length)<=b[0])){for(w=(k=C[0],C[0]);k<this.K.length;k++)for(D=this.K[k],J=C[0],H=D.length-1;J<D.length;J++)w+=(D[H].x+D[J].x)*(D[H].y-D[J].y),H=J;L=500>Math.abs(w*C[b[0]])}return L?(this.NO(b[1],a[42](b[2],C[1])),b[1]):!1},r.yF=function(L){d[49](31,L,z[4].bind(null,16))},r.Xg=function(L,w){(L=(this.K[L=this.K.length-(w=["pop",0,1],w[2]),L].length==w[1]&&L!=w[1]&&this.K[w[0]](),this.K.length-w[2]),this.K)[L].length!=w[1]&&
this.K[L][w[0]](),this.Kc()},a[42](18,Ug,Mc),r=Ug.prototype,r).WM=function(L,w,J,k){return(w=Mc.prototype.WM.call((J=[1,2,(k=[0,38,14],0)],this),L),z[26](5,J[1],J[k[0]],this),N)[k[2]](10,"width",J[k[0]],J[2]),N[k[1]](k[1],this,"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",!0),w},r.UT=function(L,w,J){this[(w=(Mc.prototype.UT.call(this,(J=["K",4,"clientY"],L)),R[J[1]](11,1,0)),J)[0]][this[J[0]].length-1].push(new Kg(L.clientX-w.x,L[J[2]]-w.y)),N[38](47,this,"\u0414\u0430\u043b\u0435\u0435"),
this.Kc()},Ug.prototype.yF=function(L){d[49](28,L,a[32].bind(null,19))},r).Xg=function(L,w){0==(0!=(L=this[w=["K",!0,1],w[0]].length-w[2],this[w[0]][L].length)&&this[w[0]][L].pop(),this[w[0]][L]).length&&N[38](39,this,"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",w[1]),this.Kc()},r).RL=function(L,w){if(((this[L=["\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",(w=["K",!1,2],3),500],w[0]].push([]),this).Kc(),this[w[0]]).length>L[1])return w[1];return(this.vm(w[1]),
a[0](31,function(){this.vm(!0)},L[w[2]],this),z)[26](4,w[2],1,this),N[22](w[2],this.ue.L(),w[1]),N[38](35,this,L[0],!0),!0},r.Kc=function(L,w,J,k,C,D,H,b){for(D=((k=((J=(L=(this.K.length==(H=[0,(b=[0,"rgba(100, 200, 100, 1)","width"],"rc-canvas-canvas"),2],H[b[0]])?N[14](2,b[2],1,H[b[0]]):N[14](8,b[2],3,this.K.length-1),a[42](12,H[1])),w=L.getContext("2d"),w.drawImage(a[42](12,"rc-canvas-image"),H[b[0]],H[b[0]],L.width,L.height),document.createElement("canvas")),J).width=L.width,J.height=L.height,
J.getContext("2d")),k).fillStyle=b[1],H[b[0]]);D<this.K.length;D++)for(D==this.K.length-1&&(k.fillStyle="rgba(255, 255, 255, 1)"),C=H[b[0]];C<this.K[D].length;C++)k.beginPath(),k.arc(this.K[D][C].x,this.K[D][C].y,20,H[b[0]],H[2]*Math.PI),k.fill(),k.closePath();w.drawImage(J,H[b[0]],H[b[w.globalAlpha=.5,0]]),w.globalAlpha=1},Q)(300,185),gt=new (((((((r=(a[42](24,vu,U),vu).prototype,r).J7=function(L,w,J){if(J=["J7",35,"call"],L)return a[23](J[1],this.K,w),U.prototype[J[0]][J[2]](this,L,w);return this.NO(w,
a[42](8,"rc-defaultchallenge-incorrect-response")),!1},r).sl=function(){return N[33].call(this,2)},r.s_=function(L,w,J,k){if(k=[32,18,"focus"],L=[null,!0,""],!(R9||o9||gT))if(this.K.aL())this.K.L()[k[2]]();else w=this.K,J=R[42](56,L[2],w),w.I=L[1],w.L()[k[2]](),J||d[k[1]](30,L[0])||(w.L().value=w.U),w.L().select(),d[k[1]](89,L[0])||(w.K&&N[43](k[0],w.K,w.L(),"click",w.K6),a[0](29,w.C,10,w))},r.Em=function(L){this[L=[17,"","response"],L[2]][L[2]]=this.K.aL(),R[5](L[0],L[1],this.K)},r.RL=function(){return z[25](58,
this.K.aL())},r).yF=function(L){d[49](24,L,a[37].bind(null,65))},r.A=function(L,w){(((((U.prototype.A.call((L=(w=["U",29,"K"],["default-response","key","id"]),this)),this.C=d[25](3,this,"rc-defaultchallenge-payload"),this[w[2]]).render(d[25](25,this,"rc-defaultchallenge-response-field")),this[w[2]]).L().setAttribute(L[2],L[0]),d)[7](10,"keyup",this[w[0]],this[w[2]].L()),R)[46](48,u[0](24,this),this[w[0]],L[1],this.MN),R)[46](57,u[0](w[1],this),this[w[2]].L(),"keyup",this.sl)},r).K1=function(L){((U[L=
["K1","L","prototype"],L[2]][L[0]].call(this),this).B=R[43](49,R[46].bind(null,8)),this).Um(this[L[1]]())},r).Yd=function(L,w,J,k){return((k=[3,null,"K"],this).NO(!!J),R[5](13,"",this[k[2]]),d)[49](26,this.C,R[8].bind(k[1],5),{Qu:this.Qu(L)}),d[0](k[0])},r).MN=function(L){return a[45].call(this,10,L)},Q)(300,250),Ak=(((((r=((((((((a[42](17,tM,U),tM.prototype.K1=function(L){this[L=["prototype","B",40],U[L[0]].K1.call(this),L[1]]=R[43](63,F[39].bind(null,L[2])),this.Um(this.L())},tM.prototype.Em=function(){this.response.response=
""},tM).prototype.cM=function(L){L&&d[25](2,this,"rc-doscaptcha-body-text").focus()},tM.prototype.Yd=function(L,w,J,k,C,D){return((k=(w=(L=(this.vm((C=["rc-doscaptcha-body-text","px","rc-doscaptcha-body"],D=[3,!1,25],D[1])),d)[D[2]](D[0],this,"rc-doscaptcha-header-text"),d[D[2]](19,this,C[2])),d[D[2]](19,this,C[0])),L)&&z[42](9,C[1],L,-1),w)&&k&&(J=u[37](20,w).height,z[42](41,C[1],k,J)),d[0](D[0])},a)[42](6,HL,Wu),HL.prototype.reset=function(){this.Z=[],this.ye=!(this.F=[],1)},HL.prototype.Yd=function(L,
w,J){return(this.reset(),Wu.prototype.Yd).call(this,L,w,J)},HL).prototype.S=function(){return!1},a)[42](7,sg,HL),sg.prototype.reset=function(L){this.P=(this[((L=["A7","dI","D"],HL.prototype.reset).call(this),this.K=[],this[L[2]]=[],this)[L[0]]=[],L[1]]=!1,0)},sg.prototype.Kw=function(L,w,J,k){($r((L.length==(k=[(J=[!1,0,!0],1),41,17],J)[k[0]]&&(this.dI=J[2]),$r(this.K,L),this.A7),w),this.D.length==this.K.length+k[0]-L.length)&&(this.dI?d[k[1]](7,"l",this):z[31](k[2],7,J[0],this))},sg).prototype.Yd=
function(L,w,J,k,C,D,H,b,V,A){return(b=(V=(this.A7=(C=(H=N[28](59,(A=(D=[16,2,"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"],[69,46,38]),u)[42](12,w,5,DL),1,k$)[0],a[A[1]](A[1],1,H,k$,w),HL.prototype.Yd.call(this,L,w,J)),N[28](A[0],u[42](13,w,5,DL),1,k$)),this.K.push(this.Qu(L,"2")),this).K,u[42](7,w,5,DL)),k=d[34](65,D[0],D[1],b),$r(V,k),N)[A[2]](A[1],this,D[2]),C},sg).prototype.A1=function(L,w,J){(HL[w=(J=[22,0,"prototype"],["rc-imageselect-carousel-instructions","\u0414\u0430\u043b\u0435\u0435",
"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"]),J[2]].A1.call(this,L),this.U.T.PK.Xy)>J[1]?(u[J[0]](59,"rc-imageselect-carousel-instructions-hidden",a[42](11,w[J[1]])),this.dI?N[38](43,this):N[38](39,this,w[1])):(d[J[0]](9,"rc-imageselect-carousel-instructions-hidden",a[42](9,w[J[1]])),N[38](47,this,w[2]))},sg).prototype.Em=function(){this.response.response=this.D},sg.prototype.RL=function(L,w){if((((L=[!1,7,(w=["forEach",0,14],0)],this.NO(L[w[1]]),this.D).push([]),this.U.T.PK).WK[w[0]](function(J,
k){J.selected&&this.D[this.D.length-1].push(k)},this),this).dI)return L[w[1]];return!(((this.Z=F[w[2]](9,L[2],this.D),F)[11](12,!0,this),z)[31](16,L[1],L[w[1]],this),0)},a[42](30,I0,HL),I0.prototype),r.reset=function(L){this[this.K=((L=["reset","prototype","D"],HL)[L[1]][L[0]].call(this),0),L[2]]={}},r).Yd=function(L,w,J,k,C){return this.K=(k=(C=["call","prototype",14],HL[C[1]].Yd[C[0]](this,L,w,J)),a[36](34,2,u[42](C[2],w,3,oM))||0),k},r).A1=function(L,w,J){-(J=[!0,(w=[1E3,!1,"rc-imageselect-dynamic-selected"],
"U"),22],1)==this.F.indexOf(this[J[1]].T.PK.WK.indexOf(L))&&(this.NO(w[1]),L.selected||(++this[J[1]].T.PK.Xy,L.selected=J[0],this.K&&F[31](59,L.element,"transition","opacity "+(this.K+w[0])/w[0]+"s ease"),u[J[2]](59,w[2],L.element),$r(this.Z,this[J[1]].T.PK.WK.indexOf(L)),F[11](4,J[0],this)))},r.Em=function(){this.response.response=this.F},I0.prototype).Kw=function(L,w,J,k,C,D,H,b,V){for(C=(V=(D=(b=[1,4,""],{}),[2,'"><img',"U"]),u)[V[0]](7,d[24](4,this)),w=C.next();!w.done;D={k7:D.k7,J0:D.J0,Uj:D.Uj},
w=C.next()){if(0==(H=w.value,L).length)break;this[((k=this[(J=(this.F.push(H),N)[35](V[0],b[1],b[0],this[V[2]].T.PK.colSpan,this,this[V[2]].T.PK.rowSpan),ax(J,{e8:0,EU:0,rowSpan:1,colSpan:1,gs:L.shift()}),D).Uj=N[6](25,b[0],"zSoyz",V[1],b[V[0]],J),V[2]].T.PK.WK.length,D).k7=this.D[H]||H,D).J0={selected:!0,element:this[V[2]].T.PK.WK[D.k7].element},V[2]].T.PK.WK.push(D.J0),a[0](63,x(function(A){return function(S,O){(((O=[22,"action",100],this).D[S]=A.k7,d[42](9,A.J0.element),A.J0.element.appendChild(A.Uj),
N[24](30,"0",O[2],A.J0),A.J0).selected=!1,d[O[0]](11,"rc-imageselect-dynamic-selected",A.J0.element),R)[46](48,u[0](28,this),new V$(A.J0.element),O[1],DZ(this.A1,A.J0))}}(D),this,k),this.K+1E3)}},r).RL=function(L,w,J,k){if(k=[11,"rc-imageselect-error-dynamic-more","prototype"],!HL[k[2]].RL.call(this)){if(!this.ye)for(w=u[2](7,this.F),L=w.next();!L.done;L=w.next())if(J=this.D,null!==J&&L.value in J)return!1;this.NO(!0,a[42](k[0],k[1]))}return!0},new Q(350,410)),mX={G9:!0,G$:((((((((r=(((((((((((a[42](38,
nu,U),r=nu.prototype,r).s_=function(){d[25](3,this,"rc-prepositional-instructions").focus()},r.Wm=function(L,w,J){return new (w=(J=[10,"max",(L=this.Y||d[4](3,20,0),37)],u[J[2]](31,this.C)),Q)(Math[J[1]](Math.min(L.width-J[0],Ak.width),280),w.height+60)},r.J7=function(L,w,J){return((J=["rc-prepositional-select-more","rc-prepositional-verify-failed"],!w&&L)||J.forEach(function(k,C){(C=d[25](27,this,k),C!=L)&&this.NO(!1,C)},this),L)?U.prototype.J7.call(this,L,w):!1},r).Em=function(L){(this[(L=["response",
"D","plugin"],L)[0]][L[0]]=this.K,this)[L[0]][L[2]]=this[L[1]]?"if":"si"},r.A=function(L){((L=[24,0,51],U).prototype.A.call(this),R)[46](49,R[46](L[2],u[L[1]](31,this),d[25](L[0],this,"rc-prepositional-tabloop-begin"),"focus",function(){a[14](30,1)}),d[25](1,this,"rc-prepositional-tabloop-end"),"focus",function(){a[14](27,1,["rc-prepositional-select-more","rc-prepositional-verify-failed","rc-prepositional-instructions"])})},r).K1=function(L){(this[((L=["L","B",57],U.prototype.K1).call(this),L)[1]]=
R[43](L[2],N[21].bind(null,32)),this).Um(this[L[0]]())},r.Yd=function(L,w,J,k,C,D,H){return(u[((this[(C=(((H=(this.K=[],[0,"D",34]),D=[7,!1,1],this.U=u[42](10,w,D[H[0]],$$),(k=u[42](13,w,D[2],k$))&&a[36](3,3,k))&&(this.P=a[36](11,3,k)),d)[49](25,this.C,N[46].bind(null,16),{text:d[H[2]](76,16,D[2],this.U)}),a[42](12,"rc-prepositional-instructions")),H)[1]]=.5>Math.random(),d)[20](31,C,this[H[1]]?"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u044b \u0441 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438:":
"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0432\u0443\u0447\u0430\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e:"),this).NO(D[1]),22](72,x(function(b,V){(F[10]((b=[null,!0,(V=[17,23,25],"td")],V[1]),"d",this.Wm(),this),a[V[1]](2,b[0],b[2],"action","false",this),J)&&this.NO(b[1],d[V[2]](V[0],this,"rc-prepositional-verify-failed"))},this),this),d)[H[0]](1)},r.D0=function(L,w){return z[8].call(this,
6,L,w)},nu.prototype).RL=function(L,w){return(L=["rc-prepositional-select-more",(w=[1,17,"NO"],!0),!1],d[34](69,16,w[0],this.U).length)-this.K.length<this.P?(this[w[2]](L[w[0]],d[25](w[1],this,L[0])),L[w[0]]):L[2]},r).Um=function(L,w){this[U[w=[25,"prototype","C"],w[1]].Um.call(this,L),w[2]]=d[w[0]](w[0],this,"rc-prepositional-payload")},r.yF=function(L,w){d[49](29,L,F[41].bind((w=[23,null,16],w[1]),w[0]),{sources:d[34](73,w[2],2,this.U)})},a)[42](30,pu,U),pu.prototype).Em=function(L,w,J){(w=this[((L=
["",(J=["Y",0,58],"a"),1],this).response.response=L[J[1]],J)[0]])&&(this.response.s=z[9](J[2],L[2],L[1],L[J[1]]+w.width+w.height))},pu).prototype.Yd=function(){return d[0](5)},pu.prototype.K1=function(L){(this.B=((L=["K1","call",null],U.prototype)[L[0]][L[1]](this),R)[43](50,R[13].bind(L[2],48)),this).Um(this.L())},pu).prototype.cM=function(L){L&&u[5](28,!1,this)},d)[15](40,$H,PL),z[31](25,$H),$H.prototype),r).ms=function(){return"checkbox"},r).sm=function(){return"goog-checkbox"},r).qB=function(L,
w,J,k,C,D){return((k=(L=$H.R.qB.call(this,(D=[9,(J=[!0,null,!1],26),31],L),w),a[3](17,L)),C=J[2],a)[D[2]](D[0],u[21](28,J[0],J[1],this),k)?C=J[1]:a[D[2]](5,u[21](D[1],J[0],J[0],this),k)?C=J[0]:a[D[2]](1,u[21](27,J[0],J[2],this),k)&&(C=J[2]),w.F=C,F)[24](96,"checked",L,C==J[1]?"mixed":C==J[0]?"true":"false"),L},r.h1=function(L,w,J){return(J=["SPAN","B","F"],w=L.l[J[1]](J[0],F[40](1,this,L).join(" ")),this).zn(w,L[J[2]]),w},r.zn=function(L,w,J,k){(k=[21,24,16],L)&&(J=u[k[0]](k[1],!0,w,this),N[44](1,
L,J)||(z[22](k[2],mX,function(C,D){D=u[21](25,!0,C,this),F[48](4,D,D==J,L)},this),F[k[1]](k[2],"checked",L,null==w?"mixed":1==w?"true":"false")))},d[15](72,pj,G),pj).prototype.U=function(L,w,J){w=(J=["preventDefault","change",41],L.K(),this.F)?"uncheck":"check",this.isEnabled()&&!L.target.href&&d[J[2]](5,w,this)&&(L[J[0]](),this.Y(this.F?!1:!0),d[J[2]](7,J[1],this))},pj).prototype.Y=function(L,w){L!=this[(w=["F","L","zn"],w)[0]]&&(this[w[0]]=L,this.I[w[2]](this[w[1]](),this[w[0]]))},pj).prototype.C1=
function(){return 1==this.F},pj.prototype).A=function(L,w){(pj.R[w=[27,"A","kd"],w[1]].call(this),this[w[2]])&&(L=u[0](w[0],this),R[46](50,L,this.L(),"click",this.U))},!1),nd:null},q4=(((((((r=((u[4](42,(pj.prototype.gw=function(L){return!(32==L.keyCode&&(this.S(L),this.U(L)),1)},function(){return new pj}),"goog-checkbox"),a)[42](25,xy,U),xy.prototype),r.mN=function(L){return a[33].call(this,1,L)},r).Yd=function(L,w,J,k,C,D,H,b,V,A){if(10==(H=(D=(k=["STYLE","rc-2fa-cancel-button-holder",""],this),
A=[22,0,null],w.Z5()),w).J())return this.F=w.N(),u[A[0]](73,function(){d[41](4,"m",D)},this),d[A[1]](1);return((b=(((((C=u[42](12,H,5,MG),C)!=A[2]&&(V=R[6](2,z[40](59,C,7)||k[2]),R[49](25,9,k[A[1]],"BODY",k[2],this.D,V)),d[49](29,this.D,R[41].bind(A[2],1),{identifier:R[23](65,H,1),Wi:J,ir:u[18](2,A[1],H,4),ci:2==R[48](4,A[2],7,H)?"phone":"email"}),F[10](30,"d",this.Wm(),this,!0),this.K).render(d[25](24,this,"rc-2fa-response-field")),this.K.L()).setAttribute("maxlength",u[16](33,A[2],2,H)),R)[5](18,
k[2],this.K),d[47](5,this.K,!0),d[25](2,this,k[1])),this.U).render(d[25](25,this,"rc-2fa-submit-button-holder")),this).Z.render(b),R[46](57,u[A[1]](27,this),this.K.L(),"input",function(S){(S=[!1,2,"K"],D[S[2]].aL().length==u[16](65,null,S[1],H))?D.U[S[2]](!0):D.U[S[2]](S[0])}),d[A[1]](2)},r.h_=function(){return this.F||""},r.A=function(L,w,J){(((((((J=[0,(w=this,L=["focus","rc-2fa-tabloop-begin","action"],13),"A"],U).prototype[J[2]].call(this),R)[46](58,R[46](49,u[J[0]](25,this),a[42](J[1],L[1]),
L[J[0]],function(){a[14](24,1)}),a[42](8,"rc-2fa-tabloop-end"),L[J[0]],function(){a[14](29,1,["rc-2fa-error-message","rc-2fa-instructions"])}),d)[7](1,"keyup",this.C,document),R)[46](48,u[J[0]](25,this),this.C,"key",this.mN),this.U).K(!1),R)[46](55,u[J[0]](28,this),this.U,L[2],function(k){u[(k=[27,5,!1],w.U).K(k[2]),k[1]](k[0],k[2],w,"n")}),R)[46](56,u[J[0]](29,this),this.Z,L[2],function(){return d[41](5,"h",w)})},r.s_=function(L,w){(L=(w=["focus",25,10],d)[w[1]](24,this,"rc-2fa-error-message")||
d[w[1]](1,this,"rc-2fa-instructions"),!L)||W0&&0<=u[12](19,"",w[2],l0)||L[w[0]]()},r).Em=function(L){(this[L=["response","C1","K"],this[L[0]].pin=this[L[2]].aL(),L[0]].remember=this.P[L[1]](),d)[47](21,this[L[2]],!1)},r).vm=function(){},r).RL=function(L){return L=["K",25,!1],z[L[1]](43,this[L[0]].aL())?(d[L[1]](17,this,"rc-2fa-instructions").focus(),!0):L[2]},r).Wm=function(){return this.Y?new Q(this.Y.width,this.Y.height):new Q(0,0)},r.Um=function(){this.D=d[25](19,this,"rc-2fa-payload")},r.NO=function(){},
r).K1=function(L){this.B=(U[L=[null,"prototype","K1"],L[1]][L[2]].call(this),R[43](59,R[38].bind(L[0],19))),this.Um(this.L())},new Q(302,422)),Bt=(P0.bottomright={display:"block",transition:"right 0.3s ease",position:"fixed",bottom:"14px",right:"-186px","box-shadow":"0px 0px 5px gray","border-radius":"2px",overflow:((((a[42](39,yM,Hu),yM.prototype.render=function(L,w,J,k,C,D,H,b){((u[C=(D=(b=(H=[0,"TEXTAREA","src"],[53,"appendChild",1]),R[43](b[0],a[28].bind(null,36),{LY:w,yu:"g-recaptcha-response"})),
F[31](57,R[25](62,H[b[2]],D)[H[0]],tW),B5[k]),14](18,"px",C,D),this.O)[b[1]](D),a)[37](2,H[2],"",a[13](5,b[2],D),C,this,L,J)},yM).prototype.gI=function(){return this.N},yM.prototype).M=function(L,w,J,k){J=Math.max(R[1]((w=[(k=["normal",22,"call"],"bubble"),9,0],48),w[2],this).width-z[k[1]](58,w[1],this).x,z[k[1]](60,w[1],this).x),L?Hu.prototype.M[k[2]](this,L):J>1.5*B5[k[0]].width?Hu.prototype.M[k[2]](this,w[0]):Hu.prototype.M[k[2]](this)},yM.prototype).P=function(L,w,J,k,C){(((k=(this.B=(u[40](44,
(C=[31,(J=["TEXTAREA",0,"DIV"],57),1],null),this),"fallback"),R[43](51,u[C[2]].bind(null,16),{lr:R[37](8,null,L),LY:w,yu:"g-recaptcha-response"})),F)[C[0]](55,R[25](59,"IFRAME",k)[J[C[2]]],{width:q4.width+"px",height:q4.height+"px"}),F[C[0]](51,R[25](C[1],J[2],k)[J[C[2]]],Zr),F[C[0]](56,R[25](58,J[0],k)[J[C[2]]],tW),F)[C[0]](51,R[25](59,J[0],k)[J[C[2]]],"display","block"),this.O).appendChild(k)},"hidden")},P0.bottomleft={display:"block",transition:"left 0.3s ease",position:"fixed",bottom:"14px",left:"-186px",
"box-shadow":"0px 0px 5px gray","border-radius":"2px",overflow:"hidden"},P0.inline={"box-shadow":"0px 0px 5px gray"},P0.none={position:"fixed",visibility:"hidden"},P0),Ll=((((a[42](20,Wl,Hu),Wl).prototype.render=function(L,w,J,k,C,D,H,b){(((u[(this[((b=[(H=["display",0,null],"Pm"),"none","right"],D=Bt.hasOwnProperty(this.G)?this.G:"bottomright",a)[31](3,D,da)&&F[11](1,H[1],"*")&&(D=b[1]),b)[0]]=R[43](56,F[25].bind(null,21),{LY:w,yu:"g-recaptcha-response",style:D}),F)[31](48,R[25](56,"TEXTAREA",this[b[0]])[H[1]],
tW),32](69,b[2],"0","-186px",H[2],this,D),C=B5[k],u)[14](16,"px",C,this[b[0]]),this.O.appendChild(this[b[0]]),a[37](1,"src","",a[13](32,1,this[b[0]]),C,this,L,J),R)[43](22,this[b[0]],H[0])==b[1]&&(F[31](60,this[b[0]],Bt[b[1]]),D="bottomright"),F)[31](52,this[b[0]],Bt[D])},Wl).prototype.P=function(L,w,J,k,C){(k=((u[(C=[null,55,40],C)[2]](32,C[0],this),this).B="fallback",R[43](C[1],d[33].bind(C[0],16),{Bi:J})),this).O.appendChild(k)},Wl.prototype.gI=function(){return this.O},a)[42](6,Gq,wV),new Map([[0,
"no-error"],[2,"challenge-expired"],[3,"invalid-request-token"],[4,"invalid-pin"],[5,"pin-mismatch"],[6,"attempts-exhausted"],[10,"aborted"]])),F4=new (((r=((((((((((((((((((((((r=(((d[15](40,((((rA.prototype.nc=(r=U5.prototype,Ux.prototype.add=function(L,w){this[this[this[w=["O","I",(this.K+=L.K,this.N+=L.N,"B")],w[1]]+=L[w[1]],w[0]]+=L[w[this.U+=L.U,0]],w[2]]+=L[w[2]]},function(){return 0==this.K}),r).getFullYear=function(){return this.K.getFullYear()},r).getMonth=function(){return this.K.getMonth()},
r.getDate=function(){return this.K.getDate()},r.getTime=(U5.prototype.valueOf=function(){return this.K.valueOf()},function(){return this.K.getTime()}),r).set=function(L){this.K=new Date(L.getFullYear(),L.getMonth(),L.getDate())},r.add=function(L,w,J,k,C,D,H,b,V,A){if(J=(A=["setDate","K",1],[31,4,0]),L.O||L.N){(C=(w=this.getMonth()+L.N+12*L.O,this).getFullYear()+Math.floor(w/12),w%=12,w<J[2])&&(w+=12);a:{switch(w){case A[2]:k=C%J[A[2]]!=J[2]||C%100==J[2]&&C%400!=J[2]?28:29;break a;case 5:case 8:case 10:case 3:k=
30;break a}k=J[0]}((this[this[A[1]][V=Math.min(k,this.getDate()),A[0]](A[2]),A[1]].setFullYear(C),this[A[1]]).setMonth(w),this[A[1]])[A[0]](V)}L[A[1]]&&(H=this.getFullYear(),b=H>=J[2]&&99>=H?-1900:0,D=new Date((new Date(H,this.getMonth(),this.getDate(),12)).getTime()+864E5*L[A[1]]),this[A[1]][A[0]](A[2]),this[A[1]].setFullYear(D.getFullYear()+b),this[A[1]].setMonth(D.getMonth()),this[A[1]][A[0]](D.getDate()),d[44](10,this,D.getDate()))},r.CR=function(L,w,J,k,C){return(k=[1E4,"",(C=[1,(J=this.getFullYear(),
0),47],2)],w=J<C[1]?"-":J>=k[C[1]]?"+":"",[w+z[C[2]](58,Math.abs(J),w?6:4),z[C[2]](49,this.getMonth()+C[0],k[2]),z[C[2]](90,this.getDate(),k[2])]).join(L?"-":"")+k[C[0]]},r.toString=function(){return this.CR()},ip),U5),ip).prototype.add=function(L,w){((L[U5.prototype[w=["B","add","K"],w[1]].call(this,L),w[0]]&&this[w[2]].setUTCHours(this[w[2]].getUTCHours()+L[w[0]]),L).U&&this[w[2]].setUTCMinutes(this[w[2]].getUTCMinutes()+L.U),L.I)&&this[w[2]].setUTCSeconds(this[w[2]].getUTCSeconds()+L.I)},ip.prototype.CR=
function(L,w,J,k){return w=(J=[2,"T",":"],k=[89,2,"prototype"],U5[k[2]]).CR.call(this,L),L?w+J[1]+z[47](k[0],this.K.getHours(),J[0])+J[k[1]]+z[47](26,this.K.getMinutes(),J[0])+J[k[1]]+z[47](81,this.K.getSeconds(),J[0]):w+J[1]+z[47](88,this.K.getHours(),J[0])+z[47](57,this.K.getMinutes(),J[0])+z[47](25,this.K.getSeconds(),J[0])},ip.prototype.toString=function(){return this.CR()},q5.prototype).Y=function(L,w,J,k,C,D){(J=(w=(C=R[4](44,(k=N[D=["K",23,2],D[1]](4,L),L)),R)[D[2]](13,this,C[0]),R)[D[2]](45,
this,C[1]),this)[D[0]][k]=w^J},q5.prototype),r.AN=function(L,w,J,k){return N[23].call(this,3,L,w,J,k)},Sj.prototype).qj=function(L){L(this.K())},r).gb=function(L,w,J,k,C){return a[11].call(this,12,L,w,J,k,C)},q5.prototype.l=function(L,w,J,k){this[w=(J=N[23](18,(k=[12,0,"K"],L)),R[4](k[0],L))[k[1]],k[2]][J]=R[29](31,w,this)},r.FJ=function(L,w,J,k,C){return u[19].call(this,73,L,w,J,k,C)},r.V1=function(L,w,J,k,C,D,H){return z[2].call(this,33,L,w,J,k,C,D,H)},r).iA=function(L,w,J){return u[6].call(this,
5,L,w,J)},q5).prototype.W=function(L,w,J,k,C,D){this[J=(C=(k=R[D=[2,"K",23],w=N[D[2]](48,L),4](24,L),R)[D[0]](45,this,k[0]),R)[D[0]](41,this,k[1]),D[1]][w]=C+J},r).tQ=function(L,w,J){return z[3].call(this,8,L,w,J)},r).XJ=function(L,w,J,k,C,D){return z[24].call(this,16,L,w,J,k,C,D)},r=q5.prototype,r).Z0=function(L,w,J,k){return a[43].call(this,32,L,w,J,k)},r.pw=function(L,w,J){return d[42].call(this,14,L,w,J)},r).Nx=function(L,w,J,k){return N[7].call(this,23,L,w,J,k)},r).rb=function(L,w,J,k,C){return R[40].call(this,
1,L,w,J,k,C)},r).BB=function(L,w,J,k){return z[29].call(this,1,L,w,J,k)},r.az=function(L,w){return a[40].call(this,44,L,w)},r).Tl=function(L,w,J,k){return F[21].call(this,20,L,w,J,k)},r).Ss=function(L,w,J,k,C){return u[13].call(this,4,L,w,J,k,C)},r).Gl=function(L,w,J,k,C,D,H,b){return N[4].call(this,4,L,w,J,k,C,D,H,b)},r).s8=function(L){return a[11].call(this,13,L)},r).Pa=function(L){return z[44].call(this,1,L)},r.Ul=function(L,w,J,k,C,D,H){return u[1].call(this,1,L,w,J,k,C,D,H)},r.KY=function(L,
w,J,k,C,D){return a[37].call(this,8,L,w,J,k,C,D)},r).c$=function(L,w,J,k,C){return a[11].call(this,3,L,w,J,k,C)},r.kr=function(L,w,J,k,C){return F[23].call(this,33,L,w,J,k,C)},r).Iz=function(L,w,J,k,C){return z[33].call(this,15,L,w,J,k,C)},r).W$=function(L,w,J,k,C){return u[9].call(this,20,L,w,J,k,C)},r).zl=function(L,w,J,k,C){return F[19].call(this,10,L,w,J,k,C)},r).JN=function(L,w,J,k,C){return z[39].call(this,83,L,w,J,k,C)},a)[42](18,dT,M),dT.K="fetoken",c0.prototype),dT.prototype.rw=function(){return z[40](55,
this,3)},r.isEnabled=function(L,w){if(!y.navigator[w=[1,"cookieEnabled",(L=[!0,"1",!1],"set")],w[1]])return L[2];if(!this.le())return L[0];if("1"!==(this[w[2]]("TESTCOOKIESENABLED",L[w[0]],{MZ:60}),this).get("TESTCOOKIESENABLED"))return L[2];return this[this.get("TESTCOOKIESENABLED"),w[2]]("TESTCOOKIESENABLED","",{MZ:0,path:void 0,domain:void 0}),L[0]},r.set=function(L,w,J,k,C,D,H,b,V,A){if(((A=["test",'Invalid cookie name "',";samesite="],b=!1,C=[1E3,'Invalid cookie value "','"'],"object")===typeof J&&
(k=J.domain||void 0,b=J.yw||!1,D=J.Hi,H=J.MZ,V=J.path||void 0),/[;=\s]/)[A[0]](L))throw Error(A[1]+L+C[2]);if(/[;\r\n]/[A[0]](w))throw Error(C[1]+w+C[2]);this.K.cookie=L+"="+w+(k?";domain="+k:"")+(V?";path="+V:"")+((void 0===H&&(H=-1),0>H)?"":0==H?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+H*C[0])).toUTCString())+(b?";secure":"")+(null!=D?A[2]+D:"")},r.get=function(L,w,J,k,C,D,H,b){for(J=(H=(D=[0,(b=["split",1,0],""),"="],L+D[2]),k=(this.K.cookie||D[b[1]])[b[0]](";"),
D[b[2]]);J<k.length;J++){if((C=Nz(k[J]),C.lastIndexOf(H,D[b[2]]))==D[b[2]])return C.slice(H.length);if(C==L)return D[b[1]]}return w},r).Xr=function(){return N[20](37,";",0,this).values},r.le=function(){return!this.K.cookie},r).E_=function(){return N[20](33,";",0,this).keys},c0),tk=((((((((((((fj.prototype.Y=function(){a[40](32,!0,this,2)},fj.prototype.l=function(L,w){(w=["K",0,33],d)[w[2]](59,"_"+B$+"recaptcha",L[w[0]],w[1])},fj.prototype).M=(fj.prototype.G=function(L){((N[(L=[11,15,20],L)[0]](L[0],
this.id).value="",this.K).has(ft)&&u[34](L[1],this.K,ft,!0)(),a[40](L[2],!0,this),this.U).then(function(w){return w.send("i")},function(){})},fj.prototype.xd=function(L,w,J,k){w=(k=["\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c reCAPTCHA. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",
2,"has"],[1,!0,""]),J=L&&L.errorCode==k[1],this.K[k[2]](ua)?u[34](7,this.K,ua,w[1])():!J||document.visibilityState&&"visible"!=document.visibilityState||alert(k[0]),J&&F[13](64,w[k[1]],w[0],!1,this.B)},function(L,w){(F[w=[65,"","K"],13](w[0],w[1],1,L.B,this.B,L[w[2]]),this.U).then(function(J){return J.send("h",L)})}),fj.prototype.F=function(L,w,J,k){return a[2](38,function(C,D,H){H=["K","B",(D=[10,5,4],6)];switch(C[H[0]]){case 1:return Mz=L[H[1]],F[H[2]](1,0,D[0],L.U),a[12](65,R1(R[47](3),R[25](33)),
2,C);case 2:return k=C[H[1]],a[12](1,Kt(),3,C);case 3:if(!(w=(J=void 0,C[H[1]]),Array).isArray(L[H[0]])||!L[H[0]].length){C[H[0]]=D[2];break}return a[12](66,N4(R[47](19),void 0,void 0,L[H[0]]),D[1],C);case D[1]:J=C[H[1]],J=J[H[0]]().toJSON();case D[2]:return C.return(new GJ(k[H[0]]().toJSON(),w[H[0]]().toJSON(),J))}})},fj.prototype.W=(fj.prototype.P=function(L,w){N[20](14,null,(w=[!1,"name",7],this.B)),z[19](w[2],w[1],w[0],"query","bframe",this,L)},function(L,w,J){(((N[11](13,(w=[0,"recaptcha",(J=
["response",2,33],!0)],this.id)).value=L[J[0]],L.B)&&d[J[2]](63,"recaptcha::2fa",L.B,w[0]),L.K)&&d[J[2]](58,"_"+B$+w[1],L.K,w[0]),L[J[0]])&&this.K.has(RQ)&&u[34](31,this.K,RQ,w[J[1]])(L[J[0]]),L.U&&R[J[1]](4,16,w[0],1,3,L.U)}),fj).prototype.D=function(L,w,J,k){J=R[k=(w=this,[(this.O=new q5(L.U,L.B,function(C){w.U.then(function(D){return D.send("u",new R3(C))})}),78),"K",35]),k[2]](k[0],1,N[22](9,1,L[k[1]]),L.HK),z[18](4,255,1,J,this.O)},y.window)&&y.window.__google_recaptcha_client&&d[30](10,"onload",
!0,"gor",0),r=fu.prototype,r.u_=function(L,w){return this.K.send("g",new Yy(L,w))},r).ab=function(L,w,J,k,C){this.K=(C=[10,"frames",32],k=u[C[2]](28).name.replace("c-","a-"),d[48](C[0],"http",u[C[2]](4).parent[C[1]][k],u[29](8,"api2","anchor"),new Map([[["e","n"],L],["g",w],["i",J]]),this))},r).S2=function(){return"anchor"},r.gq=function(){this.K.send("q")},r).Iu=function(){},r.l_=function(){this.K.send("i")},r).vH=function(L){this.K.send("d",L)},r.f6=function(L){this.K.send("g",new Yy(!0,L,!0))},
r).LR=function(L){this.K.send("j",new B0(L))},a)[42](25,Mm,i3),Mm.prototype.m3=function(){return this.I},a)[42](20,A0,M),A0.prototype.m3=function(){return z[40](53,this,1)},A0).K="dresp",A0.prototype.J=function(){return a[36](3,3,this)},[2,4]);
((lM.K=(((((((((r=(((((((((((a[42](20,oX,Gz),a)[42](17,nr,Gz),a[42](30,uY,wV),uY.prototype).G=function(L,w,J){w=["fi",(J=[24,"K",0],L=L||new Ok,"uninitialized"),"timed-out"],L.GI&&(this.N=L.GI);switch(this[J[1]].U){case w[1]:F[45](J[0],w[J[2]],w[J[2]],this,new G8(L[J[1]]));break;case w[2]:F[45](27,w[J[2]],"t",this);break;default:R[43](13,this,!0)}},uY.prototype.Y=function(L,w,J,k,C){if(a[36](98,(C=[4,(J=[9,null,!1],43),59],C[0]),L,J[2])!=J[1])z[24](5,this),this.K.K.LR(L.J());else if(k=z[40](C[2],
L,1),d[20](67,k,this),z[23](32,L,2))w=new Ar(k,60,null,z[40](53,L,J[0]),null,L.KR()?z[19](56,L.KR()):null),this.K.K.vH(w),R[C[1]](9,this,J[2]);else F[16](8,J[0],u[42](14,L,7,Lu),this,"nocaptcha"!=this.B.K.V())},uY).prototype.U=function(L){(this[(L=["LR",2,"K"],L)[2]].U="uninitialized",this[L[2]][L[2]])[L[0]](L[1])},uY).prototype.C=function(L){this[(L=["K",9,"vH"],L)[0]][L[0]][L[2]](new Ar(this.B[L[0]].h_(),60)),R[43](L[1],this,!1)},uY.prototype.P=function(L,w,J){(L=new Kp((J=(w={},[3,"response","B"]),
w.avrt=this.K.m3(),w[J[1]]=N[28](20,23,J[0],this[J[2]].K),w)),this.K[J[2]].send(L)).then(this.M,this.U,this)},uY.prototype.l=function(L){"active"==(L=[24,!1,"cM"],this).K.U&&(z[L[0]](1,this),this.K.K.l_(),this.B.K[L[2]](L[1]))},uY.prototype).gI=function(L,w){w=[35,"100%",9],L&&(this.B.K.cM(L.B),N[w[0]](w[2]).style.height=w[1])},uY.prototype).F=function(L,w,J,k,C){(k=new nr((C=["B","C","m3"],this.K[C[2]]()),N[28](12,23,3,this[C[0]].K),Date.now()-this.K.M,Date.now()-this.K[C[1]],L,w,J),this.K[C[0]].send(k)).then(this.Y,
this.U,this)},uY.prototype).Z=function(L){this.K.m3()==L.response&&z[24](4,this)},uY).prototype.O=function(L,w){"embeddable"==(L=(R[7](9,(w=["execute","K",null],this.I)),x)(this.F,this),this[w[1]][w[1]]).S2()?this[w[1]][w[1]].Iu(x(DZ(L,w[2]),this),this[w[1]].m3(),!0):this[w[1]].N[w[0]]().then(L,function(){return L()})},uY.prototype).M=function(L,w,J,k){if(null!=(k=[(w=[!1,!0,60],"J"),"K",10],L)[k[0]]()&&0!=L[k[0]]()&&L[k[0]]()!=k[2]&&6!=L[k[0]]())if(R[23](95,L,2))d[20](65,R[23](63,L,2),this),J=L.Z5(),
N[16](3,"d",this,"2fa",R[23](31,L,2),L,u[18](7,0,J,4)*w[2],w[1]);else R[43](k[2],this,w[0]);else this[k[1]][k[1]].vH(new Ar(L.N(),60,null,null,L.J1()||null)),R[43](k[2],this,w[0])},d)[4](73,"recaptcha.frame.embeddable.ErrorRender.errorRender",function(L,w){if(window.RecaptchaEmbedder)RecaptchaEmbedder.onError(L,w)}),Y$.prototype),r.E8=function(L,w){return N[19].call(this,85,L,w)},r.Yx=function(L,w){return d[36].call(this,1,L,w)},r).u_=function(L,w){if(window.RecaptchaEmbedder&&RecaptchaEmbedder.onShow)RecaptchaEmbedder.onShow(L,
w.width,w.height);return Promise.resolve(new Yy(L,w))},r.gq=function(){},r).Iu=function(L,w,J){(this.K=L,window.RecaptchaEmbedder)&&RecaptchaEmbedder.requestToken&&RecaptchaEmbedder.requestToken(w,J)},r).S2=function(){return"embeddable"},r).LR=function(L){if(window.RecaptchaEmbedder&&RecaptchaEmbedder.onError)RecaptchaEmbedder.onError(L,!0)},r.l_=function(){if(window.RecaptchaEmbedder&&RecaptchaEmbedder.onChallengeExpired)RecaptchaEmbedder.onChallengeExpired()},r).vH=function(L){window.RecaptchaEmbedder&&
RecaptchaEmbedder.verifyCallback&&RecaptchaEmbedder.verifyCallback(L.response)},r.ab=function(L,w){this.B=L,this.U=w,window.RecaptchaEmbedder&&RecaptchaEmbedder.challengeReady&&RecaptchaEmbedder.challengeReady()},r).f6=function(L){if(window.RecaptchaEmbedder&&RecaptchaEmbedder.onResize)RecaptchaEmbedder.onResize(L.width,L.height);Promise.resolve(new Yy(!0,L))},r.El=function(L,w,J){return F[9].call(this,3,L,w,J)},a[42](20,ST,XP),ST).prototype.m3=function(){return this.U.value},a)[42](24,lM,M),"finput"),
d)[4](96,"recaptcha.frame.embeddable.Main.init",function(L,w){new LM((w=new lM(JSON.parse(L)),w))}),d)[4](59,"recaptcha.frame.Main.init",function(L,w,J){(w=new (J=[44,40,16],lM)(JSON.parse(L)),a)[J[0]](J[2],(new ja(w)).K,z[J[1]](55,w,1))});}).call(this);

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t,n){var i=t.global=n(25),r=t.hasBuffer=i&&!!i.isBuffer,s=t.hasArrayBuffer="undefined"!=typeof ArrayBuffer,a=t.isArray=n(5);t.isArrayBuffer=s?function(e){return e instanceof ArrayBuffer||p(e)}:m;var o=t.isBuffer=r?i.isBuffer:m,c=t.isView=s?ArrayBuffer.isView||y("ArrayBuffer","buffer"):m;t.alloc=d,t.concat=function(e,n){n||(n=0,Array.prototype.forEach.call(e,(function(e){n+=e.length})));var i=this!==t&&this||e[0],r=d.call(i,n),s=0;return Array.prototype.forEach.call(e,(function(e){s+=f.copy.call(e,r,s)})),r},t.from=function(e){return"string"==typeof e?function(e){var t=3*e.length,n=d.call(this,t),i=f.write.call(n,e);return t!==i&&(n=f.slice.call(n,0,i)),n}.call(this,e):g(this).from(e)};var l=t.Array=n(28),h=t.Buffer=n(29),u=t.Uint8Array=n(30),f=t.prototype=n(6);function d(e){return g(this).alloc(e)}var p=y("ArrayBuffer");function g(e){return o(e)?h:c(e)?u:a(e)?l:r?h:s?u:l}function m(){return!1}function y(e,t){return e="[object "+e+"]",function(n){return null!=n&&{}.toString.call(t?n[t]:n)===e}}},function(e,t,n){var i=n(5);t.createCodec=o,t.install=function(e){for(var t in e)s.prototype[t]=a(s.prototype[t],e[t])},t.filter=function(e){return i(e)?function(e){return e=e.slice(),function(n){return e.reduce(t,n)};function t(e,t){return t(e)}}(e):e};var r=n(0);function s(e){if(!(this instanceof s))return new s(e);this.options=e,this.init()}function a(e,t){return e&&t?function(){return e.apply(this,arguments),t.apply(this,arguments)}:e||t}function o(e){return new s(e)}s.prototype.init=function(){var e=this.options;return e&&e.uint8array&&(this.bufferish=r.Uint8Array),this},t.preset=o({preset:!0})},function(e,t,n){var i=n(3).ExtBuffer,r=n(32),s=n(33),a=n(1);function o(){var e=this.options;return this.encode=function(e){var t=s.getWriteType(e);return function(e,n){var i=t[typeof n];if(!i)throw new Error('Unsupported type "'+typeof n+'": '+n);i(e,n)}}(e),e&&e.preset&&r.setExtPackers(this),this}a.install({addExtPacker:function(e,t,n){n=a.filter(n);var r=t.name;r&&"Object"!==r?(this.extPackers||(this.extPackers={}))[r]=s:(this.extEncoderList||(this.extEncoderList=[])).unshift([t,s]);function s(t){return n&&(t=n(t)),new i(t,e)}},getExtPacker:function(e){var t=this.extPackers||(this.extPackers={}),n=e.constructor,i=n&&n.name&&t[n.name];if(i)return i;for(var r=this.extEncoderList||(this.extEncoderList=[]),s=r.length,a=0;a<s;a++){var o=r[a];if(n===o[0])return o[1]}},init:o}),t.preset=o.call(a.preset)},function(e,t,n){t.ExtBuffer=function e(t,n){if(!(this instanceof e))return new e(t,n);this.buffer=i.from(t),this.type=n};var i=n(0)},function(e,t){t.read=function(e,t,n,i,r){var s,a,o=8*r-i-1,c=(1<<o)-1,l=c>>1,h=-7,u=n?r-1:0,f=n?-1:1,d=e[t+u];for(u+=f,s=d&(1<<-h)-1,d>>=-h,h+=o;h>0;s=256*s+e[t+u],u+=f,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=i;h>0;a=256*a+e[t+u],u+=f,h-=8);if(0===s)s=1-l;else{if(s===c)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,i),s-=l}return(d?-1:1)*a*Math.pow(2,s-i)},t.write=function(e,t,n,i,r,s){var a,o,c,l=8*s-r-1,h=(1<<l)-1,u=h>>1,f=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,a=h):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+u>=1?f/c:f*Math.pow(2,1-u))*c>=2&&(a++,c/=2),a+u>=h?(o=0,a=h):a+u>=1?(o=(t*c-1)*Math.pow(2,r),a+=u):(o=t*Math.pow(2,u-1)*Math.pow(2,r),a=0));r>=8;e[n+d]=255&o,d+=p,o/=256,r-=8);for(a=a<<r|o,l+=r;l>0;e[n+d]=255&a,d+=p,a/=256,l-=8);e[n+d-p]|=128*g}},function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(e,t,n){var i=n(31);t.copy=c,t.slice=l,t.toString=function(e,t,n){return(!a&&r.isBuffer(this)?this.toString:i.toString).apply(this,arguments)},t.write=function(e){return function(){return(this[e]||i[e]).apply(this,arguments)}}("write");var r=n(0),s=r.global,a=r.hasBuffer&&"TYPED_ARRAY_SUPPORT"in s,o=a&&!s.TYPED_ARRAY_SUPPORT;function c(e,t,n,s){var a=r.isBuffer(this),c=r.isBuffer(e);if(a&&c)return this.copy(e,t,n,s);if(o||a||c||!r.isView(this)||!r.isView(e))return i.copy.call(this,e,t,n,s);var h=n||null!=s?l.call(this,n,s):this;return e.set(h,t),h.length}function l(e,t){var n=this.slice||!o&&this.subarray;if(n)return n.call(this,e,t);var i=r.alloc.call(this,t-e);return c.call(this,i,0,e,t),i}},function(e,t,n){(function(e){!function(t){var n,i="undefined",r=i!==typeof e&&e,s=i!==typeof Uint8Array&&Uint8Array,a=i!==typeof ArrayBuffer&&ArrayBuffer,o=[0,0,0,0,0,0,0,0],c=Array.isArray||function(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)},l=4294967296;function h(e,c,h){var b=c?0:4,x=c?4:0,S=c?0:3,T=c?1:2,I=c?2:1,E=c?3:0,M=c?y:v,A=c?k:w,P=O.prototype,B="is"+e,C="_"+B;return P.buffer=void 0,P.offset=0,P[C]=!0,P.toNumber=R,P.toString=function(e){var t=this.buffer,n=this.offset,i=_(t,n+b),r=_(t,n+x),s="",a=!h&&2147483648&i;for(a&&(i=~i,r=l-r),e=e||10;;){var o=i%e*l+r;if(i=Math.floor(i/e),r=Math.floor(o/e),s=(o%e).toString(e)+s,!i&&!r)break}return a&&(s="-"+s),s},P.toJSON=R,P.toArray=u,r&&(P.toBuffer=f),s&&(P.toArrayBuffer=d),O[B]=function(e){return!(!e||!e[C])},t[e]=O,O;function O(e,t,r,c){return this instanceof O?function(e,t,r,c,h){if(s&&a&&(t instanceof a&&(t=new s(t)),c instanceof a&&(c=new s(c))),t||r||c||n){if(!p(t,r))h=r,c=t,r=0,t=new(n||Array)(8);e.buffer=t,e.offset=r|=0,i!==typeof c&&("string"==typeof c?function(e,t,n,i){var r=0,s=n.length,a=0,o=0;"-"===n[0]&&r++;for(var c=r;r<s;){var h=parseInt(n[r++],i);if(!(h>=0))break;o=o*i+h,a=a*i+Math.floor(o/l),o%=l}c&&(a=~a,o?o=l-o:a++),j(e,t+b,a),j(e,t+x,o)}(t,r,c,h||10):p(c,h)?g(t,r,c,h):"number"==typeof h?(j(t,r+b,c),j(t,r+x,h)):c>0?M(t,r,c):c<0?A(t,r,c):g(t,r,o,0))}else e.buffer=m(o,0)}(this,e,t,r,c):new O(e,t,r,c)}function R(){var e=this.buffer,t=this.offset,n=_(e,t+b),i=_(e,t+x);return h||(n|=0),n?n*l+i:i}function j(e,t,n){e[t+E]=255&n,n>>=8,e[t+I]=255&n,n>>=8,e[t+T]=255&n,n>>=8,e[t+S]=255&n}function _(e,t){return 16777216*e[t+S]+(e[t+T]<<16)+(e[t+I]<<8)+e[t+E]}}function u(e){var t=this.buffer,i=this.offset;return n=null,!1!==e&&0===i&&8===t.length&&c(t)?t:m(t,i)}function f(t){var i=this.buffer,s=this.offset;if(n=r,!1!==t&&0===s&&8===i.length&&e.isBuffer(i))return i;var a=new r(8);return g(a,0,i,s),a}function d(e){var t=this.buffer,i=this.offset,r=t.buffer;if(n=s,!1!==e&&0===i&&r instanceof a&&8===r.byteLength)return r;var o=new s(8);return g(o,0,t,i),o.buffer}function p(e,t){var n=e&&e.length;return t|=0,n&&t+8<=n&&"string"!=typeof e[t]}function g(e,t,n,i){t|=0,i|=0;for(var r=0;r<8;r++)e[t++]=255&n[i++]}function m(e,t){return Array.prototype.slice.call(e,t,t+8)}function y(e,t,n){for(var i=t+8;i>t;)e[--i]=255&n,n/=256}function k(e,t,n){var i=t+8;for(n++;i>t;)e[--i]=255&-n^255,n/=256}function v(e,t,n){for(var i=t+8;t<i;)e[t++]=255&n,n/=256}function w(e,t,n){var i=t+8;for(n++;t<i;)e[t++]=255&-n^255,n/=256}h("Uint64BE",!0,!0),h("Int64BE",!0,!1),h("Uint64LE",!1,!0),h("Int64LE",!1,!1)}("string"!=typeof t.nodeName?t:this||{})}).call(this,n(11).Buffer)},function(e,t,n){var i=n(3).ExtBuffer,r=n(35),s=n(17).readUint8,a=n(36),o=n(1);function c(){var e=this.options;return this.decode=function(e){var t=a.getReadToken(e);return function(e){var n=s(e),i=t[n];if(!i)throw new Error("Invalid type: "+(n?"0x"+n.toString(16):n));return i(e)}}(e),e&&e.preset&&r.setExtUnpackers(this),this}o.install({addExtUnpacker:function(e,t){(this.extUnpackers||(this.extUnpackers=[]))[e]=o.filter(t)},getExtUnpacker:function(e){return(this.extUnpackers||(this.extUnpackers=[]))[e]||function(t){return new i(t,e)}},init:c}),t.preset=c.call(o.preset)},function(e,t,n){t.encode=function(e,t){var n=new i(t);return n.write(e),n.read()};var i=n(10).EncodeBuffer},function(e,t,n){t.EncodeBuffer=r;var i=n(2).preset;function r(e){if(!(this instanceof r))return new r(e);if(e&&(this.options=e,e.codec)){var t=this.codec=e.codec;t.bufferish&&(this.bufferish=t.bufferish)}}n(14).FlexEncoder.mixin(r.prototype),r.prototype.codec=i,r.prototype.write=function(e){this.codec.encode(this,e)}},function(e,t,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var i=n(26),r=n(4),s=n(27);function a(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=c.prototype:(null===e&&(e=new c(t)),e.length=t),e}function c(e,t,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return l(this,e,t,n)}function l(e,t,n,i){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,i){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");return t=void 0===n&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,n):new Uint8Array(t,n,i),c.TYPED_ARRAY_SUPPORT?(e=t).__proto__=c.prototype:e=f(e,t),e}(e,t,n,i):"string"==typeof t?function(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|p(t,n),r=(e=o(e,i)).write(t,n);return r!==i&&(e=e.slice(0,r)),e}(e,t,n):function(e,t){if(c.isBuffer(t)){var n=0|d(t.length);return 0===(e=o(e,n)).length||t.copy(e,0,0,n),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function(e){return e!=e}(t.length)?o(e,0):f(e,t);if("Buffer"===t.type&&s(t.data))return f(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function h(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t){if(h(t),e=o(e,t<0?0:0|d(t)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function f(e,t){var n=t.length<0?0:0|d(t.length);e=o(e,n);for(var i=0;i<n;i+=1)e[i]=255&t[i];return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function p(e,t){if(c.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return z(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return H(e).length;default:if(i)return z(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function m(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=c.from(t,i)),c.isBuffer(t))return 0===t.length?-1:y(e,t,n,i,r);if("number"==typeof t)return t&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function y(e,t,n,i,r){var s,a=1,o=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;a=2,o/=2,c/=2,n/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(r){var h=-1;for(s=n;s<o;s++)if(l(e,s)===l(t,-1===h?0:s-h)){if(-1===h&&(h=s),s-h+1===c)return h*a}else-1!==h&&(s-=s-h),h=-1}else for(n+c>o&&(n=o-c),s=n;s>=0;s--){for(var u=!0,f=0;f<c;f++)if(l(e,s+f)!==l(t,f)){u=!1;break}if(u)return s}return-1}function k(e,t,n,i){n=Number(n)||0;var r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;var s=t.length;if(s%2!=0)throw new TypeError("Invalid hex string");i>s/2&&(i=s/2);for(var a=0;a<i;++a){var o=parseInt(t.substr(2*a,2),16);if(isNaN(o))return a;e[n+a]=o}return a}function v(e,t,n,i){return V(z(t,e.length-n),e,n,i)}function w(e,t,n,i){return V(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function b(e,t,n,i){return w(e,t,n,i)}function x(e,t,n,i){return V(H(t),e,n,i)}function S(e,t,n,i){return V(function(e,t){for(var n,i,r,s=[],a=0;a<e.length&&!((t-=2)<0);++a)i=(n=e.charCodeAt(a))>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function T(e,t,n){return 0===t&&n===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,n))}function I(e,t,n){n=Math.min(e.length,n);for(var i=[],r=t;r<n;){var s,a,o,c,l=e[r],h=null,u=l>239?4:l>223?3:l>191?2:1;if(r+u<=n)switch(u){case 1:l<128&&(h=l);break;case 2:128==(192&(s=e[r+1]))&&(c=(31&l)<<6|63&s)>127&&(h=c);break;case 3:s=e[r+1],a=e[r+2],128==(192&s)&&128==(192&a)&&(c=(15&l)<<12|(63&s)<<6|63&a)>2047&&(c<55296||c>57343)&&(h=c);break;case 4:s=e[r+1],a=e[r+2],o=e[r+3],128==(192&s)&&128==(192&a)&&128==(192&o)&&(c=(15&l)<<18|(63&s)<<12|(63&a)<<6|63&o)>65535&&c<1114112&&(h=c)}null===h?(h=65533,u=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h),r+=u}return function(e){var t=e.length;if(t<=E)return String.fromCharCode.apply(String,e);for(var n="",i=0;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=E));return n}(i)}t.Buffer=c,t.SlowBuffer=function(e){return+e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=a(),c.poolSize=8192,c._augment=function(e){return e.__proto__=c.prototype,e},c.from=function(e,t,n){return l(null,e,t,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(e,t,n){return function(e,t,n,i){return h(t),t<=0?o(e,t):void 0!==n?"string"==typeof i?o(e,t).fill(n,i):o(e,t).fill(n):o(e,t)}(null,e,t,n)},c.allocUnsafe=function(e){return u(null,e)},c.allocUnsafeSlow=function(e){return u(null,e)},c.isBuffer=function(e){return!(null==e||!e._isBuffer)},c.compare=function(e,t){if(!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,i=t.length,r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!s(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=c.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){var a=e[n];if(!c.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,r),r+=a.length}return i},c.byteLength=p,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},c.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?I(this,0,e):function(e,t,n){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return P(this,t,n);case"utf8":case"utf-8":return I(this,t,n);case"ascii":return M(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return T(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}.apply(this,arguments)},c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},c.prototype.compare=function(e,t,n,i,r){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;for(var s=(r>>>=0)-(i>>>=0),a=(n>>>=0)-(t>>>=0),o=Math.min(s,a),l=this.slice(i,r),h=e.slice(t,n),u=0;u<o;++u)if(l[u]!==h[u]){s=l[u],a=h[u];break}return s<a?-1:a<s?1:0},c.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},c.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},c.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},c.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var s=!1;;)switch(i){case"hex":return k(this,e,t,n);case"utf8":case"utf-8":return v(this,e,t,n);case"ascii":return w(this,e,t,n);case"latin1":case"binary":return b(this,e,t,n);case"base64":return x(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var E=4096;function M(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function A(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function P(e,t,n){var i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);for(var r="",s=t;s<n;++s)r+=F(e[s]);return r}function B(e,t,n){for(var i=e.slice(t,n),r="",s=0;s<i.length;s+=2)r+=String.fromCharCode(i[s]+256*i[s+1]);return r}function C(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function O(e,t,n,i,r,s){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function R(e,t,n,i){t<0&&(t=65535+t+1);for(var r=0,s=Math.min(e.length-n,2);r<s;++r)e[n+r]=(t&255<<8*(i?r:1-r))>>>8*(i?r:1-r)}function j(e,t,n,i){t<0&&(t=4294967295+t+1);for(var r=0,s=Math.min(e.length-n,4);r<s;++r)e[n+r]=t>>>8*(i?r:3-r)&255}function _(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function U(e,t,n,i,s){return s||_(e,0,n,4),r.write(e,t,n,i,23,4),n+4}function D(e,t,n,i,s){return s||_(e,0,n,8),r.write(e,t,n,i,52,8),n+8}c.prototype.slice=function(e,t){var n,i=this.length;if((e=~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),(t=void 0===t?i:~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e),c.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=c.prototype;else{var r=t-e;n=new c(r,void 0);for(var s=0;s<r;++s)n[s]=this[s+e]}return n},c.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||C(e,t,this.length);for(var i=this[e],r=1,s=0;++s<t&&(r*=256);)i+=this[e+s]*r;return i},c.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||C(e,t,this.length);for(var i=this[e+--t],r=1;t>0&&(r*=256);)i+=this[e+--t]*r;return i},c.prototype.readUInt8=function(e,t){return t||C(e,1,this.length),this[e]},c.prototype.readUInt16LE=function(e,t){return t||C(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUInt16BE=function(e,t){return t||C(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUInt32LE=function(e,t){return t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUInt32BE=function(e,t){return t||C(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||C(e,t,this.length);for(var i=this[e],r=1,s=0;++s<t&&(r*=256);)i+=this[e+s]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*t)),i},c.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||C(e,t,this.length);for(var i=t,r=1,s=this[e+--i];i>0&&(r*=256);)s+=this[e+--i]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*t)),s},c.prototype.readInt8=function(e,t){return t||C(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){t||C(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(e,t){t||C(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(e,t){return t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,t){return t||C(e,4,this.length),r.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return t||C(e,4,this.length),r.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return t||C(e,8,this.length),r.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return t||C(e,8,this.length),r.read(this,e,!1,52,8)},c.prototype.writeUIntLE=function(e,t,n,i){e=+e,t|=0,n|=0,i||O(this,e,t,n,Math.pow(2,8*n)-1,0);var r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},c.prototype.writeUIntBE=function(e,t,n,i){e=+e,t|=0,n|=0,i||O(this,e,t,n,Math.pow(2,8*n)-1,0);var r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},c.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,1,255,0),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},c.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},c.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},c.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):j(this,e,t,!0),t+4},c.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},c.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);O(this,e,t,n,r-1,-r)}var s=0,a=1,o=0;for(this[t]=255&e;++s<n&&(a*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/a>>0)-o&255;return t+n},c.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);O(this,e,t,n,r-1,-r)}var s=n-1,a=1,o=0;for(this[t+s]=255&e;--s>=0&&(a*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/a>>0)-o&255;return t+n},c.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,1,127,-128),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},c.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},c.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):j(this,e,t,!0),t+4},c.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||O(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},c.prototype.writeFloatLE=function(e,t,n){return U(this,e,t,!0,n)},c.prototype.writeFloatBE=function(e,t,n){return U(this,e,t,!1,n)},c.prototype.writeDoubleLE=function(e,t,n){return D(this,e,t,!0,n)},c.prototype.writeDoubleBE=function(e,t,n){return D(this,e,t,!1,n)},c.prototype.copy=function(e,t,n,i){if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var r,s=i-n;if(this===e&&n<t&&t<i)for(r=s-1;r>=0;--r)e[r+t]=this[r+n];else if(s<1e3||!c.TYPED_ARRAY_SUPPORT)for(r=0;r<s;++r)e[r+t]=this[r+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+s),t);return s},c.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),1===e.length){var r=e.charCodeAt(0);r<256&&(e=r)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!c.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{var a=c.isBuffer(e)?e:z(new c(e,i).toString()),o=a.length;for(s=0;s<n-t;++s)this[s+t]=a[s%o]}return this};var L=/[^+\/0-9A-Za-z-_]/g;function F(e){return e<16?"0"+e.toString(16):e.toString(16)}function z(e,t){var n;t=t||1/0;for(var i=e.length,r=null,s=[],a=0;a<i;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(a+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function H(e){return i.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(L,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function V(e,t,n,i){for(var r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}}).call(this,n(12))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){for(var n=t.uint8=new Array(256),i=0;i<=255;i++)n[i]=r(i);function r(e){return function(t){var n=t.reserve(1);t.buffer[n]=e}}},function(e,t,n){t.FlexDecoder=s,t.FlexEncoder=a;var i=n(0),r="BUFFER_SHORTAGE";function s(){if(!(this instanceof s))return new s}function a(){if(!(this instanceof a))return new a}function o(){throw new Error("method not implemented: write()")}function c(){throw new Error("method not implemented: fetch()")}function l(){return this.buffers&&this.buffers.length?(this.flush(),this.pull()):this.fetch()}function h(e){(this.buffers||(this.buffers=[])).push(e)}function u(){return(this.buffers||(this.buffers=[])).shift()}function f(e){return function(t){for(var n in e)t[n]=e[n];return t}}s.mixin=f({bufferish:i,write:function(e){var t=this.offset?i.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=t?e?this.bufferish.concat([t,e]):t:e,this.offset=0},fetch:c,flush:function(){for(;this.offset<this.buffer.length;){var e,t=this.offset;try{e=this.fetch()}catch(e){if(e&&e.message!=r)throw e;this.offset=t;break}this.push(e)}},push:h,pull:u,read:l,reserve:function(e){var t=this.offset,n=t+e;if(n>this.buffer.length)throw new Error(r);return this.offset=n,t},offset:0}),s.mixin(s.prototype),a.mixin=f({bufferish:i,write:o,fetch:function(){var e=this.start;if(e<this.offset){var t=this.start=this.offset;return i.prototype.slice.call(this.buffer,e,t)}},flush:function(){for(;this.start<this.offset;){var e=this.fetch();e&&this.push(e)}},push:h,pull:function(){var e=this.buffers||(this.buffers=[]),t=e.length>1?this.bufferish.concat(e):e[0];return e.length=0,t},read:l,reserve:function(e){var t=0|e;if(this.buffer){var n=this.buffer.length,i=0|this.offset,r=i+t;if(r<n)return this.offset=r,i;this.flush(),e=Math.max(e,Math.min(2*n,this.maxBufferSize))}return e=Math.max(e,this.minBufferSize),this.buffer=this.bufferish.alloc(e),this.start=0,this.offset=t,0},send:function(e){var t=e.length;if(t>this.minBufferSize)this.flush(),this.push(e);else{var n=this.reserve(t);i.prototype.copy.call(e,this.buffer,n)}},maxBufferSize:65536,minBufferSize:2048,offset:0,start:0}),a.mixin(a.prototype)},function(e,t,n){t.decode=function(e,t){var n=new i(t);return n.write(e),n.read()};var i=n(16).DecodeBuffer},function(e,t,n){t.DecodeBuffer=r;var i=n(8).preset;function r(e){if(!(this instanceof r))return new r(e);if(e&&(this.options=e,e.codec)){var t=this.codec=e.codec;t.bufferish&&(this.bufferish=t.bufferish)}}n(14).FlexDecoder.mixin(r.prototype),r.prototype.codec=i,r.prototype.fetch=function(){return this.codec.decode(this)}},function(e,t,n){var i=n(4),r=n(7),s=r.Uint64BE,a=r.Int64BE;t.getReadFormat=function(e){var t=o.hasArrayBuffer&&e&&e.binarraybuffer,n=e&&e.int64;return{map:l&&e&&e.usemap?u:h,array:f,str:d,bin:t?g:p,ext:m,uint8:y,uint16:v,uint32:b,uint64:S(8,n?E:T),int8:k,int16:w,int32:x,int64:S(8,n?M:I),float32:S(4,A),float64:S(8,P)}},t.readUint8=y;var o=n(0),c=n(6),l="undefined"!=typeof Map;function h(e,t){var n,i={},r=new Array(t),s=new Array(t),a=e.codec.decode;for(n=0;n<t;n++)r[n]=a(e),s[n]=a(e);for(n=0;n<t;n++)i[r[n]]=s[n];return i}function u(e,t){var n,i=new Map,r=new Array(t),s=new Array(t),a=e.codec.decode;for(n=0;n<t;n++)r[n]=a(e),s[n]=a(e);for(n=0;n<t;n++)i.set(r[n],s[n]);return i}function f(e,t){for(var n=new Array(t),i=e.codec.decode,r=0;r<t;r++)n[r]=i(e);return n}function d(e,t){var n=e.reserve(t),i=n+t;return c.toString.call(e.buffer,"utf-8",n,i)}function p(e,t){var n=e.reserve(t),i=n+t,r=c.slice.call(e.buffer,n,i);return o.from(r)}function g(e,t){var n=e.reserve(t),i=n+t,r=c.slice.call(e.buffer,n,i);return o.Uint8Array.from(r).buffer}function m(e,t){var n=e.reserve(t+1),i=e.buffer[n++],r=n+t,s=e.codec.getExtUnpacker(i);if(!s)throw new Error("Invalid ext type: "+(i?"0x"+i.toString(16):i));return s(c.slice.call(e.buffer,n,r))}function y(e){var t=e.reserve(1);return e.buffer[t]}function k(e){var t=e.reserve(1),n=e.buffer[t];return 128&n?n-256:n}function v(e){var t=e.reserve(2),n=e.buffer;return n[t++]<<8|n[t]}function w(e){var t=e.reserve(2),n=e.buffer,i=n[t++]<<8|n[t];return 32768&i?i-65536:i}function b(e){var t=e.reserve(4),n=e.buffer;return 16777216*n[t++]+(n[t++]<<16)+(n[t++]<<8)+n[t]}function x(e){var t=e.reserve(4),n=e.buffer;return n[t++]<<24|n[t++]<<16|n[t++]<<8|n[t]}function S(e,t){return function(n){var i=n.reserve(e);return t.call(n.buffer,i,!0)}}function T(e){return new s(this,e).toNumber()}function I(e){return new a(this,e).toNumber()}function E(e){return new s(this,e)}function M(e){return new a(this,e)}function A(e){return i.read(this,e,!1,23,4)}function P(e){return i.read(this,e,!1,52,8)}},function(e,t,n){!function(t){e.exports=t;var n="listeners",i={on:function(e,t){return a(this,e).push(t),this},once:function(e,t){var n=this;return i.originalListener=t,a(n,e).push(i),n;function i(){s.call(n,e,i),t.apply(this,arguments)}},off:s,emit:function(e,t){var n=this,i=a(n,e,!0);if(!i)return!1;var r=arguments.length;if(1===r)i.forEach((function(e){e.call(n)}));else if(2===r)i.forEach((function(e){e.call(n,t)}));else{var s=Array.prototype.slice.call(arguments,1);i.forEach((function(e){e.apply(n,s)}))}return!!i.length}};function r(e){for(var t in i)e[t]=i[t];return e}function s(e,t){var i;if(arguments.length){if(t){if(i=a(this,e,!0)){if(!(i=i.filter((function(e){return e!==t&&e.originalListener!==t}))).length)return s.call(this,e);this[n][e]=i}}else if((i=this[n])&&(delete i[e],!Object.keys(i).length))return s.call(this)}else delete this[n];return this}function a(e,t,i){if(!i||e[n]){var r=e[n]||(e[n]={});return r[t]||(r[t]=[])}}r(t.prototype),t.mixin=r}((
/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */
function e(){if(!(this instanceof e))return new e}))},function(e,t,n){(function(t){e.exports.maxScreenWidth=1920,e.exports.maxScreenHeight=1080,e.exports.serverUpdateRate=9,e.exports.maxPlayers=t&&-1!=t.argv.indexOf("--largeserver")?80:40,e.exports.maxPlayersHard=e.exports.maxPlayers+10,e.exports.collisionDepth=6,e.exports.minimapRate=3e3,e.exports.colGrid=10,e.exports.clientSendRate=5,e.exports.healthBarWidth=50,e.exports.healthBarPad=4.5,e.exports.iconPadding=15,e.exports.iconPad=.9,e.exports.deathFadeout=3e3,e.exports.crownIconScale=60,e.exports.crownPad=35,e.exports.chatCountdown=3e3,e.exports.chatCooldown=500,e.exports.inSandbox=t&&"mm_exp"===t.env.VULTR_SCHEME,e.exports.maxAge=100,e.exports.gatherAngle=Math.PI/2.6,e.exports.gatherWiggle=10,e.exports.hitReturnRatio=.25,e.exports.hitAngle=Math.PI/2,e.exports.playerScale=35,e.exports.playerSpeed=.0016,e.exports.playerDecel=.993,e.exports.nameY=34,e.exports.skinColors=["#bf8f54","#cbb091","#896c4b","#fadadc","#ececec","#c37373","#4c4c4c","#ecaff7","#738cc3","#8bc373"],e.exports.animalCount=7,e.exports.aiTurnRandom=.06,e.exports.cowNames=["Sid","Steph","Bmoe","Romn","Jononthecool","Fiona","Vince","Nathan","Nick","Flappy","Ronald","Otis","Pepe","Mc Donald","Theo","Fabz","Oliver","Jeff","Jimmy","Helena","Reaper","Ben","Alan","Naomi","XYZ","Clever","Jeremy","Mike","Destined","Stallion","Allison","Meaty","Sophia","Vaja","Joey","Pendy","Murdoch","Theo","Jared","July","Sonia","Mel","Dexter","Quinn","Milky"],e.exports.shieldAngle=Math.PI/3,e.exports.weaponVariants=[{id:0,src:"",xp:0,val:1},{id:1,src:"_g",xp:3e3,val:1.1},{id:2,src:"_d",xp:7e3,val:1.18},{id:3,src:"_r",poison:!0,xp:12e3,val:1.18}],e.exports.fetchVariant=function(t){for(var n=t.weaponXP[t.weaponIndex]||0,i=e.exports.weaponVariants.length-1;i>=0;--i)if(n>=e.exports.weaponVariants[i].xp)return e.exports.weaponVariants[i]},e.exports.resourceTypes=["wood","food","stone","points"],e.exports.areaCount=7,e.exports.treesPerArea=9,e.exports.bushesPerArea=3,e.exports.totalRocks=32,e.exports.goldOres=7,e.exports.riverWidth=724,e.exports.riverPadding=114,e.exports.waterCurrent=.0011,e.exports.waveSpeed=1e-4,e.exports.waveMax=1.3,e.exports.treeScales=[150,160,165,175],e.exports.bushScales=[80,85,95],e.exports.rockScales=[80,85,90],e.exports.snowBiomeTop=2400,e.exports.snowSpeed=.75,e.exports.maxNameLength=15,e.exports.mapScale=14400,e.exports.mapPingScale=40,e.exports.mapPingTime=2200}).call(this,n(41))},function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},function(e,t,n){"use strict";window.loadedScript=!0;var i="127.0.0.1"!==location.hostname&&!location.hostname.startsWith("192.168.");n(22);var r=n(23),s=n(42),a=n(43),o=n(19),c=n(44),l=n(45),h=(n(46),n(47)),u=n(48),f=n(55),d=n(56),p=n(57),g=n(58).obj,m=new a.TextManager,y=new(n(59))("moomoo.io",3e3,o.maxPlayers,5,!1);y.debugLog=!1;var k=!1;function v(){ht&&ut&&(k=!0,i?window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",{action:"homepage"}).then((function(e){w(e)})):w(null))}function w(e){y.start((function(t,n,a){var c=(i?"wss":"ws")+"://"+t+":8008/?gameIndex="+a;e&&(c+="&token="+encodeURIComponent(e)),r.connect(c,(function(e){Bi(),setInterval(()=>Bi(),2500),e?ft(e):(ue.onclick=s.checkTrusted((function(){!function(){var e=++bt>1,t=Date.now()-wt>vt;e&&t?(wt=Date.now(),xt()):Tn()}()})),s.hookTouchEvents(ue),fe.onclick=s.checkTrusted((function(){Oi("https://krunker.io/?play=SquidGame_KB")})),s.hookTouchEvents(fe),pe.onclick=s.checkTrusted((function(){setTimeout((function(){!function(){var e=xe.value,t=prompt("party key",e);t&&(window.onbeforeunload=void 0,window.location.href="/?server="+t)}()}),10)})),s.hookTouchEvents(pe),ge.onclick=s.checkTrusted((function(){Ae.classList.contains("showing")?(Ae.classList.remove("showing"),me.innerText="Settings"):(Ae.classList.add("showing"),me.innerText="Close")})),s.hookTouchEvents(ge),ye.onclick=s.checkTrusted((function(){yn(),"block"!=Ye.style.display?Ut():Ye.style.display="none"})),s.hookTouchEvents(ye),ke.onclick=s.checkTrusted((function(){"block"!=Qe.style.display?(Qe.style.display="block",Ye.style.display="none",an(),Gt()):Qe.style.display="none"})),s.hookTouchEvents(ke),ve.onclick=s.checkTrusted((function(){rn()})),s.hookTouchEvents(ve),Ne.onclick=s.checkTrusted((function(){xn()})),s.hookTouchEvents(Ne),function(){for(var e=0;e<jn.length;++e){var t=new Image;t.onload=function(){this.isLoaded=!0},t.src=".././img/icons/"+jn[e]+".png",Rn[jn[e]]=t}}(),Pe.style.display="none",Me.style.display="block",Le.value=E("moo_name")||"",function(){var e=E("native_resolution");Zt(e?"true"==e:"undefined"!=typeof cordova),A="true"==E("show_ping"),Ie.hidden=!A,E("moo_moosic"),setInterval((function(){window.cordova&&(document.getElementById("downloadButtonContainer").classList.add("cordova"),document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))}),1e3),en(),s.removeAllChildren(Ce);for(var t=0;t<l.weapons.length+l.list.length;++t)!function(e){s.generateElement({id:"actionBarItem"+e,class:"actionBarItem",style:"display:none",onmouseout:function(){Tt()},parent:Ce})}(t);for(t=0;t<l.list.length+l.weapons.length;++t)!function(e){var t=document.createElement("canvas");t.width=t.height=66;var n=t.getContext("2d");if(n.translate(t.width/2,t.height/2),n.imageSmoothingEnabled=!1,n.webkitImageSmoothingEnabled=!1,n.mozImageSmoothingEnabled=!1,l.weapons[e]){n.rotate(Math.PI/4+Math.PI);var i=new Image;Zn[l.weapons[e].src]=i,i.onload=function(){this.isLoaded=!0;var i=1/(this.height/this.width),r=l.weapons[e].iPad||1;n.drawImage(this,-t.width*r*o.iconPad*i/2,-t.height*r*o.iconPad/2,t.width*r*i*o.iconPad,t.height*r*o.iconPad),n.fillStyle="rgba(0, 0, 70, 0.1)",n.globalCompositeOperation="source-atop",n.fillRect(-t.width/2,-t.height/2,t.width,t.height),document.getElementById("actionBarItem"+e).style.backgroundImage="url("+t.toDataURL()+")"},i.src=".././img/weapons/"+l.weapons[e].src+".png",(r=document.getElementById("actionBarItem"+e)).onmouseover=s.checkTrusted((function(){Tt(l.weapons[e],!0)})),r.onclick=s.checkTrusted((function(){Sn(e,!0)})),s.hookTouchEvents(r)}else{i=ri(l.list[e-l.weapons.length],!0);var r,a=Math.min(t.width-o.iconPadding,i.width);n.globalAlpha=1,n.drawImage(i,-a/2,-a/2,a,a),n.fillStyle="rgba(0, 0, 70, 0.1)",n.globalCompositeOperation="source-atop",n.fillRect(-a/2,-a/2,a,a),document.getElementById("actionBarItem"+e).style.backgroundImage="url("+t.toDataURL()+")",(r=document.getElementById("actionBarItem"+e)).onmouseover=s.checkTrusted((function(){Tt(l.list[e-l.weapons.length])})),r.onclick=s.checkTrusted((function(){Sn(e-l.weapons.length)})),s.hookTouchEvents(r)}}(t);Le.ontouchstart=s.checkTrusted((function(e){e.preventDefault();var t=prompt("enter name",e.currentTarget.value);e.currentTarget.value=t.slice(0,15)})),Se.checked=M,Se.onchange=s.checkTrusted((function(e){Zt(e.target.checked)})),Te.checked=A,Te.onchange=s.checkTrusted((function(e){A=Te.checked,Ie.hidden=!A,I("show_ping",A?"true":"false")}))}())}),{id:st,d:ft,1:En,2:vi,4:wi,33:Ti,5:Ln,6:li,a:gi,aa:pi,7:Wn,8:hi,sp:ui,9:xi,h:Si,11:Pn,12:Cn,13:Bn,14:bi,15:Dn,16:Un,17:$t,18:fi,19:di,20:Ci,ac:Ot,ad:_t,an:Bt,st:Rt,sa:jt,us:Nt,ch:hn,mm:Wt,t:Mn,p:Yt,pp:Pi}),pt(),setTimeout(()=>gt(),3e3)}),(function(e){console.error("Vultr error:",e),alert("Error:\n"+e),ft("disconnected")}))}var b,x=new g(o,s),S=Math.PI,T=2*S;function I(e,t){b&&localStorage.setItem(e,t)}function E(e){return b?localStorage.getItem(e):null}Math.lerpAngle=function(e,t,n){Math.abs(t-e)>S&&(e>t?t+=T:e+=T);var i=t+(e-t)*n;return i>=0&&i<=T?i:i%T},CanvasRenderingContext2D.prototype.roundRect=function(e,t,n,i,r){return n<2*r&&(r=n/2),i<2*r&&(r=i/2),r<0&&(r=0),this.beginPath(),this.moveTo(e+r,t),this.arcTo(e+n,t,e+n,t+i,r),this.arcTo(e+n,t+i,e,t+i,r),this.arcTo(e,t+i,e,t,r),this.arcTo(e,t,e+n,t,r),this.closePath(),this},"undefined"!=typeof Storage&&(b=!0),E("consent")||(consentBlock.style.display="block"),window.checkTerms=function(e){e?(consentBlock.style.display="none",I("consent",1)):$("#consentShake").effect("shake")};var M,A,P,B,C,O,R,j,_,U,D,L,F,z,H=E("moofoll"),V=1,q=Date.now(),Y=[],W=[],X=[],N=[],G=[],J=new p(d,G,W,Y,nt,l,o,s),K=n(70),Q=n(71),Z=new K(Y,Q,W,l,null,o,s),ee=1,te=0,ne=0,ie=0,re={id:-1,startX:0,startY:0,currentX:0,currentY:0},se={id:-1,startX:0,startY:0,currentX:0,currentY:0},ae=0,oe=o.maxScreenWidth,ce=o.maxScreenHeight,le=!1,he=(document.getElementById("ad-container"),document.getElementById("mainMenu")),ue=document.getElementById("enterGame"),fe=document.getElementById("promoImg"),de=document.getElementById("partyButton"),pe=document.getElementById("joinPartyButton"),ge=document.getElementById("settingsButton"),me=ge.getElementsByTagName("span")[0],ye=document.getElementById("allianceButton"),ke=document.getElementById("storeButton"),ve=document.getElementById("chatButton"),we=document.getElementById("gameCanvas"),be=we.getContext("2d"),xe=document.getElementById("serverBrowser"),Se=document.getElementById("nativeResolution"),Te=document.getElementById("showPing"),Ie=(document.getElementById("playMusic"),document.getElementById("pingDisplay")),Ee=document.getElementById("shutdownDisplay"),Me=document.getElementById("menuCardHolder"),Ae=document.getElementById("guideCard"),Pe=document.getElementById("loadingText"),Be=document.getElementById("gameUI"),Ce=document.getElementById("actionBar"),Oe=document.getElementById("scoreDisplay"),Re=document.getElementById("foodDisplay"),je=document.getElementById("woodDisplay"),_e=document.getElementById("stoneDisplay"),Ue=document.getElementById("killCounter"),De=document.getElementById("leaderboardData"),Le=document.getElementById("nameInput"),Fe=document.getElementById("itemInfoHolder"),ze=document.getElementById("ageText"),He=document.getElementById("ageBarBody"),Ve=document.getElementById("upgradeHolder"),qe=document.getElementById("upgradeCounter"),Ye=document.getElementById("allianceMenu"),We=document.getElementById("allianceHolder"),Xe=document.getElementById("allianceManager"),Ne=document.getElementById("mapDisplay"),Ge=document.getElementById("diedText"),Je=document.getElementById("skinColorHolder"),Ke=Ne.getContext("2d");Ne.width=300,Ne.height=300;var Qe=document.getElementById("storeMenu"),$e=document.getElementById("storeHolder"),Ze=document.getElementById("noticationDisplay"),et=f.hats,tt=f.accessories,nt=new h(c,N,s,o),it="#525252",rt="#3d3f42";function st(e){X=e.teams}var at=document.getElementById("featuredYoutube"),ot=[{name:"Corrupt X",link:"https://www.youtube.com/channel/UC0UH2LfQvBSeH24bmtbmITw"},{name:"Tweak Big",link:"https://www.youtube.com/channel/UCbwvzJ38AndDTkoX8sD9YOw"},{name:"Arena Closer",link:"https://www.youtube.com/channel/UCazucVSJqW-kiHMIhQhD-QQ"},{name:"Godenot",link:"https://www.youtube.com/user/SirGodenot"},{name:"RajNoobTV",link:"https://www.youtube.com/channel/UCVLo9brXBWrCttMaGzvm0-Q"},{name:"TomNotTom",link:"https://www.youtube.com/channel/UC7z97RgHFJRcv2niXgArBDw"},{name:"Nation",link:"https://www.youtube.com/channel/UCSl-MBn3qzjrIvLNESQRk-g"},{name:"Pidyohago",link:"https://www.youtube.com/channel/UC04p8Mg8nDaDx04A9is2B8Q"},{name:"Enigma",link:"https://www.youtube.com/channel/UC5HhLbs3sReHo8Bb9NDdFrg"},{name:"Bauer",link:"https://www.youtube.com/channel/UCwU2TbJx3xTSlPqg-Ix3R1g"},{name:"iStealth",link:"https://www.youtube.com/channel/UCGrvlEOsQFViZbyFDE6t69A"},{name:"SICKmania",link:"https://www.youtube.com/channel/UCvVI98ezn4TpX5wDMZjMa3g"},{name:"LightThief",link:"https://www.youtube.com/channel/UCj6C_tiDeATiKd3GX127XoQ"},{name:"Fortish",link:"https://www.youtube.com/channel/UCou6CLU-szZA3Tb340TB9_Q"},{name:"巧克力",link:"https://www.youtube.com/channel/UCgL6J6oL8F69vm-GcPScmwg"},{name:"i Febag",link:"https://www.youtube.com/channel/UCiU6WZwiKbsnt5xmwr0OFbg"},{name:"GoneGaming",link:"https://www.youtube.com/channel/UCOcQthRanYcwYY0XVyVeK0g"}],ct=ot[s.randInt(0,ot.length-1)];at.innerHTML="<a target='_blank' class='ytLink' href='"+ct.link+"'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> "+ct.name+"</a>";var lt=!0,ht=!1,ut=!1;function ft(e){r.close(),dt(e)}function dt(e){he.style.display="block",Be.style.display="none",Me.style.display="none",Ge.style.display="none",Pe.style.display="block",Pe.innerHTML=e+"<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>"}window.onblur=function(){lt=!1},window.onfocus=function(){lt=!0,R&&R.alive&&yn()},window.onload=function(){ht=!0,v(),setTimeout((function(){k||(alert("Captcha failed to load"),window.location.reload())}),2e4)},window.captchaCallback=function(){ut=!0,v()},we.oncontextmenu=function(){return!1};function pt(){var e,t,n="",i=0;for(var r in y.servers){for(var s=y.servers[r],a=0,c=0;c<s.length;c++)for(var l=0;l<s[c].games.length;l++)a+=s[c].games[l].playerCount;i+=a;var h=y.regionInfo[r].name;n+="<option disabled>"+h+" - "+a+" players</option>";for(var u=0;u<s.length;u++)for(var f=s[u],d=0;d<f.games.length;d++){var p=f.games[d],g=1*f.index+d+1,m=y.server&&y.server.region===f.region&&y.server.index===f.index&&y.gameIndex==d,k=h+" "+g+" ["+Math.min(p.playerCount,o.maxPlayers)+"/"+o.maxPlayers+"]";let e=y.stripRegion(r)+":"+u+":"+d;m&&(de.getElementsByTagName("span")[0].innerText=e),n+="<option value='"+e+"' "+(m?"selected":"")+">"+k+"</option>"}n+="<option disabled></option>"}n+="<option disabled>All Servers - "+i+" players</option>",xe.innerHTML=n,"sandbox.moomoo.io"==location.hostname?(e="Back to MooMoo",t="//moomoo.io/"):(e="Try the sandbox",t="//sandbox.moomoo.io/"),document.getElementById("altServer").innerHTML="<a href='"+t+"'>"+e+"<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"}function gt(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&(200==this.status?(window.vultr=JSON.parse(this.responseText),y.processServers(vultr.servers),pt()):console.error("Failed to load server data with status code:",this.status))},e.open("GET","/serverData",!0),e.send()}xe.addEventListener("change",s.checkTrusted((function(){let e=xe.value.split(":");y.switchServer(e[0],e[1],e[2])})));var mt=document.getElementById("pre-content-container"),yt=null,kt=null;window.cpmstarAPI((function(e){e.game.setTarget(mt),kt=e}));var vt=3e5,wt=0,bt=0;function xt(){if(!cpmstarAPI||!kt)return console.log("Failed to load video ad API",!!cpmstarAPI,!!kt),void Tn();(yt=new kt.game.RewardedVideoView("rewardedvideo")).addEventListener("ad_closed",(function(e){console.log("Video ad closed"),St()})),yt.addEventListener("loaded",(function(e){console.log("Video ad loaded"),yt.show()})),yt.addEventListener("load_failed",(function(e){console.log("Video ad load failed",e),St()})),yt.load(),mt.style.display="block"}function St(){mt.style.display="none",Tn()}function Tt(e,t,n){if(R&&e)if(s.removeAllChildren(Fe),Fe.classList.add("visible"),s.generateElement({id:"itemInfoName",text:s.capitalizeFirst(e.name),parent:Fe}),s.generateElement({id:"itemInfoDesc",text:e.desc,parent:Fe}),n);else if(t)s.generateElement({class:"itemInfoReq",text:e.type?"secondary":"primary",parent:Fe});else{for(var i=0;i<e.req.length;i+=2)s.generateElement({class:"itemInfoReq",html:e.req[i]+"<span class='itemInfoReqVal'> x"+e.req[i+1]+"</span>",parent:Fe});e.group.limit&&s.generateElement({class:"itemInfoLmt",text:(R.itemCounts[e.group.id]||0)+"/"+e.group.limit,parent:Fe})}else Fe.classList.remove("visible")}window.showPreAd=xt;var It,Et,Mt,At=[],Pt=[];function Bt(e,t){At.push({sid:e,name:t}),Ct()}function Ct(){if(At[0]){var e=At[0];s.removeAllChildren(Ze),Ze.style.display="block",s.generateElement({class:"notificationText",text:e.name,parent:Ze}),s.generateElement({class:"notifButton",html:"<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",parent:Ze,onclick:function(){Dt(0)},hookTouch:!0}),s.generateElement({class:"notifButton",html:"<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",parent:Ze,onclick:function(){Dt(1)},hookTouch:!0})}else Ze.style.display="none"}function Ot(e){X.push(e),"block"==Ye.style.display&&Ut()}function Rt(e,t){R&&(R.team=e,R.isOwner=t,"block"==Ye.style.display&&Ut())}function jt(e){Pt=e,"block"==Ye.style.display&&Ut()}function _t(e){for(var t=X.length-1;t>=0;t--)X[t].sid==e&&X.splice(t,1);"block"==Ye.style.display&&Ut()}function Ut(){if(R&&R.alive){if(an(),Qe.style.display="none",Ye.style.display="block",s.removeAllChildren(We),R.team)for(var e=0;e<Pt.length;e+=2)!function(e){var t=s.generateElement({class:"allianceItem",style:"color:"+(Pt[e]==R.sid?"#fff":"rgba(255,255,255,0.6)"),text:Pt[e+1],parent:We});R.isOwner&&Pt[e]!=R.sid&&s.generateElement({class:"joinAlBtn",text:"Kick",onclick:function(){Lt(Pt[e])},hookTouch:!0,parent:t})}(e);else if(X.length)for(e=0;e<X.length;++e)!function(e){var t=s.generateElement({class:"allianceItem",style:"color:"+(X[e].sid==R.team?"#fff":"rgba(255,255,255,0.6)"),text:X[e].sid,parent:We});s.generateElement({class:"joinAlBtn",text:"Join",onclick:function(){Ft(e)},hookTouch:!0,parent:t})}(e);else s.generateElement({class:"allianceItem",text:"No Tribes Yet",parent:We});s.removeAllChildren(Xe),R.team?s.generateElement({class:"allianceButtonM",style:"width: 360px",text:R.isOwner?"Delete Tribe":"Leave Tribe",onclick:function(){Ht()},hookTouch:!0,parent:Xe}):(s.generateElement({tag:"input",type:"text",id:"allianceInput",maxLength:7,placeholder:"unique name",ontouchstart:function(e){e.preventDefault();var t=prompt("unique name",e.currentTarget.value);e.currentTarget.value=t.slice(0,7)},parent:Xe}),s.generateElement({tag:"div",class:"allianceButtonM",style:"width: 140px;",text:"Create",onclick:function(){zt()},hookTouch:!0,parent:Xe}))}}function Dt(e){r.send("11",At[0].sid,e),At.splice(0,1),Ct()}function Lt(e){r.send("12",e)}function Ft(e){r.send("10",X[e].sid)}function zt(){r.send("8",document.getElementById("allianceInput").value)}function Ht(){At=[],Ct(),r.send("9")}var Vt,qt=[];function Yt(e,t){for(var n=0;n<qt.length;++n)if(!qt[n].active){Vt=qt[n];break}Vt||(Vt=new function(){this.init=function(e,t){this.scale=0,this.x=e,this.y=t,this.active=!0},this.update=function(e,t){this.active&&(this.scale+=.05*t,this.scale>=o.mapPingScale?this.active=!1:(e.globalAlpha=1-Math.max(0,this.scale/o.mapPingScale),e.beginPath(),e.arc(this.x/o.mapScale*Ne.width,this.y/o.mapScale*Ne.width,this.scale,0,2*Math.PI),e.stroke()))}},qt.push(Vt)),Vt.init(e,t)}function Wt(e){Et=e}var Xt=0;function Nt(e,t,n){n?e?R.tailIndex=t:R.tails[t]=1:e?R.skinIndex=t:R.skins[t]=1,"block"==Qe.style.display&&Gt()}function Gt(){if(R){s.removeAllChildren($e);for(var e=Xt,t=e?tt:et,n=0;n<t.length;++n)t[n].dontSell||function(n){var i=s.generateElement({id:"storeDisplay"+n,class:"storeItem",onmouseout:function(){Tt()},onmouseover:function(){Tt(t[n],!1,!0)},parent:$e});s.hookTouchEvents(i,!0),s.generateElement({tag:"img",class:"hatPreview",src:"../img/"+(e?"accessories/access_":"hats/hat_")+t[n].id+(t[n].topSprite?"_p":"")+".png",parent:i}),s.generateElement({tag:"span",text:t[n].name,parent:i}),(e?R.tails[t[n].id]:R.skins[t[n].id])?(e?R.tailIndex:R.skinIndex)==t[n].id?s.generateElement({class:"joinAlBtn",style:"margin-top: 5px",text:"Unequip",onclick:function(){Jt(0,e)},hookTouch:!0,parent:i}):s.generateElement({class:"joinAlBtn",style:"margin-top: 5px",text:"Equip",onclick:function(){Jt(t[n].id,e)},hookTouch:!0,parent:i}):(s.generateElement({class:"joinAlBtn",style:"margin-top: 5px",text:"Buy",onclick:function(){Kt(t[n].id,e)},hookTouch:!0,parent:i}),s.generateElement({tag:"span",class:"itemPrice",text:t[n].price,parent:i}))}(n)}}function Jt(e,t){r.send("13c",0,e,t)}function Kt(e,t){r.send("13c",1,e,t)}function Qt(){Qe.style.display="none",Ye.style.display="none",an()}function $t(e,t){e&&(t?R.weapons=e:R.items=e);for(var n=0;n<l.list.length;++n){var i=l.weapons.length+n;document.getElementById("actionBarItem"+i).style.display=R.items.indexOf(l.list[n].id)>=0?"inline-block":"none"}for(n=0;n<l.weapons.length;++n)document.getElementById("actionBarItem"+n).style.display=R.weapons[l.weapons[n].type]==l.weapons[n].id?"inline-block":"none"}function Zt(e){M=e,V=e&&window.devicePixelRatio||1,Se.checked=e,I("native_resolution",e.toString()),un()}function en(){for(var e="",t=0;t<o.skinColors.length;++t)e+=t==ae?"<div class='skinColorItem activeSkin' style='background-color:"+o.skinColors[t]+"' onclick='selectSkinColor("+t+")'></div>":"<div class='skinColorItem' style='background-color:"+o.skinColors[t]+"' onclick='selectSkinColor("+t+")'></div>";Je.innerHTML=e}var tn=document.getElementById("chatBox"),nn=document.getElementById("chatHolder");function rn(){on?setTimeout((function(){var e=prompt("chat message");e&&sn(e)}),1):"block"==nn.style.display?(tn.value&&sn(tn.value),an()):(Qe.style.display="none",Ye.style.display="none",nn.style.display="block",tn.focus(),yn()),tn.value=""}function sn(e){r.send("ch",e.slice(0,30))}function an(){tn.value="",nn.style.display="none"}var on,cn,ln=["cunt","whore","fuck","shit","faggot","nigger","nigga","dick","vagina","minge","cock","rape","cum","sex","tits","penis","clit","pussy","meatcurtain","jizz","prune","douche","wanker","damn","bitch","dick","fag","bastard"];function hn(e,t){var n=Ii(e);n&&(n.chatMessage=function(e){for(var t,n=0;n<ln.length;++n)if(e.indexOf(ln[n])>-1){t="";for(var i=0;i<ln[n].length;++i)t+=t.length?"o":"M";var r=new RegExp(ln[n],"g");e=e.replace(r,t)}return e}(t),n.chatCountdown=o.chatCountdown)}function un(){F=window.innerWidth,z=window.innerHeight;var e=Math.max(F/oe,z/ce)*V;we.width=F*V,we.height=z*V,we.style.width=F+"px",we.style.height=z+"px",be.setTransform(e,0,0,e,(F*V-oe*e)/2,(z*V-ce*e)/2)}function fn(e){(on=e)?Ae.classList.add("touch"):Ae.classList.remove("touch")}function dn(e){e.preventDefault(),e.stopPropagation(),fn(!0);for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];n.identifier==re.id?(re.id=-1,bn()):n.identifier==se.id&&(se.id=-1,R.buildIndex>=0&&(O=1,vn()),O=0,vn())}}function pn(){return R?(-1!=se.id?cn=Math.atan2(se.currentY-se.startY,se.currentX-se.startX):R.lockDir||on||(cn=Math.atan2(ie-z/2,ne-F/2)),s.fixTo(cn||0,2)):0}window.addEventListener("resize",s.checkTrusted(un)),un(),fn(!1),window.setUsingTouch=fn,we.addEventListener("touchmove",s.checkTrusted((function(e){e.preventDefault(),e.stopPropagation(),fn(!0);for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];n.identifier==re.id?(re.currentX=n.pageX,re.currentY=n.pageY,bn()):n.identifier==se.id&&(se.currentX=n.pageX,se.currentY=n.pageY,O=1)}})),!1),we.addEventListener("touchstart",s.checkTrusted((function(e){e.preventDefault(),e.stopPropagation(),fn(!0);for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t];n.pageX<document.body.scrollWidth/2&&-1==re.id?(re.id=n.identifier,re.startX=re.currentX=n.pageX,re.startY=re.currentY=n.pageY,bn()):n.pageX>document.body.scrollWidth/2&&-1==se.id&&(se.id=n.identifier,se.startX=se.currentX=n.pageX,se.startY=se.currentY=n.pageY,R.buildIndex<0&&(O=1,vn()))}})),!1),we.addEventListener("touchend",s.checkTrusted(dn),!1),we.addEventListener("touchcancel",s.checkTrusted(dn),!1),we.addEventListener("touchleave",s.checkTrusted(dn),!1),we.addEventListener("mousemove",(function(e){e.preventDefault(),e.stopPropagation(),fn(!1),ne=e.clientX,ie=e.clientY}),!1),we.addEventListener("mousedown",(function(e){fn(!1),1!=O&&(O=1,vn())}),!1),we.addEventListener("mouseup",(function(e){fn(!1),0!=O&&(O=0,vn())}),!1);var gn={},mn={87:[0,-1],38:[0,-1],83:[0,1],40:[0,1],65:[-1,0],37:[-1,0],68:[1,0],39:[1,0]};function yn(){gn={},r.send("rmd")}function kn(){return"block"!=Ye.style.display&&"block"!=nn.style.display}function vn(){R&&R.alive&&r.send("c",O,R.buildIndex>=0?pn():null)}window.addEventListener("keydown",s.checkTrusted((function(e){var t=e.which||e.keyCode||0;27==t?Qt():R&&R.alive&&kn()&&(gn[t]||(gn[t]=1,69==t?r.send("7",1):67==t?(Mt||(Mt={}),Mt.x=R.x,Mt.y=R.y):88==t?(R.lockDir=R.lockDir?0:1,r.send("7",0)):null!=R.weapons[t-49]?Sn(R.weapons[t-49],!0):null!=R.items[t-49-R.weapons.length]?Sn(R.items[t-49-R.weapons.length]):81==t?Sn(R.items[0]):82==t?xn():mn[t]?bn():32==t&&(O=1,vn())))}))),window.addEventListener("keyup",s.checkTrusted((function(e){if(R&&R.alive){var t=e.which||e.keyCode||0;13==t?rn():kn()&&gn[t]&&(gn[t]=0,mn[t]?bn():32==t&&(O=0,vn()))}})));var wn=void 0;function bn(){var e=function(){var e=0,t=0;if(-1!=re.id)e+=re.currentX-re.startX,t+=re.currentY-re.startY;else for(var n in mn){var i=mn[n];e+=!!gn[n]*i[0],t+=!!gn[n]*i[1]}return 0==e&&0==t?void 0:s.fixTo(Math.atan2(t,e),2)}();(null==wn||null==e||Math.abs(e-wn)>.3)&&(r.send("33",e),wn=e)}function xn(){r.send("14",1)}function Sn(e,t){r.send("5",e,t)}function Tn(){I("moo_name",Le.value),!le&&r.connected&&(le=!0,x.stop("menu"),dt("Loading..."),r.send("sp",{name:Le.value,moofoll:H,skin:ae}))}var In=!0;function En(e){Pe.style.display="none",Me.style.display="block",he.style.display="none",gn={},j=e,O=0,le=!0,In&&(In=!1,N.length=0)}function Mn(e,t,n,i){m.showText(e,t,50,.18,500,Math.abs(n),n>=0?"#fff":"#8ecc51")}var An=99999;function Pn(){le=!1;try{factorem.refreshAds([2],!0)}catch(e){}Be.style.display="none",Qt(),It={x:R.x,y:R.y},Pe.style.display="none",Ge.style.display="block",Ge.style.fontSize="0px",An=0,setTimeout((function(){Me.style.display="block",he.style.display="block",Ge.style.display="none"}),o.deathFadeout),gt()}function Bn(e){R&&nt.removeAllItems(e)}function Cn(e){nt.disableBySid(e)}function On(){Oe.innerText=R.points,Re.innerText=R.food,je.innerText=R.wood,_e.innerText=R.stone,Ue.innerText=R.kills}var Rn={},jn=["crown","skull"],_n=[];function Un(e,t){if(R.upgradePoints=e,R.upgrAge=t,e>0){_n.length=0,s.removeAllChildren(Ve);for(var n=0;n<l.weapons.length;++n)l.weapons[n].age==t&&(null==l.weapons[n].pre||R.weapons.indexOf(l.weapons[n].pre)>=0)&&(s.generateElement({id:"upgradeItem"+n,class:"actionBarItem",onmouseout:function(){Tt()},parent:Ve}).style.backgroundImage=document.getElementById("actionBarItem"+n).style.backgroundImage,_n.push(n));for(n=0;n<l.list.length;++n)if(l.list[n].age==t&&(null==l.list[n].pre||R.items.indexOf(l.list[n].pre)>=0)){var i=l.weapons.length+n;s.generateElement({id:"upgradeItem"+i,class:"actionBarItem",onmouseout:function(){Tt()},parent:Ve}).style.backgroundImage=document.getElementById("actionBarItem"+i).style.backgroundImage,_n.push(i)}for(n=0;n<_n.length;n++)!function(e){var t=document.getElementById("upgradeItem"+e);t.onmouseover=function(){l.weapons[e]?Tt(l.weapons[e],!0):Tt(l.list[e-l.weapons.length])},t.onclick=s.checkTrusted((function(){r.send("6",e)})),s.hookTouchEvents(t)}(_n[n]);_n.length?(Ve.style.display="block",qe.style.display="block",qe.innerHTML="SELECT ITEMS ("+e+")"):(Ve.style.display="none",qe.style.display="none",Tt())}else Ve.style.display="none",qe.style.display="none",Tt()}function Dn(e,t,n){null!=e&&(R.XP=e),null!=t&&(R.maxXP=t),null!=n&&(R.age=n),n==o.maxAge?(ze.innerHTML="MAX AGE",He.style.width="100%"):(ze.innerHTML="AGE "+R.age,He.style.width=R.XP/R.maxXP*100+"%")}function Ln(e){s.removeAllChildren(De);for(var t=1,n=0;n<e.length;n+=3)!function(n){s.generateElement({class:"leaderHolder",parent:De,children:[s.generateElement({class:"leaderboardItem",style:"color:"+(e[n]==j?"#fff":"rgba(255,255,255,0.6)"),text:t+". "+(""!=e[n+1]?e[n+1]:"unknown")}),s.generateElement({class:"leaderScore",text:s.kFormat(e[n+2])||"0"})]})}(n),t++}function Fn(e,t,n,i){be.save(),be.setTransform(1,0,0,1,0,0),be.scale(V,V);var r=50;be.beginPath(),be.arc(e,t,r,0,2*Math.PI,!1),be.closePath(),be.fillStyle="rgba(255, 255, 255, 0.3)",be.fill(),r=50;var s=n-e,a=i-t,o=Math.sqrt(Math.pow(s,2)+Math.pow(a,2)),c=o>r?o/r:1;s/=c,a/=c,be.beginPath(),be.arc(e+s,t+a,.5*r,0,2*Math.PI,!1),be.closePath(),be.fillStyle="white",be.fill(),be.restore()}function zn(e,t,n){for(var i=0;i<G.length;++i)(_=G[i]).active&&_.layer==e&&(_.update(P),_.active&&ki(_.x-t,_.y-n,_.scale)&&(be.save(),be.translate(_.x-t,_.y-n),be.rotate(_.dir),Vn(0,0,_,be,1),be.restore()))}var Hn={};function Vn(e,t,n,i,r){if(n.src){var s=l.projectiles[n.indx].src,a=Hn[s];a||((a=new Image).onload=function(){this.isLoaded=!0},a.src=".././img/weapons/"+s+".png",Hn[s]=a),a.isLoaded&&i.drawImage(a,e-n.scale/2,t-n.scale/2,n.scale,n.scale)}else 1==n.indx&&(i.fillStyle="#939393",si(e,t,n.scale,i))}function qn(e,t,n,i){var r=o.riverWidth+i,s=o.mapScale/2-t-r/2;s<ce&&s+r>0&&n.fillRect(0,s,oe,r)}function Yn(e,t,n){for(var i,r,s,a=0;a<N.length;++a)(_=N[a]).active&&(r=_.x+_.xWiggle-t,s=_.y+_.yWiggle-n,0==e&&_.update(P),_.layer==e&&ki(r,s,_.scale+(_.blocker||0))&&(be.globalAlpha=_.hideFromEnemy?.6:1,_.isItem?(i=ri(_),be.save(),be.translate(r,s),be.rotate(_.dir),be.drawImage(i,-i.width/2,-i.height/2),_.blocker&&(be.strokeStyle="#db6e6e",be.globalAlpha=.3,be.lineWidth=6,si(0,0,_.blocker,be,!1,!0)),be.restore()):(i=ni(_),be.drawImage(i,r-i.width/2,s-i.height/2))))}function Wn(e,t,n){(_=Ii(e))&&_.startAnim(t,n)}function Xn(e,t,n){be.globalAlpha=1;for(var i=0;i<W.length;++i)(_=W[i]).zIndex==n&&(_.animate(P),_.visible&&(_.skinRot+=.002*P,L=(_==R?pn():_.dir)+_.dirPlus,be.save(),be.translate(_.x-e,_.y-t),be.rotate(L),Nn(_,be),be.restore()))}function Nn(e,t){(t=t||be).lineWidth=5.5,t.lineJoin="miter";var n=Math.PI/4*(l.weapons[e.weaponIndex].armS||1),i=e.buildIndex<0&&l.weapons[e.weaponIndex].hndS||1,r=e.buildIndex<0&&l.weapons[e.weaponIndex].hndD||1;if(e.tailIndex>0&&function(e,t,n){if(!(Gn=Qn[e])){var i=new Image;i.onload=function(){this.isLoaded=!0,this.onload=null},i.src=".././img/accessories/access_"+e+".png",Qn[e]=i,Gn=i}var r=$n[e];if(!r){for(var s=0;s<tt.length;++s)if(tt[s].id==e){r=tt[s];break}$n[e]=r}Gn.isLoaded&&(t.save(),t.translate(-20-(r.xOff||0),0),r.spin&&t.rotate(n.skinRot),t.drawImage(Gn,-r.scale/2,-r.scale/2,r.scale,r.scale),t.restore())}(e.tailIndex,t,e),e.buildIndex<0&&!l.weapons[e.weaponIndex].aboveHand&&(ei(l.weapons[e.weaponIndex],o.weaponVariants[e.weaponVariant].src,e.scale,0,t),null==l.weapons[e.weaponIndex].projectile||l.weapons[e.weaponIndex].hideProjectile||Vn(e.scale,0,l.projectiles[l.weapons[e.weaponIndex].projectile],be)),t.fillStyle=o.skinColors[e.skinColor],si(e.scale*Math.cos(n),e.scale*Math.sin(n),14),si(e.scale*r*Math.cos(-n*i),e.scale*r*Math.sin(-n*i),14),e.buildIndex<0&&l.weapons[e.weaponIndex].aboveHand&&(ei(l.weapons[e.weaponIndex],o.weaponVariants[e.weaponVariant].src,e.scale,0,t),null==l.weapons[e.weaponIndex].projectile||l.weapons[e.weaponIndex].hideProjectile||Vn(e.scale,0,l.projectiles[l.weapons[e.weaponIndex].projectile],be)),e.buildIndex>=0){var s=ri(l.list[e.buildIndex]);t.drawImage(s,e.scale-l.list[e.buildIndex].holdOffset,-s.width/2)}si(0,0,e.scale,t),e.skinIndex>0&&(t.rotate(Math.PI/2),function e(t,n,i,r){if(!(Gn=Jn[t])){var s=new Image;s.onload=function(){this.isLoaded=!0,this.onload=null},s.src=".././img/hats/hat_"+t+".png",Jn[t]=s,Gn=s}var a=i||Kn[t];if(!a){for(var o=0;o<et.length;++o)if(et[o].id==t){a=et[o];break}Kn[t]=a}Gn.isLoaded&&n.drawImage(Gn,-a.scale/2,-a.scale/2,a.scale,a.scale),!i&&a.topSprite&&(n.save(),n.rotate(r.skinRot),e(t+"_top",n,a,r),n.restore())}(e.skinIndex,t,null,e))}var Gn,Jn={},Kn={},Qn={},$n={},Zn={};function ei(e,t,n,i,r){var s=e.src+(t||""),a=Zn[s];a||((a=new Image).onload=function(){this.isLoaded=!0},a.src=".././img/weapons/"+s+".png",Zn[s]=a),a.isLoaded&&r.drawImage(a,n+e.xOff-e.length/2,i+e.yOff-e.width/2,e.length,e.width)}var ti={};function ni(e){var t=e.y>=o.mapScale-o.snowBiomeTop?2:e.y<=o.snowBiomeTop?1:0,n=e.type+"_"+e.scale+"_"+t,i=ti[n];if(!i){var r=document.createElement("canvas");r.width=r.height=2.1*e.scale+5.5;var a=r.getContext("2d");if(a.translate(r.width/2,r.height/2),a.rotate(s.randFloat(0,Math.PI)),a.strokeStyle=it,a.lineWidth=5.5,0==e.type)for(var c,l=0;l<2;++l)ai(a,7,c=_.scale*(l?.5:1),.7*c),a.fillStyle=t?l?"#fff":"#e3f1f4":l?"#b4db62":"#9ebf57",a.fill(),l||a.stroke();else if(1==e.type)if(2==t)a.fillStyle="#606060",ai(a,6,.3*e.scale,.71*e.scale),a.fill(),a.stroke(),a.fillStyle="#89a54c",si(0,0,.55*e.scale,a),a.fillStyle="#a5c65b",si(0,0,.3*e.scale,a,!0);else{var h;!function(e,t,n,i){var r,a=Math.PI/2*3,o=Math.PI/6;e.beginPath(),e.moveTo(0,-i);for(var c=0;c<6;c++)r=s.randInt(n+.9,1.2*n),e.quadraticCurveTo(Math.cos(a+o)*r,Math.sin(a+o)*r,Math.cos(a+2*o)*i,Math.sin(a+2*o)*i),a+=2*o;e.lineTo(0,-i),e.closePath()}(a,0,_.scale,.7*_.scale),a.fillStyle=t?"#e3f1f4":"#89a54c",a.fill(),a.stroke(),a.fillStyle=t?"#6a64af":"#c15555";var u=T/4;for(l=0;l<4;++l)si((h=s.randInt(_.scale/3.5,_.scale/2.3))*Math.cos(u*l),h*Math.sin(u*l),s.randInt(10,12),a)}else 2!=e.type&&3!=e.type||(a.fillStyle=2==e.type?2==t?"#938d77":"#939393":"#e0c655",ai(a,3,e.scale,e.scale),a.fill(),a.stroke(),a.fillStyle=2==e.type?2==t?"#b2ab90":"#bcbcbc":"#ebdca3",ai(a,3,.55*e.scale,.65*e.scale),a.fill());i=r,ti[n]=i}return i}var ii=[];function ri(e,t){var n=ii[e.id];if(!n||t){var i=document.createElement("canvas");i.width=i.height=2.5*e.scale+5.5+(l.list[e.id].spritePadding||0);var r=i.getContext("2d");if(r.translate(i.width/2,i.height/2),r.rotate(t?0:Math.PI/2),r.strokeStyle=it,r.lineWidth=5.5*(t?i.width/81:1),"apple"==e.name){r.fillStyle="#c15555",si(0,0,e.scale,r),r.fillStyle="#89a54c";var a=-Math.PI/2;!function(e,t,n,i,r){var s=e+25*Math.cos(i),a=t+25*Math.sin(i);r.moveTo(e,t),r.beginPath(),r.quadraticCurveTo((e+s)/2+10*Math.cos(i+Math.PI/2),(t+a)/2+10*Math.sin(i+Math.PI/2),s,a),r.quadraticCurveTo((e+s)/2-10*Math.cos(i+Math.PI/2),(t+a)/2-10*Math.sin(i+Math.PI/2),e,t),r.closePath(),r.fill(),r.stroke()}(e.scale*Math.cos(a),e.scale*Math.sin(a),0,a+Math.PI/2,r)}else if("cookie"==e.name){r.fillStyle="#cca861",si(0,0,e.scale,r),r.fillStyle="#937c4b";for(var o=T/(h=4),c=0;c<h;++c)si((u=s.randInt(e.scale/2.5,e.scale/1.7))*Math.cos(o*c),u*Math.sin(o*c),s.randInt(4,5),r,!0)}else if("cheese"==e.name){var h,u;for(r.fillStyle="#f4f3ac",si(0,0,e.scale,r),r.fillStyle="#c3c28b",o=T/(h=4),c=0;c<h;++c)si((u=s.randInt(e.scale/2.5,e.scale/1.7))*Math.cos(o*c),u*Math.sin(o*c),s.randInt(4,5),r,!0)}else if("wood wall"==e.name||"stone wall"==e.name||"castle wall"==e.name){r.fillStyle="castle wall"==e.name?"#83898e":"wood wall"==e.name?"#a5974c":"#939393";var f="castle wall"==e.name?4:3;ai(r,f,1.1*e.scale,1.1*e.scale),r.fill(),r.stroke(),r.fillStyle="castle wall"==e.name?"#9da4aa":"wood wall"==e.name?"#c9b758":"#bcbcbc",ai(r,f,.65*e.scale,.65*e.scale),r.fill()}else if("spikes"==e.name||"greater spikes"==e.name||"poison spikes"==e.name||"spinning spikes"==e.name){r.fillStyle="poison spikes"==e.name?"#7b935d":"#939393";var d=.6*e.scale;ai(r,"spikes"==e.name?5:6,e.scale,d),r.fill(),r.stroke(),r.fillStyle="#a5974c",si(0,0,d,r),r.fillStyle="#c9b758",si(0,0,d/2,r,!0)}else if("windmill"==e.name||"faster windmill"==e.name||"power mill"==e.name)r.fillStyle="#a5974c",si(0,0,e.scale,r),r.fillStyle="#c9b758",ci(0,0,1.5*e.scale,29,4,r),r.fillStyle="#a5974c",si(0,0,.5*e.scale,r);else if("mine"==e.name)r.fillStyle="#939393",ai(r,3,e.scale,e.scale),r.fill(),r.stroke(),r.fillStyle="#bcbcbc",ai(r,3,.55*e.scale,.65*e.scale),r.fill();else if("sapling"==e.name)for(c=0;c<2;++c)ai(r,7,d=e.scale*(c?.5:1),.7*d),r.fillStyle=c?"#b4db62":"#9ebf57",r.fill(),c||r.stroke();else if("pit trap"==e.name)r.fillStyle="#a5974c",ai(r,3,1.1*e.scale,1.1*e.scale),r.fill(),r.stroke(),r.fillStyle=it,ai(r,3,.65*e.scale,.65*e.scale),r.fill();else if("boost pad"==e.name)r.fillStyle="#7e7f82",oi(0,0,2*e.scale,2*e.scale,r),r.fill(),r.stroke(),r.fillStyle="#dbd97d",function(e,t){t=t||be;var n=e*(Math.sqrt(3)/2);t.beginPath(),t.moveTo(0,-n/2),t.lineTo(-e/2,n/2),t.lineTo(e/2,n/2),t.lineTo(0,-n/2),t.fill(),t.closePath()}(1*e.scale,r);else if("turret"==e.name)r.fillStyle="#a5974c",si(0,0,e.scale,r),r.fill(),r.stroke(),r.fillStyle="#939393",oi(0,-25,.9*e.scale,50,r),si(0,0,.6*e.scale,r),r.fill(),r.stroke();else if("platform"==e.name){r.fillStyle="#cebd5f";var p=2*e.scale,g=p/4,m=-e.scale/2;for(c=0;c<4;++c)oi(m-g/2,0,g,2*e.scale,r),r.fill(),r.stroke(),m+=p/4}else"healing pad"==e.name?(r.fillStyle="#7e7f82",oi(0,0,2*e.scale,2*e.scale,r),r.fill(),r.stroke(),r.fillStyle="#db6e6e",ci(0,0,.65*e.scale,20,4,r,!0)):"spawn pad"==e.name?(r.fillStyle="#7e7f82",oi(0,0,2*e.scale,2*e.scale,r),r.fill(),r.stroke(),r.fillStyle="#71aad6",si(0,0,.6*e.scale,r)):"blocker"==e.name?(r.fillStyle="#7e7f82",si(0,0,e.scale,r),r.fill(),r.stroke(),r.rotate(Math.PI/4),r.fillStyle="#db6e6e",ci(0,0,.65*e.scale,20,4,r,!0)):"teleporter"==e.name&&(r.fillStyle="#7e7f82",si(0,0,e.scale,r),r.fill(),r.stroke(),r.rotate(Math.PI/4),r.fillStyle="#d76edb",si(0,0,.5*e.scale,r,!0));n=i,t||(ii[e.id]=n)}return n}function si(e,t,n,i,r,s){(i=i||be).beginPath(),i.arc(e,t,n,0,2*Math.PI),s||i.fill(),r||i.stroke()}function ai(e,t,n,i){var r,s,a=Math.PI/2*3,o=Math.PI/t;e.beginPath(),e.moveTo(0,-n);for(var c=0;c<t;c++)r=Math.cos(a)*n,s=Math.sin(a)*n,e.lineTo(r,s),a+=o,r=Math.cos(a)*i,s=Math.sin(a)*i,e.lineTo(r,s),a+=o;e.lineTo(0,-n),e.closePath()}function oi(e,t,n,i,r,s){r.fillRect(e-n/2,t-i/2,n,i),s||r.strokeRect(e-n/2,t-i/2,n,i)}function ci(e,t,n,i,r,s,a){s.save(),s.translate(e,t),r=Math.ceil(r/2);for(var o=0;o<r;o++)oi(0,0,2*n,i,s,a),s.rotate(Math.PI/r);s.restore()}function li(e){for(var t=0;t<e.length;)nt.add(e[t],e[t+1],e[t+2],e[t+3],e[t+4],e[t+5],l.list[e[t+6]],!0,e[t+7]>=0?{sid:e[t+7]}:null),t+=8}function hi(e,t){(_=Mi(t))&&(_.xWiggle+=o.gatherWiggle*Math.cos(e),_.yWiggle+=o.gatherWiggle*Math.sin(e))}function ui(e,t){(_=Mi(e))&&(_.dir=t,_.xWiggle+=o.gatherWiggle*Math.cos(t+Math.PI),_.yWiggle+=o.gatherWiggle*Math.sin(t+Math.PI))}function fi(e,t,n,i,r,s,a,o){lt&&(J.addProjectile(e,t,n,i,r,s,null,null,a).sid=o)}function di(e,t){for(var n=0;n<G.length;++n)G[n].sid==e&&(G[n].range=t)}function pi(e){(_=Ei(e))&&_.startAnim()}function gi(e){for(var t=0;t<Y.length;++t)Y[t].forcePos=!Y[t].visible,Y[t].visible=!1;if(e){var n=Date.now();for(t=0;t<e.length;)(_=Ei(e[t]))?(_.index=e[t+1],_.t1=void 0===_.t2?n:_.t2,_.t2=n,_.x1=_.x,_.y1=_.y,_.x2=e[t+2],_.y2=e[t+3],_.d1=void 0===_.d2?e[t+4]:_.d2,_.d2=e[t+4],_.health=e[t+5],_.dt=0,_.visible=!0):((_=Z.spawn(e[t+2],e[t+3],e[t+4],e[t+1])).x2=_.x,_.y2=_.y,_.d2=_.dir,_.health=e[t+5],Z.aiTypes[e[t+1]].name||(_.name=o.cowNames[e[t+6]]),_.forcePos=!0,_.sid=e[t],_.visible=!0),t+=7}}var mi={};function yi(e,t){var n=e.index,i=mi[n];if(!i){var r=new Image;r.onload=function(){this.isLoaded=!0,this.onload=null},r.src=".././img/animals/"+e.src+".png",i=r,mi[n]=i}if(i.isLoaded){var s=1.2*e.scale*(e.spriteMlt||1);t.drawImage(i,-s,-s,2*s,2*s)}}function ki(e,t,n){return e+n>=0&&e-n<=oe&&t+n>=0&&t-n<=ce}function vi(e,t){var n=function(e){for(var t=0;t<W.length;++t)if(W[t].id==e)return W[t];return null}(e[0]);n||(n=new u(e[0],e[1],o,s,J,nt,W,Y,l,et,tt),W.push(n)),n.spawn(t?H:null),n.visible=!1,n.x2=void 0,n.y2=void 0,n.setData(e),t&&(U=(R=n).x,D=R.y,$t(),On(),Dn(),Un(0),Be.style.display="block")}function wi(e){for(var t=0;t<W.length;t++)if(W[t].id==e){W.splice(t,1);break}}function bi(e,t){R&&(R.itemCounts[e]=t)}function xi(e,t,n){R&&(R[e]=t,n&&On())}function Si(e,t){(_=Ii(e))&&(_.health=t)}function Ti(e){for(var t=Date.now(),n=0;n<W.length;++n)W[n].forcePos=!W[n].visible,W[n].visible=!1;for(n=0;n<e.length;)(_=Ii(e[n]))&&(_.t1=void 0===_.t2?t:_.t2,_.t2=t,_.x1=_.x,_.y1=_.y,_.x2=e[n+1],_.y2=e[n+2],_.d1=void 0===_.d2?e[n+3]:_.d2,_.d2=e[n+3],_.dt=0,_.buildIndex=e[n+4],_.weaponIndex=e[n+5],_.weaponVariant=e[n+6],_.team=e[n+7],_.isLeader=e[n+8],_.skinIndex=e[n+9],_.tailIndex=e[n+10],_.iconIndex=e[n+11],_.zIndex=e[n+12],_.visible=!0),n+=13}function Ii(e){for(var t=0;t<W.length;++t)if(W[t].sid==e)return W[t];return null}function Ei(e){for(var t=0;t<Y.length;++t)if(Y[t].sid==e)return Y[t];return null}function Mi(e){for(var t=0;t<N.length;++t)if(N[t].sid==e)return N[t];return null}var Ai=-1;function Pi(){var e=Date.now()-Ai;window.pingTime=e,Ie.innerText="Ping: "+e+" ms"}function Bi(){Ai=Date.now(),r.send("pp")}function Ci(e){if(!(e<0)){var t=Math.floor(e/60),n=e%60;n=("0"+n).slice(-2),Ee.innerText="Server restarting in "+t+":"+n,Ee.hidden=!1}}function Oi(e){window.open(e,"_blank")}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},function(){var e=o.mapScale/2;nt.add(0,e,e+200,0,o.treeScales[3],0),nt.add(1,e,e-480,0,o.treeScales[3],0),nt.add(2,e+300,e+450,0,o.treeScales[3],0),nt.add(3,e-950,e-130,0,o.treeScales[2],0),nt.add(4,e-750,e-400,0,o.treeScales[3],0),nt.add(5,e-700,e+400,0,o.treeScales[2],0),nt.add(6,e+800,e-200,0,o.treeScales[3],0),nt.add(7,e-260,e+340,0,o.bushScales[3],1),nt.add(8,e+760,e+310,0,o.bushScales[3],1),nt.add(9,e-800,e+100,0,o.bushScales[3],1),nt.add(10,e-800,e+300,0,l.list[4].scale,l.list[4].id,l.list[10]),nt.add(11,e+650,e-390,0,l.list[4].scale,l.list[4].id,l.list[10]),nt.add(12,e-400,e-450,0,o.rockScales[2],2)}(),function e(){B=Date.now(),P=B-q,q=B,function(){if(R&&(!C||B-C>=1e3/o.clientSendRate)&&(C=B,r.send("2",pn())),An<120&&(An+=.1*P,Ge.style.fontSize=Math.min(Math.round(An),120)+"px"),R){var e=s.getDistance(U,D,R.x,R.y),t=s.getDirection(R.x,R.y,U,D),n=Math.min(.01*e*P,e);e>.05?(U+=n*Math.cos(t),D+=n*Math.sin(t)):(U=R.x,D=R.y)}else U=o.mapScale/2,D=o.mapScale/2;for(var i=B-1e3/o.serverUpdateRate,a=0;a<W.length+Y.length;++a)if((_=W[a]||Y[a-W.length])&&_.visible)if(_.forcePos)_.x=_.x2,_.y=_.y2,_.dir=_.d2;else{var c=_.t2-_.t1,l=(i-_.t1)/c;_.dt+=P;var h=Math.min(1.7,_.dt/170),u=_.x2-_.x1;_.x=_.x1+u*h,u=_.y2-_.y1,_.y=_.y1+u*h,_.dir=Math.lerpAngle(_.d2,_.d1,Math.min(1.2,l))}var f=U-oe/2,d=D-ce/2;o.snowBiomeTop-d<=0&&o.mapScale-o.snowBiomeTop-d>=ce?(be.fillStyle="#b6db66",be.fillRect(0,0,oe,ce)):o.mapScale-o.snowBiomeTop-d<=0?(be.fillStyle="#dbc666",be.fillRect(0,0,oe,ce)):o.snowBiomeTop-d>=ce?(be.fillStyle="#fff",be.fillRect(0,0,oe,ce)):o.snowBiomeTop-d>=0?(be.fillStyle="#fff",be.fillRect(0,0,oe,o.snowBiomeTop-d),be.fillStyle="#b6db66",be.fillRect(0,o.snowBiomeTop-d,oe,ce-(o.snowBiomeTop-d))):(be.fillStyle="#b6db66",be.fillRect(0,0,oe,o.mapScale-o.snowBiomeTop-d),be.fillStyle="#dbc666",be.fillRect(0,o.mapScale-o.snowBiomeTop-d,oe,ce-(o.mapScale-o.snowBiomeTop-d))),In||((ee+=te*o.waveSpeed*P)>=o.waveMax?(ee=o.waveMax,te=-1):ee<=1&&(ee=te=1),be.globalAlpha=1,be.fillStyle="#dbc666",qn(f,d,be,o.riverPadding),be.fillStyle="#91b2db",qn(f,d,be,250*(ee-1))),be.lineWidth=4,be.strokeStyle="#000",be.globalAlpha=.06,be.beginPath();for(var p=-U;p<oe;p+=ce/18)p>0&&(be.moveTo(p,0),be.lineTo(p,ce));for(var g=-D;g<ce;g+=ce/18)p>0&&(be.moveTo(0,g),be.lineTo(oe,g));for(be.stroke(),be.globalAlpha=1,be.strokeStyle=it,Yn(-1,f,d),be.globalAlpha=1,be.lineWidth=5.5,zn(0,f,d),Xn(f,d,0),be.globalAlpha=1,a=0;a<Y.length;++a)(_=Y[a]).active&&_.visible&&(_.animate(P),be.save(),be.translate(_.x-f,_.y-d),be.rotate(_.dir+_.dirPlus-Math.PI/2),yi(_,be),be.restore());if(Yn(0,f,d),zn(1,f,d),Yn(1,f,d),Xn(f,d,1),Yn(2,f,d),Yn(3,f,d),be.fillStyle="#000",be.globalAlpha=.09,f<=0&&be.fillRect(0,0,-f,ce),o.mapScale-f<=oe){var y=Math.max(0,-d);be.fillRect(o.mapScale-f,y,oe-(o.mapScale-f),ce-y)}if(d<=0&&be.fillRect(-f,0,oe+f,-d),o.mapScale-d<=ce){var k=Math.max(0,-f),v=0;o.mapScale-f<=oe&&(v=oe-(o.mapScale-f)),be.fillRect(k,o.mapScale-d,oe-k-v,ce-(o.mapScale-d))}for(be.globalAlpha=1,be.fillStyle="rgba(0, 0, 70, 0.35)",be.fillRect(0,0,oe,ce),be.strokeStyle=rt,a=0;a<W.length+Y.length;++a)if((_=W[a]||Y[a-W.length]).visible&&(10!=_.skinIndex||_==R||_.team&&_.team==R.team)){var w=(_.team?"["+_.team+"] ":"")+(_.name||"");if(""!=w){if(be.font=(_.nameScale||30)+"px Hammersmith One",be.fillStyle="#fff",be.textBaseline="middle",be.textAlign="center",be.lineWidth=_.nameScale?11:8,be.lineJoin="round",be.strokeText(w,_.x-f,_.y-d-_.scale-o.nameY),be.fillText(w,_.x-f,_.y-d-_.scale-o.nameY),_.isLeader&&Rn.crown.isLoaded){var b=o.crownIconScale;k=_.x-f-b/2-be.measureText(w).width/2-o.crownPad,be.drawImage(Rn.crown,k,_.y-d-_.scale-o.nameY-b/2-5,b,b)}1==_.iconIndex&&Rn.skull.isLoaded&&(b=o.crownIconScale,k=_.x-f-b/2+be.measureText(w).width/2+o.crownPad,be.drawImage(Rn.skull,k,_.y-d-_.scale-o.nameY-b/2-5,b,b))}_.health>0&&(o.healthBarWidth,be.fillStyle=rt,be.roundRect(_.x-f-o.healthBarWidth-o.healthBarPad,_.y-d+_.scale+o.nameY,2*o.healthBarWidth+2*o.healthBarPad,17,8),be.fill(),be.fillStyle=_==R||_.team&&_.team==R.team?"#8ecc51":"#cc5151",be.roundRect(_.x-f-o.healthBarWidth,_.y-d+_.scale+o.nameY+o.healthBarPad,2*o.healthBarWidth*(_.health/_.maxHealth),17-2*o.healthBarPad,7),be.fill())}for(m.update(P,be,f,d),a=0;a<W.length;++a)if((_=W[a]).visible&&_.chatCountdown>0){_.chatCountdown-=P,_.chatCountdown<=0&&(_.chatCountdown=0),be.font="32px Hammersmith One";var x=be.measureText(_.chatMessage);be.textBaseline="middle",be.textAlign="center",k=_.x-f,y=_.y-_.scale-d-90;var S=x.width+17;be.fillStyle="rgba(0,0,0,0.2)",be.roundRect(k-S/2,y-23.5,S,47,6),be.fill(),be.fillStyle="#fff",be.fillText(_.chatMessage,k,y)}!function(e){if(R&&R.alive){Ke.clearRect(0,0,Ne.width,Ne.height),Ke.strokeStyle="#fff",Ke.lineWidth=4;for(var t=0;t<qt.length;++t)(Vt=qt[t]).update(Ke,e);if(Ke.globalAlpha=1,Ke.fillStyle="#fff",si(R.x/o.mapScale*Ne.width,R.y/o.mapScale*Ne.height,7,Ke,!0),Ke.fillStyle="rgba(255,255,255,0.35)",R.team&&Et)for(t=0;t<Et.length;)si(Et[t]/o.mapScale*Ne.width,Et[t+1]/o.mapScale*Ne.height,7,Ke,!0),t+=2;It&&(Ke.fillStyle="#fc5553",Ke.font="34px Hammersmith One",Ke.textBaseline="middle",Ke.textAlign="center",Ke.fillText("x",It.x/o.mapScale*Ne.width,It.y/o.mapScale*Ne.height)),Mt&&(Ke.fillStyle="#fff",Ke.font="34px Hammersmith One",Ke.textBaseline="middle",Ke.textAlign="center",Ke.fillText("x",Mt.x/o.mapScale*Ne.width,Mt.y/o.mapScale*Ne.height))}}(P),-1!==re.id&&Fn(re.startX,re.startY,re.currentX,re.currentY),-1!==se.id&&Fn(se.startX,se.startY,se.currentX,se.currentY)}(),requestAnimFrame(e)}(),window.openLink=Oi,window.aJoinReq=Dt,window.follmoo=function(){H||(H=!0,I("moofoll",1))},window.kickFromClan=Lt,window.sendJoin=Ft,window.leaveAlliance=Ht,window.createAlliance=zt,window.storeBuy=Kt,window.storeEquip=Jt,window.showItemInfo=Tt,window.selectSkinColor=function(e){ae=e,en()},window.changeStoreIndex=function(e){Xt!=e&&(Xt=e,Gt())},window.config=o},function(e,t){!function(e,t,n){function i(e,t){return typeof e===t}var r=[],s=[],a={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},o=function(){};o.prototype=a,o=new o;var c=t.documentElement,l="svg"===c.nodeName.toLowerCase();o.addTest("passiveeventlisteners",(function(){var t=!1;try{var n=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("test",null,n)}catch(e){}return t})),function(){var e,t,n,a,c,l;for(var h in s)if(s.hasOwnProperty(h)){if(e=[],(t=s[h]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=i(t.fn,"function")?t.fn():t.fn,c=0;c<e.length;c++)1===(l=e[c].split(".")).length?o[l[0]]=a:(!o[l[0]]||o[l[0]]instanceof Boolean||(o[l[0]]=new Boolean(o[l[0]])),o[l[0]][l[1]]=a),r.push((a?"":"no-")+l.join("-"))}}(),function(e){var t=c.className,n=o._config.classPrefix||"";if(l&&(t=t.baseVal),o._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}o._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?c.className.baseVal=t:c.className=t)}(r),delete a.addTest,delete a.addAsyncTest;for(var h=0;h<o._q.length;h++)o._q[h]();e.Modernizr=o}(window,document)},function(e,t,n){var i=n(24);n(19),e.exports={socket:null,connected:!1,socketId:-1,connect:function(e,t,n){if(!this.socket){var r=this;try{var s=!1,a=e;this.socket=new WebSocket(a),this.socket.binaryType="arraybuffer",this.socket.onmessage=function(e){var t=new Uint8Array(e.data),s=i.decode(t),a=s[0];t=s[1],"io-init"==a?r.socketId=t[0]:n[a].apply(void 0,t)},this.socket.onopen=function(){r.connected=!0,t()},this.socket.onclose=function(e){r.connected=!1,4001==e.code?t("Invalid Connection"):s||t("disconnected")},this.socket.onerror=function(e){this.socket&&this.socket.readyState!=WebSocket.OPEN&&(s=!0,console.error("Socket error",arguments),t("Socket error"))}}catch(e){console.warn("Socket connection error:",e),t(e)}}},send:function(e){var t=Array.prototype.slice.call(arguments,1),n=i.encode([e,t]);this.socket.send(n)},socketReady:function(){return this.socket&&this.connected},close:function(){this.socket&&this.socket.close()}}},function(e,t,n){t.encode=n(9).encode,t.decode=n(15).decode,t.Encoder=n(37).Encoder,t.Decoder=n(38).Decoder,t.createCodec=n(39).createCodec,t.codec=n(40).codec},function(e,t,n){(function(t){function n(e){return e&&e.isBuffer&&e}e.exports=n(void 0!==t&&t)||n(this.Buffer)||n("undefined"!=typeof window&&window.Buffer)||this.Buffer}).call(this,n(11).Buffer)},function(e,t,n){"use strict";t.byteLength=function(e){var t=l(e),n=t[0],i=t[1];return 3*(n+i)/4-i},t.toByteArray=function(e){var t,n,i=l(e),a=i[0],o=i[1],c=new s(function(e,t,n){return 3*(t+n)/4-n}(0,a,o)),h=0,u=o>0?a-4:a;for(n=0;n<u;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],c[h++]=t>>16&255,c[h++]=t>>8&255,c[h++]=255&t;return 2===o&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,c[h++]=255&t),1===o&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,c[h++]=t>>8&255,c[h++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,r=n%3,s=[],a=0,o=n-r;a<o;a+=16383)s.push(u(e,a,a+16383>o?o:a+16383));return 1===r?(t=e[n-1],s.push(i[t>>2]+i[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],s.push(i[t>>10]+i[t>>4&63]+i[t<<2&63]+"=")),s.join("")};for(var i=[],r=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,c=a.length;o<c;++o)i[o]=a[o],r[a.charCodeAt(o)]=o;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e){return i[e>>18&63]+i[e>>12&63]+i[e>>6&63]+i[63&e]}function u(e,t,n){for(var i,r=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),r.push(h(i));return r.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(e,t,n){var i=n(0);function r(e){return new Array(e)}(t=e.exports=r(0)).alloc=r,t.concat=i.concat,t.from=function(e){if(!i.isBuffer(e)&&i.isView(e))e=i.Uint8Array.from(e);else if(i.isArrayBuffer(e))e=new Uint8Array(e);else{if("string"==typeof e)return i.from.call(t,e);if("number"==typeof e)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(e)}},function(e,t,n){var i=n(0),r=i.global;function s(e){return new r(e)}(t=e.exports=i.hasBuffer?s(0):[]).alloc=i.hasBuffer&&r.alloc||s,t.concat=i.concat,t.from=function(e){if(!i.isBuffer(e)&&i.isView(e))e=i.Uint8Array.from(e);else if(i.isArrayBuffer(e))e=new Uint8Array(e);else{if("string"==typeof e)return i.from.call(t,e);if("number"==typeof e)throw new TypeError('"value" argument must not be a number')}return r.from&&1!==r.from.length?r.from(e):new r(e)}},function(e,t,n){var i=n(0);function r(e){return new Uint8Array(e)}(t=e.exports=i.hasArrayBuffer?r(0):[]).alloc=r,t.concat=i.concat,t.from=function(e){if(i.isView(e)){var n=e.byteOffset,r=e.byteLength;(e=e.buffer).byteLength!==r&&(e.slice?e=e.slice(n,n+r):(e=new Uint8Array(e)).byteLength!==r&&(e=Array.prototype.slice.call(e,n,n+r)))}else{if("string"==typeof e)return i.from.call(t,e);if("number"==typeof e)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(e)}},function(e,t){t.copy=function(e,t,n,i){var r;n||(n=0),i||0===i||(i=this.length),t||(t=0);var s=i-n;if(e===this&&n<t&&t<i)for(r=s-1;r>=0;r--)e[r+t]=this[r+n];else for(r=0;r<s;r++)e[r+t]=this[r+n];return s},t.toString=function(e,t,n){var i=0|t;n||(n=this.length);for(var r="",s=0;i<n;)(s=this[i++])<128?r+=String.fromCharCode(s):(192==(224&s)?s=(31&s)<<6|63&this[i++]:224==(240&s)?s=(15&s)<<12|(63&this[i++])<<6|63&this[i++]:240==(248&s)&&(s=(7&s)<<18|(63&this[i++])<<12|(63&this[i++])<<6|63&this[i++]),s>=65536?(s-=65536,r+=String.fromCharCode(55296+(s>>>10),56320+(1023&s))):r+=String.fromCharCode(s));return r},t.write=function(e,t){for(var n=t||(t|=0),i=e.length,r=0,s=0;s<i;)(r=e.charCodeAt(s++))<128?this[n++]=r:r<2048?(this[n++]=192|r>>>6,this[n++]=128|63&r):r<55296||r>57343?(this[n++]=224|r>>>12,this[n++]=128|r>>>6&63,this[n++]=128|63&r):(r=65536+(r-55296<<10|e.charCodeAt(s++)-56320),this[n++]=240|r>>>18,this[n++]=128|r>>>12&63,this[n++]=128|r>>>6&63,this[n++]=128|63&r);return n-t}},function(e,t,n){t.setExtPackers=function(e){e.addExtPacker(14,Error,[u,c]),e.addExtPacker(1,EvalError,[u,c]),e.addExtPacker(2,RangeError,[u,c]),e.addExtPacker(3,ReferenceError,[u,c]),e.addExtPacker(4,SyntaxError,[u,c]),e.addExtPacker(5,TypeError,[u,c]),e.addExtPacker(6,URIError,[u,c]),e.addExtPacker(10,RegExp,[h,c]),e.addExtPacker(11,Boolean,[l,c]),e.addExtPacker(12,String,[l,c]),e.addExtPacker(13,Date,[Number,c]),e.addExtPacker(15,Number,[l,c]),"undefined"!=typeof Uint8Array&&(e.addExtPacker(17,Int8Array,a),e.addExtPacker(18,Uint8Array,a),e.addExtPacker(19,Int16Array,a),e.addExtPacker(20,Uint16Array,a),e.addExtPacker(21,Int32Array,a),e.addExtPacker(22,Uint32Array,a),e.addExtPacker(23,Float32Array,a),"undefined"!=typeof Float64Array&&e.addExtPacker(24,Float64Array,a),"undefined"!=typeof Uint8ClampedArray&&e.addExtPacker(25,Uint8ClampedArray,a),e.addExtPacker(26,ArrayBuffer,a),e.addExtPacker(29,DataView,a)),r.hasBuffer&&e.addExtPacker(27,s,r.from)};var i,r=n(0),s=r.global,a=r.Uint8Array.from,o={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function c(e){return i||(i=n(9).encode),i(e)}function l(e){return e.valueOf()}function h(e){(e=RegExp.prototype.toString.call(e).split("/")).shift();var t=[e.pop()];return t.unshift(e.join("/")),t}function u(e){var t={};for(var n in o)t[n]=e[n];return t}},function(e,t,n){var i=n(5),r=n(7),s=r.Uint64BE,a=r.Int64BE,o=n(0),c=n(6),l=n(34),h=n(13).uint8,u=n(3).ExtBuffer,f="undefined"!=typeof Uint8Array,d="undefined"!=typeof Map,p=[];p[1]=212,p[2]=213,p[4]=214,p[8]=215,p[16]=216,t.getWriteType=function(e){var t=l.getWriteToken(e),n=e&&e.useraw,r=f&&e&&e.binarraybuffer,g=r?o.isArrayBuffer:o.isBuffer,m=r?function(e,t){w(e,new Uint8Array(t))}:w,y=d&&e&&e.usemap?function(e,n){if(!(n instanceof Map))return b(e,n);var i=n.size;t[i<16?128+i:i<=65535?222:223](e,i);var r=e.codec.encode;n.forEach((function(t,n,i){r(e,n),r(e,t)}))}:b;return{boolean:function(e,n){t[n?195:194](e,n)},function:v,number:function(e,n){var i=0|n;n===i?t[-32<=i&&i<=127?255&i:0<=i?i<=255?204:i<=65535?205:206:-128<=i?208:-32768<=i?209:210](e,i):t[203](e,n)},object:n?function(e,n){if(g(n))return function(e,n){var i=n.length;t[i<32?160+i:i<=65535?218:219](e,i),e.send(n)}(e,n);k(e,n)}:k,string:function(e){return function(n,i){var r=i.length,s=5+3*r;n.offset=n.reserve(s);var a=n.buffer,o=e(r),l=n.offset+o;r=c.write.call(a,i,l);var h=e(r);if(o!==h){var u=l+h-o,f=l+r;c.copy.call(a,a,u,l,f)}t[1===h?160+r:h<=3?215+h:219](n,r),n.offset+=r}}(n?function(e){return e<32?1:e<=65535?3:5}:function(e){return e<32?1:e<=255?2:e<=65535?3:5}),symbol:v,undefined:v};function k(e,n){if(null===n)return v(e,n);if(g(n))return m(e,n);if(i(n))return function(e,n){var i=n.length;t[i<16?144+i:i<=65535?220:221](e,i);for(var r=e.codec.encode,s=0;s<i;s++)r(e,n[s])}(e,n);if(s.isUint64BE(n))return function(e,n){t[207](e,n.toArray())}(e,n);if(a.isInt64BE(n))return function(e,n){t[211](e,n.toArray())}(e,n);var r=e.codec.getExtPacker(n);if(r&&(n=r(n)),n instanceof u)return function(e,n){var i=n.buffer,r=i.length,s=p[r]||(r<255?199:r<=65535?200:201);t[s](e,r),h[n.type](e),e.send(i)}(e,n);y(e,n)}function v(e,n){t[192](e,n)}function w(e,n){var i=n.length;t[i<255?196:i<=65535?197:198](e,i),e.send(n)}function b(e,n){var i=Object.keys(n),r=i.length;t[r<16?128+r:r<=65535?222:223](e,r);var s=e.codec.encode;i.forEach((function(t){s(e,t),s(e,n[t])}))}}},function(e,t,n){var i=n(4),r=n(7),s=r.Uint64BE,a=r.Int64BE,o=n(13).uint8,c=n(0),l=c.global,h=c.hasBuffer&&"TYPED_ARRAY_SUPPORT"in l&&!l.TYPED_ARRAY_SUPPORT,u=c.hasBuffer&&l.prototype||{};function f(){var e=o.slice();return e[196]=d(196),e[197]=p(197),e[198]=g(198),e[199]=d(199),e[200]=p(200),e[201]=g(201),e[202]=m(202,4,u.writeFloatBE||v,!0),e[203]=m(203,8,u.writeDoubleBE||w,!0),e[204]=d(204),e[205]=p(205),e[206]=g(206),e[207]=m(207,8,y),e[208]=d(208),e[209]=p(209),e[210]=g(210),e[211]=m(211,8,k),e[217]=d(217),e[218]=p(218),e[219]=g(219),e[220]=p(220),e[221]=g(221),e[222]=p(222),e[223]=g(223),e}function d(e){return function(t,n){var i=t.reserve(2),r=t.buffer;r[i++]=e,r[i]=n}}function p(e){return function(t,n){var i=t.reserve(3),r=t.buffer;r[i++]=e,r[i++]=n>>>8,r[i]=n}}function g(e){return function(t,n){var i=t.reserve(5),r=t.buffer;r[i++]=e,r[i++]=n>>>24,r[i++]=n>>>16,r[i++]=n>>>8,r[i]=n}}function m(e,t,n,i){return function(r,s){var a=r.reserve(t+1);r.buffer[a++]=e,n.call(r.buffer,s,a,i)}}function y(e,t){new s(this,t,e)}function k(e,t){new a(this,t,e)}function v(e,t){i.write(this,e,t,!1,23,4)}function w(e,t){i.write(this,e,t,!1,52,8)}t.getWriteToken=function(e){return e&&e.uint8array?function(){var e=f();return e[202]=m(202,4,v),e[203]=m(203,8,w),e}():h||c.hasBuffer&&e&&e.safe?function(){var e=o.slice();return e[196]=m(196,1,l.prototype.writeUInt8),e[197]=m(197,2,l.prototype.writeUInt16BE),e[198]=m(198,4,l.prototype.writeUInt32BE),e[199]=m(199,1,l.prototype.writeUInt8),e[200]=m(200,2,l.prototype.writeUInt16BE),e[201]=m(201,4,l.prototype.writeUInt32BE),e[202]=m(202,4,l.prototype.writeFloatBE),e[203]=m(203,8,l.prototype.writeDoubleBE),e[204]=m(204,1,l.prototype.writeUInt8),e[205]=m(205,2,l.prototype.writeUInt16BE),e[206]=m(206,4,l.prototype.writeUInt32BE),e[207]=m(207,8,y),e[208]=m(208,1,l.prototype.writeInt8),e[209]=m(209,2,l.prototype.writeInt16BE),e[210]=m(210,4,l.prototype.writeInt32BE),e[211]=m(211,8,k),e[217]=m(217,1,l.prototype.writeUInt8),e[218]=m(218,2,l.prototype.writeUInt16BE),e[219]=m(219,4,l.prototype.writeUInt32BE),e[220]=m(220,2,l.prototype.writeUInt16BE),e[221]=m(221,4,l.prototype.writeUInt32BE),e[222]=m(222,2,l.prototype.writeUInt16BE),e[223]=m(223,4,l.prototype.writeUInt32BE),e}():f()}},function(e,t,n){t.setExtUnpackers=function(e){e.addExtUnpacker(14,[o,l(Error)]),e.addExtUnpacker(1,[o,l(EvalError)]),e.addExtUnpacker(2,[o,l(RangeError)]),e.addExtUnpacker(3,[o,l(ReferenceError)]),e.addExtUnpacker(4,[o,l(SyntaxError)]),e.addExtUnpacker(5,[o,l(TypeError)]),e.addExtUnpacker(6,[o,l(URIError)]),e.addExtUnpacker(10,[o,c]),e.addExtUnpacker(11,[o,h(Boolean)]),e.addExtUnpacker(12,[o,h(String)]),e.addExtUnpacker(13,[o,h(Date)]),e.addExtUnpacker(15,[o,h(Number)]),"undefined"!=typeof Uint8Array&&(e.addExtUnpacker(17,h(Int8Array)),e.addExtUnpacker(18,h(Uint8Array)),e.addExtUnpacker(19,[u,h(Int16Array)]),e.addExtUnpacker(20,[u,h(Uint16Array)]),e.addExtUnpacker(21,[u,h(Int32Array)]),e.addExtUnpacker(22,[u,h(Uint32Array)]),e.addExtUnpacker(23,[u,h(Float32Array)]),"undefined"!=typeof Float64Array&&e.addExtUnpacker(24,[u,h(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&e.addExtUnpacker(25,h(Uint8ClampedArray)),e.addExtUnpacker(26,u),e.addExtUnpacker(29,[u,h(DataView)])),r.hasBuffer&&e.addExtUnpacker(27,h(s))};var i,r=n(0),s=r.global,a={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function o(e){return i||(i=n(15).decode),i(e)}function c(e){return RegExp.apply(null,e)}function l(e){return function(t){var n=new e;for(var i in a)n[i]=t[i];return n}}function h(e){return function(t){return new e(t)}}function u(e){return new Uint8Array(e).buffer}},function(e,t,n){var i=n(17);function r(e){var t,n=new Array(256);for(t=0;t<=127;t++)n[t]=s(t);for(t=128;t<=143;t++)n[t]=o(t-128,e.map);for(t=144;t<=159;t++)n[t]=o(t-144,e.array);for(t=160;t<=191;t++)n[t]=o(t-160,e.str);for(n[192]=s(null),n[193]=null,n[194]=s(!1),n[195]=s(!0),n[196]=a(e.uint8,e.bin),n[197]=a(e.uint16,e.bin),n[198]=a(e.uint32,e.bin),n[199]=a(e.uint8,e.ext),n[200]=a(e.uint16,e.ext),n[201]=a(e.uint32,e.ext),n[202]=e.float32,n[203]=e.float64,n[204]=e.uint8,n[205]=e.uint16,n[206]=e.uint32,n[207]=e.uint64,n[208]=e.int8,n[209]=e.int16,n[210]=e.int32,n[211]=e.int64,n[212]=o(1,e.ext),n[213]=o(2,e.ext),n[214]=o(4,e.ext),n[215]=o(8,e.ext),n[216]=o(16,e.ext),n[217]=a(e.uint8,e.str),n[218]=a(e.uint16,e.str),n[219]=a(e.uint32,e.str),n[220]=a(e.uint16,e.array),n[221]=a(e.uint32,e.array),n[222]=a(e.uint16,e.map),n[223]=a(e.uint32,e.map),t=224;t<=255;t++)n[t]=s(t-256);return n}function s(e){return function(){return e}}function a(e,t){return function(n){var i=e(n);return t(n,i)}}function o(e,t){return function(n){return t(n,e)}}t.getReadToken=function(e){var t=i.getReadFormat(e);return e&&e.useraw?function(e){var t,n=r(e).slice();for(n[217]=n[196],n[218]=n[197],n[219]=n[198],t=160;t<=191;t++)n[t]=o(t-160,e.bin);return n}(t):r(t)}},function(e,t,n){t.Encoder=s;var i=n(18),r=n(10).EncodeBuffer;function s(e){if(!(this instanceof s))return new s(e);r.call(this,e)}s.prototype=new r,i.mixin(s.prototype),s.prototype.encode=function(e){this.write(e),this.emit("data",this.read())},s.prototype.end=function(e){arguments.length&&this.encode(e),this.flush(),this.emit("end")}},function(e,t,n){t.Decoder=s;var i=n(18),r=n(16).DecodeBuffer;function s(e){if(!(this instanceof s))return new s(e);r.call(this,e)}s.prototype=new r,i.mixin(s.prototype),s.prototype.decode=function(e){arguments.length&&this.write(e),this.flush()},s.prototype.push=function(e){this.emit("data",e)},s.prototype.end=function(e){this.decode(e),this.emit("end")}},function(e,t,n){n(8),n(2),t.createCodec=n(1).createCodec},function(e,t,n){n(8),n(2),t.codec={preset:n(1).preset}},function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,l=[],h=!1,u=-1;function f(){h&&c&&(h=!1,c.length?l=c.concat(l):u=-1,l.length&&d())}function d(){if(!h){var e=o(f);h=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||h||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t){var n=Math.abs,i=(Math.cos,Math.sin,Math.pow,Math.sqrt),r=(n=Math.abs,Math.atan2),s=Math.PI;e.exports.randInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e.exports.randFloat=function(e,t){return Math.random()*(t-e+1)+e},e.exports.lerp=function(e,t,n){return e+(t-e)*n},e.exports.decel=function(e,t){return e>0?e=Math.max(0,e-t):e<0&&(e=Math.min(0,e+t)),e},e.exports.getDistance=function(e,t,n,r){return i((n-=e)*n+(r-=t)*r)},e.exports.getDirection=function(e,t,n,i){return r(t-i,e-n)},e.exports.getAngleDist=function(e,t){var i=n(t-e)%(2*s);return i>s?2*s-i:i},e.exports.isNumber=function(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)},e.exports.isString=function(e){return e&&"string"==typeof e},e.exports.kFormat=function(e){return e>999?(e/1e3).toFixed(1)+"k":e},e.exports.capitalizeFirst=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.exports.fixTo=function(e,t){return parseFloat(e.toFixed(t))},e.exports.sortByPoints=function(e,t){return parseFloat(t.points)-parseFloat(e.points)},e.exports.lineInRect=function(e,t,n,i,r,s,a,o){var c=r,l=a;if(r>a&&(c=a,l=r),l>n&&(l=n),c<e&&(c=e),c>l)return!1;var h=s,u=o,f=a-r;if(Math.abs(f)>1e-7){var d=(o-s)/f,p=s-d*r;h=d*c+p,u=d*l+p}if(h>u){var g=u;u=h,h=g}return u>i&&(u=i),h<t&&(h=t),!(h>u)},e.exports.containsPoint=function(e,t,n){var i=e.getBoundingClientRect(),r=i.left+window.scrollX,s=i.top+window.scrollY,a=i.width,o=i.height;return t>r&&t<r+a&&n>s&&n<s+o},e.exports.mousifyTouchEvent=function(e){var t=e.changedTouches[0];e.screenX=t.screenX,e.screenY=t.screenY,e.clientX=t.clientX,e.clientY=t.clientY,e.pageX=t.pageX,e.pageY=t.pageY},e.exports.hookTouchEvents=function(t,n){var i=!n,r=!1;function s(n){e.exports.mousifyTouchEvent(n),window.setUsingTouch(!0),i&&(n.preventDefault(),n.stopPropagation()),r&&(t.onclick&&t.onclick(n),t.onmouseout&&t.onmouseout(n),r=!1)}t.addEventListener("touchstart",e.exports.checkTrusted((function(n){e.exports.mousifyTouchEvent(n),window.setUsingTouch(!0),i&&(n.preventDefault(),n.stopPropagation()),t.onmouseover&&t.onmouseover(n),r=!0})),!1),t.addEventListener("touchmove",e.exports.checkTrusted((function(n){e.exports.mousifyTouchEvent(n),window.setUsingTouch(!0),i&&(n.preventDefault(),n.stopPropagation()),e.exports.containsPoint(t,n.pageX,n.pageY)?r||(t.onmouseover&&t.onmouseover(n),r=!0):r&&(t.onmouseout&&t.onmouseout(n),r=!1)})),!1),t.addEventListener("touchend",e.exports.checkTrusted(s),!1),t.addEventListener("touchcancel",e.exports.checkTrusted(s),!1),t.addEventListener("touchleave",e.exports.checkTrusted(s),!1)},e.exports.removeAllChildren=function(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)},e.exports.generateElement=function(t){var n=document.createElement(t.tag||"div");function i(e,i){t[e]&&(n[i]=t[e])}for(var r in i("text","textContent"),i("html","innerHTML"),i("class","className"),t){switch(r){case"tag":case"text":case"html":case"class":case"style":case"hookTouch":case"parent":case"children":continue}n[r]=t[r]}if(n.onclick&&(n.onclick=e.exports.checkTrusted(n.onclick)),n.onmouseover&&(n.onmouseover=e.exports.checkTrusted(n.onmouseover)),n.onmouseout&&(n.onmouseout=e.exports.checkTrusted(n.onmouseout)),t.style&&(n.style.cssText=t.style),t.hookTouch&&e.exports.hookTouchEvents(n),t.parent&&t.parent.appendChild(n),t.children)for(var s=0;s<t.children.length;s++)n.appendChild(t.children[s]);return n},e.exports.eventIsTrusted=function(e){return!e||"boolean"!=typeof e.isTrusted||e.isTrusted},e.exports.checkTrusted=function(t){return function(n){n&&n instanceof Event&&e.exports.eventIsTrusted(n)&&t(n)}},e.exports.randomString=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<e;i++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},e.exports.countInArray=function(e,t){for(var n=0,i=0;i<e.length;i++)e[i]===t&&n++;return n}},function(e,t){e.exports.AnimText=function(){this.init=function(e,t,n,i,r,s,a){this.x=e,this.y=t,this.color=a,this.scale=n,this.startScale=this.scale,this.maxScale=1.5*n,this.scaleSpeed=.7,this.speed=i,this.life=r,this.text=s},this.update=function(e){this.life&&(this.life-=e,this.y-=this.speed*e,this.scale+=this.scaleSpeed*e,this.scale>=this.maxScale?(this.scale=this.maxScale,this.scaleSpeed*=-1):this.scale<=this.startScale&&(this.scale=this.startScale,this.scaleSpeed=0),this.life<=0&&(this.life=0))},this.render=function(e,t,n){e.fillStyle=this.color,e.font=this.scale+"px Hammersmith One",e.fillText(this.text,this.x-t,this.y-n)}},e.exports.TextManager=function(){this.texts=[],this.update=function(e,t,n,i){t.textBaseline="middle",t.textAlign="center";for(var r=0;r<this.texts.length;++r)this.texts[r].life&&(this.texts[r].update(e),this.texts[r].render(t,n,i))},this.showText=function(t,n,i,r,s,a,o){for(var c,l=0;l<this.texts.length;++l)if(!this.texts[l].life){c=this.texts[l];break}c||(c=new e.exports.AnimText,this.texts.push(c)),c.init(t,n,i,r,s,a,o)}}},function(e,t){e.exports=function(e){this.sid=e,this.init=function(e,t,n,i,r,s,a){s=s||{},this.sentTo={},this.gridLocations=[],this.active=!0,this.doUpdate=s.doUpdate,this.x=e,this.y=t,this.dir=n,this.xWiggle=0,this.yWiggle=0,this.scale=i,this.type=r,this.id=s.id,this.owner=a,this.name=s.name,this.isItem=null!=this.id,this.group=s.group,this.health=s.health,this.layer=2,null!=this.group?this.layer=this.group.layer:0==this.type?this.layer=3:2==this.type?this.layer=0:4==this.type&&(this.layer=-1),this.colDiv=s.colDiv||1,this.blocker=s.blocker,this.ignoreCollision=s.ignoreCollision,this.dontGather=s.dontGather,this.hideFromEnemy=s.hideFromEnemy,this.friction=s.friction,this.projDmg=s.projDmg,this.dmg=s.dmg,this.pDmg=s.pDmg,this.pps=s.pps,this.zIndex=s.zIndex||0,this.turnSpeed=s.turnSpeed,this.req=s.req,this.trap=s.trap,this.healCol=s.healCol,this.teleport=s.teleport,this.boostSpeed=s.boostSpeed,this.projectile=s.projectile,this.shootRange=s.shootRange,this.shootRate=s.shootRate,this.shootCount=this.shootRate,this.spawnPoint=s.spawnPoint},this.changeHealth=function(e,t){return this.health+=e,this.health<=0},this.getScale=function(e,t){return e=e||1,this.scale*(this.isItem||2==this.type||3==this.type||4==this.type?1:.6*e)*(t?1:this.colDiv)},this.visibleToPlayer=function(e){return!this.hideFromEnemy||this.owner&&(this.owner==e||this.owner.team&&e.team==this.owner.team)},this.update=function(e){this.active&&(this.xWiggle&&(this.xWiggle*=Math.pow(.99,e)),this.yWiggle&&(this.yWiggle*=Math.pow(.99,e)),this.turnSpeed&&(this.dir+=this.turnSpeed*e))}}},function(e,t){e.exports.groups=[{id:0,name:"food",layer:0},{id:1,name:"walls",place:!0,limit:30,layer:0},{id:2,name:"spikes",place:!0,limit:15,layer:0},{id:3,name:"mill",place:!0,limit:7,layer:1},{id:4,name:"mine",place:!0,limit:1,layer:0},{id:5,name:"trap",place:!0,limit:6,layer:-1},{id:6,name:"booster",place:!0,limit:12,layer:-1},{id:7,name:"turret",place:!0,limit:2,layer:1},{id:8,name:"watchtower",place:!0,limit:12,layer:1},{id:9,name:"buff",place:!0,limit:4,layer:-1},{id:10,name:"spawn",place:!0,limit:1,layer:-1},{id:11,name:"sapling",place:!0,limit:2,layer:0},{id:12,name:"blocker",place:!0,limit:3,layer:-1},{id:13,name:"teleporter",place:!0,limit:2,layer:-1}],t.projectiles=[{indx:0,layer:0,src:"arrow_1",dmg:25,speed:1.6,scale:103,range:1e3},{indx:1,layer:1,dmg:25,scale:20},{indx:0,layer:0,src:"arrow_1",dmg:35,speed:2.5,scale:103,range:1200},{indx:0,layer:0,src:"arrow_1",dmg:30,speed:2,scale:103,range:1200},{indx:1,layer:1,dmg:16,scale:20},{indx:0,layer:0,src:"bullet_1",dmg:50,speed:3.6,scale:160,range:1400}],t.weapons=[{id:0,type:0,name:"tool hammer",desc:"tool for gathering all resources",src:"hammer_1",length:140,width:140,xOff:-3,yOff:18,dmg:25,range:65,gather:1,speed:300},{id:1,type:0,age:2,name:"hand axe",desc:"gathers resources at a higher rate",src:"axe_1",length:140,width:140,xOff:3,yOff:24,dmg:30,spdMult:1,range:70,gather:2,speed:400},{id:2,type:0,age:8,pre:1,name:"great axe",desc:"deal more damage and gather more resources",src:"great_axe_1",length:140,width:140,xOff:-8,yOff:25,dmg:35,spdMult:1,range:75,gather:4,speed:400},{id:3,type:0,age:2,name:"short sword",desc:"increased attack power but slower move speed",src:"sword_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:46,dmg:35,spdMult:.85,range:110,gather:1,speed:300},{id:4,type:0,age:8,pre:3,name:"katana",desc:"greater range and damage",src:"samurai_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:59,dmg:40,spdMult:.8,range:118,gather:1,speed:300},{id:5,type:0,age:2,name:"polearm",desc:"long range melee weapon",src:"spear_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:53,dmg:45,knock:.2,spdMult:.82,range:142,gather:1,speed:700},{id:6,type:0,age:2,name:"bat",desc:"fast long range melee weapon",src:"bat_1",iPad:1.3,length:110,width:180,xOff:-8,yOff:53,dmg:20,knock:.7,range:110,gather:1,speed:300},{id:7,type:0,age:2,name:"daggers",desc:"really fast short range weapon",src:"dagger_1",iPad:.8,length:110,width:110,xOff:18,yOff:0,dmg:20,knock:.1,range:65,gather:1,hitSlow:.1,spdMult:1.13,speed:100},{id:8,type:0,age:2,name:"stick",desc:"great for gathering but very weak",src:"stick_1",length:140,width:140,xOff:3,yOff:24,dmg:1,spdMult:1,range:70,gather:7,speed:400},{id:9,type:1,age:6,name:"hunting bow",desc:"bow used for ranged combat and hunting",src:"bow_1",req:["wood",4],length:120,width:120,xOff:-6,yOff:0,projectile:0,spdMult:.75,speed:600},{id:10,type:1,age:6,name:"great hammer",desc:"hammer used for destroying structures",src:"great_hammer_1",length:140,width:140,xOff:-9,yOff:25,dmg:10,spdMult:.88,range:75,sDmg:7.5,gather:1,speed:400},{id:11,type:1,age:6,name:"wooden shield",desc:"blocks projectiles and reduces melee damage",src:"shield_1",length:120,width:120,shield:.2,xOff:6,yOff:0,spdMult:.7},{id:12,type:1,age:8,pre:9,name:"crossbow",desc:"deals more damage and has greater range",src:"crossbow_1",req:["wood",5],aboveHand:!0,armS:.75,length:120,width:120,xOff:-4,yOff:0,projectile:2,spdMult:.7,speed:700},{id:13,type:1,age:9,pre:12,name:"repeater crossbow",desc:"high firerate crossbow with reduced damage",src:"crossbow_2",req:["wood",10],aboveHand:!0,armS:.75,length:120,width:120,xOff:-4,yOff:0,projectile:3,spdMult:.7,speed:230},{id:14,type:1,age:6,name:"mc grabby",desc:"steals resources from enemies",src:"grab_1",length:130,width:210,xOff:-8,yOff:53,dmg:0,steal:250,knock:.2,spdMult:1.05,range:125,gather:0,speed:700},{id:15,type:1,age:9,pre:12,name:"musket",desc:"slow firerate but high damage and range",src:"musket_1",req:["stone",10],aboveHand:!0,rec:.35,armS:.6,hndS:.3,hndD:1.6,length:205,width:205,xOff:25,yOff:0,projectile:5,hideProjectile:!0,spdMult:.6,speed:1500}],e.exports.list=[{group:e.exports.groups[0],name:"apple",desc:"restores 20 health when consumed",req:["food",10],consume:function(e){return e.changeHealth(20,e)},scale:22,holdOffset:15},{age:3,group:e.exports.groups[0],name:"cookie",desc:"restores 40 health when consumed",req:["food",15],consume:function(e){return e.changeHealth(40,e)},scale:27,holdOffset:15},{age:7,group:e.exports.groups[0],name:"cheese",desc:"restores 30 health and another 50 over 5 seconds",req:["food",25],consume:function(e){return!!(e.changeHealth(30,e)||e.health<100)&&(e.dmgOverTime.dmg=-10,e.dmgOverTime.doer=e,e.dmgOverTime.time=5,!0)},scale:27,holdOffset:15},{group:e.exports.groups[1],name:"wood wall",desc:"provides protection for your village",req:["wood",10],projDmg:!0,health:380,scale:50,holdOffset:20,placeOffset:-5},{age:3,group:e.exports.groups[1],name:"stone wall",desc:"provides improved protection for your village",req:["stone",25],health:900,scale:50,holdOffset:20,placeOffset:-5},{age:7,pre:1,group:e.exports.groups[1],name:"castle wall",desc:"provides powerful protection for your village",req:["stone",35],health:1500,scale:52,holdOffset:20,placeOffset:-5},{group:e.exports.groups[2],name:"spikes",desc:"damages enemies when they touch them",req:["wood",20,"stone",5],health:400,dmg:20,scale:49,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:5,group:e.exports.groups[2],name:"greater spikes",desc:"damages enemies when they touch them",req:["wood",30,"stone",10],health:500,dmg:35,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:9,pre:1,group:e.exports.groups[2],name:"poison spikes",desc:"poisons enemies when they touch them",req:["wood",35,"stone",15],health:600,dmg:30,pDmg:5,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:9,pre:2,group:e.exports.groups[2],name:"spinning spikes",desc:"damages enemies when they touch them",req:["wood",30,"stone",20],health:500,dmg:45,turnSpeed:.003,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{group:e.exports.groups[3],name:"windmill",desc:"generates gold over time",req:["wood",50,"stone",10],health:400,pps:1,turnSpeed:.0016,spritePadding:25,iconLineMult:12,scale:45,holdOffset:20,placeOffset:5},{age:5,pre:1,group:e.exports.groups[3],name:"faster windmill",desc:"generates more gold over time",req:["wood",60,"stone",20],health:500,pps:1.5,turnSpeed:.0025,spritePadding:25,iconLineMult:12,scale:47,holdOffset:20,placeOffset:5},{age:8,pre:1,group:e.exports.groups[3],name:"power mill",desc:"generates more gold over time",req:["wood",100,"stone",50],health:800,pps:2,turnSpeed:.005,spritePadding:25,iconLineMult:12,scale:47,holdOffset:20,placeOffset:5},{age:5,group:e.exports.groups[4],type:2,name:"mine",desc:"allows you to mine stone",req:["wood",20,"stone",100],iconLineMult:12,scale:65,holdOffset:20,placeOffset:0},{age:5,group:e.exports.groups[11],type:0,name:"sapling",desc:"allows you to farm wood",req:["wood",150],iconLineMult:12,colDiv:.5,scale:110,holdOffset:50,placeOffset:-15},{age:4,group:e.exports.groups[5],name:"pit trap",desc:"pit that traps enemies if they walk over it",req:["wood",30,"stone",30],trap:!0,ignoreCollision:!0,hideFromEnemy:!0,health:500,colDiv:.2,scale:50,holdOffset:20,placeOffset:-5},{age:4,group:e.exports.groups[6],name:"boost pad",desc:"provides boost when stepped on",req:["stone",20,"wood",5],ignoreCollision:!0,boostSpeed:1.5,health:150,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:7,group:e.exports.groups[7],doUpdate:!0,name:"turret",desc:"defensive structure that shoots at enemies",req:["wood",200,"stone",150],health:800,projectile:1,shootRange:700,shootRate:2200,scale:43,holdOffset:20,placeOffset:-5},{age:7,group:e.exports.groups[8],name:"platform",desc:"platform to shoot over walls and cross over water",req:["wood",20],ignoreCollision:!0,zIndex:1,health:300,scale:43,holdOffset:20,placeOffset:-5},{age:7,group:e.exports.groups[9],name:"healing pad",desc:"standing on it will slowly heal you",req:["wood",30,"food",10],ignoreCollision:!0,healCol:15,health:400,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:9,group:e.exports.groups[10],name:"spawn pad",desc:"you will spawn here when you die but it will dissapear",req:["wood",100,"stone",100],health:400,ignoreCollision:!0,spawnPoint:!0,scale:45,holdOffset:20,placeOffset:-5},{age:7,group:e.exports.groups[12],name:"blocker",desc:"blocks building in radius",req:["wood",30,"stone",25],ignoreCollision:!0,blocker:300,health:400,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:7,group:e.exports.groups[13],name:"teleporter",desc:"teleports you to a random point on the map",req:["wood",60,"stone",60],ignoreCollision:!0,teleport:!0,health:200,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5}];for(var n=0;n<e.exports.list.length;++n)e.exports.list[n].id=n,e.exports.list[n].pre&&(e.exports.list[n].pre=n-e.exports.list[n].pre)},function(e,t){e.exports={}},function(e,t){var n=Math.floor,i=Math.abs,r=Math.cos,s=Math.sin,a=(Math.pow,Math.sqrt);e.exports=function(e,t,o,c,l,h){var u,f;this.objects=t,this.grids={},this.updateObjects=[];var d=c.mapScale/c.colGrid;this.setObjectGrids=function(e){for(var t=Math.min(c.mapScale,Math.max(0,e.x)),n=Math.min(c.mapScale,Math.max(0,e.y)),i=0;i<c.colGrid;++i){u=i*d;for(var r=0;r<c.colGrid;++r)f=r*d,t+e.scale>=u&&t-e.scale<=u+d&&n+e.scale>=f&&n-e.scale<=f+d&&(this.grids[i+"_"+r]||(this.grids[i+"_"+r]=[]),this.grids[i+"_"+r].push(e),e.gridLocations.push(i+"_"+r))}},this.removeObjGrid=function(e){for(var t,n=0;n<e.gridLocations.length;++n)(t=this.grids[e.gridLocations[n]].indexOf(e))>=0&&this.grids[e.gridLocations[n]].splice(t,1)},this.disableObj=function(e){if(e.active=!1,h){e.owner&&e.pps&&(e.owner.pps-=e.pps),this.removeObjGrid(e);var t=this.updateObjects.indexOf(e);t>=0&&this.updateObjects.splice(t,1)}},this.hitObj=function(e,t){for(var n=0;n<l.length;++n)l[n].active&&(e.sentTo[l[n].id]&&(e.active?l[n].canSee(e)&&h.send(l[n].id,"8",o.fixTo(t,1),e.sid):h.send(l[n].id,"12",e.sid)),e.active||e.owner!=l[n]||l[n].changeItemCount(e.group.id,-1))};var p,g,m=[];this.getGridArrays=function(e,t,i){u=n(e/d),f=n(t/d),m.length=0;try{this.grids[u+"_"+f]&&m.push(this.grids[u+"_"+f]),e+i>=(u+1)*d&&((p=this.grids[u+1+"_"+f])&&m.push(p),f&&t-i<=f*d?(p=this.grids[u+1+"_"+(f-1)])&&m.push(p):t+i>=(f+1)*d&&(p=this.grids[u+1+"_"+(f+1)])&&m.push(p)),u&&e-i<=u*d&&((p=this.grids[u-1+"_"+f])&&m.push(p),f&&t-i<=f*d?(p=this.grids[u-1+"_"+(f-1)])&&m.push(p):t+i>=(f+1)*d&&(p=this.grids[u-1+"_"+(f+1)])&&m.push(p)),t+i>=(f+1)*d&&(p=this.grids[u+"_"+(f+1)])&&m.push(p),f&&t-i<=f*d&&(p=this.grids[u+"_"+(f-1)])&&m.push(p)}catch(e){}return m},this.add=function(n,i,r,s,a,o,c,l,u){g=null;for(var f=0;f<t.length;++f)if(t[f].sid==n){g=t[f];break}if(!g)for(f=0;f<t.length;++f)if(!t[f].active){g=t[f];break}g||(g=new e(n),t.push(g)),l&&(g.sid=n),g.init(i,r,s,a,o,c,u),h&&(this.setObjectGrids(g),g.doUpdate&&this.updateObjects.push(g))},this.disableBySid=function(e){for(var n=0;n<t.length;++n)if(t[n].sid==e){this.disableObj(t[n]);break}},this.removeAllItems=function(e,n){for(var i=0;i<t.length;++i)t[i].active&&t[i].owner&&t[i].owner.sid==e&&this.disableObj(t[i]);n&&n.broadcast("13",e)},this.fetchSpawnObj=function(e){for(var n=null,i=0;i<t.length;++i)if((g=t[i]).active&&g.owner&&g.owner.sid==e&&g.spawnPoint){n=[g.x,g.y],this.disableObj(g),h.broadcast("12",g.sid),g.owner&&g.owner.changeItemCount(g.group.id,-1);break}return n},this.checkItemLocation=function(e,n,i,r,s,a,l){for(var h=0;h<t.length;++h){var u=t[h].blocker?t[h].blocker:t[h].getScale(r,t[h].isItem);if(t[h].active&&o.getDistance(e,n,t[h].x,t[h].y)<i+u)return!1}return!(!a&&18!=s&&n>=c.mapScale/2-c.riverWidth/2&&n<=c.mapScale/2+c.riverWidth/2)},this.addProjectile=function(e,t,n,i,r){for(var s,a=items.projectiles[r],c=0;c<projectiles.length;++c)if(!projectiles[c].active){s=projectiles[c];break}s||(s=new Projectile(l,o),projectiles.push(s)),s.init(r,e,t,n,a.speed,i,a.scale)},this.checkCollision=function(e,t,n){n=n||1;var l=e.x-t.x,h=e.y-t.y,u=e.scale+t.scale;if(i(l)<=u||i(h)<=u){u=e.scale+(t.getScale?t.getScale():t.scale);var f=a(l*l+h*h)-u;if(f<=0){if(t.ignoreCollision)!t.trap||e.noTrap||t.owner==e||t.owner&&t.owner.team&&t.owner.team==e.team?t.boostSpeed?(e.xVel+=n*t.boostSpeed*(t.weightM||1)*r(t.dir),e.yVel+=n*t.boostSpeed*(t.weightM||1)*s(t.dir)):t.healCol?e.healCol=t.healCol:t.teleport&&(e.x=o.randInt(0,c.mapScale),e.y=o.randInt(0,c.mapScale)):(e.lockMove=!0,t.hideFromEnemy=!1);else{var d=o.getDirection(e.x,e.y,t.x,t.y);if(o.getDistance(e.x,e.y,t.x,t.y),t.isPlayer?(f=-1*f/2,e.x+=f*r(d),e.y+=f*s(d),t.x-=f*r(d),t.y-=f*s(d)):(e.x=t.x+u*r(d),e.y=t.y+u*s(d),e.xVel*=.75,e.yVel*=.75),t.dmg&&t.owner!=e&&(!t.owner||!t.owner.team||t.owner.team!=e.team)){e.changeHealth(-t.dmg,t.owner,t);var p=1.5*(t.weightM||1);e.xVel+=p*r(d),e.yVel+=p*s(d),!t.pDmg||e.skin&&e.skin.poisonRes||(e.dmgOverTime.dmg=t.pDmg,e.dmgOverTime.time=5,e.dmgOverTime.doer=t.owner),e.colDmg&&t.health&&(t.changeHealth(-e.colDmg)&&this.disableObj(t),this.hitObj(t,o.getDirection(e.x,e.y,t.x,t.y)))}}return t.zIndex>e.zIndex&&(e.zIndex=t.zIndex),!0}}return!1}}},function(e,t,n){var i=new(n(49));i.addWords("jew","black","baby","child","white","porn","pedo","trump","clinton","hitler","nazi","gay","pride","sex","pleasure","touch","poo","kids","rape","white power","nigga","nig nog","doggy","rapist","boner","nigger","nigg","finger","nogger","nagger","nig","fag","gai","pole","stripper","penis","vagina","pussy","nazi","hitler","stalin","burn","chamber","cock","peen","dick","spick","nieger","die","satan","n|ig","nlg","cunt","c0ck","fag","lick","condom","anal","shit","phile","little","kids","free KR","tiny","sidney","ass","kill",".io","(dot)","[dot]","mini","whiore","whore","faggot","github","1337","666","satan","senpa","discord","d1scord","mistik",".io","senpa.io","sidney","sid","senpaio","vries","asa");var r=Math.abs,s=Math.cos,a=Math.sin,o=Math.pow,c=Math.sqrt;e.exports=function(e,t,n,l,h,u,f,d,p,g,m,y,k,v){this.id=e,this.sid=t,this.tmpScore=0,this.team=null,this.skinIndex=0,this.tailIndex=0,this.hitTime=0,this.tails={};for(var w=0;w<m.length;++w)m[w].price<=0&&(this.tails[m[w].id]=1);for(this.skins={},w=0;w<g.length;++w)g[w].price<=0&&(this.skins[g[w].id]=1);this.points=0,this.dt=0,this.hidden=!1,this.itemCounts={},this.isPlayer=!0,this.pps=0,this.moveDir=void 0,this.skinRot=0,this.lastPing=0,this.iconIndex=0,this.skinColor=0,this.spawn=function(e){this.active=!0,this.alive=!0,this.lockMove=!1,this.lockDir=!1,this.minimapCounter=0,this.chatCountdown=0,this.shameCount=0,this.shameTimer=0,this.sentTo={},this.gathering=0,this.autoGather=0,this.animTime=0,this.animSpeed=0,this.mouseState=0,this.buildIndex=-1,this.weaponIndex=0,this.dmgOverTime={},this.noMovTimer=0,this.maxXP=300,this.XP=0,this.age=1,this.kills=0,this.upgrAge=2,this.upgradePoints=0,this.x=0,this.y=0,this.zIndex=0,this.xVel=0,this.yVel=0,this.slowMult=1,this.dir=0,this.dirPlus=0,this.targetDir=0,this.targetAngle=0,this.maxHealth=100,this.health=this.maxHealth,this.scale=n.playerScale,this.speed=n.playerSpeed,this.resetMoveDir(),this.resetResources(e),this.items=[0,3,6,10],this.weapons=[0],this.shootCount=0,this.weaponXP=[],this.reloads={}},this.resetMoveDir=function(){this.moveDir=void 0},this.resetResources=function(e){for(var t=0;t<n.resourceTypes.length;++t)this[n.resourceTypes[t]]=e?100:0},this.addItem=function(e){var t=p.list[e];if(t){for(var n=0;n<this.items.length;++n)if(p.list[this.items[n]].group==t.group)return this.buildIndex==this.items[n]&&(this.buildIndex=e),this.items[n]=e,!0;return this.items.push(e),!0}return!1},this.setUserData=function(e){if(e){this.name="unknown";var t=e.name+"",r=!1,s=(t=(t=(t=(t=t.slice(0,n.maxNameLength)).replace(/[^\w:\(\)\/? -]+/gim," ")).replace(/[^\x00-\x7F]/g," ")).trim()).toLowerCase().replace(/\s/g,"").replace(/1/g,"i").replace(/0/g,"o").replace(/5/g,"s");for(var a of i.list)if(-1!=s.indexOf(a)){r=!0;break}t.length>0&&!r&&(this.name=t),this.skinColor=0,n.skinColors[e.skin]&&(this.skinColor=e.skin)}},this.getData=function(){return[this.id,this.sid,this.name,l.fixTo(this.x,2),l.fixTo(this.y,2),l.fixTo(this.dir,3),this.health,this.maxHealth,this.scale,this.skinColor]},this.setData=function(e){this.id=e[0],this.sid=e[1],this.name=e[2],this.x=e[3],this.y=e[4],this.dir=e[5],this.health=e[6],this.maxHealth=e[7],this.scale=e[8],this.skinColor=e[9]};var b=0;this.update=function(e){if(this.alive){if(this.shameTimer>0&&(this.shameTimer-=e,this.shameTimer<=0&&(this.shameTimer=0,this.shameCount=0)),(b-=e)<=0){var t=(this.skin&&this.skin.healthRegen?this.skin.healthRegen:0)+(this.tail&&this.tail.healthRegen?this.tail.healthRegen:0);t&&this.changeHealth(t,this),this.dmgOverTime.dmg&&(this.changeHealth(-this.dmgOverTime.dmg,this.dmgOverTime.doer),this.dmgOverTime.time-=1,this.dmgOverTime.time<=0&&(this.dmgOverTime.dmg=0)),this.healCol&&this.changeHealth(this.healCol,this),b=1e3}if(this.alive){if(this.slowMult<1&&(this.slowMult+=8e-4*e,this.slowMult>1&&(this.slowMult=1)),this.noMovTimer+=e,(this.xVel||this.yVel)&&(this.noMovTimer=0),this.lockMove)this.xVel=0,this.yVel=0;else{var i=(this.buildIndex>=0?.5:1)*(p.weapons[this.weaponIndex].spdMult||1)*(this.skin&&this.skin.spdMult||1)*(this.tail&&this.tail.spdMult||1)*(this.y<=n.snowBiomeTop?this.skin&&this.skin.coldM?1:n.snowSpeed:1)*this.slowMult;!this.zIndex&&this.y>=n.mapScale/2-n.riverWidth/2&&this.y<=n.mapScale/2+n.riverWidth/2&&(this.skin&&this.skin.watrImm?(i*=.75,this.xVel+=.4*n.waterCurrent*e):(i*=.33,this.xVel+=n.waterCurrent*e));var r=null!=this.moveDir?s(this.moveDir):0,d=null!=this.moveDir?a(this.moveDir):0,g=c(r*r+d*d);0!=g&&(r/=g,d/=g),r&&(this.xVel+=r*this.speed*i*e),d&&(this.yVel+=d*this.speed*i*e)}var m;this.zIndex=0,this.lockMove=!1,this.healCol=0;for(var y=l.getDistance(0,0,this.xVel*e,this.yVel*e),k=Math.min(4,Math.max(1,Math.round(y/40))),v=1/k,w=0;w<k;++w){this.xVel&&(this.x+=this.xVel*e*v),this.yVel&&(this.y+=this.yVel*e*v),m=u.getGridArrays(this.x,this.y,this.scale);for(var x=0;x<m.length;++x)for(var S=0;S<m[x].length;++S)m[x][S].active&&u.checkCollision(this,m[x][S],v)}for(w=(I=f.indexOf(this))+1;w<f.length;++w)f[w]!=this&&f[w].alive&&u.checkCollision(this,f[w]);if(this.xVel&&(this.xVel*=o(n.playerDecel,e),this.xVel<=.01&&this.xVel>=-.01&&(this.xVel=0)),this.yVel&&(this.yVel*=o(n.playerDecel,e),this.yVel<=.01&&this.yVel>=-.01&&(this.yVel=0)),this.x-this.scale<0?this.x=this.scale:this.x+this.scale>n.mapScale&&(this.x=n.mapScale-this.scale),this.y-this.scale<0?this.y=this.scale:this.y+this.scale>n.mapScale&&(this.y=n.mapScale-this.scale),this.buildIndex<0)if(this.reloads[this.weaponIndex]>0)this.reloads[this.weaponIndex]-=e,this.gathering=this.mouseState;else if(this.gathering||this.autoGather){var T=!0;if(null!=p.weapons[this.weaponIndex].gather)this.gather(f);else if(null!=p.weapons[this.weaponIndex].projectile&&this.hasRes(p.weapons[this.weaponIndex],this.skin?this.skin.projCost:0)){this.useRes(p.weapons[this.weaponIndex],this.skin?this.skin.projCost:0),this.noMovTimer=0;var I=p.weapons[this.weaponIndex].projectile,E=2*this.scale,M=this.skin&&this.skin.aMlt?this.skin.aMlt:1;p.weapons[this.weaponIndex].rec&&(this.xVel-=p.weapons[this.weaponIndex].rec*s(this.dir),this.yVel-=p.weapons[this.weaponIndex].rec*a(this.dir)),h.addProjectile(this.x+E*s(this.dir),this.y+E*a(this.dir),this.dir,p.projectiles[I].range*M,p.projectiles[I].speed*M,I,this,null,this.zIndex)}else T=!1;this.gathering=this.mouseState,T&&(this.reloads[this.weaponIndex]=p.weapons[this.weaponIndex].speed*(this.skin&&this.skin.atkSpd||1))}}}},this.addWeaponXP=function(e){this.weaponXP[this.weaponIndex]||(this.weaponXP[this.weaponIndex]=0),this.weaponXP[this.weaponIndex]+=e},this.earnXP=function(e){this.age<n.maxAge&&(this.XP+=e,this.XP>=this.maxXP?(this.age<n.maxAge?(this.age++,this.XP=0,this.maxXP*=1.2):this.XP=this.maxXP,this.upgradePoints++,y.send(this.id,"16",this.upgradePoints,this.upgrAge),y.send(this.id,"15",this.XP,l.fixTo(this.maxXP,1),this.age)):y.send(this.id,"15",this.XP))},this.changeHealth=function(e,t){if(e>0&&this.health>=this.maxHealth)return!1;e<0&&this.skin&&(e*=this.skin.dmgMult||1),e<0&&this.tail&&(e*=this.tail.dmgMult||1),e<0&&(this.hitTime=Date.now()),this.health+=e,this.health>this.maxHealth&&(e-=this.health-this.maxHealth,this.health=this.maxHealth),this.health<=0&&this.kill(t);for(var n=0;n<f.length;++n)this.sentTo[f[n].id]&&y.send(f[n].id,"h",this.sid,Math.round(this.health));return!t||!t.canSee(this)||t==this&&e<0||y.send(t.id,"t",Math.round(this.x),Math.round(this.y),Math.round(-e),1),!0},this.kill=function(e){e&&e.alive&&(e.kills++,e.skin&&e.skin.goldSteal?k(e,Math.round(this.points/2)):k(e,Math.round(100*this.age*(e.skin&&e.skin.kScrM?e.skin.kScrM:1))),y.send(e.id,"9","kills",e.kills,1)),this.alive=!1,y.send(this.id,"11"),v()},this.addResource=function(e,t,i){!i&&t>0&&this.addWeaponXP(t),3==e?k(this,t,!0):(this[n.resourceTypes[e]]+=t,y.send(this.id,"9",n.resourceTypes[e],this[n.resourceTypes[e]],1))},this.changeItemCount=function(e,t){this.itemCounts[e]=this.itemCounts[e]||0,this.itemCounts[e]+=t,y.send(this.id,"14",e,this.itemCounts[e])},this.buildItem=function(e){var t=this.scale+e.scale+(e.placeOffset||0),n=this.x+t*s(this.dir),i=this.y+t*a(this.dir);if(this.canBuild(e)&&!(e.consume&&this.skin&&this.skin.noEat)&&(e.consume||u.checkItemLocation(n,i,e.scale,.6,e.id,!1,this))){var r=!1;if(e.consume){if(this.hitTime){var o=Date.now()-this.hitTime;this.hitTime=0,o<=120?(this.shameCount++,this.shameCount>=8&&(this.shameTimer=3e4,this.shameCount=0)):(this.shameCount-=2,this.shameCount<=0&&(this.shameCount=0))}this.shameTimer<=0&&(r=e.consume(this))}else r=!0,e.group.limit&&this.changeItemCount(e.group.id,1),e.pps&&(this.pps+=e.pps),u.add(u.objects.length,n,i,this.dir,e.scale,e.type,e,!1,this);r&&(this.useRes(e),this.buildIndex=-1)}},this.hasRes=function(e,t){for(var n=0;n<e.req.length;){if(this[e.req[n]]<Math.round(e.req[n+1]*(t||1)))return!1;n+=2}return!0},this.useRes=function(e,t){if(!n.inSandbox)for(var i=0;i<e.req.length;)this.addResource(n.resourceTypes.indexOf(e.req[i]),-Math.round(e.req[i+1]*(t||1))),i+=2},this.canBuild=function(e){return!!n.inSandbox||!(e.group.limit&&this.itemCounts[e.group.id]>=e.group.limit)&&this.hasRes(e)},this.gather=function(){this.noMovTimer=0,this.slowMult-=p.weapons[this.weaponIndex].hitSlow||.3,this.slowMult<0&&(this.slowMult=0);for(var e,t,i,r=n.fetchVariant(this),o=r.poison,c=r.val,h={},g=u.getGridArrays(this.x,this.y,p.weapons[this.weaponIndex].range),m=0;m<g.length;++m)for(var y=0;y<g[m].length;++y)if((t=g[m][y]).active&&!t.dontGather&&!h[t.sid]&&t.visibleToPlayer(this)&&l.getDistance(this.x,this.y,t.x,t.y)-t.scale<=p.weapons[this.weaponIndex].range&&(e=l.getDirection(t.x,t.y,this.x,this.y),l.getAngleDist(e,this.dir)<=n.gatherAngle)){if(h[t.sid]=1,t.health){if(t.changeHealth(-p.weapons[this.weaponIndex].dmg*c*(p.weapons[this.weaponIndex].sDmg||1)*(this.skin&&this.skin.bDmg?this.skin.bDmg:1),this)){for(var k=0;k<t.req.length;)this.addResource(n.resourceTypes.indexOf(t.req[k]),t.req[k+1]),k+=2;u.disableObj(t)}}else{this.earnXP(4*p.weapons[this.weaponIndex].gather);var v=p.weapons[this.weaponIndex].gather+(3==t.type?4:0);this.skin&&this.skin.extraGold&&this.addResource(3,1),this.addResource(t.type,v)}i=!0,u.hitObj(t,e)}for(y=0;y<f.length+d.length;++y)if((t=f[y]||d[y-f.length])!=this&&t.alive&&(!t.team||t.team!=this.team)&&l.getDistance(this.x,this.y,t.x,t.y)-1.8*t.scale<=p.weapons[this.weaponIndex].range&&(e=l.getDirection(t.x,t.y,this.x,this.y),l.getAngleDist(e,this.dir)<=n.gatherAngle)){var w=p.weapons[this.weaponIndex].steal;w&&t.addResource&&(w=Math.min(t.points||0,w),this.addResource(3,w),t.addResource(3,-w));var b=c;null!=t.weaponIndex&&p.weapons[t.weaponIndex].shield&&l.getAngleDist(e+Math.PI,t.dir)<=n.shieldAngle&&(b=p.weapons[t.weaponIndex].shield);var x=p.weapons[this.weaponIndex].dmg*(this.skin&&this.skin.dmgMultO?this.skin.dmgMultO:1)*(this.tail&&this.tail.dmgMultO?this.tail.dmgMultO:1),S=.3*(t.weightM||1)+(p.weapons[this.weaponIndex].knock||0);t.xVel+=S*s(e),t.yVel+=S*a(e),this.skin&&this.skin.healD&&this.changeHealth(x*b*this.skin.healD,this),this.tail&&this.tail.healD&&this.changeHealth(x*b*this.tail.healD,this),t.skin&&t.skin.dmg&&1==b&&this.changeHealth(-x*t.skin.dmg,t),t.tail&&t.tail.dmg&&1==b&&this.changeHealth(-x*t.tail.dmg,t),!(t.dmgOverTime&&this.skin&&this.skin.poisonDmg)||t.skin&&t.skin.poisonRes||(t.dmgOverTime.dmg=this.skin.poisonDmg,t.dmgOverTime.time=this.skin.poisonTime||1,t.dmgOverTime.doer=this),!t.dmgOverTime||!o||t.skin&&t.skin.poisonRes||(t.dmgOverTime.dmg=5,t.dmgOverTime.time=5,t.dmgOverTime.doer=this),t.skin&&t.skin.dmgK&&(this.xVel-=t.skin.dmgK*s(e),this.yVel-=t.skin.dmgK*a(e)),t.changeHealth(-x*b,this,this)}this.sendAnimation(i?1:0)},this.sendAnimation=function(e){for(var t=0;t<f.length;++t)this.sentTo[f[t].id]&&this.canSee(f[t])&&y.send(f[t].id,"7",this.sid,e?1:0,this.weaponIndex)};var x=0,S=0;this.animate=function(e){this.animTime>0&&(this.animTime-=e,this.animTime<=0?(this.animTime=0,this.dirPlus=0,x=0,S=0):0==S?(x+=e/(this.animSpeed*n.hitReturnRatio),this.dirPlus=l.lerp(0,this.targetAngle,Math.min(1,x)),x>=1&&(x=1,S=1)):(x-=e/(this.animSpeed*(1-n.hitReturnRatio)),this.dirPlus=l.lerp(0,this.targetAngle,Math.max(0,x))))},this.startAnim=function(e,t){this.animTime=this.animSpeed=p.weapons[t].speed,this.targetAngle=e?-n.hitAngle:-Math.PI,x=0,S=0},this.canSee=function(e){if(!e)return!1;if(e.skin&&e.skin.invisTimer&&e.noMovTimer>=e.skin.invisTimer)return!1;var t=r(e.x-this.x)-e.scale,i=r(e.y-this.y)-e.scale;return t<=n.maxScreenWidth/2*1.3&&i<=n.maxScreenHeight/2*1.3}}},function(e,t,n){const i=n(50).words,r=n(51).array;e.exports=class{constructor(e={}){Object.assign(this,{list:e.emptyList&&[]||Array.prototype.concat.apply(i,[r,e.list||[]]),exclude:e.exclude||[],placeHolder:e.placeHolder||"*",regex:e.regex||/[^a-zA-Z0-9|\$|\@]|\^/g,replaceRegex:e.replaceRegex||/\w/g})}isProfane(e){return this.list.filter(t=>{const n=new RegExp(`\\b${t.replace(/(\W)/g,"\\$1")}\\b`,"gi");return!this.exclude.includes(t.toLowerCase())&&n.test(e)}).length>0||!1}replaceWord(e){return e.replace(this.regex,"").replace(this.replaceRegex,this.placeHolder)}clean(e){return e.split(/\b/).map(e=>this.isProfane(e)?this.replaceWord(e):e).join("")}addWords(){let e=Array.from(arguments);this.list.push(...e),e.map(e=>e.toLowerCase()).forEach(e=>{this.exclude.includes(e)&&this.exclude.splice(this.exclude.indexOf(e),1)})}removeWords(){this.exclude.push(...Array.from(arguments).map(e=>e.toLowerCase()))}}},function(e){e.exports={words:["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagg0t","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","queer","queers","queerz","qweers","qweerz","qweir","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","lesbian","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"]}},function(e,t,n){e.exports={object:n(52),array:n(53),regex:n(54)}},function(e,t){e.exports={"4r5e":1,"5h1t":1,"5hit":1,a55:1,anal:1,anus:1,ar5e:1,arrse:1,arse:1,ass:1,"ass-fucker":1,asses:1,assfucker:1,assfukka:1,asshole:1,assholes:1,asswhole:1,a_s_s:1,"b!tch":1,b00bs:1,b17ch:1,b1tch:1,ballbag:1,balls:1,ballsack:1,bastard:1,beastial:1,beastiality:1,bellend:1,bestial:1,bestiality:1,"bi+ch":1,biatch:1,bitch:1,bitcher:1,bitchers:1,bitches:1,bitchin:1,bitching:1,bloody:1,"blow job":1,blowjob:1,blowjobs:1,boiolas:1,bollock:1,bollok:1,boner:1,boob:1,boobs:1,booobs:1,boooobs:1,booooobs:1,booooooobs:1,breasts:1,buceta:1,bugger:1,bum:1,"bunny fucker":1,butt:1,butthole:1,buttmuch:1,buttplug:1,c0ck:1,c0cksucker:1,"carpet muncher":1,cawk:1,chink:1,cipa:1,cl1t:1,clit:1,clitoris:1,clits:1,cnut:1,cock:1,"cock-sucker":1,cockface:1,cockhead:1,cockmunch:1,cockmuncher:1,cocks:1,cocksuck:1,cocksucked:1,cocksucker:1,cocksucking:1,cocksucks:1,cocksuka:1,cocksukka:1,cok:1,cokmuncher:1,coksucka:1,coon:1,cox:1,crap:1,cum:1,cummer:1,cumming:1,cums:1,cumshot:1,cunilingus:1,cunillingus:1,cunnilingus:1,cunt:1,cuntlick:1,cuntlicker:1,cuntlicking:1,cunts:1,cyalis:1,cyberfuc:1,cyberfuck:1,cyberfucked:1,cyberfucker:1,cyberfuckers:1,cyberfucking:1,d1ck:1,damn:1,dick:1,dickhead:1,dildo:1,dildos:1,dink:1,dinks:1,dirsa:1,dlck:1,"dog-fucker":1,doggin:1,dogging:1,donkeyribber:1,doosh:1,duche:1,dyke:1,ejaculate:1,ejaculated:1,ejaculates:1,ejaculating:1,ejaculatings:1,ejaculation:1,ejakulate:1,"f u c k":1,"f u c k e r":1,f4nny:1,fag:1,fagging:1,faggitt:1,faggot:1,faggs:1,fagot:1,fagots:1,fags:1,fanny:1,fannyflaps:1,fannyfucker:1,fanyy:1,fatass:1,fcuk:1,fcuker:1,fcuking:1,feck:1,fecker:1,felching:1,fellate:1,fellatio:1,fingerfuck:1,fingerfucked:1,fingerfucker:1,fingerfuckers:1,fingerfucking:1,fingerfucks:1,fistfuck:1,fistfucked:1,fistfucker:1,fistfuckers:1,fistfucking:1,fistfuckings:1,fistfucks:1,flange:1,fook:1,fooker:1,fuck:1,fucka:1,fucked:1,fucker:1,fuckers:1,fuckhead:1,fuckheads:1,fuckin:1,fucking:1,fuckings:1,fuckingshitmotherfucker:1,fuckme:1,fucks:1,fuckwhit:1,fuckwit:1,"fudge packer":1,fudgepacker:1,fuk:1,fuker:1,fukker:1,fukkin:1,fuks:1,fukwhit:1,fukwit:1,fux:1,fux0r:1,f_u_c_k:1,gangbang:1,gangbanged:1,gangbangs:1,gaylord:1,gaysex:1,goatse:1,God:1,"god-dam":1,"god-damned":1,goddamn:1,goddamned:1,hardcoresex:1,hell:1,heshe:1,hoar:1,hoare:1,hoer:1,homo:1,hore:1,horniest:1,horny:1,hotsex:1,"jack-off":1,jackoff:1,jap:1,"jerk-off":1,jism:1,jiz:1,jizm:1,jizz:1,kawk:1,knob:1,knobead:1,knobed:1,knobend:1,knobhead:1,knobjocky:1,knobjokey:1,kock:1,kondum:1,kondums:1,kum:1,kummer:1,kumming:1,kums:1,kunilingus:1,"l3i+ch":1,l3itch:1,labia:1,lust:1,lusting:1,m0f0:1,m0fo:1,m45terbate:1,ma5terb8:1,ma5terbate:1,masochist:1,"master-bate":1,masterb8:1,"masterbat*":1,masterbat3:1,masterbate:1,masterbation:1,masterbations:1,masturbate:1,"mo-fo":1,mof0:1,mofo:1,mothafuck:1,mothafucka:1,mothafuckas:1,mothafuckaz:1,mothafucked:1,mothafucker:1,mothafuckers:1,mothafuckin:1,mothafucking:1,mothafuckings:1,mothafucks:1,"mother fucker":1,motherfuck:1,motherfucked:1,motherfucker:1,motherfuckers:1,motherfuckin:1,motherfucking:1,motherfuckings:1,motherfuckka:1,motherfucks:1,muff:1,mutha:1,muthafecker:1,muthafuckker:1,muther:1,mutherfucker:1,n1gga:1,n1gger:1,nazi:1,nigg3r:1,nigg4h:1,nigga:1,niggah:1,niggas:1,niggaz:1,nigger:1,niggers:1,nob:1,"nob jokey":1,nobhead:1,nobjocky:1,nobjokey:1,numbnuts:1,nutsack:1,orgasim:1,orgasims:1,orgasm:1,orgasms:1,p0rn:1,pawn:1,pecker:1,penis:1,penisfucker:1,phonesex:1,phuck:1,phuk:1,phuked:1,phuking:1,phukked:1,phukking:1,phuks:1,phuq:1,pigfucker:1,pimpis:1,piss:1,pissed:1,pisser:1,pissers:1,pisses:1,pissflaps:1,pissin:1,pissing:1,pissoff:1,poop:1,porn:1,porno:1,pornography:1,pornos:1,prick:1,pricks:1,pron:1,pube:1,pusse:1,pussi:1,pussies:1,pussy:1,pussys:1,rectum:1,retard:1,rimjaw:1,rimming:1,"s hit":1,"s.o.b.":1,sadist:1,schlong:1,screwing:1,scroat:1,scrote:1,scrotum:1,semen:1,sex:1,"sh!+":1,"sh!t":1,sh1t:1,shag:1,shagger:1,shaggin:1,shagging:1,shemale:1,"shi+":1,shit:1,shitdick:1,shite:1,shited:1,shitey:1,shitfuck:1,shitfull:1,shithead:1,shiting:1,shitings:1,shits:1,shitted:1,shitter:1,shitters:1,shitting:1,shittings:1,shitty:1,skank:1,slut:1,sluts:1,smegma:1,smut:1,snatch:1,"son-of-a-bitch":1,spac:1,spunk:1,s_h_i_t:1,t1tt1e5:1,t1tties:1,teets:1,teez:1,testical:1,testicle:1,tit:1,titfuck:1,tits:1,titt:1,tittie5:1,tittiefucker:1,titties:1,tittyfuck:1,tittywank:1,titwank:1,tosser:1,turd:1,tw4t:1,twat:1,twathead:1,twatty:1,twunt:1,twunter:1,v14gra:1,v1gra:1,vagina:1,viagra:1,vulva:1,w00se:1,wang:1,wank:1,wanker:1,wanky:1,whoar:1,whore:1,willies:1,willy:1,xrated:1,xxx:1}},function(e,t){e.exports=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"]},function(e,t){e.exports=/\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi},function(e,t){e.exports.hats=[{id:45,name:"Shame!",dontSell:!0,price:0,scale:120,desc:"hacks are for losers"},{id:51,name:"Moo Cap",price:0,scale:120,desc:"coolest mooer around"},{id:50,name:"Apple Cap",price:0,scale:120,desc:"apple farms remembers"},{id:28,name:"Moo Head",price:0,scale:120,desc:"no effect"},{id:29,name:"Pig Head",price:0,scale:120,desc:"no effect"},{id:30,name:"Fluff Head",price:0,scale:120,desc:"no effect"},{id:36,name:"Pandou Head",price:0,scale:120,desc:"no effect"},{id:37,name:"Bear Head",price:0,scale:120,desc:"no effect"},{id:38,name:"Monkey Head",price:0,scale:120,desc:"no effect"},{id:44,name:"Polar Head",price:0,scale:120,desc:"no effect"},{id:35,name:"Fez Hat",price:0,scale:120,desc:"no effect"},{id:42,name:"Enigma Hat",price:0,scale:120,desc:"join the enigma army"},{id:43,name:"Blitz Hat",price:0,scale:120,desc:"hey everybody i'm blitz"},{id:49,name:"Bob XIII Hat",price:0,scale:120,desc:"like and subscribe"},{id:57,name:"Pumpkin",price:50,scale:120,desc:"Spooooky"},{id:8,name:"Bummle Hat",price:100,scale:120,desc:"no effect"},{id:2,name:"Straw Hat",price:500,scale:120,desc:"no effect"},{id:15,name:"Winter Cap",price:600,scale:120,desc:"allows you to move at normal speed in snow",coldM:1},{id:5,name:"Cowboy Hat",price:1e3,scale:120,desc:"no effect"},{id:4,name:"Ranger Hat",price:2e3,scale:120,desc:"no effect"},{id:18,name:"Explorer Hat",price:2e3,scale:120,desc:"no effect"},{id:31,name:"Flipper Hat",price:2500,scale:120,desc:"have more control while in water",watrImm:!0},{id:1,name:"Marksman Cap",price:3e3,scale:120,desc:"increases arrow speed and range",aMlt:1.3},{id:10,name:"Bush Gear",price:3e3,scale:160,desc:"allows you to disguise yourself as a bush"},{id:48,name:"Halo",price:3e3,scale:120,desc:"no effect"},{id:6,name:"Soldier Helmet",price:4e3,scale:120,desc:"reduces damage taken but slows movement",spdMult:.94,dmgMult:.75},{id:23,name:"Anti Venom Gear",price:4e3,scale:120,desc:"makes you immune to poison",poisonRes:1},{id:13,name:"Medic Gear",price:5e3,scale:110,desc:"slowly regenerates health over time",healthRegen:3},{id:9,name:"Miners Helmet",price:5e3,scale:120,desc:"earn 1 extra gold per resource",extraGold:1},{id:32,name:"Musketeer Hat",price:5e3,scale:120,desc:"reduces cost of projectiles",projCost:.5},{id:7,name:"Bull Helmet",price:6e3,scale:120,desc:"increases damage done but drains health",healthRegen:-5,dmgMultO:1.5,spdMult:.96},{id:22,name:"Emp Helmet",price:6e3,scale:120,desc:"turrets won't attack but you move slower",antiTurret:1,spdMult:.7},{id:12,name:"Booster Hat",price:6e3,scale:120,desc:"increases your movement speed",spdMult:1.16},{id:26,name:"Barbarian Armor",price:8e3,scale:120,desc:"knocks back enemies that attack you",dmgK:.6},{id:21,name:"Plague Mask",price:1e4,scale:120,desc:"melee attacks deal poison damage",poisonDmg:5,poisonTime:6},{id:46,name:"Bull Mask",price:1e4,scale:120,desc:"bulls won't target you unless you attack them",bullRepel:1},{id:14,name:"Windmill Hat",topSprite:!0,price:1e4,scale:120,desc:"generates points while worn",pps:1.5},{id:11,name:"Spike Gear",topSprite:!0,price:1e4,scale:120,desc:"deal damage to players that damage you",dmg:.45},{id:53,name:"Turret Gear",topSprite:!0,price:1e4,scale:120,desc:"you become a walking turret",turret:{proj:1,range:700,rate:2500},spdMult:.7},{id:20,name:"Samurai Armor",price:12e3,scale:120,desc:"increased attack speed and fire rate",atkSpd:.78},{id:58,name:"Dark Knight",price:12e3,scale:120,desc:"restores health when you deal damage",healD:.4},{id:27,name:"Scavenger Gear",price:15e3,scale:120,desc:"earn double points for each kill",kScrM:2},{id:40,name:"Tank Gear",price:15e3,scale:120,desc:"increased damage to buildings but slower movement",spdMult:.3,bDmg:3.3},{id:52,name:"Thief Gear",price:15e3,scale:120,desc:"steal half of a players gold when you kill them",goldSteal:.5},{id:55,name:"Bloodthirster",price:2e4,scale:120,desc:"Restore Health when dealing damage. And increased damage",healD:.25,dmgMultO:1.2},{id:56,name:"Assassin Gear",price:2e4,scale:120,desc:"Go invisible when not moving. Can't eat. Increased speed",noEat:!0,spdMult:1.1,invisTimer:1e3}],e.exports.accessories=[{id:12,name:"Snowball",price:1e3,scale:105,xOff:18,desc:"no effect"},{id:9,name:"Tree Cape",price:1e3,scale:90,desc:"no effect"},{id:10,name:"Stone Cape",price:1e3,scale:90,desc:"no effect"},{id:3,name:"Cookie Cape",price:1500,scale:90,desc:"no effect"},{id:8,name:"Cow Cape",price:2e3,scale:90,desc:"no effect"},{id:11,name:"Monkey Tail",price:2e3,scale:97,xOff:25,desc:"Super speed but reduced damage",spdMult:1.35,dmgMultO:.2},{id:17,name:"Apple Basket",price:3e3,scale:80,xOff:12,desc:"slowly regenerates health over time",healthRegen:1},{id:6,name:"Winter Cape",price:3e3,scale:90,desc:"no effect"},{id:4,name:"Skull Cape",price:4e3,scale:90,desc:"no effect"},{id:5,name:"Dash Cape",price:5e3,scale:90,desc:"no effect"},{id:2,name:"Dragon Cape",price:6e3,scale:90,desc:"no effect"},{id:1,name:"Super Cape",price:8e3,scale:90,desc:"no effect"},{id:7,name:"Troll Cape",price:8e3,scale:90,desc:"no effect"},{id:14,name:"Thorns",price:1e4,scale:115,xOff:20,desc:"no effect"},{id:15,name:"Blockades",price:1e4,scale:95,xOff:15,desc:"no effect"},{id:20,name:"Devils Tail",price:1e4,scale:95,xOff:20,desc:"no effect"},{id:16,name:"Sawblade",price:12e3,scale:90,spin:!0,xOff:0,desc:"deal damage to players that damage you",dmg:.15},{id:13,name:"Angel Wings",price:15e3,scale:138,xOff:22,desc:"slowly regenerates health over time",healthRegen:3},{id:19,name:"Shadow Wings",price:15e3,scale:138,xOff:22,desc:"increased movement speed",spdMult:1.1},{id:18,name:"Blood Wings",price:2e4,scale:178,xOff:26,desc:"restores health when you deal damage",healD:.2},{id:21,name:"Corrupt X Wings",price:2e4,scale:178,xOff:26,desc:"deal damage to players that damage you",dmg:.25}]},function(e,t){e.exports=function(e,t,n,i,r,s,a){this.init=function(e,t,n,i,r,s,o,c,l){this.active=!0,this.indx=e,this.x=t,this.y=n,this.dir=i,this.skipMov=!0,this.speed=r,this.dmg=s,this.scale=c,this.range=o,this.owner=l,a&&(this.sentTo={})};var o,c=[];this.update=function(l){if(this.active){var h,u=this.speed*l;if(this.skipMov?this.skipMov=!1:(this.x+=u*Math.cos(this.dir),this.y+=u*Math.sin(this.dir),this.range-=u,this.range<=0&&(this.x+=this.range*Math.cos(this.dir),this.y+=this.range*Math.sin(this.dir),u=1,this.range=0,this.active=!1)),a){for(var f=0;f<e.length;++f)!this.sentTo[e[f].id]&&e[f].canSee(this)&&(this.sentTo[e[f].id]=1,a.send(e[f].id,"18",s.fixTo(this.x,1),s.fixTo(this.y,1),s.fixTo(this.dir,2),s.fixTo(this.range,1),this.speed,this.indx,this.layer,this.sid));for(c.length=0,f=0;f<e.length+t.length;++f)!(o=e[f]||t[f-e.length]).alive||o==this.owner||this.owner.team&&o.team==this.owner.team||s.lineInRect(o.x-o.scale,o.y-o.scale,o.x+o.scale,o.y+o.scale,this.x,this.y,this.x+u*Math.cos(this.dir),this.y+u*Math.sin(this.dir))&&c.push(o);for(var d=n.getGridArrays(this.x,this.y,this.scale),p=0;p<d.length;++p)for(var g=0;g<d[p].length;++g)h=(o=d[p][g]).getScale(),o.active&&this.ignoreObj!=o.sid&&this.layer<=o.layer&&c.indexOf(o)<0&&!o.ignoreCollision&&s.lineInRect(o.x-h,o.y-h,o.x+h,o.y+h,this.x,this.y,this.x+u*Math.cos(this.dir),this.y+u*Math.sin(this.dir))&&c.push(o);if(c.length>0){var m=null,y=null,k=null;for(f=0;f<c.length;++f)k=s.getDistance(this.x,this.y,c[f].x,c[f].y),(null==y||k<y)&&(y=k,m=c[f]);if(m.isPlayer||m.isAI){var v=.3*(m.weightM||1);m.xVel+=v*Math.cos(this.dir),m.yVel+=v*Math.sin(this.dir),null!=m.weaponIndex&&i.weapons[m.weaponIndex].shield&&s.getAngleDist(this.dir+Math.PI,m.dir)<=r.shieldAngle||m.changeHealth(-this.dmg,this.owner,this.owner)}else for(m.projDmg&&m.health&&m.changeHealth(-this.dmg)&&n.disableObj(m),f=0;f<e.length;++f)e[f].active&&(m.sentTo[e[f].id]&&(m.active?e[f].canSee(m)&&a.send(e[f].id,"8",s.fixTo(this.dir,2),m.sid):a.send(e[f].id,"12",m.sid)),m.active||m.owner!=e[f]||e[f].changeItemCount(m.group.id,-1));for(this.active=!1,f=0;f<e.length;++f)this.sentTo[e[f].id]&&a.send(e[f].id,"19",this.sid,s.fixTo(y,1))}}}}}},function(e,t){e.exports=function(e,t,n,i,r,s,a,o,c){this.addProjectile=function(l,h,u,f,d,p,g,m,y){for(var k,v=s.projectiles[p],w=0;w<t.length;++w)if(!t[w].active){k=t[w];break}return k||((k=new e(n,i,r,s,a,o,c)).sid=t.length,t.push(k)),k.init(p,l,h,u,d,v.dmg,f,v.scale,g),k.ignoreObj=m,k.layer=y||v.layer,k.src=v.src,k}}},function(e,t){e.exports.obj=function(e,t){var n;this.sounds=[],this.active=!0,this.play=function(t,i,r){i&&this.active&&((n=this.sounds[t])||(n=new Howl({src:".././sound/"+t+".mp3"}),this.sounds[t]=n),r&&n.isPlaying||(n.isPlaying=!0,n.play(),n.volume((i||1)*e.volumeMult),n.loop(r)))},this.toggleMute=function(e,t){(n=this.sounds[e])&&n.mute(t)},this.stop=function(e){(n=this.sounds[e])&&(n.stop(),n.isPlaying=!1)}}},function(e,t,n){var i=n(60),r=n(67);function s(e,t,n,i,r){"localhost"==location.hostname&&(window.location.hostname="127.0.0.1"),this.debugLog=!1,this.baseUrl=e,this.lobbySize=n,this.devPort=t,this.lobbySpread=i,this.rawIPs=!!r,this.server=void 0,this.gameIndex=void 0,this.callback=void 0,this.errorCallback=void 0,this.processServers(vultr.servers)}s.prototype.regionInfo={0:{name:"Local",latitude:0,longitude:0},"vultr:1":{name:"New Jersey",latitude:40.1393329,longitude:-75.8521818},"vultr:2":{name:"Chicago",latitude:41.8339037,longitude:-87.872238},"vultr:3":{name:"Dallas",latitude:32.8208751,longitude:-96.8714229},"vultr:4":{name:"Seattle",latitude:47.6149942,longitude:-122.4759879},"vultr:5":{name:"Los Angeles",latitude:34.0207504,longitude:-118.691914},"vultr:6":{name:"Atlanta",latitude:33.7676334,longitude:-84.5610332},"vultr:7":{name:"Amsterdam",latitude:52.3745287,longitude:4.7581878},"vultr:8":{name:"London",latitude:51.5283063,longitude:-.382486},"vultr:9":{name:"Frankfurt",latitude:50.1211273,longitude:8.496137},"vultr:12":{name:"Silicon Valley",latitude:37.4024714,longitude:-122.3219752},"vultr:19":{name:"Sydney",latitude:-33.8479715,longitude:150.651084},"vultr:24":{name:"Paris",latitude:48.8588376,longitude:2.2773454},"vultr:25":{name:"Tokyo",latitude:35.6732615,longitude:139.569959},"vultr:39":{name:"Miami",latitude:25.7823071,longitude:-80.3012156},"vultr:40":{name:"Singapore",latitude:1.3147268,longitude:103.7065876}},s.prototype.start=function(e,t){this.callback=e,this.errorCallback=t;var n=this.parseServerQuery();n?(this.log("Found server in query."),this.password=n[3],this.connect(n[0],n[1],n[2])):(this.log("Pinging servers..."),this.pingServers())},s.prototype.parseServerQuery=function(){var e=i.parse(location.href,!0),t=e.query.server;if("string"==typeof t){var n=t.split(":");if(3==n.length){var r=n[0],s=parseInt(n[1]),a=parseInt(n[2]);return"0"==r||r.startsWith("vultr:")||(r="vultr:"+r),[r,s,a,e.query.password]}this.errorCallback("Invalid number of server parameters in "+t)}},s.prototype.findServer=function(e,t){var n=this.servers[e];if(Array.isArray(n)){for(var i=0;i<n.length;i++){var r=n[i];if(r.index==t)return r}console.warn("Could not find server in region "+e+" with index "+t+".")}else this.errorCallback("No server list for region "+e)},s.prototype.pingServers=function(){var e=this,t=[];for(var n in this.servers)if(this.servers.hasOwnProperty(n)){var i=this.servers[n],r=i[Math.floor(Math.random()*i.length)];null!=r?function(i,r){var s=new XMLHttpRequest;s.onreadystatechange=function(i){var s=i.target;if(4==s.readyState)if(200==s.status){for(var a=0;a<t.length;a++)t[a].abort();e.log("Connecting to region",r.region);var o=e.seekServer(r.region);e.connect(o[0],o[1],o[2])}else console.warn("Error pinging "+r.ip+" in region "+n)};var a="//"+e.serverAddress(r.ip,!0)+":"+e.serverPort(r)+"/ping";s.open("GET",a,!0),s.send(null),e.log("Pinging",a),t.push(s)}(0,r):console.log("No target server for region "+n)}},s.prototype.seekServer=function(e,t,n){null==n&&(n="random"),null==t&&(t=!1);const i=["random"];var r=this.lobbySize,s=this.lobbySpread,a=this.servers[e].flatMap((function(e){var t=0;return e.games.map((function(n){var i=t++;return{region:e.region,index:e.index*e.games.length+i,gameIndex:i,gameCount:e.games.length,playerCount:n.playerCount,isPrivate:n.isPrivate}}))})).filter((function(e){return!e.isPrivate})).filter((function(e){return!t||0==e.playerCount&&e.gameIndex>=e.gameCount/2})).filter((function(e){return"random"==n||i[e.index%i.length].key==n})).sort((function(e,t){return t.playerCount-e.playerCount})).filter((function(e){return e.playerCount<r}));if(t&&a.reverse(),0!=a.length){var o=Math.min(s,a.length),c=Math.floor(Math.random()*o),l=a[c=Math.min(c,a.length-1)],h=l.region,u=(c=Math.floor(l.index/l.gameCount),l.index%l.gameCount);return this.log("Found server."),[h,c,u]}this.errorCallback("No open servers.")},s.prototype.connect=function(e,t,n){if(!this.connected){var i=this.findServer(e,t);null!=i?(this.log("Connecting to server",i,"with game index",n),i.games[n].playerCount>=this.lobbySize?this.errorCallback("Server is already full."):(window.history.replaceState(document.title,document.title,this.generateHref(e,t,n,this.password)),this.server=i,this.gameIndex=n,this.log("Calling callback with address",this.serverAddress(i.ip),"on port",this.serverPort(i),"with game index",n),this.callback(this.serverAddress(i.ip),this.serverPort(i),n))):this.errorCallback("Failed to find server for region "+e+" and index "+t)}},s.prototype.switchServer=function(e,t,n,i){this.switchingServers=!0,window.location.href=this.generateHref(e,t,n,i)},s.prototype.generateHref=function(e,t,n,i){var r="/?server="+(e=this.stripRegion(e))+":"+t+":"+n;return i&&(r+="&password="+encodeURIComponent(i)),r},s.prototype.serverAddress=function(e,t){return"127.0.0.1"==e||"7f000001"==e||"903d62ef5d1c2fecdcaeb5e7dd485eff"==e?window.location.hostname:this.rawIPs?t?"ip_"+this.hashIP(e)+"."+this.baseUrl:e:"ip_"+e+"."+this.baseUrl},s.prototype.serverPort=function(e){return 0==e.region?this.devPort:location.protocol.startsWith("https")?443:80},s.prototype.processServers=function(e){for(var t={},n=0;n<e.length;n++){var i=e[n],r=t[i.region];null==r&&(r=[],t[i.region]=r),r.push(i)}for(var s in t)t[s]=t[s].sort((function(e,t){return e.index-t.index}));this.servers=t},s.prototype.ipToHex=function(e){return e.split(".").map(e=>("00"+parseInt(e).toString(16)).substr(-2)).join("").toLowerCase()},s.prototype.hashIP=function(e){return r(this.ipToHex(e))},s.prototype.log=function(){return this.debugLog?console.log.apply(void 0,arguments):console.verbose?console.verbose.apply(void 0,arguments):void 0},s.prototype.stripRegion=function(e){return e.startsWith("vultr:")?e=e.slice(6):e.startsWith("do:")&&(e=e.slice(3)),e},window.testVultrClient=function(){var e=1;function t(t,n){(t=""+t)==(n=""+n)?console.log(`Assert ${e} passed.`):console.warn(`Assert ${e} failed. Expected ${n}, got ${t}.`),e++}var n=new s("test.io",-1,5,1,!1);n.errorCallback=function(e){},n.processServers(function(e){var t=[];for(var n in e)for(var i=e[n],r=0;r<i.length;r++)t.push({ip:n+":"+r,scheme:"testing",region:n,index:r,games:i[r].map(e=>({playerCount:e,isPrivate:!1}))});return t}({1:[[0,0,0,0],[0,0,0,0]],2:[[5,1,0,0],[0,0,0,0]],3:[[5,0,1,5],[0,0,0,0]],4:[[5,1,1,5],[1,0,0,0]],5:[[5,1,1,5],[1,0,4,0]],6:[[5,5,5,5],[2,3,1,4]],7:[[5,5,5,5],[5,5,5,5]]})),t(n.seekServer(1,!1),[1,0,0]),t(n.seekServer(1,!0),[1,1,3]),t(n.seekServer(2,!1),[2,0,1]),t(n.seekServer(2,!0),[2,1,3]),t(n.seekServer(3,!1),[3,0,2]),t(n.seekServer(3,!0),[3,1,3]),t(n.seekServer(4,!1),[4,0,1]),t(n.seekServer(4,!0),[4,1,3]),t(n.seekServer(5,!1),[5,1,2]),t(n.seekServer(5,!0),[5,1,3]),t(n.seekServer(6,!1),[6,1,3]),t(n.seekServer(6,!0),void 0),t(n.seekServer(7,!1),void 0),t(n.seekServer(7,!0),void 0),console.log("Tests passed.")};var a=function(e,t){return e.concat(t)};Array.prototype.flatMap=function(e){return function(e,t){return t.map(e).reduce(a,[])}(e,this)},e.exports=s},function(e,t,n){"use strict";var i=n(61),r=n(63);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=v,t.resolve=function(e,t){return v(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?v(e,!1,!0).resolveObject(t):t},t.format=function(e){return r.isString(e)&&(e=v(e)),e instanceof s?e.format():s.prototype.format.call(e)},t.Url=s;var a=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(l),u=["%","/","?",";","#"].concat(h),f=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},m={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},k=n(64);function v(e,t,n){if(e&&r.isObject(e)&&e instanceof s)return e;var i=new s;return i.parse(e,t,n),i}s.prototype.parse=function(e,t,n){if(!r.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var s=e.indexOf("?"),o=-1!==s&&s<e.indexOf("#")?"?":"#",l=e.split(o);l[0]=l[0].replace(/\\/g,"/");var v=e=l.join(o);if(v=v.trim(),!n&&1===e.split("#").length){var w=c.exec(v);if(w)return this.path=v,this.href=v,this.pathname=w[1],w[2]?(this.search=w[2],this.query=t?k.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var b=a.exec(v);if(b){var x=(b=b[0]).toLowerCase();this.protocol=x,v=v.substr(b.length)}if(n||b||v.match(/^\/\/[^@\/]+@[^@\/]+/)){var S="//"===v.substr(0,2);!S||b&&m[b]||(v=v.substr(2),this.slashes=!0)}if(!m[b]&&(S||b&&!y[b])){for(var T,I,E=-1,M=0;M<f.length;M++)-1!==(A=v.indexOf(f[M]))&&(-1===E||A<E)&&(E=A);for(-1!==(I=-1===E?v.lastIndexOf("@"):v.lastIndexOf("@",E))&&(T=v.slice(0,I),v=v.slice(I+1),this.auth=decodeURIComponent(T)),E=-1,M=0;M<u.length;M++){var A;-1!==(A=v.indexOf(u[M]))&&(-1===E||A<E)&&(E=A)}-1===E&&(E=v.length),this.host=v.slice(0,E),v=v.slice(E),this.parseHost(),this.hostname=this.hostname||"";var P="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!P)for(var B=this.hostname.split(/\./),C=(M=0,B.length);M<C;M++){var O=B[M];if(O&&!O.match(d)){for(var R="",j=0,_=O.length;j<_;j++)O.charCodeAt(j)>127?R+="x":R+=O[j];if(!R.match(d)){var U=B.slice(0,M),D=B.slice(M+1),L=O.match(p);L&&(U.push(L[1]),D.unshift(L[2])),D.length&&(v="/"+D.join(".")+v),this.hostname=U.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),P||(this.hostname=i.toASCII(this.hostname));var F=this.port?":"+this.port:"",z=this.hostname||"";this.host=z+F,this.href+=this.host,P&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==v[0]&&(v="/"+v))}if(!g[x])for(M=0,C=h.length;M<C;M++){var H=h[M];if(-1!==v.indexOf(H)){var V=encodeURIComponent(H);V===H&&(V=escape(H)),v=v.split(H).join(V)}}var q=v.indexOf("#");-1!==q&&(this.hash=v.substr(q),v=v.slice(0,q));var Y=v.indexOf("?");if(-1!==Y?(this.search=v.substr(Y),this.query=v.substr(Y+1),t&&(this.query=k.parse(this.query)),v=v.slice(0,Y)):t&&(this.search="",this.query={}),v&&(this.pathname=v),y[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){F=this.pathname||"";var W=this.search||"";this.path=F+W}return this.href=this.format(),this},s.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",i=this.hash||"",s=!1,a="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&r.isObject(this.query)&&Object.keys(this.query).length&&(a=k.stringify(this.query));var o=this.search||a&&"?"+a||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||y[t])&&!1!==s?(s="//"+(s||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):s||(s=""),i&&"#"!==i.charAt(0)&&(i="#"+i),o&&"?"!==o.charAt(0)&&(o="?"+o),t+s+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(o=o.replace("#","%23"))+i},s.prototype.resolve=function(e){return this.resolveObject(v(e,!1,!0)).format()},s.prototype.resolveObject=function(e){if(r.isString(e)){var t=new s;t.parse(e,!1,!0),e=t}for(var n=new s,i=Object.keys(this),a=0;a<i.length;a++){var o=i[a];n[o]=this[o]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var c=Object.keys(e),l=0;l<c.length;l++){var h=c[l];"protocol"!==h&&(n[h]=e[h])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!y[e.protocol]){for(var u=Object.keys(e),f=0;f<u.length;f++){var d=u[f];n[d]=e[d]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||m[e.protocol])n.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),n.pathname=p.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var g=n.pathname||"",k=n.search||"";n.path=g+k}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var v=n.pathname&&"/"===n.pathname.charAt(0),w=e.host||e.pathname&&"/"===e.pathname.charAt(0),b=w||v||n.host&&e.pathname,x=b,S=n.pathname&&n.pathname.split("/")||[],T=(p=e.pathname&&e.pathname.split("/")||[],n.protocol&&!y[n.protocol]);if(T&&(n.hostname="",n.port=null,n.host&&(""===S[0]?S[0]=n.host:S.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),b=b&&(""===p[0]||""===S[0])),w)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,S=p;else if(p.length)S||(S=[]),S.pop(),S=S.concat(p),n.search=e.search,n.query=e.query;else if(!r.isNullOrUndefined(e.search))return T&&(n.hostname=n.host=S.shift(),(P=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=P.shift(),n.host=n.hostname=P.shift())),n.search=e.search,n.query=e.query,r.isNull(n.pathname)&&r.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n;if(!S.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var I=S.slice(-1)[0],E=(n.host||e.host||S.length>1)&&("."===I||".."===I)||""===I,M=0,A=S.length;A>=0;A--)"."===(I=S[A])?S.splice(A,1):".."===I?(S.splice(A,1),M++):M&&(S.splice(A,1),M--);if(!b&&!x)for(;M--;M)S.unshift("..");!b||""===S[0]||S[0]&&"/"===S[0].charAt(0)||S.unshift(""),E&&"/"!==S.join("/").substr(-1)&&S.push("");var P,B=""===S[0]||S[0]&&"/"===S[0].charAt(0);return T&&(n.hostname=n.host=B?"":S.length?S.shift():"",(P=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=P.shift(),n.host=n.hostname=P.shift())),(b=b||n.host&&S.length)&&!B&&S.unshift(""),S.length?n.pathname=S.join("/"):(n.pathname=null,n.path=null),r.isNull(n.pathname)&&r.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},s.prototype.parseHost=function(){var e=this.host,t=o.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},function(e,t,n){(function(e,i){var r;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(s){t&&t.nodeType,e&&e.nodeType;var a="object"==typeof i&&i;a.global!==a&&a.window!==a&&a.self;var o,c=2147483647,l=36,h=/^xn--/,u=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,g=String.fromCharCode;function m(e){throw new RangeError(d[e])}function y(e,t){for(var n=e.length,i=[];n--;)i[n]=t(e[n]);return i}function k(e,t){var n=e.split("@"),i="";return n.length>1&&(i=n[0]+"@",e=n[1]),i+y((e=e.replace(f,".")).split("."),t).join(".")}function v(e){for(var t,n,i=[],r=0,s=e.length;r<s;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<s?56320==(64512&(n=e.charCodeAt(r++)))?i.push(((1023&t)<<10)+(1023&n)+65536):(i.push(t),r--):i.push(t);return i}function w(e){return y(e,(function(e){var t="";return e>65535&&(t+=g((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+g(e)})).join("")}function b(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:l}function x(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function S(e,t,n){var i=0;for(e=n?p(e/700):e>>1,e+=p(e/t);e>455;i+=l)e=p(e/35);return p(i+36*e/(e+38))}function T(e){var t,n,i,r,s,a,o,h,u,f,d=[],g=e.length,y=0,k=128,v=72;for((n=e.lastIndexOf("-"))<0&&(n=0),i=0;i<n;++i)e.charCodeAt(i)>=128&&m("not-basic"),d.push(e.charCodeAt(i));for(r=n>0?n+1:0;r<g;){for(s=y,a=1,o=l;r>=g&&m("invalid-input"),((h=b(e.charCodeAt(r++)))>=l||h>p((c-y)/a))&&m("overflow"),y+=h*a,!(h<(u=o<=v?1:o>=v+26?26:o-v));o+=l)a>p(c/(f=l-u))&&m("overflow"),a*=f;v=S(y-s,t=d.length+1,0==s),p(y/t)>c-k&&m("overflow"),k+=p(y/t),y%=t,d.splice(y++,0,k)}return w(d)}function I(e){var t,n,i,r,s,a,o,h,u,f,d,y,k,w,b,T=[];for(y=(e=v(e)).length,t=128,n=0,s=72,a=0;a<y;++a)(d=e[a])<128&&T.push(g(d));for(i=r=T.length,r&&T.push("-");i<y;){for(o=c,a=0;a<y;++a)(d=e[a])>=t&&d<o&&(o=d);for(o-t>p((c-n)/(k=i+1))&&m("overflow"),n+=(o-t)*k,t=o,a=0;a<y;++a)if((d=e[a])<t&&++n>c&&m("overflow"),d==t){for(h=n,u=l;!(h<(f=u<=s?1:u>=s+26?26:u-s));u+=l)b=h-f,w=l-f,T.push(g(x(f+b%w,0))),h=p(b/w);T.push(g(x(h,0))),s=S(n,k,i==r),n=0,++i}++n,++t}return T.join("")}o={version:"1.4.1",ucs2:{decode:v,encode:w},decode:T,encode:I,toASCII:function(e){return k(e,(function(e){return u.test(e)?"xn--"+I(e):e}))},toUnicode:function(e){return k(e,(function(e){return h.test(e)?T(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()}).call(this,n(62)(e),n(12))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},function(e,t,n){"use strict";t.decode=t.parse=n(65),t.encode=t.stringify=n(66)},function(e,t,n){"use strict";function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,s){t=t||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;var o=/\+/g;e=e.split(t);var c=1e3;s&&"number"==typeof s.maxKeys&&(c=s.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var h=0;h<l;++h){var u,f,d,p,g=e[h].replace(o,"%20"),m=g.indexOf(n);m>=0?(u=g.substr(0,m),f=g.substr(m+1)):(u=g,f=""),d=decodeURIComponent(u),p=decodeURIComponent(f),i(a,d)?r(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,o){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?s(a(e),(function(a){var o=encodeURIComponent(i(a))+n;return r(e[a])?s(e[a],(function(e){return o+encodeURIComponent(i(e))})).join(t):o+encodeURIComponent(i(e[a]))})).join(t):o?encodeURIComponent(i(o))+n+encodeURIComponent(i(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i++)n.push(t(e[i],i));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},function(e,t,n){!function(){var t=n(68),i=n(20).utf8,r=n(69),s=n(20).bin,a=function(e,n){e.constructor==String?e=n&&"binary"===n.encoding?s.stringToBytes(e):i.stringToBytes(e):r(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var o=t.bytesToWords(e),c=8*e.length,l=1732584193,h=-271733879,u=-1732584194,f=271733878,d=0;d<o.length;d++)o[d]=16711935&(o[d]<<8|o[d]>>>24)|4278255360&(o[d]<<24|o[d]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var p=a._ff,g=a._gg,m=a._hh,y=a._ii;for(d=0;d<o.length;d+=16){var k=l,v=h,w=u,b=f;h=y(h=y(h=y(h=y(h=m(h=m(h=m(h=m(h=g(h=g(h=g(h=g(h=p(h=p(h=p(h=p(h,u=p(u,f=p(f,l=p(l,h,u,f,o[d+0],7,-680876936),h,u,o[d+1],12,-389564586),l,h,o[d+2],17,606105819),f,l,o[d+3],22,-1044525330),u=p(u,f=p(f,l=p(l,h,u,f,o[d+4],7,-176418897),h,u,o[d+5],12,1200080426),l,h,o[d+6],17,-1473231341),f,l,o[d+7],22,-45705983),u=p(u,f=p(f,l=p(l,h,u,f,o[d+8],7,1770035416),h,u,o[d+9],12,-1958414417),l,h,o[d+10],17,-42063),f,l,o[d+11],22,-1990404162),u=p(u,f=p(f,l=p(l,h,u,f,o[d+12],7,1804603682),h,u,o[d+13],12,-40341101),l,h,o[d+14],17,-1502002290),f,l,o[d+15],22,1236535329),u=g(u,f=g(f,l=g(l,h,u,f,o[d+1],5,-165796510),h,u,o[d+6],9,-1069501632),l,h,o[d+11],14,643717713),f,l,o[d+0],20,-373897302),u=g(u,f=g(f,l=g(l,h,u,f,o[d+5],5,-701558691),h,u,o[d+10],9,38016083),l,h,o[d+15],14,-660478335),f,l,o[d+4],20,-405537848),u=g(u,f=g(f,l=g(l,h,u,f,o[d+9],5,568446438),h,u,o[d+14],9,-1019803690),l,h,o[d+3],14,-187363961),f,l,o[d+8],20,1163531501),u=g(u,f=g(f,l=g(l,h,u,f,o[d+13],5,-1444681467),h,u,o[d+2],9,-51403784),l,h,o[d+7],14,1735328473),f,l,o[d+12],20,-1926607734),u=m(u,f=m(f,l=m(l,h,u,f,o[d+5],4,-378558),h,u,o[d+8],11,-2022574463),l,h,o[d+11],16,1839030562),f,l,o[d+14],23,-35309556),u=m(u,f=m(f,l=m(l,h,u,f,o[d+1],4,-1530992060),h,u,o[d+4],11,1272893353),l,h,o[d+7],16,-155497632),f,l,o[d+10],23,-1094730640),u=m(u,f=m(f,l=m(l,h,u,f,o[d+13],4,681279174),h,u,o[d+0],11,-358537222),l,h,o[d+3],16,-722521979),f,l,o[d+6],23,76029189),u=m(u,f=m(f,l=m(l,h,u,f,o[d+9],4,-640364487),h,u,o[d+12],11,-421815835),l,h,o[d+15],16,530742520),f,l,o[d+2],23,-995338651),u=y(u,f=y(f,l=y(l,h,u,f,o[d+0],6,-198630844),h,u,o[d+7],10,1126891415),l,h,o[d+14],15,-1416354905),f,l,o[d+5],21,-57434055),u=y(u,f=y(f,l=y(l,h,u,f,o[d+12],6,1700485571),h,u,o[d+3],10,-1894986606),l,h,o[d+10],15,-1051523),f,l,o[d+1],21,-2054922799),u=y(u,f=y(f,l=y(l,h,u,f,o[d+8],6,1873313359),h,u,o[d+15],10,-30611744),l,h,o[d+6],15,-1560198380),f,l,o[d+13],21,1309151649),u=y(u,f=y(f,l=y(l,h,u,f,o[d+4],6,-145523070),h,u,o[d+11],10,-1120210379),l,h,o[d+2],15,718787259),f,l,o[d+9],21,-343485551),l=l+k>>>0,h=h+v>>>0,u=u+w>>>0,f=f+b>>>0}return t.endian([l,h,u,f])};a._ff=function(e,t,n,i,r,s,a){var o=e+(t&n|~t&i)+(r>>>0)+a;return(o<<s|o>>>32-s)+t},a._gg=function(e,t,n,i,r,s,a){var o=e+(t&i|n&~i)+(r>>>0)+a;return(o<<s|o>>>32-s)+t},a._hh=function(e,t,n,i,r,s,a){var o=e+(t^n^i)+(r>>>0)+a;return(o<<s|o>>>32-s)+t},a._ii=function(e,t,n,i,r,s,a){var o=e+(n^(t|~i))+(r>>>0)+a;return(o<<s|o>>>32-s)+t},a._blocksize=16,a._digestsize=16,e.exports=function(e,n){if(null==e)throw new Error("Illegal argument "+e);var i=t.wordsToBytes(a(e,n));return n&&n.asBytes?i:n&&n.asString?s.bytesToString(i):t.bytesToHex(i)}}()},function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,i=0;n<e.length;n++,i+=8)t[i>>>5]|=e[n]<<24-i%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],i=0;i<e.length;i+=3)for(var r=e[i]<<16|e[i+1]<<8|e[i+2],s=0;s<4;s++)8*i+6*s<=8*e.length?n.push(t.charAt(r>>>6*(3-s)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],i=0,r=0;i<e.length;r=++i%4)0!=r&&n.push((t.indexOf(e.charAt(i-1))&Math.pow(2,-2*r+8)-1)<<2*r|t.indexOf(e.charAt(i))>>>6-2*r);return n}};e.exports=n}()},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t){e.exports=function(e,t,n,i,r,s,a,o,c){this.aiTypes=[{id:0,src:"cow_1",killScore:150,health:500,weightM:.8,speed:95e-5,turnSpeed:.001,scale:72,drop:["food",50]},{id:1,src:"pig_1",killScore:200,health:800,weightM:.6,speed:85e-5,turnSpeed:.001,scale:72,drop:["food",80]},{id:2,name:"Bull",src:"bull_2",hostile:!0,dmg:20,killScore:1e3,health:1800,weightM:.5,speed:94e-5,turnSpeed:74e-5,scale:78,viewRange:800,chargePlayer:!0,drop:["food",100]},{id:3,name:"Bully",src:"bull_1",hostile:!0,dmg:20,killScore:2e3,health:2800,weightM:.45,speed:.001,turnSpeed:8e-4,scale:90,viewRange:900,chargePlayer:!0,drop:["food",400]},{id:4,name:"Wolf",src:"wolf_1",hostile:!0,dmg:8,killScore:500,health:300,weightM:.45,speed:.001,turnSpeed:.002,scale:84,viewRange:800,chargePlayer:!0,drop:["food",200]},{id:5,name:"Quack",src:"chicken_1",dmg:8,killScore:2e3,noTrap:!0,health:300,weightM:.2,speed:.0018,turnSpeed:.006,scale:70,drop:["food",100]},{id:6,name:"MOOSTAFA",nameScale:50,src:"enemy",hostile:!0,dontRun:!0,fixedSpawn:!0,spawnDelay:6e4,noTrap:!0,colDmg:100,dmg:40,killScore:8e3,health:18e3,weightM:.4,speed:7e-4,turnSpeed:.01,scale:80,spriteMlt:1.8,leapForce:.9,viewRange:1e3,hitRange:210,hitDelay:1e3,chargePlayer:!0,drop:["food",100]},{id:7,name:"Treasure",hostile:!0,nameScale:35,src:"crate_1",fixedSpawn:!0,spawnDelay:12e4,colDmg:200,killScore:5e3,health:2e4,weightM:.1,speed:0,turnSpeed:0,scale:70,spriteMlt:1},{id:8,name:"MOOFIE",src:"wolf_2",hostile:!0,fixedSpawn:!0,dontRun:!0,hitScare:4,spawnDelay:3e4,noTrap:!0,nameScale:35,dmg:10,colDmg:100,killScore:3e3,health:7e3,weightM:.45,speed:.0015,turnSpeed:.002,scale:90,viewRange:800,chargePlayer:!0,drop:["food",1e3]}],this.spawn=function(l,h,u,f){for(var d,p=0;p<e.length;++p)if(!e[p].active){d=e[p];break}return d||(d=new t(e.length,r,n,i,a,s,o,c),e.push(d)),d.init(l,h,u,f,this.aiTypes[f]),d}}},function(e,t){var n=2*Math.PI;e.exports=function(e,t,i,r,s,a,o,c){this.sid=e,this.isAI=!0,this.nameIndex=s.randInt(0,a.cowNames.length-1),this.init=function(e,t,n,i,r){this.x=e,this.y=t,this.startX=r.fixedSpawn?e:null,this.startY=r.fixedSpawn?t:null,this.xVel=0,this.yVel=0,this.zIndex=0,this.dir=n,this.dirPlus=0,this.index=i,this.src=r.src,r.name&&(this.name=r.name),this.weightM=r.weightM,this.speed=r.speed,this.killScore=r.killScore,this.turnSpeed=r.turnSpeed,this.scale=r.scale,this.maxHealth=r.health,this.leapForce=r.leapForce,this.health=this.maxHealth,this.chargePlayer=r.chargePlayer,this.viewRange=r.viewRange,this.drop=r.drop,this.dmg=r.dmg,this.hostile=r.hostile,this.dontRun=r.dontRun,this.hitRange=r.hitRange,this.hitDelay=r.hitDelay,this.hitScare=r.hitScare,this.spriteMlt=r.spriteMlt,this.nameScale=r.nameScale,this.colDmg=r.colDmg,this.noTrap=r.noTrap,this.spawnDelay=r.spawnDelay,this.hitWait=0,this.waitCount=1e3,this.moveCount=0,this.targetDir=0,this.active=!0,this.alive=!0,this.runFrom=null,this.chargeTarget=null,this.dmgOverTime={}};var l=0;this.update=function(e){if(this.active){if(this.spawnCounter)return this.spawnCounter-=e,void(this.spawnCounter<=0&&(this.spawnCounter=0,this.x=this.startX||s.randInt(0,a.mapScale),this.y=this.startY||s.randInt(0,a.mapScale)));(l-=e)<=0&&(this.dmgOverTime.dmg&&(this.changeHealth(-this.dmgOverTime.dmg,this.dmgOverTime.doer),this.dmgOverTime.time-=1,this.dmgOverTime.time<=0&&(this.dmgOverTime.dmg=0)),l=1e3);var r=!1,o=1;if(!this.zIndex&&!this.lockMove&&this.y>=a.mapScale/2-a.riverWidth/2&&this.y<=a.mapScale/2+a.riverWidth/2&&(o=.33,this.xVel+=a.waterCurrent*e),this.lockMove)this.xVel=0,this.yVel=0;else if(this.waitCount>0){if(this.waitCount-=e,this.waitCount<=0)if(this.chargePlayer){for(var h,u,f,d=0;d<i.length;++d)!i[d].alive||i[d].skin&&i[d].skin.bullRepel||(f=s.getDistance(this.x,this.y,i[d].x,i[d].y))<=this.viewRange&&(!h||f<u)&&(u=f,h=i[d]);h?(this.chargeTarget=h,this.moveCount=s.randInt(8e3,12e3)):(this.moveCount=s.randInt(1e3,2e3),this.targetDir=s.randFloat(-Math.PI,Math.PI))}else this.moveCount=s.randInt(4e3,1e4),this.targetDir=s.randFloat(-Math.PI,Math.PI)}else if(this.moveCount>0){var p=this.speed*o;if(this.runFrom&&this.runFrom.active&&(!this.runFrom.isPlayer||this.runFrom.alive)?(this.targetDir=s.getDirection(this.x,this.y,this.runFrom.x,this.runFrom.y),p*=1.42):this.chargeTarget&&this.chargeTarget.alive&&(this.targetDir=s.getDirection(this.chargeTarget.x,this.chargeTarget.y,this.x,this.y),p*=1.75,r=!0),this.hitWait&&(p*=.3),this.dir!=this.targetDir){this.dir%=n;var g=(this.dir-this.targetDir+n)%n,m=Math.min(Math.abs(g-n),g,this.turnSpeed*e),y=g-Math.PI>=0?1:-1;this.dir+=y*m+n}this.dir%=n,this.xVel+=p*e*Math.cos(this.dir),this.yVel+=p*e*Math.sin(this.dir),this.moveCount-=e,this.moveCount<=0&&(this.runFrom=null,this.chargeTarget=null,this.waitCount=this.hostile?1500:s.randInt(1500,6e3))}this.zIndex=0,this.lockMove=!1;var k=s.getDistance(0,0,this.xVel*e,this.yVel*e),v=Math.min(4,Math.max(1,Math.round(k/40))),w=1/v;for(d=0;d<v;++d){this.xVel&&(this.x+=this.xVel*e*w),this.yVel&&(this.y+=this.yVel*e*w),M=t.getGridArrays(this.x,this.y,this.scale);for(var b=0;b<M.length;++b)for(var x=0;x<M[b].length;++x)M[b][x].active&&t.checkCollision(this,M[b][x],w)}var S,T,I,E=!1;if(this.hitWait>0&&(this.hitWait-=e,this.hitWait<=0)){E=!0,this.hitWait=0,this.leapForce&&!s.randInt(0,2)&&(this.xVel+=this.leapForce*Math.cos(this.dir),this.yVel+=this.leapForce*Math.sin(this.dir));for(var M=t.getGridArrays(this.x,this.y,this.hitRange),A=0;A<M.length;++A)for(b=0;b<M[A].length;++b)(S=M[A][b]).health&&(T=s.getDistance(this.x,this.y,S.x,S.y))<S.scale+this.hitRange&&(S.changeHealth(5*-this.dmg)&&t.disableObj(S),t.hitObj(S,s.getDirection(this.x,this.y,S.x,S.y)));for(b=0;b<i.length;++b)i[b].canSee(this)&&c.send(i[b].id,"aa",this.sid)}if(r||E)for(d=0;d<i.length;++d)(S=i[d])&&S.alive&&(T=s.getDistance(this.x,this.y,S.x,S.y),this.hitRange?!this.hitWait&&T<=this.hitRange+S.scale&&(E?(I=s.getDirection(S.x,S.y,this.x,this.y),S.changeHealth(-this.dmg),S.xVel+=.6*Math.cos(I),S.yVel+=.6*Math.sin(I),this.runFrom=null,this.chargeTarget=null,this.waitCount=3e3,this.hitWait=s.randInt(0,2)?0:600):this.hitWait=this.hitDelay):T<=this.scale+S.scale&&(I=s.getDirection(S.x,S.y,this.x,this.y),S.changeHealth(-this.dmg),S.xVel+=.55*Math.cos(I),S.yVel+=.55*Math.sin(I)));this.xVel&&(this.xVel*=Math.pow(a.playerDecel,e)),this.yVel&&(this.yVel*=Math.pow(a.playerDecel,e));var P=this.scale;this.x-P<0?(this.x=P,this.xVel=0):this.x+P>a.mapScale&&(this.x=a.mapScale-P,this.xVel=0),this.y-P<0?(this.y=P,this.yVel=0):this.y+P>a.mapScale&&(this.y=a.mapScale-P,this.yVel=0)}},this.canSee=function(e){if(!e)return!1;if(e.skin&&e.skin.invisTimer&&e.noMovTimer>=e.skin.invisTimer)return!1;var t=Math.abs(e.x-this.x)-e.scale,n=Math.abs(e.y-this.y)-e.scale;return t<=a.maxScreenWidth/2*1.3&&n<=a.maxScreenHeight/2*1.3};var h=0,u=0;this.animate=function(e){this.animTime>0&&(this.animTime-=e,this.animTime<=0?(this.animTime=0,this.dirPlus=0,h=0,u=0):0==u?(h+=e/(this.animSpeed*a.hitReturnRatio),this.dirPlus=s.lerp(0,this.targetAngle,Math.min(1,h)),h>=1&&(h=1,u=1)):(h-=e/(this.animSpeed*(1-a.hitReturnRatio)),this.dirPlus=s.lerp(0,this.targetAngle,Math.max(0,h))))},this.startAnim=function(){this.animTime=this.animSpeed=600,this.targetAngle=.8*Math.PI,h=0,u=0},this.changeHealth=function(e,t,n){if(this.active&&(this.health+=e,n&&(this.hitScare&&!s.randInt(0,this.hitScare)?(this.runFrom=n,this.waitCount=0,this.moveCount=2e3):this.hostile&&this.chargePlayer&&n.isPlayer?(this.chargeTarget=n,this.waitCount=0,this.moveCount=8e3):this.dontRun||(this.runFrom=n,this.waitCount=0,this.moveCount=2e3)),e<0&&this.hitRange&&s.randInt(0,1)&&(this.hitWait=500),t&&t.canSee(this)&&e<0&&c.send(t.id,"t",Math.round(this.x),Math.round(this.y),Math.round(-e),1),this.health<=0&&(this.spawnDelay?(this.spawnCounter=this.spawnDelay,this.x=-1e6,this.y=-1e6):(this.x=this.startX||s.randInt(0,a.mapScale),this.y=this.startY||s.randInt(0,a.mapScale)),this.health=this.maxHealth,this.runFrom=null,t&&(o(t,this.killScore),this.drop))))for(var i=0;i<this.drop.length;)t.addResource(a.resourceTypes.indexOf(this.drop[i]),this.drop[i+1]),i+=2}}}]);
//# sourceMappingURL=bundle.js.map
