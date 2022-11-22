const loginRequest = {
    "config": {
        "adapter":"",
        "data": "{\"loginId\":\"minah\",\"password\":\"minah123!\"}",
        "env": {
            "FormData": null,
        },
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        "maxBodyLength": -1,
        "maxContentLength": -1,
        "method": "post",
        "timeout": 0,
        "transformRequest": "",
        "transformResponse": "",
        "transitional": {
            "clarifyTimeoutError": false,
            "forcedJSONParsing": true,
            "silentJSONParsing": true,
        },
        "url": "http://3.39.59.151:5000/login",
        "validateStatus": "",
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
    },
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NDgwNjMzMiwianRpIjoiMGQ4YmFkZDYtNDZiOS00ZGNiLTgxOGQtOWM2MmU0OTJlMGNlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MTcsIm5iZiI6MTY2NDgwNjMzMn0.5RMeqTtoJzzBh7ZtODTK4-E0yNT-RutbadW0IdW6B2Q",
        "user_id": 17,
    },
    "headers": {
        "connection": "close",
        "content-length": "286",
        "content-type": "application/json",
        "date": "Mon, 03 Oct 2022 14:12:12 GMT",
        "server": "Werkzeug/2.2.2 Python/3.9.6",
    },
    "request":
        {
            "DONE":
                4,
            "HEADERS_RECEIVED":
                2,
            "LOADING":
                3,
            "OPENED":
                1,
            "UNSENT":
                0,
            "_aborted":
                false,
            "_cachedResponse":
            undefined,
            "_hasError":
                false,
            "_headers":
                {
                    "accept":
                        "application/json, text/plain, */*",
                    "content-type":
                        "application/json",
                }
            ,
            "_incrementalEvents":
                false,
            "_lowerCaseResponseHeaders":
                {
                    "connection":
                        "close",
                    "content-length":
                        "286",
                    "content-type":
                        "application/json",
                    "date":
                        "Mon, 03 Oct 2022 14:12:12 GMT",
                    "server":
                        "Werkzeug/2.2.2 Python/3.9.6",
                }
            ,
            "_method":
                "POST",
            "_perfKey":
                "network__http://3.39.59.151:5000/login",
            "_": {
                "_closed":
                    false,
                "_extras":
                    {}
                ,
                "_pointExtras":
                    {}
                ,
                "_points":
                    {
                        "initializeCore_end":
                            2171273558.918208,
                        "initializeCore_start":
                            2171273499.870958,
                    }
                ,
                "_timespans":
                    {
                        "network__http://3.39.59.151:5000/login":
                            {
                                "endExtras":
                                undefined,
                                "endTime":
                                    2171285546.580375,
                                "startExtras":
                                undefined,
                                "startTime":
                                    2171285074.373292,
                                "totalTime":
                                    472.20708322525024,
                            }
                        ,
                        "network__http://192.168.219.100:19000/logs":
                            {
                                "endExtras":
                                undefined,
                                "endTime":
                                    2171274170.497208,
                                "startExtras":
                                undefined,
                                "startTime":
                                    2171274113.930042,
                                "totalTime":
                                    56.567166328430176,
                            }
                        ,
                    }
                ,
            }
            ,
            "_requestId":
                null,
            "_response": {
                "user_id": 17,
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NDgwNjMzMiwianRpIjoiMGQ4YmFkZDYtNDZiOS00ZGNiLTgxOGQtOWM2MmU0OTJlMGNlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MTcsIm5iZiI6MTY2NDgwNjMzMn0.5RMeqTtoJzzBh7ZtODTK4-E0yNT-RutbadW0IdW6B2Q"
            },
            "_responseType":
                "",
            "_sent":
                true,
            "_subscriptions": [],
            "_timedOut":
                false,
            "_trackingName":
                "unknown",
            "_url":
                "http://3.39.59.151:5000/login",
            "readyState":
                4,
            "responseHeaders":
                {
                    "Connection":
                        "close",
                    "Content-Length":
                        "286",
                    "Content-Type":
                        "application/json",
                    "Date":
                        "Mon, 03 Oct 2022 14:12:12 GMT",
                    "Server":
                        "Werkzeug/2.2.2 Python/3.9.6",
                }
            ,
            "responseURL":
                "http://3.39.59.151:5000/login",
            "status":
                200,
            "timeout":
                0,
            "upload":

                {}
            ,
            "withCredentials":
                true,
        },
    "status":
        200,
    "statusText":
    undefined,
}
