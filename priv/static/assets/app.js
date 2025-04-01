(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // css/app.css
  var require_ = __commonJS({
    "css/app.css"(exports, module) {
      module.exports = {};
    }
  });

  // ../deps/phoenix_html/priv/static/phoenix_html.js
  var require_phoenix_html = __commonJS({
    "../deps/phoenix_html/priv/static/phoenix_html.js"() {
      "use strict";
      (function() {
        var PolyfillEvent = eventConstructor();
        function eventConstructor() {
          if (typeof window.CustomEvent === "function")
            return window.CustomEvent;
          function CustomEvent2(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: void 0 };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
          }
          CustomEvent2.prototype = window.Event.prototype;
          return CustomEvent2;
        }
        function buildHiddenInput(name, value) {
          var input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          input.value = value;
          return input;
        }
        function handleClick(element, targetModifierKey) {
          var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), submit = document.createElement("input"), target = element.getAttribute("target");
          form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
          form.action = to;
          form.style.display = "none";
          if (target)
            form.target = target;
          else if (targetModifierKey)
            form.target = "_blank";
          form.appendChild(csrf);
          form.appendChild(method);
          document.body.appendChild(form);
          submit.type = "submit";
          form.appendChild(submit);
          submit.click();
        }
        window.addEventListener("click", function(e) {
          var element = e.target;
          if (e.defaultPrevented)
            return;
          while (element && element.getAttribute) {
            var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
              "bubbles": true,
              "cancelable": true
            });
            if (!element.dispatchEvent(phoenixLinkEvent)) {
              e.preventDefault();
              e.stopImmediatePropagation();
              return false;
            }
            if (element.getAttribute("data-method")) {
              handleClick(element, e.metaKey || e.shiftKey);
              e.preventDefault();
              return false;
            } else {
              element = element.parentNode;
            }
          }
        }, false);
        window.addEventListener("phoenix.link.click", function(e) {
          var message = e.target.getAttribute("data-confirm");
          if (message && !window.confirm(message)) {
            e.preventDefault();
          }
        }, false);
      })();
    }
  });

  // ../deps/phoenix/priv/static/phoenix.mjs
  var phoenix_exports = {};
  __export(phoenix_exports, {
    Channel: () => Channel,
    LongPoll: () => LongPoll,
    Presence: () => Presence,
    Serializer: () => serializer_default,
    Socket: () => Socket
  });
  var closure, globalSelf, phxWindow, global, DEFAULT_VSN, SOCKET_STATES, DEFAULT_TIMEOUT, WS_CLOSE_NORMAL, CHANNEL_STATES, CHANNEL_EVENTS, TRANSPORTS, XHR_STATES, Push, Timer, Channel, Ajax, arrayBufferToBase64, LongPoll, Presence, serializer_default, Socket;
  var init_phoenix = __esm({
    "../deps/phoenix/priv/static/phoenix.mjs"() {
      closure = (value) => {
        if (typeof value === "function") {
          return value;
        } else {
          let closure22 = function() {
            return value;
          };
          return closure22;
        }
      };
      globalSelf = typeof self !== "undefined" ? self : null;
      phxWindow = typeof window !== "undefined" ? window : null;
      global = globalSelf || phxWindow || global;
      DEFAULT_VSN = "2.0.0";
      SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
      DEFAULT_TIMEOUT = 1e4;
      WS_CLOSE_NORMAL = 1e3;
      CHANNEL_STATES = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
      };
      CHANNEL_EVENTS = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        reply: "phx_reply",
        leave: "phx_leave"
      };
      TRANSPORTS = {
        longpoll: "longpoll",
        websocket: "websocket"
      };
      XHR_STATES = {
        complete: 4
      };
      Push = class {
        constructor(channel, event, payload, timeout) {
          this.channel = channel;
          this.event = event;
          this.payload = payload || function() {
            return {};
          };
          this.receivedResp = null;
          this.timeout = timeout;
          this.timeoutTimer = null;
          this.recHooks = [];
          this.sent = false;
        }
        /**
         *
         * @param {number} timeout
         */
        resend(timeout) {
          this.timeout = timeout;
          this.reset();
          this.send();
        }
        /**
         *
         */
        send() {
          if (this.hasReceived("timeout")) {
            return;
          }
          this.startTimeout();
          this.sent = true;
          this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
          });
        }
        /**
         *
         * @param {*} status
         * @param {*} callback
         */
        receive(status, callback) {
          if (this.hasReceived(status)) {
            callback(this.receivedResp.response);
          }
          this.recHooks.push({ status, callback });
          return this;
        }
        /**
         * @private
         */
        reset() {
          this.cancelRefEvent();
          this.ref = null;
          this.refEvent = null;
          this.receivedResp = null;
          this.sent = false;
        }
        /**
         * @private
         */
        matchReceive({ status, response, _ref }) {
          this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
        }
        /**
         * @private
         */
        cancelRefEvent() {
          if (!this.refEvent) {
            return;
          }
          this.channel.off(this.refEvent);
        }
        /**
         * @private
         */
        cancelTimeout() {
          clearTimeout(this.timeoutTimer);
          this.timeoutTimer = null;
        }
        /**
         * @private
         */
        startTimeout() {
          if (this.timeoutTimer) {
            this.cancelTimeout();
          }
          this.ref = this.channel.socket.makeRef();
          this.refEvent = this.channel.replyEventName(this.ref);
          this.channel.on(this.refEvent, (payload) => {
            this.cancelRefEvent();
            this.cancelTimeout();
            this.receivedResp = payload;
            this.matchReceive(payload);
          });
          this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {});
          }, this.timeout);
        }
        /**
         * @private
         */
        hasReceived(status) {
          return this.receivedResp && this.receivedResp.status === status;
        }
        /**
         * @private
         */
        trigger(status, response) {
          this.channel.trigger(this.refEvent, { status, response });
        }
      };
      Timer = class {
        constructor(callback, timerCalc) {
          this.callback = callback;
          this.timerCalc = timerCalc;
          this.timer = null;
          this.tries = 0;
        }
        reset() {
          this.tries = 0;
          clearTimeout(this.timer);
        }
        /**
         * Cancels any previous scheduleTimeout and schedules callback
         */
        scheduleTimeout() {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.tries = this.tries + 1;
            this.callback();
          }, this.timerCalc(this.tries + 1));
        }
      };
      Channel = class {
        constructor(topic, params, socket) {
          this.state = CHANNEL_STATES.closed;
          this.topic = topic;
          this.params = closure(params || {});
          this.socket = socket;
          this.bindings = [];
          this.bindingRef = 0;
          this.timeout = this.socket.timeout;
          this.joinedOnce = false;
          this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
          this.pushBuffer = [];
          this.stateChangeRefs = [];
          this.rejoinTimer = new Timer(() => {
            if (this.socket.isConnected()) {
              this.rejoin();
            }
          }, this.socket.rejoinAfterMs);
          this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
          this.stateChangeRefs.push(
            this.socket.onOpen(() => {
              this.rejoinTimer.reset();
              if (this.isErrored()) {
                this.rejoin();
              }
            })
          );
          this.joinPush.receive("ok", () => {
            this.state = CHANNEL_STATES.joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent) => pushEvent.send());
            this.pushBuffer = [];
          });
          this.joinPush.receive("error", () => {
            this.state = CHANNEL_STATES.errored;
            if (this.socket.isConnected()) {
              this.rejoinTimer.scheduleTimeout();
            }
          });
          this.onClose(() => {
            this.rejoinTimer.reset();
            if (this.socket.hasLogger())
              this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
            this.state = CHANNEL_STATES.closed;
            this.socket.remove(this);
          });
          this.onError((reason) => {
            if (this.socket.hasLogger())
              this.socket.log("channel", `error ${this.topic}`, reason);
            if (this.isJoining()) {
              this.joinPush.reset();
            }
            this.state = CHANNEL_STATES.errored;
            if (this.socket.isConnected()) {
              this.rejoinTimer.scheduleTimeout();
            }
          });
          this.joinPush.receive("timeout", () => {
            if (this.socket.hasLogger())
              this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
            let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
            leavePush.send();
            this.state = CHANNEL_STATES.errored;
            this.joinPush.reset();
            if (this.socket.isConnected()) {
              this.rejoinTimer.scheduleTimeout();
            }
          });
          this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
            this.trigger(this.replyEventName(ref), payload);
          });
        }
        /**
         * Join the channel
         * @param {integer} timeout
         * @returns {Push}
         */
        join(timeout = this.timeout) {
          if (this.joinedOnce) {
            throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
          } else {
            this.timeout = timeout;
            this.joinedOnce = true;
            this.rejoin();
            return this.joinPush;
          }
        }
        /**
         * Hook into channel close
         * @param {Function} callback
         */
        onClose(callback) {
          this.on(CHANNEL_EVENTS.close, callback);
        }
        /**
         * Hook into channel errors
         * @param {Function} callback
         */
        onError(callback) {
          return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
        }
        /**
         * Subscribes on channel events
         *
         * Subscription returns a ref counter, which can be used later to
         * unsubscribe the exact event listener
         *
         * @example
         * const ref1 = channel.on("event", do_stuff)
         * const ref2 = channel.on("event", do_other_stuff)
         * channel.off("event", ref1)
         * // Since unsubscription, do_stuff won't fire,
         * // while do_other_stuff will keep firing on the "event"
         *
         * @param {string} event
         * @param {Function} callback
         * @returns {integer} ref
         */
        on(event, callback) {
          let ref = this.bindingRef++;
          this.bindings.push({ event, ref, callback });
          return ref;
        }
        /**
         * Unsubscribes off of channel events
         *
         * Use the ref returned from a channel.on() to unsubscribe one
         * handler, or pass nothing for the ref to unsubscribe all
         * handlers for the given event.
         *
         * @example
         * // Unsubscribe the do_stuff handler
         * const ref1 = channel.on("event", do_stuff)
         * channel.off("event", ref1)
         *
         * // Unsubscribe all handlers from event
         * channel.off("event")
         *
         * @param {string} event
         * @param {integer} ref
         */
        off(event, ref) {
          this.bindings = this.bindings.filter((bind) => {
            return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
          });
        }
        /**
         * @private
         */
        canPush() {
          return this.socket.isConnected() && this.isJoined();
        }
        /**
         * Sends a message `event` to phoenix with the payload `payload`.
         * Phoenix receives this in the `handle_in(event, payload, socket)`
         * function. if phoenix replies or it times out (default 10000ms),
         * then optionally the reply can be received.
         *
         * @example
         * channel.push("event")
         *   .receive("ok", payload => console.log("phoenix replied:", payload))
         *   .receive("error", err => console.log("phoenix errored", err))
         *   .receive("timeout", () => console.log("timed out pushing"))
         * @param {string} event
         * @param {Object} payload
         * @param {number} [timeout]
         * @returns {Push}
         */
        push(event, payload, timeout = this.timeout) {
          payload = payload || {};
          if (!this.joinedOnce) {
            throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
          }
          let pushEvent = new Push(this, event, function() {
            return payload;
          }, timeout);
          if (this.canPush()) {
            pushEvent.send();
          } else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
          }
          return pushEvent;
        }
        /** Leaves the channel
         *
         * Unsubscribes from server events, and
         * instructs channel to terminate on server
         *
         * Triggers onClose() hooks
         *
         * To receive leave acknowledgements, use the `receive`
         * hook to bind to the server ack, ie:
         *
         * @example
         * channel.leave().receive("ok", () => alert("left!") )
         *
         * @param {integer} timeout
         * @returns {Push}
         */
        leave(timeout = this.timeout) {
          this.rejoinTimer.reset();
          this.joinPush.cancelTimeout();
          this.state = CHANNEL_STATES.leaving;
          let onClose = () => {
            if (this.socket.hasLogger())
              this.socket.log("channel", `leave ${this.topic}`);
            this.trigger(CHANNEL_EVENTS.close, "leave");
          };
          let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
          leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
          leavePush.send();
          if (!this.canPush()) {
            leavePush.trigger("ok", {});
          }
          return leavePush;
        }
        /**
         * Overridable message hook
         *
         * Receives all events for specialized message handling
         * before dispatching to the channel callbacks.
         *
         * Must return the payload, modified or unmodified
         * @param {string} event
         * @param {Object} payload
         * @param {integer} ref
         * @returns {Object}
         */
        onMessage(_event, payload, _ref) {
          return payload;
        }
        /**
         * @private
         */
        isMember(topic, event, payload, joinRef) {
          if (this.topic !== topic) {
            return false;
          }
          if (joinRef && joinRef !== this.joinRef()) {
            if (this.socket.hasLogger())
              this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
            return false;
          } else {
            return true;
          }
        }
        /**
         * @private
         */
        joinRef() {
          return this.joinPush.ref;
        }
        /**
         * @private
         */
        rejoin(timeout = this.timeout) {
          if (this.isLeaving()) {
            return;
          }
          this.socket.leaveOpenTopic(this.topic);
          this.state = CHANNEL_STATES.joining;
          this.joinPush.resend(timeout);
        }
        /**
         * @private
         */
        trigger(event, payload, ref, joinRef) {
          let handledPayload = this.onMessage(event, payload, ref, joinRef);
          if (payload && !handledPayload) {
            throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
          }
          let eventBindings = this.bindings.filter((bind) => bind.event === event);
          for (let i = 0; i < eventBindings.length; i++) {
            let bind = eventBindings[i];
            bind.callback(handledPayload, ref, joinRef || this.joinRef());
          }
        }
        /**
         * @private
         */
        replyEventName(ref) {
          return `chan_reply_${ref}`;
        }
        /**
         * @private
         */
        isClosed() {
          return this.state === CHANNEL_STATES.closed;
        }
        /**
         * @private
         */
        isErrored() {
          return this.state === CHANNEL_STATES.errored;
        }
        /**
         * @private
         */
        isJoined() {
          return this.state === CHANNEL_STATES.joined;
        }
        /**
         * @private
         */
        isJoining() {
          return this.state === CHANNEL_STATES.joining;
        }
        /**
         * @private
         */
        isLeaving() {
          return this.state === CHANNEL_STATES.leaving;
        }
      };
      Ajax = class {
        static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
          if (global.XDomainRequest) {
            let req = new global.XDomainRequest();
            return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
          } else {
            let req = new global.XMLHttpRequest();
            return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
          }
        }
        static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
          req.timeout = timeout;
          req.open(method, endPoint);
          req.onload = () => {
            let response = this.parseJSON(req.responseText);
            callback && callback(response);
          };
          if (ontimeout) {
            req.ontimeout = ontimeout;
          }
          req.onprogress = () => {
          };
          req.send(body);
          return req;
        }
        static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
          req.open(method, endPoint, true);
          req.timeout = timeout;
          req.setRequestHeader("Content-Type", accept);
          req.onerror = () => callback && callback(null);
          req.onreadystatechange = () => {
            if (req.readyState === XHR_STATES.complete && callback) {
              let response = this.parseJSON(req.responseText);
              callback(response);
            }
          };
          if (ontimeout) {
            req.ontimeout = ontimeout;
          }
          req.send(body);
          return req;
        }
        static parseJSON(resp) {
          if (!resp || resp === "") {
            return null;
          }
          try {
            return JSON.parse(resp);
          } catch (e) {
            console && console.log("failed to parse JSON response", resp);
            return null;
          }
        }
        static serialize(obj, parentKey) {
          let queryStr = [];
          for (var key in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
              continue;
            }
            let paramKey = parentKey ? `${parentKey}[${key}]` : key;
            let paramVal = obj[key];
            if (typeof paramVal === "object") {
              queryStr.push(this.serialize(paramVal, paramKey));
            } else {
              queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
            }
          }
          return queryStr.join("&");
        }
        static appendParams(url, params) {
          if (Object.keys(params).length === 0) {
            return url;
          }
          let prefix = url.match(/\?/) ? "&" : "?";
          return `${url}${prefix}${this.serialize(params)}`;
        }
      };
      arrayBufferToBase64 = (buffer) => {
        let binary = "";
        let bytes = new Uint8Array(buffer);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
      };
      LongPoll = class {
        constructor(endPoint) {
          this.endPoint = null;
          this.token = null;
          this.skipHeartbeat = true;
          this.reqs = /* @__PURE__ */ new Set();
          this.awaitingBatchAck = false;
          this.currentBatch = null;
          this.currentBatchTimer = null;
          this.batchBuffer = [];
          this.onopen = function() {
          };
          this.onerror = function() {
          };
          this.onmessage = function() {
          };
          this.onclose = function() {
          };
          this.pollEndpoint = this.normalizeEndpoint(endPoint);
          this.readyState = SOCKET_STATES.connecting;
          setTimeout(() => this.poll(), 0);
        }
        normalizeEndpoint(endPoint) {
          return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
        }
        endpointURL() {
          return Ajax.appendParams(this.pollEndpoint, { token: this.token });
        }
        closeAndRetry(code, reason, wasClean) {
          this.close(code, reason, wasClean);
          this.readyState = SOCKET_STATES.connecting;
        }
        ontimeout() {
          this.onerror("timeout");
          this.closeAndRetry(1005, "timeout", false);
        }
        isActive() {
          return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
        }
        poll() {
          this.ajax("GET", "application/json", null, () => this.ontimeout(), (resp) => {
            if (resp) {
              var { status, token, messages } = resp;
              this.token = token;
            } else {
              status = 0;
            }
            switch (status) {
              case 200:
                messages.forEach((msg) => {
                  setTimeout(() => this.onmessage({ data: msg }), 0);
                });
                this.poll();
                break;
              case 204:
                this.poll();
                break;
              case 410:
                this.readyState = SOCKET_STATES.open;
                this.onopen({});
                this.poll();
                break;
              case 403:
                this.onerror(403);
                this.close(1008, "forbidden", false);
                break;
              case 0:
              case 500:
                this.onerror(500);
                this.closeAndRetry(1011, "internal server error", 500);
                break;
              default:
                throw new Error(`unhandled poll status ${status}`);
            }
          });
        }
        // we collect all pushes within the current event loop by
        // setTimeout 0, which optimizes back-to-back procedural
        // pushes against an empty buffer
        send(body) {
          if (typeof body !== "string") {
            body = arrayBufferToBase64(body);
          }
          if (this.currentBatch) {
            this.currentBatch.push(body);
          } else if (this.awaitingBatchAck) {
            this.batchBuffer.push(body);
          } else {
            this.currentBatch = [body];
            this.currentBatchTimer = setTimeout(() => {
              this.batchSend(this.currentBatch);
              this.currentBatch = null;
            }, 0);
          }
        }
        batchSend(messages) {
          this.awaitingBatchAck = true;
          this.ajax("POST", "application/x-ndjson", messages.join("\n"), () => this.onerror("timeout"), (resp) => {
            this.awaitingBatchAck = false;
            if (!resp || resp.status !== 200) {
              this.onerror(resp && resp.status);
              this.closeAndRetry(1011, "internal server error", false);
            } else if (this.batchBuffer.length > 0) {
              this.batchSend(this.batchBuffer);
              this.batchBuffer = [];
            }
          });
        }
        close(code, reason, wasClean) {
          for (let req of this.reqs) {
            req.abort();
          }
          this.readyState = SOCKET_STATES.closed;
          let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
          this.batchBuffer = [];
          clearTimeout(this.currentBatchTimer);
          this.currentBatchTimer = null;
          if (typeof CloseEvent !== "undefined") {
            this.onclose(new CloseEvent("close", opts));
          } else {
            this.onclose(opts);
          }
        }
        ajax(method, contentType, body, onCallerTimeout, callback) {
          let req;
          let ontimeout = () => {
            this.reqs.delete(req);
            onCallerTimeout();
          };
          req = Ajax.request(method, this.endpointURL(), contentType, body, this.timeout, ontimeout, (resp) => {
            this.reqs.delete(req);
            if (this.isActive()) {
              callback(resp);
            }
          });
          this.reqs.add(req);
        }
      };
      Presence = class {
        constructor(channel, opts = {}) {
          let events = opts.events || { state: "presence_state", diff: "presence_diff" };
          this.state = {};
          this.pendingDiffs = [];
          this.channel = channel;
          this.joinRef = null;
          this.caller = {
            onJoin: function() {
            },
            onLeave: function() {
            },
            onSync: function() {
            }
          };
          this.channel.on(events.state, (newState) => {
            let { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel.joinRef();
            this.state = Presence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff) => {
              this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
          });
          this.channel.on(events.diff, (diff) => {
            let { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) {
              this.pendingDiffs.push(diff);
            } else {
              this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
              onSync();
            }
          });
        }
        onJoin(callback) {
          this.caller.onJoin = callback;
        }
        onLeave(callback) {
          this.caller.onLeave = callback;
        }
        onSync(callback) {
          this.caller.onSync = callback;
        }
        list(by) {
          return Presence.list(this.state, by);
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
        // lower-level public static API
        /**
         * Used to sync the list of presences on the server
         * with the client's state. An optional `onJoin` and `onLeave` callback can
         * be provided to react to changes in the client's local presences across
         * disconnects and reconnects with the server.
         *
         * @returns {Presence}
         */
        static syncState(currentState, newState, onJoin, onLeave) {
          let state = this.clone(currentState);
          let joins = {};
          let leaves = {};
          this.map(state, (key, presence) => {
            if (!newState[key]) {
              leaves[key] = presence;
            }
          });
          this.map(newState, (key, newPresence) => {
            let currentPresence = state[key];
            if (currentPresence) {
              let newRefs = newPresence.metas.map((m) => m.phx_ref);
              let curRefs = currentPresence.metas.map((m) => m.phx_ref);
              let joinedMetas = newPresence.metas.filter((m) => curRefs.indexOf(m.phx_ref) < 0);
              let leftMetas = currentPresence.metas.filter((m) => newRefs.indexOf(m.phx_ref) < 0);
              if (joinedMetas.length > 0) {
                joins[key] = newPresence;
                joins[key].metas = joinedMetas;
              }
              if (leftMetas.length > 0) {
                leaves[key] = this.clone(currentPresence);
                leaves[key].metas = leftMetas;
              }
            } else {
              joins[key] = newPresence;
            }
          });
          return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
        }
        /**
         *
         * Used to sync a diff of presence join and leave
         * events from the server, as they happen. Like `syncState`, `syncDiff`
         * accepts optional `onJoin` and `onLeave` callbacks to react to a user
         * joining or leaving from a device.
         *
         * @returns {Presence}
         */
        static syncDiff(state, diff, onJoin, onLeave) {
          let { joins, leaves } = this.clone(diff);
          if (!onJoin) {
            onJoin = function() {
            };
          }
          if (!onLeave) {
            onLeave = function() {
            };
          }
          this.map(joins, (key, newPresence) => {
            let currentPresence = state[key];
            state[key] = this.clone(newPresence);
            if (currentPresence) {
              let joinedRefs = state[key].metas.map((m) => m.phx_ref);
              let curMetas = currentPresence.metas.filter((m) => joinedRefs.indexOf(m.phx_ref) < 0);
              state[key].metas.unshift(...curMetas);
            }
            onJoin(key, currentPresence, newPresence);
          });
          this.map(leaves, (key, leftPresence) => {
            let currentPresence = state[key];
            if (!currentPresence) {
              return;
            }
            let refsToRemove = leftPresence.metas.map((m) => m.phx_ref);
            currentPresence.metas = currentPresence.metas.filter((p) => {
              return refsToRemove.indexOf(p.phx_ref) < 0;
            });
            onLeave(key, currentPresence, leftPresence);
            if (currentPresence.metas.length === 0) {
              delete state[key];
            }
          });
          return state;
        }
        /**
         * Returns the array of presences, with selected metadata.
         *
         * @param {Object} presences
         * @param {Function} chooser
         *
         * @returns {Presence}
         */
        static list(presences, chooser) {
          if (!chooser) {
            chooser = function(key, pres) {
              return pres;
            };
          }
          return this.map(presences, (key, presence) => {
            return chooser(key, presence);
          });
        }
        // private
        static map(obj, func) {
          return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
        }
        static clone(obj) {
          return JSON.parse(JSON.stringify(obj));
        }
      };
      serializer_default = {
        HEADER_LENGTH: 1,
        META_LENGTH: 4,
        KINDS: { push: 0, reply: 1, broadcast: 2 },
        encode(msg, callback) {
          if (msg.payload.constructor === ArrayBuffer) {
            return callback(this.binaryEncode(msg));
          } else {
            let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
            return callback(JSON.stringify(payload));
          }
        },
        decode(rawPayload, callback) {
          if (rawPayload.constructor === ArrayBuffer) {
            return callback(this.binaryDecode(rawPayload));
          } else {
            let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
            return callback({ join_ref, ref, topic, event, payload });
          }
        },
        // private
        binaryEncode(message) {
          let { join_ref, ref, event, topic, payload } = message;
          let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
          let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
          let view = new DataView(header);
          let offset = 0;
          view.setUint8(offset++, this.KINDS.push);
          view.setUint8(offset++, join_ref.length);
          view.setUint8(offset++, ref.length);
          view.setUint8(offset++, topic.length);
          view.setUint8(offset++, event.length);
          Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
          Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
          Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
          Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
          var combined = new Uint8Array(header.byteLength + payload.byteLength);
          combined.set(new Uint8Array(header), 0);
          combined.set(new Uint8Array(payload), header.byteLength);
          return combined.buffer;
        },
        binaryDecode(buffer) {
          let view = new DataView(buffer);
          let kind = view.getUint8(0);
          let decoder = new TextDecoder();
          switch (kind) {
            case this.KINDS.push:
              return this.decodePush(buffer, view, decoder);
            case this.KINDS.reply:
              return this.decodeReply(buffer, view, decoder);
            case this.KINDS.broadcast:
              return this.decodeBroadcast(buffer, view, decoder);
          }
        },
        decodePush(buffer, view, decoder) {
          let joinRefSize = view.getUint8(1);
          let topicSize = view.getUint8(2);
          let eventSize = view.getUint8(3);
          let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
          let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
          offset = offset + joinRefSize;
          let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
          offset = offset + topicSize;
          let event = decoder.decode(buffer.slice(offset, offset + eventSize));
          offset = offset + eventSize;
          let data = buffer.slice(offset, buffer.byteLength);
          return { join_ref: joinRef, ref: null, topic, event, payload: data };
        },
        decodeReply(buffer, view, decoder) {
          let joinRefSize = view.getUint8(1);
          let refSize = view.getUint8(2);
          let topicSize = view.getUint8(3);
          let eventSize = view.getUint8(4);
          let offset = this.HEADER_LENGTH + this.META_LENGTH;
          let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
          offset = offset + joinRefSize;
          let ref = decoder.decode(buffer.slice(offset, offset + refSize));
          offset = offset + refSize;
          let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
          offset = offset + topicSize;
          let event = decoder.decode(buffer.slice(offset, offset + eventSize));
          offset = offset + eventSize;
          let data = buffer.slice(offset, buffer.byteLength);
          let payload = { status: event, response: data };
          return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
        },
        decodeBroadcast(buffer, view, decoder) {
          let topicSize = view.getUint8(1);
          let eventSize = view.getUint8(2);
          let offset = this.HEADER_LENGTH + 2;
          let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
          offset = offset + topicSize;
          let event = decoder.decode(buffer.slice(offset, offset + eventSize));
          offset = offset + eventSize;
          let data = buffer.slice(offset, buffer.byteLength);
          return { join_ref: null, ref: null, topic, event, payload: data };
        }
      };
      Socket = class {
        constructor(endPoint, opts = {}) {
          this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
          this.channels = [];
          this.sendBuffer = [];
          this.ref = 0;
          this.timeout = opts.timeout || DEFAULT_TIMEOUT;
          this.transport = opts.transport || global.WebSocket || LongPoll;
          this.primaryPassedHealthCheck = false;
          this.longPollFallbackMs = opts.longPollFallbackMs;
          this.fallbackTimer = null;
          this.sessionStore = opts.sessionStorage || global && global.sessionStorage;
          this.establishedConnections = 0;
          this.defaultEncoder = serializer_default.encode.bind(serializer_default);
          this.defaultDecoder = serializer_default.decode.bind(serializer_default);
          this.closeWasClean = false;
          this.disconnecting = false;
          this.binaryType = opts.binaryType || "arraybuffer";
          this.connectClock = 1;
          if (this.transport !== LongPoll) {
            this.encode = opts.encode || this.defaultEncoder;
            this.decode = opts.decode || this.defaultDecoder;
          } else {
            this.encode = this.defaultEncoder;
            this.decode = this.defaultDecoder;
          }
          let awaitingConnectionOnPageShow = null;
          if (phxWindow && phxWindow.addEventListener) {
            phxWindow.addEventListener("pagehide", (_e) => {
              if (this.conn) {
                this.disconnect();
                awaitingConnectionOnPageShow = this.connectClock;
              }
            });
            phxWindow.addEventListener("pageshow", (_e) => {
              if (awaitingConnectionOnPageShow === this.connectClock) {
                awaitingConnectionOnPageShow = null;
                this.connect();
              }
            });
          }
          this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
          this.rejoinAfterMs = (tries) => {
            if (opts.rejoinAfterMs) {
              return opts.rejoinAfterMs(tries);
            } else {
              return [1e3, 2e3, 5e3][tries - 1] || 1e4;
            }
          };
          this.reconnectAfterMs = (tries) => {
            if (opts.reconnectAfterMs) {
              return opts.reconnectAfterMs(tries);
            } else {
              return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
            }
          };
          this.logger = opts.logger || null;
          if (!this.logger && opts.debug) {
            this.logger = (kind, msg, data) => {
              console.log(`${kind}: ${msg}`, data);
            };
          }
          this.longpollerTimeout = opts.longpollerTimeout || 2e4;
          this.params = closure(opts.params || {});
          this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
          this.vsn = opts.vsn || DEFAULT_VSN;
          this.heartbeatTimeoutTimer = null;
          this.heartbeatTimer = null;
          this.pendingHeartbeatRef = null;
          this.reconnectTimer = new Timer(() => {
            this.teardown(() => this.connect());
          }, this.reconnectAfterMs);
        }
        /**
         * Returns the LongPoll transport reference
         */
        getLongPollTransport() {
          return LongPoll;
        }
        /**
         * Disconnects and replaces the active transport
         *
         * @param {Function} newTransport - The new transport class to instantiate
         *
         */
        replaceTransport(newTransport) {
          this.connectClock++;
          this.closeWasClean = true;
          clearTimeout(this.fallbackTimer);
          this.reconnectTimer.reset();
          if (this.conn) {
            this.conn.close();
            this.conn = null;
          }
          this.transport = newTransport;
        }
        /**
         * Returns the socket protocol
         *
         * @returns {string}
         */
        protocol() {
          return location.protocol.match(/^https/) ? "wss" : "ws";
        }
        /**
         * The fully qualified socket url
         *
         * @returns {string}
         */
        endPointURL() {
          let uri = Ajax.appendParams(
            Ajax.appendParams(this.endPoint, this.params()),
            { vsn: this.vsn }
          );
          if (uri.charAt(0) !== "/") {
            return uri;
          }
          if (uri.charAt(1) === "/") {
            return `${this.protocol()}:${uri}`;
          }
          return `${this.protocol()}://${location.host}${uri}`;
        }
        /**
         * Disconnects the socket
         *
         * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
         *
         * @param {Function} callback - Optional callback which is called after socket is disconnected.
         * @param {integer} code - A status code for disconnection (Optional).
         * @param {string} reason - A textual description of the reason to disconnect. (Optional)
         */
        disconnect(callback, code, reason) {
          this.connectClock++;
          this.disconnecting = true;
          this.closeWasClean = true;
          clearTimeout(this.fallbackTimer);
          this.reconnectTimer.reset();
          this.teardown(() => {
            this.disconnecting = false;
            callback && callback();
          }, code, reason);
        }
        /**
         *
         * @param {Object} params - The params to send when connecting, for example `{user_id: userToken}`
         *
         * Passing params to connect is deprecated; pass them in the Socket constructor instead:
         * `new Socket("/socket", {params: {user_id: userToken}})`.
         */
        connect(params) {
          if (params) {
            console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
            this.params = closure(params);
          }
          if (this.conn && !this.disconnecting) {
            return;
          }
          if (this.longPollFallbackMs && this.transport !== LongPoll) {
            this.connectWithFallback(LongPoll, this.longPollFallbackMs);
          } else {
            this.transportConnect();
          }
        }
        /**
         * Logs the message. Override `this.logger` for specialized logging. noops by default
         * @param {string} kind
         * @param {string} msg
         * @param {Object} data
         */
        log(kind, msg, data) {
          this.logger && this.logger(kind, msg, data);
        }
        /**
         * Returns true if a logger has been set on this socket.
         */
        hasLogger() {
          return this.logger !== null;
        }
        /**
         * Registers callbacks for connection open events
         *
         * @example socket.onOpen(function(){ console.info("the socket was opened") })
         *
         * @param {Function} callback
         */
        onOpen(callback) {
          let ref = this.makeRef();
          this.stateChangeCallbacks.open.push([ref, callback]);
          return ref;
        }
        /**
         * Registers callbacks for connection close events
         * @param {Function} callback
         */
        onClose(callback) {
          let ref = this.makeRef();
          this.stateChangeCallbacks.close.push([ref, callback]);
          return ref;
        }
        /**
         * Registers callbacks for connection error events
         *
         * @example socket.onError(function(error){ alert("An error occurred") })
         *
         * @param {Function} callback
         */
        onError(callback) {
          let ref = this.makeRef();
          this.stateChangeCallbacks.error.push([ref, callback]);
          return ref;
        }
        /**
         * Registers callbacks for connection message events
         * @param {Function} callback
         */
        onMessage(callback) {
          let ref = this.makeRef();
          this.stateChangeCallbacks.message.push([ref, callback]);
          return ref;
        }
        /**
         * Pings the server and invokes the callback with the RTT in milliseconds
         * @param {Function} callback
         *
         * Returns true if the ping was pushed or false if unable to be pushed.
         */
        ping(callback) {
          if (!this.isConnected()) {
            return false;
          }
          let ref = this.makeRef();
          let startTime = Date.now();
          this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
          let onMsgRef = this.onMessage((msg) => {
            if (msg.ref === ref) {
              this.off([onMsgRef]);
              callback(Date.now() - startTime);
            }
          });
          return true;
        }
        /**
         * @private
         */
        transportConnect() {
          this.connectClock++;
          this.closeWasClean = false;
          this.conn = new this.transport(this.endPointURL());
          this.conn.binaryType = this.binaryType;
          this.conn.timeout = this.longpollerTimeout;
          this.conn.onopen = () => this.onConnOpen();
          this.conn.onerror = (error) => this.onConnError(error);
          this.conn.onmessage = (event) => this.onConnMessage(event);
          this.conn.onclose = (event) => this.onConnClose(event);
        }
        getSession(key) {
          return this.sessionStore && this.sessionStore.getItem(key);
        }
        storeSession(key, val) {
          this.sessionStore && this.sessionStore.setItem(key, val);
        }
        connectWithFallback(fallbackTransport, fallbackThreshold = 2500) {
          clearTimeout(this.fallbackTimer);
          let established = false;
          let primaryTransport = true;
          let openRef, errorRef;
          let fallback = (reason) => {
            this.log("transport", `falling back to ${fallbackTransport.name}...`, reason);
            this.off([openRef, errorRef]);
            primaryTransport = false;
            this.replaceTransport(fallbackTransport);
            this.transportConnect();
          };
          if (this.getSession(`phx:fallback:${fallbackTransport.name}`)) {
            return fallback("memorized");
          }
          this.fallbackTimer = setTimeout(fallback, fallbackThreshold);
          errorRef = this.onError((reason) => {
            this.log("transport", "error", reason);
            if (primaryTransport && !established) {
              clearTimeout(this.fallbackTimer);
              fallback(reason);
            }
          });
          this.onOpen(() => {
            established = true;
            if (!primaryTransport) {
              if (!this.primaryPassedHealthCheck) {
                this.storeSession(`phx:fallback:${fallbackTransport.name}`, "true");
              }
              return this.log("transport", `established ${fallbackTransport.name} fallback`);
            }
            clearTimeout(this.fallbackTimer);
            this.fallbackTimer = setTimeout(fallback, fallbackThreshold);
            this.ping((rtt) => {
              this.log("transport", "connected to primary after", rtt);
              this.primaryPassedHealthCheck = true;
              clearTimeout(this.fallbackTimer);
            });
          });
          this.transportConnect();
        }
        clearHeartbeats() {
          clearTimeout(this.heartbeatTimer);
          clearTimeout(this.heartbeatTimeoutTimer);
        }
        onConnOpen() {
          if (this.hasLogger())
            this.log("transport", `${this.transport.name} connected to ${this.endPointURL()}`);
          this.closeWasClean = false;
          this.disconnecting = false;
          this.establishedConnections++;
          this.flushSendBuffer();
          this.reconnectTimer.reset();
          this.resetHeartbeat();
          this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
        }
        /**
         * @private
         */
        heartbeatTimeout() {
          if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            if (this.hasLogger()) {
              this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            }
            this.triggerChanError();
            this.closeWasClean = false;
            this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
          }
        }
        resetHeartbeat() {
          if (this.conn && this.conn.skipHeartbeat) {
            return;
          }
          this.pendingHeartbeatRef = null;
          this.clearHeartbeats();
          this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
        teardown(callback, code, reason) {
          if (!this.conn) {
            return callback && callback();
          }
          let connectClock = this.connectClock;
          this.waitForBufferDone(() => {
            if (connectClock !== this.connectClock) {
              return;
            }
            if (this.conn) {
              if (code) {
                this.conn.close(code, reason || "");
              } else {
                this.conn.close();
              }
            }
            this.waitForSocketClosed(() => {
              if (connectClock !== this.connectClock) {
                return;
              }
              if (this.conn) {
                this.conn.onopen = function() {
                };
                this.conn.onerror = function() {
                };
                this.conn.onmessage = function() {
                };
                this.conn.onclose = function() {
                };
                this.conn = null;
              }
              callback && callback();
            });
          });
        }
        waitForBufferDone(callback, tries = 1) {
          if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
            callback();
            return;
          }
          setTimeout(() => {
            this.waitForBufferDone(callback, tries + 1);
          }, 150 * tries);
        }
        waitForSocketClosed(callback, tries = 1) {
          if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
            callback();
            return;
          }
          setTimeout(() => {
            this.waitForSocketClosed(callback, tries + 1);
          }, 150 * tries);
        }
        onConnClose(event) {
          let closeCode = event && event.code;
          if (this.hasLogger())
            this.log("transport", "close", event);
          this.triggerChanError();
          this.clearHeartbeats();
          if (!this.closeWasClean && closeCode !== 1e3) {
            this.reconnectTimer.scheduleTimeout();
          }
          this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
        }
        /**
         * @private
         */
        onConnError(error) {
          if (this.hasLogger())
            this.log("transport", error);
          let transportBefore = this.transport;
          let establishedBefore = this.establishedConnections;
          this.stateChangeCallbacks.error.forEach(([, callback]) => {
            callback(error, transportBefore, establishedBefore);
          });
          if (transportBefore === this.transport || establishedBefore > 0) {
            this.triggerChanError();
          }
        }
        /**
         * @private
         */
        triggerChanError() {
          this.channels.forEach((channel) => {
            if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
              channel.trigger(CHANNEL_EVENTS.error);
            }
          });
        }
        /**
         * @returns {string}
         */
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case SOCKET_STATES.connecting:
              return "connecting";
            case SOCKET_STATES.open:
              return "open";
            case SOCKET_STATES.closing:
              return "closing";
            default:
              return "closed";
          }
        }
        /**
         * @returns {boolean}
         */
        isConnected() {
          return this.connectionState() === "open";
        }
        /**
         * @private
         *
         * @param {Channel}
         */
        remove(channel) {
          this.off(channel.stateChangeRefs);
          this.channels = this.channels.filter((c) => c !== channel);
        }
        /**
         * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
         *
         * @param {refs} - list of refs returned by calls to
         *                 `onOpen`, `onClose`, `onError,` and `onMessage`
         */
        off(refs) {
          for (let key in this.stateChangeCallbacks) {
            this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
              return refs.indexOf(ref) === -1;
            });
          }
        }
        /**
         * Initiates a new channel for the given topic
         *
         * @param {string} topic
         * @param {Object} chanParams - Parameters for the channel
         * @returns {Channel}
         */
        channel(topic, chanParams = {}) {
          let chan = new Channel(topic, chanParams, this);
          this.channels.push(chan);
          return chan;
        }
        /**
         * @param {Object} data
         */
        push(data) {
          if (this.hasLogger()) {
            let { topic, event, payload, ref, join_ref } = data;
            this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
          }
          if (this.isConnected()) {
            this.encode(data, (result) => this.conn.send(result));
          } else {
            this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
          }
        }
        /**
         * Return the next message ref, accounting for overflows
         * @returns {string}
         */
        makeRef() {
          let newRef = this.ref + 1;
          if (newRef === this.ref) {
            this.ref = 0;
          } else {
            this.ref = newRef;
          }
          return this.ref.toString();
        }
        sendHeartbeat() {
          if (this.pendingHeartbeatRef && !this.isConnected()) {
            return;
          }
          this.pendingHeartbeatRef = this.makeRef();
          this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
          this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
        }
        flushSendBuffer() {
          if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback) => callback());
            this.sendBuffer = [];
          }
        }
        onConnMessage(rawMessage) {
          this.decode(rawMessage.data, (msg) => {
            let { topic, event, payload, ref, join_ref } = msg;
            if (ref && ref === this.pendingHeartbeatRef) {
              this.clearHeartbeats();
              this.pendingHeartbeatRef = null;
              this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
            }
            if (this.hasLogger())
              this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
            for (let i = 0; i < this.channels.length; i++) {
              const channel = this.channels[i];
              if (!channel.isMember(topic, event, payload, join_ref)) {
                continue;
              }
              channel.trigger(event, payload, ref, join_ref);
            }
            for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
              let [, callback] = this.stateChangeCallbacks.message[i];
              callback(msg);
            }
          });
        }
        leaveOpenTopic(topic) {
          let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
          if (dupChannel) {
            if (this.hasLogger())
              this.log("transport", `leaving duplicate topic "${topic}"`);
            dupChannel.leave();
          }
        }
      };
    }
  });

  // ../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js
  var phoenix_live_view_esm_exports = {};
  __export(phoenix_live_view_esm_exports, {
    LiveSocket: () => LiveSocket
  });
  function detectDuplicateIds() {
    let ids = /* @__PURE__ */ new Set();
    let elems = document.querySelectorAll("*[id]");
    for (let i = 0, len = elems.length; i < len; i++) {
      if (ids.has(elems[i].id)) {
        console.error(`Multiple IDs detected: ${elems[i].id}. Ensure unique element ids.`);
      } else {
        ids.add(elems[i].id);
      }
    }
  }
  function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return;
    }
    for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
      attr = toNodeAttrs[i];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      attrValue = attr.value;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        if (fromValue !== attrValue) {
          if (attr.prefix === "xmlns") {
            attrName = attr.name;
          }
          fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
        }
      } else {
        fromValue = fromNode.getAttribute(attrName);
        if (fromValue !== attrValue) {
          fromNode.setAttribute(attrName, attrValue);
        }
      }
    }
    var fromNodeAttrs = fromNode.attributes;
    for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
      attr = fromNodeAttrs[d];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          fromNode.removeAttributeNS(attrNamespaceURI, attrName);
        }
      } else {
        if (!toNode.hasAttribute(attrName)) {
          fromNode.removeAttribute(attrName);
        }
      }
    }
  }
  function createFragmentFromTemplate(str) {
    var template = doc.createElement("template");
    template.innerHTML = str;
    return template.content.childNodes[0];
  }
  function createFragmentFromRange(str) {
    if (!range) {
      range = doc.createRange();
      range.selectNode(doc.body);
    }
    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
  }
  function createFragmentFromWrap(str) {
    var fragment = doc.createElement("body");
    fragment.innerHTML = str;
    return fragment.childNodes[0];
  }
  function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) {
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }
    return createFragmentFromWrap(str);
  }
  function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;
    if (fromNodeName === toNodeName) {
      return true;
    }
    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);
    if (fromCodeStart <= 90 && toCodeStart >= 97) {
      return fromNodeName === toNodeName.toUpperCase();
    } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
      return toNodeName === fromNodeName.toUpperCase();
    } else {
      return false;
    }
  }
  function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
  }
  function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
      var nextChild = curChild.nextSibling;
      toEl.appendChild(curChild);
      curChild = nextChild;
    }
    return toEl;
  }
  function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
      fromEl[name] = toEl[name];
      if (fromEl[name]) {
        fromEl.setAttribute(name, "");
      } else {
        fromEl.removeAttribute(name);
      }
    }
  }
  function noop() {
  }
  function defaultGetNodeKey(node) {
    if (node) {
      return node.getAttribute && node.getAttribute("id") || node.id;
    }
  }
  function morphdomFactory(morphAttrs2) {
    return function morphdom2(fromNode, toNode, options) {
      if (!options) {
        options = {};
      }
      if (typeof toNode === "string") {
        if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
          var toNodeHtml = toNode;
          toNode = doc.createElement("html");
          toNode.innerHTML = toNodeHtml;
        } else {
          toNode = toElement(toNode);
        }
      } else if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        toNode = toNode.firstElementChild;
      }
      var getNodeKey = options.getNodeKey || defaultGetNodeKey;
      var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
      var onNodeAdded = options.onNodeAdded || noop;
      var onBeforeElUpdated = options.onBeforeElUpdated || noop;
      var onElUpdated = options.onElUpdated || noop;
      var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
      var onNodeDiscarded = options.onNodeDiscarded || noop;
      var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
      var skipFromChildren = options.skipFromChildren || noop;
      var addChild = options.addChild || function(parent, child) {
        return parent.appendChild(child);
      };
      var childrenOnly = options.childrenOnly === true;
      var fromNodesLookup = /* @__PURE__ */ Object.create(null);
      var keyedRemovalList = [];
      function addKeyedRemoval(key) {
        keyedRemovalList.push(key);
      }
      function walkDiscardedChildNodes(node, skipKeyedNodes) {
        if (node.nodeType === ELEMENT_NODE) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = void 0;
            if (skipKeyedNodes && (key = getNodeKey(curChild))) {
              addKeyedRemoval(key);
            } else {
              onNodeDiscarded(curChild);
              if (curChild.firstChild) {
                walkDiscardedChildNodes(curChild, skipKeyedNodes);
              }
            }
            curChild = curChild.nextSibling;
          }
        }
      }
      function removeNode(node, parentNode, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) === false) {
          return;
        }
        if (parentNode) {
          parentNode.removeChild(node);
        }
        onNodeDiscarded(node);
        walkDiscardedChildNodes(node, skipKeyedNodes);
      }
      function indexTree(node) {
        if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = getNodeKey(curChild);
            if (key) {
              fromNodesLookup[key] = curChild;
            }
            indexTree(curChild);
            curChild = curChild.nextSibling;
          }
        }
      }
      indexTree(fromNode);
      function handleNodeAdded(el) {
        onNodeAdded(el);
        var curChild = el.firstChild;
        while (curChild) {
          var nextSibling = curChild.nextSibling;
          var key = getNodeKey(curChild);
          if (key) {
            var unmatchedFromEl = fromNodesLookup[key];
            if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
              curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
              morphEl(unmatchedFromEl, curChild);
            } else {
              handleNodeAdded(curChild);
            }
          } else {
            handleNodeAdded(curChild);
          }
          curChild = nextSibling;
        }
      }
      function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
        while (curFromNodeChild) {
          var fromNextSibling = curFromNodeChild.nextSibling;
          if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
            addKeyedRemoval(curFromNodeKey);
          } else {
            removeNode(curFromNodeChild, fromEl, true);
          }
          curFromNodeChild = fromNextSibling;
        }
      }
      function morphEl(fromEl, toEl, childrenOnly2) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
          delete fromNodesLookup[toElKey];
        }
        if (!childrenOnly2) {
          if (onBeforeElUpdated(fromEl, toEl) === false) {
            return;
          }
          morphAttrs2(fromEl, toEl);
          onElUpdated(fromEl);
          if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
            return;
          }
        }
        if (fromEl.nodeName !== "TEXTAREA") {
          morphChildren(fromEl, toEl);
        } else {
          specialElHandlers.TEXTAREA(fromEl, toEl);
        }
      }
      function morphChildren(fromEl, toEl) {
        var skipFrom = skipFromChildren(fromEl);
        var curToNodeChild = toEl.firstChild;
        var curFromNodeChild = fromEl.firstChild;
        var curToNodeKey;
        var curFromNodeKey;
        var fromNextSibling;
        var toNextSibling;
        var matchingFromEl;
        outer:
          while (curToNodeChild) {
            toNextSibling = curToNodeChild.nextSibling;
            curToNodeKey = getNodeKey(curToNodeChild);
            while (!skipFrom && curFromNodeChild) {
              fromNextSibling = curFromNodeChild.nextSibling;
              if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              curFromNodeKey = getNodeKey(curFromNodeChild);
              var curFromNodeType = curFromNodeChild.nodeType;
              var isCompatible = void 0;
              if (curFromNodeType === curToNodeChild.nodeType) {
                if (curFromNodeType === ELEMENT_NODE) {
                  if (curToNodeKey) {
                    if (curToNodeKey !== curFromNodeKey) {
                      if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                        if (fromNextSibling === matchingFromEl) {
                          isCompatible = false;
                        } else {
                          fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                          if (curFromNodeKey) {
                            addKeyedRemoval(curFromNodeKey);
                          } else {
                            removeNode(curFromNodeChild, fromEl, true);
                          }
                          curFromNodeChild = matchingFromEl;
                        }
                      } else {
                        isCompatible = false;
                      }
                    }
                  } else if (curFromNodeKey) {
                    isCompatible = false;
                  }
                  isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                  if (isCompatible) {
                    morphEl(curFromNodeChild, curToNodeChild);
                  }
                } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                  isCompatible = true;
                  if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                  }
                }
              }
              if (isCompatible) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              if (curFromNodeKey) {
                addKeyedRemoval(curFromNodeKey);
              } else {
                removeNode(curFromNodeChild, fromEl, true);
              }
              curFromNodeChild = fromNextSibling;
            }
            if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
              if (!skipFrom) {
                addChild(fromEl, matchingFromEl);
              }
              morphEl(matchingFromEl, curToNodeChild);
            } else {
              var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
              if (onBeforeNodeAddedResult !== false) {
                if (onBeforeNodeAddedResult) {
                  curToNodeChild = onBeforeNodeAddedResult;
                }
                if (curToNodeChild.actualize) {
                  curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                }
                addChild(fromEl, curToNodeChild);
                handleNodeAdded(curToNodeChild);
              }
            }
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
          }
        cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
          specialElHandler(fromEl, toEl);
        }
      }
      var morphedNode = fromNode;
      var morphedNodeType = morphedNode.nodeType;
      var toNodeType = toNode.nodeType;
      if (!childrenOnly) {
        if (morphedNodeType === ELEMENT_NODE) {
          if (toNodeType === ELEMENT_NODE) {
            if (!compareNodeNames(fromNode, toNode)) {
              onNodeDiscarded(fromNode);
              morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
            }
          } else {
            morphedNode = toNode;
          }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
          if (toNodeType === morphedNodeType) {
            if (morphedNode.nodeValue !== toNode.nodeValue) {
              morphedNode.nodeValue = toNode.nodeValue;
            }
            return morphedNode;
          } else {
            morphedNode = toNode;
          }
        }
      }
      if (morphedNode === toNode) {
        onNodeDiscarded(fromNode);
      } else {
        if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
          return;
        }
        morphEl(morphedNode, toNode, childrenOnly);
        if (keyedRemovalList) {
          for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
            var elToRemove = fromNodesLookup[keyedRemovalList[i]];
            if (elToRemove) {
              removeNode(elToRemove, elToRemove.parentNode, false);
            }
          }
        }
      }
      if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        if (morphedNode.actualize) {
          morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
        }
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
      }
      return morphedNode;
    };
  }
  var CONSECUTIVE_RELOADS, MAX_RELOADS, RELOAD_JITTER_MIN, RELOAD_JITTER_MAX, FAILSAFE_JITTER, PHX_EVENT_CLASSES, PHX_COMPONENT, PHX_LIVE_LINK, PHX_TRACK_STATIC, PHX_LINK_STATE, PHX_REF, PHX_REF_SRC, PHX_TRACK_UPLOADS, PHX_UPLOAD_REF, PHX_PREFLIGHTED_REFS, PHX_DONE_REFS, PHX_DROP_TARGET, PHX_ACTIVE_ENTRY_REFS, PHX_LIVE_FILE_UPDATED, PHX_SKIP, PHX_PRUNE, PHX_PAGE_LOADING, PHX_CONNECTED_CLASS, PHX_LOADING_CLASS, PHX_NO_FEEDBACK_CLASS, PHX_ERROR_CLASS, PHX_CLIENT_ERROR_CLASS, PHX_SERVER_ERROR_CLASS, PHX_PARENT_ID, PHX_MAIN, PHX_ROOT_ID, PHX_VIEWPORT_TOP, PHX_VIEWPORT_BOTTOM, PHX_TRIGGER_ACTION, PHX_FEEDBACK_FOR, PHX_HAS_FOCUSED, FOCUSABLE_INPUTS, CHECKABLE_INPUTS, PHX_HAS_SUBMITTED, PHX_SESSION, PHX_VIEW_SELECTOR, PHX_STICKY, PHX_STATIC, PHX_READONLY, PHX_DISABLED, PHX_DISABLE_WITH, PHX_DISABLE_WITH_RESTORE, PHX_HOOK, PHX_DEBOUNCE, PHX_THROTTLE, PHX_UPDATE, PHX_STREAM, PHX_STREAM_REF, PHX_KEY, PHX_PRIVATE, PHX_AUTO_RECOVER, PHX_LV_DEBUG, PHX_LV_PROFILE, PHX_LV_LATENCY_SIM, PHX_PROGRESS, PHX_MOUNTED, LOADER_TIMEOUT, BEFORE_UNLOAD_LOADER_TIMEOUT, BINDING_PREFIX, PUSH_TIMEOUT, DEBOUNCE_TRIGGER, THROTTLED, DEBOUNCE_PREV_KEY, DEFAULTS, DYNAMICS, STATIC, COMPONENTS, EVENTS, REPLY, TITLE, TEMPLATES, STREAM, EntryUploader, logError, isCid, debug, closure2, clone, closestPhxBinding, isObject, isEqualObj, isEmpty, maybe, channelUploader, Browser, browser_default, DOM, dom_default, UploadEntry, liveUploaderFileRef, LiveUploader, ARIA, aria_default, Hooks, scrollTop, winHeight, isAtViewportTop, isAtViewportBottom, isWithinViewport, hooks_default, DOMPostMorphRestorer, DOCUMENT_FRAGMENT_NODE, range, NS_XHTML, doc, HAS_TEMPLATE_SUPPORT, HAS_RANGE_SUPPORT, specialElHandlers, ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE$1, TEXT_NODE, COMMENT_NODE, morphdom, morphdom_esm_default, DOMPatch, Rendered, viewHookID, ViewHook, focusStack, JS, js_default, serializeForm, View, LiveSocket, TransitionSet;
  var init_phoenix_live_view_esm = __esm({
    "../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js"() {
      CONSECUTIVE_RELOADS = "consecutive-reloads";
      MAX_RELOADS = 10;
      RELOAD_JITTER_MIN = 5e3;
      RELOAD_JITTER_MAX = 1e4;
      FAILSAFE_JITTER = 3e4;
      PHX_EVENT_CLASSES = [
        "phx-click-loading",
        "phx-change-loading",
        "phx-submit-loading",
        "phx-keydown-loading",
        "phx-keyup-loading",
        "phx-blur-loading",
        "phx-focus-loading"
      ];
      PHX_COMPONENT = "data-phx-component";
      PHX_LIVE_LINK = "data-phx-link";
      PHX_TRACK_STATIC = "track-static";
      PHX_LINK_STATE = "data-phx-link-state";
      PHX_REF = "data-phx-ref";
      PHX_REF_SRC = "data-phx-ref-src";
      PHX_TRACK_UPLOADS = "track-uploads";
      PHX_UPLOAD_REF = "data-phx-upload-ref";
      PHX_PREFLIGHTED_REFS = "data-phx-preflighted-refs";
      PHX_DONE_REFS = "data-phx-done-refs";
      PHX_DROP_TARGET = "drop-target";
      PHX_ACTIVE_ENTRY_REFS = "data-phx-active-refs";
      PHX_LIVE_FILE_UPDATED = "phx:live-file:updated";
      PHX_SKIP = "data-phx-skip";
      PHX_PRUNE = "data-phx-prune";
      PHX_PAGE_LOADING = "page-loading";
      PHX_CONNECTED_CLASS = "phx-connected";
      PHX_LOADING_CLASS = "phx-loading";
      PHX_NO_FEEDBACK_CLASS = "phx-no-feedback";
      PHX_ERROR_CLASS = "phx-error";
      PHX_CLIENT_ERROR_CLASS = "phx-client-error";
      PHX_SERVER_ERROR_CLASS = "phx-server-error";
      PHX_PARENT_ID = "data-phx-parent-id";
      PHX_MAIN = "data-phx-main";
      PHX_ROOT_ID = "data-phx-root-id";
      PHX_VIEWPORT_TOP = "viewport-top";
      PHX_VIEWPORT_BOTTOM = "viewport-bottom";
      PHX_TRIGGER_ACTION = "trigger-action";
      PHX_FEEDBACK_FOR = "feedback-for";
      PHX_HAS_FOCUSED = "phx-has-focused";
      FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time", "datetime-local", "color", "range"];
      CHECKABLE_INPUTS = ["checkbox", "radio"];
      PHX_HAS_SUBMITTED = "phx-has-submitted";
      PHX_SESSION = "data-phx-session";
      PHX_VIEW_SELECTOR = `[${PHX_SESSION}]`;
      PHX_STICKY = "data-phx-sticky";
      PHX_STATIC = "data-phx-static";
      PHX_READONLY = "data-phx-readonly";
      PHX_DISABLED = "data-phx-disabled";
      PHX_DISABLE_WITH = "disable-with";
      PHX_DISABLE_WITH_RESTORE = "data-phx-disable-with-restore";
      PHX_HOOK = "hook";
      PHX_DEBOUNCE = "debounce";
      PHX_THROTTLE = "throttle";
      PHX_UPDATE = "update";
      PHX_STREAM = "stream";
      PHX_STREAM_REF = "data-phx-stream";
      PHX_KEY = "key";
      PHX_PRIVATE = "phxPrivate";
      PHX_AUTO_RECOVER = "auto-recover";
      PHX_LV_DEBUG = "phx:live-socket:debug";
      PHX_LV_PROFILE = "phx:live-socket:profiling";
      PHX_LV_LATENCY_SIM = "phx:live-socket:latency-sim";
      PHX_PROGRESS = "progress";
      PHX_MOUNTED = "mounted";
      LOADER_TIMEOUT = 1;
      BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
      BINDING_PREFIX = "phx-";
      PUSH_TIMEOUT = 3e4;
      DEBOUNCE_TRIGGER = "debounce-trigger";
      THROTTLED = "throttled";
      DEBOUNCE_PREV_KEY = "debounce-prev-key";
      DEFAULTS = {
        debounce: 300,
        throttle: 300
      };
      DYNAMICS = "d";
      STATIC = "s";
      COMPONENTS = "c";
      EVENTS = "e";
      REPLY = "r";
      TITLE = "t";
      TEMPLATES = "p";
      STREAM = "stream";
      EntryUploader = class {
        constructor(entry, chunkSize, liveSocket) {
          this.liveSocket = liveSocket;
          this.entry = entry;
          this.offset = 0;
          this.chunkSize = chunkSize;
          this.chunkTimer = null;
          this.errored = false;
          this.uploadChannel = liveSocket.channel(`lvu:${entry.ref}`, { token: entry.metadata() });
        }
        error(reason) {
          if (this.errored) {
            return;
          }
          this.errored = true;
          clearTimeout(this.chunkTimer);
          this.entry.error(reason);
        }
        upload() {
          this.uploadChannel.onError((reason) => this.error(reason));
          this.uploadChannel.join().receive("ok", (_data) => this.readNextChunk()).receive("error", (reason) => this.error(reason));
        }
        isDone() {
          return this.offset >= this.entry.file.size;
        }
        readNextChunk() {
          let reader = new window.FileReader();
          let blob = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
          reader.onload = (e) => {
            if (e.target.error === null) {
              this.offset += e.target.result.byteLength;
              this.pushChunk(e.target.result);
            } else {
              return logError("Read error: " + e.target.error);
            }
          };
          reader.readAsArrayBuffer(blob);
        }
        pushChunk(chunk) {
          if (!this.uploadChannel.isJoined()) {
            return;
          }
          this.uploadChannel.push("chunk", chunk).receive("ok", () => {
            this.entry.progress(this.offset / this.entry.file.size * 100);
            if (!this.isDone()) {
              this.chunkTimer = setTimeout(() => this.readNextChunk(), this.liveSocket.getLatencySim() || 0);
            }
          }).receive("error", ({ reason }) => this.error(reason));
        }
      };
      logError = (msg, obj) => console.error && console.error(msg, obj);
      isCid = (cid) => {
        let type = typeof cid;
        return type === "number" || type === "string" && /^(0|[1-9]\d*)$/.test(cid);
      };
      debug = (view, kind, msg, obj) => {
        if (view.liveSocket.isDebugEnabled()) {
          console.log(`${view.id} ${kind}: ${msg} - `, obj);
        }
      };
      closure2 = (val) => typeof val === "function" ? val : function() {
        return val;
      };
      clone = (obj) => {
        return JSON.parse(JSON.stringify(obj));
      };
      closestPhxBinding = (el, binding, borderEl) => {
        do {
          if (el.matches(`[${binding}]`) && !el.disabled) {
            return el;
          }
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1 && !(borderEl && borderEl.isSameNode(el) || el.matches(PHX_VIEW_SELECTOR)));
        return null;
      };
      isObject = (obj) => {
        return obj !== null && typeof obj === "object" && !(obj instanceof Array);
      };
      isEqualObj = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
      isEmpty = (obj) => {
        for (let x in obj) {
          return false;
        }
        return true;
      };
      maybe = (el, callback) => el && callback(el);
      channelUploader = function(entries, onError, resp, liveSocket) {
        entries.forEach((entry) => {
          let entryUploader = new EntryUploader(entry, resp.config.chunk_size, liveSocket);
          entryUploader.upload();
        });
      };
      Browser = {
        canPushState() {
          return typeof history.pushState !== "undefined";
        },
        dropLocal(localStorage, namespace, subkey) {
          return localStorage.removeItem(this.localKey(namespace, subkey));
        },
        updateLocal(localStorage, namespace, subkey, initial, func) {
          let current = this.getLocal(localStorage, namespace, subkey);
          let key = this.localKey(namespace, subkey);
          let newVal = current === null ? initial : func(current);
          localStorage.setItem(key, JSON.stringify(newVal));
          return newVal;
        },
        getLocal(localStorage, namespace, subkey) {
          return JSON.parse(localStorage.getItem(this.localKey(namespace, subkey)));
        },
        updateCurrentState(callback) {
          if (!this.canPushState()) {
            return;
          }
          history.replaceState(callback(history.state || {}), "", window.location.href);
        },
        pushState(kind, meta, to) {
          if (this.canPushState()) {
            if (to !== window.location.href) {
              if (meta.type == "redirect" && meta.scroll) {
                let currentState = history.state || {};
                currentState.scroll = meta.scroll;
                history.replaceState(currentState, "", window.location.href);
              }
              delete meta.scroll;
              history[kind + "State"](meta, "", to || null);
              let hashEl = this.getHashTargetEl(window.location.hash);
              if (hashEl) {
                hashEl.scrollIntoView();
              } else if (meta.type === "redirect") {
                window.scroll(0, 0);
              }
            }
          } else {
            this.redirect(to);
          }
        },
        setCookie(name, value) {
          document.cookie = `${name}=${value}`;
        },
        getCookie(name) {
          return document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${name}s*=s*([^;]*).*$)|^.*$`), "$1");
        },
        redirect(toURL, flash) {
          if (flash) {
            Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
          }
          window.location = toURL;
        },
        localKey(namespace, subkey) {
          return `${namespace}-${subkey}`;
        },
        getHashTargetEl(maybeHash) {
          let hash = maybeHash.toString().substring(1);
          if (hash === "") {
            return;
          }
          return document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
        }
      };
      browser_default = Browser;
      DOM = {
        byId(id) {
          return document.getElementById(id) || logError(`no id found for ${id}`);
        },
        removeClass(el, className) {
          el.classList.remove(className);
          if (el.classList.length === 0) {
            el.removeAttribute("class");
          }
        },
        all(node, query, callback) {
          if (!node) {
            return [];
          }
          let array = Array.from(node.querySelectorAll(query));
          return callback ? array.forEach(callback) : array;
        },
        childNodeLength(html) {
          let template = document.createElement("template");
          template.innerHTML = html;
          return template.content.childElementCount;
        },
        isUploadInput(el) {
          return el.type === "file" && el.getAttribute(PHX_UPLOAD_REF) !== null;
        },
        findUploadInputs(node) {
          return this.all(node, `input[type="file"][${PHX_UPLOAD_REF}]`);
        },
        findComponentNodeList(node, cid) {
          return this.filterWithinSameLiveView(this.all(node, `[${PHX_COMPONENT}="${cid}"]`), node);
        },
        isPhxDestroyed(node) {
          return node.id && DOM.private(node, "destroyed") ? true : false;
        },
        wantsNewTab(e) {
          let wantsNewTab = e.ctrlKey || e.shiftKey || e.metaKey || e.button && e.button === 1;
          let isDownload = e.target instanceof HTMLAnchorElement && e.target.hasAttribute("download");
          let isTargetBlank = e.target.hasAttribute("target") && e.target.getAttribute("target").toLowerCase() === "_blank";
          return wantsNewTab || isTargetBlank || isDownload;
        },
        isUnloadableFormSubmit(e) {
          return !e.defaultPrevented && !this.wantsNewTab(e);
        },
        isNewPageClick(e, currentLocation) {
          let href = e.target instanceof HTMLAnchorElement ? e.target.getAttribute("href") : null;
          let url;
          if (e.defaultPrevented || href === null || this.wantsNewTab(e)) {
            return false;
          }
          if (href.startsWith("mailto:") || href.startsWith("tel:")) {
            return false;
          }
          try {
            url = new URL(href);
          } catch (e2) {
            try {
              url = new URL(href, currentLocation);
            } catch (e3) {
              return true;
            }
          }
          if (url.host === currentLocation.host && url.protocol === currentLocation.protocol) {
            if (url.pathname === currentLocation.pathname && url.search === currentLocation.search) {
              return url.hash === "" && !url.href.endsWith("#");
            }
          }
          return url.protocol.startsWith("http");
        },
        markPhxChildDestroyed(el) {
          if (this.isPhxChild(el)) {
            el.setAttribute(PHX_SESSION, "");
          }
          this.putPrivate(el, "destroyed", true);
        },
        findPhxChildrenInFragment(html, parentId) {
          let template = document.createElement("template");
          template.innerHTML = html;
          return this.findPhxChildren(template.content, parentId);
        },
        isIgnored(el, phxUpdate) {
          return (el.getAttribute(phxUpdate) || el.getAttribute("data-phx-update")) === "ignore";
        },
        isPhxUpdate(el, phxUpdate, updateTypes) {
          return el.getAttribute && updateTypes.indexOf(el.getAttribute(phxUpdate)) >= 0;
        },
        findPhxSticky(el) {
          return this.all(el, `[${PHX_STICKY}]`);
        },
        findPhxChildren(el, parentId) {
          return this.all(el, `${PHX_VIEW_SELECTOR}[${PHX_PARENT_ID}="${parentId}"]`);
        },
        findParentCIDs(node, cids) {
          let initial = new Set(cids);
          let parentCids = cids.reduce((acc, cid) => {
            let selector = `[${PHX_COMPONENT}="${cid}"] [${PHX_COMPONENT}]`;
            this.filterWithinSameLiveView(this.all(node, selector), node).map((el) => parseInt(el.getAttribute(PHX_COMPONENT))).forEach((childCID) => acc.delete(childCID));
            return acc;
          }, initial);
          return parentCids.size === 0 ? new Set(cids) : parentCids;
        },
        filterWithinSameLiveView(nodes, parent) {
          if (parent.querySelector(PHX_VIEW_SELECTOR)) {
            return nodes.filter((el) => this.withinSameLiveView(el, parent));
          } else {
            return nodes;
          }
        },
        withinSameLiveView(node, parent) {
          while (node = node.parentNode) {
            if (node.isSameNode(parent)) {
              return true;
            }
            if (node.getAttribute(PHX_SESSION) !== null) {
              return false;
            }
          }
        },
        private(el, key) {
          return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
        },
        deletePrivate(el, key) {
          el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
        },
        putPrivate(el, key, value) {
          if (!el[PHX_PRIVATE]) {
            el[PHX_PRIVATE] = {};
          }
          el[PHX_PRIVATE][key] = value;
        },
        updatePrivate(el, key, defaultVal, updateFunc) {
          let existing = this.private(el, key);
          if (existing === void 0) {
            this.putPrivate(el, key, updateFunc(defaultVal));
          } else {
            this.putPrivate(el, key, updateFunc(existing));
          }
        },
        copyPrivates(target, source) {
          if (source[PHX_PRIVATE]) {
            target[PHX_PRIVATE] = source[PHX_PRIVATE];
          }
        },
        putTitle(str) {
          let titleEl = document.querySelector("title");
          if (titleEl) {
            let { prefix, suffix } = titleEl.dataset;
            document.title = `${prefix || ""}${str}${suffix || ""}`;
          } else {
            document.title = str;
          }
        },
        debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, asyncFilter, callback) {
          let debounce = el.getAttribute(phxDebounce);
          let throttle = el.getAttribute(phxThrottle);
          if (debounce === "") {
            debounce = defaultDebounce;
          }
          if (throttle === "") {
            throttle = defaultThrottle;
          }
          let value = debounce || throttle;
          switch (value) {
            case null:
              return callback();
            case "blur":
              if (this.once(el, "debounce-blur")) {
                el.addEventListener("blur", () => callback());
              }
              return;
            default:
              let timeout = parseInt(value);
              let trigger = () => throttle ? this.deletePrivate(el, THROTTLED) : callback();
              let currentCycle = this.incCycle(el, DEBOUNCE_TRIGGER, trigger);
              if (isNaN(timeout)) {
                return logError(`invalid throttle/debounce value: ${value}`);
              }
              if (throttle) {
                let newKeyDown = false;
                if (event.type === "keydown") {
                  let prevKey = this.private(el, DEBOUNCE_PREV_KEY);
                  this.putPrivate(el, DEBOUNCE_PREV_KEY, event.key);
                  newKeyDown = prevKey !== event.key;
                }
                if (!newKeyDown && this.private(el, THROTTLED)) {
                  return false;
                } else {
                  callback();
                  this.putPrivate(el, THROTTLED, true);
                  setTimeout(() => {
                    if (asyncFilter()) {
                      this.triggerCycle(el, DEBOUNCE_TRIGGER);
                    }
                  }, timeout);
                }
              } else {
                setTimeout(() => {
                  if (asyncFilter()) {
                    this.triggerCycle(el, DEBOUNCE_TRIGGER, currentCycle);
                  }
                }, timeout);
              }
              let form = el.form;
              if (form && this.once(form, "bind-debounce")) {
                form.addEventListener("submit", () => {
                  Array.from(new FormData(form).entries(), ([name]) => {
                    let input = form.querySelector(`[name="${name}"]`);
                    this.incCycle(input, DEBOUNCE_TRIGGER);
                    this.deletePrivate(input, THROTTLED);
                  });
                });
              }
              if (this.once(el, "bind-debounce")) {
                el.addEventListener("blur", () => this.triggerCycle(el, DEBOUNCE_TRIGGER));
              }
          }
        },
        triggerCycle(el, key, currentCycle) {
          let [cycle, trigger] = this.private(el, key);
          if (!currentCycle) {
            currentCycle = cycle;
          }
          if (currentCycle === cycle) {
            this.incCycle(el, key);
            trigger();
          }
        },
        once(el, key) {
          if (this.private(el, key) === true) {
            return false;
          }
          this.putPrivate(el, key, true);
          return true;
        },
        incCycle(el, key, trigger = function() {
        }) {
          let [currentCycle] = this.private(el, key) || [0, trigger];
          currentCycle++;
          this.putPrivate(el, key, [currentCycle, trigger]);
          return currentCycle;
        },
        maybeAddPrivateHooks(el, phxViewportTop, phxViewportBottom) {
          if (el.hasAttribute && (el.hasAttribute(phxViewportTop) || el.hasAttribute(phxViewportBottom))) {
            el.setAttribute("data-phx-hook", "Phoenix.InfiniteScroll");
          }
        },
        maybeHideFeedback(container, input, phxFeedbackFor) {
          if (!(this.private(input, PHX_HAS_FOCUSED) || this.private(input, PHX_HAS_SUBMITTED))) {
            let feedbacks = [input.name];
            if (input.name.endsWith("[]")) {
              feedbacks.push(input.name.slice(0, -2));
            }
            let selector = feedbacks.map((f) => `[${phxFeedbackFor}="${f}"]`).join(", ");
            DOM.all(container, selector, (el) => el.classList.add(PHX_NO_FEEDBACK_CLASS));
          }
        },
        resetForm(form, phxFeedbackFor) {
          Array.from(form.elements).forEach((input) => {
            let query = `[${phxFeedbackFor}="${input.id}"],
                   [${phxFeedbackFor}="${input.name}"],
                   [${phxFeedbackFor}="${input.name.replace(/\[\]$/, "")}"]`;
            this.deletePrivate(input, PHX_HAS_FOCUSED);
            this.deletePrivate(input, PHX_HAS_SUBMITTED);
            this.all(document, query, (feedbackEl) => {
              feedbackEl.classList.add(PHX_NO_FEEDBACK_CLASS);
            });
          });
        },
        showError(inputEl, phxFeedbackFor) {
          if (inputEl.id || inputEl.name) {
            this.all(inputEl.form, `[${phxFeedbackFor}="${inputEl.id}"], [${phxFeedbackFor}="${inputEl.name}"]`, (el) => {
              this.removeClass(el, PHX_NO_FEEDBACK_CLASS);
            });
          }
        },
        isPhxChild(node) {
          return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
        },
        isPhxSticky(node) {
          return node.getAttribute && node.getAttribute(PHX_STICKY) !== null;
        },
        firstPhxChild(el) {
          return this.isPhxChild(el) ? el : this.all(el, `[${PHX_PARENT_ID}]`)[0];
        },
        dispatchEvent(target, name, opts = {}) {
          let bubbles = opts.bubbles === void 0 ? true : !!opts.bubbles;
          let eventOpts = { bubbles, cancelable: true, detail: opts.detail || {} };
          let event = name === "click" ? new MouseEvent("click", eventOpts) : new CustomEvent(name, eventOpts);
          target.dispatchEvent(event);
        },
        cloneNode(node, html) {
          if (typeof html === "undefined") {
            return node.cloneNode(true);
          } else {
            let cloned = node.cloneNode(false);
            cloned.innerHTML = html;
            return cloned;
          }
        },
        mergeAttrs(target, source, opts = {}) {
          let exclude = opts.exclude || [];
          let isIgnored = opts.isIgnored;
          let sourceAttrs = source.attributes;
          for (let i = sourceAttrs.length - 1; i >= 0; i--) {
            let name = sourceAttrs[i].name;
            if (exclude.indexOf(name) < 0) {
              target.setAttribute(name, source.getAttribute(name));
            }
          }
          let targetAttrs = target.attributes;
          for (let i = targetAttrs.length - 1; i >= 0; i--) {
            let name = targetAttrs[i].name;
            if (isIgnored) {
              if (name.startsWith("data-") && !source.hasAttribute(name)) {
                target.removeAttribute(name);
              }
            } else {
              if (!source.hasAttribute(name)) {
                target.removeAttribute(name);
              }
            }
          }
        },
        mergeFocusedInput(target, source) {
          if (!(target instanceof HTMLSelectElement)) {
            DOM.mergeAttrs(target, source, { exclude: ["value"] });
          }
          if (source.readOnly) {
            target.setAttribute("readonly", true);
          } else {
            target.removeAttribute("readonly");
          }
        },
        hasSelectionRange(el) {
          return el.setSelectionRange && (el.type === "text" || el.type === "textarea");
        },
        restoreFocus(focused, selectionStart, selectionEnd) {
          if (!DOM.isTextualInput(focused)) {
            return;
          }
          let wasFocused = focused.matches(":focus");
          if (focused.readOnly) {
            focused.blur();
          }
          if (!wasFocused) {
            focused.focus();
          }
          if (this.hasSelectionRange(focused)) {
            focused.setSelectionRange(selectionStart, selectionEnd);
          }
        },
        isFormInput(el) {
          return /^(?:input|select|textarea)$/i.test(el.tagName) && el.type !== "button";
        },
        syncAttrsToProps(el) {
          if (el instanceof HTMLInputElement && CHECKABLE_INPUTS.indexOf(el.type.toLocaleLowerCase()) >= 0) {
            el.checked = el.getAttribute("checked") !== null;
          }
        },
        isTextualInput(el) {
          return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
        },
        isNowTriggerFormExternal(el, phxTriggerExternal) {
          return el.getAttribute && el.getAttribute(phxTriggerExternal) !== null;
        },
        syncPendingRef(fromEl, toEl, disableWith) {
          let ref = fromEl.getAttribute(PHX_REF);
          if (ref === null) {
            return true;
          }
          let refSrc = fromEl.getAttribute(PHX_REF_SRC);
          if (DOM.isFormInput(fromEl) || fromEl.getAttribute(disableWith) !== null) {
            if (DOM.isUploadInput(fromEl)) {
              DOM.mergeAttrs(fromEl, toEl, { isIgnored: true });
            }
            DOM.putPrivate(fromEl, PHX_REF, toEl);
            return false;
          } else {
            PHX_EVENT_CLASSES.forEach((className) => {
              fromEl.classList.contains(className) && toEl.classList.add(className);
            });
            toEl.setAttribute(PHX_REF, ref);
            toEl.setAttribute(PHX_REF_SRC, refSrc);
            return true;
          }
        },
        cleanChildNodes(container, phxUpdate) {
          if (DOM.isPhxUpdate(container, phxUpdate, ["append", "prepend"])) {
            let toRemove = [];
            container.childNodes.forEach((childNode) => {
              if (!childNode.id) {
                let isEmptyTextNode = childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "";
                if (!isEmptyTextNode) {
                  logError(`only HTML element tags with an id are allowed inside containers with phx-update.

removing illegal node: "${(childNode.outerHTML || childNode.nodeValue).trim()}"

`);
                }
                toRemove.push(childNode);
              }
            });
            toRemove.forEach((childNode) => childNode.remove());
          }
        },
        replaceRootContainer(container, tagName, attrs) {
          let retainedAttrs = /* @__PURE__ */ new Set(["id", PHX_SESSION, PHX_STATIC, PHX_MAIN, PHX_ROOT_ID]);
          if (container.tagName.toLowerCase() === tagName.toLowerCase()) {
            Array.from(container.attributes).filter((attr) => !retainedAttrs.has(attr.name.toLowerCase())).forEach((attr) => container.removeAttribute(attr.name));
            Object.keys(attrs).filter((name) => !retainedAttrs.has(name.toLowerCase())).forEach((attr) => container.setAttribute(attr, attrs[attr]));
            return container;
          } else {
            let newContainer = document.createElement(tagName);
            Object.keys(attrs).forEach((attr) => newContainer.setAttribute(attr, attrs[attr]));
            retainedAttrs.forEach((attr) => newContainer.setAttribute(attr, container.getAttribute(attr)));
            newContainer.innerHTML = container.innerHTML;
            container.replaceWith(newContainer);
            return newContainer;
          }
        },
        getSticky(el, name, defaultVal) {
          let op = (DOM.private(el, "sticky") || []).find(([existingName]) => name === existingName);
          if (op) {
            let [_name, _op, stashedResult] = op;
            return stashedResult;
          } else {
            return typeof defaultVal === "function" ? defaultVal() : defaultVal;
          }
        },
        deleteSticky(el, name) {
          this.updatePrivate(el, "sticky", [], (ops) => {
            return ops.filter(([existingName, _]) => existingName !== name);
          });
        },
        putSticky(el, name, op) {
          let stashedResult = op(el);
          this.updatePrivate(el, "sticky", [], (ops) => {
            let existingIndex = ops.findIndex(([existingName]) => name === existingName);
            if (existingIndex >= 0) {
              ops[existingIndex] = [name, op, stashedResult];
            } else {
              ops.push([name, op, stashedResult]);
            }
            return ops;
          });
        },
        applyStickyOperations(el) {
          let ops = DOM.private(el, "sticky");
          if (!ops) {
            return;
          }
          ops.forEach(([name, op, _stashed]) => this.putSticky(el, name, op));
        }
      };
      dom_default = DOM;
      UploadEntry = class {
        static isActive(fileEl, file) {
          let isNew = file._phxRef === void 0;
          let activeRefs = fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
          let isActive = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
          return file.size > 0 && (isNew || isActive);
        }
        static isPreflighted(fileEl, file) {
          let preflightedRefs = fileEl.getAttribute(PHX_PREFLIGHTED_REFS).split(",");
          let isPreflighted = preflightedRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
          return isPreflighted && this.isActive(fileEl, file);
        }
        constructor(fileEl, file, view) {
          this.ref = LiveUploader.genFileRef(file);
          this.fileEl = fileEl;
          this.file = file;
          this.view = view;
          this.meta = null;
          this._isCancelled = false;
          this._isDone = false;
          this._progress = 0;
          this._lastProgressSent = -1;
          this._onDone = function() {
          };
          this._onElUpdated = this.onElUpdated.bind(this);
          this.fileEl.addEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
        }
        metadata() {
          return this.meta;
        }
        progress(progress) {
          this._progress = Math.floor(progress);
          if (this._progress > this._lastProgressSent) {
            if (this._progress >= 100) {
              this._progress = 100;
              this._lastProgressSent = 100;
              this._isDone = true;
              this.view.pushFileProgress(this.fileEl, this.ref, 100, () => {
                LiveUploader.untrackFile(this.fileEl, this.file);
                this._onDone();
              });
            } else {
              this._lastProgressSent = this._progress;
              this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
            }
          }
        }
        cancel() {
          this._isCancelled = true;
          this._isDone = true;
          this._onDone();
        }
        isDone() {
          return this._isDone;
        }
        error(reason = "failed") {
          this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
          this.view.pushFileProgress(this.fileEl, this.ref, { error: reason });
          LiveUploader.clearFiles(this.fileEl);
        }
        onDone(callback) {
          this._onDone = () => {
            this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
            callback();
          };
        }
        onElUpdated() {
          let activeRefs = this.fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
          if (activeRefs.indexOf(this.ref) === -1) {
            this.cancel();
          }
        }
        toPreflightPayload() {
          return {
            last_modified: this.file.lastModified,
            name: this.file.name,
            relative_path: this.file.webkitRelativePath,
            size: this.file.size,
            type: this.file.type,
            ref: this.ref
          };
        }
        uploader(uploaders) {
          if (this.meta.uploader) {
            let callback = uploaders[this.meta.uploader] || logError(`no uploader configured for ${this.meta.uploader}`);
            return { name: this.meta.uploader, callback };
          } else {
            return { name: "channel", callback: channelUploader };
          }
        }
        zipPostFlight(resp) {
          this.meta = resp.entries[this.ref];
          if (!this.meta) {
            logError(`no preflight upload response returned with ref ${this.ref}`, { input: this.fileEl, response: resp });
          }
        }
      };
      liveUploaderFileRef = 0;
      LiveUploader = class {
        static genFileRef(file) {
          let ref = file._phxRef;
          if (ref !== void 0) {
            return ref;
          } else {
            file._phxRef = (liveUploaderFileRef++).toString();
            return file._phxRef;
          }
        }
        static getEntryDataURL(inputEl, ref, callback) {
          let file = this.activeFiles(inputEl).find((file2) => this.genFileRef(file2) === ref);
          callback(URL.createObjectURL(file));
        }
        static hasUploadsInProgress(formEl) {
          let active = 0;
          dom_default.findUploadInputs(formEl).forEach((input) => {
            if (input.getAttribute(PHX_PREFLIGHTED_REFS) !== input.getAttribute(PHX_DONE_REFS)) {
              active++;
            }
          });
          return active > 0;
        }
        static serializeUploads(inputEl) {
          let files = this.activeFiles(inputEl);
          let fileData = {};
          files.forEach((file) => {
            let entry = { path: inputEl.name };
            let uploadRef = inputEl.getAttribute(PHX_UPLOAD_REF);
            fileData[uploadRef] = fileData[uploadRef] || [];
            entry.ref = this.genFileRef(file);
            entry.last_modified = file.lastModified;
            entry.name = file.name || entry.ref;
            entry.relative_path = file.webkitRelativePath;
            entry.type = file.type;
            entry.size = file.size;
            fileData[uploadRef].push(entry);
          });
          return fileData;
        }
        static clearFiles(inputEl) {
          inputEl.value = null;
          inputEl.removeAttribute(PHX_UPLOAD_REF);
          dom_default.putPrivate(inputEl, "files", []);
        }
        static untrackFile(inputEl, file) {
          dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f) => !Object.is(f, file)));
        }
        static trackFiles(inputEl, files, dataTransfer) {
          if (inputEl.getAttribute("multiple") !== null) {
            let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f) => Object.is(f, file)));
            dom_default.putPrivate(inputEl, "files", this.activeFiles(inputEl).concat(newFiles));
            inputEl.value = null;
          } else {
            if (dataTransfer && dataTransfer.files.length > 0) {
              inputEl.files = dataTransfer.files;
            }
            dom_default.putPrivate(inputEl, "files", files);
          }
        }
        static activeFileInputs(formEl) {
          let fileInputs = dom_default.findUploadInputs(formEl);
          return Array.from(fileInputs).filter((el) => el.files && this.activeFiles(el).length > 0);
        }
        static activeFiles(input) {
          return (dom_default.private(input, "files") || []).filter((f) => UploadEntry.isActive(input, f));
        }
        static inputsAwaitingPreflight(formEl) {
          let fileInputs = dom_default.findUploadInputs(formEl);
          return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
        }
        static filesAwaitingPreflight(input) {
          return this.activeFiles(input).filter((f) => !UploadEntry.isPreflighted(input, f));
        }
        constructor(inputEl, view, onComplete) {
          this.view = view;
          this.onComplete = onComplete;
          this._entries = Array.from(LiveUploader.filesAwaitingPreflight(inputEl) || []).map((file) => new UploadEntry(inputEl, file, view));
          this.numEntriesInProgress = this._entries.length;
        }
        entries() {
          return this._entries;
        }
        initAdapterUpload(resp, onError, liveSocket) {
          this._entries = this._entries.map((entry) => {
            entry.zipPostFlight(resp);
            entry.onDone(() => {
              this.numEntriesInProgress--;
              if (this.numEntriesInProgress === 0) {
                this.onComplete();
              }
            });
            return entry;
          });
          let groupedEntries = this._entries.reduce((acc, entry) => {
            let { name, callback } = entry.uploader(liveSocket.uploaders);
            acc[name] = acc[name] || { callback, entries: [] };
            acc[name].entries.push(entry);
            return acc;
          }, {});
          for (let name in groupedEntries) {
            let { callback, entries } = groupedEntries[name];
            callback(entries, onError, resp, liveSocket);
          }
        }
      };
      ARIA = {
        focusMain() {
          let target = document.querySelector("main h1, main, h1");
          if (target) {
            let origTabIndex = target.tabIndex;
            target.tabIndex = -1;
            target.focus();
            target.tabIndex = origTabIndex;
          }
        },
        anyOf(instance, classes) {
          return classes.find((name) => instance instanceof name);
        },
        isFocusable(el, interactiveOnly) {
          return el instanceof HTMLAnchorElement && el.rel !== "ignore" || el instanceof HTMLAreaElement && el.href !== void 0 || !el.disabled && this.anyOf(el, [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement, HTMLButtonElement]) || el instanceof HTMLIFrameElement || (el.tabIndex > 0 || !interactiveOnly && el.tabIndex === 0 && el.getAttribute("tabindex") !== null && el.getAttribute("aria-hidden") !== "true");
        },
        attemptFocus(el, interactiveOnly) {
          if (this.isFocusable(el, interactiveOnly)) {
            try {
              el.focus();
            } catch (e) {
            }
          }
          return !!document.activeElement && document.activeElement.isSameNode(el);
        },
        focusFirstInteractive(el) {
          let child = el.firstElementChild;
          while (child) {
            if (this.attemptFocus(child, true) || this.focusFirstInteractive(child, true)) {
              return true;
            }
            child = child.nextElementSibling;
          }
        },
        focusFirst(el) {
          let child = el.firstElementChild;
          while (child) {
            if (this.attemptFocus(child) || this.focusFirst(child)) {
              return true;
            }
            child = child.nextElementSibling;
          }
        },
        focusLast(el) {
          let child = el.lastElementChild;
          while (child) {
            if (this.attemptFocus(child) || this.focusLast(child)) {
              return true;
            }
            child = child.previousElementSibling;
          }
        }
      };
      aria_default = ARIA;
      Hooks = {
        LiveFileUpload: {
          activeRefs() {
            return this.el.getAttribute(PHX_ACTIVE_ENTRY_REFS);
          },
          preflightedRefs() {
            return this.el.getAttribute(PHX_PREFLIGHTED_REFS);
          },
          mounted() {
            this.preflightedWas = this.preflightedRefs();
          },
          updated() {
            let newPreflights = this.preflightedRefs();
            if (this.preflightedWas !== newPreflights) {
              this.preflightedWas = newPreflights;
              if (newPreflights === "") {
                this.__view.cancelSubmit(this.el.form);
              }
            }
            if (this.activeRefs() === "") {
              this.el.value = null;
            }
            this.el.dispatchEvent(new CustomEvent(PHX_LIVE_FILE_UPDATED));
          }
        },
        LiveImgPreview: {
          mounted() {
            this.ref = this.el.getAttribute("data-phx-entry-ref");
            this.inputEl = document.getElementById(this.el.getAttribute(PHX_UPLOAD_REF));
            LiveUploader.getEntryDataURL(this.inputEl, this.ref, (url) => {
              this.url = url;
              this.el.src = url;
            });
          },
          destroyed() {
            URL.revokeObjectURL(this.url);
          }
        },
        FocusWrap: {
          mounted() {
            this.focusStart = this.el.firstElementChild;
            this.focusEnd = this.el.lastElementChild;
            this.focusStart.addEventListener("focus", () => aria_default.focusLast(this.el));
            this.focusEnd.addEventListener("focus", () => aria_default.focusFirst(this.el));
            this.el.addEventListener("phx:show-end", () => this.el.focus());
            if (window.getComputedStyle(this.el).display !== "none") {
              aria_default.focusFirst(this.el);
            }
          }
        }
      };
      scrollTop = () => document.documentElement.scrollTop || document.body.scrollTop;
      winHeight = () => window.innerHeight || document.documentElement.clientHeight;
      isAtViewportTop = (el) => {
        let rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.top <= winHeight();
      };
      isAtViewportBottom = (el) => {
        let rect = el.getBoundingClientRect();
        return rect.right >= 0 && rect.left >= 0 && rect.bottom <= winHeight();
      };
      isWithinViewport = (el) => {
        let rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.top <= winHeight();
      };
      Hooks.InfiniteScroll = {
        mounted() {
          let scrollBefore = scrollTop();
          let topOverran = false;
          let throttleInterval = 500;
          let pendingOp = null;
          let onTopOverrun = this.throttle(throttleInterval, (topEvent, firstChild) => {
            pendingOp = () => true;
            this.liveSocket.execJSHookPush(this.el, topEvent, { id: firstChild.id, _overran: true }, () => {
              pendingOp = null;
            });
          });
          let onFirstChildAtTop = this.throttle(throttleInterval, (topEvent, firstChild) => {
            pendingOp = () => firstChild.scrollIntoView({ block: "start" });
            this.liveSocket.execJSHookPush(this.el, topEvent, { id: firstChild.id }, () => {
              pendingOp = null;
              if (!isWithinViewport(firstChild)) {
                firstChild.scrollIntoView({ block: "start" });
              }
            });
          });
          let onLastChildAtBottom = this.throttle(throttleInterval, (bottomEvent, lastChild) => {
            pendingOp = () => lastChild.scrollIntoView({ block: "end" });
            this.liveSocket.execJSHookPush(this.el, bottomEvent, { id: lastChild.id }, () => {
              pendingOp = null;
              if (!isWithinViewport(lastChild)) {
                lastChild.scrollIntoView({ block: "end" });
              }
            });
          });
          this.onScroll = (e) => {
            let scrollNow = scrollTop();
            if (pendingOp) {
              scrollBefore = scrollNow;
              return pendingOp();
            }
            let rect = this.el.getBoundingClientRect();
            let topEvent = this.el.getAttribute(this.liveSocket.binding("viewport-top"));
            let bottomEvent = this.el.getAttribute(this.liveSocket.binding("viewport-bottom"));
            let lastChild = this.el.lastElementChild;
            let firstChild = this.el.firstElementChild;
            let isScrollingUp = scrollNow < scrollBefore;
            let isScrollingDown = scrollNow > scrollBefore;
            if (isScrollingUp && topEvent && !topOverran && rect.top >= 0) {
              topOverran = true;
              onTopOverrun(topEvent, firstChild);
            } else if (isScrollingDown && topOverran && rect.top <= 0) {
              topOverran = false;
            }
            if (topEvent && isScrollingUp && isAtViewportTop(firstChild)) {
              onFirstChildAtTop(topEvent, firstChild);
            } else if (bottomEvent && isScrollingDown && isAtViewportBottom(lastChild)) {
              onLastChildAtBottom(bottomEvent, lastChild);
            }
            scrollBefore = scrollNow;
          };
          window.addEventListener("scroll", this.onScroll);
        },
        destroyed() {
          window.removeEventListener("scroll", this.onScroll);
        },
        throttle(interval, callback) {
          let lastCallAt = 0;
          let timer;
          return (...args) => {
            let now = Date.now();
            let remainingTime = interval - (now - lastCallAt);
            if (remainingTime <= 0 || remainingTime > interval) {
              if (timer) {
                clearTimeout(timer);
                timer = null;
              }
              lastCallAt = now;
              callback(...args);
            } else if (!timer) {
              timer = setTimeout(() => {
                lastCallAt = Date.now();
                timer = null;
                callback(...args);
              }, remainingTime);
            }
          };
        }
      };
      hooks_default = Hooks;
      DOMPostMorphRestorer = class {
        constructor(containerBefore, containerAfter, updateType) {
          let idsBefore = /* @__PURE__ */ new Set();
          let idsAfter = new Set([...containerAfter.children].map((child) => child.id));
          let elementsToModify = [];
          Array.from(containerBefore.children).forEach((child) => {
            if (child.id) {
              idsBefore.add(child.id);
              if (idsAfter.has(child.id)) {
                let previousElementId = child.previousElementSibling && child.previousElementSibling.id;
                elementsToModify.push({ elementId: child.id, previousElementId });
              }
            }
          });
          this.containerId = containerAfter.id;
          this.updateType = updateType;
          this.elementsToModify = elementsToModify;
          this.elementIdsToAdd = [...idsAfter].filter((id) => !idsBefore.has(id));
        }
        perform() {
          let container = dom_default.byId(this.containerId);
          this.elementsToModify.forEach((elementToModify) => {
            if (elementToModify.previousElementId) {
              maybe(document.getElementById(elementToModify.previousElementId), (previousElem) => {
                maybe(document.getElementById(elementToModify.elementId), (elem) => {
                  let isInRightPlace = elem.previousElementSibling && elem.previousElementSibling.id == previousElem.id;
                  if (!isInRightPlace) {
                    previousElem.insertAdjacentElement("afterend", elem);
                  }
                });
              });
            } else {
              maybe(document.getElementById(elementToModify.elementId), (elem) => {
                let isInRightPlace = elem.previousElementSibling == null;
                if (!isInRightPlace) {
                  container.insertAdjacentElement("afterbegin", elem);
                }
              });
            }
          });
          if (this.updateType == "prepend") {
            this.elementIdsToAdd.reverse().forEach((elemId) => {
              maybe(document.getElementById(elemId), (elem) => container.insertAdjacentElement("afterbegin", elem));
            });
          }
        }
      };
      DOCUMENT_FRAGMENT_NODE = 11;
      NS_XHTML = "http://www.w3.org/1999/xhtml";
      doc = typeof document === "undefined" ? void 0 : document;
      HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
      HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
      specialElHandlers = {
        OPTION: function(fromEl, toEl) {
          var parentNode = fromEl.parentNode;
          if (parentNode) {
            var parentName = parentNode.nodeName.toUpperCase();
            if (parentName === "OPTGROUP") {
              parentNode = parentNode.parentNode;
              parentName = parentNode && parentNode.nodeName.toUpperCase();
            }
            if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
              if (fromEl.hasAttribute("selected") && !toEl.selected) {
                fromEl.setAttribute("selected", "selected");
                fromEl.removeAttribute("selected");
              }
              parentNode.selectedIndex = -1;
            }
          }
          syncBooleanAttrProp(fromEl, toEl, "selected");
        },
        INPUT: function(fromEl, toEl) {
          syncBooleanAttrProp(fromEl, toEl, "checked");
          syncBooleanAttrProp(fromEl, toEl, "disabled");
          if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
          }
          if (!toEl.hasAttribute("value")) {
            fromEl.removeAttribute("value");
          }
        },
        TEXTAREA: function(fromEl, toEl) {
          var newValue = toEl.value;
          if (fromEl.value !== newValue) {
            fromEl.value = newValue;
          }
          var firstChild = fromEl.firstChild;
          if (firstChild) {
            var oldValue = firstChild.nodeValue;
            if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
              return;
            }
            firstChild.nodeValue = newValue;
          }
        },
        SELECT: function(fromEl, toEl) {
          if (!toEl.hasAttribute("multiple")) {
            var selectedIndex = -1;
            var i = 0;
            var curChild = fromEl.firstChild;
            var optgroup;
            var nodeName;
            while (curChild) {
              nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
              if (nodeName === "OPTGROUP") {
                optgroup = curChild;
                curChild = optgroup.firstChild;
              } else {
                if (nodeName === "OPTION") {
                  if (curChild.hasAttribute("selected")) {
                    selectedIndex = i;
                    break;
                  }
                  i++;
                }
                curChild = curChild.nextSibling;
                if (!curChild && optgroup) {
                  curChild = optgroup.nextSibling;
                  optgroup = null;
                }
              }
            }
            fromEl.selectedIndex = selectedIndex;
          }
        }
      };
      ELEMENT_NODE = 1;
      DOCUMENT_FRAGMENT_NODE$1 = 11;
      TEXT_NODE = 3;
      COMMENT_NODE = 8;
      morphdom = morphdomFactory(morphAttrs);
      morphdom_esm_default = morphdom;
      DOMPatch = class {
        static patchEl(fromEl, toEl, activeElement) {
          morphdom_esm_default(fromEl, toEl, {
            childrenOnly: false,
            onBeforeElUpdated: (fromEl2, toEl2) => {
              if (activeElement && activeElement.isSameNode(fromEl2) && dom_default.isFormInput(fromEl2)) {
                dom_default.mergeFocusedInput(fromEl2, toEl2);
                return false;
              }
            }
          });
        }
        constructor(view, container, id, html, streams, targetCID) {
          this.view = view;
          this.liveSocket = view.liveSocket;
          this.container = container;
          this.id = id;
          this.rootID = view.root.id;
          this.html = html;
          this.streams = streams;
          this.streamInserts = {};
          this.targetCID = targetCID;
          this.cidPatch = isCid(this.targetCID);
          this.pendingRemoves = [];
          this.phxRemove = this.liveSocket.binding("remove");
          this.callbacks = {
            beforeadded: [],
            beforeupdated: [],
            beforephxChildAdded: [],
            afteradded: [],
            afterupdated: [],
            afterdiscarded: [],
            afterphxChildAdded: [],
            aftertransitionsDiscarded: []
          };
        }
        before(kind, callback) {
          this.callbacks[`before${kind}`].push(callback);
        }
        after(kind, callback) {
          this.callbacks[`after${kind}`].push(callback);
        }
        trackBefore(kind, ...args) {
          this.callbacks[`before${kind}`].forEach((callback) => callback(...args));
        }
        trackAfter(kind, ...args) {
          this.callbacks[`after${kind}`].forEach((callback) => callback(...args));
        }
        markPrunableContentForRemoval() {
          let phxUpdate = this.liveSocket.binding(PHX_UPDATE);
          dom_default.all(this.container, `[${phxUpdate}=${PHX_STREAM}]`, (el) => el.innerHTML = "");
          dom_default.all(this.container, `[${phxUpdate}=append] > *, [${phxUpdate}=prepend] > *`, (el) => {
            el.setAttribute(PHX_PRUNE, "");
          });
        }
        perform() {
          let { view, liveSocket, container, html } = this;
          let targetContainer = this.isCIDPatch() ? this.targetCIDContainer(html) : container;
          if (this.isCIDPatch() && !targetContainer) {
            return;
          }
          let focused = liveSocket.getActiveElement();
          let { selectionStart, selectionEnd } = focused && dom_default.hasSelectionRange(focused) ? focused : {};
          let phxUpdate = liveSocket.binding(PHX_UPDATE);
          let phxFeedbackFor = liveSocket.binding(PHX_FEEDBACK_FOR);
          let disableWith = liveSocket.binding(PHX_DISABLE_WITH);
          let phxViewportTop = liveSocket.binding(PHX_VIEWPORT_TOP);
          let phxViewportBottom = liveSocket.binding(PHX_VIEWPORT_BOTTOM);
          let phxTriggerExternal = liveSocket.binding(PHX_TRIGGER_ACTION);
          let added = [];
          let trackedInputs = [];
          let updates = [];
          let appendPrependUpdates = [];
          let externalFormTriggered = null;
          let diffHTML = liveSocket.time("premorph container prep", () => {
            return this.buildDiffHTML(container, html, phxUpdate, targetContainer);
          });
          this.trackBefore("added", container);
          this.trackBefore("updated", container, container);
          liveSocket.time("morphdom", () => {
            this.streams.forEach(([ref, inserts, deleteIds, reset]) => {
              Object.entries(inserts).forEach(([key, [streamAt, limit]]) => {
                this.streamInserts[key] = { ref, streamAt, limit };
              });
              if (reset !== void 0) {
                dom_default.all(container, `[${PHX_STREAM_REF}="${ref}"]`, (child) => {
                  this.removeStreamChildElement(child);
                });
              }
              deleteIds.forEach((id) => {
                let child = container.querySelector(`[id="${id}"]`);
                if (child) {
                  this.removeStreamChildElement(child);
                }
              });
            });
            morphdom_esm_default(targetContainer, diffHTML, {
              childrenOnly: targetContainer.getAttribute(PHX_COMPONENT) === null,
              getNodeKey: (node) => {
                return dom_default.isPhxDestroyed(node) ? null : node.id;
              },
              skipFromChildren: (from) => {
                return from.getAttribute(phxUpdate) === PHX_STREAM;
              },
              addChild: (parent, child) => {
                let { ref, streamAt, limit } = this.getStreamInsert(child);
                if (ref === void 0) {
                  return parent.appendChild(child);
                }
                dom_default.putSticky(child, PHX_STREAM_REF, (el) => el.setAttribute(PHX_STREAM_REF, ref));
                if (streamAt === 0) {
                  parent.insertAdjacentElement("afterbegin", child);
                } else if (streamAt === -1) {
                  parent.appendChild(child);
                } else if (streamAt > 0) {
                  let sibling = Array.from(parent.children)[streamAt];
                  parent.insertBefore(child, sibling);
                }
                let children = limit !== null && Array.from(parent.children);
                let childrenToRemove = [];
                if (limit && limit < 0 && children.length > limit * -1) {
                  childrenToRemove = children.slice(0, children.length + limit);
                } else if (limit && limit >= 0 && children.length > limit) {
                  childrenToRemove = children.slice(limit);
                }
                childrenToRemove.forEach((removeChild) => {
                  if (!this.streamInserts[removeChild.id]) {
                    this.removeStreamChildElement(removeChild);
                  }
                });
              },
              onBeforeNodeAdded: (el) => {
                dom_default.maybeAddPrivateHooks(el, phxViewportTop, phxViewportBottom);
                this.trackBefore("added", el);
                return el;
              },
              onNodeAdded: (el) => {
                if (el.getAttribute) {
                  this.maybeReOrderStream(el);
                }
                if (el instanceof HTMLImageElement && el.srcset) {
                  el.srcset = el.srcset;
                } else if (el instanceof HTMLVideoElement && el.autoplay) {
                  el.play();
                }
                if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
                  externalFormTriggered = el;
                }
                if (el.getAttribute && el.getAttribute("name") && dom_default.isFormInput(el)) {
                  trackedInputs.push(el);
                }
                if (dom_default.isPhxChild(el) && view.ownsElement(el) || dom_default.isPhxSticky(el) && view.ownsElement(el.parentNode)) {
                  this.trackAfter("phxChildAdded", el);
                }
                added.push(el);
              },
              onNodeDiscarded: (el) => this.onNodeDiscarded(el),
              onBeforeNodeDiscarded: (el) => {
                if (el.getAttribute && el.getAttribute(PHX_PRUNE) !== null) {
                  return true;
                }
                if (el.parentElement !== null && el.id && dom_default.isPhxUpdate(el.parentElement, phxUpdate, [PHX_STREAM, "append", "prepend"])) {
                  return false;
                }
                if (this.maybePendingRemove(el)) {
                  return false;
                }
                if (this.skipCIDSibling(el)) {
                  return false;
                }
                return true;
              },
              onElUpdated: (el) => {
                if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
                  externalFormTriggered = el;
                }
                updates.push(el);
                this.maybeReOrderStream(el);
              },
              onBeforeElUpdated: (fromEl, toEl) => {
                dom_default.maybeAddPrivateHooks(toEl, phxViewportTop, phxViewportBottom);
                dom_default.cleanChildNodes(toEl, phxUpdate);
                if (this.skipCIDSibling(toEl)) {
                  return false;
                }
                if (dom_default.isPhxSticky(fromEl)) {
                  return false;
                }
                if (dom_default.isIgnored(fromEl, phxUpdate) || fromEl.form && fromEl.form.isSameNode(externalFormTriggered)) {
                  this.trackBefore("updated", fromEl, toEl);
                  dom_default.mergeAttrs(fromEl, toEl, { isIgnored: true });
                  updates.push(fromEl);
                  dom_default.applyStickyOperations(fromEl);
                  return false;
                }
                if (fromEl.type === "number" && (fromEl.validity && fromEl.validity.badInput)) {
                  return false;
                }
                if (!dom_default.syncPendingRef(fromEl, toEl, disableWith)) {
                  if (dom_default.isUploadInput(fromEl)) {
                    this.trackBefore("updated", fromEl, toEl);
                    updates.push(fromEl);
                  }
                  dom_default.applyStickyOperations(fromEl);
                  return false;
                }
                if (dom_default.isPhxChild(toEl)) {
                  let prevSession = fromEl.getAttribute(PHX_SESSION);
                  dom_default.mergeAttrs(fromEl, toEl, { exclude: [PHX_STATIC] });
                  if (prevSession !== "") {
                    fromEl.setAttribute(PHX_SESSION, prevSession);
                  }
                  fromEl.setAttribute(PHX_ROOT_ID, this.rootID);
                  dom_default.applyStickyOperations(fromEl);
                  return false;
                }
                dom_default.copyPrivates(toEl, fromEl);
                let isFocusedFormEl = focused && fromEl.isSameNode(focused) && dom_default.isFormInput(fromEl);
                if (isFocusedFormEl && fromEl.type !== "hidden") {
                  this.trackBefore("updated", fromEl, toEl);
                  dom_default.mergeFocusedInput(fromEl, toEl);
                  dom_default.syncAttrsToProps(fromEl);
                  updates.push(fromEl);
                  dom_default.applyStickyOperations(fromEl);
                  trackedInputs.push(fromEl);
                  return false;
                } else {
                  if (dom_default.isPhxUpdate(toEl, phxUpdate, ["append", "prepend"])) {
                    appendPrependUpdates.push(new DOMPostMorphRestorer(fromEl, toEl, toEl.getAttribute(phxUpdate)));
                  }
                  dom_default.syncAttrsToProps(toEl);
                  dom_default.applyStickyOperations(toEl);
                  if (toEl.getAttribute("name") && dom_default.isFormInput(toEl)) {
                    trackedInputs.push(toEl);
                  }
                  this.trackBefore("updated", fromEl, toEl);
                  return true;
                }
              }
            });
          });
          if (liveSocket.isDebugEnabled()) {
            detectDuplicateIds();
          }
          if (appendPrependUpdates.length > 0) {
            liveSocket.time("post-morph append/prepend restoration", () => {
              appendPrependUpdates.forEach((update) => update.perform());
            });
          }
          trackedInputs.forEach((input) => {
            dom_default.maybeHideFeedback(targetContainer, input, phxFeedbackFor);
          });
          liveSocket.silenceEvents(() => dom_default.restoreFocus(focused, selectionStart, selectionEnd));
          dom_default.dispatchEvent(document, "phx:update");
          added.forEach((el) => this.trackAfter("added", el));
          updates.forEach((el) => this.trackAfter("updated", el));
          this.transitionPendingRemoves();
          if (externalFormTriggered) {
            liveSocket.unload();
            externalFormTriggered.submit();
          }
          return true;
        }
        onNodeDiscarded(el) {
          if (dom_default.isPhxChild(el) || dom_default.isPhxSticky(el)) {
            this.liveSocket.destroyViewByEl(el);
          }
          this.trackAfter("discarded", el);
        }
        maybePendingRemove(node) {
          if (node.getAttribute && node.getAttribute(this.phxRemove) !== null) {
            this.pendingRemoves.push(node);
            return true;
          } else {
            return false;
          }
        }
        removeStreamChildElement(child) {
          if (!this.maybePendingRemove(child)) {
            child.remove();
            this.onNodeDiscarded(child);
          }
        }
        getStreamInsert(el) {
          let insert = el.id ? this.streamInserts[el.id] : {};
          return insert || {};
        }
        maybeReOrderStream(el) {
          let { ref, streamAt, limit } = this.getStreamInsert(el);
          if (streamAt === void 0) {
            return;
          }
          dom_default.putSticky(el, PHX_STREAM_REF, (el2) => el2.setAttribute(PHX_STREAM_REF, ref));
          if (streamAt === 0) {
            el.parentElement.insertBefore(el, el.parentElement.firstElementChild);
          } else if (streamAt > 0) {
            let children = Array.from(el.parentElement.children);
            let oldIndex = children.indexOf(el);
            if (streamAt >= children.length - 1) {
              el.parentElement.appendChild(el);
            } else {
              let sibling = children[streamAt];
              if (oldIndex > streamAt) {
                el.parentElement.insertBefore(el, sibling);
              } else {
                el.parentElement.insertBefore(el, sibling.nextElementSibling);
              }
            }
          }
        }
        transitionPendingRemoves() {
          let { pendingRemoves, liveSocket } = this;
          if (pendingRemoves.length > 0) {
            liveSocket.transitionRemoves(pendingRemoves);
            liveSocket.requestDOMUpdate(() => {
              pendingRemoves.forEach((el) => {
                let child = dom_default.firstPhxChild(el);
                if (child) {
                  liveSocket.destroyViewByEl(child);
                }
                el.remove();
              });
              this.trackAfter("transitionsDiscarded", pendingRemoves);
            });
          }
        }
        isCIDPatch() {
          return this.cidPatch;
        }
        skipCIDSibling(el) {
          return el.nodeType === Node.ELEMENT_NODE && el.getAttribute(PHX_SKIP) !== null;
        }
        targetCIDContainer(html) {
          if (!this.isCIDPatch()) {
            return;
          }
          let [first, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
          if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
            return first;
          } else {
            return first && first.parentNode;
          }
        }
        buildDiffHTML(container, html, phxUpdate, targetContainer) {
          let isCIDPatch = this.isCIDPatch();
          let isCIDWithSingleRoot = isCIDPatch && targetContainer.getAttribute(PHX_COMPONENT) === this.targetCID.toString();
          if (!isCIDPatch || isCIDWithSingleRoot) {
            return html;
          } else {
            let diffContainer = null;
            let template = document.createElement("template");
            diffContainer = dom_default.cloneNode(targetContainer);
            let [firstComponent, ...rest] = dom_default.findComponentNodeList(diffContainer, this.targetCID);
            template.innerHTML = html;
            rest.forEach((el) => el.remove());
            Array.from(diffContainer.childNodes).forEach((child) => {
              if (child.id && child.nodeType === Node.ELEMENT_NODE && child.getAttribute(PHX_COMPONENT) !== this.targetCID.toString()) {
                child.setAttribute(PHX_SKIP, "");
                child.innerHTML = "";
              }
            });
            Array.from(template.content.childNodes).forEach((el) => diffContainer.insertBefore(el, firstComponent));
            firstComponent.remove();
            return diffContainer.outerHTML;
          }
        }
        indexOf(parent, child) {
          return Array.from(parent.children).indexOf(child);
        }
      };
      Rendered = class {
        static extract(diff) {
          let { [REPLY]: reply, [EVENTS]: events, [TITLE]: title } = diff;
          delete diff[REPLY];
          delete diff[EVENTS];
          delete diff[TITLE];
          return { diff, title, reply: reply || null, events: events || [] };
        }
        constructor(viewId, rendered) {
          this.viewId = viewId;
          this.rendered = {};
          this.mergeDiff(rendered);
        }
        parentViewId() {
          return this.viewId;
        }
        toString(onlyCids) {
          let [str, streams] = this.recursiveToString(this.rendered, this.rendered[COMPONENTS], onlyCids);
          return [str, streams];
        }
        recursiveToString(rendered, components = rendered[COMPONENTS], onlyCids) {
          onlyCids = onlyCids ? new Set(onlyCids) : null;
          let output = { buffer: "", components, onlyCids, streams: /* @__PURE__ */ new Set() };
          this.toOutputBuffer(rendered, null, output);
          return [output.buffer, output.streams];
        }
        componentCIDs(diff) {
          return Object.keys(diff[COMPONENTS] || {}).map((i) => parseInt(i));
        }
        isComponentOnlyDiff(diff) {
          if (!diff[COMPONENTS]) {
            return false;
          }
          return Object.keys(diff).length === 1;
        }
        getComponent(diff, cid) {
          return diff[COMPONENTS][cid];
        }
        mergeDiff(diff) {
          let newc = diff[COMPONENTS];
          let cache = {};
          delete diff[COMPONENTS];
          this.rendered = this.mutableMerge(this.rendered, diff);
          this.rendered[COMPONENTS] = this.rendered[COMPONENTS] || {};
          if (newc) {
            let oldc = this.rendered[COMPONENTS];
            for (let cid in newc) {
              newc[cid] = this.cachedFindComponent(cid, newc[cid], oldc, newc, cache);
            }
            for (let cid in newc) {
              oldc[cid] = newc[cid];
            }
            diff[COMPONENTS] = newc;
          }
        }
        cachedFindComponent(cid, cdiff, oldc, newc, cache) {
          if (cache[cid]) {
            return cache[cid];
          } else {
            let ndiff, stat, scid = cdiff[STATIC];
            if (isCid(scid)) {
              let tdiff;
              if (scid > 0) {
                tdiff = this.cachedFindComponent(scid, newc[scid], oldc, newc, cache);
              } else {
                tdiff = oldc[-scid];
              }
              stat = tdiff[STATIC];
              ndiff = this.cloneMerge(tdiff, cdiff);
              ndiff[STATIC] = stat;
            } else {
              ndiff = cdiff[STATIC] !== void 0 ? cdiff : this.cloneMerge(oldc[cid] || {}, cdiff);
            }
            cache[cid] = ndiff;
            return ndiff;
          }
        }
        mutableMerge(target, source) {
          if (source[STATIC] !== void 0) {
            return source;
          } else {
            this.doMutableMerge(target, source);
            return target;
          }
        }
        doMutableMerge(target, source) {
          for (let key in source) {
            let val = source[key];
            let targetVal = target[key];
            let isObjVal = isObject(val);
            if (isObjVal && val[STATIC] === void 0 && isObject(targetVal)) {
              this.doMutableMerge(targetVal, val);
            } else {
              target[key] = val;
            }
          }
        }
        cloneMerge(target, source) {
          let merged = __spreadValues(__spreadValues({}, target), source);
          for (let key in merged) {
            let val = source[key];
            let targetVal = target[key];
            if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
              merged[key] = this.cloneMerge(targetVal, val);
            }
          }
          return merged;
        }
        componentToString(cid) {
          let [str, streams] = this.recursiveCIDToString(this.rendered[COMPONENTS], cid);
          return [str, streams];
        }
        pruneCIDs(cids) {
          cids.forEach((cid) => delete this.rendered[COMPONENTS][cid]);
        }
        get() {
          return this.rendered;
        }
        isNewFingerprint(diff = {}) {
          return !!diff[STATIC];
        }
        templateStatic(part, templates) {
          if (typeof part === "number") {
            return templates[part];
          } else {
            return part;
          }
        }
        toOutputBuffer(rendered, templates, output) {
          if (rendered[DYNAMICS]) {
            return this.comprehensionToBuffer(rendered, templates, output);
          }
          let { [STATIC]: statics } = rendered;
          statics = this.templateStatic(statics, templates);
          output.buffer += statics[0];
          for (let i = 1; i < statics.length; i++) {
            this.dynamicToBuffer(rendered[i - 1], templates, output);
            output.buffer += statics[i];
          }
        }
        comprehensionToBuffer(rendered, templates, output) {
          let { [DYNAMICS]: dynamics, [STATIC]: statics, [STREAM]: stream } = rendered;
          let [_ref, _inserts, deleteIds, reset] = stream || [null, {}, [], null];
          statics = this.templateStatic(statics, templates);
          let compTemplates = templates || rendered[TEMPLATES];
          for (let d = 0; d < dynamics.length; d++) {
            let dynamic = dynamics[d];
            output.buffer += statics[0];
            for (let i = 1; i < statics.length; i++) {
              this.dynamicToBuffer(dynamic[i - 1], compTemplates, output);
              output.buffer += statics[i];
            }
          }
          if (stream !== void 0 && (rendered[DYNAMICS].length > 0 || deleteIds.length > 0 || reset)) {
            delete rendered[STREAM];
            output.streams.add(stream);
          }
        }
        dynamicToBuffer(rendered, templates, output) {
          if (typeof rendered === "number") {
            let [str, streams] = this.recursiveCIDToString(output.components, rendered, output.onlyCids);
            output.buffer += str;
            output.streams = /* @__PURE__ */ new Set([...output.streams, ...streams]);
          } else if (isObject(rendered)) {
            this.toOutputBuffer(rendered, templates, output);
          } else {
            output.buffer += rendered;
          }
        }
        recursiveCIDToString(components, cid, onlyCids) {
          let component = components[cid] || logError(`no component for CID ${cid}`, components);
          let template = document.createElement("template");
          let [html, streams] = this.recursiveToString(component, components, onlyCids);
          template.innerHTML = html;
          let container = template.content;
          let skip = onlyCids && !onlyCids.has(cid);
          let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
              if (child.getAttribute(PHX_COMPONENT)) {
                return [hasNodes, true];
              }
              child.setAttribute(PHX_COMPONENT, cid);
              if (!child.id) {
                child.id = `${this.parentViewId()}-${cid}-${i}`;
              }
              if (skip) {
                child.setAttribute(PHX_SKIP, "");
                child.innerHTML = "";
              }
              return [true, hasComponents];
            } else {
              if (child.nodeValue.trim() !== "") {
                logError(`only HTML element tags are allowed at the root of components.

got: "${child.nodeValue.trim()}"

within:
`, template.innerHTML.trim());
                child.replaceWith(this.createSpan(child.nodeValue, cid));
                return [true, hasComponents];
              } else {
                child.remove();
                return [hasNodes, hasComponents];
              }
            }
          }, [false, false]);
          if (!hasChildNodes && !hasChildComponents) {
            logError("expected at least one HTML element tag inside a component, but the component is empty:\n", template.innerHTML.trim());
            return [this.createSpan("", cid).outerHTML, streams];
          } else if (!hasChildNodes && hasChildComponents) {
            logError("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", template.innerHTML.trim());
            return [template.innerHTML, streams];
          } else {
            return [template.innerHTML, streams];
          }
        }
        createSpan(text, cid) {
          let span = document.createElement("span");
          span.innerText = text;
          span.setAttribute(PHX_COMPONENT, cid);
          return span;
        }
      };
      viewHookID = 1;
      ViewHook = class {
        static makeID() {
          return viewHookID++;
        }
        static elementID(el) {
          return el.phxHookId;
        }
        constructor(view, el, callbacks) {
          this.__view = view;
          this.liveSocket = view.liveSocket;
          this.__callbacks = callbacks;
          this.__listeners = /* @__PURE__ */ new Set();
          this.__isDisconnected = false;
          this.el = el;
          this.el.phxHookId = this.constructor.makeID();
          for (let key in this.__callbacks) {
            this[key] = this.__callbacks[key];
          }
        }
        __mounted() {
          this.mounted && this.mounted();
        }
        __updated() {
          this.updated && this.updated();
        }
        __beforeUpdate() {
          this.beforeUpdate && this.beforeUpdate();
        }
        __destroyed() {
          this.destroyed && this.destroyed();
        }
        __reconnected() {
          if (this.__isDisconnected) {
            this.__isDisconnected = false;
            this.reconnected && this.reconnected();
          }
        }
        __disconnected() {
          this.__isDisconnected = true;
          this.disconnected && this.disconnected();
        }
        pushEvent(event, payload = {}, onReply = function() {
        }) {
          return this.__view.pushHookEvent(this.el, null, event, payload, onReply);
        }
        pushEventTo(phxTarget, event, payload = {}, onReply = function() {
        }) {
          return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
            return view.pushHookEvent(this.el, targetCtx, event, payload, onReply);
          });
        }
        handleEvent(event, callback) {
          let callbackRef = (customEvent, bypass) => bypass ? event : callback(customEvent.detail);
          window.addEventListener(`phx:${event}`, callbackRef);
          this.__listeners.add(callbackRef);
          return callbackRef;
        }
        removeHandleEvent(callbackRef) {
          let event = callbackRef(null, true);
          window.removeEventListener(`phx:${event}`, callbackRef);
          this.__listeners.delete(callbackRef);
        }
        upload(name, files) {
          return this.__view.dispatchUploads(name, files);
        }
        uploadTo(phxTarget, name, files) {
          return this.__view.withinTargets(phxTarget, (view) => view.dispatchUploads(name, files));
        }
        __cleanup__() {
          this.__listeners.forEach((callbackRef) => this.removeHandleEvent(callbackRef));
        }
      };
      focusStack = null;
      JS = {
        exec(eventType, phxEvent, view, sourceEl, defaults) {
          let [defaultKind, defaultArgs] = defaults || [null, { callback: defaults && defaults.callback }];
          let commands = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
          commands.forEach(([kind, args]) => {
            if (kind === defaultKind && defaultArgs.data) {
              args.data = Object.assign(args.data || {}, defaultArgs.data);
              args.callback = args.callback || defaultArgs.callback;
            }
            this.filterToEls(sourceEl, args).forEach((el) => {
              this[`exec_${kind}`](eventType, phxEvent, view, sourceEl, el, args);
            });
          });
        },
        isVisible(el) {
          return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length > 0);
        },
        exec_exec(eventType, phxEvent, view, sourceEl, el, [attr, to]) {
          let nodes = to ? dom_default.all(document, to) : [sourceEl];
          nodes.forEach((node) => {
            let encodedJS = node.getAttribute(attr);
            if (!encodedJS) {
              throw new Error(`expected ${attr} to contain JS command on "${to}"`);
            }
            view.liveSocket.execJS(node, encodedJS, eventType);
          });
        },
        exec_dispatch(eventType, phxEvent, view, sourceEl, el, { to, event, detail, bubbles }) {
          detail = detail || {};
          detail.dispatcher = sourceEl;
          dom_default.dispatchEvent(el, event, { detail, bubbles });
        },
        exec_push(eventType, phxEvent, view, sourceEl, el, args) {
          if (!view.isConnected()) {
            return;
          }
          let { event, data, target, page_loading, loading, value, dispatcher, callback } = args;
          let pushOpts = { loading, value, target, page_loading: !!page_loading };
          let targetSrc = eventType === "change" && dispatcher ? dispatcher : sourceEl;
          let phxTarget = target || targetSrc.getAttribute(view.binding("target")) || targetSrc;
          view.withinTargets(phxTarget, (targetView, targetCtx) => {
            if (eventType === "change") {
              let { newCid, _target } = args;
              _target = _target || (dom_default.isFormInput(sourceEl) ? sourceEl.name : void 0);
              if (_target) {
                pushOpts._target = _target;
              }
              targetView.pushInput(sourceEl, targetCtx, newCid, event || phxEvent, pushOpts, callback);
            } else if (eventType === "submit") {
              let { submitter } = args;
              targetView.submitForm(sourceEl, targetCtx, event || phxEvent, submitter, pushOpts, callback);
            } else {
              targetView.pushEvent(eventType, sourceEl, targetCtx, event || phxEvent, data, pushOpts, callback);
            }
          });
        },
        exec_navigate(eventType, phxEvent, view, sourceEl, el, { href, replace }) {
          view.liveSocket.historyRedirect(href, replace ? "replace" : "push");
        },
        exec_patch(eventType, phxEvent, view, sourceEl, el, { href, replace }) {
          view.liveSocket.pushHistoryPatch(href, replace ? "replace" : "push", sourceEl);
        },
        exec_focus(eventType, phxEvent, view, sourceEl, el) {
          window.requestAnimationFrame(() => aria_default.attemptFocus(el));
        },
        exec_focus_first(eventType, phxEvent, view, sourceEl, el) {
          window.requestAnimationFrame(() => aria_default.focusFirstInteractive(el) || aria_default.focusFirst(el));
        },
        exec_push_focus(eventType, phxEvent, view, sourceEl, el) {
          window.requestAnimationFrame(() => focusStack = el || sourceEl);
        },
        exec_pop_focus(eventType, phxEvent, view, sourceEl, el) {
          window.requestAnimationFrame(() => {
            if (focusStack) {
              focusStack.focus();
            }
            focusStack = null;
          });
        },
        exec_add_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
          this.addOrRemoveClasses(el, names, [], transition, time, view);
        },
        exec_remove_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
          this.addOrRemoveClasses(el, [], names, transition, time, view);
        },
        exec_transition(eventType, phxEvent, view, sourceEl, el, { time, transition }) {
          this.addOrRemoveClasses(el, [], [], transition, time, view);
        },
        exec_toggle(eventType, phxEvent, view, sourceEl, el, { display, ins, outs, time }) {
          this.toggle(eventType, view, el, display, ins, outs, time);
        },
        exec_show(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
          this.show(eventType, view, el, display, transition, time);
        },
        exec_hide(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
          this.hide(eventType, view, el, display, transition, time);
        },
        exec_set_attr(eventType, phxEvent, view, sourceEl, el, { attr: [attr, val] }) {
          this.setOrRemoveAttrs(el, [[attr, val]], []);
        },
        exec_remove_attr(eventType, phxEvent, view, sourceEl, el, { attr }) {
          this.setOrRemoveAttrs(el, [], [attr]);
        },
        show(eventType, view, el, display, transition, time) {
          if (!this.isVisible(el)) {
            this.toggle(eventType, view, el, display, transition, null, time);
          }
        },
        hide(eventType, view, el, display, transition, time) {
          if (this.isVisible(el)) {
            this.toggle(eventType, view, el, display, null, transition, time);
          }
        },
        toggle(eventType, view, el, display, ins, outs, time) {
          let [inClasses, inStartClasses, inEndClasses] = ins || [[], [], []];
          let [outClasses, outStartClasses, outEndClasses] = outs || [[], [], []];
          if (inClasses.length > 0 || outClasses.length > 0) {
            if (this.isVisible(el)) {
              let onStart = () => {
                this.addOrRemoveClasses(el, outStartClasses, inClasses.concat(inStartClasses).concat(inEndClasses));
                window.requestAnimationFrame(() => {
                  this.addOrRemoveClasses(el, outClasses, []);
                  window.requestAnimationFrame(() => this.addOrRemoveClasses(el, outEndClasses, outStartClasses));
                });
              };
              el.dispatchEvent(new Event("phx:hide-start"));
              view.transition(time, onStart, () => {
                this.addOrRemoveClasses(el, [], outClasses.concat(outEndClasses));
                dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
                el.dispatchEvent(new Event("phx:hide-end"));
              });
            } else {
              if (eventType === "remove") {
                return;
              }
              let onStart = () => {
                this.addOrRemoveClasses(el, inStartClasses, outClasses.concat(outStartClasses).concat(outEndClasses));
                let stickyDisplay = display || this.defaultDisplay(el);
                dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = stickyDisplay);
                window.requestAnimationFrame(() => {
                  this.addOrRemoveClasses(el, inClasses, []);
                  window.requestAnimationFrame(() => this.addOrRemoveClasses(el, inEndClasses, inStartClasses));
                });
              };
              el.dispatchEvent(new Event("phx:show-start"));
              view.transition(time, onStart, () => {
                this.addOrRemoveClasses(el, [], inClasses.concat(inEndClasses));
                el.dispatchEvent(new Event("phx:show-end"));
              });
            }
          } else {
            if (this.isVisible(el)) {
              window.requestAnimationFrame(() => {
                el.dispatchEvent(new Event("phx:hide-start"));
                dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
                el.dispatchEvent(new Event("phx:hide-end"));
              });
            } else {
              window.requestAnimationFrame(() => {
                el.dispatchEvent(new Event("phx:show-start"));
                let stickyDisplay = display || this.defaultDisplay(el);
                dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = stickyDisplay);
                el.dispatchEvent(new Event("phx:show-end"));
              });
            }
          }
        },
        addOrRemoveClasses(el, adds, removes, transition, time, view) {
          let [transition_run, transition_start, transition_end] = transition || [[], [], []];
          if (transition_run.length > 0) {
            let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(transition_run), []);
            let onDone = () => this.addOrRemoveClasses(el, adds.concat(transition_end), removes.concat(transition_run).concat(transition_start));
            return view.transition(time, onStart, onDone);
          }
          window.requestAnimationFrame(() => {
            let [prevAdds, prevRemoves] = dom_default.getSticky(el, "classes", [[], []]);
            let keepAdds = adds.filter((name) => prevAdds.indexOf(name) < 0 && !el.classList.contains(name));
            let keepRemoves = removes.filter((name) => prevRemoves.indexOf(name) < 0 && el.classList.contains(name));
            let newAdds = prevAdds.filter((name) => removes.indexOf(name) < 0).concat(keepAdds);
            let newRemoves = prevRemoves.filter((name) => adds.indexOf(name) < 0).concat(keepRemoves);
            dom_default.putSticky(el, "classes", (currentEl) => {
              currentEl.classList.remove(...newRemoves);
              currentEl.classList.add(...newAdds);
              return [newAdds, newRemoves];
            });
          });
        },
        setOrRemoveAttrs(el, sets, removes) {
          let [prevSets, prevRemoves] = dom_default.getSticky(el, "attrs", [[], []]);
          let alteredAttrs = sets.map(([attr, _val]) => attr).concat(removes);
          let newSets = prevSets.filter(([attr, _val]) => !alteredAttrs.includes(attr)).concat(sets);
          let newRemoves = prevRemoves.filter((attr) => !alteredAttrs.includes(attr)).concat(removes);
          dom_default.putSticky(el, "attrs", (currentEl) => {
            newRemoves.forEach((attr) => currentEl.removeAttribute(attr));
            newSets.forEach(([attr, val]) => currentEl.setAttribute(attr, val));
            return [newSets, newRemoves];
          });
        },
        hasAllClasses(el, classes) {
          return classes.every((name) => el.classList.contains(name));
        },
        isToggledOut(el, outClasses) {
          return !this.isVisible(el) || this.hasAllClasses(el, outClasses);
        },
        filterToEls(sourceEl, { to }) {
          return to ? dom_default.all(document, to) : [sourceEl];
        },
        defaultDisplay(el) {
          return { tr: "table-row", td: "table-cell" }[el.tagName.toLowerCase()] || "block";
        }
      };
      js_default = JS;
      serializeForm = (form, metadata, onlyNames = []) => {
        let _a = metadata, { submitter } = _a, meta = __objRest(_a, ["submitter"]);
        let formData = new FormData(form);
        if (submitter && submitter.hasAttribute("name") && submitter.form && submitter.form === form) {
          formData.append(submitter.name, submitter.value);
        }
        let toRemove = [];
        formData.forEach((val, key, _index) => {
          if (val instanceof File) {
            toRemove.push(key);
          }
        });
        toRemove.forEach((key) => formData.delete(key));
        let params = new URLSearchParams();
        for (let [key, val] of formData.entries()) {
          if (onlyNames.length === 0 || onlyNames.indexOf(key) >= 0) {
            params.append(key, val);
          }
        }
        for (let metaKey in meta) {
          params.append(metaKey, meta[metaKey]);
        }
        return params.toString();
      };
      View = class {
        constructor(el, liveSocket, parentView, flash, liveReferer) {
          this.isDead = false;
          this.liveSocket = liveSocket;
          this.flash = flash;
          this.parent = parentView;
          this.root = parentView ? parentView.root : this;
          this.el = el;
          this.id = this.el.id;
          this.ref = 0;
          this.childJoins = 0;
          this.loaderTimer = null;
          this.pendingDiffs = [];
          this.pruningCIDs = [];
          this.redirect = false;
          this.href = null;
          this.joinCount = this.parent ? this.parent.joinCount - 1 : 0;
          this.joinPending = true;
          this.destroyed = false;
          this.joinCallback = function(onDone) {
            onDone && onDone();
          };
          this.stopCallback = function() {
          };
          this.pendingJoinOps = this.parent ? null : [];
          this.viewHooks = {};
          this.uploaders = {};
          this.formSubmits = [];
          this.children = this.parent ? null : {};
          this.root.children[this.id] = {};
          this.channel = this.liveSocket.channel(`lv:${this.id}`, () => {
            return {
              redirect: this.redirect ? this.href : void 0,
              url: this.redirect ? void 0 : this.href || void 0,
              params: this.connectParams(liveReferer),
              session: this.getSession(),
              static: this.getStatic(),
              flash: this.flash
            };
          });
        }
        setHref(href) {
          this.href = href;
        }
        setRedirect(href) {
          this.redirect = true;
          this.href = href;
        }
        isMain() {
          return this.el.hasAttribute(PHX_MAIN);
        }
        connectParams(liveReferer) {
          let params = this.liveSocket.params(this.el);
          let manifest = dom_default.all(document, `[${this.binding(PHX_TRACK_STATIC)}]`).map((node) => node.src || node.href).filter((url) => typeof url === "string");
          if (manifest.length > 0) {
            params["_track_static"] = manifest;
          }
          params["_mounts"] = this.joinCount;
          params["_live_referer"] = liveReferer;
          return params;
        }
        isConnected() {
          return this.channel.canPush();
        }
        getSession() {
          return this.el.getAttribute(PHX_SESSION);
        }
        getStatic() {
          let val = this.el.getAttribute(PHX_STATIC);
          return val === "" ? null : val;
        }
        destroy(callback = function() {
        }) {
          this.destroyAllChildren();
          this.destroyed = true;
          delete this.root.children[this.id];
          if (this.parent) {
            delete this.root.children[this.parent.id][this.id];
          }
          clearTimeout(this.loaderTimer);
          let onFinished = () => {
            callback();
            for (let id in this.viewHooks) {
              this.destroyHook(this.viewHooks[id]);
            }
          };
          dom_default.markPhxChildDestroyed(this.el);
          this.log("destroyed", () => ["the child has been removed from the parent"]);
          this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
        }
        setContainerClasses(...classes) {
          this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_CLIENT_ERROR_CLASS, PHX_SERVER_ERROR_CLASS);
          this.el.classList.add(...classes);
        }
        showLoader(timeout) {
          clearTimeout(this.loaderTimer);
          if (timeout) {
            this.loaderTimer = setTimeout(() => this.showLoader(), timeout);
          } else {
            for (let id in this.viewHooks) {
              this.viewHooks[id].__disconnected();
            }
            this.setContainerClasses(PHX_LOADING_CLASS);
          }
        }
        execAll(binding) {
          dom_default.all(this.el, `[${binding}]`, (el) => this.liveSocket.execJS(el, el.getAttribute(binding)));
        }
        hideLoader() {
          clearTimeout(this.loaderTimer);
          this.setContainerClasses(PHX_CONNECTED_CLASS);
          this.execAll(this.binding("connected"));
        }
        triggerReconnected() {
          for (let id in this.viewHooks) {
            this.viewHooks[id].__reconnected();
          }
        }
        log(kind, msgCallback) {
          this.liveSocket.log(this, kind, msgCallback);
        }
        transition(time, onStart, onDone = function() {
        }) {
          this.liveSocket.transition(time, onStart, onDone);
        }
        withinTargets(phxTarget, callback) {
          if (phxTarget instanceof HTMLElement || phxTarget instanceof SVGElement) {
            return this.liveSocket.owner(phxTarget, (view) => callback(view, phxTarget));
          }
          if (isCid(phxTarget)) {
            let targets = dom_default.findComponentNodeList(this.el, phxTarget);
            if (targets.length === 0) {
              logError(`no component found matching phx-target of ${phxTarget}`);
            } else {
              callback(this, parseInt(phxTarget));
            }
          } else {
            let targets = Array.from(document.querySelectorAll(phxTarget));
            if (targets.length === 0) {
              logError(`nothing found matching the phx-target selector "${phxTarget}"`);
            }
            targets.forEach((target) => this.liveSocket.owner(target, (view) => callback(view, target)));
          }
        }
        applyDiff(type, rawDiff, callback) {
          this.log(type, () => ["", clone(rawDiff)]);
          let { diff, reply, events, title } = Rendered.extract(rawDiff);
          callback({ diff, reply, events });
          if (title) {
            window.requestAnimationFrame(() => dom_default.putTitle(title));
          }
        }
        onJoin(resp) {
          let { rendered, container } = resp;
          if (container) {
            let [tag, attrs] = container;
            this.el = dom_default.replaceRootContainer(this.el, tag, attrs);
          }
          this.childJoins = 0;
          this.joinPending = true;
          this.flash = null;
          browser_default.dropLocal(this.liveSocket.localStorage, window.location.pathname, CONSECUTIVE_RELOADS);
          this.applyDiff("mount", rendered, ({ diff, events }) => {
            this.rendered = new Rendered(this.id, diff);
            let [html, streams] = this.renderContainer(null, "join");
            this.dropPendingRefs();
            let forms = this.formsForRecovery(html);
            this.joinCount++;
            if (forms.length > 0) {
              forms.forEach(([form, newForm, newCid], i) => {
                this.pushFormRecovery(form, newCid, (resp2) => {
                  if (i === forms.length - 1) {
                    this.onJoinComplete(resp2, html, streams, events);
                  }
                });
              });
            } else {
              this.onJoinComplete(resp, html, streams, events);
            }
          });
        }
        dropPendingRefs() {
          dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}]`, (el) => {
            el.removeAttribute(PHX_REF);
            el.removeAttribute(PHX_REF_SRC);
          });
        }
        onJoinComplete({ live_patch }, html, streams, events) {
          if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) {
            return this.applyJoinPatch(live_patch, html, streams, events);
          }
          let newChildren = dom_default.findPhxChildrenInFragment(html, this.id).filter((toEl) => {
            let fromEl = toEl.id && this.el.querySelector(`[id="${toEl.id}"]`);
            let phxStatic = fromEl && fromEl.getAttribute(PHX_STATIC);
            if (phxStatic) {
              toEl.setAttribute(PHX_STATIC, phxStatic);
            }
            return this.joinChild(toEl);
          });
          if (newChildren.length === 0) {
            if (this.parent) {
              this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, streams, events)]);
              this.parent.ackJoin(this);
            } else {
              this.onAllChildJoinsComplete();
              this.applyJoinPatch(live_patch, html, streams, events);
            }
          } else {
            this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, streams, events)]);
          }
        }
        attachTrueDocEl() {
          this.el = dom_default.byId(this.id);
          this.el.setAttribute(PHX_ROOT_ID, this.root.id);
        }
        execNewMounted() {
          let phxViewportTop = this.binding(PHX_VIEWPORT_TOP);
          let phxViewportBottom = this.binding(PHX_VIEWPORT_BOTTOM);
          dom_default.all(this.el, `[${phxViewportTop}], [${phxViewportBottom}]`, (hookEl) => {
            dom_default.maybeAddPrivateHooks(hookEl, phxViewportTop, phxViewportBottom);
            this.maybeAddNewHook(hookEl);
          });
          dom_default.all(this.el, `[${this.binding(PHX_HOOK)}], [data-phx-${PHX_HOOK}]`, (hookEl) => {
            this.maybeAddNewHook(hookEl);
          });
          dom_default.all(this.el, `[${this.binding(PHX_MOUNTED)}]`, (el) => this.maybeMounted(el));
        }
        applyJoinPatch(live_patch, html, streams, events) {
          this.attachTrueDocEl();
          let patch = new DOMPatch(this, this.el, this.id, html, streams, null);
          patch.markPrunableContentForRemoval();
          this.performPatch(patch, false);
          this.joinNewChildren();
          this.execNewMounted();
          this.joinPending = false;
          this.liveSocket.dispatchEvents(events);
          this.applyPendingUpdates();
          if (live_patch) {
            let { kind, to } = live_patch;
            this.liveSocket.historyPatch(to, kind);
          }
          this.hideLoader();
          if (this.joinCount > 1) {
            this.triggerReconnected();
          }
          this.stopCallback();
        }
        triggerBeforeUpdateHook(fromEl, toEl) {
          this.liveSocket.triggerDOM("onBeforeElUpdated", [fromEl, toEl]);
          let hook = this.getHook(fromEl);
          let isIgnored = hook && dom_default.isIgnored(fromEl, this.binding(PHX_UPDATE));
          if (hook && !fromEl.isEqualNode(toEl) && !(isIgnored && isEqualObj(fromEl.dataset, toEl.dataset))) {
            hook.__beforeUpdate();
            return hook;
          }
        }
        maybeMounted(el) {
          let phxMounted = el.getAttribute(this.binding(PHX_MOUNTED));
          let hasBeenInvoked = phxMounted && dom_default.private(el, "mounted");
          if (phxMounted && !hasBeenInvoked) {
            this.liveSocket.execJS(el, phxMounted);
            dom_default.putPrivate(el, "mounted", true);
          }
        }
        maybeAddNewHook(el, force) {
          let newHook = this.addHook(el);
          if (newHook) {
            newHook.__mounted();
          }
        }
        performPatch(patch, pruneCids) {
          let removedEls = [];
          let phxChildrenAdded = false;
          let updatedHookIds = /* @__PURE__ */ new Set();
          patch.after("added", (el) => {
            this.liveSocket.triggerDOM("onNodeAdded", [el]);
            this.maybeAddNewHook(el);
            if (el.getAttribute) {
              this.maybeMounted(el);
            }
          });
          patch.after("phxChildAdded", (el) => {
            if (dom_default.isPhxSticky(el)) {
              this.liveSocket.joinRootViews();
            } else {
              phxChildrenAdded = true;
            }
          });
          patch.before("updated", (fromEl, toEl) => {
            let hook = this.triggerBeforeUpdateHook(fromEl, toEl);
            if (hook) {
              updatedHookIds.add(fromEl.id);
            }
          });
          patch.after("updated", (el) => {
            if (updatedHookIds.has(el.id)) {
              this.getHook(el).__updated();
            }
          });
          patch.after("discarded", (el) => {
            if (el.nodeType === Node.ELEMENT_NODE) {
              removedEls.push(el);
            }
          });
          patch.after("transitionsDiscarded", (els) => this.afterElementsRemoved(els, pruneCids));
          patch.perform();
          this.afterElementsRemoved(removedEls, pruneCids);
          return phxChildrenAdded;
        }
        afterElementsRemoved(elements, pruneCids) {
          let destroyedCIDs = [];
          elements.forEach((parent) => {
            let components = dom_default.all(parent, `[${PHX_COMPONENT}]`);
            let hooks = dom_default.all(parent, `[${this.binding(PHX_HOOK)}]`);
            components.concat(parent).forEach((el) => {
              let cid = this.componentID(el);
              if (isCid(cid) && destroyedCIDs.indexOf(cid) === -1) {
                destroyedCIDs.push(cid);
              }
            });
            hooks.concat(parent).forEach((hookEl) => {
              let hook = this.getHook(hookEl);
              hook && this.destroyHook(hook);
            });
          });
          if (pruneCids) {
            this.maybePushComponentsDestroyed(destroyedCIDs);
          }
        }
        joinNewChildren() {
          dom_default.findPhxChildren(this.el, this.id).forEach((el) => this.joinChild(el));
        }
        getChildById(id) {
          return this.root.children[this.id][id];
        }
        getDescendentByEl(el) {
          if (el.id === this.id) {
            return this;
          } else {
            return this.children[el.getAttribute(PHX_PARENT_ID)][el.id];
          }
        }
        destroyDescendent(id) {
          for (let parentId in this.root.children) {
            for (let childId in this.root.children[parentId]) {
              if (childId === id) {
                return this.root.children[parentId][childId].destroy();
              }
            }
          }
        }
        joinChild(el) {
          let child = this.getChildById(el.id);
          if (!child) {
            let view = new View(el, this.liveSocket, this);
            this.root.children[this.id][view.id] = view;
            view.join();
            this.childJoins++;
            return true;
          }
        }
        isJoinPending() {
          return this.joinPending;
        }
        ackJoin(_child) {
          this.childJoins--;
          if (this.childJoins === 0) {
            if (this.parent) {
              this.parent.ackJoin(this);
            } else {
              this.onAllChildJoinsComplete();
            }
          }
        }
        onAllChildJoinsComplete() {
          this.joinCallback(() => {
            this.pendingJoinOps.forEach(([view, op]) => {
              if (!view.isDestroyed()) {
                op();
              }
            });
            this.pendingJoinOps = [];
          });
        }
        update(diff, events) {
          if (this.isJoinPending() || this.liveSocket.hasPendingLink() && this.root.isMain()) {
            return this.pendingDiffs.push({ diff, events });
          }
          this.rendered.mergeDiff(diff);
          let phxChildrenAdded = false;
          if (this.rendered.isComponentOnlyDiff(diff)) {
            this.liveSocket.time("component patch complete", () => {
              let parentCids = dom_default.findParentCIDs(this.el, this.rendered.componentCIDs(diff));
              parentCids.forEach((parentCID) => {
                if (this.componentPatch(this.rendered.getComponent(diff, parentCID), parentCID)) {
                  phxChildrenAdded = true;
                }
              });
            });
          } else if (!isEmpty(diff)) {
            this.liveSocket.time("full patch complete", () => {
              let [html, streams] = this.renderContainer(diff, "update");
              let patch = new DOMPatch(this, this.el, this.id, html, streams, null);
              phxChildrenAdded = this.performPatch(patch, true);
            });
          }
          this.liveSocket.dispatchEvents(events);
          if (phxChildrenAdded) {
            this.joinNewChildren();
          }
        }
        renderContainer(diff, kind) {
          return this.liveSocket.time(`toString diff (${kind})`, () => {
            let tag = this.el.tagName;
            let cids = diff ? this.rendered.componentCIDs(diff).concat(this.pruningCIDs) : null;
            let [html, streams] = this.rendered.toString(cids);
            return [`<${tag}>${html}</${tag}>`, streams];
          });
        }
        componentPatch(diff, cid) {
          if (isEmpty(diff))
            return false;
          let [html, streams] = this.rendered.componentToString(cid);
          let patch = new DOMPatch(this, this.el, this.id, html, streams, cid);
          let childrenAdded = this.performPatch(patch, true);
          return childrenAdded;
        }
        getHook(el) {
          return this.viewHooks[ViewHook.elementID(el)];
        }
        addHook(el) {
          if (ViewHook.elementID(el) || !el.getAttribute) {
            return;
          }
          let hookName = el.getAttribute(`data-phx-${PHX_HOOK}`) || el.getAttribute(this.binding(PHX_HOOK));
          if (hookName && !this.ownsElement(el)) {
            return;
          }
          let callbacks = this.liveSocket.getHookCallbacks(hookName);
          if (callbacks) {
            if (!el.id) {
              logError(`no DOM ID for hook "${hookName}". Hooks require a unique ID on each element.`, el);
            }
            let hook = new ViewHook(this, el, callbacks);
            this.viewHooks[ViewHook.elementID(hook.el)] = hook;
            return hook;
          } else if (hookName !== null) {
            logError(`unknown hook found for "${hookName}"`, el);
          }
        }
        destroyHook(hook) {
          hook.__destroyed();
          hook.__cleanup__();
          delete this.viewHooks[ViewHook.elementID(hook.el)];
        }
        applyPendingUpdates() {
          this.pendingDiffs.forEach(({ diff, events }) => this.update(diff, events));
          this.pendingDiffs = [];
          this.eachChild((child) => child.applyPendingUpdates());
        }
        eachChild(callback) {
          let children = this.root.children[this.id] || {};
          for (let id in children) {
            callback(this.getChildById(id));
          }
        }
        onChannel(event, cb) {
          this.liveSocket.onChannel(this.channel, event, (resp) => {
            if (this.isJoinPending()) {
              this.root.pendingJoinOps.push([this, () => cb(resp)]);
            } else {
              this.liveSocket.requestDOMUpdate(() => cb(resp));
            }
          });
        }
        bindChannel() {
          this.liveSocket.onChannel(this.channel, "diff", (rawDiff) => {
            this.liveSocket.requestDOMUpdate(() => {
              this.applyDiff("update", rawDiff, ({ diff, events }) => this.update(diff, events));
            });
          });
          this.onChannel("redirect", ({ to, flash }) => this.onRedirect({ to, flash }));
          this.onChannel("live_patch", (redir) => this.onLivePatch(redir));
          this.onChannel("live_redirect", (redir) => this.onLiveRedirect(redir));
          this.channel.onError((reason) => this.onError(reason));
          this.channel.onClose((reason) => this.onClose(reason));
        }
        destroyAllChildren() {
          this.eachChild((child) => child.destroy());
        }
        onLiveRedirect(redir) {
          let { to, kind, flash } = redir;
          let url = this.expandURL(to);
          this.liveSocket.historyRedirect(url, kind, flash);
        }
        onLivePatch(redir) {
          let { to, kind } = redir;
          this.href = this.expandURL(to);
          this.liveSocket.historyPatch(to, kind);
        }
        expandURL(to) {
          return to.startsWith("/") ? `${window.location.protocol}//${window.location.host}${to}` : to;
        }
        onRedirect({ to, flash }) {
          this.liveSocket.redirect(to, flash);
        }
        isDestroyed() {
          return this.destroyed;
        }
        joinDead() {
          this.isDead = true;
        }
        join(callback) {
          this.showLoader(this.liveSocket.loaderTimeout);
          this.bindChannel();
          if (this.isMain()) {
            this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" });
          }
          this.joinCallback = (onDone) => {
            onDone = onDone || function() {
            };
            callback ? callback(this.joinCount, onDone) : onDone();
          };
          this.liveSocket.wrapPush(this, { timeout: false }, () => {
            return this.channel.join().receive("ok", (data) => {
              if (!this.isDestroyed()) {
                this.liveSocket.requestDOMUpdate(() => this.onJoin(data));
              }
            }).receive("error", (resp) => !this.isDestroyed() && this.onJoinError(resp)).receive("timeout", () => !this.isDestroyed() && this.onJoinError({ reason: "timeout" }));
          });
        }
        onJoinError(resp) {
          if (resp.reason === "reload") {
            this.log("error", () => [`failed mount with ${resp.status}. Falling back to page request`, resp]);
            return this.onRedirect({ to: this.href });
          } else if (resp.reason === "unauthorized" || resp.reason === "stale") {
            this.log("error", () => ["unauthorized live_redirect. Falling back to page request", resp]);
            return this.onRedirect({ to: this.href });
          }
          if (resp.redirect || resp.live_redirect) {
            this.joinPending = false;
            this.channel.leave();
          }
          if (resp.redirect) {
            return this.onRedirect(resp.redirect);
          }
          if (resp.live_redirect) {
            return this.onLiveRedirect(resp.live_redirect);
          }
          this.displayError([PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_SERVER_ERROR_CLASS]);
          this.log("error", () => ["unable to join", resp]);
          if (this.liveSocket.isConnected()) {
            this.liveSocket.reloadWithJitter(this);
          }
        }
        onClose(reason) {
          if (this.isDestroyed()) {
            return;
          }
          if (this.liveSocket.hasPendingLink() && reason !== "leave") {
            return this.liveSocket.reloadWithJitter(this);
          }
          this.destroyAllChildren();
          this.liveSocket.dropActiveElement(this);
          if (document.activeElement) {
            document.activeElement.blur();
          }
          if (this.liveSocket.isUnloaded()) {
            this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
          }
        }
        onError(reason) {
          this.onClose(reason);
          if (this.liveSocket.isConnected()) {
            this.log("error", () => ["view crashed", reason]);
          }
          if (!this.liveSocket.isUnloaded()) {
            if (this.liveSocket.isConnected()) {
              this.displayError([PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_SERVER_ERROR_CLASS]);
            } else {
              this.displayError([PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_CLIENT_ERROR_CLASS]);
            }
          }
        }
        displayError(classes) {
          if (this.isMain()) {
            dom_default.dispatchEvent(window, "phx:page-loading-start", { detail: { to: this.href, kind: "error" } });
          }
          this.showLoader();
          this.setContainerClasses(...classes);
          this.execAll(this.binding("disconnected"));
        }
        pushWithReply(refGenerator, event, payload, onReply = function() {
        }) {
          if (!this.isConnected()) {
            return;
          }
          let [ref, [el], opts] = refGenerator ? refGenerator() : [null, [], {}];
          let onLoadingDone = function() {
          };
          if (opts.page_loading || el && el.getAttribute(this.binding(PHX_PAGE_LOADING)) !== null) {
            onLoadingDone = this.liveSocket.withPageLoading({ kind: "element", target: el });
          }
          if (typeof payload.cid !== "number") {
            delete payload.cid;
          }
          return this.liveSocket.wrapPush(this, { timeout: true }, () => {
            return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", (resp) => {
              let finish = (hookReply) => {
                if (resp.redirect) {
                  this.onRedirect(resp.redirect);
                }
                if (resp.live_patch) {
                  this.onLivePatch(resp.live_patch);
                }
                if (resp.live_redirect) {
                  this.onLiveRedirect(resp.live_redirect);
                }
                onLoadingDone();
                onReply(resp, hookReply);
              };
              if (resp.diff) {
                this.liveSocket.requestDOMUpdate(() => {
                  this.applyDiff("update", resp.diff, ({ diff, reply, events }) => {
                    if (ref !== null) {
                      this.undoRefs(ref);
                    }
                    this.update(diff, events);
                    finish(reply);
                  });
                });
              } else {
                if (ref !== null) {
                  this.undoRefs(ref);
                }
                finish(null);
              }
            });
          });
        }
        undoRefs(ref) {
          if (!this.isConnected()) {
            return;
          }
          dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}="${ref}"]`, (el) => {
            let disabledVal = el.getAttribute(PHX_DISABLED);
            el.removeAttribute(PHX_REF);
            el.removeAttribute(PHX_REF_SRC);
            if (el.getAttribute(PHX_READONLY) !== null) {
              el.readOnly = false;
              el.removeAttribute(PHX_READONLY);
            }
            if (disabledVal !== null) {
              el.disabled = disabledVal === "true" ? true : false;
              el.removeAttribute(PHX_DISABLED);
            }
            PHX_EVENT_CLASSES.forEach((className) => dom_default.removeClass(el, className));
            let disableRestore = el.getAttribute(PHX_DISABLE_WITH_RESTORE);
            if (disableRestore !== null) {
              el.innerText = disableRestore;
              el.removeAttribute(PHX_DISABLE_WITH_RESTORE);
            }
            let toEl = dom_default.private(el, PHX_REF);
            if (toEl) {
              let hook = this.triggerBeforeUpdateHook(el, toEl);
              DOMPatch.patchEl(el, toEl, this.liveSocket.getActiveElement());
              if (hook) {
                hook.__updated();
              }
              dom_default.deletePrivate(el, PHX_REF);
            }
          });
        }
        putRef(elements, event, opts = {}) {
          let newRef = this.ref++;
          let disableWith = this.binding(PHX_DISABLE_WITH);
          if (opts.loading) {
            elements = elements.concat(dom_default.all(document, opts.loading));
          }
          elements.forEach((el) => {
            el.classList.add(`phx-${event}-loading`);
            el.setAttribute(PHX_REF, newRef);
            el.setAttribute(PHX_REF_SRC, this.el.id);
            let disableText = el.getAttribute(disableWith);
            if (disableText !== null) {
              if (!el.getAttribute(PHX_DISABLE_WITH_RESTORE)) {
                el.setAttribute(PHX_DISABLE_WITH_RESTORE, el.innerText);
              }
              if (disableText !== "") {
                el.innerText = disableText;
              }
              el.setAttribute("disabled", "");
            }
          });
          return [newRef, elements, opts];
        }
        componentID(el) {
          let cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
          return cid ? parseInt(cid) : null;
        }
        targetComponentID(target, targetCtx, opts = {}) {
          if (isCid(targetCtx)) {
            return targetCtx;
          }
          let cidOrSelector = target.getAttribute(this.binding("target"));
          if (isCid(cidOrSelector)) {
            return parseInt(cidOrSelector);
          } else if (targetCtx && (cidOrSelector !== null || opts.target)) {
            return this.closestComponentID(targetCtx);
          } else {
            return null;
          }
        }
        closestComponentID(targetCtx) {
          if (isCid(targetCtx)) {
            return targetCtx;
          } else if (targetCtx) {
            return maybe(targetCtx.closest(`[${PHX_COMPONENT}]`), (el) => this.ownsElement(el) && this.componentID(el));
          } else {
            return null;
          }
        }
        pushHookEvent(el, targetCtx, event, payload, onReply) {
          if (!this.isConnected()) {
            this.log("hook", () => ["unable to push hook event. LiveView not connected", event, payload]);
            return false;
          }
          let [ref, els, opts] = this.putRef([el], "hook");
          this.pushWithReply(() => [ref, els, opts], "event", {
            type: "hook",
            event,
            value: payload,
            cid: this.closestComponentID(targetCtx)
          }, (resp, reply) => onReply(reply, ref));
          return ref;
        }
        extractMeta(el, meta, value) {
          let prefix = this.binding("value-");
          for (let i = 0; i < el.attributes.length; i++) {
            if (!meta) {
              meta = {};
            }
            let name = el.attributes[i].name;
            if (name.startsWith(prefix)) {
              meta[name.replace(prefix, "")] = el.getAttribute(name);
            }
          }
          if (el.value !== void 0 && !(el instanceof HTMLFormElement)) {
            if (!meta) {
              meta = {};
            }
            meta.value = el.value;
            if (el.tagName === "INPUT" && CHECKABLE_INPUTS.indexOf(el.type) >= 0 && !el.checked) {
              delete meta.value;
            }
          }
          if (value) {
            if (!meta) {
              meta = {};
            }
            for (let key in value) {
              meta[key] = value[key];
            }
          }
          return meta;
        }
        pushEvent(type, el, targetCtx, phxEvent, meta, opts = {}, onReply) {
          this.pushWithReply(() => this.putRef([el], type, opts), "event", {
            type,
            event: phxEvent,
            value: this.extractMeta(el, meta, opts.value),
            cid: this.targetComponentID(el, targetCtx, opts)
          }, (resp, reply) => onReply && onReply(reply));
        }
        pushFileProgress(fileEl, entryRef, progress, onReply = function() {
        }) {
          this.liveSocket.withinOwners(fileEl.form, (view, targetCtx) => {
            view.pushWithReply(null, "progress", {
              event: fileEl.getAttribute(view.binding(PHX_PROGRESS)),
              ref: fileEl.getAttribute(PHX_UPLOAD_REF),
              entry_ref: entryRef,
              progress,
              cid: view.targetComponentID(fileEl.form, targetCtx)
            }, onReply);
          });
        }
        pushInput(inputEl, targetCtx, forceCid, phxEvent, opts, callback) {
          let uploads;
          let cid = isCid(forceCid) ? forceCid : this.targetComponentID(inputEl.form, targetCtx);
          let refGenerator = () => this.putRef([inputEl, inputEl.form], "change", opts);
          let formData;
          let meta = this.extractMeta(inputEl.form);
          if (inputEl.getAttribute(this.binding("change"))) {
            formData = serializeForm(inputEl.form, __spreadValues({ _target: opts._target }, meta), [inputEl.name]);
          } else {
            formData = serializeForm(inputEl.form, __spreadValues({ _target: opts._target }, meta));
          }
          if (dom_default.isUploadInput(inputEl) && inputEl.files && inputEl.files.length > 0) {
            LiveUploader.trackFiles(inputEl, Array.from(inputEl.files));
          }
          uploads = LiveUploader.serializeUploads(inputEl);
          let event = {
            type: "form",
            event: phxEvent,
            value: formData,
            uploads,
            cid
          };
          this.pushWithReply(refGenerator, "event", event, (resp) => {
            dom_default.showError(inputEl, this.liveSocket.binding(PHX_FEEDBACK_FOR));
            if (dom_default.isUploadInput(inputEl) && inputEl.getAttribute("data-phx-auto-upload") !== null) {
              if (LiveUploader.filesAwaitingPreflight(inputEl).length > 0) {
                let [ref, _els] = refGenerator();
                this.uploadFiles(inputEl.form, targetCtx, ref, cid, (_uploads) => {
                  callback && callback(resp);
                  this.triggerAwaitingSubmit(inputEl.form);
                });
              }
            } else {
              callback && callback(resp);
            }
          });
        }
        triggerAwaitingSubmit(formEl) {
          let awaitingSubmit = this.getScheduledSubmit(formEl);
          if (awaitingSubmit) {
            let [_el, _ref, _opts, callback] = awaitingSubmit;
            this.cancelSubmit(formEl);
            callback();
          }
        }
        getScheduledSubmit(formEl) {
          return this.formSubmits.find(([el, _ref, _opts, _callback]) => el.isSameNode(formEl));
        }
        scheduleSubmit(formEl, ref, opts, callback) {
          if (this.getScheduledSubmit(formEl)) {
            return true;
          }
          this.formSubmits.push([formEl, ref, opts, callback]);
        }
        cancelSubmit(formEl) {
          this.formSubmits = this.formSubmits.filter(([el, ref, _callback]) => {
            if (el.isSameNode(formEl)) {
              this.undoRefs(ref);
              return false;
            } else {
              return true;
            }
          });
        }
        disableForm(formEl, opts = {}) {
          let filterIgnored = (el) => {
            let userIgnored = closestPhxBinding(el, `${this.binding(PHX_UPDATE)}=ignore`, el.form);
            return !(userIgnored || closestPhxBinding(el, "data-phx-update=ignore", el.form));
          };
          let filterDisables = (el) => {
            return el.hasAttribute(this.binding(PHX_DISABLE_WITH));
          };
          let filterButton = (el) => el.tagName == "BUTTON";
          let filterInput = (el) => ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
          let formElements = Array.from(formEl.elements);
          let disables = formElements.filter(filterDisables);
          let buttons = formElements.filter(filterButton).filter(filterIgnored);
          let inputs = formElements.filter(filterInput).filter(filterIgnored);
          buttons.forEach((button) => {
            button.setAttribute(PHX_DISABLED, button.disabled);
            button.disabled = true;
          });
          inputs.forEach((input) => {
            input.setAttribute(PHX_READONLY, input.readOnly);
            input.readOnly = true;
            if (input.files) {
              input.setAttribute(PHX_DISABLED, input.disabled);
              input.disabled = true;
            }
          });
          formEl.setAttribute(this.binding(PHX_PAGE_LOADING), "");
          return this.putRef([formEl].concat(disables).concat(buttons).concat(inputs), "submit", opts);
        }
        pushFormSubmit(formEl, targetCtx, phxEvent, submitter, opts, onReply) {
          let refGenerator = () => this.disableForm(formEl, opts);
          let cid = this.targetComponentID(formEl, targetCtx);
          if (LiveUploader.hasUploadsInProgress(formEl)) {
            let [ref, _els] = refGenerator();
            let push = () => this.pushFormSubmit(formEl, submitter, targetCtx, phxEvent, opts, onReply);
            return this.scheduleSubmit(formEl, ref, opts, push);
          } else if (LiveUploader.inputsAwaitingPreflight(formEl).length > 0) {
            let [ref, els] = refGenerator();
            let proxyRefGen = () => [ref, els, opts];
            this.uploadFiles(formEl, targetCtx, ref, cid, (_uploads) => {
              let meta = this.extractMeta(formEl);
              let formData = serializeForm(formEl, __spreadValues({ submitter }, meta));
              this.pushWithReply(proxyRefGen, "event", {
                type: "form",
                event: phxEvent,
                value: formData,
                cid
              }, onReply);
            });
          } else if (!(formEl.hasAttribute(PHX_REF) && formEl.classList.contains("phx-submit-loading"))) {
            let meta = this.extractMeta(formEl);
            let formData = serializeForm(formEl, __spreadValues({ submitter }, meta));
            this.pushWithReply(refGenerator, "event", {
              type: "form",
              event: phxEvent,
              value: formData,
              cid
            }, onReply);
          }
        }
        uploadFiles(formEl, targetCtx, ref, cid, onComplete) {
          let joinCountAtUpload = this.joinCount;
          let inputEls = LiveUploader.activeFileInputs(formEl);
          let numFileInputsInProgress = inputEls.length;
          inputEls.forEach((inputEl) => {
            let uploader = new LiveUploader(inputEl, this, () => {
              numFileInputsInProgress--;
              if (numFileInputsInProgress === 0) {
                onComplete();
              }
            });
            this.uploaders[inputEl] = uploader;
            let entries = uploader.entries().map((entry) => entry.toPreflightPayload());
            let payload = {
              ref: inputEl.getAttribute(PHX_UPLOAD_REF),
              entries,
              cid: this.targetComponentID(inputEl.form, targetCtx)
            };
            this.log("upload", () => ["sending preflight request", payload]);
            this.pushWithReply(null, "allow_upload", payload, (resp) => {
              this.log("upload", () => ["got preflight response", resp]);
              if (resp.error) {
                this.undoRefs(ref);
                let [entry_ref, reason] = resp.error;
                this.log("upload", () => [`error for entry ${entry_ref}`, reason]);
              } else {
                let onError = (callback) => {
                  this.channel.onError(() => {
                    if (this.joinCount === joinCountAtUpload) {
                      callback();
                    }
                  });
                };
                uploader.initAdapterUpload(resp, onError, this.liveSocket);
              }
            });
          });
        }
        dispatchUploads(name, filesOrBlobs) {
          let inputs = dom_default.findUploadInputs(this.el).filter((el) => el.name === name);
          if (inputs.length === 0) {
            logError(`no live file inputs found matching the name "${name}"`);
          } else if (inputs.length > 1) {
            logError(`duplicate live file inputs found matching the name "${name}"`);
          } else {
            dom_default.dispatchEvent(inputs[0], PHX_TRACK_UPLOADS, { detail: { files: filesOrBlobs } });
          }
        }
        pushFormRecovery(form, newCid, callback) {
          this.liveSocket.withinOwners(form, (view, targetCtx) => {
            let phxChange = this.binding("change");
            let inputs = Array.from(form.elements).filter((el) => dom_default.isFormInput(el) && el.name && !el.hasAttribute(phxChange));
            if (inputs.length === 0) {
              return;
            }
            let input = inputs.find((el) => el.type !== "hidden") || input[0];
            let phxEvent = form.getAttribute(this.binding(PHX_AUTO_RECOVER)) || form.getAttribute(this.binding("change"));
            js_default.exec("change", phxEvent, view, input, ["push", { _target: input.name, newCid, callback }]);
          });
        }
        pushLinkPatch(href, targetEl, callback) {
          let linkRef = this.liveSocket.setPendingLink(href);
          let refGen = targetEl ? () => this.putRef([targetEl], "click") : null;
          let fallback = () => this.liveSocket.redirect(window.location.href);
          let url = href.startsWith("/") ? `${location.protocol}//${location.host}${href}` : href;
          let push = this.pushWithReply(refGen, "live_patch", { url }, (resp) => {
            this.liveSocket.requestDOMUpdate(() => {
              if (resp.link_redirect) {
                this.liveSocket.replaceMain(href, null, callback, linkRef);
              } else {
                if (this.liveSocket.commitPendingLink(linkRef)) {
                  this.href = href;
                }
                this.applyPendingUpdates();
                callback && callback(linkRef);
              }
            });
          });
          if (push) {
            push.receive("timeout", fallback);
          } else {
            fallback();
          }
        }
        formsForRecovery(html) {
          if (this.joinCount === 0) {
            return [];
          }
          let phxChange = this.binding("change");
          let template = document.createElement("template");
          template.innerHTML = html;
          return dom_default.all(this.el, `form[${phxChange}]`).filter((form) => form.id && this.ownsElement(form)).filter((form) => form.elements.length > 0).filter((form) => form.getAttribute(this.binding(PHX_AUTO_RECOVER)) !== "ignore").map((form) => {
            let newForm = template.content.querySelector(`form[id="${form.id}"][${phxChange}="${form.getAttribute(phxChange)}"]`);
            if (newForm) {
              return [form, newForm, this.targetComponentID(newForm)];
            } else {
              return [form, form, this.targetComponentID(form)];
            }
          }).filter(([form, newForm, newCid]) => newForm);
        }
        maybePushComponentsDestroyed(destroyedCIDs) {
          let willDestroyCIDs = destroyedCIDs.filter((cid) => {
            return dom_default.findComponentNodeList(this.el, cid).length === 0;
          });
          if (willDestroyCIDs.length > 0) {
            this.pruningCIDs.push(...willDestroyCIDs);
            this.pushWithReply(null, "cids_will_destroy", { cids: willDestroyCIDs }, () => {
              this.pruningCIDs = this.pruningCIDs.filter((cid) => willDestroyCIDs.indexOf(cid) !== -1);
              let completelyDestroyCIDs = willDestroyCIDs.filter((cid) => {
                return dom_default.findComponentNodeList(this.el, cid).length === 0;
              });
              if (completelyDestroyCIDs.length > 0) {
                this.pushWithReply(null, "cids_destroyed", { cids: completelyDestroyCIDs }, (resp) => {
                  this.rendered.pruneCIDs(resp.cids);
                });
              }
            });
          }
        }
        ownsElement(el) {
          let parentViewEl = el.closest(PHX_VIEW_SELECTOR);
          return el.getAttribute(PHX_PARENT_ID) === this.id || parentViewEl && parentViewEl.id === this.id || !parentViewEl && this.isDead;
        }
        submitForm(form, targetCtx, phxEvent, submitter, opts = {}) {
          dom_default.putPrivate(form, PHX_HAS_SUBMITTED, true);
          let phxFeedback = this.liveSocket.binding(PHX_FEEDBACK_FOR);
          let inputs = Array.from(form.elements);
          inputs.forEach((input) => dom_default.putPrivate(input, PHX_HAS_SUBMITTED, true));
          this.liveSocket.blurActiveElement(this);
          this.pushFormSubmit(form, targetCtx, phxEvent, submitter, opts, () => {
            inputs.forEach((input) => dom_default.showError(input, phxFeedback));
            this.liveSocket.restorePreviouslyActiveFocus();
          });
        }
        binding(kind) {
          return this.liveSocket.binding(kind);
        }
      };
      LiveSocket = class {
        constructor(url, phxSocket, opts = {}) {
          this.unloaded = false;
          if (!phxSocket || phxSocket.constructor.name === "Object") {
            throw new Error(`
      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:

          import {Socket} from "phoenix"
          import {LiveSocket} from "phoenix_live_view"
          let liveSocket = new LiveSocket("/live", Socket, {...})
      `);
          }
          this.socket = new phxSocket(url, opts);
          this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
          this.opts = opts;
          this.params = closure2(opts.params || {});
          this.viewLogger = opts.viewLogger;
          this.metadataCallbacks = opts.metadata || {};
          this.defaults = Object.assign(clone(DEFAULTS), opts.defaults || {});
          this.activeElement = null;
          this.prevActive = null;
          this.silenced = false;
          this.main = null;
          this.outgoingMainEl = null;
          this.clickStartedAtTarget = null;
          this.linkRef = 1;
          this.roots = {};
          this.href = window.location.href;
          this.pendingLink = null;
          this.currentLocation = clone(window.location);
          this.hooks = opts.hooks || {};
          this.uploaders = opts.uploaders || {};
          this.loaderTimeout = opts.loaderTimeout || LOADER_TIMEOUT;
          this.reloadWithJitterTimer = null;
          this.maxReloads = opts.maxReloads || MAX_RELOADS;
          this.reloadJitterMin = opts.reloadJitterMin || RELOAD_JITTER_MIN;
          this.reloadJitterMax = opts.reloadJitterMax || RELOAD_JITTER_MAX;
          this.failsafeJitter = opts.failsafeJitter || FAILSAFE_JITTER;
          this.localStorage = opts.localStorage || window.localStorage;
          this.sessionStorage = opts.sessionStorage || window.sessionStorage;
          this.boundTopLevelEvents = false;
          this.domCallbacks = Object.assign({ onNodeAdded: closure2(), onBeforeElUpdated: closure2() }, opts.dom || {});
          this.transitions = new TransitionSet();
          window.addEventListener("pagehide", (_e) => {
            this.unloaded = true;
          });
          this.socket.onOpen(() => {
            if (this.isUnloaded()) {
              window.location.reload();
            }
          });
        }
        isProfileEnabled() {
          return this.sessionStorage.getItem(PHX_LV_PROFILE) === "true";
        }
        isDebugEnabled() {
          return this.sessionStorage.getItem(PHX_LV_DEBUG) === "true";
        }
        isDebugDisabled() {
          return this.sessionStorage.getItem(PHX_LV_DEBUG) === "false";
        }
        enableDebug() {
          this.sessionStorage.setItem(PHX_LV_DEBUG, "true");
        }
        enableProfiling() {
          this.sessionStorage.setItem(PHX_LV_PROFILE, "true");
        }
        disableDebug() {
          this.sessionStorage.setItem(PHX_LV_DEBUG, "false");
        }
        disableProfiling() {
          this.sessionStorage.removeItem(PHX_LV_PROFILE);
        }
        enableLatencySim(upperBoundMs) {
          this.enableDebug();
          console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable");
          this.sessionStorage.setItem(PHX_LV_LATENCY_SIM, upperBoundMs);
        }
        disableLatencySim() {
          this.sessionStorage.removeItem(PHX_LV_LATENCY_SIM);
        }
        getLatencySim() {
          let str = this.sessionStorage.getItem(PHX_LV_LATENCY_SIM);
          return str ? parseInt(str) : null;
        }
        getSocket() {
          return this.socket;
        }
        connect() {
          if (window.location.hostname === "localhost" && !this.isDebugDisabled()) {
            this.enableDebug();
          }
          let doConnect = () => {
            if (this.joinRootViews()) {
              this.bindTopLevelEvents();
              this.socket.connect();
            } else if (this.main) {
              this.socket.connect();
            } else {
              this.bindTopLevelEvents({ dead: true });
            }
            this.joinDeadView();
          };
          if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
            doConnect();
          } else {
            document.addEventListener("DOMContentLoaded", () => doConnect());
          }
        }
        disconnect(callback) {
          clearTimeout(this.reloadWithJitterTimer);
          this.socket.disconnect(callback);
        }
        replaceTransport(transport) {
          clearTimeout(this.reloadWithJitterTimer);
          this.socket.replaceTransport(transport);
          this.connect();
        }
        execJS(el, encodedJS, eventType = null) {
          this.owner(el, (view) => js_default.exec(eventType, encodedJS, view, el));
        }
        execJSHookPush(el, phxEvent, data, callback) {
          this.withinOwners(el, (view) => {
            js_default.exec("hook", phxEvent, view, el, ["push", { data, callback }]);
          });
        }
        unload() {
          if (this.unloaded) {
            return;
          }
          if (this.main && this.isConnected()) {
            this.log(this.main, "socket", () => ["disconnect for page nav"]);
          }
          this.unloaded = true;
          this.destroyAllViews();
          this.disconnect();
        }
        triggerDOM(kind, args) {
          this.domCallbacks[kind](...args);
        }
        time(name, func) {
          if (!this.isProfileEnabled() || !console.time) {
            return func();
          }
          console.time(name);
          let result = func();
          console.timeEnd(name);
          return result;
        }
        log(view, kind, msgCallback) {
          if (this.viewLogger) {
            let [msg, obj] = msgCallback();
            this.viewLogger(view, kind, msg, obj);
          } else if (this.isDebugEnabled()) {
            let [msg, obj] = msgCallback();
            debug(view, kind, msg, obj);
          }
        }
        requestDOMUpdate(callback) {
          this.transitions.after(callback);
        }
        transition(time, onStart, onDone = function() {
        }) {
          this.transitions.addTransition(time, onStart, onDone);
        }
        onChannel(channel, event, cb) {
          channel.on(event, (data) => {
            let latency = this.getLatencySim();
            if (!latency) {
              cb(data);
            } else {
              setTimeout(() => cb(data), latency);
            }
          });
        }
        wrapPush(view, opts, push) {
          let latency = this.getLatencySim();
          let oldJoinCount = view.joinCount;
          if (!latency) {
            if (this.isConnected() && opts.timeout) {
              return push().receive("timeout", () => {
                if (view.joinCount === oldJoinCount && !view.isDestroyed()) {
                  this.reloadWithJitter(view, () => {
                    this.log(view, "timeout", () => ["received timeout while communicating with server. Falling back to hard refresh for recovery"]);
                  });
                }
              });
            } else {
              return push();
            }
          }
          let fakePush = {
            receives: [],
            receive(kind, cb) {
              this.receives.push([kind, cb]);
            }
          };
          setTimeout(() => {
            if (view.isDestroyed()) {
              return;
            }
            fakePush.receives.reduce((acc, [kind, cb]) => acc.receive(kind, cb), push());
          }, latency);
          return fakePush;
        }
        reloadWithJitter(view, log) {
          clearTimeout(this.reloadWithJitterTimer);
          this.disconnect();
          let minMs = this.reloadJitterMin;
          let maxMs = this.reloadJitterMax;
          let afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
          let tries = browser_default.updateLocal(this.localStorage, window.location.pathname, CONSECUTIVE_RELOADS, 0, (count) => count + 1);
          if (tries > this.maxReloads) {
            afterMs = this.failsafeJitter;
          }
          this.reloadWithJitterTimer = setTimeout(() => {
            if (view.isDestroyed() || view.isConnected()) {
              return;
            }
            view.destroy();
            log ? log() : this.log(view, "join", () => [`encountered ${tries} consecutive reloads`]);
            if (tries > this.maxReloads) {
              this.log(view, "join", () => [`exceeded ${this.maxReloads} consecutive reloads. Entering failsafe mode`]);
            }
            if (this.hasPendingLink()) {
              window.location = this.pendingLink;
            } else {
              window.location.reload();
            }
          }, afterMs);
        }
        getHookCallbacks(name) {
          return name && name.startsWith("Phoenix.") ? hooks_default[name.split(".")[1]] : this.hooks[name];
        }
        isUnloaded() {
          return this.unloaded;
        }
        isConnected() {
          return this.socket.isConnected();
        }
        getBindingPrefix() {
          return this.bindingPrefix;
        }
        binding(kind) {
          return `${this.getBindingPrefix()}${kind}`;
        }
        channel(topic, params) {
          return this.socket.channel(topic, params);
        }
        joinDeadView() {
          let body = document.body;
          if (body && !this.isPhxView(body) && !this.isPhxView(document.firstElementChild)) {
            let view = this.newRootView(body);
            view.setHref(this.getHref());
            view.joinDead();
            if (!this.main) {
              this.main = view;
            }
            window.requestAnimationFrame(() => view.execNewMounted());
          }
        }
        joinRootViews() {
          let rootsFound = false;
          dom_default.all(document, `${PHX_VIEW_SELECTOR}:not([${PHX_PARENT_ID}])`, (rootEl) => {
            if (!this.getRootById(rootEl.id)) {
              let view = this.newRootView(rootEl);
              view.setHref(this.getHref());
              view.join();
              if (rootEl.hasAttribute(PHX_MAIN)) {
                this.main = view;
              }
            }
            rootsFound = true;
          });
          return rootsFound;
        }
        redirect(to, flash) {
          this.unload();
          browser_default.redirect(to, flash);
        }
        replaceMain(href, flash, callback = null, linkRef = this.setPendingLink(href)) {
          let liveReferer = this.currentLocation.href;
          this.outgoingMainEl = this.outgoingMainEl || this.main.el;
          let newMainEl = dom_default.cloneNode(this.outgoingMainEl, "");
          this.main.showLoader(this.loaderTimeout);
          this.main.destroy();
          this.main = this.newRootView(newMainEl, flash, liveReferer);
          this.main.setRedirect(href);
          this.transitionRemoves();
          this.main.join((joinCount, onDone) => {
            if (joinCount === 1 && this.commitPendingLink(linkRef)) {
              this.requestDOMUpdate(() => {
                dom_default.findPhxSticky(document).forEach((el) => newMainEl.appendChild(el));
                this.outgoingMainEl.replaceWith(newMainEl);
                this.outgoingMainEl = null;
                callback && requestAnimationFrame(() => callback(linkRef));
                onDone();
              });
            }
          });
        }
        transitionRemoves(elements) {
          let removeAttr = this.binding("remove");
          elements = elements || dom_default.all(document, `[${removeAttr}]`);
          elements.forEach((el) => {
            this.execJS(el, el.getAttribute(removeAttr), "remove");
          });
        }
        isPhxView(el) {
          return el.getAttribute && el.getAttribute(PHX_SESSION) !== null;
        }
        newRootView(el, flash, liveReferer) {
          let view = new View(el, this, null, flash, liveReferer);
          this.roots[view.id] = view;
          return view;
        }
        owner(childEl, callback) {
          let view = maybe(childEl.closest(PHX_VIEW_SELECTOR), (el) => this.getViewByEl(el)) || this.main;
          if (view) {
            callback(view);
          }
        }
        withinOwners(childEl, callback) {
          this.owner(childEl, (view) => callback(view, childEl));
        }
        getViewByEl(el) {
          let rootId = el.getAttribute(PHX_ROOT_ID);
          return maybe(this.getRootById(rootId), (root) => root.getDescendentByEl(el));
        }
        getRootById(id) {
          return this.roots[id];
        }
        destroyAllViews() {
          for (let id in this.roots) {
            this.roots[id].destroy();
            delete this.roots[id];
          }
          this.main = null;
        }
        destroyViewByEl(el) {
          let root = this.getRootById(el.getAttribute(PHX_ROOT_ID));
          if (root && root.id === el.id) {
            root.destroy();
            delete this.roots[root.id];
          } else if (root) {
            root.destroyDescendent(el.id);
          }
        }
        setActiveElement(target) {
          if (this.activeElement === target) {
            return;
          }
          this.activeElement = target;
          let cancel = () => {
            if (target === this.activeElement) {
              this.activeElement = null;
            }
            target.removeEventListener("mouseup", this);
            target.removeEventListener("touchend", this);
          };
          target.addEventListener("mouseup", cancel);
          target.addEventListener("touchend", cancel);
        }
        getActiveElement() {
          if (document.activeElement === document.body) {
            return this.activeElement || document.activeElement;
          } else {
            return document.activeElement || document.body;
          }
        }
        dropActiveElement(view) {
          if (this.prevActive && view.ownsElement(this.prevActive)) {
            this.prevActive = null;
          }
        }
        restorePreviouslyActiveFocus() {
          if (this.prevActive && this.prevActive !== document.body) {
            this.prevActive.focus();
          }
        }
        blurActiveElement() {
          this.prevActive = this.getActiveElement();
          if (this.prevActive !== document.body) {
            this.prevActive.blur();
          }
        }
        bindTopLevelEvents({ dead } = {}) {
          if (this.boundTopLevelEvents) {
            return;
          }
          this.boundTopLevelEvents = true;
          this.socket.onClose((event) => {
            if (event && event.code === 1e3 && this.main) {
              return this.reloadWithJitter(this.main);
            }
          });
          document.body.addEventListener("click", function() {
          });
          window.addEventListener("pageshow", (e) => {
            if (e.persisted) {
              this.getSocket().disconnect();
              this.withPageLoading({ to: window.location.href, kind: "redirect" });
              window.location.reload();
            }
          }, true);
          if (!dead) {
            this.bindNav();
          }
          this.bindClicks();
          if (!dead) {
            this.bindForms();
          }
          this.bind({ keyup: "keyup", keydown: "keydown" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
            let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
            let pressedKey = e.key && e.key.toLowerCase();
            if (matchKey && matchKey.toLowerCase() !== pressedKey) {
              return;
            }
            let data = __spreadValues({ key: e.key }, this.eventMeta(type, e, targetEl));
            js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
          });
          this.bind({ blur: "focusout", focus: "focusin" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
            if (!eventTarget) {
              let data = __spreadValues({ key: e.key }, this.eventMeta(type, e, targetEl));
              js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
            }
          });
          this.bind({ blur: "blur", focus: "focus" }, (e, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
            if (phxTarget === "window") {
              let data = this.eventMeta(type, e, targetEl);
              js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
            }
          });
          window.addEventListener("dragover", (e) => e.preventDefault());
          window.addEventListener("drop", (e) => {
            e.preventDefault();
            let dropTargetId = maybe(closestPhxBinding(e.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
              return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
            });
            let dropTarget = dropTargetId && document.getElementById(dropTargetId);
            let files = Array.from(e.dataTransfer.files || []);
            if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
              return;
            }
            LiveUploader.trackFiles(dropTarget, files, e.dataTransfer);
            dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
          });
          this.on(PHX_TRACK_UPLOADS, (e) => {
            let uploadTarget = e.target;
            if (!dom_default.isUploadInput(uploadTarget)) {
              return;
            }
            let files = Array.from(e.detail.files || []).filter((f) => f instanceof File || f instanceof Blob);
            LiveUploader.trackFiles(uploadTarget, files);
            uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
          });
        }
        eventMeta(eventName, e, targetEl) {
          let callback = this.metadataCallbacks[eventName];
          return callback ? callback(e, targetEl) : {};
        }
        setPendingLink(href) {
          this.linkRef++;
          this.pendingLink = href;
          return this.linkRef;
        }
        commitPendingLink(linkRef) {
          if (this.linkRef !== linkRef) {
            return false;
          } else {
            this.href = this.pendingLink;
            this.pendingLink = null;
            return true;
          }
        }
        getHref() {
          return this.href;
        }
        hasPendingLink() {
          return !!this.pendingLink;
        }
        bind(events, callback) {
          for (let event in events) {
            let browserEventName = events[event];
            this.on(browserEventName, (e) => {
              let binding = this.binding(event);
              let windowBinding = this.binding(`window-${event}`);
              let targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);
              if (targetPhxEvent) {
                this.debounce(e.target, e, browserEventName, () => {
                  this.withinOwners(e.target, (view) => {
                    callback(e, event, view, e.target, targetPhxEvent, null);
                  });
                });
              } else {
                dom_default.all(document, `[${windowBinding}]`, (el) => {
                  let phxEvent = el.getAttribute(windowBinding);
                  this.debounce(el, e, browserEventName, () => {
                    this.withinOwners(el, (view) => {
                      callback(e, event, view, el, phxEvent, "window");
                    });
                  });
                });
              }
            });
          }
        }
        bindClicks() {
          window.addEventListener("click", (e) => this.clickStartedAtTarget = e.target);
          this.bindClick("click", "click", false);
          this.bindClick("mousedown", "capture-click", true);
        }
        bindClick(eventName, bindingName, capture) {
          let click = this.binding(bindingName);
          window.addEventListener(eventName, (e) => {
            let target = null;
            if (capture) {
              target = e.target.matches(`[${click}]`) ? e.target : e.target.querySelector(`[${click}]`);
            } else {
              let clickStartedAtTarget = this.clickStartedAtTarget || e.target;
              target = closestPhxBinding(clickStartedAtTarget, click);
              this.dispatchClickAway(e, clickStartedAtTarget);
              this.clickStartedAtTarget = null;
            }
            let phxEvent = target && target.getAttribute(click);
            if (!phxEvent) {
              if (!capture && dom_default.isNewPageClick(e, window.location)) {
                this.unload();
              }
              return;
            }
            if (target.getAttribute("href") === "#") {
              e.preventDefault();
            }
            if (target.hasAttribute(PHX_REF)) {
              return;
            }
            this.debounce(target, e, "click", () => {
              this.withinOwners(target, (view) => {
                js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e, target) }]);
              });
            });
          }, capture);
        }
        dispatchClickAway(e, clickStartedAt) {
          let phxClickAway = this.binding("click-away");
          dom_default.all(document, `[${phxClickAway}]`, (el) => {
            if (!(el.isSameNode(clickStartedAt) || el.contains(clickStartedAt))) {
              this.withinOwners(e.target, (view) => {
                let phxEvent = el.getAttribute(phxClickAway);
                if (js_default.isVisible(el)) {
                  js_default.exec("click", phxEvent, view, el, ["push", { data: this.eventMeta("click", e, e.target) }]);
                }
              });
            }
          });
        }
        bindNav() {
          if (!browser_default.canPushState()) {
            return;
          }
          if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
          }
          let scrollTimer = null;
          window.addEventListener("scroll", (_e) => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
              browser_default.updateCurrentState((state) => Object.assign(state, { scroll: window.scrollY }));
            }, 100);
          });
          window.addEventListener("popstate", (event) => {
            if (!this.registerNewLocation(window.location)) {
              return;
            }
            let { type, id, root, scroll } = event.state || {};
            let href = window.location.href;
            dom_default.dispatchEvent(window, "phx:navigate", { detail: { href, patch: type === "patch", pop: true } });
            this.requestDOMUpdate(() => {
              if (this.main.isConnected() && (type === "patch" && id === this.main.id)) {
                this.main.pushLinkPatch(href, null, () => {
                  this.maybeScroll(scroll);
                });
              } else {
                this.replaceMain(href, null, () => {
                  if (root) {
                    this.replaceRootHistory();
                  }
                  this.maybeScroll(scroll);
                });
              }
            });
          }, false);
          window.addEventListener("click", (e) => {
            let target = closestPhxBinding(e.target, PHX_LIVE_LINK);
            let type = target && target.getAttribute(PHX_LIVE_LINK);
            if (!type || !this.isConnected() || !this.main || dom_default.wantsNewTab(e)) {
              return;
            }
            let href = target.href;
            let linkState = target.getAttribute(PHX_LINK_STATE);
            e.preventDefault();
            e.stopImmediatePropagation();
            if (this.pendingLink === href) {
              return;
            }
            this.requestDOMUpdate(() => {
              if (type === "patch") {
                this.pushHistoryPatch(href, linkState, target);
              } else if (type === "redirect") {
                this.historyRedirect(href, linkState);
              } else {
                throw new Error(`expected ${PHX_LIVE_LINK} to be "patch" or "redirect", got: ${type}`);
              }
              let phxClick = target.getAttribute(this.binding("click"));
              if (phxClick) {
                this.requestDOMUpdate(() => this.execJS(target, phxClick, "click"));
              }
            });
          }, false);
        }
        maybeScroll(scroll) {
          if (typeof scroll === "number") {
            requestAnimationFrame(() => {
              window.scrollTo(0, scroll);
            });
          }
        }
        dispatchEvent(event, payload = {}) {
          dom_default.dispatchEvent(window, `phx:${event}`, { detail: payload });
        }
        dispatchEvents(events) {
          events.forEach(([event, payload]) => this.dispatchEvent(event, payload));
        }
        withPageLoading(info, callback) {
          dom_default.dispatchEvent(window, "phx:page-loading-start", { detail: info });
          let done = () => dom_default.dispatchEvent(window, "phx:page-loading-stop", { detail: info });
          return callback ? callback(done) : done;
        }
        pushHistoryPatch(href, linkState, targetEl) {
          if (!this.isConnected()) {
            return browser_default.redirect(href);
          }
          this.withPageLoading({ to: href, kind: "patch" }, (done) => {
            this.main.pushLinkPatch(href, targetEl, (linkRef) => {
              this.historyPatch(href, linkState, linkRef);
              done();
            });
          });
        }
        historyPatch(href, linkState, linkRef = this.setPendingLink(href)) {
          if (!this.commitPendingLink(linkRef)) {
            return;
          }
          browser_default.pushState(linkState, { type: "patch", id: this.main.id }, href);
          dom_default.dispatchEvent(window, "phx:navigate", { detail: { patch: true, href, pop: false } });
          this.registerNewLocation(window.location);
        }
        historyRedirect(href, linkState, flash) {
          if (!this.isConnected()) {
            return browser_default.redirect(href, flash);
          }
          if (/^\/$|^\/[^\/]+.*$/.test(href)) {
            let { protocol, host } = window.location;
            href = `${protocol}//${host}${href}`;
          }
          let scroll = window.scrollY;
          this.withPageLoading({ to: href, kind: "redirect" }, (done) => {
            this.replaceMain(href, flash, (linkRef) => {
              if (linkRef === this.linkRef) {
                browser_default.pushState(linkState, { type: "redirect", id: this.main.id, scroll }, href);
                dom_default.dispatchEvent(window, "phx:navigate", { detail: { href, patch: false, pop: false } });
                this.registerNewLocation(window.location);
              }
              done();
            });
          });
        }
        replaceRootHistory() {
          browser_default.pushState("replace", { root: true, type: "patch", id: this.main.id });
        }
        registerNewLocation(newLocation) {
          let { pathname, search } = this.currentLocation;
          if (pathname + search === newLocation.pathname + newLocation.search) {
            return false;
          } else {
            this.currentLocation = clone(newLocation);
            return true;
          }
        }
        bindForms() {
          let iterations = 0;
          let externalFormSubmitted = false;
          this.on("submit", (e) => {
            let phxSubmit = e.target.getAttribute(this.binding("submit"));
            let phxChange = e.target.getAttribute(this.binding("change"));
            if (!externalFormSubmitted && phxChange && !phxSubmit) {
              externalFormSubmitted = true;
              e.preventDefault();
              this.withinOwners(e.target, (view) => {
                view.disableForm(e.target);
                window.requestAnimationFrame(() => {
                  if (dom_default.isUnloadableFormSubmit(e)) {
                    this.unload();
                  }
                  e.target.submit();
                });
              });
            }
          }, true);
          this.on("submit", (e) => {
            let phxEvent = e.target.getAttribute(this.binding("submit"));
            if (!phxEvent) {
              if (dom_default.isUnloadableFormSubmit(e)) {
                this.unload();
              }
              return;
            }
            e.preventDefault();
            e.target.disabled = true;
            this.withinOwners(e.target, (view) => {
              js_default.exec("submit", phxEvent, view, e.target, ["push", { submitter: e.submitter }]);
            });
          }, false);
          for (let type of ["change", "input"]) {
            this.on(type, (e) => {
              let phxChange = this.binding("change");
              let input = e.target;
              let inputEvent = input.getAttribute(phxChange);
              let formEvent = input.form && input.form.getAttribute(phxChange);
              let phxEvent = inputEvent || formEvent;
              if (!phxEvent) {
                return;
              }
              if (input.type === "number" && input.validity && input.validity.badInput) {
                return;
              }
              let dispatcher = inputEvent ? input : input.form;
              let currentIterations = iterations;
              iterations++;
              let { at, type: lastType } = dom_default.private(input, "prev-iteration") || {};
              if (at === currentIterations - 1 && type !== lastType) {
                return;
              }
              dom_default.putPrivate(input, "prev-iteration", { at: currentIterations, type });
              this.debounce(input, e, type, () => {
                this.withinOwners(dispatcher, (view) => {
                  dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
                  if (!dom_default.isTextualInput(input)) {
                    this.setActiveElement(input);
                  }
                  js_default.exec("change", phxEvent, view, input, ["push", { _target: e.target.name, dispatcher }]);
                });
              });
            }, false);
          }
          this.on("reset", (e) => {
            let form = e.target;
            dom_default.resetForm(form, this.binding(PHX_FEEDBACK_FOR));
            let input = Array.from(form.elements).find((el) => el.type === "reset");
            window.requestAnimationFrame(() => {
              input.dispatchEvent(new Event("input", { bubbles: true, cancelable: false }));
            });
          });
        }
        debounce(el, event, eventType, callback) {
          if (eventType === "blur" || eventType === "focusout") {
            return callback();
          }
          let phxDebounce = this.binding(PHX_DEBOUNCE);
          let phxThrottle = this.binding(PHX_THROTTLE);
          let defaultDebounce = this.defaults.debounce.toString();
          let defaultThrottle = this.defaults.throttle.toString();
          this.withinOwners(el, (view) => {
            let asyncFilter = () => !view.isDestroyed() && document.body.contains(el);
            dom_default.debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, asyncFilter, () => {
              callback();
            });
          });
        }
        silenceEvents(callback) {
          this.silenced = true;
          callback();
          this.silenced = false;
        }
        on(event, callback) {
          window.addEventListener(event, (e) => {
            if (!this.silenced) {
              callback(e);
            }
          });
        }
      };
      TransitionSet = class {
        constructor() {
          this.transitions = /* @__PURE__ */ new Set();
          this.pendingOps = [];
        }
        reset() {
          this.transitions.forEach((timer) => {
            clearTimeout(timer);
            this.transitions.delete(timer);
          });
          this.flushPendingOps();
        }
        after(callback) {
          if (this.size() === 0) {
            callback();
          } else {
            this.pushPendingOp(callback);
          }
        }
        addTransition(time, onStart, onDone) {
          onStart();
          let timer = setTimeout(() => {
            this.transitions.delete(timer);
            onDone();
            this.flushPendingOps();
          }, time);
          this.transitions.add(timer);
        }
        pushPendingOp(op) {
          this.pendingOps.push(op);
        }
        size() {
          return this.transitions.size;
        }
        flushPendingOps() {
          if (this.size() > 0) {
            return;
          }
          let op = this.pendingOps.shift();
          if (op) {
            op();
            this.flushPendingOps();
          }
        }
      };
    }
  });

  // js/app.js
  document.addEventListener("DOMContentLoaded", function() {
    if (window.Phoenix) {
      initLiveSocket();
    } else {
      console.log("Phoenix not loaded yet, using fallback");
      Promise.resolve().then(() => __toESM(require_())).catch((e) => console.warn("Could not load CSS:", e));
      Promise.resolve().then(() => __toESM(require_phoenix_html())).catch((e) => console.warn("Could not load phoenix_html:", e));
      Promise.all([
        Promise.resolve().then(() => (init_phoenix(), phoenix_exports)),
        Promise.resolve().then(() => (init_phoenix_live_view_esm(), phoenix_live_view_esm_exports))
      ]).then(([phoenix, liveView]) => {
        window.Phoenix = phoenix;
        window.Phoenix.LiveSocket = liveView.LiveSocket;
        initLiveSocket();
      }).catch((e) => {
        console.error("Could not initialize Phoenix libraries:", e);
      });
    }
  });
  function initLiveSocket() {
    const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const Hooks2 = {};
    const Socket2 = window.Phoenix.Socket;
    const LiveSocket2 = window.Phoenix.LiveSocket;
    if (Socket2 && LiveSocket2) {
      const liveSocket = new LiveSocket2("/live", Socket2, { params: { _csrf_token: csrfToken }, hooks: Hooks2 });
      liveSocket.connect();
      window.liveSocket = liveSocket;
    } else {
      console.error("Phoenix libraries not available");
    }
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vZGVwcy9waG9lbml4X2h0bWwvcHJpdi9zdGF0aWMvcGhvZW5peF9odG1sLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC91dGlscy5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC9wdXNoLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC90aW1lci5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvY2hhbm5lbC5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvYWpheC5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvbG9uZ3BvbGwuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L3ByZXNlbmNlLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC9zZXJpYWxpemVyLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC9zb2NrZXQuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvanMvcGhvZW5peF9saXZlX3ZpZXcvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL2pzL3Bob2VuaXhfbGl2ZV92aWV3L2VudHJ5X3VwbG9hZGVyLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL2pzL3Bob2VuaXhfbGl2ZV92aWV3L3V0aWxzLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL2pzL3Bob2VuaXhfbGl2ZV92aWV3L2Jyb3dzZXIuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvanMvcGhvZW5peF9saXZlX3ZpZXcvZG9tLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL2pzL3Bob2VuaXhfbGl2ZV92aWV3L3VwbG9hZF9lbnRyeS5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXhfbGl2ZV92aWV3L2Fzc2V0cy9qcy9waG9lbml4X2xpdmVfdmlldy9saXZlX3VwbG9hZGVyLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL2pzL3Bob2VuaXhfbGl2ZV92aWV3L2FyaWEuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvanMvcGhvZW5peF9saXZlX3ZpZXcvaG9va3MuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvanMvcGhvZW5peF9saXZlX3ZpZXcvZG9tX3Bvc3RfbW9ycGhfcmVzdG9yZXIuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvbm9kZV9tb2R1bGVzL21vcnBoZG9tL2Rpc3QvbW9ycGhkb20tZXNtLmpzIiwgIi4uLy4uLy4uL2RlcHMvcGhvZW5peF9saXZlX3ZpZXcvYXNzZXRzL2pzL3Bob2VuaXhfbGl2ZV92aWV3L2RvbV9wYXRjaC5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXhfbGl2ZV92aWV3L2Fzc2V0cy9qcy9waG9lbml4X2xpdmVfdmlldy9yZW5kZXJlZC5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXhfbGl2ZV92aWV3L2Fzc2V0cy9qcy9waG9lbml4X2xpdmVfdmlldy92aWV3X2hvb2suanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvanMvcGhvZW5peF9saXZlX3ZpZXcvanMuanMiLCAiLi4vLi4vLi4vZGVwcy9waG9lbml4X2xpdmVfdmlldy9hc3NldHMvanMvcGhvZW5peF9saXZlX3ZpZXcvdmlldy5qcyIsICIuLi8uLi8uLi9kZXBzL3Bob2VuaXhfbGl2ZV92aWV3L2Fzc2V0cy9qcy9waG9lbml4X2xpdmVfdmlldy9saXZlX3NvY2tldC5qcyIsICIuLi8uLi8uLi9hc3NldHMvanMvYXBwLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgUG9seWZpbGxFdmVudCA9IGV2ZW50Q29uc3RydWN0b3IoKTtcblxuICBmdW5jdGlvbiBldmVudENvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG4gICAgLy8gSUU8PTkgU3VwcG9ydFxuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7YnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZH07XG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcbiAgICByZXR1cm4gQ3VzdG9tRXZlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEhpZGRlbklucHV0KG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZWxlbWVudCwgdGFyZ2V0TW9kaWZpZXJLZXkpIHtcbiAgICB2YXIgdG8gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdG9cIiksXG4gICAgICAgIG1ldGhvZCA9IGJ1aWxkSGlkZGVuSW5wdXQoXCJfbWV0aG9kXCIsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZXRob2RcIikpLFxuICAgICAgICBjc3JmID0gYnVpbGRIaWRkZW5JbnB1dChcIl9jc3JmX3Rva2VuXCIsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jc3JmXCIpKSxcbiAgICAgICAgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICAgICAgICBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gICAgICAgIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpO1xuXG4gICAgZm9ybS5tZXRob2QgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1ldGhvZFwiKSA9PT0gXCJnZXRcIikgPyBcImdldFwiIDogXCJwb3N0XCI7XG4gICAgZm9ybS5hY3Rpb24gPSB0bztcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGlmICh0YXJnZXQpIGZvcm0udGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGVsc2UgaWYgKHRhcmdldE1vZGlmaWVyS2V5KSBmb3JtLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNzcmYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWV0aG9kKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gSW5zZXJ0IGEgYnV0dG9uIGFuZCBjbGljayBpdCBpbnN0ZWFkIG9mIHVzaW5nIGBmb3JtLnN1Ym1pdGBcbiAgICAvLyBiZWNhdXNlIHRoZSBgc3VibWl0YCBmdW5jdGlvbiBkb2VzIG5vdCBlbWl0IGEgYHN1Ym1pdGAgZXZlbnQuXG4gICAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBzdWJtaXQuY2xpY2soKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuXG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUpIHtcbiAgICAgIHZhciBwaG9lbml4TGlua0V2ZW50ID0gbmV3IFBvbHlmaWxsRXZlbnQoJ3Bob2VuaXgubGluay5jbGljaycsIHtcbiAgICAgICAgXCJidWJibGVzXCI6IHRydWUsIFwiY2FuY2VsYWJsZVwiOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFlbGVtZW50LmRpc3BhdGNoRXZlbnQocGhvZW5peExpbmtFdmVudCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWV0aG9kXCIpKSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGVsZW1lbnQsIGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5KTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfSwgZmFsc2UpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwaG9lbml4LmxpbmsuY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtZXNzYWdlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb25maXJtXCIpO1xuICAgIGlmKG1lc3NhZ2UgJiYgIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCBmYWxzZSk7XG59KSgpO1xuIiwgIi8vIHdyYXBzIHZhbHVlIGluIGNsb3N1cmUgb3IgcmV0dXJucyBjbG9zdXJlXG5leHBvcnQgbGV0IGNsb3N1cmUgPSAodmFsdWUpID0+IHtcbiAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgIHJldHVybiB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIGxldCBjbG9zdXJlID0gZnVuY3Rpb24gKCl7IHJldHVybiB2YWx1ZSB9XG4gICAgcmV0dXJuIGNsb3N1cmVcbiAgfVxufVxuIiwgImV4cG9ydCBjb25zdCBnbG9iYWxTZWxmID0gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogbnVsbFxuZXhwb3J0IGNvbnN0IHBoeFdpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBudWxsXG5leHBvcnQgY29uc3QgZ2xvYmFsID0gZ2xvYmFsU2VsZiB8fCBwaHhXaW5kb3cgfHwgZ2xvYmFsXG5leHBvcnQgY29uc3QgREVGQVVMVF9WU04gPSBcIjIuMC4wXCJcbmV4cG9ydCBjb25zdCBTT0NLRVRfU1RBVEVTID0ge2Nvbm5lY3Rpbmc6IDAsIG9wZW46IDEsIGNsb3Npbmc6IDIsIGNsb3NlZDogM31cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDAwMFxuZXhwb3J0IGNvbnN0IFdTX0NMT1NFX05PUk1BTCA9IDEwMDBcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1NUQVRFUyA9IHtcbiAgY2xvc2VkOiBcImNsb3NlZFwiLFxuICBlcnJvcmVkOiBcImVycm9yZWRcIixcbiAgam9pbmVkOiBcImpvaW5lZFwiLFxuICBqb2luaW5nOiBcImpvaW5pbmdcIixcbiAgbGVhdmluZzogXCJsZWF2aW5nXCIsXG59XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9FVkVOVFMgPSB7XG4gIGNsb3NlOiBcInBoeF9jbG9zZVwiLFxuICBlcnJvcjogXCJwaHhfZXJyb3JcIixcbiAgam9pbjogXCJwaHhfam9pblwiLFxuICByZXBseTogXCJwaHhfcmVwbHlcIixcbiAgbGVhdmU6IFwicGh4X2xlYXZlXCJcbn1cblxuZXhwb3J0IGNvbnN0IFRSQU5TUE9SVFMgPSB7XG4gIGxvbmdwb2xsOiBcImxvbmdwb2xsXCIsXG4gIHdlYnNvY2tldDogXCJ3ZWJzb2NrZXRcIlxufVxuZXhwb3J0IGNvbnN0IFhIUl9TVEFURVMgPSB7XG4gIGNvbXBsZXRlOiA0XG59XG4iLCAiLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgUHVzaFxuICogQHBhcmFtIHtDaGFubmVsfSBjaGFubmVsIC0gVGhlIENoYW5uZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIFRoZSBldmVudCwgZm9yIGV4YW1wbGUgYFwicGh4X2pvaW5cImBcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkIC0gVGhlIHBheWxvYWQsIGZvciBleGFtcGxlIGB7dXNlcl9pZDogMTIzfWBcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IC0gVGhlIHB1c2ggdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVzaCB7XG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwsIGV2ZW50LCBwYXlsb2FkLCB0aW1lb3V0KXtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsXG4gICAgdGhpcy5ldmVudCA9IGV2ZW50XG4gICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZCB8fCBmdW5jdGlvbiAoKXsgcmV0dXJuIHt9IH1cbiAgICB0aGlzLnJlY2VpdmVkUmVzcCA9IG51bGxcbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgdGhpcy50aW1lb3V0VGltZXIgPSBudWxsXG4gICAgdGhpcy5yZWNIb29rcyA9IFtdXG4gICAgdGhpcy5zZW50ID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dFxuICAgKi9cbiAgcmVzZW5kKHRpbWVvdXQpe1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXRcbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLnNlbmQoKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBzZW5kKCl7XG4gICAgaWYodGhpcy5oYXNSZWNlaXZlZChcInRpbWVvdXRcIikpeyByZXR1cm4gfVxuICAgIHRoaXMuc3RhcnRUaW1lb3V0KClcbiAgICB0aGlzLnNlbnQgPSB0cnVlXG4gICAgdGhpcy5jaGFubmVsLnNvY2tldC5wdXNoKHtcbiAgICAgIHRvcGljOiB0aGlzLmNoYW5uZWwudG9waWMsXG4gICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCgpLFxuICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgIGpvaW5fcmVmOiB0aGlzLmNoYW5uZWwuam9pblJlZigpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHN0YXR1c1xuICAgKiBAcGFyYW0geyp9IGNhbGxiYWNrXG4gICAqL1xuICByZWNlaXZlKHN0YXR1cywgY2FsbGJhY2spe1xuICAgIGlmKHRoaXMuaGFzUmVjZWl2ZWQoc3RhdHVzKSl7XG4gICAgICBjYWxsYmFjayh0aGlzLnJlY2VpdmVkUmVzcC5yZXNwb25zZSlcbiAgICB9XG5cbiAgICB0aGlzLnJlY0hvb2tzLnB1c2goe3N0YXR1cywgY2FsbGJhY2t9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5jYW5jZWxSZWZFdmVudCgpXG4gICAgdGhpcy5yZWYgPSBudWxsXG4gICAgdGhpcy5yZWZFdmVudCA9IG51bGxcbiAgICB0aGlzLnJlY2VpdmVkUmVzcCA9IG51bGxcbiAgICB0aGlzLnNlbnQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBtYXRjaFJlY2VpdmUoe3N0YXR1cywgcmVzcG9uc2UsIF9yZWZ9KXtcbiAgICB0aGlzLnJlY0hvb2tzLmZpbHRlcihoID0+IGguc3RhdHVzID09PSBzdGF0dXMpXG4gICAgICAuZm9yRWFjaChoID0+IGguY2FsbGJhY2socmVzcG9uc2UpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYW5jZWxSZWZFdmVudCgpe1xuICAgIGlmKCF0aGlzLnJlZkV2ZW50KXsgcmV0dXJuIH1cbiAgICB0aGlzLmNoYW5uZWwub2ZmKHRoaXMucmVmRXZlbnQpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbmNlbFRpbWVvdXQoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0VGltZXIpXG4gICAgdGhpcy50aW1lb3V0VGltZXIgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXJ0VGltZW91dCgpe1xuICAgIGlmKHRoaXMudGltZW91dFRpbWVyKXsgdGhpcy5jYW5jZWxUaW1lb3V0KCkgfVxuICAgIHRoaXMucmVmID0gdGhpcy5jaGFubmVsLnNvY2tldC5tYWtlUmVmKClcbiAgICB0aGlzLnJlZkV2ZW50ID0gdGhpcy5jaGFubmVsLnJlcGx5RXZlbnROYW1lKHRoaXMucmVmKVxuXG4gICAgdGhpcy5jaGFubmVsLm9uKHRoaXMucmVmRXZlbnQsIHBheWxvYWQgPT4ge1xuICAgICAgdGhpcy5jYW5jZWxSZWZFdmVudCgpXG4gICAgICB0aGlzLmNhbmNlbFRpbWVvdXQoKVxuICAgICAgdGhpcy5yZWNlaXZlZFJlc3AgPSBwYXlsb2FkXG4gICAgICB0aGlzLm1hdGNoUmVjZWl2ZShwYXlsb2FkKVxuICAgIH0pXG5cbiAgICB0aGlzLnRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKFwidGltZW91dFwiLCB7fSlcbiAgICB9LCB0aGlzLnRpbWVvdXQpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhc1JlY2VpdmVkKHN0YXR1cyl7XG4gICAgcmV0dXJuIHRoaXMucmVjZWl2ZWRSZXNwICYmIHRoaXMucmVjZWl2ZWRSZXNwLnN0YXR1cyA9PT0gc3RhdHVzXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRyaWdnZXIoc3RhdHVzLCByZXNwb25zZSl7XG4gICAgdGhpcy5jaGFubmVsLnRyaWdnZXIodGhpcy5yZWZFdmVudCwge3N0YXR1cywgcmVzcG9uc2V9KVxuICB9XG59XG4iLCAiLyoqXG4gKlxuICogQ3JlYXRlcyBhIHRpbWVyIHRoYXQgYWNjZXB0cyBhIGB0aW1lckNhbGNgIGZ1bmN0aW9uIHRvIHBlcmZvcm1cbiAqIGNhbGN1bGF0ZWQgdGltZW91dCByZXRyaWVzLCBzdWNoIGFzIGV4cG9uZW50aWFsIGJhY2tvZmYuXG4gKlxuICogQGV4YW1wbGVcbiAqIGxldCByZWNvbm5lY3RUaW1lciA9IG5ldyBUaW1lcigoKSA9PiB0aGlzLmNvbm5lY3QoKSwgZnVuY3Rpb24odHJpZXMpe1xuICogICByZXR1cm4gWzEwMDAsIDUwMDAsIDEwMDAwXVt0cmllcyAtIDFdIHx8IDEwMDAwXG4gKiB9KVxuICogcmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgLy8gZmlyZXMgYWZ0ZXIgMTAwMFxuICogcmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgLy8gZmlyZXMgYWZ0ZXIgNTAwMFxuICogcmVjb25uZWN0VGltZXIucmVzZXQoKVxuICogcmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgLy8gZmlyZXMgYWZ0ZXIgMTAwMFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0aW1lckNhbGNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgdGltZXJDYWxjKXtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLnRpbWVyQ2FsYyA9IHRpbWVyQ2FsY1xuICAgIHRoaXMudGltZXIgPSBudWxsXG4gICAgdGhpcy50cmllcyA9IDBcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy50cmllcyA9IDBcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGFueSBwcmV2aW91cyBzY2hlZHVsZVRpbWVvdXQgYW5kIHNjaGVkdWxlcyBjYWxsYmFja1xuICAgKi9cbiAgc2NoZWR1bGVUaW1lb3V0KCl7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cbiAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWVzID0gdGhpcy50cmllcyArIDFcbiAgICAgIHRoaXMuY2FsbGJhY2soKVxuICAgIH0sIHRoaXMudGltZXJDYWxjKHRoaXMudHJpZXMgKyAxKSlcbiAgfVxufVxuIiwgImltcG9ydCB7Y2xvc3VyZX0gZnJvbSBcIi4vdXRpbHNcIlxuaW1wb3J0IHtcbiAgQ0hBTk5FTF9FVkVOVFMsXG4gIENIQU5ORUxfU1RBVEVTLFxufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQgUHVzaCBmcm9tIFwiLi9wdXNoXCJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpY1xuICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGFyYW1zXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWwge1xuICBjb25zdHJ1Y3Rvcih0b3BpYywgcGFyYW1zLCBzb2NrZXQpe1xuICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5jbG9zZWRcbiAgICB0aGlzLnRvcGljID0gdG9waWNcbiAgICB0aGlzLnBhcmFtcyA9IGNsb3N1cmUocGFyYW1zIHx8IHt9KVxuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0XG4gICAgdGhpcy5iaW5kaW5ncyA9IFtdXG4gICAgdGhpcy5iaW5kaW5nUmVmID0gMFxuICAgIHRoaXMudGltZW91dCA9IHRoaXMuc29ja2V0LnRpbWVvdXRcbiAgICB0aGlzLmpvaW5lZE9uY2UgPSBmYWxzZVxuICAgIHRoaXMuam9pblB1c2ggPSBuZXcgUHVzaCh0aGlzLCBDSEFOTkVMX0VWRU5UUy5qb2luLCB0aGlzLnBhcmFtcywgdGhpcy50aW1lb3V0KVxuICAgIHRoaXMucHVzaEJ1ZmZlciA9IFtdXG4gICAgdGhpcy5zdGF0ZUNoYW5nZVJlZnMgPSBbXVxuXG4gICAgdGhpcy5yZWpvaW5UaW1lciA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICBpZih0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpKXsgdGhpcy5yZWpvaW4oKSB9XG4gICAgfSwgdGhpcy5zb2NrZXQucmVqb2luQWZ0ZXJNcylcbiAgICB0aGlzLnN0YXRlQ2hhbmdlUmVmcy5wdXNoKHRoaXMuc29ja2V0Lm9uRXJyb3IoKCkgPT4gdGhpcy5yZWpvaW5UaW1lci5yZXNldCgpKSlcbiAgICB0aGlzLnN0YXRlQ2hhbmdlUmVmcy5wdXNoKHRoaXMuc29ja2V0Lm9uT3BlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlam9pblRpbWVyLnJlc2V0KClcbiAgICAgIGlmKHRoaXMuaXNFcnJvcmVkKCkpeyB0aGlzLnJlam9pbigpIH1cbiAgICB9KVxuICAgIClcbiAgICB0aGlzLmpvaW5QdXNoLnJlY2VpdmUoXCJva1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMuam9pbmVkXG4gICAgICB0aGlzLnJlam9pblRpbWVyLnJlc2V0KClcbiAgICAgIHRoaXMucHVzaEJ1ZmZlci5mb3JFYWNoKHB1c2hFdmVudCA9PiBwdXNoRXZlbnQuc2VuZCgpKVxuICAgICAgdGhpcy5wdXNoQnVmZmVyID0gW11cbiAgICB9KVxuICAgIHRoaXMuam9pblB1c2gucmVjZWl2ZShcImVycm9yXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkXG4gICAgICBpZih0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpKXsgdGhpcy5yZWpvaW5UaW1lci5zY2hlZHVsZVRpbWVvdXQoKSB9XG4gICAgfSlcbiAgICB0aGlzLm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgdGhpcy5yZWpvaW5UaW1lci5yZXNldCgpXG4gICAgICBpZih0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSkgdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLCBgY2xvc2UgJHt0aGlzLnRvcGljfSAke3RoaXMuam9pblJlZigpfWApXG4gICAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMuY2xvc2VkXG4gICAgICB0aGlzLnNvY2tldC5yZW1vdmUodGhpcylcbiAgICB9KVxuICAgIHRoaXMub25FcnJvcihyZWFzb24gPT4ge1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgYGVycm9yICR7dGhpcy50b3BpY31gLCByZWFzb24pXG4gICAgICBpZih0aGlzLmlzSm9pbmluZygpKXsgdGhpcy5qb2luUHVzaC5yZXNldCgpIH1cbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkXG4gICAgICBpZih0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpKXsgdGhpcy5yZWpvaW5UaW1lci5zY2hlZHVsZVRpbWVvdXQoKSB9XG4gICAgfSlcbiAgICB0aGlzLmpvaW5QdXNoLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+IHtcbiAgICAgIGlmKHRoaXMuc29ja2V0Lmhhc0xvZ2dlcigpKSB0aGlzLnNvY2tldC5sb2coXCJjaGFubmVsXCIsIGB0aW1lb3V0ICR7dGhpcy50b3BpY30gKCR7dGhpcy5qb2luUmVmKCl9KWAsIHRoaXMuam9pblB1c2gudGltZW91dClcbiAgICAgIGxldCBsZWF2ZVB1c2ggPSBuZXcgUHVzaCh0aGlzLCBDSEFOTkVMX0VWRU5UUy5sZWF2ZSwgY2xvc3VyZSh7fSksIHRoaXMudGltZW91dClcbiAgICAgIGxlYXZlUHVzaC5zZW5kKClcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkXG4gICAgICB0aGlzLmpvaW5QdXNoLnJlc2V0KClcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpIH1cbiAgICB9KVxuICAgIHRoaXMub24oQ0hBTk5FTF9FVkVOVFMucmVwbHksIChwYXlsb2FkLCByZWYpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcih0aGlzLnJlcGx5RXZlbnROYW1lKHJlZiksIHBheWxvYWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBKb2luIHRoZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gdGltZW91dFxuICAgKiBAcmV0dXJucyB7UHVzaH1cbiAgICovXG4gIGpvaW4odGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgaWYodGhpcy5qb2luZWRPbmNlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInRyaWVkIHRvIGpvaW4gbXVsdGlwbGUgdGltZXMuICdqb2luJyBjYW4gb25seSBiZSBjYWxsZWQgYSBzaW5nbGUgdGltZSBwZXIgY2hhbm5lbCBpbnN0YW5jZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgICB0aGlzLmpvaW5lZE9uY2UgPSB0cnVlXG4gICAgICB0aGlzLnJlam9pbigpXG4gICAgICByZXR1cm4gdGhpcy5qb2luUHVzaFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb29rIGludG8gY2hhbm5lbCBjbG9zZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25DbG9zZShjYWxsYmFjayl7XG4gICAgdGhpcy5vbihDSEFOTkVMX0VWRU5UUy5jbG9zZSwgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogSG9vayBpbnRvIGNoYW5uZWwgZXJyb3JzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihDSEFOTkVMX0VWRU5UUy5lcnJvciwgcmVhc29uID0+IGNhbGxiYWNrKHJlYXNvbikpXG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlcyBvbiBjaGFubmVsIGV2ZW50c1xuICAgKlxuICAgKiBTdWJzY3JpcHRpb24gcmV0dXJucyBhIHJlZiBjb3VudGVyLCB3aGljaCBjYW4gYmUgdXNlZCBsYXRlciB0b1xuICAgKiB1bnN1YnNjcmliZSB0aGUgZXhhY3QgZXZlbnQgbGlzdGVuZXJcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgcmVmMSA9IGNoYW5uZWwub24oXCJldmVudFwiLCBkb19zdHVmZilcbiAgICogY29uc3QgcmVmMiA9IGNoYW5uZWwub24oXCJldmVudFwiLCBkb19vdGhlcl9zdHVmZilcbiAgICogY2hhbm5lbC5vZmYoXCJldmVudFwiLCByZWYxKVxuICAgKiAvLyBTaW5jZSB1bnN1YnNjcmlwdGlvbiwgZG9fc3R1ZmYgd29uJ3QgZmlyZSxcbiAgICogLy8gd2hpbGUgZG9fb3RoZXJfc3R1ZmYgd2lsbCBrZWVwIGZpcmluZyBvbiB0aGUgXCJldmVudFwiXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7aW50ZWdlcn0gcmVmXG4gICAqL1xuICBvbihldmVudCwgY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLmJpbmRpbmdSZWYrK1xuICAgIHRoaXMuYmluZGluZ3MucHVzaCh7ZXZlbnQsIHJlZiwgY2FsbGJhY2t9KVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgb2ZmIG9mIGNoYW5uZWwgZXZlbnRzXG4gICAqXG4gICAqIFVzZSB0aGUgcmVmIHJldHVybmVkIGZyb20gYSBjaGFubmVsLm9uKCkgdG8gdW5zdWJzY3JpYmUgb25lXG4gICAqIGhhbmRsZXIsIG9yIHBhc3Mgbm90aGluZyBmb3IgdGhlIHJlZiB0byB1bnN1YnNjcmliZSBhbGxcbiAgICogaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gVW5zdWJzY3JpYmUgdGhlIGRvX3N0dWZmIGhhbmRsZXJcbiAgICogY29uc3QgcmVmMSA9IGNoYW5uZWwub24oXCJldmVudFwiLCBkb19zdHVmZilcbiAgICogY2hhbm5lbC5vZmYoXCJldmVudFwiLCByZWYxKVxuICAgKlxuICAgKiAvLyBVbnN1YnNjcmliZSBhbGwgaGFuZGxlcnMgZnJvbSBldmVudFxuICAgKiBjaGFubmVsLm9mZihcImV2ZW50XCIpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge2ludGVnZXJ9IHJlZlxuICAgKi9cbiAgb2ZmKGV2ZW50LCByZWYpe1xuICAgIHRoaXMuYmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmZpbHRlcigoYmluZCkgPT4ge1xuICAgICAgcmV0dXJuICEoYmluZC5ldmVudCA9PT0gZXZlbnQgJiYgKHR5cGVvZiByZWYgPT09IFwidW5kZWZpbmVkXCIgfHwgcmVmID09PSBiaW5kLnJlZikpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FuUHVzaCgpeyByZXR1cm4gdGhpcy5zb2NrZXQuaXNDb25uZWN0ZWQoKSAmJiB0aGlzLmlzSm9pbmVkKCkgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIG1lc3NhZ2UgYGV2ZW50YCB0byBwaG9lbml4IHdpdGggdGhlIHBheWxvYWQgYHBheWxvYWRgLlxuICAgKiBQaG9lbml4IHJlY2VpdmVzIHRoaXMgaW4gdGhlIGBoYW5kbGVfaW4oZXZlbnQsIHBheWxvYWQsIHNvY2tldClgXG4gICAqIGZ1bmN0aW9uLiBpZiBwaG9lbml4IHJlcGxpZXMgb3IgaXQgdGltZXMgb3V0IChkZWZhdWx0IDEwMDAwbXMpLFxuICAgKiB0aGVuIG9wdGlvbmFsbHkgdGhlIHJlcGx5IGNhbiBiZSByZWNlaXZlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY2hhbm5lbC5wdXNoKFwiZXZlbnRcIilcbiAgICogICAucmVjZWl2ZShcIm9rXCIsIHBheWxvYWQgPT4gY29uc29sZS5sb2coXCJwaG9lbml4IHJlcGxpZWQ6XCIsIHBheWxvYWQpKVxuICAgKiAgIC5yZWNlaXZlKFwiZXJyb3JcIiwgZXJyID0+IGNvbnNvbGUubG9nKFwicGhvZW5peCBlcnJvcmVkXCIsIGVycikpXG4gICAqICAgLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+IGNvbnNvbGUubG9nKFwidGltZWQgb3V0IHB1c2hpbmdcIikpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVvdXRdXG4gICAqIEByZXR1cm5zIHtQdXNofVxuICAgKi9cbiAgcHVzaChldmVudCwgcGF5bG9hZCwgdGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgcGF5bG9hZCA9IHBheWxvYWQgfHwge31cbiAgICBpZighdGhpcy5qb2luZWRPbmNlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdHJpZWQgdG8gcHVzaCAnJHtldmVudH0nIHRvICcke3RoaXMudG9waWN9JyBiZWZvcmUgam9pbmluZy4gVXNlIGNoYW5uZWwuam9pbigpIGJlZm9yZSBwdXNoaW5nIGV2ZW50c2ApXG4gICAgfVxuICAgIGxldCBwdXNoRXZlbnQgPSBuZXcgUHVzaCh0aGlzLCBldmVudCwgZnVuY3Rpb24gKCl7IHJldHVybiBwYXlsb2FkIH0sIHRpbWVvdXQpXG4gICAgaWYodGhpcy5jYW5QdXNoKCkpe1xuICAgICAgcHVzaEV2ZW50LnNlbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoRXZlbnQuc3RhcnRUaW1lb3V0KClcbiAgICAgIHRoaXMucHVzaEJ1ZmZlci5wdXNoKHB1c2hFdmVudClcbiAgICB9XG5cbiAgICByZXR1cm4gcHVzaEV2ZW50XG4gIH1cblxuICAvKiogTGVhdmVzIHRoZSBjaGFubmVsXG4gICAqXG4gICAqIFVuc3Vic2NyaWJlcyBmcm9tIHNlcnZlciBldmVudHMsIGFuZFxuICAgKiBpbnN0cnVjdHMgY2hhbm5lbCB0byB0ZXJtaW5hdGUgb24gc2VydmVyXG4gICAqXG4gICAqIFRyaWdnZXJzIG9uQ2xvc2UoKSBob29rc1xuICAgKlxuICAgKiBUbyByZWNlaXZlIGxlYXZlIGFja25vd2xlZGdlbWVudHMsIHVzZSB0aGUgYHJlY2VpdmVgXG4gICAqIGhvb2sgdG8gYmluZCB0byB0aGUgc2VydmVyIGFjaywgaWU6XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNoYW5uZWwubGVhdmUoKS5yZWNlaXZlKFwib2tcIiwgKCkgPT4gYWxlcnQoXCJsZWZ0IVwiKSApXG4gICAqXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gdGltZW91dFxuICAgKiBAcmV0dXJucyB7UHVzaH1cbiAgICovXG4gIGxlYXZlKHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQpe1xuICAgIHRoaXMucmVqb2luVGltZXIucmVzZXQoKVxuICAgIHRoaXMuam9pblB1c2guY2FuY2VsVGltZW91dCgpXG5cbiAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMubGVhdmluZ1xuICAgIGxldCBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgYGxlYXZlICR7dGhpcy50b3BpY31gKVxuICAgICAgdGhpcy50cmlnZ2VyKENIQU5ORUxfRVZFTlRTLmNsb3NlLCBcImxlYXZlXCIpXG4gICAgfVxuICAgIGxldCBsZWF2ZVB1c2ggPSBuZXcgUHVzaCh0aGlzLCBDSEFOTkVMX0VWRU5UUy5sZWF2ZSwgY2xvc3VyZSh7fSksIHRpbWVvdXQpXG4gICAgbGVhdmVQdXNoLnJlY2VpdmUoXCJva1wiLCAoKSA9PiBvbkNsb3NlKCkpXG4gICAgICAucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4gb25DbG9zZSgpKVxuICAgIGxlYXZlUHVzaC5zZW5kKClcbiAgICBpZighdGhpcy5jYW5QdXNoKCkpeyBsZWF2ZVB1c2gudHJpZ2dlcihcIm9rXCIsIHt9KSB9XG5cbiAgICByZXR1cm4gbGVhdmVQdXNoXG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGFibGUgbWVzc2FnZSBob29rXG4gICAqXG4gICAqIFJlY2VpdmVzIGFsbCBldmVudHMgZm9yIHNwZWNpYWxpemVkIG1lc3NhZ2UgaGFuZGxpbmdcbiAgICogYmVmb3JlIGRpc3BhdGNoaW5nIHRvIHRoZSBjaGFubmVsIGNhbGxiYWNrcy5cbiAgICpcbiAgICogTXVzdCByZXR1cm4gdGhlIHBheWxvYWQsIG1vZGlmaWVkIG9yIHVubW9kaWZpZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gcmVmXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBvbk1lc3NhZ2UoX2V2ZW50LCBwYXlsb2FkLCBfcmVmKXsgcmV0dXJuIHBheWxvYWQgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNNZW1iZXIodG9waWMsIGV2ZW50LCBwYXlsb2FkLCBqb2luUmVmKXtcbiAgICBpZih0aGlzLnRvcGljICE9PSB0b3BpYyl7IHJldHVybiBmYWxzZSB9XG5cbiAgICBpZihqb2luUmVmICYmIGpvaW5SZWYgIT09IHRoaXMuam9pblJlZigpKXtcbiAgICAgIGlmKHRoaXMuc29ja2V0Lmhhc0xvZ2dlcigpKSB0aGlzLnNvY2tldC5sb2coXCJjaGFubmVsXCIsIFwiZHJvcHBpbmcgb3V0ZGF0ZWQgbWVzc2FnZVwiLCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCBqb2luUmVmfSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgam9pblJlZigpeyByZXR1cm4gdGhpcy5qb2luUHVzaC5yZWYgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVqb2luKHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQpe1xuICAgIGlmKHRoaXMuaXNMZWF2aW5nKCkpeyByZXR1cm4gfVxuICAgIHRoaXMuc29ja2V0LmxlYXZlT3BlblRvcGljKHRoaXMudG9waWMpXG4gICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmpvaW5pbmdcbiAgICB0aGlzLmpvaW5QdXNoLnJlc2VuZCh0aW1lb3V0KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0cmlnZ2VyKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5SZWYpe1xuICAgIGxldCBoYW5kbGVkUGF5bG9hZCA9IHRoaXMub25NZXNzYWdlKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5SZWYpXG4gICAgaWYocGF5bG9hZCAmJiAhaGFuZGxlZFBheWxvYWQpeyB0aHJvdyBuZXcgRXJyb3IoXCJjaGFubmVsIG9uTWVzc2FnZSBjYWxsYmFja3MgbXVzdCByZXR1cm4gdGhlIHBheWxvYWQsIG1vZGlmaWVkIG9yIHVubW9kaWZpZWRcIikgfVxuXG4gICAgbGV0IGV2ZW50QmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmZpbHRlcihiaW5kID0+IGJpbmQuZXZlbnQgPT09IGV2ZW50KVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGV2ZW50QmluZGluZ3MubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGJpbmQgPSBldmVudEJpbmRpbmdzW2ldXG4gICAgICBiaW5kLmNhbGxiYWNrKGhhbmRsZWRQYXlsb2FkLCByZWYsIGpvaW5SZWYgfHwgdGhpcy5qb2luUmVmKCkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZXBseUV2ZW50TmFtZShyZWYpeyByZXR1cm4gYGNoYW5fcmVwbHlfJHtyZWZ9YCB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0Nsb3NlZCgpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuY2xvc2VkIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzRXJyb3JlZCgpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuZXJyb3JlZCB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0pvaW5lZCgpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuam9pbmVkIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzSm9pbmluZygpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMuam9pbmluZyB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0xlYXZpbmcoKXsgcmV0dXJuIHRoaXMuc3RhdGUgPT09IENIQU5ORUxfU1RBVEVTLmxlYXZpbmcgfVxufVxuIiwgImltcG9ydCB7XG4gIGdsb2JhbCxcbiAgWEhSX1NUQVRFU1xufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4IHtcblxuICBzdGF0aWMgcmVxdWVzdChtZXRob2QsIGVuZFBvaW50LCBhY2NlcHQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spe1xuICAgIGlmKGdsb2JhbC5YRG9tYWluUmVxdWVzdCl7XG4gICAgICBsZXQgcmVxID0gbmV3IGdsb2JhbC5YRG9tYWluUmVxdWVzdCgpIC8vIElFOCwgSUU5XG4gICAgICByZXR1cm4gdGhpcy54ZG9tYWluUmVxdWVzdChyZXEsIG1ldGhvZCwgZW5kUG9pbnQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXEgPSBuZXcgZ2xvYmFsLlhNTEh0dHBSZXF1ZXN0KCkgLy8gSUU3KywgRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgICByZXR1cm4gdGhpcy54aHJSZXF1ZXN0KHJlcSwgbWV0aG9kLCBlbmRQb2ludCwgYWNjZXB0LCBib2R5LCB0aW1lb3V0LCBvbnRpbWVvdXQsIGNhbGxiYWNrKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB4ZG9tYWluUmVxdWVzdChyZXEsIG1ldGhvZCwgZW5kUG9pbnQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spe1xuICAgIHJlcS50aW1lb3V0ID0gdGltZW91dFxuICAgIHJlcS5vcGVuKG1ldGhvZCwgZW5kUG9pbnQpXG4gICAgcmVxLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IHRoaXMucGFyc2VKU09OKHJlcS5yZXNwb25zZVRleHQpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXNwb25zZSlcbiAgICB9XG4gICAgaWYob250aW1lb3V0KXsgcmVxLm9udGltZW91dCA9IG9udGltZW91dCB9XG5cbiAgICAvLyBXb3JrIGFyb3VuZCBidWcgaW4gSUU5IHRoYXQgcmVxdWlyZXMgYW4gYXR0YWNoZWQgb25wcm9ncmVzcyBoYW5kbGVyXG4gICAgcmVxLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7IH1cblxuICAgIHJlcS5zZW5kKGJvZHkpXG4gICAgcmV0dXJuIHJlcVxuICB9XG5cbiAgc3RhdGljIHhoclJlcXVlc3QocmVxLCBtZXRob2QsIGVuZFBvaW50LCBhY2NlcHQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spe1xuICAgIHJlcS5vcGVuKG1ldGhvZCwgZW5kUG9pbnQsIHRydWUpXG4gICAgcmVxLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgYWNjZXB0KVxuICAgIHJlcS5vbmVycm9yID0gKCkgPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2sobnVsbClcbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYocmVxLnJlYWR5U3RhdGUgPT09IFhIUl9TVEFURVMuY29tcGxldGUgJiYgY2FsbGJhY2spe1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnBhcnNlSlNPTihyZXEucmVzcG9uc2VUZXh0KVxuICAgICAgICBjYWxsYmFjayhyZXNwb25zZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYob250aW1lb3V0KXsgcmVxLm9udGltZW91dCA9IG9udGltZW91dCB9XG5cbiAgICByZXEuc2VuZChib2R5KVxuICAgIHJldHVybiByZXFcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUpTT04ocmVzcCl7XG4gICAgaWYoIXJlc3AgfHwgcmVzcCA9PT0gXCJcIil7IHJldHVybiBudWxsIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwKVxuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhcImZhaWxlZCB0byBwYXJzZSBKU09OIHJlc3BvbnNlXCIsIHJlc3ApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZXJpYWxpemUob2JqLCBwYXJlbnRLZXkpe1xuICAgIGxldCBxdWVyeVN0ciA9IFtdXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcbiAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKXsgY29udGludWUgfVxuICAgICAgbGV0IHBhcmFtS2V5ID0gcGFyZW50S2V5ID8gYCR7cGFyZW50S2V5fVske2tleX1dYCA6IGtleVxuICAgICAgbGV0IHBhcmFtVmFsID0gb2JqW2tleV1cbiAgICAgIGlmKHR5cGVvZiBwYXJhbVZhbCA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgIHF1ZXJ5U3RyLnB1c2godGhpcy5zZXJpYWxpemUocGFyYW1WYWwsIHBhcmFtS2V5KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5U3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtS2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtVmFsKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5U3RyLmpvaW4oXCImXCIpXG4gIH1cblxuICBzdGF0aWMgYXBwZW5kUGFyYW1zKHVybCwgcGFyYW1zKXtcbiAgICBpZihPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA9PT0gMCl7IHJldHVybiB1cmwgfVxuXG4gICAgbGV0IHByZWZpeCA9IHVybC5tYXRjaCgvXFw/LykgPyBcIiZcIiA6IFwiP1wiXG4gICAgcmV0dXJuIGAke3VybH0ke3ByZWZpeH0ke3RoaXMuc2VyaWFsaXplKHBhcmFtcyl9YFxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgU09DS0VUX1NUQVRFUyxcbiAgVFJBTlNQT1JUU1xufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQgQWpheCBmcm9tIFwiLi9hamF4XCJcblxubGV0IGFycmF5QnVmZmVyVG9CYXNlNjQgPSAoYnVmZmVyKSA9PiB7XG4gIGxldCBiaW5hcnkgPSBcIlwiXG4gIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcbiAgbGV0IGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGhcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXsgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pIH1cbiAgcmV0dXJuIGJ0b2EoYmluYXJ5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb25nUG9sbCB7XG5cbiAgY29uc3RydWN0b3IoZW5kUG9pbnQpe1xuICAgIHRoaXMuZW5kUG9pbnQgPSBudWxsXG4gICAgdGhpcy50b2tlbiA9IG51bGxcbiAgICB0aGlzLnNraXBIZWFydGJlYXQgPSB0cnVlXG4gICAgdGhpcy5yZXFzID0gbmV3IFNldCgpXG4gICAgdGhpcy5hd2FpdGluZ0JhdGNoQWNrID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRCYXRjaCA9IG51bGxcbiAgICB0aGlzLmN1cnJlbnRCYXRjaFRpbWVyID0gbnVsbFxuICAgIHRoaXMuYmF0Y2hCdWZmZXIgPSBbXVxuICAgIHRoaXMub25vcGVuID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgIHRoaXMub25lcnJvciA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICB0aGlzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICB0aGlzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgdGhpcy5wb2xsRW5kcG9pbnQgPSB0aGlzLm5vcm1hbGl6ZUVuZHBvaW50KGVuZFBvaW50KVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZ1xuICAgIC8vIHdlIG11c3Qgd2FpdCBmb3IgdGhlIGNhbGxlciB0byBmaW5pc2ggc2V0dGluZyB1cCBvdXIgY2FsbGJhY2tzIGFuZCB0aW1lb3V0IHByb3BlcnRpZXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucG9sbCgpLCAwKVxuICB9XG5cbiAgbm9ybWFsaXplRW5kcG9pbnQoZW5kUG9pbnQpe1xuICAgIHJldHVybiAoZW5kUG9pbnRcbiAgICAgIC5yZXBsYWNlKFwid3M6Ly9cIiwgXCJodHRwOi8vXCIpXG4gICAgICAucmVwbGFjZShcIndzczovL1wiLCBcImh0dHBzOi8vXCIpXG4gICAgICAucmVwbGFjZShuZXcgUmVnRXhwKFwiKC4qKVxcL1wiICsgVFJBTlNQT1JUUy53ZWJzb2NrZXQpLCBcIiQxL1wiICsgVFJBTlNQT1JUUy5sb25ncG9sbCkpXG4gIH1cblxuICBlbmRwb2ludFVSTCgpe1xuICAgIHJldHVybiBBamF4LmFwcGVuZFBhcmFtcyh0aGlzLnBvbGxFbmRwb2ludCwge3Rva2VuOiB0aGlzLnRva2VufSlcbiAgfVxuXG4gIGNsb3NlQW5kUmV0cnkoY29kZSwgcmVhc29uLCB3YXNDbGVhbil7XG4gICAgdGhpcy5jbG9zZShjb2RlLCByZWFzb24sIHdhc0NsZWFuKVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZ1xuICB9XG5cbiAgb250aW1lb3V0KCl7XG4gICAgdGhpcy5vbmVycm9yKFwidGltZW91dFwiKVxuICAgIHRoaXMuY2xvc2VBbmRSZXRyeSgxMDA1LCBcInRpbWVvdXRcIiwgZmFsc2UpXG4gIH1cblxuICBpc0FjdGl2ZSgpeyByZXR1cm4gdGhpcy5yZWFkeVN0YXRlID09PSBTT0NLRVRfU1RBVEVTLm9wZW4gfHwgdGhpcy5yZWFkeVN0YXRlID09PSBTT0NLRVRfU1RBVEVTLmNvbm5lY3RpbmcgfVxuXG4gIHBvbGwoKXtcbiAgICB0aGlzLmFqYXgoXCJHRVRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIsIG51bGwsICgpID0+IHRoaXMub250aW1lb3V0KCksIHJlc3AgPT4ge1xuICAgICAgaWYocmVzcCl7XG4gICAgICAgIHZhciB7c3RhdHVzLCB0b2tlbiwgbWVzc2FnZXN9ID0gcmVzcFxuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDBcbiAgICAgIH1cblxuICAgICAgc3dpdGNoKHN0YXR1cyl7XG4gICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcbiAgICAgICAgICAgIC8vIFRhc2tzIGFyZSB3aGF0IHRoaW5ncyBsaWtlIGV2ZW50IGhhbmRsZXJzLCBzZXRUaW1lb3V0IGNhbGxiYWNrcyxcbiAgICAgICAgICAgIC8vIHByb21pc2UgcmVzb2x2ZXMgYW5kIG1vcmUgYXJlIHJ1biB3aXRoaW4uXG4gICAgICAgICAgICAvLyBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZXJlIGFyZSB0d28gZGlmZmVyZW50IGtpbmRzIG9mIHRhc2tzLFxuICAgICAgICAgICAgLy8gbWljcm90YXNrcyBhbmQgbWFjcm90YXNrcy5cbiAgICAgICAgICAgIC8vIE1pY3JvdGFza3MgYXJlIG1haW5seSB1c2VkIGZvciBQcm9taXNlcywgd2hpbGUgbWFjcm90YXNrcyBhcmVcbiAgICAgICAgICAgIC8vIHVzZWQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgICAgICAgICAgIC8vIE1pY3JvdGFza3MgYWx3YXlzIGhhdmUgcHJpb3JpdHkgb3ZlciBtYWNyb3Rhc2tzLiBJZiB0aGUgSlMgZW5naW5lXG4gICAgICAgICAgICAvLyBpcyBsb29raW5nIGZvciBhIHRhc2sgdG8gcnVuLCBpdCB3aWxsIGFsd2F5cyB0cnkgdG8gZW1wdHkgdGhlXG4gICAgICAgICAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcnVuIGFueXRoaW5nIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBtYWNyb3Rhc2sgcXVldWUuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRm9yIHRoZSBXZWJTb2NrZXQgdHJhbnNwb3J0LCBtZXNzYWdlcyBhbHdheXMgYXJyaXZlIGluIHRoZWlyIG93blxuICAgICAgICAgICAgLy8gZXZlbnQuIFRoaXMgbWVhbnMgdGhhdCBpZiBhbnkgcHJvbWlzZXMgYXJlIHJlc29sdmVkIGZyb20gd2l0aGluLFxuICAgICAgICAgICAgLy8gdGhlaXIgY2FsbGJhY2tzIHdpbGwgYWx3YXlzIGZpbmlzaCBleGVjdXRpb24gYnkgdGhlIHRpbWUgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IG1lc3NhZ2UgZXZlbnQgaGFuZGxlciBpcyBydW4uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gb3JkZXIgdG8gZW11bGF0ZSB0aGlzIGJlaGF2aW91ciwgd2UgbmVlZCB0byBtYWtlIHN1cmUgZWFjaFxuICAgICAgICAgICAgLy8gb25tZXNzYWdlIGhhbmRsZXIgaXMgcnVuIHdpdGhpbiBpdHMgb3duIG1hY3JvdGFzay5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbm1lc3NhZ2Uoe2RhdGE6IG1zZ30pLCAwKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5wb2xsKClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDIwNDpcbiAgICAgICAgICB0aGlzLnBvbGwoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDEwOlxuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMub3BlblxuICAgICAgICAgIHRoaXMub25vcGVuKHt9KVxuICAgICAgICAgIHRoaXMucG9sbCgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgdGhpcy5vbmVycm9yKDQwMylcbiAgICAgICAgICB0aGlzLmNsb3NlKDEwMDgsIFwiZm9yYmlkZGVuXCIsIGZhbHNlKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgdGhpcy5vbmVycm9yKDUwMClcbiAgICAgICAgICB0aGlzLmNsb3NlQW5kUmV0cnkoMTAxMSwgXCJpbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgNTAwKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgdW5oYW5kbGVkIHBvbGwgc3RhdHVzICR7c3RhdHVzfWApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIHdlIGNvbGxlY3QgYWxsIHB1c2hlcyB3aXRoaW4gdGhlIGN1cnJlbnQgZXZlbnQgbG9vcCBieVxuICAvLyBzZXRUaW1lb3V0IDAsIHdoaWNoIG9wdGltaXplcyBiYWNrLXRvLWJhY2sgcHJvY2VkdXJhbFxuICAvLyBwdXNoZXMgYWdhaW5zdCBhbiBlbXB0eSBidWZmZXJcblxuICBzZW5kKGJvZHkpe1xuICAgIGlmKHR5cGVvZihib2R5KSAhPT0gXCJzdHJpbmdcIil7IGJvZHkgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGJvZHkpIH1cbiAgICBpZih0aGlzLmN1cnJlbnRCYXRjaCl7XG4gICAgICB0aGlzLmN1cnJlbnRCYXRjaC5wdXNoKGJvZHkpXG4gICAgfSBlbHNlIGlmKHRoaXMuYXdhaXRpbmdCYXRjaEFjayl7XG4gICAgICB0aGlzLmJhdGNoQnVmZmVyLnB1c2goYm9keSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50QmF0Y2ggPSBbYm9keV1cbiAgICAgIHRoaXMuY3VycmVudEJhdGNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5iYXRjaFNlbmQodGhpcy5jdXJyZW50QmF0Y2gpXG4gICAgICAgIHRoaXMuY3VycmVudEJhdGNoID0gbnVsbFxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBiYXRjaFNlbmQobWVzc2FnZXMpe1xuICAgIHRoaXMuYXdhaXRpbmdCYXRjaEFjayA9IHRydWVcbiAgICB0aGlzLmFqYXgoXCJQT1NUXCIsIFwiYXBwbGljYXRpb24veC1uZGpzb25cIiwgbWVzc2FnZXMuam9pbihcIlxcblwiKSwgKCkgPT4gdGhpcy5vbmVycm9yKFwidGltZW91dFwiKSwgcmVzcCA9PiB7XG4gICAgICB0aGlzLmF3YWl0aW5nQmF0Y2hBY2sgPSBmYWxzZVxuICAgICAgaWYoIXJlc3AgfHwgcmVzcC5zdGF0dXMgIT09IDIwMCl7XG4gICAgICAgIHRoaXMub25lcnJvcihyZXNwICYmIHJlc3Auc3RhdHVzKVxuICAgICAgICB0aGlzLmNsb3NlQW5kUmV0cnkoMTAxMSwgXCJpbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgZmFsc2UpXG4gICAgICB9IGVsc2UgaWYodGhpcy5iYXRjaEJ1ZmZlci5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5iYXRjaFNlbmQodGhpcy5iYXRjaEJ1ZmZlcilcbiAgICAgICAgdGhpcy5iYXRjaEJ1ZmZlciA9IFtdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlKGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pe1xuICAgIGZvcihsZXQgcmVxIG9mIHRoaXMucmVxcyl7IHJlcS5hYm9ydCgpIH1cbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBTT0NLRVRfU1RBVEVTLmNsb3NlZFxuICAgIGxldCBvcHRzID0gT2JqZWN0LmFzc2lnbih7Y29kZTogMTAwMCwgcmVhc29uOiB1bmRlZmluZWQsIHdhc0NsZWFuOiB0cnVlfSwge2NvZGUsIHJlYXNvbiwgd2FzQ2xlYW59KVxuICAgIHRoaXMuYmF0Y2hCdWZmZXIgPSBbXVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmN1cnJlbnRCYXRjaFRpbWVyKVxuICAgIHRoaXMuY3VycmVudEJhdGNoVGltZXIgPSBudWxsXG4gICAgaWYodHlwZW9mKENsb3NlRXZlbnQpICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIHRoaXMub25jbG9zZShuZXcgQ2xvc2VFdmVudChcImNsb3NlXCIsIG9wdHMpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2xvc2Uob3B0cylcbiAgICB9XG4gIH1cblxuICBhamF4KG1ldGhvZCwgY29udGVudFR5cGUsIGJvZHksIG9uQ2FsbGVyVGltZW91dCwgY2FsbGJhY2spe1xuICAgIGxldCByZXFcbiAgICBsZXQgb250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZXFzLmRlbGV0ZShyZXEpXG4gICAgICBvbkNhbGxlclRpbWVvdXQoKVxuICAgIH1cbiAgICByZXEgPSBBamF4LnJlcXVlc3QobWV0aG9kLCB0aGlzLmVuZHBvaW50VVJMKCksIGNvbnRlbnRUeXBlLCBib2R5LCB0aGlzLnRpbWVvdXQsIG9udGltZW91dCwgcmVzcCA9PiB7XG4gICAgICB0aGlzLnJlcXMuZGVsZXRlKHJlcSlcbiAgICAgIGlmKHRoaXMuaXNBY3RpdmUoKSl7IGNhbGxiYWNrKHJlc3ApIH1cbiAgICB9KVxuICAgIHRoaXMucmVxcy5hZGQocmVxKVxuICB9XG59XG4iLCAiLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgUHJlc2VuY2VcbiAqIEBwYXJhbSB7Q2hhbm5lbH0gY2hhbm5lbCAtIFRoZSBDaGFubmVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBvcHRpb25zLFxuICogICAgICAgIGZvciBleGFtcGxlIGB7ZXZlbnRzOiB7c3RhdGU6IFwic3RhdGVcIiwgZGlmZjogXCJkaWZmXCJ9fWBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlc2VuY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwsIG9wdHMgPSB7fSl7XG4gICAgbGV0IGV2ZW50cyA9IG9wdHMuZXZlbnRzIHx8IHtzdGF0ZTogXCJwcmVzZW5jZV9zdGF0ZVwiLCBkaWZmOiBcInByZXNlbmNlX2RpZmZcIn1cbiAgICB0aGlzLnN0YXRlID0ge31cbiAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbFxuICAgIHRoaXMuam9pblJlZiA9IG51bGxcbiAgICB0aGlzLmNhbGxlciA9IHtcbiAgICAgIG9uSm9pbjogZnVuY3Rpb24gKCl7IH0sXG4gICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKXsgfSxcbiAgICAgIG9uU3luYzogZnVuY3Rpb24gKCl7IH1cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5uZWwub24oZXZlbnRzLnN0YXRlLCBuZXdTdGF0ZSA9PiB7XG4gICAgICBsZXQge29uSm9pbiwgb25MZWF2ZSwgb25TeW5jfSA9IHRoaXMuY2FsbGVyXG5cbiAgICAgIHRoaXMuam9pblJlZiA9IHRoaXMuY2hhbm5lbC5qb2luUmVmKClcbiAgICAgIHRoaXMuc3RhdGUgPSBQcmVzZW5jZS5zeW5jU3RhdGUodGhpcy5zdGF0ZSwgbmV3U3RhdGUsIG9uSm9pbiwgb25MZWF2ZSlcblxuICAgICAgdGhpcy5wZW5kaW5nRGlmZnMuZm9yRWFjaChkaWZmID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFByZXNlbmNlLnN5bmNEaWZmKHRoaXMuc3RhdGUsIGRpZmYsIG9uSm9pbiwgb25MZWF2ZSlcbiAgICAgIH0pXG4gICAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gICAgICBvblN5bmMoKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoYW5uZWwub24oZXZlbnRzLmRpZmYsIGRpZmYgPT4ge1xuICAgICAgbGV0IHtvbkpvaW4sIG9uTGVhdmUsIG9uU3luY30gPSB0aGlzLmNhbGxlclxuXG4gICAgICBpZih0aGlzLmluUGVuZGluZ1N5bmNTdGF0ZSgpKXtcbiAgICAgICAgdGhpcy5wZW5kaW5nRGlmZnMucHVzaChkaWZmKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFByZXNlbmNlLnN5bmNEaWZmKHRoaXMuc3RhdGUsIGRpZmYsIG9uSm9pbiwgb25MZWF2ZSlcbiAgICAgICAgb25TeW5jKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Kb2luKGNhbGxiYWNrKXsgdGhpcy5jYWxsZXIub25Kb2luID0gY2FsbGJhY2sgfVxuXG4gIG9uTGVhdmUoY2FsbGJhY2speyB0aGlzLmNhbGxlci5vbkxlYXZlID0gY2FsbGJhY2sgfVxuXG4gIG9uU3luYyhjYWxsYmFjayl7IHRoaXMuY2FsbGVyLm9uU3luYyA9IGNhbGxiYWNrIH1cblxuICBsaXN0KGJ5KXsgcmV0dXJuIFByZXNlbmNlLmxpc3QodGhpcy5zdGF0ZSwgYnkpIH1cblxuICBpblBlbmRpbmdTeW5jU3RhdGUoKXtcbiAgICByZXR1cm4gIXRoaXMuam9pblJlZiB8fCAodGhpcy5qb2luUmVmICE9PSB0aGlzLmNoYW5uZWwuam9pblJlZigpKVxuICB9XG5cbiAgLy8gbG93ZXItbGV2ZWwgcHVibGljIHN0YXRpYyBBUElcblxuICAvKipcbiAgICogVXNlZCB0byBzeW5jIHRoZSBsaXN0IG9mIHByZXNlbmNlcyBvbiB0aGUgc2VydmVyXG4gICAqIHdpdGggdGhlIGNsaWVudCdzIHN0YXRlLiBBbiBvcHRpb25hbCBgb25Kb2luYCBhbmQgYG9uTGVhdmVgIGNhbGxiYWNrIGNhblxuICAgKiBiZSBwcm92aWRlZCB0byByZWFjdCB0byBjaGFuZ2VzIGluIHRoZSBjbGllbnQncyBsb2NhbCBwcmVzZW5jZXMgYWNyb3NzXG4gICAqIGRpc2Nvbm5lY3RzIGFuZCByZWNvbm5lY3RzIHdpdGggdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHJldHVybnMge1ByZXNlbmNlfVxuICAgKi9cbiAgc3RhdGljIHN5bmNTdGF0ZShjdXJyZW50U3RhdGUsIG5ld1N0YXRlLCBvbkpvaW4sIG9uTGVhdmUpe1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY2xvbmUoY3VycmVudFN0YXRlKVxuICAgIGxldCBqb2lucyA9IHt9XG4gICAgbGV0IGxlYXZlcyA9IHt9XG5cbiAgICB0aGlzLm1hcChzdGF0ZSwgKGtleSwgcHJlc2VuY2UpID0+IHtcbiAgICAgIGlmKCFuZXdTdGF0ZVtrZXldKXtcbiAgICAgICAgbGVhdmVzW2tleV0gPSBwcmVzZW5jZVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5tYXAobmV3U3RhdGUsIChrZXksIG5ld1ByZXNlbmNlKSA9PiB7XG4gICAgICBsZXQgY3VycmVudFByZXNlbmNlID0gc3RhdGVba2V5XVxuICAgICAgaWYoY3VycmVudFByZXNlbmNlKXtcbiAgICAgICAgbGV0IG5ld1JlZnMgPSBuZXdQcmVzZW5jZS5tZXRhcy5tYXAobSA9PiBtLnBoeF9yZWYpXG4gICAgICAgIGxldCBjdXJSZWZzID0gY3VycmVudFByZXNlbmNlLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgICAgbGV0IGpvaW5lZE1ldGFzID0gbmV3UHJlc2VuY2UubWV0YXMuZmlsdGVyKG0gPT4gY3VyUmVmcy5pbmRleE9mKG0ucGh4X3JlZikgPCAwKVxuICAgICAgICBsZXQgbGVmdE1ldGFzID0gY3VycmVudFByZXNlbmNlLm1ldGFzLmZpbHRlcihtID0+IG5ld1JlZnMuaW5kZXhPZihtLnBoeF9yZWYpIDwgMClcbiAgICAgICAgaWYoam9pbmVkTWV0YXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgam9pbnNba2V5XSA9IG5ld1ByZXNlbmNlXG4gICAgICAgICAgam9pbnNba2V5XS5tZXRhcyA9IGpvaW5lZE1ldGFzXG4gICAgICAgIH1cbiAgICAgICAgaWYobGVmdE1ldGFzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIGxlYXZlc1trZXldID0gdGhpcy5jbG9uZShjdXJyZW50UHJlc2VuY2UpXG4gICAgICAgICAgbGVhdmVzW2tleV0ubWV0YXMgPSBsZWZ0TWV0YXNcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgam9pbnNba2V5XSA9IG5ld1ByZXNlbmNlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5zeW5jRGlmZihzdGF0ZSwge2pvaW5zOiBqb2lucywgbGVhdmVzOiBsZWF2ZXN9LCBvbkpvaW4sIG9uTGVhdmUpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogVXNlZCB0byBzeW5jIGEgZGlmZiBvZiBwcmVzZW5jZSBqb2luIGFuZCBsZWF2ZVxuICAgKiBldmVudHMgZnJvbSB0aGUgc2VydmVyLCBhcyB0aGV5IGhhcHBlbi4gTGlrZSBgc3luY1N0YXRlYCwgYHN5bmNEaWZmYFxuICAgKiBhY2NlcHRzIG9wdGlvbmFsIGBvbkpvaW5gIGFuZCBgb25MZWF2ZWAgY2FsbGJhY2tzIHRvIHJlYWN0IHRvIGEgdXNlclxuICAgKiBqb2luaW5nIG9yIGxlYXZpbmcgZnJvbSBhIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1ByZXNlbmNlfVxuICAgKi9cbiAgc3RhdGljIHN5bmNEaWZmKHN0YXRlLCBkaWZmLCBvbkpvaW4sIG9uTGVhdmUpe1xuICAgIGxldCB7am9pbnMsIGxlYXZlc30gPSB0aGlzLmNsb25lKGRpZmYpXG4gICAgaWYoIW9uSm9pbil7IG9uSm9pbiA9IGZ1bmN0aW9uICgpeyB9IH1cbiAgICBpZighb25MZWF2ZSl7IG9uTGVhdmUgPSBmdW5jdGlvbiAoKXsgfSB9XG5cbiAgICB0aGlzLm1hcChqb2lucywgKGtleSwgbmV3UHJlc2VuY2UpID0+IHtcbiAgICAgIGxldCBjdXJyZW50UHJlc2VuY2UgPSBzdGF0ZVtrZXldXG4gICAgICBzdGF0ZVtrZXldID0gdGhpcy5jbG9uZShuZXdQcmVzZW5jZSlcbiAgICAgIGlmKGN1cnJlbnRQcmVzZW5jZSl7XG4gICAgICAgIGxldCBqb2luZWRSZWZzID0gc3RhdGVba2V5XS5tZXRhcy5tYXAobSA9PiBtLnBoeF9yZWYpXG4gICAgICAgIGxldCBjdXJNZXRhcyA9IGN1cnJlbnRQcmVzZW5jZS5tZXRhcy5maWx0ZXIobSA9PiBqb2luZWRSZWZzLmluZGV4T2YobS5waHhfcmVmKSA8IDApXG4gICAgICAgIHN0YXRlW2tleV0ubWV0YXMudW5zaGlmdCguLi5jdXJNZXRhcylcbiAgICAgIH1cbiAgICAgIG9uSm9pbihrZXksIGN1cnJlbnRQcmVzZW5jZSwgbmV3UHJlc2VuY2UpXG4gICAgfSlcbiAgICB0aGlzLm1hcChsZWF2ZXMsIChrZXksIGxlZnRQcmVzZW5jZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRQcmVzZW5jZSA9IHN0YXRlW2tleV1cbiAgICAgIGlmKCFjdXJyZW50UHJlc2VuY2UpeyByZXR1cm4gfVxuICAgICAgbGV0IHJlZnNUb1JlbW92ZSA9IGxlZnRQcmVzZW5jZS5tZXRhcy5tYXAobSA9PiBtLnBoeF9yZWYpXG4gICAgICBjdXJyZW50UHJlc2VuY2UubWV0YXMgPSBjdXJyZW50UHJlc2VuY2UubWV0YXMuZmlsdGVyKHAgPT4ge1xuICAgICAgICByZXR1cm4gcmVmc1RvUmVtb3ZlLmluZGV4T2YocC5waHhfcmVmKSA8IDBcbiAgICAgIH0pXG4gICAgICBvbkxlYXZlKGtleSwgY3VycmVudFByZXNlbmNlLCBsZWZ0UHJlc2VuY2UpXG4gICAgICBpZihjdXJyZW50UHJlc2VuY2UubWV0YXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgZGVsZXRlIHN0YXRlW2tleV1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIHByZXNlbmNlcywgd2l0aCBzZWxlY3RlZCBtZXRhZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByZXNlbmNlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaG9vc2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcmVzZW5jZX1cbiAgICovXG4gIHN0YXRpYyBsaXN0KHByZXNlbmNlcywgY2hvb3Nlcil7XG4gICAgaWYoIWNob29zZXIpeyBjaG9vc2VyID0gZnVuY3Rpb24gKGtleSwgcHJlcyl7IHJldHVybiBwcmVzIH0gfVxuXG4gICAgcmV0dXJuIHRoaXMubWFwKHByZXNlbmNlcywgKGtleSwgcHJlc2VuY2UpID0+IHtcbiAgICAgIHJldHVybiBjaG9vc2VyKGtleSwgcHJlc2VuY2UpXG4gICAgfSlcbiAgfVxuXG4gIC8vIHByaXZhdGVcblxuICBzdGF0aWMgbWFwKG9iaiwgZnVuYyl7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubWFwKGtleSA9PiBmdW5jKGtleSwgb2JqW2tleV0pKVxuICB9XG5cbiAgc3RhdGljIGNsb25lKG9iail7IHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpIH1cbn1cbiIsICIvKiBUaGUgZGVmYXVsdCBzZXJpYWxpemVyIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgbWVzc2FnZXMgKi9cbmltcG9ydCB7XG4gIENIQU5ORUxfRVZFTlRTXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgSEVBREVSX0xFTkdUSDogMSxcbiAgTUVUQV9MRU5HVEg6IDQsXG4gIEtJTkRTOiB7cHVzaDogMCwgcmVwbHk6IDEsIGJyb2FkY2FzdDogMn0sXG5cbiAgZW5jb2RlKG1zZywgY2FsbGJhY2spe1xuICAgIGlmKG1zZy5wYXlsb2FkLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcil7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5iaW5hcnlFbmNvZGUobXNnKSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBheWxvYWQgPSBbbXNnLmpvaW5fcmVmLCBtc2cucmVmLCBtc2cudG9waWMsIG1zZy5ldmVudCwgbXNnLnBheWxvYWRdXG4gICAgICByZXR1cm4gY2FsbGJhY2soSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpXG4gICAgfVxuICB9LFxuXG4gIGRlY29kZShyYXdQYXlsb2FkLCBjYWxsYmFjayl7XG4gICAgaWYocmF3UGF5bG9hZC5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpe1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuYmluYXJ5RGVjb2RlKHJhd1BheWxvYWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgW2pvaW5fcmVmLCByZWYsIHRvcGljLCBldmVudCwgcGF5bG9hZF0gPSBKU09OLnBhcnNlKHJhd1BheWxvYWQpXG4gICAgICByZXR1cm4gY2FsbGJhY2soe2pvaW5fcmVmLCByZWYsIHRvcGljLCBldmVudCwgcGF5bG9hZH0pXG4gICAgfVxuICB9LFxuXG4gIC8vIHByaXZhdGVcblxuICBiaW5hcnlFbmNvZGUobWVzc2FnZSl7XG4gICAgbGV0IHtqb2luX3JlZiwgcmVmLCBldmVudCwgdG9waWMsIHBheWxvYWR9ID0gbWVzc2FnZVxuICAgIGxldCBtZXRhTGVuZ3RoID0gdGhpcy5NRVRBX0xFTkdUSCArIGpvaW5fcmVmLmxlbmd0aCArIHJlZi5sZW5ndGggKyB0b3BpYy5sZW5ndGggKyBldmVudC5sZW5ndGhcbiAgICBsZXQgaGVhZGVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuSEVBREVSX0xFTkdUSCArIG1ldGFMZW5ndGgpXG4gICAgbGV0IHZpZXcgPSBuZXcgRGF0YVZpZXcoaGVhZGVyKVxuICAgIGxldCBvZmZzZXQgPSAwXG5cbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCB0aGlzLktJTkRTLnB1c2gpIC8vIGtpbmRcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBqb2luX3JlZi5sZW5ndGgpXG4gICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgcmVmLmxlbmd0aClcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCB0b3BpYy5sZW5ndGgpXG4gICAgdmlldy5zZXRVaW50OChvZmZzZXQrKywgZXZlbnQubGVuZ3RoKVxuICAgIEFycmF5LmZyb20oam9pbl9yZWYsIGNoYXIgPT4gdmlldy5zZXRVaW50OChvZmZzZXQrKywgY2hhci5jaGFyQ29kZUF0KDApKSlcbiAgICBBcnJheS5mcm9tKHJlZiwgY2hhciA9PiB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjaGFyLmNoYXJDb2RlQXQoMCkpKVxuICAgIEFycmF5LmZyb20odG9waWMsIGNoYXIgPT4gdmlldy5zZXRVaW50OChvZmZzZXQrKywgY2hhci5jaGFyQ29kZUF0KDApKSlcbiAgICBBcnJheS5mcm9tKGV2ZW50LCBjaGFyID0+IHZpZXcuc2V0VWludDgob2Zmc2V0KyssIGNoYXIuY2hhckNvZGVBdCgwKSkpXG5cbiAgICB2YXIgY29tYmluZWQgPSBuZXcgVWludDhBcnJheShoZWFkZXIuYnl0ZUxlbmd0aCArIHBheWxvYWQuYnl0ZUxlbmd0aClcbiAgICBjb21iaW5lZC5zZXQobmV3IFVpbnQ4QXJyYXkoaGVhZGVyKSwgMClcbiAgICBjb21iaW5lZC5zZXQobmV3IFVpbnQ4QXJyYXkocGF5bG9hZCksIGhlYWRlci5ieXRlTGVuZ3RoKVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkLmJ1ZmZlclxuICB9LFxuXG4gIGJpbmFyeURlY29kZShidWZmZXIpe1xuICAgIGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcilcbiAgICBsZXQga2luZCA9IHZpZXcuZ2V0VWludDgoMClcbiAgICBsZXQgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSB0aGlzLktJTkRTLnB1c2g6IHJldHVybiB0aGlzLmRlY29kZVB1c2goYnVmZmVyLCB2aWV3LCBkZWNvZGVyKVxuICAgICAgY2FzZSB0aGlzLktJTkRTLnJlcGx5OiByZXR1cm4gdGhpcy5kZWNvZGVSZXBseShidWZmZXIsIHZpZXcsIGRlY29kZXIpXG4gICAgICBjYXNlIHRoaXMuS0lORFMuYnJvYWRjYXN0OiByZXR1cm4gdGhpcy5kZWNvZGVCcm9hZGNhc3QoYnVmZmVyLCB2aWV3LCBkZWNvZGVyKVxuICAgIH1cbiAgfSxcblxuICBkZWNvZGVQdXNoKGJ1ZmZlciwgdmlldywgZGVjb2Rlcil7XG4gICAgbGV0IGpvaW5SZWZTaXplID0gdmlldy5nZXRVaW50OCgxKVxuICAgIGxldCB0b3BpY1NpemUgPSB2aWV3LmdldFVpbnQ4KDIpXG4gICAgbGV0IGV2ZW50U2l6ZSA9IHZpZXcuZ2V0VWludDgoMylcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5IRUFERVJfTEVOR1RIICsgdGhpcy5NRVRBX0xFTkdUSCAtIDEgLy8gcHVzaGVzIGhhdmUgbm8gcmVmXG4gICAgbGV0IGpvaW5SZWYgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBqb2luUmVmU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgam9pblJlZlNpemVcbiAgICBsZXQgdG9waWMgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyB0b3BpY1NpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHRvcGljU2l6ZVxuICAgIGxldCBldmVudCA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGV2ZW50U2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgZXZlbnRTaXplXG4gICAgbGV0IGRhdGEgPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgICByZXR1cm4ge2pvaW5fcmVmOiBqb2luUmVmLCByZWY6IG51bGwsIHRvcGljOiB0b3BpYywgZXZlbnQ6IGV2ZW50LCBwYXlsb2FkOiBkYXRhfVxuICB9LFxuXG4gIGRlY29kZVJlcGx5KGJ1ZmZlciwgdmlldywgZGVjb2Rlcil7XG4gICAgbGV0IGpvaW5SZWZTaXplID0gdmlldy5nZXRVaW50OCgxKVxuICAgIGxldCByZWZTaXplID0gdmlldy5nZXRVaW50OCgyKVxuICAgIGxldCB0b3BpY1NpemUgPSB2aWV3LmdldFVpbnQ4KDMpXG4gICAgbGV0IGV2ZW50U2l6ZSA9IHZpZXcuZ2V0VWludDgoNClcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5IRUFERVJfTEVOR1RIICsgdGhpcy5NRVRBX0xFTkdUSFxuICAgIGxldCBqb2luUmVmID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgam9pblJlZlNpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIGpvaW5SZWZTaXplXG4gICAgbGV0IHJlZiA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIHJlZlNpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHJlZlNpemVcbiAgICBsZXQgdG9waWMgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyB0b3BpY1NpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHRvcGljU2l6ZVxuICAgIGxldCBldmVudCA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGV2ZW50U2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgZXZlbnRTaXplXG4gICAgbGV0IGRhdGEgPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgICBsZXQgcGF5bG9hZCA9IHtzdGF0dXM6IGV2ZW50LCByZXNwb25zZTogZGF0YX1cbiAgICByZXR1cm4ge2pvaW5fcmVmOiBqb2luUmVmLCByZWY6IHJlZiwgdG9waWM6IHRvcGljLCBldmVudDogQ0hBTk5FTF9FVkVOVFMucmVwbHksIHBheWxvYWQ6IHBheWxvYWR9XG4gIH0sXG5cbiAgZGVjb2RlQnJvYWRjYXN0KGJ1ZmZlciwgdmlldywgZGVjb2Rlcil7XG4gICAgbGV0IHRvcGljU2l6ZSA9IHZpZXcuZ2V0VWludDgoMSlcbiAgICBsZXQgZXZlbnRTaXplID0gdmlldy5nZXRVaW50OCgyKVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLkhFQURFUl9MRU5HVEggKyAyXG4gICAgbGV0IHRvcGljID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgdG9waWNTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyB0b3BpY1NpemVcbiAgICBsZXQgZXZlbnQgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBldmVudFNpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIGV2ZW50U2l6ZVxuICAgIGxldCBkYXRhID0gYnVmZmVyLnNsaWNlKG9mZnNldCwgYnVmZmVyLmJ5dGVMZW5ndGgpXG5cbiAgICByZXR1cm4ge2pvaW5fcmVmOiBudWxsLCByZWY6IG51bGwsIHRvcGljOiB0b3BpYywgZXZlbnQ6IGV2ZW50LCBwYXlsb2FkOiBkYXRhfVxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2xvYmFsLFxuICBwaHhXaW5kb3csXG4gIENIQU5ORUxfRVZFTlRTLFxuICBERUZBVUxUX1RJTUVPVVQsXG4gIERFRkFVTFRfVlNOLFxuICBTT0NLRVRfU1RBVEVTLFxuICBUUkFOU1BPUlRTLFxuICBXU19DTE9TRV9OT1JNQUxcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuaW1wb3J0IHtcbiAgY2xvc3VyZVxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCBBamF4IGZyb20gXCIuL2FqYXhcIlxuaW1wb3J0IENoYW5uZWwgZnJvbSBcIi4vY2hhbm5lbFwiXG5pbXBvcnQgTG9uZ1BvbGwgZnJvbSBcIi4vbG9uZ3BvbGxcIlxuaW1wb3J0IFNlcmlhbGl6ZXIgZnJvbSBcIi4vc2VyaWFsaXplclwiXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIlxuXG4vKiogSW5pdGlhbGl6ZXMgdGhlIFNvY2tldCAqXG4gKlxuICogRm9yIElFOCBzdXBwb3J0IHVzZSBhbiBFUzUtc2hpbSAoaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmRQb2ludCAtIFRoZSBzdHJpbmcgV2ViU29ja2V0IGVuZHBvaW50LCBpZSwgYFwid3M6Ly9leGFtcGxlLmNvbS9zb2NrZXRcImAsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFwid3NzOi8vZXhhbXBsZS5jb21cImBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXCIvc29ja2V0XCJgIChpbmhlcml0ZWQgaG9zdCAmIHByb3RvY29sKVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLnRyYW5zcG9ydF0gLSBUaGUgV2Vic29ja2V0IFRyYW5zcG9ydCwgZm9yIGV4YW1wbGUgV2ViU29ja2V0IG9yIFBob2VuaXguTG9uZ1BvbGwuXG4gKlxuICogRGVmYXVsdHMgdG8gV2ViU29ja2V0IHdpdGggYXV0b21hdGljIExvbmdQb2xsIGZhbGxiYWNrIGlmIFdlYlNvY2tldCBpcyBub3QgZGVmaW5lZC5cbiAqIFRvIGZhbGxiYWNrIHRvIExvbmdQb2xsIHdoZW4gV2ViU29ja2V0IGF0dGVtcHRzIGZhaWwsIHVzZSBgbG9uZ1BvbGxGYWxsYmFja01zOiAyNTAwYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5sb25nUG9sbEZhbGxiYWNrTXNdIC0gVGhlIG1pbGxpc2Vjb25kIHRpbWUgdG8gYXR0ZW1wdCB0aGUgcHJpbWFyeSB0cmFuc3BvcnRcbiAqIGJlZm9yZSBmYWxsaW5nIGJhY2sgdG8gdGhlIExvbmdQb2xsIHRyYW5zcG9ydC4gRGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5kZWJ1Z10gLSBXaGVuIHRydWUsIGVuYWJsZXMgZGVidWcgbG9nZ2luZy4gRGVmYXVsdCBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5lbmNvZGVdIC0gVGhlIGZ1bmN0aW9uIHRvIGVuY29kZSBvdXRnb2luZyBtZXNzYWdlcy5cbiAqXG4gKiBEZWZhdWx0cyB0byBKU09OIGVuY29kZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMuZGVjb2RlXSAtIFRoZSBmdW5jdGlvbiB0byBkZWNvZGUgaW5jb21pbmcgbWVzc2FnZXMuXG4gKlxuICogRGVmYXVsdHMgdG8gSlNPTjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAocGF5bG9hZCwgY2FsbGJhY2spID0+IGNhbGxiYWNrKEpTT04ucGFyc2UocGF5bG9hZCkpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMudGltZW91dF0gLSBUaGUgZGVmYXVsdCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byB0cmlnZ2VyIHB1c2ggdGltZW91dHMuXG4gKlxuICogRGVmYXVsdHMgYERFRkFVTFRfVElNRU9VVGBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5oZWFydGJlYXRJbnRlcnZhbE1zXSAtIFRoZSBtaWxsaXNlYyBpbnRlcnZhbCB0byBzZW5kIGEgaGVhcnRiZWF0IG1lc3NhZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5yZWNvbm5lY3RBZnRlck1zXSAtIFRoZSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1pbGxpc2VjXG4gKiBzb2NrZXQgcmVjb25uZWN0IGludGVydmFsLlxuICpcbiAqIERlZmF1bHRzIHRvIHN0ZXBwZWQgYmFja29mZiBvZjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAsIDUwLCAxMDAsIDE1MCwgMjAwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMF1bdHJpZXMgLSAxXSB8fCA1MDAwXG4gKiB9XG4gKiBgYGBgXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLnJlam9pbkFmdGVyTXNdIC0gVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWlsbGlzZWNcbiAqIHJlam9pbiBpbnRlcnZhbCBmb3IgaW5kaXZpZHVhbCBjaGFubmVscy5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAwMCwgMjAwMCwgNTAwMF1bdHJpZXMgLSAxXSB8fCAxMDAwMFxuICogfVxuICogYGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLmxvZ2dlcl0gLSBUaGUgb3B0aW9uYWwgZnVuY3Rpb24gZm9yIHNwZWNpYWxpemVkIGxvZ2dpbmcsIGllOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGZ1bmN0aW9uKGtpbmQsIG1zZywgZGF0YSkge1xuICogICBjb25zb2xlLmxvZyhgJHtraW5kfTogJHttc2d9YCwgZGF0YSlcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5sb25ncG9sbGVyVGltZW91dF0gLSBUaGUgbWF4aW11bSB0aW1lb3V0IG9mIGEgbG9uZyBwb2xsIEFKQVggcmVxdWVzdC5cbiAqXG4gKiBEZWZhdWx0cyB0byAyMHMgKGRvdWJsZSB0aGUgc2VydmVyIGxvbmcgcG9sbCB0aW1lcikuXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gW29wdHMucGFyYW1zXSAtIFRoZSBvcHRpb25hbCBwYXJhbXMgdG8gcGFzcyB3aGVuIGNvbm5lY3RpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5iaW5hcnlUeXBlXSAtIFRoZSBiaW5hcnkgdHlwZSB0byB1c2UgZm9yIGJpbmFyeSBXZWJTb2NrZXQgZnJhbWVzLlxuICpcbiAqIERlZmF1bHRzIHRvIFwiYXJyYXlidWZmZXJcIlxuICpcbiAqIEBwYXJhbSB7dnNufSBbb3B0cy52c25dIC0gVGhlIHNlcmlhbGl6ZXIncyBwcm90b2NvbCB2ZXJzaW9uIHRvIHNlbmQgb24gY29ubmVjdC5cbiAqXG4gKiBEZWZhdWx0cyB0byBERUZBVUxUX1ZTTi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHMuc2Vzc2lvblN0b3JhZ2VdIC0gQW4gb3B0aW9uYWwgU3RvcmFnZSBjb21wYXRpYmxlIG9iamVjdFxuICogUGhvZW5peCB1c2VzIHNlc3Npb25TdG9yYWdlIGZvciBsb25ncG9sbCBmYWxsYmFjayBoaXN0b3J5LiBPdmVycmlkaW5nIHRoZSBzdG9yZSBpc1xuICogdXNlZnVsIHdoZW4gUGhvZW5peCB3b24ndCBoYXZlIGFjY2VzcyB0byBgc2Vzc2lvblN0b3JhZ2VgLiBGb3IgZXhhbXBsZSwgVGhpcyBjb3VsZFxuICogaGFwcGVuIGlmIGEgc2l0ZSBsb2FkcyBhIGNyb3NzLWRvbWFpbiBjaGFubmVsIGluIGFuIGlmcmFtZS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiAgICAgY2xhc3MgSW5NZW1vcnlTdG9yYWdlIHtcbiAqICAgICAgIGNvbnN0cnVjdG9yKCkgeyB0aGlzLnN0b3JhZ2UgPSB7fSB9XG4gKiAgICAgICBnZXRJdGVtKGtleU5hbWUpIHsgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXlOYW1lXSB8fCBudWxsIH1cbiAqICAgICAgIHJlbW92ZUl0ZW0oa2V5TmFtZSkgeyBkZWxldGUgdGhpcy5zdG9yYWdlW2tleU5hbWVdIH1cbiAqICAgICAgIHNldEl0ZW0oa2V5TmFtZSwga2V5VmFsdWUpIHsgdGhpcy5zdG9yYWdlW2tleU5hbWVdID0ga2V5VmFsdWUgfVxuICogICAgIH1cbiAqXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0IHtcbiAgY29uc3RydWN0b3IoZW5kUG9pbnQsIG9wdHMgPSB7fSl7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcyA9IHtvcGVuOiBbXSwgY2xvc2U6IFtdLCBlcnJvcjogW10sIG1lc3NhZ2U6IFtdfVxuICAgIHRoaXMuY2hhbm5lbHMgPSBbXVxuICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdXG4gICAgdGhpcy5yZWYgPSAwXG4gICAgdGhpcy50aW1lb3V0ID0gb3B0cy50aW1lb3V0IHx8IERFRkFVTFRfVElNRU9VVFxuICAgIHRoaXMudHJhbnNwb3J0ID0gb3B0cy50cmFuc3BvcnQgfHwgZ2xvYmFsLldlYlNvY2tldCB8fCBMb25nUG9sbFxuICAgIHRoaXMucHJpbWFyeVBhc3NlZEhlYWx0aENoZWNrID0gZmFsc2VcbiAgICB0aGlzLmxvbmdQb2xsRmFsbGJhY2tNcyA9IG9wdHMubG9uZ1BvbGxGYWxsYmFja01zXG4gICAgdGhpcy5mYWxsYmFja1RpbWVyID0gbnVsbFxuICAgIHRoaXMuc2Vzc2lvblN0b3JlID0gb3B0cy5zZXNzaW9uU3RvcmFnZSB8fCAoZ2xvYmFsICYmIGdsb2JhbC5zZXNzaW9uU3RvcmFnZSlcbiAgICB0aGlzLmVzdGFibGlzaGVkQ29ubmVjdGlvbnMgPSAwXG4gICAgdGhpcy5kZWZhdWx0RW5jb2RlciA9IFNlcmlhbGl6ZXIuZW5jb2RlLmJpbmQoU2VyaWFsaXplcilcbiAgICB0aGlzLmRlZmF1bHREZWNvZGVyID0gU2VyaWFsaXplci5kZWNvZGUuYmluZChTZXJpYWxpemVyKVxuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IGZhbHNlXG4gICAgdGhpcy5kaXNjb25uZWN0aW5nID0gZmFsc2VcbiAgICB0aGlzLmJpbmFyeVR5cGUgPSBvcHRzLmJpbmFyeVR5cGUgfHwgXCJhcnJheWJ1ZmZlclwiXG4gICAgdGhpcy5jb25uZWN0Q2xvY2sgPSAxXG4gICAgaWYodGhpcy50cmFuc3BvcnQgIT09IExvbmdQb2xsKXtcbiAgICAgIHRoaXMuZW5jb2RlID0gb3B0cy5lbmNvZGUgfHwgdGhpcy5kZWZhdWx0RW5jb2RlclxuICAgICAgdGhpcy5kZWNvZGUgPSBvcHRzLmRlY29kZSB8fCB0aGlzLmRlZmF1bHREZWNvZGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5jb2RlID0gdGhpcy5kZWZhdWx0RW5jb2RlclxuICAgICAgdGhpcy5kZWNvZGUgPSB0aGlzLmRlZmF1bHREZWNvZGVyXG4gICAgfVxuICAgIGxldCBhd2FpdGluZ0Nvbm5lY3Rpb25PblBhZ2VTaG93ID0gbnVsbFxuICAgIGlmKHBoeFdpbmRvdyAmJiBwaHhXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICBwaHhXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIF9lID0+IHtcbiAgICAgICAgaWYodGhpcy5jb25uKXtcbiAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPSB0aGlzLmNvbm5lY3RDbG9ja1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcGh4V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCBfZSA9PiB7XG4gICAgICAgIGlmKGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPT09IHRoaXMuY29ubmVjdENsb2NrKXtcbiAgICAgICAgICBhd2FpdGluZ0Nvbm5lY3Rpb25PblBhZ2VTaG93ID0gbnVsbFxuICAgICAgICAgIHRoaXMuY29ubmVjdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcyA9IG9wdHMuaGVhcnRiZWF0SW50ZXJ2YWxNcyB8fCAzMDAwMFxuICAgIHRoaXMucmVqb2luQWZ0ZXJNcyA9ICh0cmllcykgPT4ge1xuICAgICAgaWYob3B0cy5yZWpvaW5BZnRlck1zKXtcbiAgICAgICAgcmV0dXJuIG9wdHMucmVqb2luQWZ0ZXJNcyh0cmllcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbMTAwMCwgMjAwMCwgNTAwMF1bdHJpZXMgLSAxXSB8fCAxMDAwMFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlY29ubmVjdEFmdGVyTXMgPSAodHJpZXMpID0+IHtcbiAgICAgIGlmKG9wdHMucmVjb25uZWN0QWZ0ZXJNcyl7XG4gICAgICAgIHJldHVybiBvcHRzLnJlY29ubmVjdEFmdGVyTXModHJpZXMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gWzEwLCA1MCwgMTAwLCAxNTAsIDIwMCwgMjUwLCA1MDAsIDEwMDAsIDIwMDBdW3RyaWVzIC0gMV0gfHwgNTAwMFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvZ2dlciA9IG9wdHMubG9nZ2VyIHx8IG51bGxcbiAgICBpZighdGhpcy5sb2dnZXIgJiYgb3B0cy5kZWJ1Zyl7XG4gICAgICB0aGlzLmxvZ2dlciA9IChraW5kLCBtc2csIGRhdGEpID0+IHsgY29uc29sZS5sb2coYCR7a2luZH06ICR7bXNnfWAsIGRhdGEpIH1cbiAgICB9XG4gICAgdGhpcy5sb25ncG9sbGVyVGltZW91dCA9IG9wdHMubG9uZ3BvbGxlclRpbWVvdXQgfHwgMjAwMDBcbiAgICB0aGlzLnBhcmFtcyA9IGNsb3N1cmUob3B0cy5wYXJhbXMgfHwge30pXG4gICAgdGhpcy5lbmRQb2ludCA9IGAke2VuZFBvaW50fS8ke1RSQU5TUE9SVFMud2Vic29ja2V0fWBcbiAgICB0aGlzLnZzbiA9IG9wdHMudnNuIHx8IERFRkFVTFRfVlNOXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lb3V0VGltZXIgPSBudWxsXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lciA9IG51bGxcbiAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lciA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICB0aGlzLnRlYXJkb3duKCgpID0+IHRoaXMuY29ubmVjdCgpKVxuICAgIH0sIHRoaXMucmVjb25uZWN0QWZ0ZXJNcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBMb25nUG9sbCB0cmFuc3BvcnQgcmVmZXJlbmNlXG4gICAqL1xuICBnZXRMb25nUG9sbFRyYW5zcG9ydCgpeyByZXR1cm4gTG9uZ1BvbGwgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyBhbmQgcmVwbGFjZXMgdGhlIGFjdGl2ZSB0cmFuc3BvcnRcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV3VHJhbnNwb3J0IC0gVGhlIG5ldyB0cmFuc3BvcnQgY2xhc3MgdG8gaW5zdGFudGlhdGVcbiAgICpcbiAgICovXG4gIHJlcGxhY2VUcmFuc3BvcnQobmV3VHJhbnNwb3J0KXtcbiAgICB0aGlzLmNvbm5lY3RDbG9jaysrXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gdHJ1ZVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lci5yZXNldCgpXG4gICAgaWYodGhpcy5jb25uKXtcbiAgICAgIHRoaXMuY29ubi5jbG9zZSgpXG4gICAgICB0aGlzLmNvbm4gPSBudWxsXG4gICAgfVxuICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3VHJhbnNwb3J0XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc29ja2V0IHByb3RvY29sXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwcm90b2NvbCgpeyByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wubWF0Y2goL15odHRwcy8pID8gXCJ3c3NcIiA6IFwid3NcIiB9XG5cbiAgLyoqXG4gICAqIFRoZSBmdWxseSBxdWFsaWZpZWQgc29ja2V0IHVybFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZW5kUG9pbnRVUkwoKXtcbiAgICBsZXQgdXJpID0gQWpheC5hcHBlbmRQYXJhbXMoXG4gICAgICBBamF4LmFwcGVuZFBhcmFtcyh0aGlzLmVuZFBvaW50LCB0aGlzLnBhcmFtcygpKSwge3ZzbjogdGhpcy52c259KVxuICAgIGlmKHVyaS5jaGFyQXQoMCkgIT09IFwiL1wiKXsgcmV0dXJuIHVyaSB9XG4gICAgaWYodXJpLmNoYXJBdCgxKSA9PT0gXCIvXCIpeyByZXR1cm4gYCR7dGhpcy5wcm90b2NvbCgpfToke3VyaX1gIH1cblxuICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sKCl9Oi8vJHtsb2NhdGlvbi5ob3N0fSR7dXJpfWBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2xvc2VFdmVudCNTdGF0dXNfY29kZXMgZm9yIHZhbGlkIHN0YXR1cyBjb2Rlcy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBPcHRpb25hbCBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgc29ja2V0IGlzIGRpc2Nvbm5lY3RlZC5cbiAgICogQHBhcmFtIHtpbnRlZ2VyfSBjb2RlIC0gQSBzdGF0dXMgY29kZSBmb3IgZGlzY29ubmVjdGlvbiAoT3B0aW9uYWwpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gQSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoZSByZWFzb24gdG8gZGlzY29ubmVjdC4gKE9wdGlvbmFsKVxuICAgKi9cbiAgZGlzY29ubmVjdChjYWxsYmFjaywgY29kZSwgcmVhc29uKXtcbiAgICB0aGlzLmNvbm5lY3RDbG9jaysrXG4gICAgdGhpcy5kaXNjb25uZWN0aW5nID0gdHJ1ZVxuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IHRydWVcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mYWxsYmFja1RpbWVyKVxuICAgIHRoaXMucmVjb25uZWN0VGltZXIucmVzZXQoKVxuICAgIHRoaXMudGVhcmRvd24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNjb25uZWN0aW5nID0gZmFsc2VcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9LCBjb2RlLCByZWFzb24pXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIFRoZSBwYXJhbXMgdG8gc2VuZCB3aGVuIGNvbm5lY3RpbmcsIGZvciBleGFtcGxlIGB7dXNlcl9pZDogdXNlclRva2VufWBcbiAgICpcbiAgICogUGFzc2luZyBwYXJhbXMgdG8gY29ubmVjdCBpcyBkZXByZWNhdGVkOyBwYXNzIHRoZW0gaW4gdGhlIFNvY2tldCBjb25zdHJ1Y3RvciBpbnN0ZWFkOlxuICAgKiBgbmV3IFNvY2tldChcIi9zb2NrZXRcIiwge3BhcmFtczoge3VzZXJfaWQ6IHVzZXJUb2tlbn19KWAuXG4gICAqL1xuICBjb25uZWN0KHBhcmFtcyl7XG4gICAgaWYocGFyYW1zKXtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJwYXNzaW5nIHBhcmFtcyB0byBjb25uZWN0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgcGFzcyA6cGFyYW1zIHRvIHRoZSBTb2NrZXQgY29uc3RydWN0b3JcIilcbiAgICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShwYXJhbXMpXG4gICAgfVxuICAgIGlmKHRoaXMuY29ubiAmJiAhdGhpcy5kaXNjb25uZWN0aW5nKXsgcmV0dXJuIH1cbiAgICBpZih0aGlzLmxvbmdQb2xsRmFsbGJhY2tNcyAmJiB0aGlzLnRyYW5zcG9ydCAhPT0gTG9uZ1BvbGwpe1xuICAgICAgdGhpcy5jb25uZWN0V2l0aEZhbGxiYWNrKExvbmdQb2xsLCB0aGlzLmxvbmdQb2xsRmFsbGJhY2tNcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc3BvcnRDb25uZWN0KClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9ncyB0aGUgbWVzc2FnZS4gT3ZlcnJpZGUgYHRoaXMubG9nZ2VyYCBmb3Igc3BlY2lhbGl6ZWQgbG9nZ2luZy4gbm9vcHMgYnkgZGVmYXVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2luZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqL1xuICBsb2coa2luZCwgbXNnLCBkYXRhKXsgdGhpcy5sb2dnZXIgJiYgdGhpcy5sb2dnZXIoa2luZCwgbXNnLCBkYXRhKSB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIGxvZ2dlciBoYXMgYmVlbiBzZXQgb24gdGhpcyBzb2NrZXQuXG4gICAqL1xuICBoYXNMb2dnZXIoKXsgcmV0dXJuIHRoaXMubG9nZ2VyICE9PSBudWxsIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNhbGxiYWNrcyBmb3IgY29ubmVjdGlvbiBvcGVuIGV2ZW50c1xuICAgKlxuICAgKiBAZXhhbXBsZSBzb2NrZXQub25PcGVuKGZ1bmN0aW9uKCl7IGNvbnNvbGUuaW5mbyhcInRoZSBzb2NrZXQgd2FzIG9wZW5lZFwiKSB9KVxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25PcGVuKGNhbGxiYWNrKXtcbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm9wZW4ucHVzaChbcmVmLCBjYWxsYmFja10pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgZm9yIGNvbm5lY3Rpb24gY2xvc2UgZXZlbnRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkNsb3NlKGNhbGxiYWNrKXtcbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmNsb3NlLnB1c2goW3JlZiwgY2FsbGJhY2tdKVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2tzIGZvciBjb25uZWN0aW9uIGVycm9yIGV2ZW50c1xuICAgKlxuICAgKiBAZXhhbXBsZSBzb2NrZXQub25FcnJvcihmdW5jdGlvbihlcnJvcil7IGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWRcIikgfSlcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uRXJyb3IoY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuZXJyb3IucHVzaChbcmVmLCBjYWxsYmFja10pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgZm9yIGNvbm5lY3Rpb24gbWVzc2FnZSBldmVudHNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uTWVzc2FnZShjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLnB1c2goW3JlZiwgY2FsbGJhY2tdKVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQaW5ncyB0aGUgc2VydmVyIGFuZCBpbnZva2VzIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBSVFQgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGluZyB3YXMgcHVzaGVkIG9yIGZhbHNlIGlmIHVuYWJsZSB0byBiZSBwdXNoZWQuXG4gICAqL1xuICBwaW5nKGNhbGxiYWNrKXtcbiAgICBpZighdGhpcy5pc0Nvbm5lY3RlZCgpKXsgcmV0dXJuIGZhbHNlIH1cbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgIHRoaXMucHVzaCh7dG9waWM6IFwicGhvZW5peFwiLCBldmVudDogXCJoZWFydGJlYXRcIiwgcGF5bG9hZDoge30sIHJlZjogcmVmfSlcbiAgICBsZXQgb25Nc2dSZWYgPSB0aGlzLm9uTWVzc2FnZShtc2cgPT4ge1xuICAgICAgaWYobXNnLnJlZiA9PT0gcmVmKXtcbiAgICAgICAgdGhpcy5vZmYoW29uTXNnUmVmXSlcbiAgICAgICAgY2FsbGJhY2soRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG5cbiAgdHJhbnNwb3J0Q29ubmVjdCgpe1xuICAgIHRoaXMuY29ubmVjdENsb2NrKytcbiAgICB0aGlzLmNsb3NlV2FzQ2xlYW4gPSBmYWxzZVxuICAgIHRoaXMuY29ubiA9IG5ldyB0aGlzLnRyYW5zcG9ydCh0aGlzLmVuZFBvaW50VVJMKCkpXG4gICAgdGhpcy5jb25uLmJpbmFyeVR5cGUgPSB0aGlzLmJpbmFyeVR5cGVcbiAgICB0aGlzLmNvbm4udGltZW91dCA9IHRoaXMubG9uZ3BvbGxlclRpbWVvdXRcbiAgICB0aGlzLmNvbm4ub25vcGVuID0gKCkgPT4gdGhpcy5vbkNvbm5PcGVuKClcbiAgICB0aGlzLmNvbm4ub25lcnJvciA9IGVycm9yID0+IHRoaXMub25Db25uRXJyb3IoZXJyb3IpXG4gICAgdGhpcy5jb25uLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHRoaXMub25Db25uTWVzc2FnZShldmVudClcbiAgICB0aGlzLmNvbm4ub25jbG9zZSA9IGV2ZW50ID0+IHRoaXMub25Db25uQ2xvc2UoZXZlbnQpXG4gIH1cblxuICBnZXRTZXNzaW9uKGtleSl7IHJldHVybiB0aGlzLnNlc3Npb25TdG9yZSAmJiB0aGlzLnNlc3Npb25TdG9yZS5nZXRJdGVtKGtleSkgfVxuXG4gIHN0b3JlU2Vzc2lvbihrZXksIHZhbCl7IHRoaXMuc2Vzc2lvblN0b3JlICYmIHRoaXMuc2Vzc2lvblN0b3JlLnNldEl0ZW0oa2V5LCB2YWwpIH1cblxuICBjb25uZWN0V2l0aEZhbGxiYWNrKGZhbGxiYWNrVHJhbnNwb3J0LCBmYWxsYmFja1RocmVzaG9sZCA9IDI1MDApe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgbGV0IGVzdGFibGlzaGVkID0gZmFsc2VcbiAgICBsZXQgcHJpbWFyeVRyYW5zcG9ydCA9IHRydWVcbiAgICBsZXQgb3BlblJlZiwgZXJyb3JSZWZcbiAgICBsZXQgZmFsbGJhY2sgPSAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgZmFsbGluZyBiYWNrIHRvICR7ZmFsbGJhY2tUcmFuc3BvcnQubmFtZX0uLi5gLCByZWFzb24pXG4gICAgICB0aGlzLm9mZihbb3BlblJlZiwgZXJyb3JSZWZdKVxuICAgICAgcHJpbWFyeVRyYW5zcG9ydCA9IGZhbHNlXG4gICAgICB0aGlzLnJlcGxhY2VUcmFuc3BvcnQoZmFsbGJhY2tUcmFuc3BvcnQpXG4gICAgICB0aGlzLnRyYW5zcG9ydENvbm5lY3QoKVxuICAgIH1cbiAgICBpZih0aGlzLmdldFNlc3Npb24oYHBoeDpmYWxsYmFjazoke2ZhbGxiYWNrVHJhbnNwb3J0Lm5hbWV9YCkpeyByZXR1cm4gZmFsbGJhY2soXCJtZW1vcml6ZWRcIikgfVxuXG4gICAgdGhpcy5mYWxsYmFja1RpbWVyID0gc2V0VGltZW91dChmYWxsYmFjaywgZmFsbGJhY2tUaHJlc2hvbGQpXG5cbiAgICBlcnJvclJlZiA9IHRoaXMub25FcnJvcihyZWFzb24gPT4ge1xuICAgICAgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJlcnJvclwiLCByZWFzb24pXG4gICAgICBpZihwcmltYXJ5VHJhbnNwb3J0ICYmICFlc3RhYmxpc2hlZCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZhbGxiYWNrVGltZXIpXG4gICAgICAgIGZhbGxiYWNrKHJlYXNvbilcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25PcGVuKCgpID0+IHtcbiAgICAgIGVzdGFibGlzaGVkID0gdHJ1ZVxuICAgICAgaWYoIXByaW1hcnlUcmFuc3BvcnQpe1xuICAgICAgICAvLyBvbmx5IG1lbW9yaXplIExQIGlmIHdlIG5ldmVyIGNvbm5lY3RlZCB0byBwcmltYXJ5XG4gICAgICAgIGlmKCF0aGlzLnByaW1hcnlQYXNzZWRIZWFsdGhDaGVjayl7IHRoaXMuc3RvcmVTZXNzaW9uKGBwaHg6ZmFsbGJhY2s6JHtmYWxsYmFja1RyYW5zcG9ydC5uYW1lfWAsIFwidHJ1ZVwiKSB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgZXN0YWJsaXNoZWQgJHtmYWxsYmFja1RyYW5zcG9ydC5uYW1lfSBmYWxsYmFja2ApXG4gICAgICB9XG4gICAgICAvLyBpZiB3ZSd2ZSBlc3RhYmxpc2hlZCBwcmltYXJ5LCBnaXZlIHRoZSBmYWxsYmFjayBhIG5ldyBwZXJpb2QgdG8gYXR0ZW1wdCBwaW5nXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWxsYmFja1RpbWVyKVxuICAgICAgdGhpcy5mYWxsYmFja1RpbWVyID0gc2V0VGltZW91dChmYWxsYmFjaywgZmFsbGJhY2tUaHJlc2hvbGQpXG4gICAgICB0aGlzLnBpbmcocnR0ID0+IHtcbiAgICAgICAgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJjb25uZWN0ZWQgdG8gcHJpbWFyeSBhZnRlclwiLCBydHQpXG4gICAgICAgIHRoaXMucHJpbWFyeVBhc3NlZEhlYWx0aENoZWNrID0gdHJ1ZVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWxsYmFja1RpbWVyKVxuICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMudHJhbnNwb3J0Q29ubmVjdCgpXG4gIH1cblxuICBjbGVhckhlYXJ0YmVhdHMoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oZWFydGJlYXRUaW1lb3V0VGltZXIpXG4gIH1cblxuICBvbkNvbm5PcGVuKCl7XG4gICAgaWYodGhpcy5oYXNMb2dnZXIoKSkgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgYCR7dGhpcy50cmFuc3BvcnQubmFtZX0gY29ubmVjdGVkIHRvICR7dGhpcy5lbmRQb2ludFVSTCgpfWApXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICB0aGlzLmRpc2Nvbm5lY3RpbmcgPSBmYWxzZVxuICAgIHRoaXMuZXN0YWJsaXNoZWRDb25uZWN0aW9ucysrXG4gICAgdGhpcy5mbHVzaFNlbmRCdWZmZXIoKVxuICAgIHRoaXMucmVjb25uZWN0VGltZXIucmVzZXQoKVxuICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Mub3Blbi5mb3JFYWNoKChbLCBjYWxsYmFja10pID0+IGNhbGxiYWNrKCkpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG5cbiAgaGVhcnRiZWF0VGltZW91dCgpe1xuICAgIGlmKHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZil7XG4gICAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgICBpZih0aGlzLmhhc0xvZ2dlcigpKXsgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJoZWFydGJlYXQgdGltZW91dC4gQXR0ZW1wdGluZyB0byByZS1lc3RhYmxpc2ggY29ubmVjdGlvblwiKSB9XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKVxuICAgICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICAgIHRoaXMudGVhcmRvd24oKCkgPT4gdGhpcy5yZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSwgV1NfQ0xPU0VfTk9STUFMLCBcImhlYXJ0YmVhdCB0aW1lb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRIZWFydGJlYXQoKXtcbiAgICBpZih0aGlzLmNvbm4gJiYgdGhpcy5jb25uLnNraXBIZWFydGJlYXQpeyByZXR1cm4gfVxuICAgIHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiA9IG51bGxcbiAgICB0aGlzLmNsZWFySGVhcnRiZWF0cygpXG4gICAgdGhpcy5oZWFydGJlYXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZW5kSGVhcnRiZWF0KCksIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcylcbiAgfVxuXG4gIHRlYXJkb3duKGNhbGxiYWNrLCBjb2RlLCByZWFzb24pe1xuICAgIGlmKCF0aGlzLmNvbm4pe1xuICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG4gICAgbGV0IGNvbm5lY3RDbG9jayA9IHRoaXMuY29ubmVjdENsb2NrXG5cbiAgICB0aGlzLndhaXRGb3JCdWZmZXJEb25lKCgpID0+IHtcbiAgICAgIGlmKGNvbm5lY3RDbG9jayAhPT0gdGhpcy5jb25uZWN0Q2xvY2speyByZXR1cm4gfVxuICAgICAgaWYodGhpcy5jb25uKXtcbiAgICAgICAgaWYoY29kZSl7IHRoaXMuY29ubi5jbG9zZShjb2RlLCByZWFzb24gfHwgXCJcIikgfSBlbHNlIHsgdGhpcy5jb25uLmNsb3NlKCkgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLndhaXRGb3JTb2NrZXRDbG9zZWQoKCkgPT4ge1xuICAgICAgICBpZihjb25uZWN0Q2xvY2sgIT09IHRoaXMuY29ubmVjdENsb2NrKXsgcmV0dXJuIH1cbiAgICAgICAgaWYodGhpcy5jb25uKXtcbiAgICAgICAgICB0aGlzLmNvbm4ub25vcGVuID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgICAgICAgIHRoaXMuY29ubi5vbmVycm9yID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgICAgICAgIHRoaXMuY29ubi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgICAgICAgdGhpcy5jb25uLm9uY2xvc2UgPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgICAgICAgdGhpcy5jb25uID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgd2FpdEZvckJ1ZmZlckRvbmUoY2FsbGJhY2ssIHRyaWVzID0gMSl7XG4gICAgaWYodHJpZXMgPT09IDUgfHwgIXRoaXMuY29ubiB8fCAhdGhpcy5jb25uLmJ1ZmZlcmVkQW1vdW50KXtcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy53YWl0Rm9yQnVmZmVyRG9uZShjYWxsYmFjaywgdHJpZXMgKyAxKVxuICAgIH0sIDE1MCAqIHRyaWVzKVxuICB9XG5cbiAgd2FpdEZvclNvY2tldENsb3NlZChjYWxsYmFjaywgdHJpZXMgPSAxKXtcbiAgICBpZih0cmllcyA9PT0gNSB8fCAhdGhpcy5jb25uIHx8IHRoaXMuY29ubi5yZWFkeVN0YXRlID09PSBTT0NLRVRfU1RBVEVTLmNsb3NlZCl7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMud2FpdEZvclNvY2tldENsb3NlZChjYWxsYmFjaywgdHJpZXMgKyAxKVxuICAgIH0sIDE1MCAqIHRyaWVzKVxuICB9XG5cbiAgb25Db25uQ2xvc2UoZXZlbnQpe1xuICAgIGxldCBjbG9zZUNvZGUgPSBldmVudCAmJiBldmVudC5jb2RlXG4gICAgaWYodGhpcy5oYXNMb2dnZXIoKSkgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgXCJjbG9zZVwiLCBldmVudClcbiAgICB0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKVxuICAgIHRoaXMuY2xlYXJIZWFydGJlYXRzKClcbiAgICBpZighdGhpcy5jbG9zZVdhc0NsZWFuICYmIGNsb3NlQ29kZSAhPT0gMTAwMCl7XG4gICAgICB0aGlzLnJlY29ubmVjdFRpbWVyLnNjaGVkdWxlVGltZW91dCgpXG4gICAgfVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MuY2xvc2UuZm9yRWFjaCgoWywgY2FsbGJhY2tdKSA9PiBjYWxsYmFjayhldmVudCkpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG9uQ29ubkVycm9yKGVycm9yKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBlcnJvcilcbiAgICBsZXQgdHJhbnNwb3J0QmVmb3JlID0gdGhpcy50cmFuc3BvcnRcbiAgICBsZXQgZXN0YWJsaXNoZWRCZWZvcmUgPSB0aGlzLmVzdGFibGlzaGVkQ29ubmVjdGlvbnNcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmVycm9yLmZvckVhY2goKFssIGNhbGxiYWNrXSkgPT4ge1xuICAgICAgY2FsbGJhY2soZXJyb3IsIHRyYW5zcG9ydEJlZm9yZSwgZXN0YWJsaXNoZWRCZWZvcmUpXG4gICAgfSlcbiAgICBpZih0cmFuc3BvcnRCZWZvcmUgPT09IHRoaXMudHJhbnNwb3J0IHx8IGVzdGFibGlzaGVkQmVmb3JlID4gMCl7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuRXJyb3IoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdHJpZ2dlckNoYW5FcnJvcigpe1xuICAgIHRoaXMuY2hhbm5lbHMuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIGlmKCEoY2hhbm5lbC5pc0Vycm9yZWQoKSB8fCBjaGFubmVsLmlzTGVhdmluZygpIHx8IGNoYW5uZWwuaXNDbG9zZWQoKSkpe1xuICAgICAgICBjaGFubmVsLnRyaWdnZXIoQ0hBTk5FTF9FVkVOVFMuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29ubmVjdGlvblN0YXRlKCl7XG4gICAgc3dpdGNoKHRoaXMuY29ubiAmJiB0aGlzLmNvbm4ucmVhZHlTdGF0ZSl7XG4gICAgICBjYXNlIFNPQ0tFVF9TVEFURVMuY29ubmVjdGluZzogcmV0dXJuIFwiY29ubmVjdGluZ1wiXG4gICAgICBjYXNlIFNPQ0tFVF9TVEFURVMub3BlbjogcmV0dXJuIFwib3BlblwiXG4gICAgICBjYXNlIFNPQ0tFVF9TVEFURVMuY2xvc2luZzogcmV0dXJuIFwiY2xvc2luZ1wiXG4gICAgICBkZWZhdWx0OiByZXR1cm4gXCJjbG9zZWRcIlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29ubmVjdGVkKCl7IHJldHVybiB0aGlzLmNvbm5lY3Rpb25TdGF0ZSgpID09PSBcIm9wZW5cIiB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7Q2hhbm5lbH1cbiAgICovXG4gIHJlbW92ZShjaGFubmVsKXtcbiAgICB0aGlzLm9mZihjaGFubmVsLnN0YXRlQ2hhbmdlUmVmcylcbiAgICB0aGlzLmNoYW5uZWxzID0gdGhpcy5jaGFubmVscy5maWx0ZXIoYyA9PiBjICE9PSBjaGFubmVsKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYG9uT3BlbmAsIGBvbkNsb3NlYCwgYG9uRXJyb3IsYCBhbmQgYG9uTWVzc2FnZWAgcmVnaXN0cmF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtyZWZzfSAtIGxpc3Qgb2YgcmVmcyByZXR1cm5lZCBieSBjYWxscyB0b1xuICAgKiAgICAgICAgICAgICAgICAgYG9uT3BlbmAsIGBvbkNsb3NlYCwgYG9uRXJyb3IsYCBhbmQgYG9uTWVzc2FnZWBcbiAgICovXG4gIG9mZihyZWZzKXtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzKXtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Nba2V5XSA9IHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Nba2V5XS5maWx0ZXIoKFtyZWZdKSA9PiB7XG4gICAgICAgIHJldHVybiByZWZzLmluZGV4T2YocmVmKSA9PT0gLTFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlcyBhIG5ldyBjaGFubmVsIGZvciB0aGUgZ2l2ZW4gdG9waWNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuUGFyYW1zIC0gUGFyYW1ldGVycyBmb3IgdGhlIGNoYW5uZWxcbiAgICogQHJldHVybnMge0NoYW5uZWx9XG4gICAqL1xuICBjaGFubmVsKHRvcGljLCBjaGFuUGFyYW1zID0ge30pe1xuICAgIGxldCBjaGFuID0gbmV3IENoYW5uZWwodG9waWMsIGNoYW5QYXJhbXMsIHRoaXMpXG4gICAgdGhpcy5jaGFubmVscy5wdXNoKGNoYW4pXG4gICAgcmV0dXJuIGNoYW5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgcHVzaChkYXRhKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKXtcbiAgICAgIGxldCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmfSA9IGRhdGFcbiAgICAgIHRoaXMubG9nKFwicHVzaFwiLCBgJHt0b3BpY30gJHtldmVudH0gKCR7am9pbl9yZWZ9LCAke3JlZn0pYCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICBpZih0aGlzLmlzQ29ubmVjdGVkKCkpe1xuICAgICAgdGhpcy5lbmNvZGUoZGF0YSwgcmVzdWx0ID0+IHRoaXMuY29ubi5zZW5kKHJlc3VsdCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKCgpID0+IHRoaXMuZW5jb2RlKGRhdGEsIHJlc3VsdCA9PiB0aGlzLmNvbm4uc2VuZChyZXN1bHQpKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZXh0IG1lc3NhZ2UgcmVmLCBhY2NvdW50aW5nIGZvciBvdmVyZmxvd3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG1ha2VSZWYoKXtcbiAgICBsZXQgbmV3UmVmID0gdGhpcy5yZWYgKyAxXG4gICAgaWYobmV3UmVmID09PSB0aGlzLnJlZil7IHRoaXMucmVmID0gMCB9IGVsc2UgeyB0aGlzLnJlZiA9IG5ld1JlZiB9XG5cbiAgICByZXR1cm4gdGhpcy5yZWYudG9TdHJpbmcoKVxuICB9XG5cbiAgc2VuZEhlYXJ0YmVhdCgpe1xuICAgIGlmKHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiAmJiAhdGhpcy5pc0Nvbm5lY3RlZCgpKXsgcmV0dXJuIH1cbiAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMucHVzaCh7dG9waWM6IFwicGhvZW5peFwiLCBldmVudDogXCJoZWFydGJlYXRcIiwgcGF5bG9hZDoge30sIHJlZjogdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmfSlcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oZWFydGJlYXRUaW1lb3V0KCksIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcylcbiAgfVxuXG4gIGZsdXNoU2VuZEJ1ZmZlcigpe1xuICAgIGlmKHRoaXMuaXNDb25uZWN0ZWQoKSAmJiB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKVxuICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW11cbiAgICB9XG4gIH1cblxuICBvbkNvbm5NZXNzYWdlKHJhd01lc3NhZ2Upe1xuICAgIHRoaXMuZGVjb2RlKHJhd01lc3NhZ2UuZGF0YSwgbXNnID0+IHtcbiAgICAgIGxldCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmfSA9IG1zZ1xuICAgICAgaWYocmVmICYmIHJlZiA9PT0gdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmKXtcbiAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdHMoKVxuICAgICAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VuZEhlYXJ0YmVhdCgpLCB0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMpXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpIHRoaXMubG9nKFwicmVjZWl2ZVwiLCBgJHtwYXlsb2FkLnN0YXR1cyB8fCBcIlwifSAke3RvcGljfSAke2V2ZW50fSAke3JlZiAmJiBcIihcIiArIHJlZiArIFwiKVwiIHx8IFwiXCJ9YCwgcGF5bG9hZClcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhbm5lbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tpXVxuICAgICAgICBpZighY2hhbm5lbC5pc01lbWJlcih0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5fcmVmKSl7IGNvbnRpbnVlIH1cbiAgICAgICAgY2hhbm5lbC50cmlnZ2VyKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmKVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IFssIGNhbGxiYWNrXSA9IHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MubWVzc2FnZVtpXVxuICAgICAgICBjYWxsYmFjayhtc2cpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxlYXZlT3BlblRvcGljKHRvcGljKXtcbiAgICBsZXQgZHVwQ2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZmluZChjID0+IGMudG9waWMgPT09IHRvcGljICYmIChjLmlzSm9pbmVkKCkgfHwgYy5pc0pvaW5pbmcoKSkpXG4gICAgaWYoZHVwQ2hhbm5lbCl7XG4gICAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgbGVhdmluZyBkdXBsaWNhdGUgdG9waWMgXCIke3RvcGljfVwiYClcbiAgICAgIGR1cENoYW5uZWwubGVhdmUoKVxuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCBjb25zdCBDT05TRUNVVElWRV9SRUxPQURTID0gXCJjb25zZWN1dGl2ZS1yZWxvYWRzXCJcbmV4cG9ydCBjb25zdCBNQVhfUkVMT0FEUyA9IDEwXG5leHBvcnQgY29uc3QgUkVMT0FEX0pJVFRFUl9NSU4gPSA1MDAwXG5leHBvcnQgY29uc3QgUkVMT0FEX0pJVFRFUl9NQVggPSAxMDAwMFxuZXhwb3J0IGNvbnN0IEZBSUxTQUZFX0pJVFRFUiA9IDMwMDAwXG5leHBvcnQgY29uc3QgUEhYX0VWRU5UX0NMQVNTRVMgPSBbXG4gIFwicGh4LWNsaWNrLWxvYWRpbmdcIiwgXCJwaHgtY2hhbmdlLWxvYWRpbmdcIiwgXCJwaHgtc3VibWl0LWxvYWRpbmdcIixcbiAgXCJwaHgta2V5ZG93bi1sb2FkaW5nXCIsIFwicGh4LWtleXVwLWxvYWRpbmdcIiwgXCJwaHgtYmx1ci1sb2FkaW5nXCIsIFwicGh4LWZvY3VzLWxvYWRpbmdcIlxuXVxuZXhwb3J0IGNvbnN0IFBIWF9DT01QT05FTlQgPSBcImRhdGEtcGh4LWNvbXBvbmVudFwiXG5leHBvcnQgY29uc3QgUEhYX0xJVkVfTElOSyA9IFwiZGF0YS1waHgtbGlua1wiXG5leHBvcnQgY29uc3QgUEhYX1RSQUNLX1NUQVRJQyA9IFwidHJhY2stc3RhdGljXCJcbmV4cG9ydCBjb25zdCBQSFhfTElOS19TVEFURSA9IFwiZGF0YS1waHgtbGluay1zdGF0ZVwiXG5leHBvcnQgY29uc3QgUEhYX1JFRiA9IFwiZGF0YS1waHgtcmVmXCJcbmV4cG9ydCBjb25zdCBQSFhfUkVGX1NSQyA9IFwiZGF0YS1waHgtcmVmLXNyY1wiXG5leHBvcnQgY29uc3QgUEhYX1RSQUNLX1VQTE9BRFMgPSBcInRyYWNrLXVwbG9hZHNcIlxuZXhwb3J0IGNvbnN0IFBIWF9VUExPQURfUkVGID0gXCJkYXRhLXBoeC11cGxvYWQtcmVmXCJcbmV4cG9ydCBjb25zdCBQSFhfUFJFRkxJR0hURURfUkVGUyA9IFwiZGF0YS1waHgtcHJlZmxpZ2h0ZWQtcmVmc1wiXG5leHBvcnQgY29uc3QgUEhYX0RPTkVfUkVGUyA9IFwiZGF0YS1waHgtZG9uZS1yZWZzXCJcbmV4cG9ydCBjb25zdCBQSFhfRFJPUF9UQVJHRVQgPSBcImRyb3AtdGFyZ2V0XCJcbmV4cG9ydCBjb25zdCBQSFhfQUNUSVZFX0VOVFJZX1JFRlMgPSBcImRhdGEtcGh4LWFjdGl2ZS1yZWZzXCJcbmV4cG9ydCBjb25zdCBQSFhfTElWRV9GSUxFX1VQREFURUQgPSBcInBoeDpsaXZlLWZpbGU6dXBkYXRlZFwiXG5leHBvcnQgY29uc3QgUEhYX1NLSVAgPSBcImRhdGEtcGh4LXNraXBcIlxuZXhwb3J0IGNvbnN0IFBIWF9QUlVORSA9IFwiZGF0YS1waHgtcHJ1bmVcIlxuZXhwb3J0IGNvbnN0IFBIWF9QQUdFX0xPQURJTkcgPSBcInBhZ2UtbG9hZGluZ1wiXG5leHBvcnQgY29uc3QgUEhYX0NPTk5FQ1RFRF9DTEFTUyA9IFwicGh4LWNvbm5lY3RlZFwiXG5leHBvcnQgY29uc3QgUEhYX0xPQURJTkdfQ0xBU1MgPSBcInBoeC1sb2FkaW5nXCJcbmV4cG9ydCBjb25zdCBQSFhfTk9fRkVFREJBQ0tfQ0xBU1MgPSBcInBoeC1uby1mZWVkYmFja1wiXG5leHBvcnQgY29uc3QgUEhYX0VSUk9SX0NMQVNTID0gXCJwaHgtZXJyb3JcIlxuZXhwb3J0IGNvbnN0IFBIWF9DTElFTlRfRVJST1JfQ0xBU1MgPSBcInBoeC1jbGllbnQtZXJyb3JcIlxuZXhwb3J0IGNvbnN0IFBIWF9TRVJWRVJfRVJST1JfQ0xBU1MgPSBcInBoeC1zZXJ2ZXItZXJyb3JcIlxuZXhwb3J0IGNvbnN0IFBIWF9QQVJFTlRfSUQgPSBcImRhdGEtcGh4LXBhcmVudC1pZFwiXG5leHBvcnQgY29uc3QgUEhYX01BSU4gPSBcImRhdGEtcGh4LW1haW5cIlxuZXhwb3J0IGNvbnN0IFBIWF9ST09UX0lEID0gXCJkYXRhLXBoeC1yb290LWlkXCJcbmV4cG9ydCBjb25zdCBQSFhfVklFV1BPUlRfVE9QID0gXCJ2aWV3cG9ydC10b3BcIlxuZXhwb3J0IGNvbnN0IFBIWF9WSUVXUE9SVF9CT1RUT00gPSBcInZpZXdwb3J0LWJvdHRvbVwiXG5leHBvcnQgY29uc3QgUEhYX1RSSUdHRVJfQUNUSU9OID0gXCJ0cmlnZ2VyLWFjdGlvblwiXG5leHBvcnQgY29uc3QgUEhYX0ZFRURCQUNLX0ZPUiA9IFwiZmVlZGJhY2stZm9yXCJcbmV4cG9ydCBjb25zdCBQSFhfSEFTX0ZPQ1VTRUQgPSBcInBoeC1oYXMtZm9jdXNlZFwiXG5leHBvcnQgY29uc3QgRk9DVVNBQkxFX0lOUFVUUyA9IFtcInRleHRcIiwgXCJ0ZXh0YXJlYVwiLCBcIm51bWJlclwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJzZWFyY2hcIiwgXCJ0ZWxcIiwgXCJ1cmxcIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwiY29sb3JcIiwgXCJyYW5nZVwiXVxuZXhwb3J0IGNvbnN0IENIRUNLQUJMRV9JTlBVVFMgPSBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdXG5leHBvcnQgY29uc3QgUEhYX0hBU19TVUJNSVRURUQgPSBcInBoeC1oYXMtc3VibWl0dGVkXCJcbmV4cG9ydCBjb25zdCBQSFhfU0VTU0lPTiA9IFwiZGF0YS1waHgtc2Vzc2lvblwiXG5leHBvcnQgY29uc3QgUEhYX1ZJRVdfU0VMRUNUT1IgPSBgWyR7UEhYX1NFU1NJT059XWBcbmV4cG9ydCBjb25zdCBQSFhfU1RJQ0tZID0gXCJkYXRhLXBoeC1zdGlja3lcIlxuZXhwb3J0IGNvbnN0IFBIWF9TVEFUSUMgPSBcImRhdGEtcGh4LXN0YXRpY1wiXG5leHBvcnQgY29uc3QgUEhYX1JFQURPTkxZID0gXCJkYXRhLXBoeC1yZWFkb25seVwiXG5leHBvcnQgY29uc3QgUEhYX0RJU0FCTEVEID0gXCJkYXRhLXBoeC1kaXNhYmxlZFwiXG5leHBvcnQgY29uc3QgUEhYX0RJU0FCTEVfV0lUSCA9IFwiZGlzYWJsZS13aXRoXCJcbmV4cG9ydCBjb25zdCBQSFhfRElTQUJMRV9XSVRIX1JFU1RPUkUgPSBcImRhdGEtcGh4LWRpc2FibGUtd2l0aC1yZXN0b3JlXCJcbmV4cG9ydCBjb25zdCBQSFhfSE9PSyA9IFwiaG9va1wiXG5leHBvcnQgY29uc3QgUEhYX0RFQk9VTkNFID0gXCJkZWJvdW5jZVwiXG5leHBvcnQgY29uc3QgUEhYX1RIUk9UVExFID0gXCJ0aHJvdHRsZVwiXG5leHBvcnQgY29uc3QgUEhYX1VQREFURSA9IFwidXBkYXRlXCJcbmV4cG9ydCBjb25zdCBQSFhfU1RSRUFNID0gXCJzdHJlYW1cIlxuZXhwb3J0IGNvbnN0IFBIWF9TVFJFQU1fUkVGID0gXCJkYXRhLXBoeC1zdHJlYW1cIlxuZXhwb3J0IGNvbnN0IFBIWF9LRVkgPSBcImtleVwiXG5leHBvcnQgY29uc3QgUEhYX1BSSVZBVEUgPSBcInBoeFByaXZhdGVcIlxuZXhwb3J0IGNvbnN0IFBIWF9BVVRPX1JFQ09WRVIgPSBcImF1dG8tcmVjb3ZlclwiXG5leHBvcnQgY29uc3QgUEhYX0xWX0RFQlVHID0gXCJwaHg6bGl2ZS1zb2NrZXQ6ZGVidWdcIlxuZXhwb3J0IGNvbnN0IFBIWF9MVl9QUk9GSUxFID0gXCJwaHg6bGl2ZS1zb2NrZXQ6cHJvZmlsaW5nXCJcbmV4cG9ydCBjb25zdCBQSFhfTFZfTEFURU5DWV9TSU0gPSBcInBoeDpsaXZlLXNvY2tldDpsYXRlbmN5LXNpbVwiXG5leHBvcnQgY29uc3QgUEhYX1BST0dSRVNTID0gXCJwcm9ncmVzc1wiXG5leHBvcnQgY29uc3QgUEhYX01PVU5URUQgPSBcIm1vdW50ZWRcIlxuZXhwb3J0IGNvbnN0IExPQURFUl9USU1FT1VUID0gMVxuZXhwb3J0IGNvbnN0IEJFRk9SRV9VTkxPQURfTE9BREVSX1RJTUVPVVQgPSAyMDBcbmV4cG9ydCBjb25zdCBCSU5ESU5HX1BSRUZJWCA9IFwicGh4LVwiXG5leHBvcnQgY29uc3QgUFVTSF9USU1FT1VUID0gMzAwMDBcbmV4cG9ydCBjb25zdCBMSU5LX0hFQURFUiA9IFwieC1yZXF1ZXN0ZWQtd2l0aFwiXG5leHBvcnQgY29uc3QgUkVTUE9OU0VfVVJMX0hFQURFUiA9IFwieC1yZXNwb25zZS11cmxcIlxuZXhwb3J0IGNvbnN0IERFQk9VTkNFX1RSSUdHRVIgPSBcImRlYm91bmNlLXRyaWdnZXJcIlxuZXhwb3J0IGNvbnN0IFRIUk9UVExFRCA9IFwidGhyb3R0bGVkXCJcbmV4cG9ydCBjb25zdCBERUJPVU5DRV9QUkVWX0tFWSA9IFwiZGVib3VuY2UtcHJldi1rZXlcIlxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICBkZWJvdW5jZTogMzAwLFxuICB0aHJvdHRsZTogMzAwXG59XG5cbi8vIFJlbmRlcmVkXG5leHBvcnQgY29uc3QgRFlOQU1JQ1MgPSBcImRcIlxuZXhwb3J0IGNvbnN0IFNUQVRJQyA9IFwic1wiXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UUyA9IFwiY1wiXG5leHBvcnQgY29uc3QgRVZFTlRTID0gXCJlXCJcbmV4cG9ydCBjb25zdCBSRVBMWSA9IFwiclwiXG5leHBvcnQgY29uc3QgVElUTEUgPSBcInRcIlxuZXhwb3J0IGNvbnN0IFRFTVBMQVRFUyA9IFwicFwiXG5leHBvcnQgY29uc3QgU1RSRUFNID0gXCJzdHJlYW1cIlxuIiwgImltcG9ydCB7XG4gIGxvZ0Vycm9yXG59IGZyb20gXCIuL3V0aWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnlVcGxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKGVudHJ5LCBjaHVua1NpemUsIGxpdmVTb2NrZXQpe1xuICAgIHRoaXMubGl2ZVNvY2tldCA9IGxpdmVTb2NrZXRcbiAgICB0aGlzLmVudHJ5ID0gZW50cnlcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmNodW5rU2l6ZSA9IGNodW5rU2l6ZVxuICAgIHRoaXMuY2h1bmtUaW1lciA9IG51bGxcbiAgICB0aGlzLmVycm9yZWQgPSBmYWxzZVxuICAgIHRoaXMudXBsb2FkQ2hhbm5lbCA9IGxpdmVTb2NrZXQuY2hhbm5lbChgbHZ1OiR7ZW50cnkucmVmfWAsIHt0b2tlbjogZW50cnkubWV0YWRhdGEoKX0pXG4gIH1cblxuICBlcnJvcihyZWFzb24pe1xuICAgIGlmKHRoaXMuZXJyb3JlZCl7IHJldHVybiB9XG4gICAgdGhpcy5lcnJvcmVkID0gdHJ1ZVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNodW5rVGltZXIpXG4gICAgdGhpcy5lbnRyeS5lcnJvcihyZWFzb24pXG4gIH1cblxuICB1cGxvYWQoKXtcbiAgICB0aGlzLnVwbG9hZENoYW5uZWwub25FcnJvcihyZWFzb24gPT4gdGhpcy5lcnJvcihyZWFzb24pKVxuICAgIHRoaXMudXBsb2FkQ2hhbm5lbC5qb2luKClcbiAgICAgIC5yZWNlaXZlKFwib2tcIiwgX2RhdGEgPT4gdGhpcy5yZWFkTmV4dENodW5rKCkpXG4gICAgICAucmVjZWl2ZShcImVycm9yXCIsIHJlYXNvbiA9PiB0aGlzLmVycm9yKHJlYXNvbikpXG4gIH1cblxuICBpc0RvbmUoKXsgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMuZW50cnkuZmlsZS5zaXplIH1cblxuICByZWFkTmV4dENodW5rKCl7XG4gICAgbGV0IHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpXG4gICAgbGV0IGJsb2IgPSB0aGlzLmVudHJ5LmZpbGUuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMuY2h1bmtTaXplICsgdGhpcy5vZmZzZXQpXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICBpZihlLnRhcmdldC5lcnJvciA9PT0gbnVsbCl7XG4gICAgICAgIHRoaXMub2Zmc2V0ICs9IGUudGFyZ2V0LnJlc3VsdC5ieXRlTGVuZ3RoXG4gICAgICAgIHRoaXMucHVzaENodW5rKGUudGFyZ2V0LnJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2dFcnJvcihcIlJlYWQgZXJyb3I6IFwiICsgZS50YXJnZXQuZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICB9XG5cbiAgcHVzaENodW5rKGNodW5rKXtcbiAgICBpZighdGhpcy51cGxvYWRDaGFubmVsLmlzSm9pbmVkKCkpeyByZXR1cm4gfVxuICAgIHRoaXMudXBsb2FkQ2hhbm5lbC5wdXNoKFwiY2h1bmtcIiwgY2h1bmspXG4gICAgICAucmVjZWl2ZShcIm9rXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbnRyeS5wcm9ncmVzcygodGhpcy5vZmZzZXQgLyB0aGlzLmVudHJ5LmZpbGUuc2l6ZSkgKiAxMDApXG4gICAgICAgIGlmKCF0aGlzLmlzRG9uZSgpKXtcbiAgICAgICAgICB0aGlzLmNodW5rVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVhZE5leHRDaHVuaygpLCB0aGlzLmxpdmVTb2NrZXQuZ2V0TGF0ZW5jeVNpbSgpIHx8IDApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAucmVjZWl2ZShcImVycm9yXCIsICh7cmVhc29ufSkgPT4gdGhpcy5lcnJvcihyZWFzb24pKVxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgUEhYX1ZJRVdfU0VMRUNUT1Jcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuaW1wb3J0IEVudHJ5VXBsb2FkZXIgZnJvbSBcIi4vZW50cnlfdXBsb2FkZXJcIlxuXG5leHBvcnQgbGV0IGxvZ0Vycm9yID0gKG1zZywgb2JqKSA9PiBjb25zb2xlLmVycm9yICYmIGNvbnNvbGUuZXJyb3IobXNnLCBvYmopXG5cbmV4cG9ydCBsZXQgaXNDaWQgPSAoY2lkKSA9PiB7XG4gIGxldCB0eXBlID0gdHlwZW9mKGNpZClcbiAgcmV0dXJuIHR5cGUgPT09IFwibnVtYmVyXCIgfHwgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgL14oMHxbMS05XVxcZCopJC8udGVzdChjaWQpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0RHVwbGljYXRlSWRzKCl7XG4gIGxldCBpZHMgPSBuZXcgU2V0KClcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbaWRdXCIpXG4gIGZvcihsZXQgaSA9IDAsIGxlbiA9IGVsZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICBpZihpZHMuaGFzKGVsZW1zW2ldLmlkKSl7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBJRHMgZGV0ZWN0ZWQ6ICR7ZWxlbXNbaV0uaWR9LiBFbnN1cmUgdW5pcXVlIGVsZW1lbnQgaWRzLmApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkcy5hZGQoZWxlbXNbaV0uaWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBsZXQgZGVidWcgPSAodmlldywga2luZCwgbXNnLCBvYmopID0+IHtcbiAgaWYodmlldy5saXZlU29ja2V0LmlzRGVidWdFbmFibGVkKCkpe1xuICAgIGNvbnNvbGUubG9nKGAke3ZpZXcuaWR9ICR7a2luZH06ICR7bXNnfSAtIGAsIG9iailcbiAgfVxufVxuXG4vLyB3cmFwcyB2YWx1ZSBpbiBjbG9zdXJlIG9yIHJldHVybnMgY2xvc3VyZVxuZXhwb3J0IGxldCBjbG9zdXJlID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiID8gdmFsIDogZnVuY3Rpb24gKCl7IHJldHVybiB2YWwgfVxuXG5leHBvcnQgbGV0IGNsb25lID0gKG9iaikgPT4geyByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKSB9XG5cbmV4cG9ydCBsZXQgY2xvc2VzdFBoeEJpbmRpbmcgPSAoZWwsIGJpbmRpbmcsIGJvcmRlckVsKSA9PiB7XG4gIGRvIHtcbiAgICBpZihlbC5tYXRjaGVzKGBbJHtiaW5kaW5nfV1gKSAmJiAhZWwuZGlzYWJsZWQpeyByZXR1cm4gZWwgfVxuICAgIGVsID0gZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlXG4gIH0gd2hpbGUoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEgJiYgISgoYm9yZGVyRWwgJiYgYm9yZGVyRWwuaXNTYW1lTm9kZShlbCkpIHx8IGVsLm1hdGNoZXMoUEhYX1ZJRVdfU0VMRUNUT1IpKSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGxldCBpc09iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmICEob2JqIGluc3RhbmNlb2YgQXJyYXkpXG59XG5cbmV4cG9ydCBsZXQgaXNFcXVhbE9iaiA9IChvYmoxLCBvYmoyKSA9PiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcblxuZXhwb3J0IGxldCBpc0VtcHR5ID0gKG9iaikgPT4ge1xuICBmb3IobGV0IHggaW4gb2JqKXsgcmV0dXJuIGZhbHNlIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGxldCBtYXliZSA9IChlbCwgY2FsbGJhY2spID0+IGVsICYmIGNhbGxiYWNrKGVsKVxuXG5leHBvcnQgbGV0IGNoYW5uZWxVcGxvYWRlciA9IGZ1bmN0aW9uIChlbnRyaWVzLCBvbkVycm9yLCByZXNwLCBsaXZlU29ja2V0KXtcbiAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICBsZXQgZW50cnlVcGxvYWRlciA9IG5ldyBFbnRyeVVwbG9hZGVyKGVudHJ5LCByZXNwLmNvbmZpZy5jaHVua19zaXplLCBsaXZlU29ja2V0KVxuICAgIGVudHJ5VXBsb2FkZXIudXBsb2FkKClcbiAgfSlcbn1cbiIsICJsZXQgQnJvd3NlciA9IHtcbiAgY2FuUHVzaFN0YXRlKCl7IHJldHVybiAodHlwZW9mIChoaXN0b3J5LnB1c2hTdGF0ZSkgIT09IFwidW5kZWZpbmVkXCIpIH0sXG5cbiAgZHJvcExvY2FsKGxvY2FsU3RvcmFnZSwgbmFtZXNwYWNlLCBzdWJrZXkpe1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsS2V5KG5hbWVzcGFjZSwgc3Via2V5KSlcbiAgfSxcblxuICB1cGRhdGVMb2NhbChsb2NhbFN0b3JhZ2UsIG5hbWVzcGFjZSwgc3Via2V5LCBpbml0aWFsLCBmdW5jKXtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuZ2V0TG9jYWwobG9jYWxTdG9yYWdlLCBuYW1lc3BhY2UsIHN1YmtleSlcbiAgICBsZXQga2V5ID0gdGhpcy5sb2NhbEtleShuYW1lc3BhY2UsIHN1YmtleSlcbiAgICBsZXQgbmV3VmFsID0gY3VycmVudCA9PT0gbnVsbCA/IGluaXRpYWwgOiBmdW5jKGN1cnJlbnQpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXdWYWwpKVxuICAgIHJldHVybiBuZXdWYWxcbiAgfSxcblxuICBnZXRMb2NhbChsb2NhbFN0b3JhZ2UsIG5hbWVzcGFjZSwgc3Via2V5KXtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsS2V5KG5hbWVzcGFjZSwgc3Via2V5KSkpXG4gIH0sXG5cbiAgdXBkYXRlQ3VycmVudFN0YXRlKGNhbGxiYWNrKXtcbiAgICBpZighdGhpcy5jYW5QdXNoU3RhdGUoKSl7IHJldHVybiB9XG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoY2FsbGJhY2soaGlzdG9yeS5zdGF0ZSB8fCB7fSksIFwiXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICB9LFxuXG4gIHB1c2hTdGF0ZShraW5kLCBtZXRhLCB0byl7XG4gICAgaWYodGhpcy5jYW5QdXNoU3RhdGUoKSl7XG4gICAgICBpZih0byAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpe1xuICAgICAgICBpZihtZXRhLnR5cGUgPT0gXCJyZWRpcmVjdFwiICYmIG1ldGEuc2Nyb2xsKXtcbiAgICAgICAgICAvLyBJZiB3ZSdyZSByZWRpcmVjdGluZyBzdG9yZSB0aGUgY3VycmVudCBzY3JvbGxZIGZvciB0aGUgY3VycmVudCBoaXN0b3J5IHN0YXRlLlxuICAgICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSBoaXN0b3J5LnN0YXRlIHx8IHt9XG4gICAgICAgICAgY3VycmVudFN0YXRlLnNjcm9sbCA9IG1ldGEuc2Nyb2xsXG4gICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoY3VycmVudFN0YXRlLCBcIlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBtZXRhLnNjcm9sbCAvLyBPbmx5IHN0b3JlIHRoZSBzY3JvbGwgaW4gdGhlIHJlZGlyZWN0IGNhc2UuXG4gICAgICAgIGhpc3Rvcnlba2luZCArIFwiU3RhdGVcIl0obWV0YSwgXCJcIiwgdG8gfHwgbnVsbCkgLy8gSUUgd2lsbCBjb2VyY2UgdW5kZWZpbmVkIHRvIHN0cmluZ1xuICAgICAgICBsZXQgaGFzaEVsID0gdGhpcy5nZXRIYXNoVGFyZ2V0RWwod2luZG93LmxvY2F0aW9uLmhhc2gpXG5cbiAgICAgICAgaWYoaGFzaEVsKXtcbiAgICAgICAgICBoYXNoRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB9IGVsc2UgaWYobWV0YS50eXBlID09PSBcInJlZGlyZWN0XCIpe1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZGlyZWN0KHRvKVxuICAgIH1cbiAgfSxcblxuICBzZXRDb29raWUobmFtZSwgdmFsdWUpe1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YFxuICB9LFxuXG4gIGdldENvb2tpZShuYW1lKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChgKD86KD86XnwuKjtcXHMqKSR7bmFtZX1cXHMqXFw9XFxzKihbXjtdKikuKiQpfF4uKiRgKSwgXCIkMVwiKVxuICB9LFxuXG4gIHJlZGlyZWN0KHRvVVJMLCBmbGFzaCl7XG4gICAgaWYoZmxhc2gpeyBCcm93c2VyLnNldENvb2tpZShcIl9fcGhvZW5peF9mbGFzaF9fXCIsIGZsYXNoICsgXCI7IG1heC1hZ2U9NjAwMDA7IHBhdGg9L1wiKSB9XG4gICAgd2luZG93LmxvY2F0aW9uID0gdG9VUkxcbiAgfSxcblxuICBsb2NhbEtleShuYW1lc3BhY2UsIHN1YmtleSl7IHJldHVybiBgJHtuYW1lc3BhY2V9LSR7c3Via2V5fWAgfSxcblxuICBnZXRIYXNoVGFyZ2V0RWwobWF5YmVIYXNoKXtcbiAgICBsZXQgaGFzaCA9IG1heWJlSGFzaC50b1N0cmluZygpLnN1YnN0cmluZygxKVxuICAgIGlmKGhhc2ggPT09IFwiXCIpeyByZXR1cm4gfVxuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW25hbWU9XCIke2hhc2h9XCJdYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyXG4iLCAiaW1wb3J0IHtcbiAgQ0hFQ0tBQkxFX0lOUFVUUyxcbiAgREVCT1VOQ0VfUFJFVl9LRVksXG4gIERFQk9VTkNFX1RSSUdHRVIsXG4gIEZPQ1VTQUJMRV9JTlBVVFMsXG4gIFBIWF9DT01QT05FTlQsXG4gIFBIWF9FVkVOVF9DTEFTU0VTLFxuICBQSFhfSEFTX0ZPQ1VTRUQsXG4gIFBIWF9IQVNfU1VCTUlUVEVELFxuICBQSFhfTUFJTixcbiAgUEhYX05PX0ZFRURCQUNLX0NMQVNTLFxuICBQSFhfUEFSRU5UX0lELFxuICBQSFhfUFJJVkFURSxcbiAgUEhYX1JFRixcbiAgUEhYX1JFRl9TUkMsXG4gIFBIWF9ST09UX0lELFxuICBQSFhfU0VTU0lPTixcbiAgUEhYX1NUQVRJQyxcbiAgUEhYX1VQTE9BRF9SRUYsXG4gIFBIWF9WSUVXX1NFTEVDVE9SLFxuICBQSFhfU1RJQ0tZLFxuICBUSFJPVFRMRURcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuaW1wb3J0IHtcbiAgbG9nRXJyb3Jcbn0gZnJvbSBcIi4vdXRpbHNcIlxuXG5sZXQgRE9NID0ge1xuICBieUlkKGlkKXsgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSB8fCBsb2dFcnJvcihgbm8gaWQgZm91bmQgZm9yICR7aWR9YCkgfSxcblxuICByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKXtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICBpZihlbC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKXsgZWwucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIikgfVxuICB9LFxuXG4gIGFsbChub2RlLCBxdWVyeSwgY2FsbGJhY2spe1xuICAgIGlmKCFub2RlKXsgcmV0dXJuIFtdIH1cbiAgICBsZXQgYXJyYXkgPSBBcnJheS5mcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpXG4gICAgcmV0dXJuIGNhbGxiYWNrID8gYXJyYXkuZm9yRWFjaChjYWxsYmFjaykgOiBhcnJheVxuICB9LFxuXG4gIGNoaWxkTm9kZUxlbmd0aChodG1sKXtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIilcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnRcbiAgfSxcblxuICBpc1VwbG9hZElucHV0KGVsKXsgcmV0dXJuIGVsLnR5cGUgPT09IFwiZmlsZVwiICYmIGVsLmdldEF0dHJpYnV0ZShQSFhfVVBMT0FEX1JFRikgIT09IG51bGwgfSxcblxuICBmaW5kVXBsb2FkSW5wdXRzKG5vZGUpeyByZXR1cm4gdGhpcy5hbGwobm9kZSwgYGlucHV0W3R5cGU9XCJmaWxlXCJdWyR7UEhYX1VQTE9BRF9SRUZ9XWApIH0sXG5cbiAgZmluZENvbXBvbmVudE5vZGVMaXN0KG5vZGUsIGNpZCl7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyV2l0aGluU2FtZUxpdmVWaWV3KHRoaXMuYWxsKG5vZGUsIGBbJHtQSFhfQ09NUE9ORU5UfT1cIiR7Y2lkfVwiXWApLCBub2RlKVxuICB9LFxuXG4gIGlzUGh4RGVzdHJveWVkKG5vZGUpe1xuICAgIHJldHVybiBub2RlLmlkICYmIERPTS5wcml2YXRlKG5vZGUsIFwiZGVzdHJveWVkXCIpID8gdHJ1ZSA6IGZhbHNlXG4gIH0sXG5cbiAgd2FudHNOZXdUYWIoZSl7XG4gICAgbGV0IHdhbnRzTmV3VGFiID0gZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkgfHwgZS5tZXRhS2V5IHx8IChlLmJ1dHRvbiAmJiBlLmJ1dHRvbiA9PT0gMSlcbiAgICBsZXQgaXNEb3dubG9hZCA9IChlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRvd25sb2FkXCIpKVxuICAgIGxldCBpc1RhcmdldEJsYW5rID0gZS50YXJnZXQuaGFzQXR0cmlidXRlKFwidGFyZ2V0XCIpICYmIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRhcmdldFwiKS50b0xvd2VyQ2FzZSgpID09PSBcIl9ibGFua1wiXG4gICAgcmV0dXJuIHdhbnRzTmV3VGFiIHx8IGlzVGFyZ2V0QmxhbmsgfHwgaXNEb3dubG9hZFxuICB9LFxuXG4gIGlzVW5sb2FkYWJsZUZvcm1TdWJtaXQoZSl7XG4gICAgcmV0dXJuICFlLmRlZmF1bHRQcmV2ZW50ZWQgJiYgIXRoaXMud2FudHNOZXdUYWIoZSlcbiAgfSxcblxuICBpc05ld1BhZ2VDbGljayhlLCBjdXJyZW50TG9jYXRpb24pe1xuICAgIGxldCBocmVmID0gZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCA/IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIikgOiBudWxsXG4gICAgbGV0IHVybFxuXG4gICAgaWYoZS5kZWZhdWx0UHJldmVudGVkIHx8IGhyZWYgPT09IG51bGwgfHwgdGhpcy53YW50c05ld1RhYihlKSl7IHJldHVybiBmYWxzZSB9XG4gICAgaWYoaHJlZi5zdGFydHNXaXRoKFwibWFpbHRvOlwiKSB8fCBocmVmLnN0YXJ0c1dpdGgoXCJ0ZWw6XCIpKXsgcmV0dXJuIGZhbHNlIH1cblxuICAgIHRyeSB7XG4gICAgICB1cmwgPSBuZXcgVVJMKGhyZWYpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB1cmwgPSBuZXcgVVJMKGhyZWYsIGN1cnJlbnRMb2NhdGlvbilcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAvLyBiYWQgVVJMLCBmYWxsYmFjayB0byBsZXQgYnJvd3NlciB0cnkgaXQgYXMgZXh0ZXJuYWxcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih1cmwuaG9zdCA9PT0gY3VycmVudExvY2F0aW9uLmhvc3QgJiYgdXJsLnByb3RvY29sID09PSBjdXJyZW50TG9jYXRpb24ucHJvdG9jb2wpe1xuICAgICAgaWYodXJsLnBhdGhuYW1lID09PSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUgJiYgdXJsLnNlYXJjaCA9PT0gY3VycmVudExvY2F0aW9uLnNlYXJjaCl7XG4gICAgICAgIHJldHVybiB1cmwuaGFzaCA9PT0gXCJcIiAmJiAhdXJsLmhyZWYuZW5kc1dpdGgoXCIjXCIpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmwucHJvdG9jb2wuc3RhcnRzV2l0aChcImh0dHBcIilcbiAgfSxcblxuICBtYXJrUGh4Q2hpbGREZXN0cm95ZWQoZWwpe1xuICAgIGlmKHRoaXMuaXNQaHhDaGlsZChlbCkpeyBlbC5zZXRBdHRyaWJ1dGUoUEhYX1NFU1NJT04sIFwiXCIpIH1cbiAgICB0aGlzLnB1dFByaXZhdGUoZWwsIFwiZGVzdHJveWVkXCIsIHRydWUpXG4gIH0sXG5cbiAgZmluZFBoeENoaWxkcmVuSW5GcmFnbWVudChodG1sLCBwYXJlbnRJZCl7XG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFxuICAgIHJldHVybiB0aGlzLmZpbmRQaHhDaGlsZHJlbih0ZW1wbGF0ZS5jb250ZW50LCBwYXJlbnRJZClcbiAgfSxcblxuICBpc0lnbm9yZWQoZWwsIHBoeFVwZGF0ZSl7XG4gICAgcmV0dXJuIChlbC5nZXRBdHRyaWJ1dGUocGh4VXBkYXRlKSB8fCBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC11cGRhdGVcIikpID09PSBcImlnbm9yZVwiXG4gIH0sXG5cbiAgaXNQaHhVcGRhdGUoZWwsIHBoeFVwZGF0ZSwgdXBkYXRlVHlwZXMpe1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUgJiYgdXBkYXRlVHlwZXMuaW5kZXhPZihlbC5nZXRBdHRyaWJ1dGUocGh4VXBkYXRlKSkgPj0gMFxuICB9LFxuXG4gIGZpbmRQaHhTdGlja3koZWwpeyByZXR1cm4gdGhpcy5hbGwoZWwsIGBbJHtQSFhfU1RJQ0tZfV1gKSB9LFxuXG4gIGZpbmRQaHhDaGlsZHJlbihlbCwgcGFyZW50SWQpe1xuICAgIHJldHVybiB0aGlzLmFsbChlbCwgYCR7UEhYX1ZJRVdfU0VMRUNUT1J9WyR7UEhYX1BBUkVOVF9JRH09XCIke3BhcmVudElkfVwiXWApXG4gIH0sXG5cbiAgZmluZFBhcmVudENJRHMobm9kZSwgY2lkcyl7XG4gICAgbGV0IGluaXRpYWwgPSBuZXcgU2V0KGNpZHMpXG4gICAgbGV0IHBhcmVudENpZHMgPVxuICAgICAgY2lkcy5yZWR1Y2UoKGFjYywgY2lkKSA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RvciA9IGBbJHtQSFhfQ09NUE9ORU5UfT1cIiR7Y2lkfVwiXSBbJHtQSFhfQ09NUE9ORU5UfV1gXG5cbiAgICAgICAgdGhpcy5maWx0ZXJXaXRoaW5TYW1lTGl2ZVZpZXcodGhpcy5hbGwobm9kZSwgc2VsZWN0b3IpLCBub2RlKVxuICAgICAgICAgIC5tYXAoZWwgPT4gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFBIWF9DT01QT05FTlQpKSlcbiAgICAgICAgICAuZm9yRWFjaChjaGlsZENJRCA9PiBhY2MuZGVsZXRlKGNoaWxkQ0lEKSlcblxuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9LCBpbml0aWFsKVxuXG4gICAgcmV0dXJuIHBhcmVudENpZHMuc2l6ZSA9PT0gMCA/IG5ldyBTZXQoY2lkcykgOiBwYXJlbnRDaWRzXG4gIH0sXG5cbiAgZmlsdGVyV2l0aGluU2FtZUxpdmVWaWV3KG5vZGVzLCBwYXJlbnQpe1xuICAgIGlmKHBhcmVudC5xdWVyeVNlbGVjdG9yKFBIWF9WSUVXX1NFTEVDVE9SKSl7XG4gICAgICByZXR1cm4gbm9kZXMuZmlsdGVyKGVsID0+IHRoaXMud2l0aGluU2FtZUxpdmVWaWV3KGVsLCBwYXJlbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZXNcbiAgICB9XG4gIH0sXG5cbiAgd2l0aGluU2FtZUxpdmVWaWV3KG5vZGUsIHBhcmVudCl7XG4gICAgd2hpbGUobm9kZSA9IG5vZGUucGFyZW50Tm9kZSl7XG4gICAgICBpZihub2RlLmlzU2FtZU5vZGUocGFyZW50KSl7IHJldHVybiB0cnVlIH1cbiAgICAgIGlmKG5vZGUuZ2V0QXR0cmlidXRlKFBIWF9TRVNTSU9OKSAhPT0gbnVsbCl7IHJldHVybiBmYWxzZSB9XG4gICAgfVxuICB9LFxuXG4gIHByaXZhdGUoZWwsIGtleSl7IHJldHVybiBlbFtQSFhfUFJJVkFURV0gJiYgZWxbUEhYX1BSSVZBVEVdW2tleV0gfSxcblxuICBkZWxldGVQcml2YXRlKGVsLCBrZXkpeyBlbFtQSFhfUFJJVkFURV0gJiYgZGVsZXRlIChlbFtQSFhfUFJJVkFURV1ba2V5XSkgfSxcblxuICBwdXRQcml2YXRlKGVsLCBrZXksIHZhbHVlKXtcbiAgICBpZighZWxbUEhYX1BSSVZBVEVdKXsgZWxbUEhYX1BSSVZBVEVdID0ge30gfVxuICAgIGVsW1BIWF9QUklWQVRFXVtrZXldID0gdmFsdWVcbiAgfSxcblxuICB1cGRhdGVQcml2YXRlKGVsLCBrZXksIGRlZmF1bHRWYWwsIHVwZGF0ZUZ1bmMpe1xuICAgIGxldCBleGlzdGluZyA9IHRoaXMucHJpdmF0ZShlbCwga2V5KVxuICAgIGlmKGV4aXN0aW5nID09PSB1bmRlZmluZWQpe1xuICAgICAgdGhpcy5wdXRQcml2YXRlKGVsLCBrZXksIHVwZGF0ZUZ1bmMoZGVmYXVsdFZhbCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHV0UHJpdmF0ZShlbCwga2V5LCB1cGRhdGVGdW5jKGV4aXN0aW5nKSlcbiAgICB9XG4gIH0sXG5cbiAgY29weVByaXZhdGVzKHRhcmdldCwgc291cmNlKXtcbiAgICBpZihzb3VyY2VbUEhYX1BSSVZBVEVdKXtcbiAgICAgIHRhcmdldFtQSFhfUFJJVkFURV0gPSBzb3VyY2VbUEhYX1BSSVZBVEVdXG4gICAgfVxuICB9LFxuXG4gIHB1dFRpdGxlKHN0cil7XG4gICAgbGV0IHRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIilcbiAgICBpZih0aXRsZUVsKXtcbiAgICAgIGxldCB7cHJlZml4LCBzdWZmaXh9ID0gdGl0bGVFbC5kYXRhc2V0XG4gICAgICBkb2N1bWVudC50aXRsZSA9IGAke3ByZWZpeCB8fCBcIlwifSR7c3RyfSR7c3VmZml4IHx8IFwiXCJ9YFxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IHN0clxuICAgIH1cbiAgfSxcblxuICBkZWJvdW5jZShlbCwgZXZlbnQsIHBoeERlYm91bmNlLCBkZWZhdWx0RGVib3VuY2UsIHBoeFRocm90dGxlLCBkZWZhdWx0VGhyb3R0bGUsIGFzeW5jRmlsdGVyLCBjYWxsYmFjayl7XG4gICAgbGV0IGRlYm91bmNlID0gZWwuZ2V0QXR0cmlidXRlKHBoeERlYm91bmNlKVxuICAgIGxldCB0aHJvdHRsZSA9IGVsLmdldEF0dHJpYnV0ZShwaHhUaHJvdHRsZSlcblxuICAgIGlmKGRlYm91bmNlID09PSBcIlwiKXsgZGVib3VuY2UgPSBkZWZhdWx0RGVib3VuY2UgfVxuICAgIGlmKHRocm90dGxlID09PSBcIlwiKXsgdGhyb3R0bGUgPSBkZWZhdWx0VGhyb3R0bGUgfVxuICAgIGxldCB2YWx1ZSA9IGRlYm91bmNlIHx8IHRocm90dGxlXG4gICAgc3dpdGNoKHZhbHVlKXtcbiAgICAgIGNhc2UgbnVsbDogcmV0dXJuIGNhbGxiYWNrKClcblxuICAgICAgY2FzZSBcImJsdXJcIjpcbiAgICAgICAgaWYodGhpcy5vbmNlKGVsLCBcImRlYm91bmNlLWJsdXJcIikpe1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IGNhbGxiYWNrKCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxldCB0aW1lb3V0ID0gcGFyc2VJbnQodmFsdWUpXG4gICAgICAgIGxldCB0cmlnZ2VyID0gKCkgPT4gdGhyb3R0bGUgPyB0aGlzLmRlbGV0ZVByaXZhdGUoZWwsIFRIUk9UVExFRCkgOiBjYWxsYmFjaygpXG4gICAgICAgIGxldCBjdXJyZW50Q3ljbGUgPSB0aGlzLmluY0N5Y2xlKGVsLCBERUJPVU5DRV9UUklHR0VSLCB0cmlnZ2VyKVxuICAgICAgICBpZihpc05hTih0aW1lb3V0KSl7IHJldHVybiBsb2dFcnJvcihgaW52YWxpZCB0aHJvdHRsZS9kZWJvdW5jZSB2YWx1ZTogJHt2YWx1ZX1gKSB9XG4gICAgICAgIGlmKHRocm90dGxlKXtcbiAgICAgICAgICBsZXQgbmV3S2V5RG93biA9IGZhbHNlXG4gICAgICAgICAgaWYoZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCIpe1xuICAgICAgICAgICAgbGV0IHByZXZLZXkgPSB0aGlzLnByaXZhdGUoZWwsIERFQk9VTkNFX1BSRVZfS0VZKVxuICAgICAgICAgICAgdGhpcy5wdXRQcml2YXRlKGVsLCBERUJPVU5DRV9QUkVWX0tFWSwgZXZlbnQua2V5KVxuICAgICAgICAgICAgbmV3S2V5RG93biA9IHByZXZLZXkgIT09IGV2ZW50LmtleVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFuZXdLZXlEb3duICYmIHRoaXMucHJpdmF0ZShlbCwgVEhST1RUTEVEKSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgICAgdGhpcy5wdXRQcml2YXRlKGVsLCBUSFJPVFRMRUQsIHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYoYXN5bmNGaWx0ZXIoKSl7IHRoaXMudHJpZ2dlckN5Y2xlKGVsLCBERUJPVU5DRV9UUklHR0VSKSB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKGFzeW5jRmlsdGVyKCkpeyB0aGlzLnRyaWdnZXJDeWNsZShlbCwgREVCT1VOQ0VfVFJJR0dFUiwgY3VycmVudEN5Y2xlKSB9XG4gICAgICAgICAgfSwgdGltZW91dClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3JtID0gZWwuZm9ybVxuICAgICAgICBpZihmb3JtICYmIHRoaXMub25jZShmb3JtLCBcImJpbmQtZGVib3VuY2VcIikpe1xuICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKChuZXcgRm9ybURhdGEoZm9ybSkpLmVudHJpZXMoKSwgKFtuYW1lXSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtuYW1lfVwiXWApXG4gICAgICAgICAgICAgIHRoaXMuaW5jQ3ljbGUoaW5wdXQsIERFQk9VTkNFX1RSSUdHRVIpXG4gICAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJpdmF0ZShpbnB1dCwgVEhST1RUTEVEKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMub25jZShlbCwgXCJiaW5kLWRlYm91bmNlXCIpKXtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB0aGlzLnRyaWdnZXJDeWNsZShlbCwgREVCT1VOQ0VfVFJJR0dFUikpXG4gICAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdHJpZ2dlckN5Y2xlKGVsLCBrZXksIGN1cnJlbnRDeWNsZSl7XG4gICAgbGV0IFtjeWNsZSwgdHJpZ2dlcl0gPSB0aGlzLnByaXZhdGUoZWwsIGtleSlcbiAgICBpZighY3VycmVudEN5Y2xlKXsgY3VycmVudEN5Y2xlID0gY3ljbGUgfVxuICAgIGlmKGN1cnJlbnRDeWNsZSA9PT0gY3ljbGUpe1xuICAgICAgdGhpcy5pbmNDeWNsZShlbCwga2V5KVxuICAgICAgdHJpZ2dlcigpXG4gICAgfVxuICB9LFxuXG4gIG9uY2UoZWwsIGtleSl7XG4gICAgaWYodGhpcy5wcml2YXRlKGVsLCBrZXkpID09PSB0cnVlKXsgcmV0dXJuIGZhbHNlIH1cbiAgICB0aGlzLnB1dFByaXZhdGUoZWwsIGtleSwgdHJ1ZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9LFxuXG4gIGluY0N5Y2xlKGVsLCBrZXksIHRyaWdnZXIgPSBmdW5jdGlvbiAoKXsgfSl7XG4gICAgbGV0IFtjdXJyZW50Q3ljbGVdID0gdGhpcy5wcml2YXRlKGVsLCBrZXkpIHx8IFswLCB0cmlnZ2VyXVxuICAgIGN1cnJlbnRDeWNsZSsrXG4gICAgdGhpcy5wdXRQcml2YXRlKGVsLCBrZXksIFtjdXJyZW50Q3ljbGUsIHRyaWdnZXJdKVxuICAgIHJldHVybiBjdXJyZW50Q3ljbGVcbiAgfSxcblxuICBtYXliZUFkZFByaXZhdGVIb29rcyhlbCwgcGh4Vmlld3BvcnRUb3AsIHBoeFZpZXdwb3J0Qm90dG9tKXtcbiAgICBpZihlbC5oYXNBdHRyaWJ1dGUgJiYgKGVsLmhhc0F0dHJpYnV0ZShwaHhWaWV3cG9ydFRvcCkgfHwgZWwuaGFzQXR0cmlidXRlKHBoeFZpZXdwb3J0Qm90dG9tKSkpe1xuICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1waHgtaG9va1wiLCBcIlBob2VuaXguSW5maW5pdGVTY3JvbGxcIilcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVIaWRlRmVlZGJhY2soY29udGFpbmVyLCBpbnB1dCwgcGh4RmVlZGJhY2tGb3Ipe1xuICAgIGlmKCEodGhpcy5wcml2YXRlKGlucHV0LCBQSFhfSEFTX0ZPQ1VTRUQpIHx8IHRoaXMucHJpdmF0ZShpbnB1dCwgUEhYX0hBU19TVUJNSVRURUQpKSl7XG4gICAgICBsZXQgZmVlZGJhY2tzID0gW2lucHV0Lm5hbWVdXG4gICAgICBpZihpbnB1dC5uYW1lLmVuZHNXaXRoKFwiW11cIikpeyBmZWVkYmFja3MucHVzaChpbnB1dC5uYW1lLnNsaWNlKDAsIC0yKSkgfVxuICAgICAgbGV0IHNlbGVjdG9yID0gZmVlZGJhY2tzLm1hcChmID0+IGBbJHtwaHhGZWVkYmFja0Zvcn09XCIke2Z9XCJdYCkuam9pbihcIiwgXCIpXG4gICAgICBET00uYWxsKGNvbnRhaW5lciwgc2VsZWN0b3IsIGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoUEhYX05PX0ZFRURCQUNLX0NMQVNTKSlcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXRGb3JtKGZvcm0sIHBoeEZlZWRiYWNrRm9yKXtcbiAgICBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgbGV0IHF1ZXJ5ID0gYFske3BoeEZlZWRiYWNrRm9yfT1cIiR7aW5wdXQuaWR9XCJdLFxuICAgICAgICAgICAgICAgICAgIFske3BoeEZlZWRiYWNrRm9yfT1cIiR7aW5wdXQubmFtZX1cIl0sXG4gICAgICAgICAgICAgICAgICAgWyR7cGh4RmVlZGJhY2tGb3J9PVwiJHtpbnB1dC5uYW1lLnJlcGxhY2UoL1xcW1xcXSQvLCBcIlwiKX1cIl1gXG5cbiAgICAgIHRoaXMuZGVsZXRlUHJpdmF0ZShpbnB1dCwgUEhYX0hBU19GT0NVU0VEKVxuICAgICAgdGhpcy5kZWxldGVQcml2YXRlKGlucHV0LCBQSFhfSEFTX1NVQk1JVFRFRClcbiAgICAgIHRoaXMuYWxsKGRvY3VtZW50LCBxdWVyeSwgZmVlZGJhY2tFbCA9PiB7XG4gICAgICAgIGZlZWRiYWNrRWwuY2xhc3NMaXN0LmFkZChQSFhfTk9fRkVFREJBQ0tfQ0xBU1MpXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgc2hvd0Vycm9yKGlucHV0RWwsIHBoeEZlZWRiYWNrRm9yKXtcbiAgICBpZihpbnB1dEVsLmlkIHx8IGlucHV0RWwubmFtZSl7XG4gICAgICB0aGlzLmFsbChpbnB1dEVsLmZvcm0sIGBbJHtwaHhGZWVkYmFja0Zvcn09XCIke2lucHV0RWwuaWR9XCJdLCBbJHtwaHhGZWVkYmFja0Zvcn09XCIke2lucHV0RWwubmFtZX1cIl1gLCAoZWwpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgUEhYX05PX0ZFRURCQUNLX0NMQVNTKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgaXNQaHhDaGlsZChub2RlKXtcbiAgICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoUEhYX1BBUkVOVF9JRClcbiAgfSxcblxuICBpc1BoeFN0aWNreShub2RlKXtcbiAgICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoUEhYX1NUSUNLWSkgIT09IG51bGxcbiAgfSxcblxuICBmaXJzdFBoeENoaWxkKGVsKXtcbiAgICByZXR1cm4gdGhpcy5pc1BoeENoaWxkKGVsKSA/IGVsIDogdGhpcy5hbGwoZWwsIGBbJHtQSFhfUEFSRU5UX0lEfV1gKVswXVxuICB9LFxuXG4gIGRpc3BhdGNoRXZlbnQodGFyZ2V0LCBuYW1lLCBvcHRzID0ge30pe1xuICAgIGxldCBidWJibGVzID0gb3B0cy5idWJibGVzID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFvcHRzLmJ1YmJsZXNcbiAgICBsZXQgZXZlbnRPcHRzID0ge2J1YmJsZXM6IGJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogb3B0cy5kZXRhaWwgfHwge319XG4gICAgbGV0IGV2ZW50ID0gbmFtZSA9PT0gXCJjbGlja1wiID8gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCBldmVudE9wdHMpIDogbmV3IEN1c3RvbUV2ZW50KG5hbWUsIGV2ZW50T3B0cylcbiAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfSxcblxuICBjbG9uZU5vZGUobm9kZSwgaHRtbCl7XG4gICAgaWYodHlwZW9mIChodG1sKSA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNsb25lZCA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKVxuICAgICAgY2xvbmVkLmlubmVySFRNTCA9IGh0bWxcbiAgICAgIHJldHVybiBjbG9uZWRcbiAgICB9XG4gIH0sXG5cbiAgbWVyZ2VBdHRycyh0YXJnZXQsIHNvdXJjZSwgb3B0cyA9IHt9KXtcbiAgICBsZXQgZXhjbHVkZSA9IG9wdHMuZXhjbHVkZSB8fCBbXVxuICAgIGxldCBpc0lnbm9yZWQgPSBvcHRzLmlzSWdub3JlZFxuICAgIGxldCBzb3VyY2VBdHRycyA9IHNvdXJjZS5hdHRyaWJ1dGVzXG4gICAgZm9yKGxldCBpID0gc291cmNlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgbGV0IG5hbWUgPSBzb3VyY2VBdHRyc1tpXS5uYW1lXG4gICAgICBpZihleGNsdWRlLmluZGV4T2YobmFtZSkgPCAwKXsgdGFyZ2V0LnNldEF0dHJpYnV0ZShuYW1lLCBzb3VyY2UuZ2V0QXR0cmlidXRlKG5hbWUpKSB9XG4gICAgfVxuXG4gICAgbGV0IHRhcmdldEF0dHJzID0gdGFyZ2V0LmF0dHJpYnV0ZXNcbiAgICBmb3IobGV0IGkgPSB0YXJnZXRBdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBsZXQgbmFtZSA9IHRhcmdldEF0dHJzW2ldLm5hbWVcbiAgICAgIGlmKGlzSWdub3JlZCl7XG4gICAgICAgIGlmKG5hbWUuc3RhcnRzV2l0aChcImRhdGEtXCIpICYmICFzb3VyY2UuaGFzQXR0cmlidXRlKG5hbWUpKXsgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKSB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZighc291cmNlLmhhc0F0dHJpYnV0ZShuYW1lKSl7IHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUobmFtZSkgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBtZXJnZUZvY3VzZWRJbnB1dCh0YXJnZXQsIHNvdXJjZSl7XG4gICAgLy8gc2tpcCBzZWxlY3RzIGJlY2F1c2UgRkYgd2lsbCByZXNldCBoaWdobGlnaHRlZCBpbmRleCBmb3IgYW55IHNldEF0dHJpYnV0ZVxuICAgIGlmKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKXsgRE9NLm1lcmdlQXR0cnModGFyZ2V0LCBzb3VyY2UsIHtleGNsdWRlOiBbXCJ2YWx1ZVwiXX0pIH1cbiAgICBpZihzb3VyY2UucmVhZE9ubHkpe1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKVxuICAgIH1cbiAgfSxcblxuICBoYXNTZWxlY3Rpb25SYW5nZShlbCl7XG4gICAgcmV0dXJuIGVsLnNldFNlbGVjdGlvblJhbmdlICYmIChlbC50eXBlID09PSBcInRleHRcIiB8fCBlbC50eXBlID09PSBcInRleHRhcmVhXCIpXG4gIH0sXG5cbiAgcmVzdG9yZUZvY3VzKGZvY3VzZWQsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpe1xuICAgIGlmKCFET00uaXNUZXh0dWFsSW5wdXQoZm9jdXNlZCkpeyByZXR1cm4gfVxuICAgIGxldCB3YXNGb2N1c2VkID0gZm9jdXNlZC5tYXRjaGVzKFwiOmZvY3VzXCIpXG4gICAgaWYoZm9jdXNlZC5yZWFkT25seSl7IGZvY3VzZWQuYmx1cigpIH1cbiAgICBpZighd2FzRm9jdXNlZCl7IGZvY3VzZWQuZm9jdXMoKSB9XG4gICAgaWYodGhpcy5oYXNTZWxlY3Rpb25SYW5nZShmb2N1c2VkKSl7XG4gICAgICBmb2N1c2VkLnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpXG4gICAgfVxuICB9LFxuXG4gIGlzRm9ybUlucHV0KGVsKXsgcmV0dXJuIC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KGVsLnRhZ05hbWUpICYmIGVsLnR5cGUgIT09IFwiYnV0dG9uXCIgfSxcblxuICBzeW5jQXR0cnNUb1Byb3BzKGVsKXtcbiAgICBpZihlbCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgQ0hFQ0tBQkxFX0lOUFVUUy5pbmRleE9mKGVsLnR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSkgPj0gMCl7XG4gICAgICBlbC5jaGVja2VkID0gZWwuZ2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiKSAhPT0gbnVsbFxuICAgIH1cbiAgfSxcblxuICBpc1RleHR1YWxJbnB1dChlbCl7IHJldHVybiBGT0NVU0FCTEVfSU5QVVRTLmluZGV4T2YoZWwudHlwZSkgPj0gMCB9LFxuXG4gIGlzTm93VHJpZ2dlckZvcm1FeHRlcm5hbChlbCwgcGh4VHJpZ2dlckV4dGVybmFsKXtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlICYmIGVsLmdldEF0dHJpYnV0ZShwaHhUcmlnZ2VyRXh0ZXJuYWwpICE9PSBudWxsXG4gIH0sXG5cbiAgc3luY1BlbmRpbmdSZWYoZnJvbUVsLCB0b0VsLCBkaXNhYmxlV2l0aCl7XG4gICAgbGV0IHJlZiA9IGZyb21FbC5nZXRBdHRyaWJ1dGUoUEhYX1JFRilcbiAgICBpZihyZWYgPT09IG51bGwpeyByZXR1cm4gdHJ1ZSB9XG4gICAgbGV0IHJlZlNyYyA9IGZyb21FbC5nZXRBdHRyaWJ1dGUoUEhYX1JFRl9TUkMpXG5cbiAgICBpZihET00uaXNGb3JtSW5wdXQoZnJvbUVsKSB8fCBmcm9tRWwuZ2V0QXR0cmlidXRlKGRpc2FibGVXaXRoKSAhPT0gbnVsbCl7XG4gICAgICBpZihET00uaXNVcGxvYWRJbnB1dChmcm9tRWwpKXsgRE9NLm1lcmdlQXR0cnMoZnJvbUVsLCB0b0VsLCB7aXNJZ25vcmVkOiB0cnVlfSkgfVxuICAgICAgRE9NLnB1dFByaXZhdGUoZnJvbUVsLCBQSFhfUkVGLCB0b0VsKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIFBIWF9FVkVOVF9DTEFTU0VTLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgZnJvbUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpICYmIHRvRWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9KVxuICAgICAgdG9FbC5zZXRBdHRyaWJ1dGUoUEhYX1JFRiwgcmVmKVxuICAgICAgdG9FbC5zZXRBdHRyaWJ1dGUoUEhYX1JFRl9TUkMsIHJlZlNyYylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNsZWFuQ2hpbGROb2Rlcyhjb250YWluZXIsIHBoeFVwZGF0ZSl7XG4gICAgaWYoRE9NLmlzUGh4VXBkYXRlKGNvbnRhaW5lciwgcGh4VXBkYXRlLCBbXCJhcHBlbmRcIiwgXCJwcmVwZW5kXCJdKSl7XG4gICAgICBsZXQgdG9SZW1vdmUgPSBbXVxuICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICBpZighY2hpbGROb2RlLmlkKXtcbiAgICAgICAgICAvLyBTa2lwIHdhcm5pbmcgaWYgaXQncyBhbiBlbXB0eSB0ZXh0IG5vZGUgKGUuZy4gYSBuZXctbGluZSlcbiAgICAgICAgICBsZXQgaXNFbXB0eVRleHROb2RlID0gY2hpbGROb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBjaGlsZE5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gXCJcIlxuICAgICAgICAgIGlmKCFpc0VtcHR5VGV4dE5vZGUpe1xuICAgICAgICAgICAgbG9nRXJyb3IoXCJvbmx5IEhUTUwgZWxlbWVudCB0YWdzIHdpdGggYW4gaWQgYXJlIGFsbG93ZWQgaW5zaWRlIGNvbnRhaW5lcnMgd2l0aCBwaHgtdXBkYXRlLlxcblxcblwiICtcbiAgICAgICAgICAgICAgYHJlbW92aW5nIGlsbGVnYWwgbm9kZTogXCIkeyhjaGlsZE5vZGUub3V0ZXJIVE1MIHx8IGNoaWxkTm9kZS5ub2RlVmFsdWUpLnRyaW0oKX1cIlxcblxcbmApXG4gICAgICAgICAgfVxuICAgICAgICAgIHRvUmVtb3ZlLnB1c2goY2hpbGROb2RlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdG9SZW1vdmUuZm9yRWFjaChjaGlsZE5vZGUgPT4gY2hpbGROb2RlLnJlbW92ZSgpKVxuICAgIH1cbiAgfSxcblxuICByZXBsYWNlUm9vdENvbnRhaW5lcihjb250YWluZXIsIHRhZ05hbWUsIGF0dHJzKXtcbiAgICBsZXQgcmV0YWluZWRBdHRycyA9IG5ldyBTZXQoW1wiaWRcIiwgUEhYX1NFU1NJT04sIFBIWF9TVEFUSUMsIFBIWF9NQUlOLCBQSFhfUk9PVF9JRF0pXG4gICAgaWYoY29udGFpbmVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpKXtcbiAgICAgIEFycmF5LmZyb20oY29udGFpbmVyLmF0dHJpYnV0ZXMpXG4gICAgICAgIC5maWx0ZXIoYXR0ciA9PiAhcmV0YWluZWRBdHRycy5oYXMoYXR0ci5uYW1lLnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICAuZm9yRWFjaChhdHRyID0+IGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKSlcblxuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpXG4gICAgICAgIC5maWx0ZXIobmFtZSA9PiAhcmV0YWluZWRBdHRycy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgLmZvckVhY2goYXR0ciA9PiBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJzW2F0dHJdKSlcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lclxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG4gICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChhdHRyID0+IG5ld0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pKVxuICAgICAgcmV0YWluZWRBdHRycy5mb3JFYWNoKGF0dHIgPT4gbmV3Q29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyLCBjb250YWluZXIuZ2V0QXR0cmlidXRlKGF0dHIpKSlcbiAgICAgIG5ld0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb250YWluZXIuaW5uZXJIVE1MXG4gICAgICBjb250YWluZXIucmVwbGFjZVdpdGgobmV3Q29udGFpbmVyKVxuICAgICAgcmV0dXJuIG5ld0NvbnRhaW5lclxuICAgIH1cbiAgfSxcblxuICBnZXRTdGlja3koZWwsIG5hbWUsIGRlZmF1bHRWYWwpe1xuICAgIGxldCBvcCA9IChET00ucHJpdmF0ZShlbCwgXCJzdGlja3lcIikgfHwgW10pLmZpbmQoKFtleGlzdGluZ05hbWUsIF0pID0+IG5hbWUgPT09IGV4aXN0aW5nTmFtZSlcbiAgICBpZihvcCl7XG4gICAgICBsZXQgW19uYW1lLCBfb3AsIHN0YXNoZWRSZXN1bHRdID0gb3BcbiAgICAgIHJldHVybiBzdGFzaGVkUmVzdWx0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0eXBlb2YoZGVmYXVsdFZhbCkgPT09IFwiZnVuY3Rpb25cIiA/IGRlZmF1bHRWYWwoKSA6IGRlZmF1bHRWYWxcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlU3RpY2t5KGVsLCBuYW1lKXtcbiAgICB0aGlzLnVwZGF0ZVByaXZhdGUoZWwsIFwic3RpY2t5XCIsIFtdLCBvcHMgPT4ge1xuICAgICAgcmV0dXJuIG9wcy5maWx0ZXIoKFtleGlzdGluZ05hbWUsIF9dKSA9PiBleGlzdGluZ05hbWUgIT09IG5hbWUpXG4gICAgfSlcbiAgfSxcblxuICBwdXRTdGlja3koZWwsIG5hbWUsIG9wKXtcbiAgICBsZXQgc3Rhc2hlZFJlc3VsdCA9IG9wKGVsKVxuICAgIHRoaXMudXBkYXRlUHJpdmF0ZShlbCwgXCJzdGlja3lcIiwgW10sIG9wcyA9PiB7XG4gICAgICBsZXQgZXhpc3RpbmdJbmRleCA9IG9wcy5maW5kSW5kZXgoKFtleGlzdGluZ05hbWUsIF0pID0+IG5hbWUgPT09IGV4aXN0aW5nTmFtZSlcbiAgICAgIGlmKGV4aXN0aW5nSW5kZXggPj0gMCl7XG4gICAgICAgIG9wc1tleGlzdGluZ0luZGV4XSA9IFtuYW1lLCBvcCwgc3Rhc2hlZFJlc3VsdF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wcy5wdXNoKFtuYW1lLCBvcCwgc3Rhc2hlZFJlc3VsdF0pXG4gICAgICB9XG4gICAgICByZXR1cm4gb3BzXG4gICAgfSlcbiAgfSxcblxuICBhcHBseVN0aWNreU9wZXJhdGlvbnMoZWwpe1xuICAgIGxldCBvcHMgPSBET00ucHJpdmF0ZShlbCwgXCJzdGlja3lcIilcbiAgICBpZighb3BzKXsgcmV0dXJuIH1cblxuICAgIG9wcy5mb3JFYWNoKChbbmFtZSwgb3AsIF9zdGFzaGVkXSkgPT4gdGhpcy5wdXRTdGlja3koZWwsIG5hbWUsIG9wKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET01cbiIsICJpbXBvcnQge1xuICBQSFhfQUNUSVZFX0VOVFJZX1JFRlMsXG4gIFBIWF9MSVZFX0ZJTEVfVVBEQVRFRCxcbiAgUEhYX1BSRUZMSUdIVEVEX1JFRlNcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuaW1wb3J0IHtcbiAgY2hhbm5lbFVwbG9hZGVyLFxuICBsb2dFcnJvclxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCBMaXZlVXBsb2FkZXIgZnJvbSBcIi4vbGl2ZV91cGxvYWRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEVudHJ5IHtcbiAgc3RhdGljIGlzQWN0aXZlKGZpbGVFbCwgZmlsZSl7XG4gICAgbGV0IGlzTmV3ID0gZmlsZS5fcGh4UmVmID09PSB1bmRlZmluZWRcbiAgICBsZXQgYWN0aXZlUmVmcyA9IGZpbGVFbC5nZXRBdHRyaWJ1dGUoUEhYX0FDVElWRV9FTlRSWV9SRUZTKS5zcGxpdChcIixcIilcbiAgICBsZXQgaXNBY3RpdmUgPSBhY3RpdmVSZWZzLmluZGV4T2YoTGl2ZVVwbG9hZGVyLmdlbkZpbGVSZWYoZmlsZSkpID49IDBcbiAgICByZXR1cm4gZmlsZS5zaXplID4gMCAmJiAoaXNOZXcgfHwgaXNBY3RpdmUpXG4gIH1cblxuICBzdGF0aWMgaXNQcmVmbGlnaHRlZChmaWxlRWwsIGZpbGUpe1xuICAgIGxldCBwcmVmbGlnaHRlZFJlZnMgPSBmaWxlRWwuZ2V0QXR0cmlidXRlKFBIWF9QUkVGTElHSFRFRF9SRUZTKS5zcGxpdChcIixcIilcbiAgICBsZXQgaXNQcmVmbGlnaHRlZCA9IHByZWZsaWdodGVkUmVmcy5pbmRleE9mKExpdmVVcGxvYWRlci5nZW5GaWxlUmVmKGZpbGUpKSA+PSAwXG4gICAgcmV0dXJuIGlzUHJlZmxpZ2h0ZWQgJiYgdGhpcy5pc0FjdGl2ZShmaWxlRWwsIGZpbGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihmaWxlRWwsIGZpbGUsIHZpZXcpe1xuICAgIHRoaXMucmVmID0gTGl2ZVVwbG9hZGVyLmdlbkZpbGVSZWYoZmlsZSlcbiAgICB0aGlzLmZpbGVFbCA9IGZpbGVFbFxuICAgIHRoaXMuZmlsZSA9IGZpbGVcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5tZXRhID0gbnVsbFxuICAgIHRoaXMuX2lzQ2FuY2VsbGVkID0gZmFsc2VcbiAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZVxuICAgIHRoaXMuX3Byb2dyZXNzID0gMFxuICAgIHRoaXMuX2xhc3RQcm9ncmVzc1NlbnQgPSAtMVxuICAgIHRoaXMuX29uRG9uZSA9IGZ1bmN0aW9uICgpeyB9XG4gICAgdGhpcy5fb25FbFVwZGF0ZWQgPSB0aGlzLm9uRWxVcGRhdGVkLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbGVFbC5hZGRFdmVudExpc3RlbmVyKFBIWF9MSVZFX0ZJTEVfVVBEQVRFRCwgdGhpcy5fb25FbFVwZGF0ZWQpXG4gIH1cblxuICBtZXRhZGF0YSgpeyByZXR1cm4gdGhpcy5tZXRhIH1cblxuICBwcm9ncmVzcyhwcm9ncmVzcyl7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKHByb2dyZXNzKVxuICAgIGlmKHRoaXMuX3Byb2dyZXNzID4gdGhpcy5fbGFzdFByb2dyZXNzU2VudCl7XG4gICAgICBpZih0aGlzLl9wcm9ncmVzcyA+PSAxMDApe1xuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IDEwMFxuICAgICAgICB0aGlzLl9sYXN0UHJvZ3Jlc3NTZW50ID0gMTAwXG4gICAgICAgIHRoaXMuX2lzRG9uZSA9IHRydWVcbiAgICAgICAgdGhpcy52aWV3LnB1c2hGaWxlUHJvZ3Jlc3ModGhpcy5maWxlRWwsIHRoaXMucmVmLCAxMDAsICgpID0+IHtcbiAgICAgICAgICBMaXZlVXBsb2FkZXIudW50cmFja0ZpbGUodGhpcy5maWxlRWwsIHRoaXMuZmlsZSlcbiAgICAgICAgICB0aGlzLl9vbkRvbmUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGFzdFByb2dyZXNzU2VudCA9IHRoaXMuX3Byb2dyZXNzXG4gICAgICAgIHRoaXMudmlldy5wdXNoRmlsZVByb2dyZXNzKHRoaXMuZmlsZUVsLCB0aGlzLnJlZiwgdGhpcy5fcHJvZ3Jlc3MpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgdGhpcy5faXNDYW5jZWxsZWQgPSB0cnVlXG4gICAgdGhpcy5faXNEb25lID0gdHJ1ZVxuICAgIHRoaXMuX29uRG9uZSgpXG4gIH1cblxuICBpc0RvbmUoKXsgcmV0dXJuIHRoaXMuX2lzRG9uZSB9XG5cbiAgZXJyb3IocmVhc29uID0gXCJmYWlsZWRcIil7XG4gICAgdGhpcy5maWxlRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihQSFhfTElWRV9GSUxFX1VQREFURUQsIHRoaXMuX29uRWxVcGRhdGVkKVxuICAgIHRoaXMudmlldy5wdXNoRmlsZVByb2dyZXNzKHRoaXMuZmlsZUVsLCB0aGlzLnJlZiwge2Vycm9yOiByZWFzb259KVxuICAgIExpdmVVcGxvYWRlci5jbGVhckZpbGVzKHRoaXMuZmlsZUVsKVxuICB9XG5cbiAgLy9wcml2YXRlXG5cbiAgb25Eb25lKGNhbGxiYWNrKXtcbiAgICB0aGlzLl9vbkRvbmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZpbGVFbC5yZW1vdmVFdmVudExpc3RlbmVyKFBIWF9MSVZFX0ZJTEVfVVBEQVRFRCwgdGhpcy5fb25FbFVwZGF0ZWQpXG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25FbFVwZGF0ZWQoKXtcbiAgICBsZXQgYWN0aXZlUmVmcyA9IHRoaXMuZmlsZUVsLmdldEF0dHJpYnV0ZShQSFhfQUNUSVZFX0VOVFJZX1JFRlMpLnNwbGl0KFwiLFwiKVxuICAgIGlmKGFjdGl2ZVJlZnMuaW5kZXhPZih0aGlzLnJlZikgPT09IC0xKXsgdGhpcy5jYW5jZWwoKSB9XG4gIH1cblxuICB0b1ByZWZsaWdodFBheWxvYWQoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdF9tb2RpZmllZDogdGhpcy5maWxlLmxhc3RNb2RpZmllZCxcbiAgICAgIG5hbWU6IHRoaXMuZmlsZS5uYW1lLFxuICAgICAgcmVsYXRpdmVfcGF0aDogdGhpcy5maWxlLndlYmtpdFJlbGF0aXZlUGF0aCxcbiAgICAgIHNpemU6IHRoaXMuZmlsZS5zaXplLFxuICAgICAgdHlwZTogdGhpcy5maWxlLnR5cGUsXG4gICAgICByZWY6IHRoaXMucmVmXG4gICAgfVxuICB9XG5cbiAgdXBsb2FkZXIodXBsb2FkZXJzKXtcbiAgICBpZih0aGlzLm1ldGEudXBsb2FkZXIpe1xuICAgICAgbGV0IGNhbGxiYWNrID0gdXBsb2FkZXJzW3RoaXMubWV0YS51cGxvYWRlcl0gfHwgbG9nRXJyb3IoYG5vIHVwbG9hZGVyIGNvbmZpZ3VyZWQgZm9yICR7dGhpcy5tZXRhLnVwbG9hZGVyfWApXG4gICAgICByZXR1cm4ge25hbWU6IHRoaXMubWV0YS51cGxvYWRlciwgY2FsbGJhY2s6IGNhbGxiYWNrfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge25hbWU6IFwiY2hhbm5lbFwiLCBjYWxsYmFjazogY2hhbm5lbFVwbG9hZGVyfVxuICAgIH1cbiAgfVxuXG4gIHppcFBvc3RGbGlnaHQocmVzcCl7XG4gICAgdGhpcy5tZXRhID0gcmVzcC5lbnRyaWVzW3RoaXMucmVmXVxuICAgIGlmKCF0aGlzLm1ldGEpeyBsb2dFcnJvcihgbm8gcHJlZmxpZ2h0IHVwbG9hZCByZXNwb25zZSByZXR1cm5lZCB3aXRoIHJlZiAke3RoaXMucmVmfWAsIHtpbnB1dDogdGhpcy5maWxlRWwsIHJlc3BvbnNlOiByZXNwfSkgfVxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgUEhYX0RPTkVfUkVGUyxcbiAgUEhYX1BSRUZMSUdIVEVEX1JFRlMsXG4gIFBIWF9VUExPQURfUkVGXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCB7XG59IGZyb20gXCIuL3V0aWxzXCJcblxuaW1wb3J0IERPTSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IFVwbG9hZEVudHJ5IGZyb20gXCIuL3VwbG9hZF9lbnRyeVwiXG5cbmxldCBsaXZlVXBsb2FkZXJGaWxlUmVmID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVXBsb2FkZXIge1xuICBzdGF0aWMgZ2VuRmlsZVJlZihmaWxlKXtcbiAgICBsZXQgcmVmID0gZmlsZS5fcGh4UmVmXG4gICAgaWYocmVmICE9PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlLl9waHhSZWYgPSAobGl2ZVVwbG9hZGVyRmlsZVJlZisrKS50b1N0cmluZygpXG4gICAgICByZXR1cm4gZmlsZS5fcGh4UmVmXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEVudHJ5RGF0YVVSTChpbnB1dEVsLCByZWYsIGNhbGxiYWNrKXtcbiAgICBsZXQgZmlsZSA9IHRoaXMuYWN0aXZlRmlsZXMoaW5wdXRFbCkuZmluZChmaWxlID0+IHRoaXMuZ2VuRmlsZVJlZihmaWxlKSA9PT0gcmVmKVxuICAgIGNhbGxiYWNrKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpXG4gIH1cblxuICBzdGF0aWMgaGFzVXBsb2Fkc0luUHJvZ3Jlc3MoZm9ybUVsKXtcbiAgICBsZXQgYWN0aXZlID0gMFxuICAgIERPTS5maW5kVXBsb2FkSW5wdXRzKGZvcm1FbCkuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBpZihpbnB1dC5nZXRBdHRyaWJ1dGUoUEhYX1BSRUZMSUdIVEVEX1JFRlMpICE9PSBpbnB1dC5nZXRBdHRyaWJ1dGUoUEhYX0RPTkVfUkVGUykpe1xuICAgICAgICBhY3RpdmUrK1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFjdGl2ZSA+IDBcbiAgfVxuXG4gIHN0YXRpYyBzZXJpYWxpemVVcGxvYWRzKGlucHV0RWwpe1xuICAgIGxldCBmaWxlcyA9IHRoaXMuYWN0aXZlRmlsZXMoaW5wdXRFbClcbiAgICBsZXQgZmlsZURhdGEgPSB7fVxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBsZXQgZW50cnkgPSB7cGF0aDogaW5wdXRFbC5uYW1lfVxuICAgICAgbGV0IHVwbG9hZFJlZiA9IGlucHV0RWwuZ2V0QXR0cmlidXRlKFBIWF9VUExPQURfUkVGKVxuICAgICAgZmlsZURhdGFbdXBsb2FkUmVmXSA9IGZpbGVEYXRhW3VwbG9hZFJlZl0gfHwgW11cbiAgICAgIGVudHJ5LnJlZiA9IHRoaXMuZ2VuRmlsZVJlZihmaWxlKVxuICAgICAgZW50cnkubGFzdF9tb2RpZmllZCA9IGZpbGUubGFzdE1vZGlmaWVkXG4gICAgICBlbnRyeS5uYW1lID0gZmlsZS5uYW1lIHx8IGVudHJ5LnJlZlxuICAgICAgZW50cnkucmVsYXRpdmVfcGF0aCA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoXG4gICAgICBlbnRyeS50eXBlID0gZmlsZS50eXBlXG4gICAgICBlbnRyeS5zaXplID0gZmlsZS5zaXplXG4gICAgICBmaWxlRGF0YVt1cGxvYWRSZWZdLnB1c2goZW50cnkpXG4gICAgfSlcbiAgICByZXR1cm4gZmlsZURhdGFcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckZpbGVzKGlucHV0RWwpe1xuICAgIGlucHV0RWwudmFsdWUgPSBudWxsXG4gICAgaW5wdXRFbC5yZW1vdmVBdHRyaWJ1dGUoUEhYX1VQTE9BRF9SRUYpXG4gICAgRE9NLnB1dFByaXZhdGUoaW5wdXRFbCwgXCJmaWxlc1wiLCBbXSlcbiAgfVxuXG4gIHN0YXRpYyB1bnRyYWNrRmlsZShpbnB1dEVsLCBmaWxlKXtcbiAgICBET00ucHV0UHJpdmF0ZShpbnB1dEVsLCBcImZpbGVzXCIsIERPTS5wcml2YXRlKGlucHV0RWwsIFwiZmlsZXNcIikuZmlsdGVyKGYgPT4gIU9iamVjdC5pcyhmLCBmaWxlKSkpXG4gIH1cblxuICBzdGF0aWMgdHJhY2tGaWxlcyhpbnB1dEVsLCBmaWxlcywgZGF0YVRyYW5zZmVyKXtcbiAgICBpZihpbnB1dEVsLmdldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIpICE9PSBudWxsKXtcbiAgICAgIGxldCBuZXdGaWxlcyA9IGZpbGVzLmZpbHRlcihmaWxlID0+ICF0aGlzLmFjdGl2ZUZpbGVzKGlucHV0RWwpLmZpbmQoZiA9PiBPYmplY3QuaXMoZiwgZmlsZSkpKVxuICAgICAgRE9NLnB1dFByaXZhdGUoaW5wdXRFbCwgXCJmaWxlc1wiLCB0aGlzLmFjdGl2ZUZpbGVzKGlucHV0RWwpLmNvbmNhdChuZXdGaWxlcykpXG4gICAgICBpbnB1dEVsLnZhbHVlID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZXNldCBpbnB1dEVsIGZpbGVzIHRvIGFsaWduIG91dHB1dCB3aXRoIHByb2dyYW1tYXRpYyBjaGFuZ2VzIChpLmUuIGRyYWcgYW5kIGRyb3ApXG4gICAgICBpZihkYXRhVHJhbnNmZXIgJiYgZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCA+IDApeyBpbnB1dEVsLmZpbGVzID0gZGF0YVRyYW5zZmVyLmZpbGVzIH1cbiAgICAgIERPTS5wdXRQcml2YXRlKGlucHV0RWwsIFwiZmlsZXNcIiwgZmlsZXMpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFjdGl2ZUZpbGVJbnB1dHMoZm9ybUVsKXtcbiAgICBsZXQgZmlsZUlucHV0cyA9IERPTS5maW5kVXBsb2FkSW5wdXRzKGZvcm1FbClcbiAgICByZXR1cm4gQXJyYXkuZnJvbShmaWxlSW5wdXRzKS5maWx0ZXIoZWwgPT4gZWwuZmlsZXMgJiYgdGhpcy5hY3RpdmVGaWxlcyhlbCkubGVuZ3RoID4gMClcbiAgfVxuXG4gIHN0YXRpYyBhY3RpdmVGaWxlcyhpbnB1dCl7XG4gICAgcmV0dXJuIChET00ucHJpdmF0ZShpbnB1dCwgXCJmaWxlc1wiKSB8fCBbXSkuZmlsdGVyKGYgPT4gVXBsb2FkRW50cnkuaXNBY3RpdmUoaW5wdXQsIGYpKVxuICB9XG5cbiAgc3RhdGljIGlucHV0c0F3YWl0aW5nUHJlZmxpZ2h0KGZvcm1FbCl7XG4gICAgbGV0IGZpbGVJbnB1dHMgPSBET00uZmluZFVwbG9hZElucHV0cyhmb3JtRWwpXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZmlsZUlucHV0cykuZmlsdGVyKGlucHV0ID0+IHRoaXMuZmlsZXNBd2FpdGluZ1ByZWZsaWdodChpbnB1dCkubGVuZ3RoID4gMClcbiAgfVxuXG4gIHN0YXRpYyBmaWxlc0F3YWl0aW5nUHJlZmxpZ2h0KGlucHV0KXtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVGaWxlcyhpbnB1dCkuZmlsdGVyKGYgPT4gIVVwbG9hZEVudHJ5LmlzUHJlZmxpZ2h0ZWQoaW5wdXQsIGYpKVxuICB9XG5cbiAgY29uc3RydWN0b3IoaW5wdXRFbCwgdmlldywgb25Db21wbGV0ZSl7XG4gICAgdGhpcy52aWV3ID0gdmlld1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVcbiAgICB0aGlzLl9lbnRyaWVzID1cbiAgICAgIEFycmF5LmZyb20oTGl2ZVVwbG9hZGVyLmZpbGVzQXdhaXRpbmdQcmVmbGlnaHQoaW5wdXRFbCkgfHwgW10pXG4gICAgICAgIC5tYXAoZmlsZSA9PiBuZXcgVXBsb2FkRW50cnkoaW5wdXRFbCwgZmlsZSwgdmlldykpXG5cbiAgICB0aGlzLm51bUVudHJpZXNJblByb2dyZXNzID0gdGhpcy5fZW50cmllcy5sZW5ndGhcbiAgfVxuXG4gIGVudHJpZXMoKXsgcmV0dXJuIHRoaXMuX2VudHJpZXMgfVxuXG4gIGluaXRBZGFwdGVyVXBsb2FkKHJlc3AsIG9uRXJyb3IsIGxpdmVTb2NrZXQpe1xuICAgIHRoaXMuX2VudHJpZXMgPVxuICAgICAgdGhpcy5fZW50cmllcy5tYXAoZW50cnkgPT4ge1xuICAgICAgICBlbnRyeS56aXBQb3N0RmxpZ2h0KHJlc3ApXG4gICAgICAgIGVudHJ5Lm9uRG9uZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5udW1FbnRyaWVzSW5Qcm9ncmVzcy0tXG4gICAgICAgICAgaWYodGhpcy5udW1FbnRyaWVzSW5Qcm9ncmVzcyA9PT0gMCl7IHRoaXMub25Db21wbGV0ZSgpIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGVudHJ5XG4gICAgICB9KVxuXG4gICAgbGV0IGdyb3VwZWRFbnRyaWVzID0gdGhpcy5fZW50cmllcy5yZWR1Y2UoKGFjYywgZW50cnkpID0+IHtcbiAgICAgIGxldCB7bmFtZSwgY2FsbGJhY2t9ID0gZW50cnkudXBsb2FkZXIobGl2ZVNvY2tldC51cGxvYWRlcnMpXG4gICAgICBhY2NbbmFtZV0gPSBhY2NbbmFtZV0gfHwge2NhbGxiYWNrOiBjYWxsYmFjaywgZW50cmllczogW119XG4gICAgICBhY2NbbmFtZV0uZW50cmllcy5wdXNoKGVudHJ5KVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KVxuXG4gICAgZm9yKGxldCBuYW1lIGluIGdyb3VwZWRFbnRyaWVzKXtcbiAgICAgIGxldCB7Y2FsbGJhY2ssIGVudHJpZXN9ID0gZ3JvdXBlZEVudHJpZXNbbmFtZV1cbiAgICAgIGNhbGxiYWNrKGVudHJpZXMsIG9uRXJyb3IsIHJlc3AsIGxpdmVTb2NrZXQpXG4gICAgfVxuICB9XG59XG4iLCAibGV0IEFSSUEgPSB7XG4gIGZvY3VzTWFpbigpe1xuICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiBoMSwgbWFpbiwgaDFcIilcbiAgICBpZih0YXJnZXQpe1xuICAgICAgbGV0IG9yaWdUYWJJbmRleCA9IHRhcmdldC50YWJJbmRleFxuICAgICAgdGFyZ2V0LnRhYkluZGV4ID0gLTFcbiAgICAgIHRhcmdldC5mb2N1cygpXG4gICAgICB0YXJnZXQudGFiSW5kZXggPSBvcmlnVGFiSW5kZXhcbiAgICB9XG4gIH0sXG5cbiAgYW55T2YoaW5zdGFuY2UsIGNsYXNzZXMpeyByZXR1cm4gY2xhc3Nlcy5maW5kKG5hbWUgPT4gaW5zdGFuY2UgaW5zdGFuY2VvZiBuYW1lKSB9LFxuXG4gIGlzRm9jdXNhYmxlKGVsLCBpbnRlcmFjdGl2ZU9ubHkpe1xuICAgIHJldHVybihcbiAgICAgIChlbCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmIGVsLnJlbCAhPT0gXCJpZ25vcmVcIikgfHxcbiAgICAgIChlbCBpbnN0YW5jZW9mIEhUTUxBcmVhRWxlbWVudCAmJiBlbC5ocmVmICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAoIWVsLmRpc2FibGVkICYmICh0aGlzLmFueU9mKGVsLCBbSFRNTElucHV0RWxlbWVudCwgSFRNTFNlbGVjdEVsZW1lbnQsIEhUTUxUZXh0QXJlYUVsZW1lbnQsIEhUTUxCdXR0b25FbGVtZW50XSkpKSB8fFxuICAgICAgKGVsIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpIHx8XG4gICAgICAoZWwudGFiSW5kZXggPiAwIHx8ICghaW50ZXJhY3RpdmVPbmx5ICYmIGVsLnRhYkluZGV4ID09PSAwICYmIGVsLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpICE9PSBudWxsICYmIGVsLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpICE9PSBcInRydWVcIikpXG4gICAgKVxuICB9LFxuXG4gIGF0dGVtcHRGb2N1cyhlbCwgaW50ZXJhY3RpdmVPbmx5KXtcbiAgICBpZih0aGlzLmlzRm9jdXNhYmxlKGVsLCBpbnRlcmFjdGl2ZU9ubHkpKXsgdHJ5eyBlbC5mb2N1cygpIH0gY2F0Y2goZSl7fSB9XG4gICAgcmV0dXJuICEhZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzU2FtZU5vZGUoZWwpXG4gIH0sXG5cbiAgZm9jdXNGaXJzdEludGVyYWN0aXZlKGVsKXtcbiAgICBsZXQgY2hpbGQgPSBlbC5maXJzdEVsZW1lbnRDaGlsZFxuICAgIHdoaWxlKGNoaWxkKXtcbiAgICAgIGlmKHRoaXMuYXR0ZW1wdEZvY3VzKGNoaWxkLCB0cnVlKSB8fCB0aGlzLmZvY3VzRmlyc3RJbnRlcmFjdGl2ZShjaGlsZCwgdHJ1ZSkpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG4gIH0sXG5cbiAgZm9jdXNGaXJzdChlbCl7XG4gICAgbGV0IGNoaWxkID0gZWwuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICB3aGlsZShjaGlsZCl7XG4gICAgICBpZih0aGlzLmF0dGVtcHRGb2N1cyhjaGlsZCkgfHwgdGhpcy5mb2N1c0ZpcnN0KGNoaWxkKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cbiAgfSxcblxuICBmb2N1c0xhc3QoZWwpe1xuICAgIGxldCBjaGlsZCA9IGVsLmxhc3RFbGVtZW50Q2hpbGRcbiAgICB3aGlsZShjaGlsZCl7XG4gICAgICBpZih0aGlzLmF0dGVtcHRGb2N1cyhjaGlsZCkgfHwgdGhpcy5mb2N1c0xhc3QoY2hpbGQpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGNoaWxkID0gY2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQVJJQSIsICJpbXBvcnQge1xuICBQSFhfQUNUSVZFX0VOVFJZX1JFRlMsXG4gIFBIWF9MSVZFX0ZJTEVfVVBEQVRFRCxcbiAgUEhYX1BSRUZMSUdIVEVEX1JFRlMsXG4gIFBIWF9VUExPQURfUkVGXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCBMaXZlVXBsb2FkZXIgZnJvbSBcIi4vbGl2ZV91cGxvYWRlclwiXG5pbXBvcnQgQVJJQSBmcm9tIFwiLi9hcmlhXCJcblxubGV0IEhvb2tzID0ge1xuICBMaXZlRmlsZVVwbG9hZDoge1xuICAgIGFjdGl2ZVJlZnMoKXsgcmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKFBIWF9BQ1RJVkVfRU5UUllfUkVGUykgfSxcblxuICAgIHByZWZsaWdodGVkUmVmcygpeyByZXR1cm4gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoUEhYX1BSRUZMSUdIVEVEX1JFRlMpIH0sXG5cbiAgICBtb3VudGVkKCl7IHRoaXMucHJlZmxpZ2h0ZWRXYXMgPSB0aGlzLnByZWZsaWdodGVkUmVmcygpIH0sXG5cbiAgICB1cGRhdGVkKCl7XG4gICAgICBsZXQgbmV3UHJlZmxpZ2h0cyA9IHRoaXMucHJlZmxpZ2h0ZWRSZWZzKClcbiAgICAgIGlmKHRoaXMucHJlZmxpZ2h0ZWRXYXMgIT09IG5ld1ByZWZsaWdodHMpe1xuICAgICAgICB0aGlzLnByZWZsaWdodGVkV2FzID0gbmV3UHJlZmxpZ2h0c1xuICAgICAgICBpZihuZXdQcmVmbGlnaHRzID09PSBcIlwiKXtcbiAgICAgICAgICB0aGlzLl9fdmlldy5jYW5jZWxTdWJtaXQodGhpcy5lbC5mb3JtKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuYWN0aXZlUmVmcygpID09PSBcIlwiKXsgdGhpcy5lbC52YWx1ZSA9IG51bGwgfVxuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChQSFhfTElWRV9GSUxFX1VQREFURUQpKVxuICAgIH1cbiAgfSxcblxuICBMaXZlSW1nUHJldmlldzoge1xuICAgIG1vdW50ZWQoKXtcbiAgICAgIHRoaXMucmVmID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBoeC1lbnRyeS1yZWZcIilcbiAgICAgIHRoaXMuaW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWwuZ2V0QXR0cmlidXRlKFBIWF9VUExPQURfUkVGKSlcbiAgICAgIExpdmVVcGxvYWRlci5nZXRFbnRyeURhdGFVUkwodGhpcy5pbnB1dEVsLCB0aGlzLnJlZiwgdXJsID0+IHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmxcbiAgICAgICAgdGhpcy5lbC5zcmMgPSB1cmxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKXtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy51cmwpXG4gICAgfVxuICB9LFxuICBGb2N1c1dyYXA6IHtcbiAgICBtb3VudGVkKCl7XG4gICAgICB0aGlzLmZvY3VzU3RhcnQgPSB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkXG4gICAgICB0aGlzLmZvY3VzRW5kID0gdGhpcy5lbC5sYXN0RWxlbWVudENoaWxkXG4gICAgICB0aGlzLmZvY3VzU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IEFSSUEuZm9jdXNMYXN0KHRoaXMuZWwpKVxuICAgICAgdGhpcy5mb2N1c0VuZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gQVJJQS5mb2N1c0ZpcnN0KHRoaXMuZWwpKVxuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwicGh4OnNob3ctZW5kXCIsICgpID0+IHRoaXMuZWwuZm9jdXMoKSlcbiAgICAgIGlmKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgIT09IFwibm9uZVwiKXtcbiAgICAgICAgQVJJQS5mb2N1c0ZpcnN0KHRoaXMuZWwpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBzY3JvbGxUb3AgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5sZXQgd2luSGVpZ2h0ID0gKCkgPT4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxubGV0IGlzQXRWaWV3cG9ydFRvcCA9IChlbCkgPT4ge1xuICBsZXQgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QubGVmdCA+PSAwICYmIHJlY3QudG9wIDw9IHdpbkhlaWdodCgpXG59XG5cbmxldCBpc0F0Vmlld3BvcnRCb3R0b20gPSAoZWwpID0+IHtcbiAgbGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICByZXR1cm4gcmVjdC5yaWdodCA+PSAwICYmIHJlY3QubGVmdCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbkhlaWdodCgpXG59XG5cbmxldCBpc1dpdGhpblZpZXdwb3J0ID0gKGVsKSA9PiB7XG4gIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5sZWZ0ID49IDAgJiYgcmVjdC50b3AgPD0gd2luSGVpZ2h0KClcbn1cblxuSG9va3MuSW5maW5pdGVTY3JvbGwgPSB7XG4gIG1vdW50ZWQoKXtcbiAgICBsZXQgc2Nyb2xsQmVmb3JlID0gc2Nyb2xsVG9wKClcbiAgICBsZXQgdG9wT3ZlcnJhbiA9IGZhbHNlXG4gICAgbGV0IHRocm90dGxlSW50ZXJ2YWwgPSA1MDBcbiAgICBsZXQgcGVuZGluZ09wID0gbnVsbFxuXG4gICAgbGV0IG9uVG9wT3ZlcnJ1biA9IHRoaXMudGhyb3R0bGUodGhyb3R0bGVJbnRlcnZhbCwgKHRvcEV2ZW50LCBmaXJzdENoaWxkKSA9PiB7XG4gICAgICBwZW5kaW5nT3AgPSAoKSA9PiB0cnVlXG4gICAgICB0aGlzLmxpdmVTb2NrZXQuZXhlY0pTSG9va1B1c2godGhpcy5lbCwgdG9wRXZlbnQsIHtpZDogZmlyc3RDaGlsZC5pZCwgX292ZXJyYW46IHRydWV9LCAoKSA9PiB7XG4gICAgICAgIHBlbmRpbmdPcCA9IG51bGxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBvbkZpcnN0Q2hpbGRBdFRvcCA9IHRoaXMudGhyb3R0bGUodGhyb3R0bGVJbnRlcnZhbCwgKHRvcEV2ZW50LCBmaXJzdENoaWxkKSA9PiB7XG4gICAgICBwZW5kaW5nT3AgPSAoKSA9PiBmaXJzdENoaWxkLnNjcm9sbEludG9WaWV3KHtibG9jazogXCJzdGFydFwifSlcbiAgICAgIHRoaXMubGl2ZVNvY2tldC5leGVjSlNIb29rUHVzaCh0aGlzLmVsLCB0b3BFdmVudCwge2lkOiBmaXJzdENoaWxkLmlkfSwgKCkgPT4ge1xuICAgICAgICBwZW5kaW5nT3AgPSBudWxsXG4gICAgICAgIGlmKCFpc1dpdGhpblZpZXdwb3J0KGZpcnN0Q2hpbGQpKXsgZmlyc3RDaGlsZC5zY3JvbGxJbnRvVmlldyh7YmxvY2s6IFwic3RhcnRcIn0pIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBvbkxhc3RDaGlsZEF0Qm90dG9tID0gdGhpcy50aHJvdHRsZSh0aHJvdHRsZUludGVydmFsLCAoYm90dG9tRXZlbnQsIGxhc3RDaGlsZCkgPT4ge1xuICAgICAgcGVuZGluZ09wID0gKCkgPT4gbGFzdENoaWxkLnNjcm9sbEludG9WaWV3KHtibG9jazogXCJlbmRcIn0pXG4gICAgICB0aGlzLmxpdmVTb2NrZXQuZXhlY0pTSG9va1B1c2godGhpcy5lbCwgYm90dG9tRXZlbnQsIHtpZDogbGFzdENoaWxkLmlkfSwgKCkgPT4ge1xuICAgICAgICBwZW5kaW5nT3AgPSBudWxsXG4gICAgICAgIGlmKCFpc1dpdGhpblZpZXdwb3J0KGxhc3RDaGlsZCkpeyBsYXN0Q2hpbGQuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiBcImVuZFwifSkgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5vblNjcm9sbCA9IChlKSA9PiB7XG4gICAgICBsZXQgc2Nyb2xsTm93ID0gc2Nyb2xsVG9wKClcblxuICAgICAgaWYocGVuZGluZ09wKXtcbiAgICAgICAgc2Nyb2xsQmVmb3JlID0gc2Nyb2xsTm93XG4gICAgICAgIHJldHVybiBwZW5kaW5nT3AoKVxuICAgICAgfVxuICAgICAgbGV0IHJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBsZXQgdG9wRXZlbnQgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSh0aGlzLmxpdmVTb2NrZXQuYmluZGluZyhcInZpZXdwb3J0LXRvcFwiKSlcbiAgICAgIGxldCBib3R0b21FdmVudCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKHRoaXMubGl2ZVNvY2tldC5iaW5kaW5nKFwidmlld3BvcnQtYm90dG9tXCIpKVxuICAgICAgbGV0IGxhc3RDaGlsZCA9IHRoaXMuZWwubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgbGV0IGZpcnN0Q2hpbGQgPSB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBsZXQgaXNTY3JvbGxpbmdVcCA9IHNjcm9sbE5vdyA8IHNjcm9sbEJlZm9yZVxuICAgICAgbGV0IGlzU2Nyb2xsaW5nRG93biA9IHNjcm9sbE5vdyA+IHNjcm9sbEJlZm9yZVxuXG4gICAgICAvLyBlbCBvdmVycmFuIHdoaWxlIHNjcm9sbGluZyB1cFxuICAgICAgaWYoaXNTY3JvbGxpbmdVcCAmJiB0b3BFdmVudCAmJiAhdG9wT3ZlcnJhbiAmJiByZWN0LnRvcCA+PSAwKXtcbiAgICAgICAgdG9wT3ZlcnJhbiA9IHRydWVcbiAgICAgICAgb25Ub3BPdmVycnVuKHRvcEV2ZW50LCBmaXJzdENoaWxkKVxuICAgICAgfSBlbHNlIGlmKGlzU2Nyb2xsaW5nRG93biAmJiB0b3BPdmVycmFuICYmIHJlY3QudG9wIDw9IDApe1xuICAgICAgICB0b3BPdmVycmFuID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYodG9wRXZlbnQgJiYgaXNTY3JvbGxpbmdVcCAmJiBpc0F0Vmlld3BvcnRUb3AoZmlyc3RDaGlsZCkpe1xuICAgICAgICBvbkZpcnN0Q2hpbGRBdFRvcCh0b3BFdmVudCwgZmlyc3RDaGlsZClcbiAgICAgIH0gZWxzZSBpZihib3R0b21FdmVudCAmJiBpc1Njcm9sbGluZ0Rvd24gJiYgaXNBdFZpZXdwb3J0Qm90dG9tKGxhc3RDaGlsZCkpe1xuICAgICAgICBvbkxhc3RDaGlsZEF0Qm90dG9tKGJvdHRvbUV2ZW50LCBsYXN0Q2hpbGQpXG4gICAgICB9XG4gICAgICBzY3JvbGxCZWZvcmUgPSBzY3JvbGxOb3dcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfSxcbiAgZGVzdHJveWVkKCl7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpIH0sXG5cbiAgdGhyb3R0bGUoaW50ZXJ2YWwsIGNhbGxiYWNrKXtcbiAgICBsZXQgbGFzdENhbGxBdCA9IDBcbiAgICBsZXQgdGltZXJcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0IG5vdyA9IERhdGUubm93KClcbiAgICAgIGxldCByZW1haW5pbmdUaW1lID0gaW50ZXJ2YWwgLSAobm93IC0gbGFzdENhbGxBdClcblxuICAgICAgaWYocmVtYWluaW5nVGltZSA8PSAwIHx8IHJlbWFpbmluZ1RpbWUgPiBpbnRlcnZhbCl7XG4gICAgICAgIGlmKHRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGxhc3RDYWxsQXQgPSBub3dcbiAgICAgICAgY2FsbGJhY2soLi4uYXJncylcbiAgICAgIH0gZWxzZSBpZighdGltZXIpe1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxhc3RDYWxsQXQgPSBEYXRlLm5vdygpXG4gICAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgICAgY2FsbGJhY2soLi4uYXJncylcbiAgICAgICAgfSwgcmVtYWluaW5nVGltZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhvb2tzXG4iLCAiaW1wb3J0IHtcbiAgbWF5YmVcbn0gZnJvbSBcIi4vdXRpbHNcIlxuXG5pbXBvcnQgRE9NIGZyb20gXCIuL2RvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTVBvc3RNb3JwaFJlc3RvcmVyIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyQmVmb3JlLCBjb250YWluZXJBZnRlciwgdXBkYXRlVHlwZSl7XG4gICAgbGV0IGlkc0JlZm9yZSA9IG5ldyBTZXQoKVxuICAgIGxldCBpZHNBZnRlciA9IG5ldyBTZXQoWy4uLmNvbnRhaW5lckFmdGVyLmNoaWxkcmVuXS5tYXAoY2hpbGQgPT4gY2hpbGQuaWQpKVxuXG4gICAgbGV0IGVsZW1lbnRzVG9Nb2RpZnkgPSBbXVxuXG4gICAgQXJyYXkuZnJvbShjb250YWluZXJCZWZvcmUuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYoY2hpbGQuaWQpeyAvLyBhbGwgb2Ygb3VyIGNoaWxkcmVuIHNob3VsZCBiZSBlbGVtZW50cyB3aXRoIGlkc1xuICAgICAgICBpZHNCZWZvcmUuYWRkKGNoaWxkLmlkKVxuICAgICAgICBpZihpZHNBZnRlci5oYXMoY2hpbGQuaWQpKXtcbiAgICAgICAgICBsZXQgcHJldmlvdXNFbGVtZW50SWQgPSBjaGlsZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIGNoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWRcbiAgICAgICAgICBlbGVtZW50c1RvTW9kaWZ5LnB1c2goe2VsZW1lbnRJZDogY2hpbGQuaWQsIHByZXZpb3VzRWxlbWVudElkOiBwcmV2aW91c0VsZW1lbnRJZH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jb250YWluZXJJZCA9IGNvbnRhaW5lckFmdGVyLmlkXG4gICAgdGhpcy51cGRhdGVUeXBlID0gdXBkYXRlVHlwZVxuICAgIHRoaXMuZWxlbWVudHNUb01vZGlmeSA9IGVsZW1lbnRzVG9Nb2RpZnlcbiAgICB0aGlzLmVsZW1lbnRJZHNUb0FkZCA9IFsuLi5pZHNBZnRlcl0uZmlsdGVyKGlkID0+ICFpZHNCZWZvcmUuaGFzKGlkKSlcbiAgfVxuXG4gIC8vIFdlIGRvIHRoZSBmb2xsb3dpbmcgdG8gb3B0aW1pemUgYXBwZW5kL3ByZXBlbmQgb3BlcmF0aW9uczpcbiAgLy8gICAxKSBUcmFjayBpZHMgb2YgbW9kaWZpZWQgZWxlbWVudHMgJiBvZiBuZXcgZWxlbWVudHNcbiAgLy8gICAyKSBBbGwgdGhlIG1vZGlmaWVkIGVsZW1lbnRzIGFyZSBwdXQgYmFjayBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBpbiB0aGUgRE9NIHRyZWVcbiAgLy8gICAgICBieSBzdG9yaW5nIHRoZSBpZCBvZiB0aGVpciBwcmV2aW91cyBzaWJsaW5nXG4gIC8vICAgMykgTmV3IGVsZW1lbnRzIGFyZSBnb2luZyB0byBiZSBwdXQgaW4gdGhlIHJpZ2h0IHBsYWNlIGJ5IG1vcnBoZG9tIGR1cmluZyBhcHBlbmQuXG4gIC8vICAgICAgRm9yIHByZXBlbmQsIHdlIG1vdmUgdGhlbSB0byB0aGUgZmlyc3QgcG9zaXRpb24gaW4gdGhlIGNvbnRhaW5lclxuICBwZXJmb3JtKCl7XG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5ieUlkKHRoaXMuY29udGFpbmVySWQpXG4gICAgdGhpcy5lbGVtZW50c1RvTW9kaWZ5LmZvckVhY2goZWxlbWVudFRvTW9kaWZ5ID0+IHtcbiAgICAgIGlmKGVsZW1lbnRUb01vZGlmeS5wcmV2aW91c0VsZW1lbnRJZCl7XG4gICAgICAgIG1heWJlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRUb01vZGlmeS5wcmV2aW91c0VsZW1lbnRJZCksIHByZXZpb3VzRWxlbSA9PiB7XG4gICAgICAgICAgbWF5YmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudFRvTW9kaWZ5LmVsZW1lbnRJZCksIGVsZW0gPT4ge1xuICAgICAgICAgICAgbGV0IGlzSW5SaWdodFBsYWNlID0gZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5pZCA9PSBwcmV2aW91c0VsZW0uaWRcbiAgICAgICAgICAgIGlmKCFpc0luUmlnaHRQbGFjZSl7XG4gICAgICAgICAgICAgIHByZXZpb3VzRWxlbS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBlbGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBjb250YWluZXJcbiAgICAgICAgbWF5YmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudFRvTW9kaWZ5LmVsZW1lbnRJZCksIGVsZW0gPT4ge1xuICAgICAgICAgIGxldCBpc0luUmlnaHRQbGFjZSA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZyA9PSBudWxsXG4gICAgICAgICAgaWYoIWlzSW5SaWdodFBsYWNlKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGVsZW0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZih0aGlzLnVwZGF0ZVR5cGUgPT0gXCJwcmVwZW5kXCIpe1xuICAgICAgdGhpcy5lbGVtZW50SWRzVG9BZGQucmV2ZXJzZSgpLmZvckVhY2goZWxlbUlkID0+IHtcbiAgICAgICAgbWF5YmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlkKSwgZWxlbSA9PiBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBlbGVtKSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCAidmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgPSAxMTtcblxuZnVuY3Rpb24gbW9ycGhBdHRycyhmcm9tTm9kZSwgdG9Ob2RlKSB7XG4gICAgdmFyIHRvTm9kZUF0dHJzID0gdG9Ob2RlLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJOYW1lO1xuICAgIHZhciBhdHRyTmFtZXNwYWNlVVJJO1xuICAgIHZhciBhdHRyVmFsdWU7XG4gICAgdmFyIGZyb21WYWx1ZTtcblxuICAgIC8vIGRvY3VtZW50LWZyYWdtZW50cyBkb250IGhhdmUgYXR0cmlidXRlcyBzbyBsZXRzIG5vdCBkbyBhbnl0aGluZ1xuICAgIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgZnJvbU5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSB0b05vZGVBdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhdHRyID0gdG9Ob2RlQXR0cnNbaV07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgIGF0dHJWYWx1ZSA9IGF0dHIudmFsdWU7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyLnByZWZpeCA9PT0gJ3htbG5zJyl7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lOyAvLyBJdCdzIG5vdCBhbGxvd2VkIHRvIHNldCBhbiBhdHRyaWJ1dGUgd2l0aCB0aGUgWE1MTlMgbmFtZXNwYWNlIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgYHhtbG5zYCBwcmVmaXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXRcbiAgICAvLyB3ZXJlbid0IGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICB2YXIgZnJvbU5vZGVBdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKHZhciBkID0gZnJvbU5vZGVBdHRycy5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xuICAgICAgICBhdHRyID0gZnJvbU5vZGVBdHRyc1tkXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcblxuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0b05vZGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciByYW5nZTsgLy8gQ3JlYXRlIGEgcmFuZ2Ugb2JqZWN0IGZvciBlZmZpY2VudGx5IHJlbmRlcmluZyBzdHJpbmdzIHRvIGVsZW1lbnRzLlxudmFyIE5TX1hIVE1MID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuXG52YXIgZG9jID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xudmFyIEhBU19URU1QTEFURV9TVVBQT1JUID0gISFkb2MgJiYgJ2NvbnRlbnQnIGluIGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudmFyIEhBU19SQU5HRV9TVVBQT1JUID0gISFkb2MgJiYgZG9jLmNyZWF0ZVJhbmdlICYmICdjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQnIGluIGRvYy5jcmVhdGVSYW5nZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKSB7XG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgICByYW5nZSA9IGRvYy5jcmVhdGVSYW5nZSgpO1xuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGRvYy5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyKTtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpIHtcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgIGZyYWdtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFib3V0IHRoZSBzYW1lXG4gKiB2YXIgaHRtbCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gKiByZXR1cm4gaHRtbC5ib2R5LmZpcnN0Q2hpbGQ7XG4gKlxuICogQG1ldGhvZCB0b0VsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqL1xuZnVuY3Rpb24gdG9FbGVtZW50KHN0cikge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgaWYgKEhBU19URU1QTEFURV9TVVBQT1JUKSB7XG4gICAgICAvLyBhdm9pZCByZXN0cmljdGlvbnMgb24gY29udGVudCBmb3IgdGhpbmdzIGxpa2UgYDx0cj48dGg+SGk8L3RoPjwvdHI+YCB3aGljaFxuICAgICAgLy8gY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IGRvZXNuJ3Qgc3VwcG9ydFxuICAgICAgLy8gPHRlbXBsYXRlPiBzdXBwb3J0IG5vdCBhdmFpbGFibGUgaW4gSUVcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZShzdHIpO1xuICAgIH0gZWxzZSBpZiAoSEFTX1JBTkdFX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHR3byBub2RlJ3MgbmFtZXMgYXJlIHRoZSBzYW1lLlxuICpcbiAqIE5PVEU6IFdlIGRvbid0IGJvdGhlciBjaGVja2luZyBgbmFtZXNwYWNlVVJJYCBiZWNhdXNlIHlvdSB3aWxsIG5ldmVyIGZpbmQgdHdvIEhUTUwgZWxlbWVudHMgd2l0aCB0aGUgc2FtZVxuICogICAgICAgbm9kZU5hbWUgYW5kIGRpZmZlcmVudCBuYW1lc3BhY2UgVVJJcy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYiBUaGUgdGFyZ2V0IGVsZW1lbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVOb2RlTmFtZXMoZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGZyb21Ob2RlTmFtZSA9IGZyb21FbC5ub2RlTmFtZTtcbiAgICB2YXIgdG9Ob2RlTmFtZSA9IHRvRWwubm9kZU5hbWU7XG4gICAgdmFyIGZyb21Db2RlU3RhcnQsIHRvQ29kZVN0YXJ0O1xuXG4gICAgaWYgKGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmcm9tQ29kZVN0YXJ0ID0gZnJvbU5vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG4gICAgdG9Db2RlU3RhcnQgPSB0b05vZGVOYW1lLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSB2aXJ0dWFsIERPTSBub2RlIG9yIFNWRyBub2RlIHRoZW4gd2UgbWF5XG4gICAgLy8gbmVlZCB0byBub3JtYWxpemUgdGhlIHRhZyBuYW1lIGJlZm9yZSBjb21wYXJpbmcuIE5vcm1hbCBIVE1MIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgLy8gaW4gdGhlIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiXG4gICAgLy8gYXJlIGNvbnZlcnRlZCB0byB1cHBlciBjYXNlXG4gICAgaWYgKGZyb21Db2RlU3RhcnQgPD0gOTAgJiYgdG9Db2RlU3RhcnQgPj0gOTcpIHsgLy8gZnJvbSBpcyB1cHBlciBhbmQgdG8gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAodG9Db2RlU3RhcnQgPD0gOTAgJiYgZnJvbUNvZGVTdGFydCA+PSA5NykgeyAvLyB0byBpcyB1cHBlciBhbmQgZnJvbSBpcyBsb3dlclxuICAgICAgICByZXR1cm4gdG9Ob2RlTmFtZSA9PT0gZnJvbU5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCwgb3B0aW9uYWxseSB3aXRoIGEga25vd24gbmFtZXNwYWNlIFVSSS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgZWxlbWVudCBuYW1lLCBlLmcuICdkaXYnIG9yICdzdmcnXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZVVSSV0gdGhlIGVsZW1lbnQncyBuYW1lc3BhY2UgVVJJLCBpLmUuIHRoZSB2YWx1ZSBvZlxuICogaXRzIGB4bWxuc2AgYXR0cmlidXRlIG9yIGl0cyBpbmZlcnJlZCBuYW1lc3BhY2UuXG4gKlxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWUsIG5hbWVzcGFjZVVSSSkge1xuICAgIHJldHVybiAhbmFtZXNwYWNlVVJJIHx8IG5hbWVzcGFjZVVSSSA9PT0gTlNfWEhUTUwgP1xuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudChuYW1lKSA6XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIGNoaWxkcmVuIG9mIG9uZSBET00gZWxlbWVudCB0byBhbm90aGVyIERPTSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1vdmVDaGlsZHJlbihmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGN1ckNoaWxkKTtcbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB0b0VsO1xufVxuXG5mdW5jdGlvbiBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgbmFtZSkge1xuICAgIGlmIChmcm9tRWxbbmFtZV0gIT09IHRvRWxbbmFtZV0pIHtcbiAgICAgICAgZnJvbUVsW25hbWVdID0gdG9FbFtuYW1lXTtcbiAgICAgICAgaWYgKGZyb21FbFtuYW1lXSkge1xuICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgT1BUSU9OOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBmcm9tRWwucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnROYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlICYmIHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnU0VMRUNUJyAmJiAhcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAmJiAhdG9FbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBNUyBFZGdlIGJ1ZyB3aGVyZSB0aGUgJ3NlbGVjdGVkJyBhdHRyaWJ1dGUgY2FuIG9ubHkgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlZCBpZiBzZXQgdG8gYSBub24tZW1wdHkgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEyMDg3Njc5L1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHNlbGVjdCBlbGVtZW50J3Mgc2VsZWN0ZWRJbmRleCB0byAtMSwgb3RoZXJ3aXNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBmcm9tRWwuc2VsZWN0ZWQgdXNpbmcgdGhlIHN5bmNCb29sZWFuQXR0clByb3AgYmVsb3cgaGFzIG5vIGVmZmVjdC5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY29ycmVjdCBzZWxlY3RlZEluZGV4IHdpbGwgYmUgc2V0IGluIHRoZSBTRUxFQ1Qgc3BlY2lhbCBoYW5kbGVyIGJlbG93LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnc2VsZWN0ZWQnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBcInZhbHVlXCIgYXR0cmlidXRlIGlzIHNwZWNpYWwgZm9yIHRoZSA8aW5wdXQ+IGVsZW1lbnQgc2luY2UgaXQgc2V0c1xuICAgICAqIHRoZSBpbml0aWFsIHZhbHVlLiBDaGFuZ2luZyB0aGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSB3aXRob3V0IGNoYW5naW5nIHRoZVxuICAgICAqIFwidmFsdWVcIiBwcm9wZXJ0eSB3aWxsIGhhdmUgbm8gZWZmZWN0IHNpbmNlIGl0IGlzIG9ubHkgdXNlZCB0byB0aGUgc2V0IHRoZVxuICAgICAqIGluaXRpYWwgdmFsdWUuICBTaW1pbGFyIGZvciB0aGUgXCJjaGVja2VkXCIgYXR0cmlidXRlLCBhbmQgXCJkaXNhYmxlZFwiLlxuICAgICAqL1xuICAgIElOUFVUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdjaGVja2VkJyk7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnZGlzYWJsZWQnKTtcblxuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSB0b0VsLnZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBURVhUQVJFQTogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBmcm9tRWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBOZWVkZWQgZm9yIElFLiBBcHBhcmVudGx5IElFIHNldHMgdGhlIHBsYWNlaG9sZGVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gbm9kZSB2YWx1ZSBhbmQgdmlzZSB2ZXJzYS4gVGhpcyBpZ25vcmVzIGFuIGVtcHR5IHVwZGF0ZS5cbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IGZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT0gbmV3VmFsdWUgfHwgKCFuZXdWYWx1ZSAmJiBvbGRWYWx1ZSA9PSBmcm9tRWwucGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdENoaWxkLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTRUxFQ1Q6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBsb29wIHRocm91Z2ggY2hpbGRyZW4gb2YgZnJvbUVsLCBub3QgdG9FbCBzaW5jZSBub2RlcyBjYW4gYmUgbW92ZWRcbiAgICAgICAgICAgIC8vIGZyb20gdG9FbCB0byBmcm9tRWwgZGlyZWN0bHkgd2hlbiBtb3JwaGluZy5cbiAgICAgICAgICAgIC8vIEF0IHRoZSB0aW1lIHRoaXMgc3BlY2lhbCBoYW5kbGVyIGlzIGludm9rZWQsIGFsbCBjaGlsZHJlbiBoYXZlIGFscmVhZHkgYmVlbiBtb3JwaGVkXG4gICAgICAgICAgICAvLyBhbmQgYXBwZW5kZWQgdG8gLyByZW1vdmVkIGZyb20gZnJvbUVsLCBzbyB1c2luZyBmcm9tRWwgaGVyZSBpcyBzYWZlIGFuZCBjb3JyZWN0LlxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb3B0Z3JvdXA7XG4gICAgICAgICAgICB2YXIgbm9kZU5hbWU7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gY3VyQ2hpbGQubm9kZU5hbWUgJiYgY3VyQ2hpbGQubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRHUk9VUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBjdXJDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJDaGlsZC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1ckNoaWxkICYmIG9wdGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0Z3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcm9tRWwuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgRUxFTUVOVF9OT0RFID0gMTtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEgPSAxMTtcbnZhciBURVhUX05PREUgPSAzO1xudmFyIENPTU1FTlRfTk9ERSA9IDg7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gIGlmIChub2RlKSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSkgfHwgbm9kZS5pZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycykge1xuXG4gIHJldHVybiBmdW5jdGlvbiBtb3JwaGRvbShmcm9tTm9kZSwgdG9Ob2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0b05vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZnJvbU5vZGUubm9kZU5hbWUgPT09ICcjZG9jdW1lbnQnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnSFRNTCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICB2YXIgdG9Ob2RlSHRtbCA9IHRvTm9kZTtcbiAgICAgICAgdG9Ob2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgICAgdG9Ob2RlLmlubmVySFRNTCA9IHRvTm9kZUh0bWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b05vZGUgPSB0b0VsZW1lbnQodG9Ob2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRvTm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxKSB7XG4gICAgICB0b05vZGUgPSB0b05vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuXG4gICAgdmFyIGdldE5vZGVLZXkgPSBvcHRpb25zLmdldE5vZGVLZXkgfHwgZGVmYXVsdEdldE5vZGVLZXk7XG4gICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVBZGRlZCB8fCBub29wO1xuICAgIHZhciBvbk5vZGVBZGRlZCA9IG9wdGlvbnMub25Ob2RlQWRkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVFbFVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uRWxVcGRhdGVkID0gb3B0aW9ucy5vbkVsVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZU5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBvbk5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIHx8IG5vb3A7XG4gICAgdmFyIHNraXBGcm9tQ2hpbGRyZW4gPSBvcHRpb25zLnNraXBGcm9tQ2hpbGRyZW4gfHwgbm9vcDtcbiAgICB2YXIgYWRkQ2hpbGQgPSBvcHRpb25zLmFkZENoaWxkIHx8IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGQpeyByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTsgfTtcbiAgICB2YXIgY2hpbGRyZW5Pbmx5ID0gb3B0aW9ucy5jaGlsZHJlbk9ubHkgPT09IHRydWU7XG5cbiAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIGFzIGEgbG9va3VwIHRvIHF1aWNrbHkgZmluZCBhbGwga2V5ZWQgZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgIHZhciBmcm9tTm9kZXNMb29rdXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBrZXllZFJlbW92YWxMaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRLZXllZFJlbW92YWwoa2V5KSB7XG4gICAgICBrZXllZFJlbW92YWxMaXN0LnB1c2goa2V5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcykge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuXG4gICAgICAgICAgdmFyIGtleSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmIChza2lwS2V5ZWROb2RlcyAmJiAoa2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCkpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgc2tpcHBpbmcga2V5ZWQgbm9kZXMgdGhlbiB3ZSBhZGQgdGhlIGtleVxuICAgICAgICAgICAgLy8gdG8gYSBsaXN0IHNvIHRoYXQgaXQgY2FuIGJlIGhhbmRsZWQgYXQgdGhlIHZlcnkgZW5kLlxuICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVwb3J0IHRoZSBub2RlIGFzIGRpc2NhcmRlZCBpZiBpdCBpcyBub3Qga2V5ZWQuIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCB3ZSBsb29wIHRocm91Z2ggYWxsIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSB1bm1hdGNoZWRcbiAgICAgICAgICAgIC8vIGFuZCB0aGVuIGRpc2NhcmQgdGhlbSBpbiBvbmUgZmluYWwgcGFzcy5cbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICBpZiAoY3VyQ2hpbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyhjdXJDaGlsZCwgc2tpcEtleWVkTm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgYSBET00gbm9kZSBvdXQgb2YgdGhlIG9yaWdpbmFsIERPTVxuICAgICpcbiAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gICAgKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnROb2RlIFRoZSBub2RlcyBwYXJlbnRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNraXBLZXllZE5vZGVzIElmIHRydWUgdGhlbiBlbGVtZW50cyB3aXRoIGtleXMgd2lsbCBiZSBza2lwcGVkIGFuZCBub3QgZGlzY2FyZGVkLlxuICAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCBwYXJlbnROb2RlLCBza2lwS2V5ZWROb2Rlcykge1xuICAgICAgaWYgKG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgfVxuXG4gICAgLy8gLy8gVHJlZVdhbGtlciBpbXBsZW1lbnRhdGlvbiBpcyBubyBmYXN0ZXIsIGJ1dCBrZWVwaW5nIHRoaXMgYXJvdW5kIGluIGNhc2UgdGhpcyBjaGFuZ2VzIGluIHRoZSBmdXR1cmVcbiAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUocm9vdCkge1xuICAgIC8vICAgICB2YXIgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgLy8gICAgICAgICByb290LFxuICAgIC8vICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgIC8vXG4gICAgLy8gICAgIHZhciBlbDtcbiAgICAvLyAgICAgd2hpbGUoKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyAvLyBOb2RlSXRlcmF0b3IgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgIC8vICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKG5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAvLyAgICAgdmFyIGVsO1xuICAgIC8vICAgICB3aGlsZSgoZWwgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxKSB7XG4gICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgIGluZGV4VHJlZShjdXJDaGlsZCk7XG5cbiAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXhUcmVlKGZyb21Ob2RlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vZGVBZGRlZChlbCkge1xuICAgICAgb25Ob2RlQWRkZWQoZWwpO1xuXG4gICAgICB2YXIgY3VyQ2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHZhciB1bm1hdGNoZWRGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBba2V5XTtcbiAgICAgICAgICAvLyBpZiB3ZSBmaW5kIGEgZHVwbGljYXRlICNpZCBub2RlIGluIGNhY2hlLCByZXBsYWNlIGBlbGAgd2l0aCBjYWNoZSB2YWx1ZVxuICAgICAgICAgIC8vIGFuZCBtb3JwaCBpdCB0byB0aGUgY2hpbGQgbm9kZS5cbiAgICAgICAgICBpZiAodW5tYXRjaGVkRnJvbUVsICYmIGNvbXBhcmVOb2RlTmFtZXMoY3VyQ2hpbGQsIHVubWF0Y2hlZEZyb21FbCkpIHtcbiAgICAgICAgICAgIGN1ckNoaWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgICAgbW9ycGhFbCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2FsbCBmb3IgY3VyQ2hpbGQgYW5kIGl0J3MgY2hpbGRyZW4gdG8gc2VlIGlmIHdlIGZpbmQgc29tZXRoaW5nIGluXG4gICAgICAgICAgLy8gZnJvbU5vZGVzTG9va3VwXG4gICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckNoaWxkID0gbmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIFwidG8gbm9kZXNcIi4gSWYgY3VyRnJvbU5vZGVDaGlsZCBpc1xuICAgICAgLy8gbm9uLW51bGwgdGhlbiB3ZSBzdGlsbCBoYXZlIHNvbWUgZnJvbSBub2RlcyBsZWZ0IG92ZXIgdGhhdCBuZWVkXG4gICAgICAvLyB0byBiZSByZW1vdmVkXG4gICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICB2YXIgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgaWYgKChjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCkpKSB7XG4gICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vcnBoRWwoZnJvbUVsLCB0b0VsLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgIHZhciB0b0VsS2V5ID0gZ2V0Tm9kZUtleSh0b0VsKTtcblxuICAgICAgaWYgKHRvRWxLZXkpIHtcbiAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAvLyBET00gc28gY2xlYXIgaXQgb3V0IG9mIHRoZSBzYXZlZCBlbGVtZW50cyBjb2xsZWN0aW9uXG4gICAgICAgIGRlbGV0ZSBmcm9tTm9kZXNMb29rdXBbdG9FbEtleV07XG4gICAgICB9XG5cbiAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIGlmIChvbkJlZm9yZUVsVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVzIG9uIG9yaWdpbmFsIERPTSBlbGVtZW50IGZpcnN0XG4gICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgb25FbFVwZGF0ZWQoZnJvbUVsKTtcblxuICAgICAgICBpZiAob25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwZWNpYWxFbEhhbmRsZXJzLlRFWFRBUkVBKGZyb21FbCwgdG9FbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgIHZhciBza2lwRnJvbSA9IHNraXBGcm9tQ2hpbGRyZW4oZnJvbUVsKTtcbiAgICAgIHZhciBjdXJUb05vZGVDaGlsZCA9IHRvRWwuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgY3VyVG9Ob2RlS2V5O1xuICAgICAgdmFyIGN1ckZyb21Ob2RlS2V5O1xuXG4gICAgICB2YXIgZnJvbU5leHRTaWJsaW5nO1xuICAgICAgdmFyIHRvTmV4dFNpYmxpbmc7XG4gICAgICB2YXIgbWF0Y2hpbmdGcm9tRWw7XG5cbiAgICAgIC8vIHdhbGsgdGhlIGNoaWxkcmVuXG4gICAgICBvdXRlcjogd2hpbGUgKGN1clRvTm9kZUNoaWxkKSB7XG4gICAgICAgIHRvTmV4dFNpYmxpbmcgPSBjdXJUb05vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgY3VyVG9Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgLy8gd2FsayB0aGUgZnJvbU5vZGUgY2hpbGRyZW4gYWxsIHRoZSB3YXkgdGhyb3VnaFxuICAgICAgICB3aGlsZSAoIXNraXBGcm9tICYmIGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgaWYgKGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUgJiYgY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZShjdXJGcm9tTm9kZUNoaWxkKSkge1xuICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgIHZhciBjdXJGcm9tTm9kZVR5cGUgPSBjdXJGcm9tTm9kZUNoaWxkLm5vZGVUeXBlO1xuXG4gICAgICAgICAgLy8gdGhpcyBtZWFucyBpZiB0aGUgY3VyRnJvbU5vZGVDaGlsZCBkb2VzbnQgaGF2ZSBhIG1hdGNoIHdpdGggdGhlIGN1clRvTm9kZUNoaWxkXG4gICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IGN1clRvTm9kZUNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgRWxlbWVudCBub2Rlc1xuXG4gICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdGFyZ2V0IG5vZGUgaGFzIGEga2V5IHNvIHdlIHdhbnQgdG8gbWF0Y2ggaXQgdXAgd2l0aCB0aGUgY29ycmVjdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAhPT0gY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZyBrZXkgc29cbiAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGNoZWNrIG91ciBsb29rdXAgdG8gc2VlIGlmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgIC8vIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICBpZiAoKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tTmV4dFNpYmxpbmcgPT09IG1hdGNoaW5nRnJvbUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBzaW5nbGUgZWxlbWVudCByZW1vdmFscy4gVG8gYXZvaWQgcmVtb3ZpbmcgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIG5vZGUgb3V0IG9mIHRoZSB0cmVlIChzaW5jZSB0aGF0IGNhbiBicmVhayBDU1MgdHJhbnNpdGlvbnMsIGV0Yy4pLFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgaW5zdGVhZCBkaXNjYXJkIHRoZSBjdXJyZW50IG5vZGUgYW5kIHdhaXQgdW50aWwgdGhlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gdG8gcHJvcGVybHkgbWF0Y2ggdXAgdGhlIGtleWVkIHRhcmdldCBlbGVtZW50IHdpdGggaXRzIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgbWF0Y2hpbmcga2V5ZWQgZWxlbWVudCBzb21ld2hlcmUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIExldCdzIG1vdmUgdGhlIG9yaWdpbmFsIERPTSBub2RlIGludG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIG1vcnBoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaXQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBXZSB1c2UgaW5zZXJ0QmVmb3JlIGluc3RlYWQgb2YgcmVwbGFjZUNoaWxkIGJlY2F1c2Ugd2Ugd2FudCB0byBnbyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGByZW1vdmVOb2RlKClgIGZ1bmN0aW9uIGZvciB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGRpc2NhcmRlZCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gYWxsIGxpZmVjeWNsZSBob29rcyBhcmUgY29ycmVjdGx5IGludm9rZWRcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5zZXJ0QmVmb3JlKG1hdGNoaW5nRnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IG1hdGNoaW5nRnJvbUVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbm9kZXMgYXJlIG5vdCBjb21wYXRpYmxlIHNpbmNlIHRoZSBcInRvXCIgbm9kZSBoYXMgYSBrZXkgYW5kIHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIG5vIG1hdGNoaW5nIGtleWVkIG5vZGUgaW4gdGhlIHNvdXJjZSB0cmVlXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBvcmlnaW5hbCBoYXMgYSBrZXlcbiAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGlzQ29tcGF0aWJsZSAhPT0gZmFsc2UgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBjb21wYXRpYmxlIERPTSBlbGVtZW50cyBzbyB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBcImZyb21cIiBub2RlIHRvIG1hdGNoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0IERPTSBub2RlLlxuICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBjdXJGcm9tTm9kZVR5cGUgPT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIFRleHQgb3IgQ29tbWVudCBub2Rlc1xuICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAvLyBTaW1wbHkgdXBkYXRlIG5vZGVWYWx1ZSBvbiB0aGUgb3JpZ2luYWwgbm9kZSB0b1xuICAgICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgdmFsdWVcbiAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlICE9PSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSA9IGN1clRvTm9kZUNoaWxkLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgLy8gQWR2YW5jZSBib3RoIHRoZSBcInRvXCIgY2hpbGQgYW5kIHRoZSBcImZyb21cIiBjaGlsZCBzaW5jZSB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgICAgICAgICAvLyBOb3RoaW5nIGVsc2UgdG8gZG8gYXMgd2UgYWxyZWFkeSByZWN1cnNpdmVseSBjYWxsZWQgbW9ycGhDaGlsZHJlbiBhYm92ZVxuICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE5vIGNvbXBhdGlibGUgbWF0Y2ggc28gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBET00gYW5kIGNvbnRpbnVlIHRyeWluZyB0byBmaW5kIGFcbiAgICAgICAgICAvLyBtYXRjaCBpbiB0aGUgb3JpZ2luYWwgRE9NLiBIb3dldmVyLCB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIGZyb20gbm9kZSBpcyBub3Qga2V5ZWRcbiAgICAgICAgICAvLyBzaW5jZSBpdCBpcyBwb3NzaWJsZSB0aGF0IGEga2V5ZWQgbm9kZSBtaWdodCBtYXRjaCB1cCB3aXRoIGEgbm9kZSBzb21ld2hlcmUgZWxzZSBpbiB0aGVcbiAgICAgICAgICAvLyB0YXJnZXQgdHJlZSBhbmQgd2UgZG9uJ3Qgd2FudCB0byBkaXNjYXJkIGl0IGp1c3QgeWV0IHNpbmNlIGl0IHN0aWxsIG1pZ2h0IGZpbmQgYVxuICAgICAgICAgIC8vIGhvbWUgaW4gdGhlIGZpbmFsIERPTSB0cmVlLiBBZnRlciBldmVyeXRoaW5nIGlzIGRvbmUgd2Ugd2lsbCByZW1vdmUgYW55IGtleWVkIG5vZGVzXG4gICAgICAgICAgLy8gdGhhdCBkaWRuJ3QgZmluZCBhIGhvbWVcbiAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgfSAvLyBFTkQ6IHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHt9XG5cbiAgICAgICAgLy8gSWYgd2UgZ290IHRoaXMgZmFyIHRoZW4gd2UgZGlkIG5vdCBmaW5kIGEgY2FuZGlkYXRlIG1hdGNoIGZvclxuICAgICAgICAvLyBvdXIgXCJ0byBub2RlXCIgYW5kIHdlIGV4aGF1c3RlZCBhbGwgb2YgdGhlIGNoaWxkcmVuIFwiZnJvbVwiXG4gICAgICAgIC8vIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdCBhcHBlbmQgdGhlIGN1cnJlbnQgXCJ0b1wiIG5vZGVcbiAgICAgICAgLy8gdG8gdGhlIGVuZFxuICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICYmIChtYXRjaGluZ0Zyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtjdXJUb05vZGVLZXldKSAmJiBjb21wYXJlTm9kZU5hbWVzKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCkpIHtcbiAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgIGlmKCFza2lwRnJvbSl7IGFkZENoaWxkKGZyb21FbCwgbWF0Y2hpbmdGcm9tRWwpOyB9XG4gICAgICAgICAgbW9ycGhFbChtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCA9IG9uQmVmb3JlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZSkge1xuICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IGN1clRvTm9kZUNoaWxkLmFjdHVhbGl6ZShmcm9tRWwub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkQ2hpbGQoZnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgY2xlYW51cEZyb21FbChmcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQsIGN1ckZyb21Ob2RlS2V5KTtcblxuICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwubm9kZU5hbWVdO1xuICAgICAgaWYgKHNwZWNpYWxFbEhhbmRsZXIpIHtcbiAgICAgICAgc3BlY2lhbEVsSGFuZGxlcihmcm9tRWwsIHRvRWwpO1xuICAgICAgfVxuICAgIH0gLy8gRU5EOiBtb3JwaENoaWxkcmVuKC4uLilcblxuICAgIHZhciBtb3JwaGVkTm9kZSA9IGZyb21Ob2RlO1xuICAgIHZhciBtb3JwaGVkTm9kZVR5cGUgPSBtb3JwaGVkTm9kZS5ub2RlVHlwZTtcbiAgICB2YXIgdG9Ob2RlVHlwZSA9IHRvTm9kZS5ub2RlVHlwZTtcblxuICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgYXJlIGdpdmVuIHR3byBET00gbm9kZXMgdGhhdCBhcmUgbm90XG4gICAgICAvLyBjb21wYXRpYmxlIChlLmcuIDxkaXY+IC0tPiA8c3Bhbj4gb3IgPGRpdj4gLS0+IFRFWFQpXG4gICAgICBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIGlmICghY29tcGFyZU5vZGVOYW1lcyhmcm9tTm9kZSwgdG9Ob2RlKSkge1xuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW92ZUNoaWxkcmVuKGZyb21Ob2RlLCBjcmVhdGVFbGVtZW50TlModG9Ob2RlLm5vZGVOYW1lLCB0b05vZGUubmFtZXNwYWNlVVJJKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBURVhUX05PREUgfHwgbW9ycGhlZE5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHsgLy8gVGV4dCBvciBjb21tZW50IG5vZGVcbiAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IG1vcnBoZWROb2RlVHlwZSkge1xuICAgICAgICAgIGlmIChtb3JwaGVkTm9kZS5ub2RlVmFsdWUgIT09IHRvTm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgIG1vcnBoZWROb2RlLm5vZGVWYWx1ZSA9IHRvTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1vcnBoZWROb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRleHQgbm9kZSB0byBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vcnBoZWROb2RlID09PSB0b05vZGUpIHtcbiAgICAgIC8vIFRoZSBcInRvIG5vZGVcIiB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgXCJmcm9tIG5vZGVcIiBzbyB3ZSBoYWQgdG9cbiAgICAgIC8vIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9Ob2RlLmlzU2FtZU5vZGUgJiYgdG9Ob2RlLmlzU2FtZU5vZGUobW9ycGhlZE5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBjaGlsZHJlbk9ubHkpO1xuXG4gICAgICAvLyBXZSBub3cgbmVlZCB0byBsb29wIG92ZXIgYW55IGtleWVkIG5vZGVzIHRoYXQgbWlnaHQgbmVlZCB0byBiZVxuICAgICAgLy8gcmVtb3ZlZC4gV2Ugb25seSBkbyB0aGUgcmVtb3ZhbCBpZiB3ZSBrbm93IHRoYXQgdGhlIGtleWVkIG5vZGVcbiAgICAgIC8vIG5ldmVyIGZvdW5kIGEgbWF0Y2guIFdoZW4gYSBrZXllZCBub2RlIGlzIG1hdGNoZWQgdXAgd2UgcmVtb3ZlXG4gICAgICAvLyBpdCBvdXQgb2YgZnJvbU5vZGVzTG9va3VwIGFuZCB3ZSB1c2UgZnJvbU5vZGVzTG9va3VwIHRvIGRldGVybWluZVxuICAgICAgLy8gaWYgYSBrZXllZCBub2RlIGhhcyBiZWVuIG1hdGNoZWQgdXAgb3Igbm90XG4gICAgICBpZiAoa2V5ZWRSZW1vdmFsTGlzdCkge1xuICAgICAgICBmb3IgKHZhciBpPTAsIGxlbj1rZXllZFJlbW92YWxMaXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICAgIHZhciBlbFRvUmVtb3ZlID0gZnJvbU5vZGVzTG9va3VwW2tleWVkUmVtb3ZhbExpc3RbaV1dO1xuICAgICAgICAgIGlmIChlbFRvUmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmVOb2RlKGVsVG9SZW1vdmUsIGVsVG9SZW1vdmUucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAobW9ycGhlZE5vZGUuYWN0dWFsaXplKSB7XG4gICAgICAgIG1vcnBoZWROb2RlID0gbW9ycGhlZE5vZGUuYWN0dWFsaXplKGZyb21Ob2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgLy8gcmVwbGFjZSB0aGUgb2xkIERPTSBub2RlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS4gVGhpcyBpcyBvbmx5XG4gICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgIGZyb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1vcnBoZWROb2RlLCBmcm9tTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vcnBoZWROb2RlO1xuICB9O1xufVxuXG52YXIgbW9ycGhkb20gPSBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycyk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vcnBoZG9tO1xuIiwgImltcG9ydCB7XG4gIFBIWF9DT01QT05FTlQsXG4gIFBIWF9ESVNBQkxFX1dJVEgsXG4gIFBIWF9GRUVEQkFDS19GT1IsXG4gIFBIWF9QUlVORSxcbiAgUEhYX1JPT1RfSUQsXG4gIFBIWF9TRVNTSU9OLFxuICBQSFhfU0tJUCxcbiAgUEhYX1NUQVRJQyxcbiAgUEhYX1RSSUdHRVJfQUNUSU9OLFxuICBQSFhfVVBEQVRFLFxuICBQSFhfU1RSRUFNLFxuICBQSFhfU1RSRUFNX1JFRixcbiAgUEhYX1ZJRVdQT1JUX1RPUCxcbiAgUEhYX1ZJRVdQT1JUX0JPVFRPTSxcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuaW1wb3J0IHtcbiAgZGV0ZWN0RHVwbGljYXRlSWRzLFxuICBpc0NpZFxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCBET00gZnJvbSBcIi4vZG9tXCJcbmltcG9ydCBET01Qb3N0TW9ycGhSZXN0b3JlciBmcm9tIFwiLi9kb21fcG9zdF9tb3JwaF9yZXN0b3JlclwiXG5pbXBvcnQgbW9ycGhkb20gZnJvbSBcIm1vcnBoZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NUGF0Y2gge1xuICBzdGF0aWMgcGF0Y2hFbChmcm9tRWwsIHRvRWwsIGFjdGl2ZUVsZW1lbnQpe1xuICAgIG1vcnBoZG9tKGZyb21FbCwgdG9FbCwge1xuICAgICAgY2hpbGRyZW5Pbmx5OiBmYWxzZSxcbiAgICAgIG9uQmVmb3JlRWxVcGRhdGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgIGlmKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGZyb21FbCkgJiYgRE9NLmlzRm9ybUlucHV0KGZyb21FbCkpe1xuICAgICAgICAgIERPTS5tZXJnZUZvY3VzZWRJbnB1dChmcm9tRWwsIHRvRWwpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3RydWN0b3IodmlldywgY29udGFpbmVyLCBpZCwgaHRtbCwgc3RyZWFtcywgdGFyZ2V0Q0lEKXtcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5saXZlU29ja2V0ID0gdmlldy5saXZlU29ja2V0XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnJvb3RJRCA9IHZpZXcucm9vdC5pZFxuICAgIHRoaXMuaHRtbCA9IGh0bWxcbiAgICB0aGlzLnN0cmVhbXMgPSBzdHJlYW1zXG4gICAgdGhpcy5zdHJlYW1JbnNlcnRzID0ge31cbiAgICB0aGlzLnRhcmdldENJRCA9IHRhcmdldENJRFxuICAgIHRoaXMuY2lkUGF0Y2ggPSBpc0NpZCh0aGlzLnRhcmdldENJRClcbiAgICB0aGlzLnBlbmRpbmdSZW1vdmVzID0gW11cbiAgICB0aGlzLnBoeFJlbW92ZSA9IHRoaXMubGl2ZVNvY2tldC5iaW5kaW5nKFwicmVtb3ZlXCIpXG4gICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICBiZWZvcmVhZGRlZDogW10sIGJlZm9yZXVwZGF0ZWQ6IFtdLCBiZWZvcmVwaHhDaGlsZEFkZGVkOiBbXSxcbiAgICAgIGFmdGVyYWRkZWQ6IFtdLCBhZnRlcnVwZGF0ZWQ6IFtdLCBhZnRlcmRpc2NhcmRlZDogW10sIGFmdGVycGh4Q2hpbGRBZGRlZDogW10sXG4gICAgICBhZnRlcnRyYW5zaXRpb25zRGlzY2FyZGVkOiBbXVxuICAgIH1cbiAgfVxuXG4gIGJlZm9yZShraW5kLCBjYWxsYmFjayl7IHRoaXMuY2FsbGJhY2tzW2BiZWZvcmUke2tpbmR9YF0ucHVzaChjYWxsYmFjaykgfVxuICBhZnRlcihraW5kLCBjYWxsYmFjayl7IHRoaXMuY2FsbGJhY2tzW2BhZnRlciR7a2luZH1gXS5wdXNoKGNhbGxiYWNrKSB9XG5cbiAgdHJhY2tCZWZvcmUoa2luZCwgLi4uYXJncyl7XG4gICAgdGhpcy5jYWxsYmFja3NbYGJlZm9yZSR7a2luZH1gXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKC4uLmFyZ3MpKVxuICB9XG5cbiAgdHJhY2tBZnRlcihraW5kLCAuLi5hcmdzKXtcbiAgICB0aGlzLmNhbGxiYWNrc1tgYWZ0ZXIke2tpbmR9YF0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayguLi5hcmdzKSlcbiAgfVxuXG4gIG1hcmtQcnVuYWJsZUNvbnRlbnRGb3JSZW1vdmFsKCl7XG4gICAgbGV0IHBoeFVwZGF0ZSA9IHRoaXMubGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9VUERBVEUpXG4gICAgRE9NLmFsbCh0aGlzLmNvbnRhaW5lciwgYFske3BoeFVwZGF0ZX09JHtQSFhfU1RSRUFNfV1gLCBlbCA9PiBlbC5pbm5lckhUTUwgPSBcIlwiKVxuICAgIERPTS5hbGwodGhpcy5jb250YWluZXIsIGBbJHtwaHhVcGRhdGV9PWFwcGVuZF0gPiAqLCBbJHtwaHhVcGRhdGV9PXByZXBlbmRdID4gKmAsIGVsID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShQSFhfUFJVTkUsIFwiXCIpXG4gICAgfSlcbiAgfVxuXG4gIHBlcmZvcm0oKXtcbiAgICBsZXQge3ZpZXcsIGxpdmVTb2NrZXQsIGNvbnRhaW5lciwgaHRtbH0gPSB0aGlzXG4gICAgbGV0IHRhcmdldENvbnRhaW5lciA9IHRoaXMuaXNDSURQYXRjaCgpID8gdGhpcy50YXJnZXRDSURDb250YWluZXIoaHRtbCkgOiBjb250YWluZXJcbiAgICBpZih0aGlzLmlzQ0lEUGF0Y2goKSAmJiAhdGFyZ2V0Q29udGFpbmVyKXsgcmV0dXJuIH1cblxuICAgIGxldCBmb2N1c2VkID0gbGl2ZVNvY2tldC5nZXRBY3RpdmVFbGVtZW50KClcbiAgICBsZXQge3NlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmR9ID0gZm9jdXNlZCAmJiBET00uaGFzU2VsZWN0aW9uUmFuZ2UoZm9jdXNlZCkgPyBmb2N1c2VkIDoge31cbiAgICBsZXQgcGh4VXBkYXRlID0gbGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9VUERBVEUpXG4gICAgbGV0IHBoeEZlZWRiYWNrRm9yID0gbGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9GRUVEQkFDS19GT1IpXG4gICAgbGV0IGRpc2FibGVXaXRoID0gbGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9ESVNBQkxFX1dJVEgpXG4gICAgbGV0IHBoeFZpZXdwb3J0VG9wID0gbGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9WSUVXUE9SVF9UT1ApXG4gICAgbGV0IHBoeFZpZXdwb3J0Qm90dG9tID0gbGl2ZVNvY2tldC5iaW5kaW5nKFBIWF9WSUVXUE9SVF9CT1RUT00pXG4gICAgbGV0IHBoeFRyaWdnZXJFeHRlcm5hbCA9IGxpdmVTb2NrZXQuYmluZGluZyhQSFhfVFJJR0dFUl9BQ1RJT04pXG4gICAgbGV0IGFkZGVkID0gW11cbiAgICBsZXQgdHJhY2tlZElucHV0cyA9IFtdXG4gICAgbGV0IHVwZGF0ZXMgPSBbXVxuICAgIGxldCBhcHBlbmRQcmVwZW5kVXBkYXRlcyA9IFtdXG5cbiAgICBsZXQgZXh0ZXJuYWxGb3JtVHJpZ2dlcmVkID0gbnVsbFxuXG4gICAgbGV0IGRpZmZIVE1MID0gbGl2ZVNvY2tldC50aW1lKFwicHJlbW9ycGggY29udGFpbmVyIHByZXBcIiwgKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGREaWZmSFRNTChjb250YWluZXIsIGh0bWwsIHBoeFVwZGF0ZSwgdGFyZ2V0Q29udGFpbmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLnRyYWNrQmVmb3JlKFwiYWRkZWRcIiwgY29udGFpbmVyKVxuICAgIHRoaXMudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsIGNvbnRhaW5lciwgY29udGFpbmVyKVxuXG4gICAgbGl2ZVNvY2tldC50aW1lKFwibW9ycGhkb21cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zdHJlYW1zLmZvckVhY2goKFtyZWYsIGluc2VydHMsIGRlbGV0ZUlkcywgcmVzZXRdKSA9PiB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGluc2VydHMpLmZvckVhY2goKFtrZXksIFtzdHJlYW1BdCwgbGltaXRdXSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RyZWFtSW5zZXJ0c1trZXldID0ge3JlZiwgc3RyZWFtQXQsIGxpbWl0fVxuICAgICAgICB9KVxuICAgICAgICBpZihyZXNldCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBET00uYWxsKGNvbnRhaW5lciwgYFske1BIWF9TVFJFQU1fUkVGfT1cIiR7cmVmfVwiXWAsIGNoaWxkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RyZWFtQ2hpbGRFbGVtZW50KGNoaWxkKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlSWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgIGxldCBjaGlsZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXWApXG4gICAgICAgICAgaWYoY2hpbGQpeyB0aGlzLnJlbW92ZVN0cmVhbUNoaWxkRWxlbWVudChjaGlsZCkgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgbW9ycGhkb20odGFyZ2V0Q29udGFpbmVyLCBkaWZmSFRNTCwge1xuICAgICAgICBjaGlsZHJlbk9ubHk6IHRhcmdldENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoUEhYX0NPTVBPTkVOVCkgPT09IG51bGwsXG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIERPTS5pc1BoeERlc3Ryb3llZChub2RlKSA/IG51bGwgOiBub2RlLmlkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNraXAgaW5kZXhpbmcgZnJvbSBjaGlsZHJlbiB3aGVuIGNvbnRhaW5lciBpcyBzdHJlYW1cbiAgICAgICAgc2tpcEZyb21DaGlsZHJlbjogKGZyb20pID0+IHsgcmV0dXJuIGZyb20uZ2V0QXR0cmlidXRlKHBoeFVwZGF0ZSkgPT09IFBIWF9TVFJFQU0gfSxcbiAgICAgICAgLy8gdGVsbCBtb3JwaGRvbSBob3cgdG8gYWRkIGEgY2hpbGRcbiAgICAgICAgYWRkQ2hpbGQ6IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgbGV0IHtyZWYsIHN0cmVhbUF0LCBsaW1pdH0gPSB0aGlzLmdldFN0cmVhbUluc2VydChjaGlsZClcbiAgICAgICAgICBpZihyZWYgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSB9XG5cbiAgICAgICAgICBET00ucHV0U3RpY2t5KGNoaWxkLCBQSFhfU1RSRUFNX1JFRiwgZWwgPT4gZWwuc2V0QXR0cmlidXRlKFBIWF9TVFJFQU1fUkVGLCByZWYpKVxuXG4gICAgICAgICAgLy8gc3RyZWFtaW5nXG4gICAgICAgICAgaWYoc3RyZWFtQXQgPT09IDApe1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY2hpbGQpXG4gICAgICAgICAgfSBlbHNlIGlmKHN0cmVhbUF0ID09PSAtMSl7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgfSBlbHNlIGlmKHN0cmVhbUF0ID4gMCl7XG4gICAgICAgICAgICBsZXQgc2libGluZyA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKVtzdHJlYW1BdF1cbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHNpYmxpbmcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGxpbWl0ICE9PSBudWxsICYmIEFycmF5LmZyb20ocGFyZW50LmNoaWxkcmVuKVxuICAgICAgICAgIGxldCBjaGlsZHJlblRvUmVtb3ZlID0gW11cbiAgICAgICAgICBpZihsaW1pdCAmJiBsaW1pdCA8IDAgJiYgY2hpbGRyZW4ubGVuZ3RoID4gbGltaXQgKiAtMSl7XG4gICAgICAgICAgICBjaGlsZHJlblRvUmVtb3ZlID0gY2hpbGRyZW4uc2xpY2UoMCwgY2hpbGRyZW4ubGVuZ3RoICsgbGltaXQpXG4gICAgICAgICAgfSBlbHNlIGlmKGxpbWl0ICYmIGxpbWl0ID49IDAgJiYgY2hpbGRyZW4ubGVuZ3RoID4gbGltaXQpe1xuICAgICAgICAgICAgY2hpbGRyZW5Ub1JlbW92ZSA9IGNoaWxkcmVuLnNsaWNlKGxpbWl0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlblRvUmVtb3ZlLmZvckVhY2gocmVtb3ZlQ2hpbGQgPT4ge1xuICAgICAgICAgICAgLy8gZG8gbm90IHJlbW92ZSBjaGlsZCBhcyBwYXJ0IG9mIGxpbWl0IGlmIHdlIGFyZSByZS1hZGRpbmcgaXRcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0cmVhbUluc2VydHNbcmVtb3ZlQ2hpbGQuaWRdKXtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTdHJlYW1DaGlsZEVsZW1lbnQocmVtb3ZlQ2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVOb2RlQWRkZWQ6IChlbCkgPT4ge1xuICAgICAgICAgIERPTS5tYXliZUFkZFByaXZhdGVIb29rcyhlbCwgcGh4Vmlld3BvcnRUb3AsIHBoeFZpZXdwb3J0Qm90dG9tKVxuICAgICAgICAgIHRoaXMudHJhY2tCZWZvcmUoXCJhZGRlZFwiLCBlbClcbiAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfSxcbiAgICAgICAgb25Ob2RlQWRkZWQ6IChlbCkgPT4ge1xuICAgICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSl7IHRoaXMubWF5YmVSZU9yZGVyU3RyZWFtKGVsKSB9XG5cbiAgICAgICAgICAvLyBoYWNrIHRvIGZpeCBTYWZhcmkgaGFuZGxpbmcgb2YgaW1nIHNyY3NldCBhbmQgdmlkZW8gdGFnc1xuICAgICAgICAgIGlmKGVsIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiBlbC5zcmNzZXQpe1xuICAgICAgICAgICAgZWwuc3Jjc2V0ID0gZWwuc3Jjc2V0XG4gICAgICAgICAgfSBlbHNlIGlmKGVsIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCAmJiBlbC5hdXRvcGxheSl7XG4gICAgICAgICAgICBlbC5wbGF5KClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoRE9NLmlzTm93VHJpZ2dlckZvcm1FeHRlcm5hbChlbCwgcGh4VHJpZ2dlckV4dGVybmFsKSl7XG4gICAgICAgICAgICBleHRlcm5hbEZvcm1UcmlnZ2VyZWQgPSBlbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSAmJiBlbC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpICYmIERPTS5pc0Zvcm1JbnB1dChlbCkpe1xuICAgICAgICAgICAgdHJhY2tlZElucHV0cy5wdXNoKGVsKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBuZXN0ZWQgdmlldyBoYW5kbGluZ1xuICAgICAgICAgIGlmKChET00uaXNQaHhDaGlsZChlbCkgJiYgdmlldy5vd25zRWxlbWVudChlbCkpIHx8IERPTS5pc1BoeFN0aWNreShlbCkgJiYgdmlldy5vd25zRWxlbWVudChlbC5wYXJlbnROb2RlKSl7XG4gICAgICAgICAgICB0aGlzLnRyYWNrQWZ0ZXIoXCJwaHhDaGlsZEFkZGVkXCIsIGVsKVxuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRlZC5wdXNoKGVsKVxuICAgICAgICB9LFxuICAgICAgICBvbk5vZGVEaXNjYXJkZWQ6IChlbCkgPT4gdGhpcy5vbk5vZGVEaXNjYXJkZWQoZWwpLFxuICAgICAgICBvbkJlZm9yZU5vZGVEaXNjYXJkZWQ6IChlbCkgPT4ge1xuICAgICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSAmJiBlbC5nZXRBdHRyaWJ1dGUoUEhYX1BSVU5FKSAhPT0gbnVsbCl7IHJldHVybiB0cnVlIH1cbiAgICAgICAgICBpZihlbC5wYXJlbnRFbGVtZW50ICE9PSBudWxsICYmIGVsLmlkICYmXG4gICAgICAgICAgICBET00uaXNQaHhVcGRhdGUoZWwucGFyZW50RWxlbWVudCwgcGh4VXBkYXRlLCBbUEhYX1NUUkVBTSwgXCJhcHBlbmRcIiwgXCJwcmVwZW5kXCJdKSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodGhpcy5tYXliZVBlbmRpbmdSZW1vdmUoZWwpKXsgcmV0dXJuIGZhbHNlIH1cbiAgICAgICAgICBpZih0aGlzLnNraXBDSURTaWJsaW5nKGVsKSl7IHJldHVybiBmYWxzZSB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvbkVsVXBkYXRlZDogKGVsKSA9PiB7XG4gICAgICAgICAgaWYoRE9NLmlzTm93VHJpZ2dlckZvcm1FeHRlcm5hbChlbCwgcGh4VHJpZ2dlckV4dGVybmFsKSl7XG4gICAgICAgICAgICBleHRlcm5hbEZvcm1UcmlnZ2VyZWQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVzLnB1c2goZWwpXG4gICAgICAgICAgdGhpcy5tYXliZVJlT3JkZXJTdHJlYW0oZWwpXG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlRWxVcGRhdGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgRE9NLm1heWJlQWRkUHJpdmF0ZUhvb2tzKHRvRWwsIHBoeFZpZXdwb3J0VG9wLCBwaHhWaWV3cG9ydEJvdHRvbSlcbiAgICAgICAgICBET00uY2xlYW5DaGlsZE5vZGVzKHRvRWwsIHBoeFVwZGF0ZSlcbiAgICAgICAgICBpZih0aGlzLnNraXBDSURTaWJsaW5nKHRvRWwpKXsgcmV0dXJuIGZhbHNlIH1cbiAgICAgICAgICBpZihET00uaXNQaHhTdGlja3koZnJvbUVsKSl7IHJldHVybiBmYWxzZSB9XG4gICAgICAgICAgaWYoRE9NLmlzSWdub3JlZChmcm9tRWwsIHBoeFVwZGF0ZSkgfHwgKGZyb21FbC5mb3JtICYmIGZyb21FbC5mb3JtLmlzU2FtZU5vZGUoZXh0ZXJuYWxGb3JtVHJpZ2dlcmVkKSkpe1xuICAgICAgICAgICAgdGhpcy50cmFja0JlZm9yZShcInVwZGF0ZWRcIiwgZnJvbUVsLCB0b0VsKVxuICAgICAgICAgICAgRE9NLm1lcmdlQXR0cnMoZnJvbUVsLCB0b0VsLCB7aXNJZ25vcmVkOiB0cnVlfSlcbiAgICAgICAgICAgIHVwZGF0ZXMucHVzaChmcm9tRWwpXG4gICAgICAgICAgICBET00uYXBwbHlTdGlja3lPcGVyYXRpb25zKGZyb21FbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihmcm9tRWwudHlwZSA9PT0gXCJudW1iZXJcIiAmJiAoZnJvbUVsLnZhbGlkaXR5ICYmIGZyb21FbC52YWxpZGl0eS5iYWRJbnB1dCkpeyByZXR1cm4gZmFsc2UgfVxuICAgICAgICAgIGlmKCFET00uc3luY1BlbmRpbmdSZWYoZnJvbUVsLCB0b0VsLCBkaXNhYmxlV2l0aCkpe1xuICAgICAgICAgICAgaWYoRE9NLmlzVXBsb2FkSW5wdXQoZnJvbUVsKSl7XG4gICAgICAgICAgICAgIHRoaXMudHJhY2tCZWZvcmUoXCJ1cGRhdGVkXCIsIGZyb21FbCwgdG9FbClcbiAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKGZyb21FbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTS5hcHBseVN0aWNreU9wZXJhdGlvbnMoZnJvbUVsKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbmVzdGVkIHZpZXcgaGFuZGxpbmdcbiAgICAgICAgICBpZihET00uaXNQaHhDaGlsZCh0b0VsKSl7XG4gICAgICAgICAgICBsZXQgcHJldlNlc3Npb24gPSBmcm9tRWwuZ2V0QXR0cmlidXRlKFBIWF9TRVNTSU9OKVxuICAgICAgICAgICAgRE9NLm1lcmdlQXR0cnMoZnJvbUVsLCB0b0VsLCB7ZXhjbHVkZTogW1BIWF9TVEFUSUNdfSlcbiAgICAgICAgICAgIGlmKHByZXZTZXNzaW9uICE9PSBcIlwiKXsgZnJvbUVsLnNldEF0dHJpYnV0ZShQSFhfU0VTU0lPTiwgcHJldlNlc3Npb24pIH1cbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUoUEhYX1JPT1RfSUQsIHRoaXMucm9vdElEKVxuICAgICAgICAgICAgRE9NLmFwcGx5U3RpY2t5T3BlcmF0aW9ucyhmcm9tRWwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpbnB1dCBoYW5kbGluZ1xuICAgICAgICAgIERPTS5jb3B5UHJpdmF0ZXModG9FbCwgZnJvbUVsKVxuXG4gICAgICAgICAgbGV0IGlzRm9jdXNlZEZvcm1FbCA9IGZvY3VzZWQgJiYgZnJvbUVsLmlzU2FtZU5vZGUoZm9jdXNlZCkgJiYgRE9NLmlzRm9ybUlucHV0KGZyb21FbClcbiAgICAgICAgICBpZihpc0ZvY3VzZWRGb3JtRWwgJiYgZnJvbUVsLnR5cGUgIT09IFwiaGlkZGVuXCIpe1xuICAgICAgICAgICAgdGhpcy50cmFja0JlZm9yZShcInVwZGF0ZWRcIiwgZnJvbUVsLCB0b0VsKVxuICAgICAgICAgICAgRE9NLm1lcmdlRm9jdXNlZElucHV0KGZyb21FbCwgdG9FbClcbiAgICAgICAgICAgIERPTS5zeW5jQXR0cnNUb1Byb3BzKGZyb21FbClcbiAgICAgICAgICAgIHVwZGF0ZXMucHVzaChmcm9tRWwpXG4gICAgICAgICAgICBET00uYXBwbHlTdGlja3lPcGVyYXRpb25zKGZyb21FbClcbiAgICAgICAgICAgIHRyYWNrZWRJbnB1dHMucHVzaChmcm9tRWwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoRE9NLmlzUGh4VXBkYXRlKHRvRWwsIHBoeFVwZGF0ZSwgW1wiYXBwZW5kXCIsIFwicHJlcGVuZFwiXSkpe1xuICAgICAgICAgICAgICBhcHBlbmRQcmVwZW5kVXBkYXRlcy5wdXNoKG5ldyBET01Qb3N0TW9ycGhSZXN0b3Jlcihmcm9tRWwsIHRvRWwsIHRvRWwuZ2V0QXR0cmlidXRlKHBoeFVwZGF0ZSkpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBET00uc3luY0F0dHJzVG9Qcm9wcyh0b0VsKVxuICAgICAgICAgICAgRE9NLmFwcGx5U3RpY2t5T3BlcmF0aW9ucyh0b0VsKVxuICAgICAgICAgICAgaWYodG9FbC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpICYmIERPTS5pc0Zvcm1JbnB1dCh0b0VsKSl7XG4gICAgICAgICAgICAgIHRyYWNrZWRJbnB1dHMucHVzaCh0b0VsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmFja0JlZm9yZShcInVwZGF0ZWRcIiwgZnJvbUVsLCB0b0VsKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmKGxpdmVTb2NrZXQuaXNEZWJ1Z0VuYWJsZWQoKSl7IGRldGVjdER1cGxpY2F0ZUlkcygpIH1cblxuICAgIGlmKGFwcGVuZFByZXBlbmRVcGRhdGVzLmxlbmd0aCA+IDApe1xuICAgICAgbGl2ZVNvY2tldC50aW1lKFwicG9zdC1tb3JwaCBhcHBlbmQvcHJlcGVuZCByZXN0b3JhdGlvblwiLCAoKSA9PiB7XG4gICAgICAgIGFwcGVuZFByZXBlbmRVcGRhdGVzLmZvckVhY2godXBkYXRlID0+IHVwZGF0ZS5wZXJmb3JtKCkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRyYWNrZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBET00ubWF5YmVIaWRlRmVlZGJhY2sodGFyZ2V0Q29udGFpbmVyLCBpbnB1dCwgcGh4RmVlZGJhY2tGb3IpXG4gICAgfSlcblxuICAgIGxpdmVTb2NrZXQuc2lsZW5jZUV2ZW50cygoKSA9PiBET00ucmVzdG9yZUZvY3VzKGZvY3VzZWQsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpKVxuICAgIERPTS5kaXNwYXRjaEV2ZW50KGRvY3VtZW50LCBcInBoeDp1cGRhdGVcIilcbiAgICBhZGRlZC5mb3JFYWNoKGVsID0+IHRoaXMudHJhY2tBZnRlcihcImFkZGVkXCIsIGVsKSlcbiAgICB1cGRhdGVzLmZvckVhY2goZWwgPT4gdGhpcy50cmFja0FmdGVyKFwidXBkYXRlZFwiLCBlbCkpXG5cbiAgICB0aGlzLnRyYW5zaXRpb25QZW5kaW5nUmVtb3ZlcygpXG5cbiAgICBpZihleHRlcm5hbEZvcm1UcmlnZ2VyZWQpe1xuICAgICAgbGl2ZVNvY2tldC51bmxvYWQoKVxuICAgICAgZXh0ZXJuYWxGb3JtVHJpZ2dlcmVkLnN1Ym1pdCgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBvbk5vZGVEaXNjYXJkZWQoZWwpe1xuICAgIC8vIG5lc3RlZCB2aWV3IGhhbmRsaW5nXG4gICAgaWYoRE9NLmlzUGh4Q2hpbGQoZWwpIHx8IERPTS5pc1BoeFN0aWNreShlbCkpeyB0aGlzLmxpdmVTb2NrZXQuZGVzdHJveVZpZXdCeUVsKGVsKSB9XG4gICAgdGhpcy50cmFja0FmdGVyKFwiZGlzY2FyZGVkXCIsIGVsKVxuICB9XG5cbiAgbWF5YmVQZW5kaW5nUmVtb3ZlKG5vZGUpe1xuICAgIGlmKG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKHRoaXMucGh4UmVtb3ZlKSAhPT0gbnVsbCl7XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmVzLnB1c2gobm9kZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVN0cmVhbUNoaWxkRWxlbWVudChjaGlsZCl7XG4gICAgaWYoIXRoaXMubWF5YmVQZW5kaW5nUmVtb3ZlKGNoaWxkKSl7XG4gICAgICBjaGlsZC5yZW1vdmUoKVxuICAgICAgdGhpcy5vbk5vZGVEaXNjYXJkZWQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgZ2V0U3RyZWFtSW5zZXJ0KGVsKXtcbiAgICBsZXQgaW5zZXJ0ID0gZWwuaWQgPyB0aGlzLnN0cmVhbUluc2VydHNbZWwuaWRdIDoge31cbiAgICByZXR1cm4gaW5zZXJ0IHx8IHt9XG4gIH1cblxuICBtYXliZVJlT3JkZXJTdHJlYW0oZWwpe1xuICAgIGxldCB7cmVmLCBzdHJlYW1BdCwgbGltaXR9ID0gdGhpcy5nZXRTdHJlYW1JbnNlcnQoZWwpXG4gICAgaWYoc3RyZWFtQXQgPT09IHVuZGVmaW5lZCl7IHJldHVybiB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHRoZSBQSFhfU1RSRUFNX1JFRiBoZXJlIGFzIHdlbGwgYXMgYWRkQ2hpbGQgaXMgaW52b2tlZCBvbmx5IGZvciBwYXJlbnRzXG4gICAgRE9NLnB1dFN0aWNreShlbCwgUEhYX1NUUkVBTV9SRUYsIGVsID0+IGVsLnNldEF0dHJpYnV0ZShQSFhfU1RSRUFNX1JFRiwgcmVmKSlcblxuICAgIGlmKHN0cmVhbUF0ID09PSAwKXtcbiAgICAgIGVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsLCBlbC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKVxuICAgIH0gZWxzZSBpZihzdHJlYW1BdCA+IDApe1xuICAgICAgbGV0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShlbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKVxuICAgICAgbGV0IG9sZEluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihlbClcbiAgICAgIGlmKHN0cmVhbUF0ID49IGNoaWxkcmVuLmxlbmd0aCAtIDEpe1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHNpYmxpbmcgPSBjaGlsZHJlbltzdHJlYW1BdF1cbiAgICAgICAgaWYob2xkSW5kZXggPiBzdHJlYW1BdCl7XG4gICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWwsIHNpYmxpbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWwsIHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJhbnNpdGlvblBlbmRpbmdSZW1vdmVzKCl7XG4gICAgbGV0IHtwZW5kaW5nUmVtb3ZlcywgbGl2ZVNvY2tldH0gPSB0aGlzXG4gICAgaWYocGVuZGluZ1JlbW92ZXMubGVuZ3RoID4gMCl7XG4gICAgICBsaXZlU29ja2V0LnRyYW5zaXRpb25SZW1vdmVzKHBlbmRpbmdSZW1vdmVzKVxuICAgICAgbGl2ZVNvY2tldC5yZXF1ZXN0RE9NVXBkYXRlKCgpID0+IHtcbiAgICAgICAgcGVuZGluZ1JlbW92ZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgbGV0IGNoaWxkID0gRE9NLmZpcnN0UGh4Q2hpbGQoZWwpXG4gICAgICAgICAgaWYoY2hpbGQpeyBsaXZlU29ja2V0LmRlc3Ryb3lWaWV3QnlFbChjaGlsZCkgfVxuICAgICAgICAgIGVsLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudHJhY2tBZnRlcihcInRyYW5zaXRpb25zRGlzY2FyZGVkXCIsIHBlbmRpbmdSZW1vdmVzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpc0NJRFBhdGNoKCl7IHJldHVybiB0aGlzLmNpZFBhdGNoIH1cblxuICBza2lwQ0lEU2libGluZyhlbCl7XG4gICAgcmV0dXJuIGVsLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBlbC5nZXRBdHRyaWJ1dGUoUEhYX1NLSVApICE9PSBudWxsXG4gIH1cblxuICB0YXJnZXRDSURDb250YWluZXIoaHRtbCl7XG4gICAgaWYoIXRoaXMuaXNDSURQYXRjaCgpKXsgcmV0dXJuIH1cbiAgICBsZXQgW2ZpcnN0LCAuLi5yZXN0XSA9IERPTS5maW5kQ29tcG9uZW50Tm9kZUxpc3QodGhpcy5jb250YWluZXIsIHRoaXMudGFyZ2V0Q0lEKVxuICAgIGlmKHJlc3QubGVuZ3RoID09PSAwICYmIERPTS5jaGlsZE5vZGVMZW5ndGgoaHRtbCkgPT09IDEpe1xuICAgICAgcmV0dXJuIGZpcnN0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaXJzdCAmJiBmaXJzdC5wYXJlbnROb2RlXG4gICAgfVxuICB9XG5cbiAgLy8gYnVpbGRzIEhUTUwgZm9yIG1vcnBoZG9tIHBhdGNoXG4gIC8vIC0gZm9yIGZ1bGwgcGF0Y2hlcyBvZiBMaXZlVmlldyBvciBhIGNvbXBvbmVudCB3aXRoIGEgc2luZ2xlXG4gIC8vICAgcm9vdCBub2RlLCBzaW1wbHkgcmV0dXJucyB0aGUgSFRNTFxuICAvLyAtIGZvciBwYXRjaGVzIG9mIGEgY29tcG9uZW50IHdpdGggbXVsdGlwbGUgcm9vdCBub2RlcywgdGhlXG4gIC8vICAgcGFyZW50IG5vZGUgYmVjb21lcyB0aGUgdGFyZ2V0IGNvbnRhaW5lciBhbmQgbm9uLWNvbXBvbmVudFxuICAvLyAgIHNpYmxpbmdzIGFyZSBtYXJrZWQgYXMgc2tpcC5cbiAgYnVpbGREaWZmSFRNTChjb250YWluZXIsIGh0bWwsIHBoeFVwZGF0ZSwgdGFyZ2V0Q29udGFpbmVyKXtcbiAgICBsZXQgaXNDSURQYXRjaCA9IHRoaXMuaXNDSURQYXRjaCgpXG4gICAgbGV0IGlzQ0lEV2l0aFNpbmdsZVJvb3QgPSBpc0NJRFBhdGNoICYmIHRhcmdldENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoUEhYX0NPTVBPTkVOVCkgPT09IHRoaXMudGFyZ2V0Q0lELnRvU3RyaW5nKClcbiAgICBpZighaXNDSURQYXRjaCB8fCBpc0NJRFdpdGhTaW5nbGVSb290KXtcbiAgICAgIHJldHVybiBodG1sXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbXBvbmVudCBwYXRjaCB3aXRoIG11bHRpcGxlIENJRCByb290c1xuICAgICAgbGV0IGRpZmZDb250YWluZXIgPSBudWxsXG4gICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIilcbiAgICAgIGRpZmZDb250YWluZXIgPSBET00uY2xvbmVOb2RlKHRhcmdldENvbnRhaW5lcilcbiAgICAgIGxldCBbZmlyc3RDb21wb25lbnQsIC4uLnJlc3RdID0gRE9NLmZpbmRDb21wb25lbnROb2RlTGlzdChkaWZmQ29udGFpbmVyLCB0aGlzLnRhcmdldENJRClcbiAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgIHJlc3QuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSlcbiAgICAgIEFycmF5LmZyb20oZGlmZkNvbnRhaW5lci5jaGlsZE5vZGVzKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgLy8gd2UgY2FuIG9ubHkgc2tpcCB0cmFja2FibGUgbm9kZXMgd2l0aCBhbiBJRFxuICAgICAgICBpZihjaGlsZC5pZCAmJiBjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgY2hpbGQuZ2V0QXR0cmlidXRlKFBIWF9DT01QT05FTlQpICE9PSB0aGlzLnRhcmdldENJRC50b1N0cmluZygpKXtcbiAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoUEhYX1NLSVAsIFwiXCIpXG4gICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgQXJyYXkuZnJvbSh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXMpLmZvckVhY2goZWwgPT4gZGlmZkNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWwsIGZpcnN0Q29tcG9uZW50KSlcbiAgICAgIGZpcnN0Q29tcG9uZW50LnJlbW92ZSgpXG4gICAgICByZXR1cm4gZGlmZkNvbnRhaW5lci5vdXRlckhUTUxcbiAgICB9XG4gIH1cblxuICBpbmRleE9mKHBhcmVudCwgY2hpbGQpeyByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YoY2hpbGQpIH1cbn1cbiIsICJpbXBvcnQge1xuICBDT01QT05FTlRTLFxuICBEWU5BTUlDUyxcbiAgVEVNUExBVEVTLFxuICBFVkVOVFMsXG4gIFBIWF9DT01QT05FTlQsXG4gIFBIWF9TS0lQLFxuICBSRVBMWSxcbiAgU1RBVElDLFxuICBUSVRMRSxcbiAgU1RSRUFNLFxufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQge1xuICBpc09iamVjdCxcbiAgbG9nRXJyb3IsXG4gIGlzQ2lkLFxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVkIHtcbiAgc3RhdGljIGV4dHJhY3QoZGlmZil7XG4gICAgbGV0IHtbUkVQTFldOiByZXBseSwgW0VWRU5UU106IGV2ZW50cywgW1RJVExFXTogdGl0bGV9ID0gZGlmZlxuICAgIGRlbGV0ZSBkaWZmW1JFUExZXVxuICAgIGRlbGV0ZSBkaWZmW0VWRU5UU11cbiAgICBkZWxldGUgZGlmZltUSVRMRV1cbiAgICByZXR1cm4ge2RpZmYsIHRpdGxlLCByZXBseTogcmVwbHkgfHwgbnVsbCwgZXZlbnRzOiBldmVudHMgfHwgW119XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2aWV3SWQsIHJlbmRlcmVkKXtcbiAgICB0aGlzLnZpZXdJZCA9IHZpZXdJZFxuICAgIHRoaXMucmVuZGVyZWQgPSB7fVxuICAgIHRoaXMubWVyZ2VEaWZmKHJlbmRlcmVkKVxuICB9XG5cbiAgcGFyZW50Vmlld0lkKCl7IHJldHVybiB0aGlzLnZpZXdJZCB9XG5cbiAgdG9TdHJpbmcob25seUNpZHMpe1xuICAgIGxldCBbc3RyLCBzdHJlYW1zXSA9IHRoaXMucmVjdXJzaXZlVG9TdHJpbmcodGhpcy5yZW5kZXJlZCwgdGhpcy5yZW5kZXJlZFtDT01QT05FTlRTXSwgb25seUNpZHMpXG4gICAgcmV0dXJuIFtzdHIsIHN0cmVhbXNdXG4gIH1cblxuICByZWN1cnNpdmVUb1N0cmluZyhyZW5kZXJlZCwgY29tcG9uZW50cyA9IHJlbmRlcmVkW0NPTVBPTkVOVFNdLCBvbmx5Q2lkcyl7XG4gICAgb25seUNpZHMgPSBvbmx5Q2lkcyA/IG5ldyBTZXQob25seUNpZHMpIDogbnVsbFxuICAgIGxldCBvdXRwdXQgPSB7YnVmZmVyOiBcIlwiLCBjb21wb25lbnRzOiBjb21wb25lbnRzLCBvbmx5Q2lkczogb25seUNpZHMsIHN0cmVhbXM6IG5ldyBTZXQoKX1cbiAgICB0aGlzLnRvT3V0cHV0QnVmZmVyKHJlbmRlcmVkLCBudWxsLCBvdXRwdXQpXG4gICAgcmV0dXJuIFtvdXRwdXQuYnVmZmVyLCBvdXRwdXQuc3RyZWFtc11cbiAgfVxuXG4gIGNvbXBvbmVudENJRHMoZGlmZil7IHJldHVybiBPYmplY3Qua2V5cyhkaWZmW0NPTVBPTkVOVFNdIHx8IHt9KS5tYXAoaSA9PiBwYXJzZUludChpKSkgfVxuXG4gIGlzQ29tcG9uZW50T25seURpZmYoZGlmZil7XG4gICAgaWYoIWRpZmZbQ09NUE9ORU5UU10peyByZXR1cm4gZmFsc2UgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWZmKS5sZW5ndGggPT09IDFcbiAgfVxuXG4gIGdldENvbXBvbmVudChkaWZmLCBjaWQpeyByZXR1cm4gZGlmZltDT01QT05FTlRTXVtjaWRdIH1cblxuICBtZXJnZURpZmYoZGlmZil7XG4gICAgbGV0IG5ld2MgPSBkaWZmW0NPTVBPTkVOVFNdXG4gICAgbGV0IGNhY2hlID0ge31cbiAgICBkZWxldGUgZGlmZltDT01QT05FTlRTXVxuICAgIHRoaXMucmVuZGVyZWQgPSB0aGlzLm11dGFibGVNZXJnZSh0aGlzLnJlbmRlcmVkLCBkaWZmKVxuICAgIHRoaXMucmVuZGVyZWRbQ09NUE9ORU5UU10gPSB0aGlzLnJlbmRlcmVkW0NPTVBPTkVOVFNdIHx8IHt9XG5cbiAgICBpZihuZXdjKXtcbiAgICAgIGxldCBvbGRjID0gdGhpcy5yZW5kZXJlZFtDT01QT05FTlRTXVxuXG4gICAgICBmb3IobGV0IGNpZCBpbiBuZXdjKXtcbiAgICAgICAgbmV3Y1tjaWRdID0gdGhpcy5jYWNoZWRGaW5kQ29tcG9uZW50KGNpZCwgbmV3Y1tjaWRdLCBvbGRjLCBuZXdjLCBjYWNoZSlcbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBjaWQgaW4gbmV3Yyl7IG9sZGNbY2lkXSA9IG5ld2NbY2lkXSB9XG4gICAgICBkaWZmW0NPTVBPTkVOVFNdID0gbmV3Y1xuICAgIH1cbiAgfVxuXG4gIGNhY2hlZEZpbmRDb21wb25lbnQoY2lkLCBjZGlmZiwgb2xkYywgbmV3YywgY2FjaGUpe1xuICAgIGlmKGNhY2hlW2NpZF0pe1xuICAgICAgcmV0dXJuIGNhY2hlW2NpZF1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5kaWZmLCBzdGF0LCBzY2lkID0gY2RpZmZbU1RBVElDXVxuXG4gICAgICBpZihpc0NpZChzY2lkKSl7XG4gICAgICAgIGxldCB0ZGlmZlxuXG4gICAgICAgIGlmKHNjaWQgPiAwKXtcbiAgICAgICAgICB0ZGlmZiA9IHRoaXMuY2FjaGVkRmluZENvbXBvbmVudChzY2lkLCBuZXdjW3NjaWRdLCBvbGRjLCBuZXdjLCBjYWNoZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZGlmZiA9IG9sZGNbLXNjaWRdXG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ID0gdGRpZmZbU1RBVElDXVxuICAgICAgICBuZGlmZiA9IHRoaXMuY2xvbmVNZXJnZSh0ZGlmZiwgY2RpZmYpXG4gICAgICAgIG5kaWZmW1NUQVRJQ10gPSBzdGF0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZGlmZiA9IGNkaWZmW1NUQVRJQ10gIT09IHVuZGVmaW5lZCA/IGNkaWZmIDogdGhpcy5jbG9uZU1lcmdlKG9sZGNbY2lkXSB8fCB7fSwgY2RpZmYpXG4gICAgICB9XG5cbiAgICAgIGNhY2hlW2NpZF0gPSBuZGlmZlxuICAgICAgcmV0dXJuIG5kaWZmXG4gICAgfVxuICB9XG5cbiAgbXV0YWJsZU1lcmdlKHRhcmdldCwgc291cmNlKXtcbiAgICBpZihzb3VyY2VbU1RBVElDXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHJldHVybiBzb3VyY2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb011dGFibGVNZXJnZSh0YXJnZXQsIHNvdXJjZSlcbiAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9XG4gIH1cblxuICBkb011dGFibGVNZXJnZSh0YXJnZXQsIHNvdXJjZSl7XG4gICAgZm9yKGxldCBrZXkgaW4gc291cmNlKXtcbiAgICAgIGxldCB2YWwgPSBzb3VyY2Vba2V5XVxuICAgICAgbGV0IHRhcmdldFZhbCA9IHRhcmdldFtrZXldXG4gICAgICBsZXQgaXNPYmpWYWwgPSBpc09iamVjdCh2YWwpXG4gICAgICBpZihpc09ialZhbCAmJiB2YWxbU1RBVElDXSA9PT0gdW5kZWZpbmVkICYmIGlzT2JqZWN0KHRhcmdldFZhbCkpe1xuICAgICAgICB0aGlzLmRvTXV0YWJsZU1lcmdlKHRhcmdldFZhbCwgdmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9uZU1lcmdlKHRhcmdldCwgc291cmNlKXtcbiAgICBsZXQgbWVyZ2VkID0gey4uLnRhcmdldCwgLi4uc291cmNlfVxuICAgIGZvcihsZXQga2V5IGluIG1lcmdlZCl7XG4gICAgICBsZXQgdmFsID0gc291cmNlW2tleV1cbiAgICAgIGxldCB0YXJnZXRWYWwgPSB0YXJnZXRba2V5XVxuICAgICAgaWYoaXNPYmplY3QodmFsKSAmJiB2YWxbU1RBVElDXSA9PT0gdW5kZWZpbmVkICYmIGlzT2JqZWN0KHRhcmdldFZhbCkpe1xuICAgICAgICBtZXJnZWRba2V5XSA9IHRoaXMuY2xvbmVNZXJnZSh0YXJnZXRWYWwsIHZhbClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZFxuICB9XG5cbiAgY29tcG9uZW50VG9TdHJpbmcoY2lkKXtcbiAgICBsZXQgW3N0ciwgc3RyZWFtc10gPSB0aGlzLnJlY3Vyc2l2ZUNJRFRvU3RyaW5nKHRoaXMucmVuZGVyZWRbQ09NUE9ORU5UU10sIGNpZClcbiAgICByZXR1cm4gW3N0ciwgc3RyZWFtc11cbiAgfVxuXG4gIHBydW5lQ0lEcyhjaWRzKXtcbiAgICBjaWRzLmZvckVhY2goY2lkID0+IGRlbGV0ZSB0aGlzLnJlbmRlcmVkW0NPTVBPTkVOVFNdW2NpZF0pXG4gIH1cblxuICAvLyBwcml2YXRlXG5cbiAgZ2V0KCl7IHJldHVybiB0aGlzLnJlbmRlcmVkIH1cblxuICBpc05ld0ZpbmdlcnByaW50KGRpZmYgPSB7fSl7IHJldHVybiAhIWRpZmZbU1RBVElDXSB9XG5cbiAgdGVtcGxhdGVTdGF0aWMocGFydCwgdGVtcGxhdGVzKXtcbiAgICBpZih0eXBlb2YgKHBhcnQpID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVzW3BhcnRdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJ0XG4gICAgfVxuICB9XG5cbiAgdG9PdXRwdXRCdWZmZXIocmVuZGVyZWQsIHRlbXBsYXRlcywgb3V0cHV0KXtcbiAgICBpZihyZW5kZXJlZFtEWU5BTUlDU10peyByZXR1cm4gdGhpcy5jb21wcmVoZW5zaW9uVG9CdWZmZXIocmVuZGVyZWQsIHRlbXBsYXRlcywgb3V0cHV0KSB9XG4gICAgbGV0IHtbU1RBVElDXTogc3RhdGljc30gPSByZW5kZXJlZFxuICAgIHN0YXRpY3MgPSB0aGlzLnRlbXBsYXRlU3RhdGljKHN0YXRpY3MsIHRlbXBsYXRlcylcblxuICAgIG91dHB1dC5idWZmZXIgKz0gc3RhdGljc1swXVxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBzdGF0aWNzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMuZHluYW1pY1RvQnVmZmVyKHJlbmRlcmVkW2kgLSAxXSwgdGVtcGxhdGVzLCBvdXRwdXQpXG4gICAgICBvdXRwdXQuYnVmZmVyICs9IHN0YXRpY3NbaV1cbiAgICB9XG4gIH1cblxuICBjb21wcmVoZW5zaW9uVG9CdWZmZXIocmVuZGVyZWQsIHRlbXBsYXRlcywgb3V0cHV0KXtcbiAgICBsZXQge1tEWU5BTUlDU106IGR5bmFtaWNzLCBbU1RBVElDXTogc3RhdGljcywgW1NUUkVBTV06IHN0cmVhbX0gPSByZW5kZXJlZFxuICAgIGxldCBbX3JlZiwgX2luc2VydHMsIGRlbGV0ZUlkcywgcmVzZXRdID0gc3RyZWFtIHx8IFtudWxsLCB7fSwgW10sIG51bGxdXG4gICAgc3RhdGljcyA9IHRoaXMudGVtcGxhdGVTdGF0aWMoc3RhdGljcywgdGVtcGxhdGVzKVxuICAgIGxldCBjb21wVGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHJlbmRlcmVkW1RFTVBMQVRFU11cbiAgICBmb3IobGV0IGQgPSAwOyBkIDwgZHluYW1pY3MubGVuZ3RoOyBkKyspe1xuICAgICAgbGV0IGR5bmFtaWMgPSBkeW5hbWljc1tkXVxuICAgICAgb3V0cHV0LmJ1ZmZlciArPSBzdGF0aWNzWzBdXG4gICAgICBmb3IobGV0IGkgPSAxOyBpIDwgc3RhdGljcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuZHluYW1pY1RvQnVmZmVyKGR5bmFtaWNbaSAtIDFdLCBjb21wVGVtcGxhdGVzLCBvdXRwdXQpXG4gICAgICAgIG91dHB1dC5idWZmZXIgKz0gc3RhdGljc1tpXVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHN0cmVhbSAhPT0gdW5kZWZpbmVkICYmIChyZW5kZXJlZFtEWU5BTUlDU10ubGVuZ3RoID4gMCB8fCBkZWxldGVJZHMubGVuZ3RoID4gMCB8fCByZXNldCkpe1xuICAgICAgZGVsZXRlIHJlbmRlcmVkW1NUUkVBTV1cbiAgICAgIG91dHB1dC5zdHJlYW1zLmFkZChzdHJlYW0pXG4gICAgfVxuICB9XG5cbiAgZHluYW1pY1RvQnVmZmVyKHJlbmRlcmVkLCB0ZW1wbGF0ZXMsIG91dHB1dCl7XG4gICAgaWYodHlwZW9mIChyZW5kZXJlZCkgPT09IFwibnVtYmVyXCIpe1xuICAgICAgbGV0IFtzdHIsIHN0cmVhbXNdID0gdGhpcy5yZWN1cnNpdmVDSURUb1N0cmluZyhvdXRwdXQuY29tcG9uZW50cywgcmVuZGVyZWQsIG91dHB1dC5vbmx5Q2lkcylcbiAgICAgIG91dHB1dC5idWZmZXIgKz0gc3RyXG4gICAgICBvdXRwdXQuc3RyZWFtcyA9IG5ldyBTZXQoWy4uLm91dHB1dC5zdHJlYW1zLCAuLi5zdHJlYW1zXSlcbiAgICB9IGVsc2UgaWYoaXNPYmplY3QocmVuZGVyZWQpKXtcbiAgICAgIHRoaXMudG9PdXRwdXRCdWZmZXIocmVuZGVyZWQsIHRlbXBsYXRlcywgb3V0cHV0KVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQuYnVmZmVyICs9IHJlbmRlcmVkXG4gICAgfVxuICB9XG5cbiAgcmVjdXJzaXZlQ0lEVG9TdHJpbmcoY29tcG9uZW50cywgY2lkLCBvbmx5Q2lkcyl7XG4gICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY2lkXSB8fCBsb2dFcnJvcihgbm8gY29tcG9uZW50IGZvciBDSUQgJHtjaWR9YCwgY29tcG9uZW50cylcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIilcbiAgICBsZXQgW2h0bWwsIHN0cmVhbXNdID0gdGhpcy5yZWN1cnNpdmVUb1N0cmluZyhjb21wb25lbnQsIGNvbXBvbmVudHMsIG9ubHlDaWRzKVxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxcbiAgICBsZXQgY29udGFpbmVyID0gdGVtcGxhdGUuY29udGVudFxuICAgIGxldCBza2lwID0gb25seUNpZHMgJiYgIW9ubHlDaWRzLmhhcyhjaWQpXG5cbiAgICBsZXQgW2hhc0NoaWxkTm9kZXMsIGhhc0NoaWxkQ29tcG9uZW50c10gPVxuICAgICAgQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGROb2RlcykucmVkdWNlKChbaGFzTm9kZXMsIGhhc0NvbXBvbmVudHNdLCBjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpe1xuICAgICAgICAgIGlmKGNoaWxkLmdldEF0dHJpYnV0ZShQSFhfQ09NUE9ORU5UKSl7XG4gICAgICAgICAgICByZXR1cm4gW2hhc05vZGVzLCB0cnVlXVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoUEhYX0NPTVBPTkVOVCwgY2lkKVxuICAgICAgICAgIGlmKCFjaGlsZC5pZCl7IGNoaWxkLmlkID0gYCR7dGhpcy5wYXJlbnRWaWV3SWQoKX0tJHtjaWR9LSR7aX1gIH1cbiAgICAgICAgICBpZihza2lwKXtcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZShQSFhfU0tJUCwgXCJcIilcbiAgICAgICAgICAgIGNoaWxkLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFt0cnVlLCBoYXNDb21wb25lbnRzXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmKGNoaWxkLm5vZGVWYWx1ZS50cmltKCkgIT09IFwiXCIpe1xuICAgICAgICAgICAgbG9nRXJyb3IoXCJvbmx5IEhUTUwgZWxlbWVudCB0YWdzIGFyZSBhbGxvd2VkIGF0IHRoZSByb290IG9mIGNvbXBvbmVudHMuXFxuXFxuXCIgK1xuICAgICAgICAgICAgICBgZ290OiBcIiR7Y2hpbGQubm9kZVZhbHVlLnRyaW0oKX1cIlxcblxcbmAgK1xuICAgICAgICAgICAgICBcIndpdGhpbjpcXG5cIiwgdGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKSlcbiAgICAgICAgICAgIGNoaWxkLnJlcGxhY2VXaXRoKHRoaXMuY3JlYXRlU3BhbihjaGlsZC5ub2RlVmFsdWUsIGNpZCkpXG4gICAgICAgICAgICByZXR1cm4gW3RydWUsIGhhc0NvbXBvbmVudHNdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpXG4gICAgICAgICAgICByZXR1cm4gW2hhc05vZGVzLCBoYXNDb21wb25lbnRzXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgW2ZhbHNlLCBmYWxzZV0pXG5cbiAgICBpZighaGFzQ2hpbGROb2RlcyAmJiAhaGFzQ2hpbGRDb21wb25lbnRzKXtcbiAgICAgIGxvZ0Vycm9yKFwiZXhwZWN0ZWQgYXQgbGVhc3Qgb25lIEhUTUwgZWxlbWVudCB0YWcgaW5zaWRlIGEgY29tcG9uZW50LCBidXQgdGhlIGNvbXBvbmVudCBpcyBlbXB0eTpcXG5cIixcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKSlcbiAgICAgIHJldHVybiBbdGhpcy5jcmVhdGVTcGFuKFwiXCIsIGNpZCkub3V0ZXJIVE1MLCBzdHJlYW1zXVxuICAgIH0gZWxzZSBpZighaGFzQ2hpbGROb2RlcyAmJiBoYXNDaGlsZENvbXBvbmVudHMpe1xuICAgICAgbG9nRXJyb3IoXCJleHBlY3RlZCBhdCBsZWFzdCBvbmUgSFRNTCBlbGVtZW50IHRhZyBkaXJlY3RseSBpbnNpZGUgYSBjb21wb25lbnQsIGJ1dCBvbmx5IHN1YmNvbXBvbmVudHMgd2VyZSBmb3VuZC4gQSBjb21wb25lbnQgbXVzdCByZW5kZXIgYXQgbGVhc3Qgb25lIEhUTUwgdGFnIGRpcmVjdGx5IGluc2lkZSBpdHNlbGYuXCIsXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTC50cmltKCkpXG4gICAgICByZXR1cm4gW3RlbXBsYXRlLmlubmVySFRNTCwgc3RyZWFtc11cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt0ZW1wbGF0ZS5pbm5lckhUTUwsIHN0cmVhbXNdXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlU3Bhbih0ZXh0LCBjaWQpe1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBzcGFuLmlubmVyVGV4dCA9IHRleHRcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShQSFhfQ09NUE9ORU5ULCBjaWQpXG4gICAgcmV0dXJuIHNwYW5cbiAgfVxufVxuIiwgImxldCB2aWV3SG9va0lEID0gMVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0hvb2sge1xuICBzdGF0aWMgbWFrZUlEKCl7IHJldHVybiB2aWV3SG9va0lEKysgfVxuICBzdGF0aWMgZWxlbWVudElEKGVsKXsgcmV0dXJuIGVsLnBoeEhvb2tJZCB9XG5cbiAgY29uc3RydWN0b3IodmlldywgZWwsIGNhbGxiYWNrcyl7XG4gICAgdGhpcy5fX3ZpZXcgPSB2aWV3XG4gICAgdGhpcy5saXZlU29ja2V0ID0gdmlldy5saXZlU29ja2V0XG4gICAgdGhpcy5fX2NhbGxiYWNrcyA9IGNhbGxiYWNrc1xuICAgIHRoaXMuX19saXN0ZW5lcnMgPSBuZXcgU2V0KClcbiAgICB0aGlzLl9faXNEaXNjb25uZWN0ZWQgPSBmYWxzZVxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuZWwucGh4SG9va0lkID0gdGhpcy5jb25zdHJ1Y3Rvci5tYWtlSUQoKVxuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX19jYWxsYmFja3MpeyB0aGlzW2tleV0gPSB0aGlzLl9fY2FsbGJhY2tzW2tleV0gfVxuICB9XG5cbiAgX19tb3VudGVkKCl7IHRoaXMubW91bnRlZCAmJiB0aGlzLm1vdW50ZWQoKSB9XG4gIF9fdXBkYXRlZCgpeyB0aGlzLnVwZGF0ZWQgJiYgdGhpcy51cGRhdGVkKCkgfVxuICBfX2JlZm9yZVVwZGF0ZSgpeyB0aGlzLmJlZm9yZVVwZGF0ZSAmJiB0aGlzLmJlZm9yZVVwZGF0ZSgpIH1cbiAgX19kZXN0cm95ZWQoKXsgdGhpcy5kZXN0cm95ZWQgJiYgdGhpcy5kZXN0cm95ZWQoKSB9XG4gIF9fcmVjb25uZWN0ZWQoKXtcbiAgICBpZih0aGlzLl9faXNEaXNjb25uZWN0ZWQpe1xuICAgICAgdGhpcy5fX2lzRGlzY29ubmVjdGVkID0gZmFsc2VcbiAgICAgIHRoaXMucmVjb25uZWN0ZWQgJiYgdGhpcy5yZWNvbm5lY3RlZCgpXG4gICAgfVxuICB9XG4gIF9fZGlzY29ubmVjdGVkKCl7XG4gICAgdGhpcy5fX2lzRGlzY29ubmVjdGVkID0gdHJ1ZVxuICAgIHRoaXMuZGlzY29ubmVjdGVkICYmIHRoaXMuZGlzY29ubmVjdGVkKClcbiAgfVxuXG4gIHB1c2hFdmVudChldmVudCwgcGF5bG9hZCA9IHt9LCBvblJlcGx5ID0gZnVuY3Rpb24gKCl7IH0pe1xuICAgIHJldHVybiB0aGlzLl9fdmlldy5wdXNoSG9va0V2ZW50KHRoaXMuZWwsIG51bGwsIGV2ZW50LCBwYXlsb2FkLCBvblJlcGx5KVxuICB9XG5cbiAgcHVzaEV2ZW50VG8ocGh4VGFyZ2V0LCBldmVudCwgcGF5bG9hZCA9IHt9LCBvblJlcGx5ID0gZnVuY3Rpb24gKCl7IH0pe1xuICAgIHJldHVybiB0aGlzLl9fdmlldy53aXRoaW5UYXJnZXRzKHBoeFRhcmdldCwgKHZpZXcsIHRhcmdldEN0eCkgPT4ge1xuICAgICAgcmV0dXJuIHZpZXcucHVzaEhvb2tFdmVudCh0aGlzLmVsLCB0YXJnZXRDdHgsIGV2ZW50LCBwYXlsb2FkLCBvblJlcGx5KVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCwgY2FsbGJhY2spe1xuICAgIGxldCBjYWxsYmFja1JlZiA9IChjdXN0b21FdmVudCwgYnlwYXNzKSA9PiBieXBhc3MgPyBldmVudCA6IGNhbGxiYWNrKGN1c3RvbUV2ZW50LmRldGFpbClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgcGh4OiR7ZXZlbnR9YCwgY2FsbGJhY2tSZWYpXG4gICAgdGhpcy5fX2xpc3RlbmVycy5hZGQoY2FsbGJhY2tSZWYpXG4gICAgcmV0dXJuIGNhbGxiYWNrUmVmXG4gIH1cblxuICByZW1vdmVIYW5kbGVFdmVudChjYWxsYmFja1JlZil7XG4gICAgbGV0IGV2ZW50ID0gY2FsbGJhY2tSZWYobnVsbCwgdHJ1ZSlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihgcGh4OiR7ZXZlbnR9YCwgY2FsbGJhY2tSZWYpXG4gICAgdGhpcy5fX2xpc3RlbmVycy5kZWxldGUoY2FsbGJhY2tSZWYpXG4gIH1cblxuICB1cGxvYWQobmFtZSwgZmlsZXMpe1xuICAgIHJldHVybiB0aGlzLl9fdmlldy5kaXNwYXRjaFVwbG9hZHMobmFtZSwgZmlsZXMpXG4gIH1cblxuICB1cGxvYWRUbyhwaHhUYXJnZXQsIG5hbWUsIGZpbGVzKXtcbiAgICByZXR1cm4gdGhpcy5fX3ZpZXcud2l0aGluVGFyZ2V0cyhwaHhUYXJnZXQsIHZpZXcgPT4gdmlldy5kaXNwYXRjaFVwbG9hZHMobmFtZSwgZmlsZXMpKVxuICB9XG5cbiAgX19jbGVhbnVwX18oKXtcbiAgICB0aGlzLl9fbGlzdGVuZXJzLmZvckVhY2goY2FsbGJhY2tSZWYgPT4gdGhpcy5yZW1vdmVIYW5kbGVFdmVudChjYWxsYmFja1JlZikpXG4gIH1cbn1cbiIsICJpbXBvcnQgRE9NIGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgQVJJQSBmcm9tIFwiLi9hcmlhXCJcblxubGV0IGZvY3VzU3RhY2sgPSBudWxsXG5cbmxldCBKUyA9IHtcbiAgZXhlYyhldmVudFR5cGUsIHBoeEV2ZW50LCB2aWV3LCBzb3VyY2VFbCwgZGVmYXVsdHMpe1xuICAgIGxldCBbZGVmYXVsdEtpbmQsIGRlZmF1bHRBcmdzXSA9IGRlZmF1bHRzIHx8IFtudWxsLCB7Y2FsbGJhY2s6IGRlZmF1bHRzICYmIGRlZmF1bHRzLmNhbGxiYWNrfV1cbiAgICBsZXQgY29tbWFuZHMgPSBwaHhFdmVudC5jaGFyQXQoMCkgPT09IFwiW1wiID9cbiAgICAgIEpTT04ucGFyc2UocGh4RXZlbnQpIDogW1tkZWZhdWx0S2luZCwgZGVmYXVsdEFyZ3NdXVxuXG5cblxuICAgIGNvbW1hbmRzLmZvckVhY2goKFtraW5kLCBhcmdzXSkgPT4ge1xuICAgICAgaWYoa2luZCA9PT0gZGVmYXVsdEtpbmQgJiYgZGVmYXVsdEFyZ3MuZGF0YSl7XG4gICAgICAgIGFyZ3MuZGF0YSA9IE9iamVjdC5hc3NpZ24oYXJncy5kYXRhIHx8IHt9LCBkZWZhdWx0QXJncy5kYXRhKVxuICAgICAgICBhcmdzLmNhbGxiYWNrID0gYXJncy5jYWxsYmFjayB8fCBkZWZhdWx0QXJncy5jYWxsYmFja1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJUb0Vscyhzb3VyY2VFbCwgYXJncykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHRoaXNbYGV4ZWNfJHtraW5kfWBdKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwgYXJncylcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBpc1Zpc2libGUoZWwpe1xuICAgIHJldHVybiAhIShlbC5vZmZzZXRXaWR0aCB8fCBlbC5vZmZzZXRIZWlnaHQgfHwgZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPiAwKVxuICB9LFxuXG4gIC8vIHByaXZhdGVcblxuICAvLyBjb21tYW5kc1xuXG4gIGV4ZWNfZXhlYyhldmVudFR5cGUsIHBoeEV2ZW50LCB2aWV3LCBzb3VyY2VFbCwgZWwsIFthdHRyLCB0b10pe1xuICAgIGxldCBub2RlcyA9IHRvID8gRE9NLmFsbChkb2N1bWVudCwgdG8pIDogW3NvdXJjZUVsXVxuICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsZXQgZW5jb2RlZEpTID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICAgIGlmKCFlbmNvZGVkSlMpeyB0aHJvdyBuZXcgRXJyb3IoYGV4cGVjdGVkICR7YXR0cn0gdG8gY29udGFpbiBKUyBjb21tYW5kIG9uIFwiJHt0b31cImApIH1cbiAgICAgIHZpZXcubGl2ZVNvY2tldC5leGVjSlMobm9kZSwgZW5jb2RlZEpTLCBldmVudFR5cGUpXG4gICAgfSlcbiAgfSxcblxuICBleGVjX2Rpc3BhdGNoKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwge3RvLCBldmVudCwgZGV0YWlsLCBidWJibGVzfSl7XG4gICAgZGV0YWlsID0gZGV0YWlsIHx8IHt9XG4gICAgZGV0YWlsLmRpc3BhdGNoZXIgPSBzb3VyY2VFbFxuICAgIERPTS5kaXNwYXRjaEV2ZW50KGVsLCBldmVudCwge2RldGFpbCwgYnViYmxlc30pXG4gIH0sXG5cbiAgZXhlY19wdXNoKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwgYXJncyl7XG4gICAgaWYoIXZpZXcuaXNDb25uZWN0ZWQoKSl7IHJldHVybiB9XG5cbiAgICBsZXQge2V2ZW50LCBkYXRhLCB0YXJnZXQsIHBhZ2VfbG9hZGluZywgbG9hZGluZywgdmFsdWUsIGRpc3BhdGNoZXIsIGNhbGxiYWNrfSA9IGFyZ3NcbiAgICBsZXQgcHVzaE9wdHMgPSB7bG9hZGluZywgdmFsdWUsIHRhcmdldCwgcGFnZV9sb2FkaW5nOiAhIXBhZ2VfbG9hZGluZ31cbiAgICBsZXQgdGFyZ2V0U3JjID0gZXZlbnRUeXBlID09PSBcImNoYW5nZVwiICYmIGRpc3BhdGNoZXIgPyBkaXNwYXRjaGVyIDogc291cmNlRWxcbiAgICBsZXQgcGh4VGFyZ2V0ID0gdGFyZ2V0IHx8IHRhcmdldFNyYy5nZXRBdHRyaWJ1dGUodmlldy5iaW5kaW5nKFwidGFyZ2V0XCIpKSB8fCB0YXJnZXRTcmNcbiAgICB2aWV3LndpdGhpblRhcmdldHMocGh4VGFyZ2V0LCAodGFyZ2V0VmlldywgdGFyZ2V0Q3R4KSA9PiB7XG4gICAgICBpZihldmVudFR5cGUgPT09IFwiY2hhbmdlXCIpe1xuICAgICAgICBsZXQge25ld0NpZCwgX3RhcmdldH0gPSBhcmdzXG4gICAgICAgIF90YXJnZXQgPSBfdGFyZ2V0IHx8IChET00uaXNGb3JtSW5wdXQoc291cmNlRWwpID8gc291cmNlRWwubmFtZSA6IHVuZGVmaW5lZClcbiAgICAgICAgaWYoX3RhcmdldCl7IHB1c2hPcHRzLl90YXJnZXQgPSBfdGFyZ2V0IH1cbiAgICAgICAgdGFyZ2V0Vmlldy5wdXNoSW5wdXQoc291cmNlRWwsIHRhcmdldEN0eCwgbmV3Q2lkLCBldmVudCB8fCBwaHhFdmVudCwgcHVzaE9wdHMsIGNhbGxiYWNrKVxuICAgICAgfSBlbHNlIGlmKGV2ZW50VHlwZSA9PT0gXCJzdWJtaXRcIil7XG4gICAgICAgIGxldCB7c3VibWl0dGVyfSA9IGFyZ3NcbiAgICAgICAgdGFyZ2V0Vmlldy5zdWJtaXRGb3JtKHNvdXJjZUVsLCB0YXJnZXRDdHgsIGV2ZW50IHx8IHBoeEV2ZW50LCBzdWJtaXR0ZXIsIHB1c2hPcHRzLCBjYWxsYmFjaylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFZpZXcucHVzaEV2ZW50KGV2ZW50VHlwZSwgc291cmNlRWwsIHRhcmdldEN0eCwgZXZlbnQgfHwgcGh4RXZlbnQsIGRhdGEsIHB1c2hPcHRzLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGV4ZWNfbmF2aWdhdGUoZXZlbnRUeXBlLCBwaHhFdmVudCwgdmlldywgc291cmNlRWwsIGVsLCB7aHJlZiwgcmVwbGFjZX0pe1xuICAgIHZpZXcubGl2ZVNvY2tldC5oaXN0b3J5UmVkaXJlY3QoaHJlZiwgcmVwbGFjZSA/IFwicmVwbGFjZVwiIDogXCJwdXNoXCIpXG4gIH0sXG5cbiAgZXhlY19wYXRjaChldmVudFR5cGUsIHBoeEV2ZW50LCB2aWV3LCBzb3VyY2VFbCwgZWwsIHtocmVmLCByZXBsYWNlfSl7XG4gICAgdmlldy5saXZlU29ja2V0LnB1c2hIaXN0b3J5UGF0Y2goaHJlZiwgcmVwbGFjZSA/IFwicmVwbGFjZVwiIDogXCJwdXNoXCIsIHNvdXJjZUVsKVxuICB9LFxuXG4gIGV4ZWNfZm9jdXMoZXZlbnRUeXBlLCBwaHhFdmVudCwgdmlldywgc291cmNlRWwsIGVsKXtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IEFSSUEuYXR0ZW1wdEZvY3VzKGVsKSlcbiAgfSxcblxuICBleGVjX2ZvY3VzX2ZpcnN0KGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCl7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBBUklBLmZvY3VzRmlyc3RJbnRlcmFjdGl2ZShlbCkgfHwgQVJJQS5mb2N1c0ZpcnN0KGVsKSlcbiAgfSxcblxuICBleGVjX3B1c2hfZm9jdXMoZXZlbnRUeXBlLCBwaHhFdmVudCwgdmlldywgc291cmNlRWwsIGVsKXtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGZvY3VzU3RhY2sgPSBlbCB8fCBzb3VyY2VFbClcbiAgfSxcblxuICBleGVjX3BvcF9mb2N1cyhldmVudFR5cGUsIHBoeEV2ZW50LCB2aWV3LCBzb3VyY2VFbCwgZWwpe1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYoZm9jdXNTdGFjayl7IGZvY3VzU3RhY2suZm9jdXMoKSB9XG4gICAgICBmb2N1c1N0YWNrID0gbnVsbFxuICAgIH0pXG4gIH0sXG5cbiAgZXhlY19hZGRfY2xhc3MoZXZlbnRUeXBlLCBwaHhFdmVudCwgdmlldywgc291cmNlRWwsIGVsLCB7bmFtZXMsIHRyYW5zaXRpb24sIHRpbWV9KXtcbiAgICB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgbmFtZXMsIFtdLCB0cmFuc2l0aW9uLCB0aW1lLCB2aWV3KVxuICB9LFxuXG4gIGV4ZWNfcmVtb3ZlX2NsYXNzKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwge25hbWVzLCB0cmFuc2l0aW9uLCB0aW1lfSl7XG4gICAgdGhpcy5hZGRPclJlbW92ZUNsYXNzZXMoZWwsIFtdLCBuYW1lcywgdHJhbnNpdGlvbiwgdGltZSwgdmlldylcbiAgfSxcblxuICBleGVjX3RyYW5zaXRpb24oZXZlbnRUeXBlLCBwaHhFdmVudCwgdmlldywgc291cmNlRWwsIGVsLCB7dGltZSwgdHJhbnNpdGlvbn0pe1xuICAgIHRoaXMuYWRkT3JSZW1vdmVDbGFzc2VzKGVsLCBbXSwgW10sIHRyYW5zaXRpb24sIHRpbWUsIHZpZXcpXG4gIH0sXG5cbiAgZXhlY190b2dnbGUoZXZlbnRUeXBlLCBwaHhFdmVudCwgdmlldywgc291cmNlRWwsIGVsLCB7ZGlzcGxheSwgaW5zLCBvdXRzLCB0aW1lfSl7XG4gICAgdGhpcy50b2dnbGUoZXZlbnRUeXBlLCB2aWV3LCBlbCwgZGlzcGxheSwgaW5zLCBvdXRzLCB0aW1lKVxuICB9LFxuXG4gIGV4ZWNfc2hvdyhldmVudFR5cGUsIHBoeEV2ZW50LCB2aWV3LCBzb3VyY2VFbCwgZWwsIHtkaXNwbGF5LCB0cmFuc2l0aW9uLCB0aW1lfSl7XG4gICAgdGhpcy5zaG93KGV2ZW50VHlwZSwgdmlldywgZWwsIGRpc3BsYXksIHRyYW5zaXRpb24sIHRpbWUpXG4gIH0sXG5cbiAgZXhlY19oaWRlKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwge2Rpc3BsYXksIHRyYW5zaXRpb24sIHRpbWV9KXtcbiAgICB0aGlzLmhpZGUoZXZlbnRUeXBlLCB2aWV3LCBlbCwgZGlzcGxheSwgdHJhbnNpdGlvbiwgdGltZSlcbiAgfSxcblxuICBleGVjX3NldF9hdHRyKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwge2F0dHI6IFthdHRyLCB2YWxdfSl7XG4gICAgdGhpcy5zZXRPclJlbW92ZUF0dHJzKGVsLCBbW2F0dHIsIHZhbF1dLCBbXSlcbiAgfSxcblxuICBleGVjX3JlbW92ZV9hdHRyKGV2ZW50VHlwZSwgcGh4RXZlbnQsIHZpZXcsIHNvdXJjZUVsLCBlbCwge2F0dHJ9KXtcbiAgICB0aGlzLnNldE9yUmVtb3ZlQXR0cnMoZWwsIFtdLCBbYXR0cl0pXG4gIH0sXG5cbiAgLy8gdXRpbHMgZm9yIGNvbW1hbmRzXG5cbiAgc2hvdyhldmVudFR5cGUsIHZpZXcsIGVsLCBkaXNwbGF5LCB0cmFuc2l0aW9uLCB0aW1lKXtcbiAgICBpZighdGhpcy5pc1Zpc2libGUoZWwpKXtcbiAgICAgIHRoaXMudG9nZ2xlKGV2ZW50VHlwZSwgdmlldywgZWwsIGRpc3BsYXksIHRyYW5zaXRpb24sIG51bGwsIHRpbWUpXG4gICAgfVxuICB9LFxuXG4gIGhpZGUoZXZlbnRUeXBlLCB2aWV3LCBlbCwgZGlzcGxheSwgdHJhbnNpdGlvbiwgdGltZSl7XG4gICAgaWYodGhpcy5pc1Zpc2libGUoZWwpKXtcbiAgICAgIHRoaXMudG9nZ2xlKGV2ZW50VHlwZSwgdmlldywgZWwsIGRpc3BsYXksIG51bGwsIHRyYW5zaXRpb24sIHRpbWUpXG4gICAgfVxuICB9LFxuXG4gIHRvZ2dsZShldmVudFR5cGUsIHZpZXcsIGVsLCBkaXNwbGF5LCBpbnMsIG91dHMsIHRpbWUpe1xuICAgIGxldCBbaW5DbGFzc2VzLCBpblN0YXJ0Q2xhc3NlcywgaW5FbmRDbGFzc2VzXSA9IGlucyB8fCBbW10sIFtdLCBbXV1cbiAgICBsZXQgW291dENsYXNzZXMsIG91dFN0YXJ0Q2xhc3Nlcywgb3V0RW5kQ2xhc3Nlc10gPSBvdXRzIHx8IFtbXSwgW10sIFtdXVxuICAgIGlmKGluQ2xhc3Nlcy5sZW5ndGggPiAwIHx8IG91dENsYXNzZXMubGVuZ3RoID4gMCl7XG4gICAgICBpZih0aGlzLmlzVmlzaWJsZShlbCkpe1xuICAgICAgICBsZXQgb25TdGFydCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgb3V0U3RhcnRDbGFzc2VzLCBpbkNsYXNzZXMuY29uY2F0KGluU3RhcnRDbGFzc2VzKS5jb25jYXQoaW5FbmRDbGFzc2VzKSlcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkT3JSZW1vdmVDbGFzc2VzKGVsLCBvdXRDbGFzc2VzLCBbXSlcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hZGRPclJlbW92ZUNsYXNzZXMoZWwsIG91dEVuZENsYXNzZXMsIG91dFN0YXJ0Q2xhc3NlcykpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInBoeDpoaWRlLXN0YXJ0XCIpKVxuICAgICAgICB2aWV3LnRyYW5zaXRpb24odGltZSwgb25TdGFydCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkT3JSZW1vdmVDbGFzc2VzKGVsLCBbXSwgb3V0Q2xhc3Nlcy5jb25jYXQob3V0RW5kQ2xhc3NlcykpXG4gICAgICAgICAgRE9NLnB1dFN0aWNreShlbCwgXCJ0b2dnbGVcIiwgY3VycmVudEVsID0+IGN1cnJlbnRFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXG4gICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJwaHg6aGlkZS1lbmRcIikpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihldmVudFR5cGUgPT09IFwicmVtb3ZlXCIpeyByZXR1cm4gfVxuICAgICAgICBsZXQgb25TdGFydCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgaW5TdGFydENsYXNzZXMsIG91dENsYXNzZXMuY29uY2F0KG91dFN0YXJ0Q2xhc3NlcykuY29uY2F0KG91dEVuZENsYXNzZXMpKVxuICAgICAgICAgIGxldCBzdGlja3lEaXNwbGF5ID0gZGlzcGxheSB8fCB0aGlzLmRlZmF1bHREaXNwbGF5KGVsKVxuICAgICAgICAgIERPTS5wdXRTdGlja3koZWwsIFwidG9nZ2xlXCIsIGN1cnJlbnRFbCA9PiBjdXJyZW50RWwuc3R5bGUuZGlzcGxheSA9IHN0aWNreURpc3BsYXkpXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgaW5DbGFzc2VzLCBbXSlcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hZGRPclJlbW92ZUNsYXNzZXMoZWwsIGluRW5kQ2xhc3NlcywgaW5TdGFydENsYXNzZXMpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJwaHg6c2hvdy1zdGFydFwiKSlcbiAgICAgICAgdmlldy50cmFuc2l0aW9uKHRpbWUsIG9uU3RhcnQsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgW10sIGluQ2xhc3Nlcy5jb25jYXQoaW5FbmRDbGFzc2VzKSlcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInBoeDpzaG93LWVuZFwiKSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5pc1Zpc2libGUoZWwpKXtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJwaHg6aGlkZS1zdGFydFwiKSlcbiAgICAgICAgICBET00ucHV0U3RpY2t5KGVsLCBcInRvZ2dsZVwiLCBjdXJyZW50RWwgPT4gY3VycmVudEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInBoeDpoaWRlLWVuZFwiKSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicGh4OnNob3ctc3RhcnRcIikpXG4gICAgICAgICAgbGV0IHN0aWNreURpc3BsYXkgPSBkaXNwbGF5IHx8IHRoaXMuZGVmYXVsdERpc3BsYXkoZWwpXG4gICAgICAgICAgRE9NLnB1dFN0aWNreShlbCwgXCJ0b2dnbGVcIiwgY3VycmVudEVsID0+IGN1cnJlbnRFbC5zdHlsZS5kaXNwbGF5ID0gc3RpY2t5RGlzcGxheSlcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInBoeDpzaG93LWVuZFwiKSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYWRkT3JSZW1vdmVDbGFzc2VzKGVsLCBhZGRzLCByZW1vdmVzLCB0cmFuc2l0aW9uLCB0aW1lLCB2aWV3KXtcbiAgICBsZXQgW3RyYW5zaXRpb25fcnVuLCB0cmFuc2l0aW9uX3N0YXJ0LCB0cmFuc2l0aW9uX2VuZF0gPSB0cmFuc2l0aW9uIHx8IFtbXSwgW10sIFtdXVxuICAgIGlmKHRyYW5zaXRpb25fcnVuLmxlbmd0aCA+IDApe1xuICAgICAgbGV0IG9uU3RhcnQgPSAoKSA9PiB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgdHJhbnNpdGlvbl9zdGFydC5jb25jYXQodHJhbnNpdGlvbl9ydW4pLCBbXSlcbiAgICAgIGxldCBvbkRvbmUgPSAoKSA9PiB0aGlzLmFkZE9yUmVtb3ZlQ2xhc3NlcyhlbCwgYWRkcy5jb25jYXQodHJhbnNpdGlvbl9lbmQpLCByZW1vdmVzLmNvbmNhdCh0cmFuc2l0aW9uX3J1bikuY29uY2F0KHRyYW5zaXRpb25fc3RhcnQpKVxuICAgICAgcmV0dXJuIHZpZXcudHJhbnNpdGlvbih0aW1lLCBvblN0YXJ0LCBvbkRvbmUpXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgbGV0IFtwcmV2QWRkcywgcHJldlJlbW92ZXNdID0gRE9NLmdldFN0aWNreShlbCwgXCJjbGFzc2VzXCIsIFtbXSwgW11dKVxuICAgICAgbGV0IGtlZXBBZGRzID0gYWRkcy5maWx0ZXIobmFtZSA9PiBwcmV2QWRkcy5pbmRleE9mKG5hbWUpIDwgMCAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpKVxuICAgICAgbGV0IGtlZXBSZW1vdmVzID0gcmVtb3Zlcy5maWx0ZXIobmFtZSA9PiBwcmV2UmVtb3Zlcy5pbmRleE9mKG5hbWUpIDwgMCAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSkpXG4gICAgICBsZXQgbmV3QWRkcyA9IHByZXZBZGRzLmZpbHRlcihuYW1lID0+IHJlbW92ZXMuaW5kZXhPZihuYW1lKSA8IDApLmNvbmNhdChrZWVwQWRkcylcbiAgICAgIGxldCBuZXdSZW1vdmVzID0gcHJldlJlbW92ZXMuZmlsdGVyKG5hbWUgPT4gYWRkcy5pbmRleE9mKG5hbWUpIDwgMCkuY29uY2F0KGtlZXBSZW1vdmVzKVxuXG4gICAgICBET00ucHV0U3RpY2t5KGVsLCBcImNsYXNzZXNcIiwgY3VycmVudEVsID0+IHtcbiAgICAgICAgY3VycmVudEVsLmNsYXNzTGlzdC5yZW1vdmUoLi4ubmV3UmVtb3ZlcylcbiAgICAgICAgY3VycmVudEVsLmNsYXNzTGlzdC5hZGQoLi4ubmV3QWRkcylcbiAgICAgICAgcmV0dXJuIFtuZXdBZGRzLCBuZXdSZW1vdmVzXVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIHNldE9yUmVtb3ZlQXR0cnMoZWwsIHNldHMsIHJlbW92ZXMpe1xuICAgIGxldCBbcHJldlNldHMsIHByZXZSZW1vdmVzXSA9IERPTS5nZXRTdGlja3koZWwsIFwiYXR0cnNcIiwgW1tdLCBbXV0pXG5cbiAgICBsZXQgYWx0ZXJlZEF0dHJzID0gc2V0cy5tYXAoKFthdHRyLCBfdmFsXSkgPT4gYXR0cikuY29uY2F0KHJlbW92ZXMpO1xuICAgIGxldCBuZXdTZXRzID0gcHJldlNldHMuZmlsdGVyKChbYXR0ciwgX3ZhbF0pID0+ICFhbHRlcmVkQXR0cnMuaW5jbHVkZXMoYXR0cikpLmNvbmNhdChzZXRzKTtcbiAgICBsZXQgbmV3UmVtb3ZlcyA9IHByZXZSZW1vdmVzLmZpbHRlcigoYXR0cikgPT4gIWFsdGVyZWRBdHRycy5pbmNsdWRlcyhhdHRyKSkuY29uY2F0KHJlbW92ZXMpO1xuXG4gICAgRE9NLnB1dFN0aWNreShlbCwgXCJhdHRyc1wiLCBjdXJyZW50RWwgPT4ge1xuICAgICAgbmV3UmVtb3Zlcy5mb3JFYWNoKGF0dHIgPT4gY3VycmVudEVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKSlcbiAgICAgIG5ld1NldHMuZm9yRWFjaCgoW2F0dHIsIHZhbF0pID0+IGN1cnJlbnRFbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKSlcbiAgICAgIHJldHVybiBbbmV3U2V0cywgbmV3UmVtb3Zlc11cbiAgICB9KVxuICB9LFxuXG4gIGhhc0FsbENsYXNzZXMoZWwsIGNsYXNzZXMpeyByZXR1cm4gY2xhc3Nlcy5ldmVyeShuYW1lID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKSkgfSxcblxuICBpc1RvZ2dsZWRPdXQoZWwsIG91dENsYXNzZXMpe1xuICAgIHJldHVybiAhdGhpcy5pc1Zpc2libGUoZWwpIHx8IHRoaXMuaGFzQWxsQ2xhc3NlcyhlbCwgb3V0Q2xhc3NlcylcbiAgfSxcblxuICBmaWx0ZXJUb0Vscyhzb3VyY2VFbCwge3RvfSl7XG4gICAgcmV0dXJuIHRvID8gRE9NLmFsbChkb2N1bWVudCwgdG8pIDogW3NvdXJjZUVsXVxuICB9LFxuXG4gIGRlZmF1bHREaXNwbGF5KGVsKXtcbiAgICByZXR1cm4ge3RyOiBcInRhYmxlLXJvd1wiLCB0ZDogXCJ0YWJsZS1jZWxsXCJ9W2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKV0gfHwgXCJibG9ja1wiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSlNcbiIsICJpbXBvcnQge1xuICBCRUZPUkVfVU5MT0FEX0xPQURFUl9USU1FT1VULFxuICBDSEVDS0FCTEVfSU5QVVRTLFxuICBDT05TRUNVVElWRV9SRUxPQURTLFxuICBQSFhfQVVUT19SRUNPVkVSLFxuICBQSFhfQ09NUE9ORU5ULFxuICBQSFhfQ09OTkVDVEVEX0NMQVNTLFxuICBQSFhfRElTQUJMRV9XSVRILFxuICBQSFhfRElTQUJMRV9XSVRIX1JFU1RPUkUsXG4gIFBIWF9ESVNBQkxFRCxcbiAgUEhYX0xPQURJTkdfQ0xBU1MsXG4gIFBIWF9FVkVOVF9DTEFTU0VTLFxuICBQSFhfRVJST1JfQ0xBU1MsXG4gIFBIWF9DTElFTlRfRVJST1JfQ0xBU1MsXG4gIFBIWF9TRVJWRVJfRVJST1JfQ0xBU1MsXG4gIFBIWF9GRUVEQkFDS19GT1IsXG4gIFBIWF9IQVNfU1VCTUlUVEVELFxuICBQSFhfSE9PSyxcbiAgUEhYX1BBR0VfTE9BRElORyxcbiAgUEhYX1BBUkVOVF9JRCxcbiAgUEhYX1BST0dSRVNTLFxuICBQSFhfUkVBRE9OTFksXG4gIFBIWF9SRUYsXG4gIFBIWF9SRUZfU1JDLFxuICBQSFhfUk9PVF9JRCxcbiAgUEhYX1NFU1NJT04sXG4gIFBIWF9TVEFUSUMsXG4gIFBIWF9UUkFDS19TVEFUSUMsXG4gIFBIWF9UUkFDS19VUExPQURTLFxuICBQSFhfVVBEQVRFLFxuICBQSFhfVVBMT0FEX1JFRixcbiAgUEhYX1ZJRVdfU0VMRUNUT1IsXG4gIFBIWF9NQUlOLFxuICBQSFhfTU9VTlRFRCxcbiAgUFVTSF9USU1FT1VULFxuICBQSFhfVklFV1BPUlRfVE9QLFxuICBQSFhfVklFV1BPUlRfQk9UVE9NLFxufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQge1xuICBjbG9uZSxcbiAgY2xvc2VzdFBoeEJpbmRpbmcsXG4gIGlzRW1wdHksXG4gIGlzRXF1YWxPYmosXG4gIGxvZ0Vycm9yLFxuICBtYXliZSxcbiAgaXNDaWQsXG59IGZyb20gXCIuL3V0aWxzXCJcblxuaW1wb3J0IEJyb3dzZXIgZnJvbSBcIi4vYnJvd3NlclwiXG5pbXBvcnQgRE9NIGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgRE9NUGF0Y2ggZnJvbSBcIi4vZG9tX3BhdGNoXCJcbmltcG9ydCBMaXZlVXBsb2FkZXIgZnJvbSBcIi4vbGl2ZV91cGxvYWRlclwiXG5pbXBvcnQgUmVuZGVyZWQgZnJvbSBcIi4vcmVuZGVyZWRcIlxuaW1wb3J0IFZpZXdIb29rIGZyb20gXCIuL3ZpZXdfaG9va1wiXG5pbXBvcnQgSlMgZnJvbSBcIi4vanNcIlxuXG5sZXQgc2VyaWFsaXplRm9ybSA9IChmb3JtLCBtZXRhZGF0YSwgb25seU5hbWVzID0gW10pID0+IHtcbiAgbGV0IHtzdWJtaXR0ZXIsIC4uLm1ldGF9ID0gbWV0YWRhdGFcblxuICAvLyBUT0RPOiBSZXBsYWNlIHdpdGggYG5ldyBGb3JtRGF0YShmb3JtLCBzdWJtaXR0ZXIpYCB3aGVuIHN1cHBvcnRlZCBieSBsYXRlc3QgYnJvd3NlcnMsXG4gIC8vICAgICAgIGFuZCBtZW50aW9uIGBmb3JtZGF0YS1zdWJtaXR0ZXItcG9seWZpbGxgIGluIHRoZSBkb2NzLlxuICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcblxuICAvLyBUT0RPOiBSZW1vdmUgd2hlbiBGb3JtRGF0YSBjb25zdHJ1Y3RvciBzdXBwb3J0cyB0aGUgc3VibWl0dGVyIGFyZ3VtZW50LlxuICBpZihzdWJtaXR0ZXIgJiYgc3VibWl0dGVyLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikgJiYgc3VibWl0dGVyLmZvcm0gJiYgc3VibWl0dGVyLmZvcm0gPT09IGZvcm0pe1xuICAgIGZvcm1EYXRhLmFwcGVuZChzdWJtaXR0ZXIubmFtZSwgc3VibWl0dGVyLnZhbHVlKVxuICB9XG5cbiAgbGV0IHRvUmVtb3ZlID0gW11cblxuICBmb3JtRGF0YS5mb3JFYWNoKCh2YWwsIGtleSwgX2luZGV4KSA9PiB7XG4gICAgaWYodmFsIGluc3RhbmNlb2YgRmlsZSl7IHRvUmVtb3ZlLnB1c2goa2V5KSB9XG4gIH0pXG5cbiAgLy8gQ2xlYW51cCBhZnRlciBidWlsZGluZyBmaWxlRGF0YVxuICB0b1JlbW92ZS5mb3JFYWNoKGtleSA9PiBmb3JtRGF0YS5kZWxldGUoa2V5KSlcblxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIGZvcihsZXQgW2tleSwgdmFsXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpe1xuICAgIGlmKG9ubHlOYW1lcy5sZW5ndGggPT09IDAgfHwgb25seU5hbWVzLmluZGV4T2Yoa2V5KSA+PSAwKXtcbiAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWwpXG4gICAgfVxuICB9XG4gIGZvcihsZXQgbWV0YUtleSBpbiBtZXRhKXsgcGFyYW1zLmFwcGVuZChtZXRhS2V5LCBtZXRhW21ldGFLZXldKSB9XG5cbiAgcmV0dXJuIHBhcmFtcy50b1N0cmluZygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihlbCwgbGl2ZVNvY2tldCwgcGFyZW50VmlldywgZmxhc2gsIGxpdmVSZWZlcmVyKXtcbiAgICB0aGlzLmlzRGVhZCA9IGZhbHNlXG4gICAgdGhpcy5saXZlU29ja2V0ID0gbGl2ZVNvY2tldFxuICAgIHRoaXMuZmxhc2ggPSBmbGFzaFxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50Vmlld1xuICAgIHRoaXMucm9vdCA9IHBhcmVudFZpZXcgPyBwYXJlbnRWaWV3LnJvb3QgOiB0aGlzXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pZCA9IHRoaXMuZWwuaWRcbiAgICB0aGlzLnJlZiA9IDBcbiAgICB0aGlzLmNoaWxkSm9pbnMgPSAwXG4gICAgdGhpcy5sb2FkZXJUaW1lciA9IG51bGxcbiAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gICAgdGhpcy5wcnVuaW5nQ0lEcyA9IFtdXG4gICAgdGhpcy5yZWRpcmVjdCA9IGZhbHNlXG4gICAgdGhpcy5ocmVmID0gbnVsbFxuICAgIHRoaXMuam9pbkNvdW50ID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5qb2luQ291bnQgLSAxIDogMFxuICAgIHRoaXMuam9pblBlbmRpbmcgPSB0cnVlXG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZVxuICAgIHRoaXMuam9pbkNhbGxiYWNrID0gZnVuY3Rpb24ob25Eb25lKXsgb25Eb25lICYmIG9uRG9uZSgpIH1cbiAgICB0aGlzLnN0b3BDYWxsYmFjayA9IGZ1bmN0aW9uKCl7IH1cbiAgICB0aGlzLnBlbmRpbmdKb2luT3BzID0gdGhpcy5wYXJlbnQgPyBudWxsIDogW11cbiAgICB0aGlzLnZpZXdIb29rcyA9IHt9XG4gICAgdGhpcy51cGxvYWRlcnMgPSB7fVxuICAgIHRoaXMuZm9ybVN1Ym1pdHMgPSBbXVxuICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLnBhcmVudCA/IG51bGwgOiB7fVxuICAgIHRoaXMucm9vdC5jaGlsZHJlblt0aGlzLmlkXSA9IHt9XG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5saXZlU29ja2V0LmNoYW5uZWwoYGx2OiR7dGhpcy5pZH1gLCAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdDogdGhpcy5yZWRpcmVjdCA/IHRoaXMuaHJlZiA6IHVuZGVmaW5lZCxcbiAgICAgICAgdXJsOiB0aGlzLnJlZGlyZWN0ID8gdW5kZWZpbmVkIDogdGhpcy5ocmVmIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgcGFyYW1zOiB0aGlzLmNvbm5lY3RQYXJhbXMobGl2ZVJlZmVyZXIpLFxuICAgICAgICBzZXNzaW9uOiB0aGlzLmdldFNlc3Npb24oKSxcbiAgICAgICAgc3RhdGljOiB0aGlzLmdldFN0YXRpYygpLFxuICAgICAgICBmbGFzaDogdGhpcy5mbGFzaCxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0SHJlZihocmVmKXsgdGhpcy5ocmVmID0gaHJlZiB9XG5cbiAgc2V0UmVkaXJlY3QoaHJlZil7XG4gICAgdGhpcy5yZWRpcmVjdCA9IHRydWVcbiAgICB0aGlzLmhyZWYgPSBocmVmXG4gIH1cblxuICBpc01haW4oKXsgcmV0dXJuIHRoaXMuZWwuaGFzQXR0cmlidXRlKFBIWF9NQUlOKSB9XG5cbiAgY29ubmVjdFBhcmFtcyhsaXZlUmVmZXJlcil7XG4gICAgbGV0IHBhcmFtcyA9IHRoaXMubGl2ZVNvY2tldC5wYXJhbXModGhpcy5lbClcbiAgICBsZXQgbWFuaWZlc3QgPVxuICAgICAgRE9NLmFsbChkb2N1bWVudCwgYFske3RoaXMuYmluZGluZyhQSFhfVFJBQ0tfU1RBVElDKX1dYClcbiAgICAgICAgLm1hcChub2RlID0+IG5vZGUuc3JjIHx8IG5vZGUuaHJlZikuZmlsdGVyKHVybCA9PiB0eXBlb2YgKHVybCkgPT09IFwic3RyaW5nXCIpXG5cbiAgICBpZihtYW5pZmVzdC5sZW5ndGggPiAwKXsgcGFyYW1zW1wiX3RyYWNrX3N0YXRpY1wiXSA9IG1hbmlmZXN0IH1cbiAgICBwYXJhbXNbXCJfbW91bnRzXCJdID0gdGhpcy5qb2luQ291bnRcbiAgICBwYXJhbXNbXCJfbGl2ZV9yZWZlcmVyXCJdID0gbGl2ZVJlZmVyZXJcblxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxuXG4gIGlzQ29ubmVjdGVkKCl7IHJldHVybiB0aGlzLmNoYW5uZWwuY2FuUHVzaCgpIH1cblxuICBnZXRTZXNzaW9uKCl7IHJldHVybiB0aGlzLmVsLmdldEF0dHJpYnV0ZShQSFhfU0VTU0lPTikgfVxuXG4gIGdldFN0YXRpYygpe1xuICAgIGxldCB2YWwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShQSFhfU1RBVElDKVxuICAgIHJldHVybiB2YWwgPT09IFwiXCIgPyBudWxsIDogdmFsXG4gIH1cblxuICBkZXN0cm95KGNhbGxiYWNrID0gZnVuY3Rpb24gKCl7IH0pe1xuICAgIHRoaXMuZGVzdHJveUFsbENoaWxkcmVuKClcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcbiAgICBkZWxldGUgdGhpcy5yb290LmNoaWxkcmVuW3RoaXMuaWRdXG4gICAgaWYodGhpcy5wYXJlbnQpeyBkZWxldGUgdGhpcy5yb290LmNoaWxkcmVuW3RoaXMucGFyZW50LmlkXVt0aGlzLmlkXSB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGVyVGltZXIpXG4gICAgbGV0IG9uRmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICBmb3IobGV0IGlkIGluIHRoaXMudmlld0hvb2tzKXtcbiAgICAgICAgdGhpcy5kZXN0cm95SG9vayh0aGlzLnZpZXdIb29rc1tpZF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgRE9NLm1hcmtQaHhDaGlsZERlc3Ryb3llZCh0aGlzLmVsKVxuXG4gICAgdGhpcy5sb2coXCJkZXN0cm95ZWRcIiwgKCkgPT4gW1widGhlIGNoaWxkIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50XCJdKVxuICAgIHRoaXMuY2hhbm5lbC5sZWF2ZSgpXG4gICAgICAucmVjZWl2ZShcIm9rXCIsIG9uRmluaXNoZWQpXG4gICAgICAucmVjZWl2ZShcImVycm9yXCIsIG9uRmluaXNoZWQpXG4gICAgICAucmVjZWl2ZShcInRpbWVvdXRcIiwgb25GaW5pc2hlZClcbiAgfVxuXG4gIHNldENvbnRhaW5lckNsYXNzZXMoLi4uY2xhc3Nlcyl7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgUEhYX0NPTk5FQ1RFRF9DTEFTUyxcbiAgICAgIFBIWF9MT0FESU5HX0NMQVNTLFxuICAgICAgUEhYX0VSUk9SX0NMQVNTLFxuICAgICAgUEhYX0NMSUVOVF9FUlJPUl9DTEFTUyxcbiAgICAgIFBIWF9TRVJWRVJfRVJST1JfQ0xBU1NcbiAgICApXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpXG4gIH1cblxuICBzaG93TG9hZGVyKHRpbWVvdXQpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRlclRpbWVyKVxuICAgIGlmKHRpbWVvdXQpe1xuICAgICAgdGhpcy5sb2FkZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93TG9hZGVyKCksIHRpbWVvdXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcihsZXQgaWQgaW4gdGhpcy52aWV3SG9va3MpeyB0aGlzLnZpZXdIb29rc1tpZF0uX19kaXNjb25uZWN0ZWQoKSB9XG4gICAgICB0aGlzLnNldENvbnRhaW5lckNsYXNzZXMoUEhYX0xPQURJTkdfQ0xBU1MpXG4gICAgfVxuICB9XG5cbiAgZXhlY0FsbChiaW5kaW5nKXtcbiAgICBET00uYWxsKHRoaXMuZWwsIGBbJHtiaW5kaW5nfV1gLCBlbCA9PiB0aGlzLmxpdmVTb2NrZXQuZXhlY0pTKGVsLCBlbC5nZXRBdHRyaWJ1dGUoYmluZGluZykpKVxuICB9XG5cbiAgaGlkZUxvYWRlcigpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRlclRpbWVyKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQ2xhc3NlcyhQSFhfQ09OTkVDVEVEX0NMQVNTKVxuICAgIHRoaXMuZXhlY0FsbCh0aGlzLmJpbmRpbmcoXCJjb25uZWN0ZWRcIikpXG4gIH1cblxuICB0cmlnZ2VyUmVjb25uZWN0ZWQoKXtcbiAgICBmb3IobGV0IGlkIGluIHRoaXMudmlld0hvb2tzKXsgdGhpcy52aWV3SG9va3NbaWRdLl9fcmVjb25uZWN0ZWQoKSB9XG4gIH1cblxuICBsb2coa2luZCwgbXNnQ2FsbGJhY2spe1xuICAgIHRoaXMubGl2ZVNvY2tldC5sb2codGhpcywga2luZCwgbXNnQ2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uKHRpbWUsIG9uU3RhcnQsIG9uRG9uZSA9IGZ1bmN0aW9uKCl7fSl7XG4gICAgdGhpcy5saXZlU29ja2V0LnRyYW5zaXRpb24odGltZSwgb25TdGFydCwgb25Eb25lKVxuICB9XG5cbiAgd2l0aGluVGFyZ2V0cyhwaHhUYXJnZXQsIGNhbGxiYWNrKXtcbiAgICBpZihwaHhUYXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBwaHhUYXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KXtcbiAgICAgIHJldHVybiB0aGlzLmxpdmVTb2NrZXQub3duZXIocGh4VGFyZ2V0LCB2aWV3ID0+IGNhbGxiYWNrKHZpZXcsIHBoeFRhcmdldCkpXG4gICAgfVxuXG4gICAgaWYoaXNDaWQocGh4VGFyZ2V0KSl7XG4gICAgICBsZXQgdGFyZ2V0cyA9IERPTS5maW5kQ29tcG9uZW50Tm9kZUxpc3QodGhpcy5lbCwgcGh4VGFyZ2V0KVxuICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPT09IDApe1xuICAgICAgICBsb2dFcnJvcihgbm8gY29tcG9uZW50IGZvdW5kIG1hdGNoaW5nIHBoeC10YXJnZXQgb2YgJHtwaHhUYXJnZXR9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMsIHBhcnNlSW50KHBoeFRhcmdldCkpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBoeFRhcmdldCkpXG4gICAgICBpZih0YXJnZXRzLmxlbmd0aCA9PT0gMCl7IGxvZ0Vycm9yKGBub3RoaW5nIGZvdW5kIG1hdGNoaW5nIHRoZSBwaHgtdGFyZ2V0IHNlbGVjdG9yIFwiJHtwaHhUYXJnZXR9XCJgKSB9XG4gICAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHRoaXMubGl2ZVNvY2tldC5vd25lcih0YXJnZXQsIHZpZXcgPT4gY2FsbGJhY2sodmlldywgdGFyZ2V0KSkpXG4gICAgfVxuICB9XG5cbiAgYXBwbHlEaWZmKHR5cGUsIHJhd0RpZmYsIGNhbGxiYWNrKXtcbiAgICB0aGlzLmxvZyh0eXBlLCAoKSA9PiBbXCJcIiwgY2xvbmUocmF3RGlmZildKVxuICAgIGxldCB7ZGlmZiwgcmVwbHksIGV2ZW50cywgdGl0bGV9ID0gUmVuZGVyZWQuZXh0cmFjdChyYXdEaWZmKVxuICAgIGNhbGxiYWNrKHtkaWZmLCByZXBseSwgZXZlbnRzfSlcbiAgICBpZih0aXRsZSl7IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gRE9NLnB1dFRpdGxlKHRpdGxlKSkgfVxuICB9XG5cbiAgb25Kb2luKHJlc3Ape1xuICAgIGxldCB7cmVuZGVyZWQsIGNvbnRhaW5lcn0gPSByZXNwXG4gICAgaWYoY29udGFpbmVyKXtcbiAgICAgIGxldCBbdGFnLCBhdHRyc10gPSBjb250YWluZXJcbiAgICAgIHRoaXMuZWwgPSBET00ucmVwbGFjZVJvb3RDb250YWluZXIodGhpcy5lbCwgdGFnLCBhdHRycylcbiAgICB9XG4gICAgdGhpcy5jaGlsZEpvaW5zID0gMFxuICAgIHRoaXMuam9pblBlbmRpbmcgPSB0cnVlXG4gICAgdGhpcy5mbGFzaCA9IG51bGxcblxuICAgIEJyb3dzZXIuZHJvcExvY2FsKHRoaXMubGl2ZVNvY2tldC5sb2NhbFN0b3JhZ2UsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgQ09OU0VDVVRJVkVfUkVMT0FEUylcbiAgICB0aGlzLmFwcGx5RGlmZihcIm1vdW50XCIsIHJlbmRlcmVkLCAoe2RpZmYsIGV2ZW50c30pID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZWQgPSBuZXcgUmVuZGVyZWQodGhpcy5pZCwgZGlmZilcbiAgICAgIGxldCBbaHRtbCwgc3RyZWFtc10gPSB0aGlzLnJlbmRlckNvbnRhaW5lcihudWxsLCBcImpvaW5cIilcbiAgICAgIHRoaXMuZHJvcFBlbmRpbmdSZWZzKClcbiAgICAgIGxldCBmb3JtcyA9IHRoaXMuZm9ybXNGb3JSZWNvdmVyeShodG1sKVxuICAgICAgdGhpcy5qb2luQ291bnQrK1xuXG4gICAgICBpZihmb3Jtcy5sZW5ndGggPiAwKXtcbiAgICAgICAgZm9ybXMuZm9yRWFjaCgoW2Zvcm0sIG5ld0Zvcm0sIG5ld0NpZF0sIGkpID0+IHtcbiAgICAgICAgICB0aGlzLnB1c2hGb3JtUmVjb3ZlcnkoZm9ybSwgbmV3Q2lkLCByZXNwID0+IHtcbiAgICAgICAgICAgIGlmKGkgPT09IGZvcm1zLmxlbmd0aCAtIDEpe1xuICAgICAgICAgICAgICB0aGlzLm9uSm9pbkNvbXBsZXRlKHJlc3AsIGh0bWwsIHN0cmVhbXMsIGV2ZW50cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkpvaW5Db21wbGV0ZShyZXNwLCBodG1sLCBzdHJlYW1zLCBldmVudHMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRyb3BQZW5kaW5nUmVmcygpe1xuICAgIERPTS5hbGwoZG9jdW1lbnQsIGBbJHtQSFhfUkVGX1NSQ309XCIke3RoaXMuaWR9XCJdWyR7UEhYX1JFRn1dYCwgZWwgPT4ge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFBIWF9SRUYpXG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoUEhYX1JFRl9TUkMpXG4gICAgfSlcbiAgfVxuXG4gIG9uSm9pbkNvbXBsZXRlKHtsaXZlX3BhdGNofSwgaHRtbCwgc3RyZWFtcywgZXZlbnRzKXtcbiAgICAvLyBJbiBvcmRlciB0byBwcm92aWRlIGEgYmV0dGVyIGV4cGVyaWVuY2UsIHdlIHdhbnQgdG8gam9pblxuICAgIC8vIGFsbCBMaXZlVmlld3MgZmlyc3QgYW5kIG9ubHkgdGhlbiBhcHBseSB0aGVpciBwYXRjaGVzLlxuICAgIGlmKHRoaXMuam9pbkNvdW50ID4gMSB8fCAodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LmlzSm9pblBlbmRpbmcoKSkpe1xuICAgICAgcmV0dXJuIHRoaXMuYXBwbHlKb2luUGF0Y2gobGl2ZV9wYXRjaCwgaHRtbCwgc3RyZWFtcywgZXZlbnRzKVxuICAgIH1cblxuICAgIC8vIE9uZSBkb3duc2lkZSBvZiB0aGlzIGFwcHJvYWNoIGlzIHRoYXQgd2UgbmVlZCB0byBmaW5kIHBoeENoaWxkcmVuXG4gICAgLy8gaW4gdGhlIGh0bWwgZnJhZ21lbnQsIGluc3RlYWQgb2YgZGlyZWN0bHkgb24gdGhlIERPTS4gVGhlIGZyYWdtZW50XG4gICAgLy8gYWxzbyBkb2VzIG5vdCBpbmNsdWRlIFBIWF9TVEFUSUMsIHNvIHdlIG5lZWQgdG8gY29weSBpdCBvdmVyIGZyb21cbiAgICAvLyB0aGUgRE9NLlxuICAgIGxldCBuZXdDaGlsZHJlbiA9IERPTS5maW5kUGh4Q2hpbGRyZW5JbkZyYWdtZW50KGh0bWwsIHRoaXMuaWQpLmZpbHRlcih0b0VsID0+IHtcbiAgICAgIGxldCBmcm9tRWwgPSB0b0VsLmlkICYmIHRoaXMuZWwucXVlcnlTZWxlY3RvcihgW2lkPVwiJHt0b0VsLmlkfVwiXWApXG4gICAgICBsZXQgcGh4U3RhdGljID0gZnJvbUVsICYmIGZyb21FbC5nZXRBdHRyaWJ1dGUoUEhYX1NUQVRJQylcbiAgICAgIGlmKHBoeFN0YXRpYyl7IHRvRWwuc2V0QXR0cmlidXRlKFBIWF9TVEFUSUMsIHBoeFN0YXRpYykgfVxuICAgICAgcmV0dXJuIHRoaXMuam9pbkNoaWxkKHRvRWwpXG4gICAgfSlcblxuICAgIGlmKG5ld0NoaWxkcmVuLmxlbmd0aCA9PT0gMCl7XG4gICAgICBpZih0aGlzLnBhcmVudCl7XG4gICAgICAgIHRoaXMucm9vdC5wZW5kaW5nSm9pbk9wcy5wdXNoKFt0aGlzLCAoKSA9PiB0aGlzLmFwcGx5Sm9pblBhdGNoKGxpdmVfcGF0Y2gsIGh0bWwsIHN0cmVhbXMsIGV2ZW50cyldKVxuICAgICAgICB0aGlzLnBhcmVudC5hY2tKb2luKHRoaXMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uQWxsQ2hpbGRKb2luc0NvbXBsZXRlKClcbiAgICAgICAgdGhpcy5hcHBseUpvaW5QYXRjaChsaXZlX3BhdGNoLCBodG1sLCBzdHJlYW1zLCBldmVudHMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdC5wZW5kaW5nSm9pbk9wcy5wdXNoKFt0aGlzLCAoKSA9PiB0aGlzLmFwcGx5Sm9pblBhdGNoKGxpdmVfcGF0Y2gsIGh0bWwsIHN0cmVhbXMsIGV2ZW50cyldKVxuICAgIH1cbiAgfVxuXG4gIGF0dGFjaFRydWVEb2NFbCgpe1xuICAgIHRoaXMuZWwgPSBET00uYnlJZCh0aGlzLmlkKVxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKFBIWF9ST09UX0lELCB0aGlzLnJvb3QuaWQpXG4gIH1cblxuICBleGVjTmV3TW91bnRlZCgpe1xuICAgIGxldCBwaHhWaWV3cG9ydFRvcCA9IHRoaXMuYmluZGluZyhQSFhfVklFV1BPUlRfVE9QKVxuICAgIGxldCBwaHhWaWV3cG9ydEJvdHRvbSA9IHRoaXMuYmluZGluZyhQSFhfVklFV1BPUlRfQk9UVE9NKVxuICAgIERPTS5hbGwodGhpcy5lbCwgYFske3BoeFZpZXdwb3J0VG9wfV0sIFske3BoeFZpZXdwb3J0Qm90dG9tfV1gLCBob29rRWwgPT4ge1xuICAgICAgRE9NLm1heWJlQWRkUHJpdmF0ZUhvb2tzKGhvb2tFbCwgcGh4Vmlld3BvcnRUb3AsIHBoeFZpZXdwb3J0Qm90dG9tKVxuICAgICAgdGhpcy5tYXliZUFkZE5ld0hvb2soaG9va0VsKVxuICAgIH0pXG4gICAgRE9NLmFsbCh0aGlzLmVsLCBgWyR7dGhpcy5iaW5kaW5nKFBIWF9IT09LKX1dLCBbZGF0YS1waHgtJHtQSFhfSE9PS31dYCwgaG9va0VsID0+IHtcbiAgICAgIHRoaXMubWF5YmVBZGROZXdIb29rKGhvb2tFbClcbiAgICB9KVxuICAgIERPTS5hbGwodGhpcy5lbCwgYFske3RoaXMuYmluZGluZyhQSFhfTU9VTlRFRCl9XWAsIGVsID0+IHRoaXMubWF5YmVNb3VudGVkKGVsKSlcbiAgfVxuXG4gIGFwcGx5Sm9pblBhdGNoKGxpdmVfcGF0Y2gsIGh0bWwsIHN0cmVhbXMsIGV2ZW50cyl7XG4gICAgdGhpcy5hdHRhY2hUcnVlRG9jRWwoKVxuICAgIGxldCBwYXRjaCA9IG5ldyBET01QYXRjaCh0aGlzLCB0aGlzLmVsLCB0aGlzLmlkLCBodG1sLCBzdHJlYW1zLCBudWxsKVxuICAgIHBhdGNoLm1hcmtQcnVuYWJsZUNvbnRlbnRGb3JSZW1vdmFsKClcbiAgICB0aGlzLnBlcmZvcm1QYXRjaChwYXRjaCwgZmFsc2UpXG4gICAgdGhpcy5qb2luTmV3Q2hpbGRyZW4oKVxuICAgIHRoaXMuZXhlY05ld01vdW50ZWQoKVxuXG4gICAgdGhpcy5qb2luUGVuZGluZyA9IGZhbHNlXG4gICAgdGhpcy5saXZlU29ja2V0LmRpc3BhdGNoRXZlbnRzKGV2ZW50cylcbiAgICB0aGlzLmFwcGx5UGVuZGluZ1VwZGF0ZXMoKVxuXG4gICAgaWYobGl2ZV9wYXRjaCl7XG4gICAgICBsZXQge2tpbmQsIHRvfSA9IGxpdmVfcGF0Y2hcbiAgICAgIHRoaXMubGl2ZVNvY2tldC5oaXN0b3J5UGF0Y2godG8sIGtpbmQpXG4gICAgfVxuICAgIHRoaXMuaGlkZUxvYWRlcigpXG4gICAgaWYodGhpcy5qb2luQ291bnQgPiAxKXsgdGhpcy50cmlnZ2VyUmVjb25uZWN0ZWQoKSB9XG4gICAgdGhpcy5zdG9wQ2FsbGJhY2soKVxuICB9XG5cbiAgdHJpZ2dlckJlZm9yZVVwZGF0ZUhvb2soZnJvbUVsLCB0b0VsKXtcbiAgICB0aGlzLmxpdmVTb2NrZXQudHJpZ2dlckRPTShcIm9uQmVmb3JlRWxVcGRhdGVkXCIsIFtmcm9tRWwsIHRvRWxdKVxuICAgIGxldCBob29rID0gdGhpcy5nZXRIb29rKGZyb21FbClcbiAgICBsZXQgaXNJZ25vcmVkID0gaG9vayAmJiBET00uaXNJZ25vcmVkKGZyb21FbCwgdGhpcy5iaW5kaW5nKFBIWF9VUERBVEUpKVxuICAgIGlmKGhvb2sgJiYgIWZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSAmJiAhKGlzSWdub3JlZCAmJiBpc0VxdWFsT2JqKGZyb21FbC5kYXRhc2V0LCB0b0VsLmRhdGFzZXQpKSl7XG4gICAgICBob29rLl9fYmVmb3JlVXBkYXRlKClcbiAgICAgIHJldHVybiBob29rXG4gICAgfVxuICB9XG5cbiAgbWF5YmVNb3VudGVkKGVsKXtcbiAgICBsZXQgcGh4TW91bnRlZCA9IGVsLmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoUEhYX01PVU5URUQpKVxuICAgIGxldCBoYXNCZWVuSW52b2tlZCA9IHBoeE1vdW50ZWQgJiYgRE9NLnByaXZhdGUoZWwsIFwibW91bnRlZFwiKVxuICAgIGlmKHBoeE1vdW50ZWQgJiYgIWhhc0JlZW5JbnZva2VkKXtcbiAgICAgIHRoaXMubGl2ZVNvY2tldC5leGVjSlMoZWwsIHBoeE1vdW50ZWQpXG4gICAgICBET00ucHV0UHJpdmF0ZShlbCwgXCJtb3VudGVkXCIsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgbWF5YmVBZGROZXdIb29rKGVsLCBmb3JjZSl7XG4gICAgbGV0IG5ld0hvb2sgPSB0aGlzLmFkZEhvb2soZWwpXG4gICAgaWYobmV3SG9vayl7IG5ld0hvb2suX19tb3VudGVkKCkgfVxuICB9XG5cbiAgcGVyZm9ybVBhdGNoKHBhdGNoLCBwcnVuZUNpZHMpe1xuICAgIGxldCByZW1vdmVkRWxzID0gW11cbiAgICBsZXQgcGh4Q2hpbGRyZW5BZGRlZCA9IGZhbHNlXG4gICAgbGV0IHVwZGF0ZWRIb29rSWRzID0gbmV3IFNldCgpXG5cbiAgICBwYXRjaC5hZnRlcihcImFkZGVkXCIsIGVsID0+IHtcbiAgICAgIHRoaXMubGl2ZVNvY2tldC50cmlnZ2VyRE9NKFwib25Ob2RlQWRkZWRcIiwgW2VsXSlcbiAgICAgIHRoaXMubWF5YmVBZGROZXdIb29rKGVsKVxuICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKXsgdGhpcy5tYXliZU1vdW50ZWQoZWwpIH1cbiAgICB9KVxuXG4gICAgcGF0Y2guYWZ0ZXIoXCJwaHhDaGlsZEFkZGVkXCIsIGVsID0+IHtcbiAgICAgIGlmKERPTS5pc1BoeFN0aWNreShlbCkpe1xuICAgICAgICB0aGlzLmxpdmVTb2NrZXQuam9pblJvb3RWaWV3cygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaHhDaGlsZHJlbkFkZGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBwYXRjaC5iZWZvcmUoXCJ1cGRhdGVkXCIsIChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICAgIGxldCBob29rID0gdGhpcy50cmlnZ2VyQmVmb3JlVXBkYXRlSG9vayhmcm9tRWwsIHRvRWwpXG4gICAgICBpZihob29rKXsgdXBkYXRlZEhvb2tJZHMuYWRkKGZyb21FbC5pZCkgfVxuICAgIH0pXG5cbiAgICBwYXRjaC5hZnRlcihcInVwZGF0ZWRcIiwgZWwgPT4ge1xuICAgICAgaWYodXBkYXRlZEhvb2tJZHMuaGFzKGVsLmlkKSl7IHRoaXMuZ2V0SG9vayhlbCkuX191cGRhdGVkKCkgfVxuICAgIH0pXG5cbiAgICBwYXRjaC5hZnRlcihcImRpc2NhcmRlZFwiLCAoZWwpID0+IHtcbiAgICAgIGlmKGVsLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSl7IHJlbW92ZWRFbHMucHVzaChlbCkgfVxuICAgIH0pXG5cbiAgICBwYXRjaC5hZnRlcihcInRyYW5zaXRpb25zRGlzY2FyZGVkXCIsIGVscyA9PiB0aGlzLmFmdGVyRWxlbWVudHNSZW1vdmVkKGVscywgcHJ1bmVDaWRzKSlcbiAgICBwYXRjaC5wZXJmb3JtKClcbiAgICB0aGlzLmFmdGVyRWxlbWVudHNSZW1vdmVkKHJlbW92ZWRFbHMsIHBydW5lQ2lkcylcblxuICAgIHJldHVybiBwaHhDaGlsZHJlbkFkZGVkXG4gIH1cblxuICBhZnRlckVsZW1lbnRzUmVtb3ZlZChlbGVtZW50cywgcHJ1bmVDaWRzKXtcbiAgICBsZXQgZGVzdHJveWVkQ0lEcyA9IFtdXG4gICAgZWxlbWVudHMuZm9yRWFjaChwYXJlbnQgPT4ge1xuICAgICAgbGV0IGNvbXBvbmVudHMgPSBET00uYWxsKHBhcmVudCwgYFske1BIWF9DT01QT05FTlR9XWApXG4gICAgICBsZXQgaG9va3MgPSBET00uYWxsKHBhcmVudCwgYFske3RoaXMuYmluZGluZyhQSFhfSE9PSyl9XWApXG4gICAgICBjb21wb25lbnRzLmNvbmNhdChwYXJlbnQpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBsZXQgY2lkID0gdGhpcy5jb21wb25lbnRJRChlbClcbiAgICAgICAgaWYoaXNDaWQoY2lkKSAmJiBkZXN0cm95ZWRDSURzLmluZGV4T2YoY2lkKSA9PT0gLTEpeyBkZXN0cm95ZWRDSURzLnB1c2goY2lkKSB9XG4gICAgICB9KVxuICAgICAgaG9va3MuY29uY2F0KHBhcmVudCkuZm9yRWFjaChob29rRWwgPT4ge1xuICAgICAgICBsZXQgaG9vayA9IHRoaXMuZ2V0SG9vayhob29rRWwpXG4gICAgICAgIGhvb2sgJiYgdGhpcy5kZXN0cm95SG9vayhob29rKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJ1bmVDaWRzIG9uIGpvaW5zLiBPdGhlcndpc2UsIGluIGNhc2Ugb2ZcbiAgICAvLyByZWpvaW5zLCB3ZSBtYXkgbm90aWZ5IGNpZHMgdGhhdCBubyBsb25nZXIgYmVsb25nIHRvIHRoZVxuICAgIC8vIGN1cnJlbnQgTGl2ZVZpZXcgdG8gYmUgcmVtb3ZlZC5cbiAgICBpZihwcnVuZUNpZHMpe1xuICAgICAgdGhpcy5tYXliZVB1c2hDb21wb25lbnRzRGVzdHJveWVkKGRlc3Ryb3llZENJRHMpXG4gICAgfVxuICB9XG5cbiAgam9pbk5ld0NoaWxkcmVuKCl7XG4gICAgRE9NLmZpbmRQaHhDaGlsZHJlbih0aGlzLmVsLCB0aGlzLmlkKS5mb3JFYWNoKGVsID0+IHRoaXMuam9pbkNoaWxkKGVsKSlcbiAgfVxuXG4gIGdldENoaWxkQnlJZChpZCl7IHJldHVybiB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF1baWRdIH1cblxuICBnZXREZXNjZW5kZW50QnlFbChlbCl7XG4gICAgaWYoZWwuaWQgPT09IHRoaXMuaWQpe1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bZWwuZ2V0QXR0cmlidXRlKFBIWF9QQVJFTlRfSUQpXVtlbC5pZF1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95RGVzY2VuZGVudChpZCl7XG4gICAgZm9yKGxldCBwYXJlbnRJZCBpbiB0aGlzLnJvb3QuY2hpbGRyZW4pe1xuICAgICAgZm9yKGxldCBjaGlsZElkIGluIHRoaXMucm9vdC5jaGlsZHJlbltwYXJlbnRJZF0pe1xuICAgICAgICBpZihjaGlsZElkID09PSBpZCl7IHJldHVybiB0aGlzLnJvb3QuY2hpbGRyZW5bcGFyZW50SWRdW2NoaWxkSWRdLmRlc3Ryb3koKSB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgam9pbkNoaWxkKGVsKXtcbiAgICBsZXQgY2hpbGQgPSB0aGlzLmdldENoaWxkQnlJZChlbC5pZClcbiAgICBpZighY2hpbGQpe1xuICAgICAgbGV0IHZpZXcgPSBuZXcgVmlldyhlbCwgdGhpcy5saXZlU29ja2V0LCB0aGlzKVxuICAgICAgdGhpcy5yb290LmNoaWxkcmVuW3RoaXMuaWRdW3ZpZXcuaWRdID0gdmlld1xuICAgICAgdmlldy5qb2luKClcbiAgICAgIHRoaXMuY2hpbGRKb2lucysrXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGlzSm9pblBlbmRpbmcoKXsgcmV0dXJuIHRoaXMuam9pblBlbmRpbmcgfVxuXG4gIGFja0pvaW4oX2NoaWxkKXtcbiAgICB0aGlzLmNoaWxkSm9pbnMtLVxuXG4gICAgaWYodGhpcy5jaGlsZEpvaW5zID09PSAwKXtcbiAgICAgIGlmKHRoaXMucGFyZW50KXtcbiAgICAgICAgdGhpcy5wYXJlbnQuYWNrSm9pbih0aGlzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkFsbENoaWxkSm9pbnNDb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25BbGxDaGlsZEpvaW5zQ29tcGxldGUoKXtcbiAgICB0aGlzLmpvaW5DYWxsYmFjaygoKSA9PiB7XG4gICAgICB0aGlzLnBlbmRpbmdKb2luT3BzLmZvckVhY2goKFt2aWV3LCBvcF0pID0+IHtcbiAgICAgICAgaWYoIXZpZXcuaXNEZXN0cm95ZWQoKSl7IG9wKCkgfVxuICAgICAgfSlcbiAgICAgIHRoaXMucGVuZGluZ0pvaW5PcHMgPSBbXVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUoZGlmZiwgZXZlbnRzKXtcbiAgICBpZih0aGlzLmlzSm9pblBlbmRpbmcoKSB8fCAodGhpcy5saXZlU29ja2V0Lmhhc1BlbmRpbmdMaW5rKCkgJiYgdGhpcy5yb290LmlzTWFpbigpKSl7XG4gICAgICByZXR1cm4gdGhpcy5wZW5kaW5nRGlmZnMucHVzaCh7ZGlmZiwgZXZlbnRzfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVkLm1lcmdlRGlmZihkaWZmKVxuICAgIGxldCBwaHhDaGlsZHJlbkFkZGVkID0gZmFsc2VcblxuICAgIC8vIFdoZW4gdGhlIGRpZmYgb25seSBjb250YWlucyBjb21wb25lbnQgZGlmZnMsIHRoZW4gd2FsayBjb21wb25lbnRzXG4gICAgLy8gYW5kIHBhdGNoIG9ubHkgdGhlIHBhcmVudCBjb21wb25lbnQgY29udGFpbmVycyBmb3VuZCBpbiB0aGUgZGlmZi5cbiAgICAvLyBPdGhlcndpc2UsIHBhdGNoIGVudGlyZSBMViBjb250YWluZXIuXG4gICAgaWYodGhpcy5yZW5kZXJlZC5pc0NvbXBvbmVudE9ubHlEaWZmKGRpZmYpKXtcbiAgICAgIHRoaXMubGl2ZVNvY2tldC50aW1lKFwiY29tcG9uZW50IHBhdGNoIGNvbXBsZXRlXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudENpZHMgPSBET00uZmluZFBhcmVudENJRHModGhpcy5lbCwgdGhpcy5yZW5kZXJlZC5jb21wb25lbnRDSURzKGRpZmYpKVxuICAgICAgICBwYXJlbnRDaWRzLmZvckVhY2gocGFyZW50Q0lEID0+IHtcbiAgICAgICAgICBpZih0aGlzLmNvbXBvbmVudFBhdGNoKHRoaXMucmVuZGVyZWQuZ2V0Q29tcG9uZW50KGRpZmYsIHBhcmVudENJRCksIHBhcmVudENJRCkpeyBwaHhDaGlsZHJlbkFkZGVkID0gdHJ1ZSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZighaXNFbXB0eShkaWZmKSl7XG4gICAgICB0aGlzLmxpdmVTb2NrZXQudGltZShcImZ1bGwgcGF0Y2ggY29tcGxldGVcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgW2h0bWwsIHN0cmVhbXNdID0gdGhpcy5yZW5kZXJDb250YWluZXIoZGlmZiwgXCJ1cGRhdGVcIilcbiAgICAgICAgbGV0IHBhdGNoID0gbmV3IERPTVBhdGNoKHRoaXMsIHRoaXMuZWwsIHRoaXMuaWQsIGh0bWwsIHN0cmVhbXMsIG51bGwpXG4gICAgICAgIHBoeENoaWxkcmVuQWRkZWQgPSB0aGlzLnBlcmZvcm1QYXRjaChwYXRjaCwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5saXZlU29ja2V0LmRpc3BhdGNoRXZlbnRzKGV2ZW50cylcbiAgICBpZihwaHhDaGlsZHJlbkFkZGVkKXsgdGhpcy5qb2luTmV3Q2hpbGRyZW4oKSB9XG4gIH1cblxuICByZW5kZXJDb250YWluZXIoZGlmZiwga2luZCl7XG4gICAgcmV0dXJuIHRoaXMubGl2ZVNvY2tldC50aW1lKGB0b1N0cmluZyBkaWZmICgke2tpbmR9KWAsICgpID0+IHtcbiAgICAgIGxldCB0YWcgPSB0aGlzLmVsLnRhZ05hbWVcbiAgICAgIC8vIERvbid0IHNraXAgYW55IGNvbXBvbmVudCBpbiB0aGUgZGlmZiBub3IgYW55IG1hcmtlZCBhcyBwcnVuZWRcbiAgICAgIC8vIChhcyB0aGV5IG1heSBoYXZlIGJlZW4gYWRkZWQgYmFjaylcbiAgICAgIGxldCBjaWRzID0gZGlmZiA/IHRoaXMucmVuZGVyZWQuY29tcG9uZW50Q0lEcyhkaWZmKS5jb25jYXQodGhpcy5wcnVuaW5nQ0lEcykgOiBudWxsXG4gICAgICBsZXQgW2h0bWwsIHN0cmVhbXNdID0gdGhpcy5yZW5kZXJlZC50b1N0cmluZyhjaWRzKVxuICAgICAgcmV0dXJuIFtgPCR7dGFnfT4ke2h0bWx9PC8ke3RhZ30+YCwgc3RyZWFtc11cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50UGF0Y2goZGlmZiwgY2lkKXtcbiAgICBpZihpc0VtcHR5KGRpZmYpKSByZXR1cm4gZmFsc2VcbiAgICBsZXQgW2h0bWwsIHN0cmVhbXNdID0gdGhpcy5yZW5kZXJlZC5jb21wb25lbnRUb1N0cmluZyhjaWQpXG4gICAgbGV0IHBhdGNoID0gbmV3IERPTVBhdGNoKHRoaXMsIHRoaXMuZWwsIHRoaXMuaWQsIGh0bWwsIHN0cmVhbXMsIGNpZClcbiAgICBsZXQgY2hpbGRyZW5BZGRlZCA9IHRoaXMucGVyZm9ybVBhdGNoKHBhdGNoLCB0cnVlKVxuICAgIHJldHVybiBjaGlsZHJlbkFkZGVkXG4gIH1cblxuICBnZXRIb29rKGVsKXsgcmV0dXJuIHRoaXMudmlld0hvb2tzW1ZpZXdIb29rLmVsZW1lbnRJRChlbCldIH1cblxuICBhZGRIb29rKGVsKXtcbiAgICBpZihWaWV3SG9vay5lbGVtZW50SUQoZWwpIHx8ICFlbC5nZXRBdHRyaWJ1dGUpeyByZXR1cm4gfVxuICAgIGxldCBob29rTmFtZSA9IGVsLmdldEF0dHJpYnV0ZShgZGF0YS1waHgtJHtQSFhfSE9PS31gKSB8fCBlbC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFBIWF9IT09LKSlcbiAgICBpZihob29rTmFtZSAmJiAhdGhpcy5vd25zRWxlbWVudChlbCkpeyByZXR1cm4gfVxuICAgIGxldCBjYWxsYmFja3MgPSB0aGlzLmxpdmVTb2NrZXQuZ2V0SG9va0NhbGxiYWNrcyhob29rTmFtZSlcblxuICAgIGlmKGNhbGxiYWNrcyl7XG4gICAgICBpZighZWwuaWQpeyBsb2dFcnJvcihgbm8gRE9NIElEIGZvciBob29rIFwiJHtob29rTmFtZX1cIi4gSG9va3MgcmVxdWlyZSBhIHVuaXF1ZSBJRCBvbiBlYWNoIGVsZW1lbnQuYCwgZWwpIH1cbiAgICAgIGxldCBob29rID0gbmV3IFZpZXdIb29rKHRoaXMsIGVsLCBjYWxsYmFja3MpXG4gICAgICB0aGlzLnZpZXdIb29rc1tWaWV3SG9vay5lbGVtZW50SUQoaG9vay5lbCldID0gaG9va1xuICAgICAgcmV0dXJuIGhvb2tcbiAgICB9IGVsc2UgaWYoaG9va05hbWUgIT09IG51bGwpe1xuICAgICAgbG9nRXJyb3IoYHVua25vd24gaG9vayBmb3VuZCBmb3IgXCIke2hvb2tOYW1lfVwiYCwgZWwpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveUhvb2soaG9vayl7XG4gICAgaG9vay5fX2Rlc3Ryb3llZCgpXG4gICAgaG9vay5fX2NsZWFudXBfXygpXG4gICAgZGVsZXRlIHRoaXMudmlld0hvb2tzW1ZpZXdIb29rLmVsZW1lbnRJRChob29rLmVsKV1cbiAgfVxuXG4gIGFwcGx5UGVuZGluZ1VwZGF0ZXMoKXtcbiAgICB0aGlzLnBlbmRpbmdEaWZmcy5mb3JFYWNoKCh7ZGlmZiwgZXZlbnRzfSkgPT4gdGhpcy51cGRhdGUoZGlmZiwgZXZlbnRzKSlcbiAgICB0aGlzLnBlbmRpbmdEaWZmcyA9IFtdXG4gICAgdGhpcy5lYWNoQ2hpbGQoY2hpbGQgPT4gY2hpbGQuYXBwbHlQZW5kaW5nVXBkYXRlcygpKVxuICB9XG5cbiAgZWFjaENoaWxkKGNhbGxiYWNrKXtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnJvb3QuY2hpbGRyZW5bdGhpcy5pZF0gfHwge31cbiAgICBmb3IobGV0IGlkIGluIGNoaWxkcmVuKXsgY2FsbGJhY2sodGhpcy5nZXRDaGlsZEJ5SWQoaWQpKSB9XG4gIH1cblxuICBvbkNoYW5uZWwoZXZlbnQsIGNiKXtcbiAgICB0aGlzLmxpdmVTb2NrZXQub25DaGFubmVsKHRoaXMuY2hhbm5lbCwgZXZlbnQsIHJlc3AgPT4ge1xuICAgICAgaWYodGhpcy5pc0pvaW5QZW5kaW5nKCkpe1xuICAgICAgICB0aGlzLnJvb3QucGVuZGluZ0pvaW5PcHMucHVzaChbdGhpcywgKCkgPT4gY2IocmVzcCldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXZlU29ja2V0LnJlcXVlc3RET01VcGRhdGUoKCkgPT4gY2IocmVzcCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJpbmRDaGFubmVsKCl7XG4gICAgLy8gVGhlIGRpZmYgZXZlbnQgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIHJlZ3VsYXIgdXBkYXRlIG9wZXJhdGlvbnMuXG4gICAgLy8gQWxsIG90aGVyIG9wZXJhdGlvbnMgYXJlIHF1ZXVlZCB0byBiZSBhcHBsaWVkIG9ubHkgYWZ0ZXIgam9pbi5cbiAgICB0aGlzLmxpdmVTb2NrZXQub25DaGFubmVsKHRoaXMuY2hhbm5lbCwgXCJkaWZmXCIsIChyYXdEaWZmKSA9PiB7XG4gICAgICB0aGlzLmxpdmVTb2NrZXQucmVxdWVzdERPTVVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbHlEaWZmKFwidXBkYXRlXCIsIHJhd0RpZmYsICh7ZGlmZiwgZXZlbnRzfSkgPT4gdGhpcy51cGRhdGUoZGlmZiwgZXZlbnRzKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLm9uQ2hhbm5lbChcInJlZGlyZWN0XCIsICh7dG8sIGZsYXNofSkgPT4gdGhpcy5vblJlZGlyZWN0KHt0bywgZmxhc2h9KSlcbiAgICB0aGlzLm9uQ2hhbm5lbChcImxpdmVfcGF0Y2hcIiwgKHJlZGlyKSA9PiB0aGlzLm9uTGl2ZVBhdGNoKHJlZGlyKSlcbiAgICB0aGlzLm9uQ2hhbm5lbChcImxpdmVfcmVkaXJlY3RcIiwgKHJlZGlyKSA9PiB0aGlzLm9uTGl2ZVJlZGlyZWN0KHJlZGlyKSlcbiAgICB0aGlzLmNoYW5uZWwub25FcnJvcihyZWFzb24gPT4gdGhpcy5vbkVycm9yKHJlYXNvbikpXG4gICAgdGhpcy5jaGFubmVsLm9uQ2xvc2UocmVhc29uID0+IHRoaXMub25DbG9zZShyZWFzb24pKVxuICB9XG5cbiAgZGVzdHJveUFsbENoaWxkcmVuKCl7IHRoaXMuZWFjaENoaWxkKGNoaWxkID0+IGNoaWxkLmRlc3Ryb3koKSkgfVxuXG4gIG9uTGl2ZVJlZGlyZWN0KHJlZGlyKXtcbiAgICBsZXQge3RvLCBraW5kLCBmbGFzaH0gPSByZWRpclxuICAgIGxldCB1cmwgPSB0aGlzLmV4cGFuZFVSTCh0bylcbiAgICB0aGlzLmxpdmVTb2NrZXQuaGlzdG9yeVJlZGlyZWN0KHVybCwga2luZCwgZmxhc2gpXG4gIH1cblxuICBvbkxpdmVQYXRjaChyZWRpcil7XG4gICAgbGV0IHt0bywga2luZH0gPSByZWRpclxuICAgIHRoaXMuaHJlZiA9IHRoaXMuZXhwYW5kVVJMKHRvKVxuICAgIHRoaXMubGl2ZVNvY2tldC5oaXN0b3J5UGF0Y2godG8sIGtpbmQpXG4gIH1cblxuICBleHBhbmRVUkwodG8pe1xuICAgIHJldHVybiB0by5zdGFydHNXaXRoKFwiL1wiKSA/IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt0b31gIDogdG9cbiAgfVxuXG4gIG9uUmVkaXJlY3Qoe3RvLCBmbGFzaH0peyB0aGlzLmxpdmVTb2NrZXQucmVkaXJlY3QodG8sIGZsYXNoKSB9XG5cbiAgaXNEZXN0cm95ZWQoKXsgcmV0dXJuIHRoaXMuZGVzdHJveWVkIH1cblxuICBqb2luRGVhZCgpeyB0aGlzLmlzRGVhZCA9IHRydWUgfVxuXG4gIGpvaW4oY2FsbGJhY2spe1xuICAgIHRoaXMuc2hvd0xvYWRlcih0aGlzLmxpdmVTb2NrZXQubG9hZGVyVGltZW91dClcbiAgICB0aGlzLmJpbmRDaGFubmVsKClcbiAgICBpZih0aGlzLmlzTWFpbigpKXtcbiAgICAgIHRoaXMuc3RvcENhbGxiYWNrID0gdGhpcy5saXZlU29ja2V0LndpdGhQYWdlTG9hZGluZyh7dG86IHRoaXMuaHJlZiwga2luZDogXCJpbml0aWFsXCJ9KVxuICAgIH1cbiAgICB0aGlzLmpvaW5DYWxsYmFjayA9IChvbkRvbmUpID0+IHtcbiAgICAgIG9uRG9uZSA9IG9uRG9uZSB8fCBmdW5jdGlvbigpe31cbiAgICAgIGNhbGxiYWNrID8gY2FsbGJhY2sodGhpcy5qb2luQ291bnQsIG9uRG9uZSkgOiBvbkRvbmUoKVxuICAgIH1cbiAgICB0aGlzLmxpdmVTb2NrZXQud3JhcFB1c2godGhpcywge3RpbWVvdXQ6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbC5qb2luKClcbiAgICAgICAgLnJlY2VpdmUoXCJva1wiLCBkYXRhID0+IHtcbiAgICAgICAgICBpZighdGhpcy5pc0Rlc3Ryb3llZCgpKXtcbiAgICAgICAgICAgIHRoaXMubGl2ZVNvY2tldC5yZXF1ZXN0RE9NVXBkYXRlKCgpID0+IHRoaXMub25Kb2luKGRhdGEpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnJlY2VpdmUoXCJlcnJvclwiLCByZXNwID0+ICF0aGlzLmlzRGVzdHJveWVkKCkgJiYgdGhpcy5vbkpvaW5FcnJvcihyZXNwKSlcbiAgICAgICAgLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+ICF0aGlzLmlzRGVzdHJveWVkKCkgJiYgdGhpcy5vbkpvaW5FcnJvcih7cmVhc29uOiBcInRpbWVvdXRcIn0pKVxuICAgIH0pXG4gIH1cblxuICBvbkpvaW5FcnJvcihyZXNwKXtcbiAgICBpZihyZXNwLnJlYXNvbiA9PT0gXCJyZWxvYWRcIil7XG4gICAgICB0aGlzLmxvZyhcImVycm9yXCIsICgpID0+IFtgZmFpbGVkIG1vdW50IHdpdGggJHtyZXNwLnN0YXR1c30uIEZhbGxpbmcgYmFjayB0byBwYWdlIHJlcXVlc3RgLCByZXNwXSlcbiAgICAgIHJldHVybiB0aGlzLm9uUmVkaXJlY3Qoe3RvOiB0aGlzLmhyZWZ9KVxuICAgIH0gZWxzZSBpZihyZXNwLnJlYXNvbiA9PT0gXCJ1bmF1dGhvcml6ZWRcIiB8fCByZXNwLnJlYXNvbiA9PT0gXCJzdGFsZVwiKXtcbiAgICAgIHRoaXMubG9nKFwiZXJyb3JcIiwgKCkgPT4gW1widW5hdXRob3JpemVkIGxpdmVfcmVkaXJlY3QuIEZhbGxpbmcgYmFjayB0byBwYWdlIHJlcXVlc3RcIiwgcmVzcF0pXG4gICAgICByZXR1cm4gdGhpcy5vblJlZGlyZWN0KHt0bzogdGhpcy5ocmVmfSlcbiAgICB9XG4gICAgaWYocmVzcC5yZWRpcmVjdCB8fCByZXNwLmxpdmVfcmVkaXJlY3Qpe1xuICAgICAgdGhpcy5qb2luUGVuZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNoYW5uZWwubGVhdmUoKVxuICAgIH1cbiAgICBpZihyZXNwLnJlZGlyZWN0KXsgcmV0dXJuIHRoaXMub25SZWRpcmVjdChyZXNwLnJlZGlyZWN0KSB9XG4gICAgaWYocmVzcC5saXZlX3JlZGlyZWN0KXsgcmV0dXJuIHRoaXMub25MaXZlUmVkaXJlY3QocmVzcC5saXZlX3JlZGlyZWN0KSB9XG4gICAgdGhpcy5kaXNwbGF5RXJyb3IoW1BIWF9MT0FESU5HX0NMQVNTLCBQSFhfRVJST1JfQ0xBU1MsIFBIWF9TRVJWRVJfRVJST1JfQ0xBU1NdKVxuICAgIHRoaXMubG9nKFwiZXJyb3JcIiwgKCkgPT4gW1widW5hYmxlIHRvIGpvaW5cIiwgcmVzcF0pXG4gICAgaWYodGhpcy5saXZlU29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLmxpdmVTb2NrZXQucmVsb2FkV2l0aEppdHRlcih0aGlzKSB9XG4gIH1cblxuICBvbkNsb3NlKHJlYXNvbil7XG4gICAgaWYodGhpcy5pc0Rlc3Ryb3llZCgpKXsgcmV0dXJuIH1cbiAgICBpZih0aGlzLmxpdmVTb2NrZXQuaGFzUGVuZGluZ0xpbmsoKSAmJiByZWFzb24gIT09IFwibGVhdmVcIil7XG4gICAgICByZXR1cm4gdGhpcy5saXZlU29ja2V0LnJlbG9hZFdpdGhKaXR0ZXIodGhpcylcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95QWxsQ2hpbGRyZW4oKVxuICAgIHRoaXMubGl2ZVNvY2tldC5kcm9wQWN0aXZlRWxlbWVudCh0aGlzKVxuICAgIC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGJlIG51bGwgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTFcbiAgICBpZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KXsgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCkgfVxuICAgIGlmKHRoaXMubGl2ZVNvY2tldC5pc1VubG9hZGVkKCkpe1xuICAgICAgdGhpcy5zaG93TG9hZGVyKEJFRk9SRV9VTkxPQURfTE9BREVSX1RJTUVPVVQpXG4gICAgfVxuICB9XG5cbiAgb25FcnJvcihyZWFzb24pe1xuICAgIHRoaXMub25DbG9zZShyZWFzb24pXG4gICAgaWYodGhpcy5saXZlU29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLmxvZyhcImVycm9yXCIsICgpID0+IFtcInZpZXcgY3Jhc2hlZFwiLCByZWFzb25dKSB9XG4gICAgaWYoIXRoaXMubGl2ZVNvY2tldC5pc1VubG9hZGVkKCkpe1xuICAgICAgaWYodGhpcy5saXZlU29ja2V0LmlzQ29ubmVjdGVkKCkpe1xuICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihbUEhYX0xPQURJTkdfQ0xBU1MsIFBIWF9FUlJPUl9DTEFTUywgUEhYX1NFUlZFUl9FUlJPUl9DTEFTU10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihbUEhYX0xPQURJTkdfQ0xBU1MsIFBIWF9FUlJPUl9DTEFTUywgUEhYX0NMSUVOVF9FUlJPUl9DTEFTU10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUVycm9yKGNsYXNzZXMpe1xuICAgIGlmKHRoaXMuaXNNYWluKCkpeyBET00uZGlzcGF0Y2hFdmVudCh3aW5kb3csIFwicGh4OnBhZ2UtbG9hZGluZy1zdGFydFwiLCB7ZGV0YWlsOiB7dG86IHRoaXMuaHJlZiwga2luZDogXCJlcnJvclwifX0pIH1cbiAgICB0aGlzLnNob3dMb2FkZXIoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQ2xhc3NlcyguLi5jbGFzc2VzKVxuICAgIHRoaXMuZXhlY0FsbCh0aGlzLmJpbmRpbmcoXCJkaXNjb25uZWN0ZWRcIikpXG4gIH1cblxuICBwdXNoV2l0aFJlcGx5KHJlZkdlbmVyYXRvciwgZXZlbnQsIHBheWxvYWQsIG9uUmVwbHkgPSBmdW5jdGlvbiAoKXsgfSl7XG4gICAgaWYoIXRoaXMuaXNDb25uZWN0ZWQoKSl7IHJldHVybiB9XG5cbiAgICBsZXQgW3JlZiwgW2VsXSwgb3B0c10gPSByZWZHZW5lcmF0b3IgPyByZWZHZW5lcmF0b3IoKSA6IFtudWxsLCBbXSwge31dXG4gICAgbGV0IG9uTG9hZGluZ0RvbmUgPSBmdW5jdGlvbigpeyB9XG4gICAgaWYob3B0cy5wYWdlX2xvYWRpbmcgfHwgKGVsICYmIChlbC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFBIWF9QQUdFX0xPQURJTkcpKSAhPT0gbnVsbCkpKXtcbiAgICAgIG9uTG9hZGluZ0RvbmUgPSB0aGlzLmxpdmVTb2NrZXQud2l0aFBhZ2VMb2FkaW5nKHtraW5kOiBcImVsZW1lbnRcIiwgdGFyZ2V0OiBlbH0pXG4gICAgfVxuXG4gICAgaWYodHlwZW9mIChwYXlsb2FkLmNpZCkgIT09IFwibnVtYmVyXCIpeyBkZWxldGUgcGF5bG9hZC5jaWQgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxpdmVTb2NrZXQud3JhcFB1c2godGhpcywge3RpbWVvdXQ6IHRydWV9LCAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwucHVzaChldmVudCwgcGF5bG9hZCwgUFVTSF9USU1FT1VUKS5yZWNlaXZlKFwib2tcIiwgcmVzcCA9PiB7XG4gICAgICAgICAgbGV0IGZpbmlzaCA9IChob29rUmVwbHkpID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3AucmVkaXJlY3QpeyB0aGlzLm9uUmVkaXJlY3QocmVzcC5yZWRpcmVjdCkgfVxuICAgICAgICAgICAgaWYocmVzcC5saXZlX3BhdGNoKXsgdGhpcy5vbkxpdmVQYXRjaChyZXNwLmxpdmVfcGF0Y2gpIH1cbiAgICAgICAgICAgIGlmKHJlc3AubGl2ZV9yZWRpcmVjdCl7IHRoaXMub25MaXZlUmVkaXJlY3QocmVzcC5saXZlX3JlZGlyZWN0KSB9XG4gICAgICAgICAgICBvbkxvYWRpbmdEb25lKClcbiAgICAgICAgICAgIG9uUmVwbHkocmVzcCwgaG9va1JlcGx5KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXNwLmRpZmYpe1xuICAgICAgICAgICAgdGhpcy5saXZlU29ja2V0LnJlcXVlc3RET01VcGRhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFwcGx5RGlmZihcInVwZGF0ZVwiLCByZXNwLmRpZmYsICh7ZGlmZiwgcmVwbHksIGV2ZW50c30pID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZWYgIT09IG51bGwpeyB0aGlzLnVuZG9SZWZzKHJlZikgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGRpZmYsIGV2ZW50cylcbiAgICAgICAgICAgICAgICBmaW5pc2gocmVwbHkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZihyZWYgIT09IG51bGwpeyB0aGlzLnVuZG9SZWZzKHJlZikgfVxuICAgICAgICAgICAgZmluaXNoKG51bGwpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICB1bmRvUmVmcyhyZWYpe1xuICAgIGlmKCF0aGlzLmlzQ29ubmVjdGVkKCkpeyByZXR1cm4gfSAvLyBleGl0IGlmIGV4dGVybmFsIGZvcm0gdHJpZ2dlcmVkXG5cbiAgICBET00uYWxsKGRvY3VtZW50LCBgWyR7UEhYX1JFRl9TUkN9PVwiJHt0aGlzLmlkfVwiXVske1BIWF9SRUZ9PVwiJHtyZWZ9XCJdYCwgZWwgPT4ge1xuICAgICAgbGV0IGRpc2FibGVkVmFsID0gZWwuZ2V0QXR0cmlidXRlKFBIWF9ESVNBQkxFRClcbiAgICAgIC8vIHJlbW92ZSByZWZzXG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoUEhYX1JFRilcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShQSFhfUkVGX1NSQylcbiAgICAgIC8vIHJlc3RvcmUgaW5wdXRzXG4gICAgICBpZihlbC5nZXRBdHRyaWJ1dGUoUEhYX1JFQURPTkxZKSAhPT0gbnVsbCl7XG4gICAgICAgIGVsLnJlYWRPbmx5ID0gZmFsc2VcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFBIWF9SRUFET05MWSlcbiAgICAgIH1cbiAgICAgIGlmKGRpc2FibGVkVmFsICE9PSBudWxsKXtcbiAgICAgICAgZWwuZGlzYWJsZWQgPSBkaXNhYmxlZFZhbCA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFBIWF9ESVNBQkxFRClcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSBjbGFzc2VzXG4gICAgICBQSFhfRVZFTlRfQ0xBU1NFUy5mb3JFYWNoKGNsYXNzTmFtZSA9PiBET00ucmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkpXG4gICAgICAvLyByZXN0b3JlIGRpc2FibGVzXG4gICAgICBsZXQgZGlzYWJsZVJlc3RvcmUgPSBlbC5nZXRBdHRyaWJ1dGUoUEhYX0RJU0FCTEVfV0lUSF9SRVNUT1JFKVxuICAgICAgaWYoZGlzYWJsZVJlc3RvcmUgIT09IG51bGwpe1xuICAgICAgICBlbC5pbm5lclRleHQgPSBkaXNhYmxlUmVzdG9yZVxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoUEhYX0RJU0FCTEVfV0lUSF9SRVNUT1JFKVxuICAgICAgfVxuICAgICAgbGV0IHRvRWwgPSBET00ucHJpdmF0ZShlbCwgUEhYX1JFRilcbiAgICAgIGlmKHRvRWwpe1xuICAgICAgICBsZXQgaG9vayA9IHRoaXMudHJpZ2dlckJlZm9yZVVwZGF0ZUhvb2soZWwsIHRvRWwpXG4gICAgICAgIERPTVBhdGNoLnBhdGNoRWwoZWwsIHRvRWwsIHRoaXMubGl2ZVNvY2tldC5nZXRBY3RpdmVFbGVtZW50KCkpXG4gICAgICAgIGlmKGhvb2speyBob29rLl9fdXBkYXRlZCgpIH1cbiAgICAgICAgRE9NLmRlbGV0ZVByaXZhdGUoZWwsIFBIWF9SRUYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1dFJlZihlbGVtZW50cywgZXZlbnQsIG9wdHMgPSB7fSl7XG4gICAgbGV0IG5ld1JlZiA9IHRoaXMucmVmKytcbiAgICBsZXQgZGlzYWJsZVdpdGggPSB0aGlzLmJpbmRpbmcoUEhYX0RJU0FCTEVfV0lUSClcbiAgICBpZihvcHRzLmxvYWRpbmcpeyBlbGVtZW50cyA9IGVsZW1lbnRzLmNvbmNhdChET00uYWxsKGRvY3VtZW50LCBvcHRzLmxvYWRpbmcpKX1cblxuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChgcGh4LSR7ZXZlbnR9LWxvYWRpbmdgKVxuICAgICAgZWwuc2V0QXR0cmlidXRlKFBIWF9SRUYsIG5ld1JlZilcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShQSFhfUkVGX1NSQywgdGhpcy5lbC5pZClcbiAgICAgIGxldCBkaXNhYmxlVGV4dCA9IGVsLmdldEF0dHJpYnV0ZShkaXNhYmxlV2l0aClcbiAgICAgIGlmKGRpc2FibGVUZXh0ICE9PSBudWxsKXtcbiAgICAgICAgaWYoIWVsLmdldEF0dHJpYnV0ZShQSFhfRElTQUJMRV9XSVRIX1JFU1RPUkUpKXtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoUEhYX0RJU0FCTEVfV0lUSF9SRVNUT1JFLCBlbC5pbm5lclRleHQpXG4gICAgICAgIH1cbiAgICAgICAgaWYoZGlzYWJsZVRleHQgIT09IFwiXCIpeyBlbC5pbm5lclRleHQgPSBkaXNhYmxlVGV4dCB9XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gW25ld1JlZiwgZWxlbWVudHMsIG9wdHNdXG4gIH1cblxuICBjb21wb25lbnRJRChlbCl7XG4gICAgbGV0IGNpZCA9IGVsLmdldEF0dHJpYnV0ZSAmJiBlbC5nZXRBdHRyaWJ1dGUoUEhYX0NPTVBPTkVOVClcbiAgICByZXR1cm4gY2lkID8gcGFyc2VJbnQoY2lkKSA6IG51bGxcbiAgfVxuXG4gIHRhcmdldENvbXBvbmVudElEKHRhcmdldCwgdGFyZ2V0Q3R4LCBvcHRzID0ge30pe1xuICAgIGlmKGlzQ2lkKHRhcmdldEN0eCkpeyByZXR1cm4gdGFyZ2V0Q3R4IH1cblxuICAgIGxldCBjaWRPclNlbGVjdG9yID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoXCJ0YXJnZXRcIikpXG4gICAgaWYoaXNDaWQoY2lkT3JTZWxlY3Rvcikpe1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGNpZE9yU2VsZWN0b3IpXG4gICAgfSBlbHNlIGlmKHRhcmdldEN0eCAmJiAoY2lkT3JTZWxlY3RvciAhPT0gbnVsbCB8fCBvcHRzLnRhcmdldCkpe1xuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VzdENvbXBvbmVudElEKHRhcmdldEN0eClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBjbG9zZXN0Q29tcG9uZW50SUQodGFyZ2V0Q3R4KXtcbiAgICBpZihpc0NpZCh0YXJnZXRDdHgpKXtcbiAgICAgIHJldHVybiB0YXJnZXRDdHhcbiAgICB9IGVsc2UgaWYodGFyZ2V0Q3R4KXtcbiAgICAgIHJldHVybiBtYXliZSh0YXJnZXRDdHguY2xvc2VzdChgWyR7UEhYX0NPTVBPTkVOVH1dYCksIGVsID0+IHRoaXMub3duc0VsZW1lbnQoZWwpICYmIHRoaXMuY29tcG9uZW50SUQoZWwpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHB1c2hIb29rRXZlbnQoZWwsIHRhcmdldEN0eCwgZXZlbnQsIHBheWxvYWQsIG9uUmVwbHkpe1xuICAgIGlmKCF0aGlzLmlzQ29ubmVjdGVkKCkpe1xuICAgICAgdGhpcy5sb2coXCJob29rXCIsICgpID0+IFtcInVuYWJsZSB0byBwdXNoIGhvb2sgZXZlbnQuIExpdmVWaWV3IG5vdCBjb25uZWN0ZWRcIiwgZXZlbnQsIHBheWxvYWRdKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBbcmVmLCBlbHMsIG9wdHNdID0gdGhpcy5wdXRSZWYoW2VsXSwgXCJob29rXCIpXG4gICAgdGhpcy5wdXNoV2l0aFJlcGx5KCgpID0+IFtyZWYsIGVscywgb3B0c10sIFwiZXZlbnRcIiwge1xuICAgICAgdHlwZTogXCJob29rXCIsXG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICB2YWx1ZTogcGF5bG9hZCxcbiAgICAgIGNpZDogdGhpcy5jbG9zZXN0Q29tcG9uZW50SUQodGFyZ2V0Q3R4KVxuICAgIH0sIChyZXNwLCByZXBseSkgPT4gb25SZXBseShyZXBseSwgcmVmKSlcblxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIGV4dHJhY3RNZXRhKGVsLCBtZXRhLCB2YWx1ZSl7XG4gICAgbGV0IHByZWZpeCA9IHRoaXMuYmluZGluZyhcInZhbHVlLVwiKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCFtZXRhKXsgbWV0YSA9IHt9IH1cbiAgICAgIGxldCBuYW1lID0gZWwuYXR0cmlidXRlc1tpXS5uYW1lXG4gICAgICBpZihuYW1lLnN0YXJ0c1dpdGgocHJlZml4KSl7IG1ldGFbbmFtZS5yZXBsYWNlKHByZWZpeCwgXCJcIildID0gZWwuZ2V0QXR0cmlidXRlKG5hbWUpIH1cbiAgICB9XG4gICAgaWYoZWwudmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhKGVsIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSl7XG4gICAgICBpZighbWV0YSl7IG1ldGEgPSB7fSB9XG4gICAgICBtZXRhLnZhbHVlID0gZWwudmFsdWVcblxuICAgICAgaWYoZWwudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIENIRUNLQUJMRV9JTlBVVFMuaW5kZXhPZihlbC50eXBlKSA+PSAwICYmICFlbC5jaGVja2VkKXtcbiAgICAgICAgZGVsZXRlIG1ldGEudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodmFsdWUpe1xuICAgICAgaWYoIW1ldGEpeyBtZXRhID0ge30gfVxuICAgICAgZm9yKGxldCBrZXkgaW4gdmFsdWUpeyBtZXRhW2tleV0gPSB2YWx1ZVtrZXldIH1cbiAgICB9XG4gICAgcmV0dXJuIG1ldGFcbiAgfVxuXG5cbiAgcHVzaEV2ZW50KHR5cGUsIGVsLCB0YXJnZXRDdHgsIHBoeEV2ZW50LCBtZXRhLCBvcHRzID0ge30sIG9uUmVwbHkpe1xuICAgIHRoaXMucHVzaFdpdGhSZXBseSgoKSA9PiB0aGlzLnB1dFJlZihbZWxdLCB0eXBlLCBvcHRzKSwgXCJldmVudFwiLCB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZXZlbnQ6IHBoeEV2ZW50LFxuICAgICAgdmFsdWU6IHRoaXMuZXh0cmFjdE1ldGEoZWwsIG1ldGEsIG9wdHMudmFsdWUpLFxuICAgICAgY2lkOiB0aGlzLnRhcmdldENvbXBvbmVudElEKGVsLCB0YXJnZXRDdHgsIG9wdHMpXG4gICAgfSwgKHJlc3AsIHJlcGx5KSA9PiBvblJlcGx5ICYmIG9uUmVwbHkocmVwbHkpKVxuICB9XG5cbiAgcHVzaEZpbGVQcm9ncmVzcyhmaWxlRWwsIGVudHJ5UmVmLCBwcm9ncmVzcywgb25SZXBseSA9IGZ1bmN0aW9uICgpeyB9KXtcbiAgICB0aGlzLmxpdmVTb2NrZXQud2l0aGluT3duZXJzKGZpbGVFbC5mb3JtLCAodmlldywgdGFyZ2V0Q3R4KSA9PiB7XG4gICAgICB2aWV3LnB1c2hXaXRoUmVwbHkobnVsbCwgXCJwcm9ncmVzc1wiLCB7XG4gICAgICAgIGV2ZW50OiBmaWxlRWwuZ2V0QXR0cmlidXRlKHZpZXcuYmluZGluZyhQSFhfUFJPR1JFU1MpKSxcbiAgICAgICAgcmVmOiBmaWxlRWwuZ2V0QXR0cmlidXRlKFBIWF9VUExPQURfUkVGKSxcbiAgICAgICAgZW50cnlfcmVmOiBlbnRyeVJlZixcbiAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgICBjaWQ6IHZpZXcudGFyZ2V0Q29tcG9uZW50SUQoZmlsZUVsLmZvcm0sIHRhcmdldEN0eClcbiAgICAgIH0sIG9uUmVwbHkpXG4gICAgfSlcbiAgfVxuXG4gIHB1c2hJbnB1dChpbnB1dEVsLCB0YXJnZXRDdHgsIGZvcmNlQ2lkLCBwaHhFdmVudCwgb3B0cywgY2FsbGJhY2spe1xuICAgIGxldCB1cGxvYWRzXG4gICAgbGV0IGNpZCA9IGlzQ2lkKGZvcmNlQ2lkKSA/IGZvcmNlQ2lkIDogdGhpcy50YXJnZXRDb21wb25lbnRJRChpbnB1dEVsLmZvcm0sIHRhcmdldEN0eClcbiAgICBsZXQgcmVmR2VuZXJhdG9yID0gKCkgPT4gdGhpcy5wdXRSZWYoW2lucHV0RWwsIGlucHV0RWwuZm9ybV0sIFwiY2hhbmdlXCIsIG9wdHMpXG4gICAgbGV0IGZvcm1EYXRhXG4gICAgbGV0IG1ldGEgID0gdGhpcy5leHRyYWN0TWV0YShpbnB1dEVsLmZvcm0pXG4gICAgaWYoaW5wdXRFbC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFwiY2hhbmdlXCIpKSl7XG4gICAgICBmb3JtRGF0YSA9IHNlcmlhbGl6ZUZvcm0oaW5wdXRFbC5mb3JtLCB7X3RhcmdldDogb3B0cy5fdGFyZ2V0LCAuLi5tZXRhfSwgW2lucHV0RWwubmFtZV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1EYXRhID0gc2VyaWFsaXplRm9ybShpbnB1dEVsLmZvcm0sIHtfdGFyZ2V0OiBvcHRzLl90YXJnZXQsIC4uLm1ldGF9KVxuICAgIH1cbiAgICBpZihET00uaXNVcGxvYWRJbnB1dChpbnB1dEVsKSAmJiBpbnB1dEVsLmZpbGVzICYmIGlucHV0RWwuZmlsZXMubGVuZ3RoID4gMCl7XG4gICAgICBMaXZlVXBsb2FkZXIudHJhY2tGaWxlcyhpbnB1dEVsLCBBcnJheS5mcm9tKGlucHV0RWwuZmlsZXMpKVxuICAgIH1cbiAgICB1cGxvYWRzID0gTGl2ZVVwbG9hZGVyLnNlcmlhbGl6ZVVwbG9hZHMoaW5wdXRFbClcblxuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHR5cGU6IFwiZm9ybVwiLFxuICAgICAgZXZlbnQ6IHBoeEV2ZW50LFxuICAgICAgdmFsdWU6IGZvcm1EYXRhLFxuICAgICAgdXBsb2FkczogdXBsb2FkcyxcbiAgICAgIGNpZDogY2lkXG4gICAgfVxuICAgIHRoaXMucHVzaFdpdGhSZXBseShyZWZHZW5lcmF0b3IsIFwiZXZlbnRcIiwgZXZlbnQsIHJlc3AgPT4ge1xuICAgICAgRE9NLnNob3dFcnJvcihpbnB1dEVsLCB0aGlzLmxpdmVTb2NrZXQuYmluZGluZyhQSFhfRkVFREJBQ0tfRk9SKSlcbiAgICAgIGlmKERPTS5pc1VwbG9hZElucHV0KGlucHV0RWwpICYmIGlucHV0RWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1waHgtYXV0by11cGxvYWRcIikgIT09IG51bGwpe1xuICAgICAgICBpZihMaXZlVXBsb2FkZXIuZmlsZXNBd2FpdGluZ1ByZWZsaWdodChpbnB1dEVsKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICBsZXQgW3JlZiwgX2Vsc10gPSByZWZHZW5lcmF0b3IoKVxuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoaW5wdXRFbC5mb3JtLCB0YXJnZXRDdHgsIHJlZiwgY2lkLCAoX3VwbG9hZHMpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3ApXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJBd2FpdGluZ1N1Ym1pdChpbnB1dEVsLmZvcm0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzcClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdHJpZ2dlckF3YWl0aW5nU3VibWl0KGZvcm1FbCl7XG4gICAgbGV0IGF3YWl0aW5nU3VibWl0ID0gdGhpcy5nZXRTY2hlZHVsZWRTdWJtaXQoZm9ybUVsKVxuICAgIGlmKGF3YWl0aW5nU3VibWl0KXtcbiAgICAgIGxldCBbX2VsLCBfcmVmLCBfb3B0cywgY2FsbGJhY2tdID0gYXdhaXRpbmdTdWJtaXRcbiAgICAgIHRoaXMuY2FuY2VsU3VibWl0KGZvcm1FbClcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBnZXRTY2hlZHVsZWRTdWJtaXQoZm9ybUVsKXtcbiAgICByZXR1cm4gdGhpcy5mb3JtU3VibWl0cy5maW5kKChbZWwsIF9yZWYsIF9vcHRzLCBfY2FsbGJhY2tdKSA9PiBlbC5pc1NhbWVOb2RlKGZvcm1FbCkpXG4gIH1cblxuICBzY2hlZHVsZVN1Ym1pdChmb3JtRWwsIHJlZiwgb3B0cywgY2FsbGJhY2spe1xuICAgIGlmKHRoaXMuZ2V0U2NoZWR1bGVkU3VibWl0KGZvcm1FbCkpeyByZXR1cm4gdHJ1ZSB9XG4gICAgdGhpcy5mb3JtU3VibWl0cy5wdXNoKFtmb3JtRWwsIHJlZiwgb3B0cywgY2FsbGJhY2tdKVxuICB9XG5cbiAgY2FuY2VsU3VibWl0KGZvcm1FbCl7XG4gICAgdGhpcy5mb3JtU3VibWl0cyA9IHRoaXMuZm9ybVN1Ym1pdHMuZmlsdGVyKChbZWwsIHJlZiwgX2NhbGxiYWNrXSkgPT4ge1xuICAgICAgaWYoZWwuaXNTYW1lTm9kZShmb3JtRWwpKXtcbiAgICAgICAgdGhpcy51bmRvUmVmcyhyZWYpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZGlzYWJsZUZvcm0oZm9ybUVsLCBvcHRzID0ge30pe1xuICAgIGxldCBmaWx0ZXJJZ25vcmVkID0gZWwgPT4ge1xuICAgICAgbGV0IHVzZXJJZ25vcmVkID0gY2xvc2VzdFBoeEJpbmRpbmcoZWwsIGAke3RoaXMuYmluZGluZyhQSFhfVVBEQVRFKX09aWdub3JlYCwgZWwuZm9ybSlcbiAgICAgIHJldHVybiAhKHVzZXJJZ25vcmVkIHx8IGNsb3Nlc3RQaHhCaW5kaW5nKGVsLCBcImRhdGEtcGh4LXVwZGF0ZT1pZ25vcmVcIiwgZWwuZm9ybSkpXG4gICAgfVxuICAgIGxldCBmaWx0ZXJEaXNhYmxlcyA9IGVsID0+IHtcbiAgICAgIHJldHVybiBlbC5oYXNBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFBIWF9ESVNBQkxFX1dJVEgpKVxuICAgIH1cbiAgICBsZXQgZmlsdGVyQnV0dG9uID0gZWwgPT4gZWwudGFnTmFtZSA9PSBcIkJVVFRPTlwiXG5cbiAgICBsZXQgZmlsdGVySW5wdXQgPSBlbCA9PiBbXCJJTlBVVFwiLCBcIlRFWFRBUkVBXCIsIFwiU0VMRUNUXCJdLmluY2x1ZGVzKGVsLnRhZ05hbWUpXG5cbiAgICBsZXQgZm9ybUVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtRWwuZWxlbWVudHMpXG4gICAgbGV0IGRpc2FibGVzID0gZm9ybUVsZW1lbnRzLmZpbHRlcihmaWx0ZXJEaXNhYmxlcylcbiAgICBsZXQgYnV0dG9ucyA9IGZvcm1FbGVtZW50cy5maWx0ZXIoZmlsdGVyQnV0dG9uKS5maWx0ZXIoZmlsdGVySWdub3JlZClcbiAgICBsZXQgaW5wdXRzID0gZm9ybUVsZW1lbnRzLmZpbHRlcihmaWx0ZXJJbnB1dCkuZmlsdGVyKGZpbHRlcklnbm9yZWQpXG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoUEhYX0RJU0FCTEVELCBidXR0b24uZGlzYWJsZWQpXG4gICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgfSlcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoUEhYX1JFQURPTkxZLCBpbnB1dC5yZWFkT25seSlcbiAgICAgIGlucHV0LnJlYWRPbmx5ID0gdHJ1ZVxuICAgICAgaWYoaW5wdXQuZmlsZXMpe1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoUEhYX0RJU0FCTEVELCBpbnB1dC5kaXNhYmxlZClcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBmb3JtRWwuc2V0QXR0cmlidXRlKHRoaXMuYmluZGluZyhQSFhfUEFHRV9MT0FESU5HKSwgXCJcIilcbiAgICByZXR1cm4gdGhpcy5wdXRSZWYoW2Zvcm1FbF0uY29uY2F0KGRpc2FibGVzKS5jb25jYXQoYnV0dG9ucykuY29uY2F0KGlucHV0cyksIFwic3VibWl0XCIsIG9wdHMpXG4gIH1cblxuICBwdXNoRm9ybVN1Ym1pdChmb3JtRWwsIHRhcmdldEN0eCwgcGh4RXZlbnQsIHN1Ym1pdHRlciwgb3B0cywgb25SZXBseSl7XG4gICAgbGV0IHJlZkdlbmVyYXRvciA9ICgpID0+IHRoaXMuZGlzYWJsZUZvcm0oZm9ybUVsLCBvcHRzKVxuICAgIGxldCBjaWQgPSB0aGlzLnRhcmdldENvbXBvbmVudElEKGZvcm1FbCwgdGFyZ2V0Q3R4KVxuICAgIGlmKExpdmVVcGxvYWRlci5oYXNVcGxvYWRzSW5Qcm9ncmVzcyhmb3JtRWwpKXtcbiAgICAgIGxldCBbcmVmLCBfZWxzXSA9IHJlZkdlbmVyYXRvcigpXG4gICAgICBsZXQgcHVzaCA9ICgpID0+IHRoaXMucHVzaEZvcm1TdWJtaXQoZm9ybUVsLCBzdWJtaXR0ZXIsIHRhcmdldEN0eCwgcGh4RXZlbnQsIG9wdHMsIG9uUmVwbHkpXG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVN1Ym1pdChmb3JtRWwsIHJlZiwgb3B0cywgcHVzaClcbiAgICB9IGVsc2UgaWYoTGl2ZVVwbG9hZGVyLmlucHV0c0F3YWl0aW5nUHJlZmxpZ2h0KGZvcm1FbCkubGVuZ3RoID4gMCl7XG4gICAgICBsZXQgW3JlZiwgZWxzXSA9IHJlZkdlbmVyYXRvcigpXG4gICAgICBsZXQgcHJveHlSZWZHZW4gPSAoKSA9PiBbcmVmLCBlbHMsIG9wdHNdXG4gICAgICB0aGlzLnVwbG9hZEZpbGVzKGZvcm1FbCwgdGFyZ2V0Q3R4LCByZWYsIGNpZCwgKF91cGxvYWRzKSA9PiB7XG4gICAgICAgIGxldCBtZXRhID0gdGhpcy5leHRyYWN0TWV0YShmb3JtRWwpXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHNlcmlhbGl6ZUZvcm0oZm9ybUVsLCB7c3VibWl0dGVyLCAuLi5tZXRhfSlcbiAgICAgICAgdGhpcy5wdXNoV2l0aFJlcGx5KHByb3h5UmVmR2VuLCBcImV2ZW50XCIsIHtcbiAgICAgICAgICB0eXBlOiBcImZvcm1cIixcbiAgICAgICAgICBldmVudDogcGh4RXZlbnQsXG4gICAgICAgICAgdmFsdWU6IGZvcm1EYXRhLFxuICAgICAgICAgIGNpZDogY2lkXG4gICAgICAgIH0sIG9uUmVwbHkpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZighKGZvcm1FbC5oYXNBdHRyaWJ1dGUoUEhYX1JFRikgJiYgZm9ybUVsLmNsYXNzTGlzdC5jb250YWlucyhcInBoeC1zdWJtaXQtbG9hZGluZ1wiKSkpe1xuICAgICAgbGV0IG1ldGEgPSB0aGlzLmV4dHJhY3RNZXRhKGZvcm1FbClcbiAgICAgIGxldCBmb3JtRGF0YSA9IHNlcmlhbGl6ZUZvcm0oZm9ybUVsLCB7c3VibWl0dGVyLCAuLi5tZXRhfSlcbiAgICAgIHRoaXMucHVzaFdpdGhSZXBseShyZWZHZW5lcmF0b3IsIFwiZXZlbnRcIiwge1xuICAgICAgICB0eXBlOiBcImZvcm1cIixcbiAgICAgICAgZXZlbnQ6IHBoeEV2ZW50LFxuICAgICAgICB2YWx1ZTogZm9ybURhdGEsXG4gICAgICAgIGNpZDogY2lkXG4gICAgICB9LCBvblJlcGx5KVxuICAgIH1cbiAgfVxuXG4gIHVwbG9hZEZpbGVzKGZvcm1FbCwgdGFyZ2V0Q3R4LCByZWYsIGNpZCwgb25Db21wbGV0ZSl7XG4gICAgbGV0IGpvaW5Db3VudEF0VXBsb2FkID0gdGhpcy5qb2luQ291bnRcbiAgICBsZXQgaW5wdXRFbHMgPSBMaXZlVXBsb2FkZXIuYWN0aXZlRmlsZUlucHV0cyhmb3JtRWwpXG4gICAgbGV0IG51bUZpbGVJbnB1dHNJblByb2dyZXNzID0gaW5wdXRFbHMubGVuZ3RoXG5cbiAgICAvLyBnZXQgZWFjaCBmaWxlIGlucHV0XG4gICAgaW5wdXRFbHMuZm9yRWFjaChpbnB1dEVsID0+IHtcbiAgICAgIGxldCB1cGxvYWRlciA9IG5ldyBMaXZlVXBsb2FkZXIoaW5wdXRFbCwgdGhpcywgKCkgPT4ge1xuICAgICAgICBudW1GaWxlSW5wdXRzSW5Qcm9ncmVzcy0tXG4gICAgICAgIGlmKG51bUZpbGVJbnB1dHNJblByb2dyZXNzID09PSAwKXsgb25Db21wbGV0ZSgpIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwbG9hZGVyc1tpbnB1dEVsXSA9IHVwbG9hZGVyXG4gICAgICBsZXQgZW50cmllcyA9IHVwbG9hZGVyLmVudHJpZXMoKS5tYXAoZW50cnkgPT4gZW50cnkudG9QcmVmbGlnaHRQYXlsb2FkKCkpXG5cbiAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICByZWY6IGlucHV0RWwuZ2V0QXR0cmlidXRlKFBIWF9VUExPQURfUkVGKSxcbiAgICAgICAgZW50cmllczogZW50cmllcyxcbiAgICAgICAgY2lkOiB0aGlzLnRhcmdldENvbXBvbmVudElEKGlucHV0RWwuZm9ybSwgdGFyZ2V0Q3R4KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmxvZyhcInVwbG9hZFwiLCAoKSA9PiBbXCJzZW5kaW5nIHByZWZsaWdodCByZXF1ZXN0XCIsIHBheWxvYWRdKVxuXG4gICAgICB0aGlzLnB1c2hXaXRoUmVwbHkobnVsbCwgXCJhbGxvd191cGxvYWRcIiwgcGF5bG9hZCwgcmVzcCA9PiB7XG4gICAgICAgIHRoaXMubG9nKFwidXBsb2FkXCIsICgpID0+IFtcImdvdCBwcmVmbGlnaHQgcmVzcG9uc2VcIiwgcmVzcF0pXG4gICAgICAgIGlmKHJlc3AuZXJyb3Ipe1xuICAgICAgICAgIHRoaXMudW5kb1JlZnMocmVmKVxuICAgICAgICAgIGxldCBbZW50cnlfcmVmLCByZWFzb25dID0gcmVzcC5lcnJvclxuICAgICAgICAgIHRoaXMubG9nKFwidXBsb2FkXCIsICgpID0+IFtgZXJyb3IgZm9yIGVudHJ5ICR7ZW50cnlfcmVmfWAsIHJlYXNvbl0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG9uRXJyb3IgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbC5vbkVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYodGhpcy5qb2luQ291bnQgPT09IGpvaW5Db3VudEF0VXBsb2FkKXsgY2FsbGJhY2soKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGxvYWRlci5pbml0QWRhcHRlclVwbG9hZChyZXNwLCBvbkVycm9yLCB0aGlzLmxpdmVTb2NrZXQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRpc3BhdGNoVXBsb2FkcyhuYW1lLCBmaWxlc09yQmxvYnMpe1xuICAgIGxldCBpbnB1dHMgPSBET00uZmluZFVwbG9hZElucHV0cyh0aGlzLmVsKS5maWx0ZXIoZWwgPT4gZWwubmFtZSA9PT0gbmFtZSlcbiAgICBpZihpbnB1dHMubGVuZ3RoID09PSAwKXsgbG9nRXJyb3IoYG5vIGxpdmUgZmlsZSBpbnB1dHMgZm91bmQgbWF0Y2hpbmcgdGhlIG5hbWUgXCIke25hbWV9XCJgKSB9XG4gICAgZWxzZSBpZihpbnB1dHMubGVuZ3RoID4gMSl7IGxvZ0Vycm9yKGBkdXBsaWNhdGUgbGl2ZSBmaWxlIGlucHV0cyBmb3VuZCBtYXRjaGluZyB0aGUgbmFtZSBcIiR7bmFtZX1cImApIH1cbiAgICBlbHNlIHsgRE9NLmRpc3BhdGNoRXZlbnQoaW5wdXRzWzBdLCBQSFhfVFJBQ0tfVVBMT0FEUywge2RldGFpbDoge2ZpbGVzOiBmaWxlc09yQmxvYnN9fSkgfVxuICB9XG5cbiAgcHVzaEZvcm1SZWNvdmVyeShmb3JtLCBuZXdDaWQsIGNhbGxiYWNrKXtcbiAgICB0aGlzLmxpdmVTb2NrZXQud2l0aGluT3duZXJzKGZvcm0sICh2aWV3LCB0YXJnZXRDdHgpID0+IHtcbiAgICAgIGxldCBwaHhDaGFuZ2UgPSB0aGlzLmJpbmRpbmcoXCJjaGFuZ2VcIilcbiAgICAgIGxldCBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpLmZpbHRlcihlbCA9PiBET00uaXNGb3JtSW5wdXQoZWwpICYmIGVsLm5hbWUgJiYgIWVsLmhhc0F0dHJpYnV0ZShwaHhDaGFuZ2UpKVxuICAgICAgaWYoaW5wdXRzLmxlbmd0aCA9PT0gMCl7IHJldHVybiB9XG5cbiAgICAgIGxldCBpbnB1dCA9IGlucHV0cy5maW5kKGVsID0+IGVsLnR5cGUgIT09IFwiaGlkZGVuXCIpIHx8IGlucHV0WzBdXG4gICAgICBsZXQgcGh4RXZlbnQgPSBmb3JtLmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoUEhYX0FVVE9fUkVDT1ZFUikpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKHRoaXMuYmluZGluZyhcImNoYW5nZVwiKSlcbiAgICAgIEpTLmV4ZWMoXCJjaGFuZ2VcIiwgcGh4RXZlbnQsIHZpZXcsIGlucHV0LCBbXCJwdXNoXCIsIHtfdGFyZ2V0OiBpbnB1dC5uYW1lLCBuZXdDaWQ6IG5ld0NpZCwgY2FsbGJhY2s6IGNhbGxiYWNrfV0pXG4gICAgfSlcbiAgfVxuXG4gIHB1c2hMaW5rUGF0Y2goaHJlZiwgdGFyZ2V0RWwsIGNhbGxiYWNrKXtcbiAgICBsZXQgbGlua1JlZiA9IHRoaXMubGl2ZVNvY2tldC5zZXRQZW5kaW5nTGluayhocmVmKVxuICAgIGxldCByZWZHZW4gPSB0YXJnZXRFbCA/ICgpID0+IHRoaXMucHV0UmVmKFt0YXJnZXRFbF0sIFwiY2xpY2tcIikgOiBudWxsXG4gICAgbGV0IGZhbGxiYWNrID0gKCkgPT4gdGhpcy5saXZlU29ja2V0LnJlZGlyZWN0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGxldCB1cmwgPSBocmVmLnN0YXJ0c1dpdGgoXCIvXCIpID8gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9JHtocmVmfWAgOiBocmVmXG5cbiAgICBsZXQgcHVzaCA9IHRoaXMucHVzaFdpdGhSZXBseShyZWZHZW4sIFwibGl2ZV9wYXRjaFwiLCB7dXJsfSwgcmVzcCA9PiB7XG4gICAgICB0aGlzLmxpdmVTb2NrZXQucmVxdWVzdERPTVVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIGlmKHJlc3AubGlua19yZWRpcmVjdCl7XG4gICAgICAgICAgdGhpcy5saXZlU29ja2V0LnJlcGxhY2VNYWluKGhyZWYsIG51bGwsIGNhbGxiYWNrLCBsaW5rUmVmKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmKHRoaXMubGl2ZVNvY2tldC5jb21taXRQZW5kaW5nTGluayhsaW5rUmVmKSl7XG4gICAgICAgICAgICB0aGlzLmhyZWYgPSBocmVmXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYXBwbHlQZW5kaW5nVXBkYXRlcygpXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobGlua1JlZilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgaWYocHVzaCl7XG4gICAgICBwdXNoLnJlY2VpdmUoXCJ0aW1lb3V0XCIsIGZhbGxiYWNrKVxuICAgIH0gZWxzZSB7XG4gICAgICBmYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgZm9ybXNGb3JSZWNvdmVyeShodG1sKXtcbiAgICBpZih0aGlzLmpvaW5Db3VudCA9PT0gMCl7IHJldHVybiBbXSB9XG5cbiAgICBsZXQgcGh4Q2hhbmdlID0gdGhpcy5iaW5kaW5nKFwiY2hhbmdlXCIpXG4gICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIERPTS5hbGwodGhpcy5lbCwgYGZvcm1bJHtwaHhDaGFuZ2V9XWApXG4gICAgICAgIC5maWx0ZXIoZm9ybSA9PiBmb3JtLmlkICYmIHRoaXMub3duc0VsZW1lbnQoZm9ybSkpXG4gICAgICAgIC5maWx0ZXIoZm9ybSA9PiBmb3JtLmVsZW1lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgIC5maWx0ZXIoZm9ybSA9PiBmb3JtLmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoUEhYX0FVVE9fUkVDT1ZFUikpICE9PSBcImlnbm9yZVwiKVxuICAgICAgICAubWFwKGZvcm0gPT4ge1xuICAgICAgICAgIGxldCBuZXdGb3JtID0gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKGBmb3JtW2lkPVwiJHtmb3JtLmlkfVwiXVske3BoeENoYW5nZX09XCIke2Zvcm0uZ2V0QXR0cmlidXRlKHBoeENoYW5nZSl9XCJdYClcbiAgICAgICAgICBpZihuZXdGb3JtKXtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybSwgbmV3Rm9ybSwgdGhpcy50YXJnZXRDb21wb25lbnRJRChuZXdGb3JtKV1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtmb3JtLCBmb3JtLCB0aGlzLnRhcmdldENvbXBvbmVudElEKGZvcm0pXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoW2Zvcm0sIG5ld0Zvcm0sIG5ld0NpZF0pID0+IG5ld0Zvcm0pXG4gICAgKVxuICB9XG5cbiAgbWF5YmVQdXNoQ29tcG9uZW50c0Rlc3Ryb3llZChkZXN0cm95ZWRDSURzKXtcbiAgICBsZXQgd2lsbERlc3Ryb3lDSURzID0gZGVzdHJveWVkQ0lEcy5maWx0ZXIoY2lkID0+IHtcbiAgICAgIHJldHVybiBET00uZmluZENvbXBvbmVudE5vZGVMaXN0KHRoaXMuZWwsIGNpZCkubGVuZ3RoID09PSAwXG4gICAgfSlcbiAgICBpZih3aWxsRGVzdHJveUNJRHMubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLnBydW5pbmdDSURzLnB1c2goLi4ud2lsbERlc3Ryb3lDSURzKVxuXG4gICAgICB0aGlzLnB1c2hXaXRoUmVwbHkobnVsbCwgXCJjaWRzX3dpbGxfZGVzdHJveVwiLCB7Y2lkczogd2lsbERlc3Ryb3lDSURzfSwgKCkgPT4ge1xuICAgICAgICAvLyBUaGUgY2lkcyBhcmUgZWl0aGVyIGJhY2sgb24gdGhlIHBhZ2Ugb3IgdGhleSB3aWxsIGJlIGZ1bGx5IHJlbW92ZWQsXG4gICAgICAgIC8vIHNvIHdlIGNhbiByZW1vdmUgdGhlbSBmcm9tIHRoZSBwcnVuaW5nQ0lEcy5cbiAgICAgICAgdGhpcy5wcnVuaW5nQ0lEcyA9IHRoaXMucHJ1bmluZ0NJRHMuZmlsdGVyKGNpZCA9PiB3aWxsRGVzdHJveUNJRHMuaW5kZXhPZihjaWQpICE9PSAtMSlcblxuICAgICAgICAvLyBTZWUgaWYgYW55IG9mIHRoZSBjaWRzIHdlIHdhbnRlZCB0byBkZXN0cm95IHdlcmUgYWRkZWQgYmFjayxcbiAgICAgICAgLy8gaWYgdGhleSB3ZXJlIGFkZGVkIGJhY2ssIHdlIGRvbid0IGFjdHVhbGx5IGRlc3Ryb3kgdGhlbS5cbiAgICAgICAgbGV0IGNvbXBsZXRlbHlEZXN0cm95Q0lEcyA9IHdpbGxEZXN0cm95Q0lEcy5maWx0ZXIoY2lkID0+IHtcbiAgICAgICAgICByZXR1cm4gRE9NLmZpbmRDb21wb25lbnROb2RlTGlzdCh0aGlzLmVsLCBjaWQpLmxlbmd0aCA9PT0gMFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKGNvbXBsZXRlbHlEZXN0cm95Q0lEcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnB1c2hXaXRoUmVwbHkobnVsbCwgXCJjaWRzX2Rlc3Ryb3llZFwiLCB7Y2lkczogY29tcGxldGVseURlc3Ryb3lDSURzfSwgKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWQucHJ1bmVDSURzKHJlc3AuY2lkcylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG93bnNFbGVtZW50KGVsKXtcbiAgICBsZXQgcGFyZW50Vmlld0VsID0gZWwuY2xvc2VzdChQSFhfVklFV19TRUxFQ1RPUilcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFBIWF9QQVJFTlRfSUQpID09PSB0aGlzLmlkIHx8XG4gICAgICAocGFyZW50Vmlld0VsICYmIHBhcmVudFZpZXdFbC5pZCA9PT0gdGhpcy5pZCkgfHxcbiAgICAgICghcGFyZW50Vmlld0VsICYmIHRoaXMuaXNEZWFkKVxuICB9XG5cbiAgc3VibWl0Rm9ybShmb3JtLCB0YXJnZXRDdHgsIHBoeEV2ZW50LCBzdWJtaXR0ZXIsIG9wdHMgPSB7fSl7XG4gICAgRE9NLnB1dFByaXZhdGUoZm9ybSwgUEhYX0hBU19TVUJNSVRURUQsIHRydWUpXG4gICAgbGV0IHBoeEZlZWRiYWNrID0gdGhpcy5saXZlU29ja2V0LmJpbmRpbmcoUEhYX0ZFRURCQUNLX0ZPUilcbiAgICBsZXQgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKVxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IERPTS5wdXRQcml2YXRlKGlucHV0LCBQSFhfSEFTX1NVQk1JVFRFRCwgdHJ1ZSkpXG4gICAgdGhpcy5saXZlU29ja2V0LmJsdXJBY3RpdmVFbGVtZW50KHRoaXMpXG4gICAgdGhpcy5wdXNoRm9ybVN1Ym1pdChmb3JtLCB0YXJnZXRDdHgsIHBoeEV2ZW50LCBzdWJtaXR0ZXIsIG9wdHMsICgpID0+IHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IERPTS5zaG93RXJyb3IoaW5wdXQsIHBoeEZlZWRiYWNrKSlcbiAgICAgIHRoaXMubGl2ZVNvY2tldC5yZXN0b3JlUHJldmlvdXNseUFjdGl2ZUZvY3VzKClcbiAgICB9KVxuICB9XG5cbiAgYmluZGluZyhraW5kKXsgcmV0dXJuIHRoaXMubGl2ZVNvY2tldC5iaW5kaW5nKGtpbmQpIH1cbn1cbiIsICIvKiogSW5pdGlhbGl6ZXMgdGhlIExpdmVTb2NrZXRcbiAqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVuZFBvaW50IC0gVGhlIHN0cmluZyBXZWJTb2NrZXQgZW5kcG9pbnQsIGllLCBgXCJ3c3M6Ly9leGFtcGxlLmNvbS9saXZlXCJgLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcIi9saXZlXCJgIChpbmhlcml0ZWQgaG9zdCAmIHByb3RvY29sKVxuICogQHBhcmFtIHtQaG9lbml4LlNvY2tldH0gc29ja2V0IC0gdGhlIHJlcXVpcmVkIFBob2VuaXggU29ja2V0IGNsYXNzIGltcG9ydGVkIGZyb20gXCJwaG9lbml4XCIuIEZvciBleGFtcGxlOlxuICpcbiAqICAgICBpbXBvcnQge1NvY2tldH0gZnJvbSBcInBob2VuaXhcIlxuICogICAgIGltcG9ydCB7TGl2ZVNvY2tldH0gZnJvbSBcInBob2VuaXhfbGl2ZV92aWV3XCJcbiAqICAgICBsZXQgbGl2ZVNvY2tldCA9IG5ldyBMaXZlU29ja2V0KFwiL2xpdmVcIiwgU29ja2V0LCB7Li4ufSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvbi4gT3V0c2lkZSBvZiBrZXlzIGxpc3RlZCBiZWxvdywgYWxsXG4gKiBjb25maWd1cmF0aW9uIGlzIHBhc3NlZCBkaXJlY3RseSB0byB0aGUgUGhvZW5peCBTb2NrZXQgY29uc3RydWN0b3IuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHMuZGVmYXVsdHNdIC0gVGhlIG9wdGlvbmFsIGRlZmF1bHRzIHRvIHVzZSBmb3IgdmFyaW91cyBiaW5kaW5ncyxcbiAqIHN1Y2ggYXMgYHBoeC1kZWJvdW5jZWAuIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmcga2V5czpcbiAqXG4gKiAgIC0gZGVib3VuY2UgLSB0aGUgbWlsbGlzZWNvbmQgcGh4LWRlYm91bmNlIHRpbWUuIERlZmF1bHRzIDMwMFxuICogICAtIHRocm90dGxlIC0gdGhlIG1pbGxpc2Vjb25kIHBoeC10aHJvdHRsZSB0aW1lLiBEZWZhdWx0cyAzMDBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5wYXJhbXNdIC0gVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIGZvciBwYXNzaW5nIGNvbm5lY3QgcGFyYW1zLlxuICogVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIExpdmVWaWV3LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgKGVsKSA9PiB7dmlldzogZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1teS12aWV3LW5hbWVcIiwgdG9rZW46IHdpbmRvdy5teVRva2VufVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5iaW5kaW5nUHJlZml4XSAtIFRoZSBvcHRpb25hbCBwcmVmaXggdG8gdXNlIGZvciBhbGwgcGh4IERPTSBhbm5vdGF0aW9ucy5cbiAqIERlZmF1bHRzIHRvIFwicGh4LVwiLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmhvb2tzXSAtIFRoZSBvcHRpb25hbCBvYmplY3QgZm9yIHJlZmVyZW5jaW5nIExpdmVWaWV3IGhvb2sgY2FsbGJhY2tzLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLnVwbG9hZGVyc10gLSBUaGUgb3B0aW9uYWwgb2JqZWN0IGZvciByZWZlcmVuY2luZyBMaXZlVmlldyB1cGxvYWRlciBjYWxsYmFja3MuXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtvcHRzLmxvYWRlclRpbWVvdXRdIC0gVGhlIG9wdGlvbmFsIGRlbGF5IGluIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBhcHBseVxuICogbG9hZGluZyBzdGF0ZXMuXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtvcHRzLm1heFJlbG9hZHNdIC0gVGhlIG1heGltdW0gcmVsb2FkcyBiZWZvcmUgZW50ZXJpbmcgZmFpbHNhZmUgbW9kZS5cbiAqIEBwYXJhbSB7aW50ZWdlcn0gW29wdHMucmVsb2FkSml0dGVyTWluXSAtIFRoZSBtaW5pbXVtIHRpbWUgYmV0d2VlbiBub3JtYWwgcmVsb2FkIGF0dGVtcHRzLlxuICogQHBhcmFtIHtpbnRlZ2VyfSBbb3B0cy5yZWxvYWRKaXR0ZXJNYXhdIC0gVGhlIG1heGltdW0gdGltZSBiZXR3ZWVuIG5vcm1hbCByZWxvYWQgYXR0ZW1wdHMuXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtvcHRzLmZhaWxzYWZlSml0dGVyXSAtIFRoZSB0aW1lIGJldHdlZW4gcmVsb2FkIGF0dGVtcHRzIGluIGZhaWxzYWZlIG1vZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy52aWV3TG9nZ2VyXSAtIFRoZSBvcHRpb25hbCBmdW5jdGlvbiB0byBsb2cgZGVidWcgaW5mb3JtYXRpb24uIEZvciBleGFtcGxlOlxuICpcbiAqICAgICAodmlldywga2luZCwgbXNnLCBvYmopID0+IGNvbnNvbGUubG9nKGAke3ZpZXcuaWR9ICR7a2luZH06ICR7bXNnfSAtIGAsIG9iailcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHMubWV0YWRhdGFdIC0gVGhlIG9wdGlvbmFsIG9iamVjdCBtYXBwaW5nIGV2ZW50IG5hbWVzIHRvIGZ1bmN0aW9ucyBmb3JcbiAqIHBvcHVsYXRpbmcgZXZlbnQgbWV0YWRhdGEuIEZvciBleGFtcGxlOlxuICpcbiAqICAgICBtZXRhZGF0YToge1xuICogICAgICAgY2xpY2s6IChlLCBlbCkgPT4ge1xuICogICAgICAgICByZXR1cm4ge1xuICogICAgICAgICAgIGN0cmxLZXk6IGUuY3RybEtleSxcbiAqICAgICAgICAgICBtZXRhS2V5OiBlLm1ldGFLZXksXG4gKiAgICAgICAgICAgZGV0YWlsOiBlLmRldGFpbCB8fCAxLFxuICogICAgICAgICB9XG4gKiAgICAgICB9LFxuICogICAgICAga2V5ZG93bjogKGUsIGVsKSA9PiB7XG4gKiAgICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgICAga2V5OiBlLmtleSxcbiAqICAgICAgICAgICBjdHJsS2V5OiBlLmN0cmxLZXksXG4gKiAgICAgICAgICAgbWV0YUtleTogZS5tZXRhS2V5LFxuICogICAgICAgICAgIHNoaWZ0S2V5OiBlLnNoaWZ0S2V5XG4gKiAgICAgICAgIH1cbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHMuc2Vzc2lvblN0b3JhZ2VdIC0gQW4gb3B0aW9uYWwgU3RvcmFnZSBjb21wYXRpYmxlIG9iamVjdFxuICogVXNlZnVsIHdoZW4gTGl2ZVZpZXcgd29uJ3QgaGF2ZSBhY2Nlc3MgdG8gYHNlc3Npb25TdG9yYWdlYC4gIEZvciBleGFtcGxlLCBUaGlzIGNvdWxkXG4gKiBoYXBwZW4gaWYgYSBzaXRlIGxvYWRzIGEgY3Jvc3MtZG9tYWluIExpdmVWaWV3IGluIGFuIGlmcmFtZS4gIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogICAgIGNsYXNzIEluTWVtb3J5U3RvcmFnZSB7XG4gKiAgICAgICBjb25zdHJ1Y3RvcigpIHsgdGhpcy5zdG9yYWdlID0ge30gfVxuICogICAgICAgZ2V0SXRlbShrZXlOYW1lKSB7IHJldHVybiB0aGlzLnN0b3JhZ2Vba2V5TmFtZV0gfHwgbnVsbCB9XG4gKiAgICAgICByZW1vdmVJdGVtKGtleU5hbWUpIHsgZGVsZXRlIHRoaXMuc3RvcmFnZVtrZXlOYW1lXSB9XG4gKiAgICAgICBzZXRJdGVtKGtleU5hbWUsIGtleVZhbHVlKSB7IHRoaXMuc3RvcmFnZVtrZXlOYW1lXSA9IGtleVZhbHVlIH1cbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmxvY2FsU3RvcmFnZV0gLSBBbiBvcHRpb25hbCBTdG9yYWdlIGNvbXBhdGlibGUgb2JqZWN0XG4gKiBVc2VmdWwgZm9yIHdoZW4gTGl2ZVZpZXcgd29uJ3QgaGF2ZSBhY2Nlc3MgdG8gYGxvY2FsU3RvcmFnZWAuXG4gKiBTZWUgYG9wdHMuc2Vzc2lvblN0b3JhZ2VgIGZvciBleGFtcGxlcy5cbiovXG5cbmltcG9ydCB7XG4gIEJJTkRJTkdfUFJFRklYLFxuICBDT05TRUNVVElWRV9SRUxPQURTLFxuICBERUZBVUxUUyxcbiAgRkFJTFNBRkVfSklUVEVSLFxuICBMT0FERVJfVElNRU9VVCxcbiAgTUFYX1JFTE9BRFMsXG4gIFBIWF9ERUJPVU5DRSxcbiAgUEhYX0RST1BfVEFSR0VULFxuICBQSFhfSEFTX0ZPQ1VTRUQsXG4gIFBIWF9LRVksXG4gIFBIWF9MSU5LX1NUQVRFLFxuICBQSFhfTElWRV9MSU5LLFxuICBQSFhfTFZfREVCVUcsXG4gIFBIWF9MVl9MQVRFTkNZX1NJTSxcbiAgUEhYX0xWX1BST0ZJTEUsXG4gIFBIWF9NQUlOLFxuICBQSFhfUEFSRU5UX0lELFxuICBQSFhfVklFV19TRUxFQ1RPUixcbiAgUEhYX1JPT1RfSUQsXG4gIFBIWF9USFJPVFRMRSxcbiAgUEhYX1RSQUNLX1VQTE9BRFMsXG4gIFBIWF9TRVNTSU9OLFxuICBQSFhfRkVFREJBQ0tfRk9SLFxuICBSRUxPQURfSklUVEVSX01JTixcbiAgUkVMT0FEX0pJVFRFUl9NQVgsXG4gIFBIWF9SRUYsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCB7XG4gIGNsb25lLFxuICBjbG9zZXN0UGh4QmluZGluZyxcbiAgY2xvc3VyZSxcbiAgZGVidWcsXG4gIGlzT2JqZWN0LFxuICBtYXliZVxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCBCcm93c2VyIGZyb20gXCIuL2Jyb3dzZXJcIlxuaW1wb3J0IERPTSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IEhvb2tzIGZyb20gXCIuL2hvb2tzXCJcbmltcG9ydCBMaXZlVXBsb2FkZXIgZnJvbSBcIi4vbGl2ZV91cGxvYWRlclwiXG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCBKUyBmcm9tIFwiLi9qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVTb2NrZXQge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHBoeFNvY2tldCwgb3B0cyA9IHt9KXtcbiAgICB0aGlzLnVubG9hZGVkID0gZmFsc2VcbiAgICBpZighcGh4U29ja2V0IHx8IHBoeFNvY2tldC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBhIHBob2VuaXggU29ja2V0IG11c3QgYmUgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byB0aGUgTGl2ZVNvY2tldCBjb25zdHJ1Y3Rvci4gRm9yIGV4YW1wbGU6XG5cbiAgICAgICAgICBpbXBvcnQge1NvY2tldH0gZnJvbSBcInBob2VuaXhcIlxuICAgICAgICAgIGltcG9ydCB7TGl2ZVNvY2tldH0gZnJvbSBcInBob2VuaXhfbGl2ZV92aWV3XCJcbiAgICAgICAgICBsZXQgbGl2ZVNvY2tldCA9IG5ldyBMaXZlU29ja2V0KFwiL2xpdmVcIiwgU29ja2V0LCB7Li4ufSlcbiAgICAgIGApXG4gICAgfVxuICAgIHRoaXMuc29ja2V0ID0gbmV3IHBoeFNvY2tldCh1cmwsIG9wdHMpXG4gICAgdGhpcy5iaW5kaW5nUHJlZml4ID0gb3B0cy5iaW5kaW5nUHJlZml4IHx8IEJJTkRJTkdfUFJFRklYXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShvcHRzLnBhcmFtcyB8fCB7fSlcbiAgICB0aGlzLnZpZXdMb2dnZXIgPSBvcHRzLnZpZXdMb2dnZXJcbiAgICB0aGlzLm1ldGFkYXRhQ2FsbGJhY2tzID0gb3B0cy5tZXRhZGF0YSB8fCB7fVxuICAgIHRoaXMuZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKGNsb25lKERFRkFVTFRTKSwgb3B0cy5kZWZhdWx0cyB8fCB7fSlcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5wcmV2QWN0aXZlID0gbnVsbFxuICAgIHRoaXMuc2lsZW5jZWQgPSBmYWxzZVxuICAgIHRoaXMubWFpbiA9IG51bGxcbiAgICB0aGlzLm91dGdvaW5nTWFpbkVsID0gbnVsbFxuICAgIHRoaXMuY2xpY2tTdGFydGVkQXRUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5saW5rUmVmID0gMVxuICAgIHRoaXMucm9vdHMgPSB7fVxuICAgIHRoaXMuaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgdGhpcy5wZW5kaW5nTGluayA9IG51bGxcbiAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGNsb25lKHdpbmRvdy5sb2NhdGlvbilcbiAgICB0aGlzLmhvb2tzID0gb3B0cy5ob29rcyB8fCB7fVxuICAgIHRoaXMudXBsb2FkZXJzID0gb3B0cy51cGxvYWRlcnMgfHwge31cbiAgICB0aGlzLmxvYWRlclRpbWVvdXQgPSBvcHRzLmxvYWRlclRpbWVvdXQgfHwgTE9BREVSX1RJTUVPVVRcbiAgICB0aGlzLnJlbG9hZFdpdGhKaXR0ZXJUaW1lciA9IG51bGxcbiAgICB0aGlzLm1heFJlbG9hZHMgPSBvcHRzLm1heFJlbG9hZHMgfHwgTUFYX1JFTE9BRFNcbiAgICB0aGlzLnJlbG9hZEppdHRlck1pbiA9IG9wdHMucmVsb2FkSml0dGVyTWluIHx8IFJFTE9BRF9KSVRURVJfTUlOXG4gICAgdGhpcy5yZWxvYWRKaXR0ZXJNYXggPSBvcHRzLnJlbG9hZEppdHRlck1heCB8fCBSRUxPQURfSklUVEVSX01BWFxuICAgIHRoaXMuZmFpbHNhZmVKaXR0ZXIgPSBvcHRzLmZhaWxzYWZlSml0dGVyIHx8IEZBSUxTQUZFX0pJVFRFUlxuICAgIHRoaXMubG9jYWxTdG9yYWdlID0gb3B0cy5sb2NhbFN0b3JhZ2UgfHwgd2luZG93LmxvY2FsU3RvcmFnZVxuICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgPSBvcHRzLnNlc3Npb25TdG9yYWdlIHx8IHdpbmRvdy5zZXNzaW9uU3RvcmFnZVxuICAgIHRoaXMuYm91bmRUb3BMZXZlbEV2ZW50cyA9IGZhbHNlXG4gICAgdGhpcy5kb21DYWxsYmFja3MgPSBPYmplY3QuYXNzaWduKHtvbk5vZGVBZGRlZDogY2xvc3VyZSgpLCBvbkJlZm9yZUVsVXBkYXRlZDogY2xvc3VyZSgpfSwgb3B0cy5kb20gfHwge30pXG4gICAgdGhpcy50cmFuc2l0aW9ucyA9IG5ldyBUcmFuc2l0aW9uU2V0KClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIF9lID0+IHtcbiAgICAgIHRoaXMudW5sb2FkZWQgPSB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnNvY2tldC5vbk9wZW4oKCkgPT4ge1xuICAgICAgaWYodGhpcy5pc1VubG9hZGVkKCkpe1xuICAgICAgICAvLyByZWxvYWQgcGFnZSBpZiBiZWluZyByZXN0b3JlZCBmcm9tIGJhY2svZm9yd2FyZCBjYWNoZSBhbmQgYnJvd3NlciBkb2VzIG5vdCBlbWl0IFwicGFnZXNob3dcIlxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gcHVibGljXG5cbiAgaXNQcm9maWxlRW5hYmxlZCgpeyByZXR1cm4gdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFBIWF9MVl9QUk9GSUxFKSA9PT0gXCJ0cnVlXCIgfVxuXG4gIGlzRGVidWdFbmFibGVkKCl7IHJldHVybiB0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUEhYX0xWX0RFQlVHKSA9PT0gXCJ0cnVlXCIgfVxuXG4gIGlzRGVidWdEaXNhYmxlZCgpeyByZXR1cm4gdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFBIWF9MVl9ERUJVRykgPT09IFwiZmFsc2VcIiB9XG5cbiAgZW5hYmxlRGVidWcoKXsgdGhpcy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFBIWF9MVl9ERUJVRywgXCJ0cnVlXCIpIH1cblxuICBlbmFibGVQcm9maWxpbmcoKXsgdGhpcy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFBIWF9MVl9QUk9GSUxFLCBcInRydWVcIikgfVxuXG4gIGRpc2FibGVEZWJ1ZygpeyB0aGlzLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oUEhYX0xWX0RFQlVHLCBcImZhbHNlXCIpIH1cblxuICBkaXNhYmxlUHJvZmlsaW5nKCl7IHRoaXMuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShQSFhfTFZfUFJPRklMRSkgfVxuXG4gIGVuYWJsZUxhdGVuY3lTaW0odXBwZXJCb3VuZE1zKXtcbiAgICB0aGlzLmVuYWJsZURlYnVnKClcbiAgICBjb25zb2xlLmxvZyhcImxhdGVuY3kgc2ltdWxhdG9yIGVuYWJsZWQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGlzIGJyb3dzZXIgc2Vzc2lvbi4gQ2FsbCBkaXNhYmxlTGF0ZW5jeVNpbSgpIHRvIGRpc2FibGVcIilcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oUEhYX0xWX0xBVEVOQ1lfU0lNLCB1cHBlckJvdW5kTXMpXG4gIH1cblxuICBkaXNhYmxlTGF0ZW5jeVNpbSgpeyB0aGlzLnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oUEhYX0xWX0xBVEVOQ1lfU0lNKSB9XG5cbiAgZ2V0TGF0ZW5jeVNpbSgpe1xuICAgIGxldCBzdHIgPSB0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUEhYX0xWX0xBVEVOQ1lfU0lNKVxuICAgIHJldHVybiBzdHIgPyBwYXJzZUludChzdHIpIDogbnVsbFxuICB9XG5cbiAgZ2V0U29ja2V0KCl7IHJldHVybiB0aGlzLnNvY2tldCB9XG5cbiAgY29ubmVjdCgpe1xuICAgIC8vIGVuYWJsZSBkZWJ1ZyBieSBkZWZhdWx0IGlmIG9uIGxvY2FsaG9zdCBhbmQgbm90IGV4cGxpY2l0bHkgZGlzYWJsZWRcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCIgJiYgIXRoaXMuaXNEZWJ1Z0Rpc2FibGVkKCkpeyB0aGlzLmVuYWJsZURlYnVnKCkgfVxuICAgIGxldCBkb0Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLmpvaW5Sb290Vmlld3MoKSl7XG4gICAgICAgIHRoaXMuYmluZFRvcExldmVsRXZlbnRzKClcbiAgICAgICAgdGhpcy5zb2NrZXQuY29ubmVjdCgpXG4gICAgICB9IGVsc2UgaWYodGhpcy5tYWluKXtcbiAgICAgICAgdGhpcy5zb2NrZXQuY29ubmVjdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJpbmRUb3BMZXZlbEV2ZW50cyh7ZGVhZDogdHJ1ZX0pXG4gICAgICB9XG4gICAgICB0aGlzLmpvaW5EZWFkVmlldygpXG4gICAgfVxuICAgIGlmKFtcImNvbXBsZXRlXCIsIFwibG9hZGVkXCIsIFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKSA+PSAwKXtcbiAgICAgIGRvQ29ubmVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IGRvQ29ubmVjdCgpKVxuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3QoY2FsbGJhY2spe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlbG9hZFdpdGhKaXR0ZXJUaW1lcilcbiAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KGNhbGxiYWNrKVxuICB9XG5cbiAgcmVwbGFjZVRyYW5zcG9ydCh0cmFuc3BvcnQpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlbG9hZFdpdGhKaXR0ZXJUaW1lcilcbiAgICB0aGlzLnNvY2tldC5yZXBsYWNlVHJhbnNwb3J0KHRyYW5zcG9ydClcbiAgICB0aGlzLmNvbm5lY3QoKVxuICB9XG5cbiAgZXhlY0pTKGVsLCBlbmNvZGVkSlMsIGV2ZW50VHlwZSA9IG51bGwpe1xuICAgIHRoaXMub3duZXIoZWwsIHZpZXcgPT4gSlMuZXhlYyhldmVudFR5cGUsIGVuY29kZWRKUywgdmlldywgZWwpKVxuICB9XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGV4ZWNKU0hvb2tQdXNoKGVsLCBwaHhFdmVudCwgZGF0YSwgY2FsbGJhY2spe1xuICAgIHRoaXMud2l0aGluT3duZXJzKGVsLCB2aWV3ID0+IHtcbiAgICAgIEpTLmV4ZWMoXCJob29rXCIsIHBoeEV2ZW50LCB2aWV3LCBlbCwgW1wicHVzaFwiLCB7ZGF0YSwgY2FsbGJhY2t9XSlcbiAgICB9KVxuICB9XG5cbiAgdW5sb2FkKCl7XG4gICAgaWYodGhpcy51bmxvYWRlZCl7IHJldHVybiB9XG4gICAgaWYodGhpcy5tYWluICYmIHRoaXMuaXNDb25uZWN0ZWQoKSl7IHRoaXMubG9nKHRoaXMubWFpbiwgXCJzb2NrZXRcIiwgKCkgPT4gW1wiZGlzY29ubmVjdCBmb3IgcGFnZSBuYXZcIl0pIH1cbiAgICB0aGlzLnVubG9hZGVkID0gdHJ1ZVxuICAgIHRoaXMuZGVzdHJveUFsbFZpZXdzKClcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKVxuICB9XG5cbiAgdHJpZ2dlckRPTShraW5kLCBhcmdzKXsgdGhpcy5kb21DYWxsYmFja3Nba2luZF0oLi4uYXJncykgfVxuXG4gIHRpbWUobmFtZSwgZnVuYyl7XG4gICAgaWYoIXRoaXMuaXNQcm9maWxlRW5hYmxlZCgpIHx8ICFjb25zb2xlLnRpbWUpeyByZXR1cm4gZnVuYygpIH1cbiAgICBjb25zb2xlLnRpbWUobmFtZSlcbiAgICBsZXQgcmVzdWx0ID0gZnVuYygpXG4gICAgY29uc29sZS50aW1lRW5kKG5hbWUpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgbG9nKHZpZXcsIGtpbmQsIG1zZ0NhbGxiYWNrKXtcbiAgICBpZih0aGlzLnZpZXdMb2dnZXIpe1xuICAgICAgbGV0IFttc2csIG9ial0gPSBtc2dDYWxsYmFjaygpXG4gICAgICB0aGlzLnZpZXdMb2dnZXIodmlldywga2luZCwgbXNnLCBvYmopXG4gICAgfSBlbHNlIGlmKHRoaXMuaXNEZWJ1Z0VuYWJsZWQoKSl7XG4gICAgICBsZXQgW21zZywgb2JqXSA9IG1zZ0NhbGxiYWNrKClcbiAgICAgIGRlYnVnKHZpZXcsIGtpbmQsIG1zZywgb2JqKVxuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RET01VcGRhdGUoY2FsbGJhY2spe1xuICAgIHRoaXMudHJhbnNpdGlvbnMuYWZ0ZXIoY2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uKHRpbWUsIG9uU3RhcnQsIG9uRG9uZSA9IGZ1bmN0aW9uKCl7fSl7XG4gICAgdGhpcy50cmFuc2l0aW9ucy5hZGRUcmFuc2l0aW9uKHRpbWUsIG9uU3RhcnQsIG9uRG9uZSlcbiAgfVxuXG4gIG9uQ2hhbm5lbChjaGFubmVsLCBldmVudCwgY2Ipe1xuICAgIGNoYW5uZWwub24oZXZlbnQsIGRhdGEgPT4ge1xuICAgICAgbGV0IGxhdGVuY3kgPSB0aGlzLmdldExhdGVuY3lTaW0oKVxuICAgICAgaWYoIWxhdGVuY3kpe1xuICAgICAgICBjYihkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYihkYXRhKSwgbGF0ZW5jeSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgd3JhcFB1c2godmlldywgb3B0cywgcHVzaCl7XG4gICAgbGV0IGxhdGVuY3kgPSB0aGlzLmdldExhdGVuY3lTaW0oKVxuICAgIGxldCBvbGRKb2luQ291bnQgPSB2aWV3LmpvaW5Db3VudFxuICAgIGlmKCFsYXRlbmN5KXtcbiAgICAgIGlmKHRoaXMuaXNDb25uZWN0ZWQoKSAmJiBvcHRzLnRpbWVvdXQpe1xuICAgICAgICByZXR1cm4gcHVzaCgpLnJlY2VpdmUoXCJ0aW1lb3V0XCIsICgpID0+IHtcbiAgICAgICAgICBpZih2aWV3LmpvaW5Db3VudCA9PT0gb2xkSm9pbkNvdW50ICYmICF2aWV3LmlzRGVzdHJveWVkKCkpe1xuICAgICAgICAgICAgdGhpcy5yZWxvYWRXaXRoSml0dGVyKHZpZXcsICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5sb2codmlldywgXCJ0aW1lb3V0XCIsICgpID0+IFtcInJlY2VpdmVkIHRpbWVvdXQgd2hpbGUgY29tbXVuaWNhdGluZyB3aXRoIHNlcnZlci4gRmFsbGluZyBiYWNrIHRvIGhhcmQgcmVmcmVzaCBmb3IgcmVjb3ZlcnlcIl0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwdXNoKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZmFrZVB1c2ggPSB7XG4gICAgICByZWNlaXZlczogW10sXG4gICAgICByZWNlaXZlKGtpbmQsIGNiKXsgdGhpcy5yZWNlaXZlcy5wdXNoKFtraW5kLCBjYl0pIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZih2aWV3LmlzRGVzdHJveWVkKCkpeyByZXR1cm4gfVxuICAgICAgZmFrZVB1c2gucmVjZWl2ZXMucmVkdWNlKChhY2MsIFtraW5kLCBjYl0pID0+IGFjYy5yZWNlaXZlKGtpbmQsIGNiKSwgcHVzaCgpKVxuICAgIH0sIGxhdGVuY3kpXG4gICAgcmV0dXJuIGZha2VQdXNoXG4gIH1cblxuICByZWxvYWRXaXRoSml0dGVyKHZpZXcsIGxvZyl7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVsb2FkV2l0aEppdHRlclRpbWVyKVxuICAgIHRoaXMuZGlzY29ubmVjdCgpXG4gICAgbGV0IG1pbk1zID0gdGhpcy5yZWxvYWRKaXR0ZXJNaW5cbiAgICBsZXQgbWF4TXMgPSB0aGlzLnJlbG9hZEppdHRlck1heFxuICAgIGxldCBhZnRlck1zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heE1zIC0gbWluTXMgKyAxKSkgKyBtaW5Nc1xuICAgIGxldCB0cmllcyA9IEJyb3dzZXIudXBkYXRlTG9jYWwodGhpcy5sb2NhbFN0b3JhZ2UsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgQ09OU0VDVVRJVkVfUkVMT0FEUywgMCwgY291bnQgPT4gY291bnQgKyAxKVxuICAgIGlmKHRyaWVzID4gdGhpcy5tYXhSZWxvYWRzKXtcbiAgICAgIGFmdGVyTXMgPSB0aGlzLmZhaWxzYWZlSml0dGVyXG4gICAgfVxuICAgIHRoaXMucmVsb2FkV2l0aEppdHRlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBpZiB2aWV3IGhhcyByZWNvdmVyZWQsIHN1Y2ggYXMgdHJhbnNwb3J0IHJlcGxhY2VkLCB0aGVuIGNhbmNlbFxuICAgICAgaWYodmlldy5pc0Rlc3Ryb3llZCgpIHx8IHZpZXcuaXNDb25uZWN0ZWQoKSl7IHJldHVybiB9XG4gICAgICB2aWV3LmRlc3Ryb3koKVxuICAgICAgbG9nID8gbG9nKCkgOiB0aGlzLmxvZyh2aWV3LCBcImpvaW5cIiwgKCkgPT4gW2BlbmNvdW50ZXJlZCAke3RyaWVzfSBjb25zZWN1dGl2ZSByZWxvYWRzYF0pXG4gICAgICBpZih0cmllcyA+IHRoaXMubWF4UmVsb2Fkcyl7XG4gICAgICAgIHRoaXMubG9nKHZpZXcsIFwiam9pblwiLCAoKSA9PiBbYGV4Y2VlZGVkICR7dGhpcy5tYXhSZWxvYWRzfSBjb25zZWN1dGl2ZSByZWxvYWRzLiBFbnRlcmluZyBmYWlsc2FmZSBtb2RlYF0pXG4gICAgICB9XG4gICAgICBpZih0aGlzLmhhc1BlbmRpbmdMaW5rKCkpe1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLnBlbmRpbmdMaW5rXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgIH1cbiAgICB9LCBhZnRlck1zKVxuICB9XG5cbiAgZ2V0SG9va0NhbGxiYWNrcyhuYW1lKXtcbiAgICByZXR1cm4gbmFtZSAmJiBuYW1lLnN0YXJ0c1dpdGgoXCJQaG9lbml4LlwiKSA/IEhvb2tzW25hbWUuc3BsaXQoXCIuXCIpWzFdXSA6IHRoaXMuaG9va3NbbmFtZV1cbiAgfVxuXG4gIGlzVW5sb2FkZWQoKXsgcmV0dXJuIHRoaXMudW5sb2FkZWQgfVxuXG4gIGlzQ29ubmVjdGVkKCl7IHJldHVybiB0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpIH1cblxuICBnZXRCaW5kaW5nUHJlZml4KCl7IHJldHVybiB0aGlzLmJpbmRpbmdQcmVmaXggfVxuXG4gIGJpbmRpbmcoa2luZCl7IHJldHVybiBgJHt0aGlzLmdldEJpbmRpbmdQcmVmaXgoKX0ke2tpbmR9YCB9XG5cbiAgY2hhbm5lbCh0b3BpYywgcGFyYW1zKXsgcmV0dXJuIHRoaXMuc29ja2V0LmNoYW5uZWwodG9waWMsIHBhcmFtcykgfVxuXG4gIGpvaW5EZWFkVmlldygpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICAgIGlmKGJvZHkgJiYgIXRoaXMuaXNQaHhWaWV3KGJvZHkpICYmICF0aGlzLmlzUGh4Vmlldyhkb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZCkpe1xuICAgICAgbGV0IHZpZXcgPSB0aGlzLm5ld1Jvb3RWaWV3KGJvZHkpXG4gICAgICB2aWV3LnNldEhyZWYodGhpcy5nZXRIcmVmKCkpXG4gICAgICB2aWV3LmpvaW5EZWFkKClcbiAgICAgIGlmKCF0aGlzLm1haW4peyB0aGlzLm1haW4gPSB2aWV3IH1cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdmlldy5leGVjTmV3TW91bnRlZCgpKVxuICAgIH1cbiAgfVxuXG4gIGpvaW5Sb290Vmlld3MoKXtcbiAgICBsZXQgcm9vdHNGb3VuZCA9IGZhbHNlXG4gICAgRE9NLmFsbChkb2N1bWVudCwgYCR7UEhYX1ZJRVdfU0VMRUNUT1J9Om5vdChbJHtQSFhfUEFSRU5UX0lEfV0pYCwgcm9vdEVsID0+IHtcbiAgICAgIGlmKCF0aGlzLmdldFJvb3RCeUlkKHJvb3RFbC5pZCkpe1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMubmV3Um9vdFZpZXcocm9vdEVsKVxuICAgICAgICB2aWV3LnNldEhyZWYodGhpcy5nZXRIcmVmKCkpXG4gICAgICAgIHZpZXcuam9pbigpXG4gICAgICAgIGlmKHJvb3RFbC5oYXNBdHRyaWJ1dGUoUEhYX01BSU4pKXsgdGhpcy5tYWluID0gdmlldyB9XG4gICAgICB9XG4gICAgICByb290c0ZvdW5kID0gdHJ1ZVxuICAgIH0pXG4gICAgcmV0dXJuIHJvb3RzRm91bmRcbiAgfVxuXG4gIHJlZGlyZWN0KHRvLCBmbGFzaCl7XG4gICAgdGhpcy51bmxvYWQoKVxuICAgIEJyb3dzZXIucmVkaXJlY3QodG8sIGZsYXNoKVxuICB9XG5cbiAgcmVwbGFjZU1haW4oaHJlZiwgZmxhc2gsIGNhbGxiYWNrID0gbnVsbCwgbGlua1JlZiA9IHRoaXMuc2V0UGVuZGluZ0xpbmsoaHJlZikpe1xuICAgIGxldCBsaXZlUmVmZXJlciA9IHRoaXMuY3VycmVudExvY2F0aW9uLmhyZWZcbiAgICB0aGlzLm91dGdvaW5nTWFpbkVsID0gdGhpcy5vdXRnb2luZ01haW5FbCB8fCB0aGlzLm1haW4uZWxcbiAgICBsZXQgbmV3TWFpbkVsID0gRE9NLmNsb25lTm9kZSh0aGlzLm91dGdvaW5nTWFpbkVsLCBcIlwiKVxuICAgIHRoaXMubWFpbi5zaG93TG9hZGVyKHRoaXMubG9hZGVyVGltZW91dClcbiAgICB0aGlzLm1haW4uZGVzdHJveSgpXG5cbiAgICB0aGlzLm1haW4gPSB0aGlzLm5ld1Jvb3RWaWV3KG5ld01haW5FbCwgZmxhc2gsIGxpdmVSZWZlcmVyKVxuICAgIHRoaXMubWFpbi5zZXRSZWRpcmVjdChocmVmKVxuICAgIHRoaXMudHJhbnNpdGlvblJlbW92ZXMoKVxuICAgIHRoaXMubWFpbi5qb2luKChqb2luQ291bnQsIG9uRG9uZSkgPT4ge1xuICAgICAgaWYoam9pbkNvdW50ID09PSAxICYmIHRoaXMuY29tbWl0UGVuZGluZ0xpbmsobGlua1JlZikpe1xuICAgICAgICB0aGlzLnJlcXVlc3RET01VcGRhdGUoKCkgPT4ge1xuICAgICAgICAgIERPTS5maW5kUGh4U3RpY2t5KGRvY3VtZW50KS5mb3JFYWNoKGVsID0+IG5ld01haW5FbC5hcHBlbmRDaGlsZChlbCkpXG4gICAgICAgICAgdGhpcy5vdXRnb2luZ01haW5FbC5yZXBsYWNlV2l0aChuZXdNYWluRWwpXG4gICAgICAgICAgdGhpcy5vdXRnb2luZ01haW5FbCA9IG51bGxcbiAgICAgICAgICBjYWxsYmFjayAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FsbGJhY2sobGlua1JlZikpXG4gICAgICAgICAgb25Eb25lKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdHJhbnNpdGlvblJlbW92ZXMoZWxlbWVudHMpe1xuICAgIGxldCByZW1vdmVBdHRyID0gdGhpcy5iaW5kaW5nKFwicmVtb3ZlXCIpXG4gICAgZWxlbWVudHMgPSBlbGVtZW50cyB8fCBET00uYWxsKGRvY3VtZW50LCBgWyR7cmVtb3ZlQXR0cn1dYClcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIHRoaXMuZXhlY0pTKGVsLCBlbC5nZXRBdHRyaWJ1dGUocmVtb3ZlQXR0ciksIFwicmVtb3ZlXCIpXG4gICAgfSlcbiAgfVxuXG4gIGlzUGh4VmlldyhlbCl7IHJldHVybiBlbC5nZXRBdHRyaWJ1dGUgJiYgZWwuZ2V0QXR0cmlidXRlKFBIWF9TRVNTSU9OKSAhPT0gbnVsbCB9XG5cbiAgbmV3Um9vdFZpZXcoZWwsIGZsYXNoLCBsaXZlUmVmZXJlcil7XG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyhlbCwgdGhpcywgbnVsbCwgZmxhc2gsIGxpdmVSZWZlcmVyKVxuICAgIHRoaXMucm9vdHNbdmlldy5pZF0gPSB2aWV3XG4gICAgcmV0dXJuIHZpZXdcbiAgfVxuXG4gIG93bmVyKGNoaWxkRWwsIGNhbGxiYWNrKXtcbiAgICBsZXQgdmlldyA9IG1heWJlKGNoaWxkRWwuY2xvc2VzdChQSFhfVklFV19TRUxFQ1RPUiksIGVsID0+IHRoaXMuZ2V0Vmlld0J5RWwoZWwpKSB8fCB0aGlzLm1haW5cbiAgICBpZih2aWV3KXsgY2FsbGJhY2sodmlldykgfVxuICB9XG5cbiAgd2l0aGluT3duZXJzKGNoaWxkRWwsIGNhbGxiYWNrKXtcbiAgICB0aGlzLm93bmVyKGNoaWxkRWwsIHZpZXcgPT4gY2FsbGJhY2sodmlldywgY2hpbGRFbCkpXG4gIH1cblxuICBnZXRWaWV3QnlFbChlbCl7XG4gICAgbGV0IHJvb3RJZCA9IGVsLmdldEF0dHJpYnV0ZShQSFhfUk9PVF9JRClcbiAgICByZXR1cm4gbWF5YmUodGhpcy5nZXRSb290QnlJZChyb290SWQpLCByb290ID0+IHJvb3QuZ2V0RGVzY2VuZGVudEJ5RWwoZWwpKVxuICB9XG5cbiAgZ2V0Um9vdEJ5SWQoaWQpeyByZXR1cm4gdGhpcy5yb290c1tpZF0gfVxuXG4gIGRlc3Ryb3lBbGxWaWV3cygpe1xuICAgIGZvcihsZXQgaWQgaW4gdGhpcy5yb290cyl7XG4gICAgICB0aGlzLnJvb3RzW2lkXS5kZXN0cm95KClcbiAgICAgIGRlbGV0ZSB0aGlzLnJvb3RzW2lkXVxuICAgIH1cbiAgICB0aGlzLm1haW4gPSBudWxsXG4gIH1cblxuICBkZXN0cm95Vmlld0J5RWwoZWwpe1xuICAgIGxldCByb290ID0gdGhpcy5nZXRSb290QnlJZChlbC5nZXRBdHRyaWJ1dGUoUEhYX1JPT1RfSUQpKVxuICAgIGlmKHJvb3QgJiYgcm9vdC5pZCA9PT0gZWwuaWQpe1xuICAgICAgcm9vdC5kZXN0cm95KClcbiAgICAgIGRlbGV0ZSB0aGlzLnJvb3RzW3Jvb3QuaWRdXG4gICAgfSBlbHNlIGlmKHJvb3Qpe1xuICAgICAgcm9vdC5kZXN0cm95RGVzY2VuZGVudChlbC5pZClcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVFbGVtZW50KHRhcmdldCl7XG4gICAgaWYodGhpcy5hY3RpdmVFbGVtZW50ID09PSB0YXJnZXQpeyByZXR1cm4gfVxuICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IHRhcmdldFxuICAgIGxldCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBpZih0YXJnZXQgPT09IHRoaXMuYWN0aXZlRWxlbWVudCl7IHRoaXMuYWN0aXZlRWxlbWVudCA9IG51bGwgfVxuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMpXG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMpXG4gICAgfVxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBjYW5jZWwpXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBjYW5jZWwpXG4gIH1cblxuICBnZXRBY3RpdmVFbGVtZW50KCl7XG4gICAgaWYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSl7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gYmUgbnVsbCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMVxuICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keVxuICAgIH1cbiAgfVxuXG4gIGRyb3BBY3RpdmVFbGVtZW50KHZpZXcpe1xuICAgIGlmKHRoaXMucHJldkFjdGl2ZSAmJiB2aWV3Lm93bnNFbGVtZW50KHRoaXMucHJldkFjdGl2ZSkpe1xuICAgICAgdGhpcy5wcmV2QWN0aXZlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVQcmV2aW91c2x5QWN0aXZlRm9jdXMoKXtcbiAgICBpZih0aGlzLnByZXZBY3RpdmUgJiYgdGhpcy5wcmV2QWN0aXZlICE9PSBkb2N1bWVudC5ib2R5KXtcbiAgICAgIHRoaXMucHJldkFjdGl2ZS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgYmx1ckFjdGl2ZUVsZW1lbnQoKXtcbiAgICB0aGlzLnByZXZBY3RpdmUgPSB0aGlzLmdldEFjdGl2ZUVsZW1lbnQoKVxuICAgIGlmKHRoaXMucHJldkFjdGl2ZSAhPT0gZG9jdW1lbnQuYm9keSl7IHRoaXMucHJldkFjdGl2ZS5ibHVyKCkgfVxuICB9XG5cbiAgYmluZFRvcExldmVsRXZlbnRzKHtkZWFkfSA9IHt9KXtcbiAgICBpZih0aGlzLmJvdW5kVG9wTGV2ZWxFdmVudHMpeyByZXR1cm4gfVxuXG4gICAgdGhpcy5ib3VuZFRvcExldmVsRXZlbnRzID0gdHJ1ZVxuICAgIC8vIGVudGVyIGZhaWxzYWZlIHJlbG9hZCBpZiBzZXJ2ZXIgaGFzIGdvbmUgYXdheSBpbnRlbnRpb25hbGx5LCBzdWNoIGFzIFwiZGlzY29ubmVjdFwiIGJyb2FkY2FzdFxuICAgIHRoaXMuc29ja2V0Lm9uQ2xvc2UoZXZlbnQgPT4ge1xuICAgICAgLy8gZmFpbHNhZmUgcmVsb2FkIGlmIG5vcm1hbCBjbG9zdXJlIGFuZCB3ZSBzdGlsbCBoYXZlIGEgbWFpbiBMVlxuICAgICAgaWYoZXZlbnQgJiYgZXZlbnQuY29kZSA9PT0gMTAwMCAmJiB0aGlzLm1haW4peyByZXR1cm4gdGhpcy5yZWxvYWRXaXRoSml0dGVyKHRoaXMubWFpbikgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCl7IH0pIC8vIGVuc3VyZSBhbGwgY2xpY2sgZXZlbnRzIGJ1YmJsZSBmb3IgbW9iaWxlIFNhZmFyaVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgZSA9PiB7XG4gICAgICBpZihlLnBlcnNpc3RlZCl7IC8vIHJlbG9hZCBwYWdlIGlmIGJlaW5nIHJlc3RvcmVkIGZyb20gYmFjay9mb3J3YXJkIGNhY2hlXG4gICAgICAgIHRoaXMuZ2V0U29ja2V0KCkuZGlzY29ubmVjdCgpXG4gICAgICAgIHRoaXMud2l0aFBhZ2VMb2FkaW5nKHt0bzogd2luZG93LmxvY2F0aW9uLmhyZWYsIGtpbmQ6IFwicmVkaXJlY3RcIn0pXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgfVxuICAgIH0sIHRydWUpXG4gICAgaWYoIWRlYWQpeyB0aGlzLmJpbmROYXYoKSB9XG4gICAgdGhpcy5iaW5kQ2xpY2tzKClcbiAgICBpZighZGVhZCl7IHRoaXMuYmluZEZvcm1zKCkgfVxuICAgIHRoaXMuYmluZCh7a2V5dXA6IFwia2V5dXBcIiwga2V5ZG93bjogXCJrZXlkb3duXCJ9LCAoZSwgdHlwZSwgdmlldywgdGFyZ2V0RWwsIHBoeEV2ZW50LCBldmVudFRhcmdldCkgPT4ge1xuICAgICAgbGV0IG1hdGNoS2V5ID0gdGFyZ2V0RWwuZ2V0QXR0cmlidXRlKHRoaXMuYmluZGluZyhQSFhfS0VZKSlcbiAgICAgIGxldCBwcmVzc2VkS2V5ID0gZS5rZXkgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSAvLyBjaHJvbWUgY2xpY2tlZCBhdXRvY29tcGxldGVzIHNlbmQgYSBrZXlkb3duIHdpdGhvdXQga2V5XG4gICAgICBpZihtYXRjaEtleSAmJiBtYXRjaEtleS50b0xvd2VyQ2FzZSgpICE9PSBwcmVzc2VkS2V5KXsgcmV0dXJuIH1cblxuICAgICAgbGV0IGRhdGEgPSB7a2V5OiBlLmtleSwgLi4udGhpcy5ldmVudE1ldGEodHlwZSwgZSwgdGFyZ2V0RWwpfVxuICAgICAgSlMuZXhlYyh0eXBlLCBwaHhFdmVudCwgdmlldywgdGFyZ2V0RWwsIFtcInB1c2hcIiwge2RhdGF9XSlcbiAgICB9KVxuICAgIHRoaXMuYmluZCh7Ymx1cjogXCJmb2N1c291dFwiLCBmb2N1czogXCJmb2N1c2luXCJ9LCAoZSwgdHlwZSwgdmlldywgdGFyZ2V0RWwsIHBoeEV2ZW50LCBldmVudFRhcmdldCkgPT4ge1xuICAgICAgaWYoIWV2ZW50VGFyZ2V0KXtcbiAgICAgICAgbGV0IGRhdGEgPSB7a2V5OiBlLmtleSwgLi4udGhpcy5ldmVudE1ldGEodHlwZSwgZSwgdGFyZ2V0RWwpfVxuICAgICAgICBKUy5leGVjKHR5cGUsIHBoeEV2ZW50LCB2aWV3LCB0YXJnZXRFbCwgW1wicHVzaFwiLCB7ZGF0YX1dKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5iaW5kKHtibHVyOiBcImJsdXJcIiwgZm9jdXM6IFwiZm9jdXNcIn0sIChlLCB0eXBlLCB2aWV3LCB0YXJnZXRFbCwgdGFyZ2V0Q3R4LCBwaHhFdmVudCwgcGh4VGFyZ2V0KSA9PiB7XG4gICAgICAvLyBibHVyIGFuZCBmb2N1cyBhcmUgdHJpZ2dlcmVkIG9uIGRvY3VtZW50IGFuZCB3aW5kb3cuIERpc2NhcmQgb25lIHRvIGF2b2lkIGR1cHNcbiAgICAgIGlmKHBoeFRhcmdldCA9PT0gXCJ3aW5kb3dcIil7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5ldmVudE1ldGEodHlwZSwgZSwgdGFyZ2V0RWwpXG4gICAgICAgIEpTLmV4ZWModHlwZSwgcGh4RXZlbnQsIHZpZXcsIHRhcmdldEVsLCBbXCJwdXNoXCIsIHtkYXRhfV0pXG4gICAgICB9XG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IGRyb3BUYXJnZXRJZCA9IG1heWJlKGNsb3Nlc3RQaHhCaW5kaW5nKGUudGFyZ2V0LCB0aGlzLmJpbmRpbmcoUEhYX0RST1BfVEFSR0VUKSksIHRydWVUYXJnZXQgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZVRhcmdldC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFBIWF9EUk9QX1RBUkdFVCkpXG4gICAgICB9KVxuICAgICAgbGV0IGRyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0SWQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJvcFRhcmdldElkKVxuICAgICAgbGV0IGZpbGVzID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyB8fCBbXSlcbiAgICAgIGlmKCFkcm9wVGFyZ2V0IHx8IGRyb3BUYXJnZXQuZGlzYWJsZWQgfHwgZmlsZXMubGVuZ3RoID09PSAwIHx8ICEoZHJvcFRhcmdldC5maWxlcyBpbnN0YW5jZW9mIEZpbGVMaXN0KSl7IHJldHVybiB9XG5cbiAgICAgIExpdmVVcGxvYWRlci50cmFja0ZpbGVzKGRyb3BUYXJnZXQsIGZpbGVzLCBlLmRhdGFUcmFuc2ZlcilcbiAgICAgIGRyb3BUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLCB7YnViYmxlczogdHJ1ZX0pKVxuICAgIH0pXG4gICAgdGhpcy5vbihQSFhfVFJBQ0tfVVBMT0FEUywgZSA9PiB7XG4gICAgICBsZXQgdXBsb2FkVGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgIGlmKCFET00uaXNVcGxvYWRJbnB1dCh1cGxvYWRUYXJnZXQpKXsgcmV0dXJuIH1cbiAgICAgIGxldCBmaWxlcyA9IEFycmF5LmZyb20oZS5kZXRhaWwuZmlsZXMgfHwgW10pLmZpbHRlcihmID0+IGYgaW5zdGFuY2VvZiBGaWxlIHx8IGYgaW5zdGFuY2VvZiBCbG9iKVxuICAgICAgTGl2ZVVwbG9hZGVyLnRyYWNrRmlsZXModXBsb2FkVGFyZ2V0LCBmaWxlcylcbiAgICAgIHVwbG9hZFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtidWJibGVzOiB0cnVlfSkpXG4gICAgfSlcbiAgfVxuXG4gIGV2ZW50TWV0YShldmVudE5hbWUsIGUsIHRhcmdldEVsKXtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm1ldGFkYXRhQ2FsbGJhY2tzW2V2ZW50TmFtZV1cbiAgICByZXR1cm4gY2FsbGJhY2sgPyBjYWxsYmFjayhlLCB0YXJnZXRFbCkgOiB7fVxuICB9XG5cbiAgc2V0UGVuZGluZ0xpbmsoaHJlZil7XG4gICAgdGhpcy5saW5rUmVmKytcbiAgICB0aGlzLnBlbmRpbmdMaW5rID0gaHJlZlxuICAgIHJldHVybiB0aGlzLmxpbmtSZWZcbiAgfVxuXG4gIGNvbW1pdFBlbmRpbmdMaW5rKGxpbmtSZWYpe1xuICAgIGlmKHRoaXMubGlua1JlZiAhPT0gbGlua1JlZil7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ocmVmID0gdGhpcy5wZW5kaW5nTGlua1xuICAgICAgdGhpcy5wZW5kaW5nTGluayA9IG51bGxcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0SHJlZigpeyByZXR1cm4gdGhpcy5ocmVmIH1cblxuICBoYXNQZW5kaW5nTGluaygpeyByZXR1cm4gISF0aGlzLnBlbmRpbmdMaW5rIH1cblxuICBiaW5kKGV2ZW50cywgY2FsbGJhY2spe1xuICAgIGZvcihsZXQgZXZlbnQgaW4gZXZlbnRzKXtcbiAgICAgIGxldCBicm93c2VyRXZlbnROYW1lID0gZXZlbnRzW2V2ZW50XVxuXG4gICAgICB0aGlzLm9uKGJyb3dzZXJFdmVudE5hbWUsIGUgPT4ge1xuICAgICAgICBsZXQgYmluZGluZyA9IHRoaXMuYmluZGluZyhldmVudClcbiAgICAgICAgbGV0IHdpbmRvd0JpbmRpbmcgPSB0aGlzLmJpbmRpbmcoYHdpbmRvdy0ke2V2ZW50fWApXG4gICAgICAgIGxldCB0YXJnZXRQaHhFdmVudCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoYmluZGluZylcbiAgICAgICAgaWYodGFyZ2V0UGh4RXZlbnQpe1xuICAgICAgICAgIHRoaXMuZGVib3VuY2UoZS50YXJnZXQsIGUsIGJyb3dzZXJFdmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2l0aGluT3duZXJzKGUudGFyZ2V0LCB2aWV3ID0+IHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZXZlbnQsIHZpZXcsIGUudGFyZ2V0LCB0YXJnZXRQaHhFdmVudCwgbnVsbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBET00uYWxsKGRvY3VtZW50LCBgWyR7d2luZG93QmluZGluZ31dYCwgZWwgPT4ge1xuICAgICAgICAgICAgbGV0IHBoeEV2ZW50ID0gZWwuZ2V0QXR0cmlidXRlKHdpbmRvd0JpbmRpbmcpXG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlKGVsLCBlLCBicm93c2VyRXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMud2l0aGluT3duZXJzKGVsLCB2aWV3ID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBldmVudCwgdmlldywgZWwsIHBoeEV2ZW50LCBcIndpbmRvd1wiKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGJpbmRDbGlja3MoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5jbGlja1N0YXJ0ZWRBdFRhcmdldCA9IGUudGFyZ2V0KVxuICAgIHRoaXMuYmluZENsaWNrKFwiY2xpY2tcIiwgXCJjbGlja1wiLCBmYWxzZSlcbiAgICB0aGlzLmJpbmRDbGljayhcIm1vdXNlZG93blwiLCBcImNhcHR1cmUtY2xpY2tcIiwgdHJ1ZSlcbiAgfVxuXG4gIGJpbmRDbGljayhldmVudE5hbWUsIGJpbmRpbmdOYW1lLCBjYXB0dXJlKXtcbiAgICBsZXQgY2xpY2sgPSB0aGlzLmJpbmRpbmcoYmluZGluZ05hbWUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBlID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBudWxsXG4gICAgICBpZihjYXB0dXJlKXtcbiAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQubWF0Y2hlcyhgWyR7Y2xpY2t9XWApID8gZS50YXJnZXQgOiBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKGBbJHtjbGlja31dYClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjbGlja1N0YXJ0ZWRBdFRhcmdldCA9IHRoaXMuY2xpY2tTdGFydGVkQXRUYXJnZXQgfHwgZS50YXJnZXRcbiAgICAgICAgdGFyZ2V0ID0gY2xvc2VzdFBoeEJpbmRpbmcoY2xpY2tTdGFydGVkQXRUYXJnZXQsIGNsaWNrKVxuICAgICAgICB0aGlzLmRpc3BhdGNoQ2xpY2tBd2F5KGUsIGNsaWNrU3RhcnRlZEF0VGFyZ2V0KVxuICAgICAgICB0aGlzLmNsaWNrU3RhcnRlZEF0VGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuICAgICAgbGV0IHBoeEV2ZW50ID0gdGFyZ2V0ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoY2xpY2spXG4gICAgICBpZighcGh4RXZlbnQpe1xuICAgICAgICBpZighY2FwdHVyZSAmJiBET00uaXNOZXdQYWdlQ2xpY2soZSwgd2luZG93LmxvY2F0aW9uKSl7IHRoaXMudW5sb2FkKCkgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYodGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiKXsgZS5wcmV2ZW50RGVmYXVsdCgpIH1cblxuICAgICAgLy8gbm9vcCBpZiB3ZSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhd2FpdGluZyBhbiBhY2sgZm9yIHRoaXMgZWwgYWxyZWFkeVxuICAgICAgaWYodGFyZ2V0Lmhhc0F0dHJpYnV0ZShQSFhfUkVGKSl7IHJldHVybiB9XG5cbiAgICAgIHRoaXMuZGVib3VuY2UodGFyZ2V0LCBlLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy53aXRoaW5Pd25lcnModGFyZ2V0LCB2aWV3ID0+IHtcbiAgICAgICAgICBKUy5leGVjKFwiY2xpY2tcIiwgcGh4RXZlbnQsIHZpZXcsIHRhcmdldCwgW1wicHVzaFwiLCB7ZGF0YTogdGhpcy5ldmVudE1ldGEoXCJjbGlja1wiLCBlLCB0YXJnZXQpfV0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sIGNhcHR1cmUpXG4gIH1cblxuICBkaXNwYXRjaENsaWNrQXdheShlLCBjbGlja1N0YXJ0ZWRBdCl7XG4gICAgbGV0IHBoeENsaWNrQXdheSA9IHRoaXMuYmluZGluZyhcImNsaWNrLWF3YXlcIilcbiAgICBET00uYWxsKGRvY3VtZW50LCBgWyR7cGh4Q2xpY2tBd2F5fV1gLCBlbCA9PiB7XG4gICAgICBpZighKGVsLmlzU2FtZU5vZGUoY2xpY2tTdGFydGVkQXQpIHx8IGVsLmNvbnRhaW5zKGNsaWNrU3RhcnRlZEF0KSkpe1xuICAgICAgICB0aGlzLndpdGhpbk93bmVycyhlLnRhcmdldCwgdmlldyA9PiB7XG4gICAgICAgICAgbGV0IHBoeEV2ZW50ID0gZWwuZ2V0QXR0cmlidXRlKHBoeENsaWNrQXdheSlcbiAgICAgICAgICBpZihKUy5pc1Zpc2libGUoZWwpKXtcbiAgICAgICAgICAgIEpTLmV4ZWMoXCJjbGlja1wiLCBwaHhFdmVudCwgdmlldywgZWwsIFtcInB1c2hcIiwge2RhdGE6IHRoaXMuZXZlbnRNZXRhKFwiY2xpY2tcIiwgZSwgZS50YXJnZXQpfV0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiaW5kTmF2KCl7XG4gICAgaWYoIUJyb3dzZXIuY2FuUHVzaFN0YXRlKCkpeyByZXR1cm4gfVxuICAgIGlmKGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24peyBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIiB9XG4gICAgbGV0IHNjcm9sbFRpbWVyID0gbnVsbFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIF9lID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lcilcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIEJyb3dzZXIudXBkYXRlQ3VycmVudFN0YXRlKHN0YXRlID0+IE9iamVjdC5hc3NpZ24oc3RhdGUsIHtzY3JvbGw6IHdpbmRvdy5zY3JvbGxZfSkpXG4gICAgICB9LCAxMDApXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGV2ZW50ID0+IHtcbiAgICAgIGlmKCF0aGlzLnJlZ2lzdGVyTmV3TG9jYXRpb24od2luZG93LmxvY2F0aW9uKSl7IHJldHVybiB9XG4gICAgICBsZXQge3R5cGUsIGlkLCByb290LCBzY3JvbGx9ID0gZXZlbnQuc3RhdGUgfHwge31cbiAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcblxuICAgICAgRE9NLmRpc3BhdGNoRXZlbnQod2luZG93LCBcInBoeDpuYXZpZ2F0ZVwiLCB7ZGV0YWlsOiB7aHJlZiwgcGF0Y2g6IHR5cGUgPT09IFwicGF0Y2hcIiwgcG9wOiB0cnVlfX0pXG4gICAgICB0aGlzLnJlcXVlc3RET01VcGRhdGUoKCkgPT4ge1xuICAgICAgICBpZih0aGlzLm1haW4uaXNDb25uZWN0ZWQoKSAmJiAodHlwZSA9PT0gXCJwYXRjaFwiICYmIGlkID09PSB0aGlzLm1haW4uaWQpKXtcbiAgICAgICAgICB0aGlzLm1haW4ucHVzaExpbmtQYXRjaChocmVmLCBudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1heWJlU2Nyb2xsKHNjcm9sbClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVwbGFjZU1haW4oaHJlZiwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYocm9vdCl7IHRoaXMucmVwbGFjZVJvb3RIaXN0b3J5KCkgfVxuICAgICAgICAgICAgdGhpcy5tYXliZVNjcm9sbChzY3JvbGwpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGNsb3Nlc3RQaHhCaW5kaW5nKGUudGFyZ2V0LCBQSFhfTElWRV9MSU5LKVxuICAgICAgbGV0IHR5cGUgPSB0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShQSFhfTElWRV9MSU5LKVxuICAgICAgaWYoIXR5cGUgfHwgIXRoaXMuaXNDb25uZWN0ZWQoKSB8fCAhdGhpcy5tYWluIHx8IERPTS53YW50c05ld1RhYihlKSl7IHJldHVybiB9XG5cbiAgICAgIGxldCBocmVmID0gdGFyZ2V0LmhyZWZcbiAgICAgIGxldCBsaW5rU3RhdGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFBIWF9MSU5LX1NUQVRFKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIC8vIGRvIG5vdCBidWJibGUgY2xpY2sgdG8gcmVndWxhciBwaHgtY2xpY2sgYmluZGluZ3NcbiAgICAgIGlmKHRoaXMucGVuZGluZ0xpbmsgPT09IGhyZWYpeyByZXR1cm4gfVxuXG4gICAgICB0aGlzLnJlcXVlc3RET01VcGRhdGUoKCkgPT4ge1xuICAgICAgICBpZih0eXBlID09PSBcInBhdGNoXCIpe1xuICAgICAgICAgIHRoaXMucHVzaEhpc3RvcnlQYXRjaChocmVmLCBsaW5rU3RhdGUsIHRhcmdldClcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09IFwicmVkaXJlY3RcIil7XG4gICAgICAgICAgdGhpcy5oaXN0b3J5UmVkaXJlY3QoaHJlZiwgbGlua1N0YXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZXhwZWN0ZWQgJHtQSFhfTElWRV9MSU5LfSB0byBiZSBcInBhdGNoXCIgb3IgXCJyZWRpcmVjdFwiLCBnb3Q6ICR7dHlwZX1gKVxuICAgICAgICB9XG4gICAgICAgIGxldCBwaHhDbGljayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFwiY2xpY2tcIikpXG4gICAgICAgIGlmKHBoeENsaWNrKXtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RET01VcGRhdGUoKCkgPT4gdGhpcy5leGVjSlModGFyZ2V0LCBwaHhDbGljaywgXCJjbGlja1wiKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCBmYWxzZSlcbiAgfVxuXG4gIG1heWJlU2Nyb2xsKHNjcm9sbCkge1xuICAgIGlmKHR5cGVvZihzY3JvbGwpID09PSBcIm51bWJlclwiKXtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGwpXG4gICAgICB9KSAvLyB0aGUgYm9keSBuZWVkcyB0byByZW5kZXIgYmVmb3JlIHdlIHNjcm9sbC5cbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXlsb2FkID0ge30pe1xuICAgIERPTS5kaXNwYXRjaEV2ZW50KHdpbmRvdywgYHBoeDoke2V2ZW50fWAsIHtkZXRhaWw6IHBheWxvYWR9KVxuICB9XG5cbiAgZGlzcGF0Y2hFdmVudHMoZXZlbnRzKXtcbiAgICBldmVudHMuZm9yRWFjaCgoW2V2ZW50LCBwYXlsb2FkXSkgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXlsb2FkKSlcbiAgfVxuXG4gIHdpdGhQYWdlTG9hZGluZyhpbmZvLCBjYWxsYmFjayl7XG4gICAgRE9NLmRpc3BhdGNoRXZlbnQod2luZG93LCBcInBoeDpwYWdlLWxvYWRpbmctc3RhcnRcIiwge2RldGFpbDogaW5mb30pXG4gICAgbGV0IGRvbmUgPSAoKSA9PiBET00uZGlzcGF0Y2hFdmVudCh3aW5kb3csIFwicGh4OnBhZ2UtbG9hZGluZy1zdG9wXCIsIHtkZXRhaWw6IGluZm99KVxuICAgIHJldHVybiBjYWxsYmFjayA/IGNhbGxiYWNrKGRvbmUpIDogZG9uZVxuICB9XG5cbiAgcHVzaEhpc3RvcnlQYXRjaChocmVmLCBsaW5rU3RhdGUsIHRhcmdldEVsKXtcbiAgICBpZighdGhpcy5pc0Nvbm5lY3RlZCgpKXsgcmV0dXJuIEJyb3dzZXIucmVkaXJlY3QoaHJlZikgfVxuXG4gICAgdGhpcy53aXRoUGFnZUxvYWRpbmcoe3RvOiBocmVmLCBraW5kOiBcInBhdGNoXCJ9LCBkb25lID0+IHtcbiAgICAgIHRoaXMubWFpbi5wdXNoTGlua1BhdGNoKGhyZWYsIHRhcmdldEVsLCBsaW5rUmVmID0+IHtcbiAgICAgICAgdGhpcy5oaXN0b3J5UGF0Y2goaHJlZiwgbGlua1N0YXRlLCBsaW5rUmVmKVxuICAgICAgICBkb25lKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpc3RvcnlQYXRjaChocmVmLCBsaW5rU3RhdGUsIGxpbmtSZWYgPSB0aGlzLnNldFBlbmRpbmdMaW5rKGhyZWYpKXtcbiAgICBpZighdGhpcy5jb21taXRQZW5kaW5nTGluayhsaW5rUmVmKSl7IHJldHVybiB9XG5cbiAgICBCcm93c2VyLnB1c2hTdGF0ZShsaW5rU3RhdGUsIHt0eXBlOiBcInBhdGNoXCIsIGlkOiB0aGlzLm1haW4uaWR9LCBocmVmKVxuICAgIERPTS5kaXNwYXRjaEV2ZW50KHdpbmRvdywgXCJwaHg6bmF2aWdhdGVcIiwge2RldGFpbDoge3BhdGNoOiB0cnVlLCBocmVmLCBwb3A6IGZhbHNlfX0pXG4gICAgdGhpcy5yZWdpc3Rlck5ld0xvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbilcbiAgfVxuXG4gIGhpc3RvcnlSZWRpcmVjdChocmVmLCBsaW5rU3RhdGUsIGZsYXNoKXtcbiAgICAvLyBjb252ZXJ0IHRvIGZ1bGwgaHJlZiBpZiBvbmx5IHBhdGggcHJlZml4XG4gICAgaWYoIXRoaXMuaXNDb25uZWN0ZWQoKSl7IHJldHVybiBCcm93c2VyLnJlZGlyZWN0KGhyZWYsIGZsYXNoKSB9XG4gICAgaWYoL15cXC8kfF5cXC9bXlxcL10rLiokLy50ZXN0KGhyZWYpKXtcbiAgICAgIGxldCB7cHJvdG9jb2wsIGhvc3R9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgICBocmVmID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3R9JHtocmVmfWBcbiAgICB9XG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZXG4gICAgdGhpcy53aXRoUGFnZUxvYWRpbmcoe3RvOiBocmVmLCBraW5kOiBcInJlZGlyZWN0XCJ9LCBkb25lID0+IHtcbiAgICAgIHRoaXMucmVwbGFjZU1haW4oaHJlZiwgZmxhc2gsIChsaW5rUmVmKSA9PiB7XG4gICAgICAgIGlmKGxpbmtSZWYgPT09IHRoaXMubGlua1JlZil7XG4gICAgICAgICAgQnJvd3Nlci5wdXNoU3RhdGUobGlua1N0YXRlLCB7dHlwZTogXCJyZWRpcmVjdFwiLCBpZDogdGhpcy5tYWluLmlkLCBzY3JvbGw6IHNjcm9sbH0sIGhyZWYpXG4gICAgICAgICAgRE9NLmRpc3BhdGNoRXZlbnQod2luZG93LCBcInBoeDpuYXZpZ2F0ZVwiLCB7ZGV0YWlsOiB7aHJlZiwgcGF0Y2g6IGZhbHNlLCBwb3A6IGZhbHNlfX0pXG4gICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld0xvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbilcbiAgICAgICAgfVxuICAgICAgICBkb25lKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlcGxhY2VSb290SGlzdG9yeSgpe1xuICAgIEJyb3dzZXIucHVzaFN0YXRlKFwicmVwbGFjZVwiLCB7cm9vdDogdHJ1ZSwgdHlwZTogXCJwYXRjaFwiLCBpZDogdGhpcy5tYWluLmlkfSlcbiAgfVxuXG4gIHJlZ2lzdGVyTmV3TG9jYXRpb24obmV3TG9jYXRpb24pe1xuICAgIGxldCB7cGF0aG5hbWUsIHNlYXJjaH0gPSB0aGlzLmN1cnJlbnRMb2NhdGlvblxuICAgIGlmKHBhdGhuYW1lICsgc2VhcmNoID09PSBuZXdMb2NhdGlvbi5wYXRobmFtZSArIG5ld0xvY2F0aW9uLnNlYXJjaCl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBjbG9uZShuZXdMb2NhdGlvbilcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgYmluZEZvcm1zKCl7XG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwXG4gICAgbGV0IGV4dGVybmFsRm9ybVN1Ym1pdHRlZCA9IGZhbHNlXG5cbiAgICAvLyBkaXNhYmxlIGZvcm1zIG9uIHN1Ym1pdCB0aGF0IHRyYWNrIHBoeC1jaGFuZ2UgYnV0IHBlcmZvcm0gZXh0ZXJuYWwgc3VibWl0XG4gICAgdGhpcy5vbihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICAgIGxldCBwaHhTdWJtaXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUodGhpcy5iaW5kaW5nKFwic3VibWl0XCIpKVxuICAgICAgbGV0IHBoeENoYW5nZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoXCJjaGFuZ2VcIikpXG4gICAgICBpZighZXh0ZXJuYWxGb3JtU3VibWl0dGVkICYmIHBoeENoYW5nZSAmJiAhcGh4U3VibWl0KXtcbiAgICAgICAgZXh0ZXJuYWxGb3JtU3VibWl0dGVkID0gdHJ1ZVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy53aXRoaW5Pd25lcnMoZS50YXJnZXQsIHZpZXcgPT4ge1xuICAgICAgICAgIHZpZXcuZGlzYWJsZUZvcm0oZS50YXJnZXQpXG4gICAgICAgICAgLy8gc2FmYXJpIG5lZWRzIG5leHQgdGlja1xuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYoRE9NLmlzVW5sb2FkYWJsZUZvcm1TdWJtaXQoZSkpeyB0aGlzLnVubG9hZCgpIH1cbiAgICAgICAgICAgIGUudGFyZ2V0LnN1Ym1pdCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCB0cnVlKVxuXG4gICAgdGhpcy5vbihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICAgIGxldCBwaHhFdmVudCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLmJpbmRpbmcoXCJzdWJtaXRcIikpXG4gICAgICBpZighcGh4RXZlbnQpe1xuICAgICAgICBpZihET00uaXNVbmxvYWRhYmxlRm9ybVN1Ym1pdChlKSl7IHRoaXMudW5sb2FkKCkgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXG4gICAgICB0aGlzLndpdGhpbk93bmVycyhlLnRhcmdldCwgdmlldyA9PiB7XG4gICAgICAgIEpTLmV4ZWMoXCJzdWJtaXRcIiwgcGh4RXZlbnQsIHZpZXcsIGUudGFyZ2V0LCBbXCJwdXNoXCIsIHtzdWJtaXR0ZXI6IGUuc3VibWl0dGVyfV0pXG4gICAgICB9KVxuICAgIH0sIGZhbHNlKVxuXG4gICAgZm9yKGxldCB0eXBlIG9mIFtcImNoYW5nZVwiLCBcImlucHV0XCJdKXtcbiAgICAgIHRoaXMub24odHlwZSwgZSA9PiB7XG4gICAgICAgIGxldCBwaHhDaGFuZ2UgPSB0aGlzLmJpbmRpbmcoXCJjaGFuZ2VcIilcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXRcbiAgICAgICAgbGV0IGlucHV0RXZlbnQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUocGh4Q2hhbmdlKVxuICAgICAgICBsZXQgZm9ybUV2ZW50ID0gaW5wdXQuZm9ybSAmJiBpbnB1dC5mb3JtLmdldEF0dHJpYnV0ZShwaHhDaGFuZ2UpXG4gICAgICAgIGxldCBwaHhFdmVudCA9IGlucHV0RXZlbnQgfHwgZm9ybUV2ZW50XG4gICAgICAgIGlmKCFwaHhFdmVudCl7IHJldHVybiB9XG4gICAgICAgIGlmKGlucHV0LnR5cGUgPT09IFwibnVtYmVyXCIgJiYgaW5wdXQudmFsaWRpdHkgJiYgaW5wdXQudmFsaWRpdHkuYmFkSW5wdXQpeyByZXR1cm4gfVxuXG4gICAgICAgIGxldCBkaXNwYXRjaGVyID0gaW5wdXRFdmVudCA/IGlucHV0IDogaW5wdXQuZm9ybVxuICAgICAgICBsZXQgY3VycmVudEl0ZXJhdGlvbnMgPSBpdGVyYXRpb25zXG4gICAgICAgIGl0ZXJhdGlvbnMrK1xuICAgICAgICBsZXQge2F0OiBhdCwgdHlwZTogbGFzdFR5cGV9ID0gRE9NLnByaXZhdGUoaW5wdXQsIFwicHJldi1pdGVyYXRpb25cIikgfHwge31cbiAgICAgICAgLy8gZGV0ZWN0IGR1cCBiZWNhdXNlIHNvbWUgYnJvd3NlcnMgZGlzcGF0Y2ggYm90aCBcImlucHV0XCIgYW5kIFwiY2hhbmdlXCJcbiAgICAgICAgaWYoYXQgPT09IGN1cnJlbnRJdGVyYXRpb25zIC0gMSAmJiB0eXBlICE9PSBsYXN0VHlwZSl7IHJldHVybiB9XG5cbiAgICAgICAgRE9NLnB1dFByaXZhdGUoaW5wdXQsIFwicHJldi1pdGVyYXRpb25cIiwge2F0OiBjdXJyZW50SXRlcmF0aW9ucywgdHlwZTogdHlwZX0pXG5cbiAgICAgICAgdGhpcy5kZWJvdW5jZShpbnB1dCwgZSwgdHlwZSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMud2l0aGluT3duZXJzKGRpc3BhdGNoZXIsIHZpZXcgPT4ge1xuICAgICAgICAgICAgRE9NLnB1dFByaXZhdGUoaW5wdXQsIFBIWF9IQVNfRk9DVVNFRCwgdHJ1ZSlcbiAgICAgICAgICAgIGlmKCFET00uaXNUZXh0dWFsSW5wdXQoaW5wdXQpKXtcbiAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVFbGVtZW50KGlucHV0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSlMuZXhlYyhcImNoYW5nZVwiLCBwaHhFdmVudCwgdmlldywgaW5wdXQsIFtcInB1c2hcIiwge190YXJnZXQ6IGUudGFyZ2V0Lm5hbWUsIGRpc3BhdGNoZXI6IGRpc3BhdGNoZXJ9XSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSwgZmFsc2UpXG4gICAgfVxuICAgIHRoaXMub24oXCJyZXNldFwiLCAoZSkgPT4ge1xuICAgICAgbGV0IGZvcm0gPSBlLnRhcmdldFxuICAgICAgRE9NLnJlc2V0Rm9ybShmb3JtLCB0aGlzLmJpbmRpbmcoUEhYX0ZFRURCQUNLX0ZPUikpXG4gICAgICBsZXQgaW5wdXQgPSBBcnJheS5mcm9tKGZvcm0uZWxlbWVudHMpLmZpbmQoZWwgPT4gZWwudHlwZSA9PT0gXCJyZXNldFwiKVxuICAgICAgLy8gd2FpdCB1bnRpbCBuZXh0IHRpY2sgdG8gZ2V0IHVwZGF0ZWQgaW5wdXQgdmFsdWVcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiBmYWxzZX0pKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGVib3VuY2UoZWwsIGV2ZW50LCBldmVudFR5cGUsIGNhbGxiYWNrKXtcbiAgICBpZihldmVudFR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50VHlwZSA9PT0gXCJmb2N1c291dFwiKXsgcmV0dXJuIGNhbGxiYWNrKCkgfVxuXG4gICAgbGV0IHBoeERlYm91bmNlID0gdGhpcy5iaW5kaW5nKFBIWF9ERUJPVU5DRSlcbiAgICBsZXQgcGh4VGhyb3R0bGUgPSB0aGlzLmJpbmRpbmcoUEhYX1RIUk9UVExFKVxuICAgIGxldCBkZWZhdWx0RGVib3VuY2UgPSB0aGlzLmRlZmF1bHRzLmRlYm91bmNlLnRvU3RyaW5nKClcbiAgICBsZXQgZGVmYXVsdFRocm90dGxlID0gdGhpcy5kZWZhdWx0cy50aHJvdHRsZS50b1N0cmluZygpXG5cbiAgICB0aGlzLndpdGhpbk93bmVycyhlbCwgdmlldyA9PiB7XG4gICAgICBsZXQgYXN5bmNGaWx0ZXIgPSAoKSA9PiAhdmlldy5pc0Rlc3Ryb3llZCgpICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnMoZWwpXG4gICAgICBET00uZGVib3VuY2UoZWwsIGV2ZW50LCBwaHhEZWJvdW5jZSwgZGVmYXVsdERlYm91bmNlLCBwaHhUaHJvdHRsZSwgZGVmYXVsdFRocm90dGxlLCBhc3luY0ZpbHRlciwgKCkgPT4ge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzaWxlbmNlRXZlbnRzKGNhbGxiYWNrKXtcbiAgICB0aGlzLnNpbGVuY2VkID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgICB0aGlzLnNpbGVuY2VkID0gZmFsc2VcbiAgfVxuXG4gIG9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGUgPT4ge1xuICAgICAgaWYoIXRoaXMuc2lsZW5jZWQpeyBjYWxsYmFjayhlKSB9XG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBUcmFuc2l0aW9uU2V0IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0gbmV3IFNldCgpXG4gICAgdGhpcy5wZW5kaW5nT3BzID0gW11cbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy50cmFuc2l0aW9ucy5mb3JFYWNoKHRpbWVyID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIHRoaXMudHJhbnNpdGlvbnMuZGVsZXRlKHRpbWVyKVxuICAgIH0pXG4gICAgdGhpcy5mbHVzaFBlbmRpbmdPcHMoKVxuICB9XG5cbiAgYWZ0ZXIoY2FsbGJhY2spe1xuICAgIGlmKHRoaXMuc2l6ZSgpID09PSAwKXtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXNoUGVuZGluZ09wKGNhbGxiYWNrKVxuICAgIH1cbiAgfVxuXG4gIGFkZFRyYW5zaXRpb24odGltZSwgb25TdGFydCwgb25Eb25lKXtcbiAgICBvblN0YXJ0KClcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbnMuZGVsZXRlKHRpbWVyKVxuICAgICAgb25Eb25lKClcbiAgICAgIHRoaXMuZmx1c2hQZW5kaW5nT3BzKClcbiAgICB9LCB0aW1lKVxuICAgIHRoaXMudHJhbnNpdGlvbnMuYWRkKHRpbWVyKVxuICB9XG5cbiAgcHVzaFBlbmRpbmdPcChvcCl7IHRoaXMucGVuZGluZ09wcy5wdXNoKG9wKSB9XG5cbiAgc2l6ZSgpeyByZXR1cm4gdGhpcy50cmFuc2l0aW9ucy5zaXplIH1cblxuICBmbHVzaFBlbmRpbmdPcHMoKXtcbiAgICBpZih0aGlzLnNpemUoKSA+IDApeyByZXR1cm4gfVxuICAgIGxldCBvcCA9IHRoaXMucGVuZGluZ09wcy5zaGlmdCgpXG4gICAgaWYob3Ape1xuICAgICAgb3AoKVxuICAgICAgdGhpcy5mbHVzaFBlbmRpbmdPcHMoKVxuICAgIH1cbiAgfVxufVxuIiwgIi8vIFBhdGg6IGFzc2V0cy9qcy9hcHAuanNcblxuLy8gQmFzaWMgaW5pdGlhbGl6YXRpb24gZm9yIFBob2VuaXggTGl2ZVZpZXdcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICBpZiAod2luZG93LlBob2VuaXgpIHtcbiAgICBpbml0TGl2ZVNvY2tldCgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiUGhvZW5peCBub3QgbG9hZGVkIHlldCwgdXNpbmcgZmFsbGJhY2tcIik7XG4gICAgLy8gVHJ5IHRvIGltcG9ydCBvdXIgb3duIG1vZHVsZXNcbiAgICBpbXBvcnQoXCIuLi9jc3MvYXBwLmNzc1wiKS5jYXRjaChlID0+IGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBsb2FkIENTUzpcIiwgZSkpO1xuICAgIGltcG9ydChcInBob2VuaXhfaHRtbFwiKS5jYXRjaChlID0+IGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBsb2FkIHBob2VuaXhfaHRtbDpcIiwgZSkpO1xuICAgIFxuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGltcG9ydChcInBob2VuaXhcIiksXG4gICAgICBpbXBvcnQoXCJwaG9lbml4X2xpdmVfdmlld1wiKVxuICAgIF0pLnRoZW4oKFtwaG9lbml4LCBsaXZlVmlld10pID0+IHtcbiAgICAgIHdpbmRvdy5QaG9lbml4ID0gcGhvZW5peDtcbiAgICAgIHdpbmRvdy5QaG9lbml4LkxpdmVTb2NrZXQgPSBsaXZlVmlldy5MaXZlU29ja2V0O1xuICAgICAgaW5pdExpdmVTb2NrZXQoKTtcbiAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgaW5pdGlhbGl6ZSBQaG9lbml4IGxpYnJhcmllczpcIiwgZSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpbml0TGl2ZVNvY2tldCgpIHtcbiAgY29uc3QgY3NyZlRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0nY3NyZi10b2tlbiddXCIpLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG4gIGNvbnN0IEhvb2tzID0ge307XG4gIGNvbnN0IFNvY2tldCA9IHdpbmRvdy5QaG9lbml4LlNvY2tldDtcbiAgY29uc3QgTGl2ZVNvY2tldCA9IHdpbmRvdy5QaG9lbml4LkxpdmVTb2NrZXQ7XG4gIFxuICBpZiAoU29ja2V0ICYmIExpdmVTb2NrZXQpIHtcbiAgICBjb25zdCBsaXZlU29ja2V0ID0gbmV3IExpdmVTb2NrZXQoXCIvbGl2ZVwiLCBTb2NrZXQsIHsgcGFyYW1zOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSwgaG9va3M6IEhvb2tzIH0pO1xuICAgIGxpdmVTb2NrZXQuY29ubmVjdCgpO1xuICAgIHdpbmRvdy5saXZlU29ja2V0ID0gbGl2ZVNvY2tldDtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUGhvZW5peCBsaWJyYXJpZXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsT0FBQyxXQUFXO0FBQ1YsWUFBSSxnQkFBZ0IsaUJBQWlCO0FBRXJDLGlCQUFTLG1CQUFtQjtBQUMxQixjQUFJLE9BQU8sT0FBTyxnQkFBZ0I7QUFBWSxtQkFBTyxPQUFPO0FBRTVELG1CQUFTQSxhQUFZLE9BQU8sUUFBUTtBQUNsQyxxQkFBUyxVQUFVLEVBQUMsU0FBUyxPQUFPLFlBQVksT0FBTyxRQUFRLE9BQVM7QUFDeEUsZ0JBQUksTUFBTSxTQUFTLFlBQVksYUFBYTtBQUM1QyxnQkFBSSxnQkFBZ0IsT0FBTyxPQUFPLFNBQVMsT0FBTyxZQUFZLE9BQU8sTUFBTTtBQUMzRSxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxVQUFBQSxhQUFZLFlBQVksT0FBTyxNQUFNO0FBQ3JDLGlCQUFPQTtBQUFBLFFBQ1Q7QUFFQSxpQkFBUyxpQkFBaUIsTUFBTSxPQUFPO0FBQ3JDLGNBQUksUUFBUSxTQUFTLGNBQWMsT0FBTztBQUMxQyxnQkFBTSxPQUFPO0FBQ2IsZ0JBQU0sT0FBTztBQUNiLGdCQUFNLFFBQVE7QUFDZCxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxpQkFBUyxZQUFZLFNBQVMsbUJBQW1CO0FBQy9DLGNBQUksS0FBSyxRQUFRLGFBQWEsU0FBUyxHQUNuQyxTQUFTLGlCQUFpQixXQUFXLFFBQVEsYUFBYSxhQUFhLENBQUMsR0FDeEUsT0FBTyxpQkFBaUIs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
