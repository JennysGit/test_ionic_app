/** common.js : common tools for all page */

/** log level for logger */
var log_level = {all: 10, debug: 20, info: 30, warn: 40, error: 50, fatal: 60, none: 100}

/** logger obj */
var logger = {
    level: log_level.warn,
    private_log: function (level_num, level_name, msg, dom_id) {
        if (logger.level <= level_num) {
            var all_msg = level_name + " : " + msg;
            if (level_num <= log_level.debug) {
                console.log(all_msg);
                dom_id && (this.log_dom(dom_id, all_msg));
            } else if (level_num <= log_level.info) {
                console.info(all_msg);
                dom_id && (this.log_dom(dom_id, all_msg));
            } else if (level_num <= log_level.warn) {
                console.warn(all_msg);
                dom_id && (this.log_dom(dom_id, all_msg));
            } else if (level_num <= log_level.fatal) {
                console.error(all_msg);
                dom_id && (this.log_dom(dom_id, all_msg));
            }
        }
        return logger;
    },
    debug: function (msg, optional_dom_id) {
        return this.private_log(log_level.debug, 'debug', msg, optional_dom_id);
    },
    info: function (msg, optional_dom_id) {
        return this.private_log(log_level.info, 'info', msg, optional_dom_id);
    },
    warn: function (msg, optional_dom_id) {
        return this.private_log(log_level.warn, 'warn', msg, optional_dom_id);
    },
    error: function (msg, optional_dom_id) {
        return this.private_log(log_level.error, 'error', msg, optional_dom_id);
    },
    fatal: function (msg, optional_dom_id) {
        return this.private_log(log_level.fatal, 'fatal', msg, optional_dom_id);
    },
    log_dom: function (dom_id, all_msg) {
        var content = document.getElementById(dom_id).innerHTML;
        document.getElementById(dom_id).innerHTML = content + ' <br/> ' + all_msg;
    }
}

/** net obj : ajax */
var net = {
    /** build full url */
    url: function (uri) {
        return 'https://101.201.45.198:8443/rtv/api/v1/' + uri;
    },
    /** ajax post */
    post: function (url, param, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                callback(this.response);
            }
        }
        /*xhr.ontimeout = function(e) {};
        if(onError){
            xhr.onerror = function(e) {
                onError(e);
            };
        }*/
        xhr.responseType = 'json';
        xhr.send(param);
        return xhr;
    }
}

/** ui obj : alert,confirm,mask... */
var ui = {
    alert: function (msg) {
        alert(msg);
    }
}
