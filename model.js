//import './assets/reset.css';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateDevice() {

    let loraDevice = {
        status: [],
        value: [
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Control",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "command",
                type: "command",
                permission: "w",
                string: {
                    max: 256
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Control",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "firmware",
                type: "command",
                permission: "w",
                string: {
                    max: 4096 
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Control",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "application_eui",
                type: "keys",
                permission: "w",
                string: {
                    max: 64 
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "0",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "downlink_fcount",
                type: "count",
                permission: "r",
                number: {
                    min: 0,
                    max: 2147483647,
                    step: 1
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "0",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "uplink_fcount",
                type: "count",
                permission: "r",
                number: {
                    min: 0,
                    max: 2147483647,
                    step: 1
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "payload",
                type: "payload",
                permission: "r",
                string: {
                    max: 4096 
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "activation",
                type: "keys",
                permission: "r",
                string: {
                    max: 4096
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    },
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Control",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "Period",
                type: "duration",
                permission: "rw",
                number: {
                    min: 15,
                    max: 86400,
                    step: 1,
                    unit: "s"
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "Debug",
                type: "debug",
                permission: "r",
                string: {
                    max: 4096,
                    encoding: "UTF-8"
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "0",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "Positive active energy (A+) total (1.8.0)",
                type: "energy",
                permission: "r",
                number: {
                    min: 0,
                    max: 2147483647,
                    step: 0.01,
                    unit: "kWh"
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "0",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "Positive active energy (A+) in tariff T1 (1.8.1)",
                type: "energy",
                permission: "r",
                number: {
                    min: 0,
                    max: 2147483647,
                    step: 0.01,
                    unit: "kWh"
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "0",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "Positive active energy (A+) in tariff T2 (1.8.2)",
                type: "energy",
                permission: "r",
                number: {
                    min: 0,
                    max: 2147483647,
                    step: 0.01,
                    unit: "kWh"
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            },
            {
                state: [
                    {
                        timestamp: "2020-06-25T10:42:30.691Z",
                        data: "0",
                        status_payment: "owned",
                        type: "Report",
                        meta: {
                            id: uuidv4(),
                            type: "state",
                            version: "2.0"
                        }
                    }
                ],
                name: "Negative active energy (A+) total (2.8.0)",
                type: "energy",
                permission: "r",
                number: {
                    min: 0,
                    max: 2147483647,
                    step: 0.01,
                    unit: "kWh"
                },
                meta: {
                    id: uuidv4(),
                    type: "value",
                    version: "2.0"
                }
            }
        ],
        name: "",
        manufacturer: "Seluxit",
        version: "0.1.1",
        serial: "",
        included: "1",
        command: "idle",
        meta: {
            id: uuidv4(),
            type: "device",
            version: "2.0"
        }
    }

    return loraDevice;
}



