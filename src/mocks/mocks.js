
export const data ={
    "result": {
    "flights": [
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "AF",
                    "caption": "Эйр Франс",
                    "airlineCode": "AF"
                },
                "price": {
                    "total": {
                        "amount": "14607",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3387.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "201.48",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "226.47",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "14607.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "14607.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2987.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "11220.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 750,
                        "segments": [
                            {
                                "classOfServiceCode": "T",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "321",
                                    "caption": "АЭРОБУС321"
                                },
                                "travelDuration": 245,
                                "arrivalCity": {
                                    "uid": "PAR",
                                    "caption": "Париж"
                                },
                                "arrivalDate": "2020-07-10T09:00:00",
                                "flightNumber": "1655",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T05:55:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "TS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AF",
                                    "caption": "Эйр Франс",
                                    "airlineCode": "AF"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "CDG",
                                    "caption": "Шарль-де-Голль"
                                }
                            },
                            {
                                "classOfServiceCode": "T",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "CDG",
                                    "caption": "Шарль-де-Голль"
                                },
                                "departureCity": {
                                    "uid": "PAR",
                                    "caption": "Париж"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 85,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:25:00",
                                "flightNumber": "1280",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T16:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "TS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AF",
                                    "caption": "Эйр Франс",
                                    "airlineCode": "AF"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\nhgnWjy5B+X8641P4G3cAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "AZ",
                    "caption": "Алиталия Экспресс",
                    "airlineCode": "AZ"
                },
                "price": {
                    "total": {
                        "amount": "16398",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "7548.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "226.18",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "254.23",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "16398.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "16398.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "7148.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "8850.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 885,
                        "segments": [
                            {
                                "classOfServiceCode": "S",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "73Х",
                                    "caption": "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                },
                                "travelDuration": 240,
                                "arrivalCity": {
                                    "uid": "ROM",
                                    "caption": "Рим"
                                },
                                "arrivalDate": "2020-07-10T13:20:00",
                                "flightNumber": "7025",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T10:20:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "SOCLEU1"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AZ",
                                    "caption": "Алиталия Экспресс",
                                    "airlineCode": "AZ"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FCO",
                                    "caption": "Фьюмичино/Леонардо Да Винчи"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "S",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "FCO",
                                    "caption": "Фьюмичино/Леонардо Да Винчи"
                                },
                                "departureCity": {
                                    "uid": "ROM",
                                    "caption": "Рим"
                                },
                                "aircraft": {
                                    "uid": "32С",
                                    "caption": "Аэробус А318/А319/А320/А321 Пассажирский"
                                },
                                "travelDuration": 165,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T23:05:00",
                                "flightNumber": "210",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T21:20:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "SOCLEU1"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AZ",
                                    "caption": "Алиталия Экспресс",
                                    "airlineCode": "AZ"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5135",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5135",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\n4v0/avGgHeCCAAA="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LH",
                    "caption": "Люфтганза",
                    "airlineCode": "LH"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "53382",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "13012.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "736.30",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "827.63",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "53382.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "53382.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "12612.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "40370.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 660,
                        "segments": [
                            {
                                "classOfServiceCode": "C",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "arrivalDate": "2020-07-10T15:35:00",
                                "flightNumber": "1445",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T13:10:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "C10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "C",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                },
                                "departureCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "aircraft": {
                                    "uid": "32Q",
                                    "caption": "32Q"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T22:10:00",
                                "flightNumber": "922",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T21:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "C10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\no8lpmIB+dPve/wOO5GrgkYIAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LH",
                    "caption": "Люфтганза",
                    "airlineCode": "LH"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "53382",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "13012.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "736.30",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "827.63",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "53382.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "53382.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "12612.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "40370.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 395,
                        "segments": [
                            {
                                "classOfServiceCode": "C",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "arrivalDate": "2020-07-10T08:30:00",
                                "flightNumber": "1451",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T06:05:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "C10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "C",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                },
                                "departureCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "aircraft": {
                                    "uid": "32N",
                                    "caption": "32N"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T10:40:00",
                                "flightNumber": "904",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T10:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "C10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\neD2RggAA"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "KL",
                    "caption": "КЛМ",
                    "airlineCode": "KL"
                },
                "price": {
                    "total": {
                        "amount": "28044",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "2919.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "386.81",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "434.79",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "28044.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "28044.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2519.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "25125.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 505,
                        "segments": [
                            {
                                "classOfServiceCode": "H",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32Б",
                                    "caption": "Аэробус А321 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 220,
                                "arrivalCity": {
                                    "uid": "AMS",
                                    "caption": "Амстердам"
                                },
                                "arrivalDate": "2020-07-10T17:10:00",
                                "flightNumber": "3179",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T14:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "HS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "KL",
                                    "caption": "КЛМ",
                                    "airlineCode": "KL"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "AMS",
                                    "caption": "Схипхол"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "H",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "AMS",
                                    "caption": "Схипхол"
                                },
                                "departureCity": {
                                    "uid": "AMS",
                                    "caption": "Амстердам"
                                },
                                "aircraft": {
                                    "uid": "73Х",
                                    "caption": "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                },
                                "travelDuration": 85,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T20:55:00",
                                "flightNumber": "1033",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T20:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "HS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "KL",
                                    "caption": "КЛМ",
                                    "airlineCode": "KL"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LH",
                    "caption": "Люфтганза",
                    "airlineCode": "LH"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "42482",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "13012.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "585.96",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "658.64",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "42482.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "42482.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "12612.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "29470.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 695,
                        "segments": [
                            {
                                "classOfServiceCode": "D",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "arrivalDate": "2020-07-10T11:30:00",
                                "flightNumber": "1453",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T09:05:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "D10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "D",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                },
                                "departureCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "aircraft": {
                                    "uid": "32N",
                                    "caption": "32N"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T18:40:00",
                                "flightNumber": "918",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T18:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "D10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\nQqKXIpGCAAA="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LX",
                    "caption": "Свисс",
                    "airlineCode": "LX"
                },
                "price": {
                    "total": {
                        "amount": "28788",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "8878.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "397.08",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "446.33",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "28788.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "28788.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "8478.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "19910.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    }
                },
                "legs": [
                    {
                        "duration": 1075,
                        "segments": [
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "320",
                                    "caption": "А320"
                                },
                                "travelDuration": 210,
                                "arrivalCity": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                },
                                "arrivalDate": "2020-07-10T20:00:00",
                                "flightNumber": "1327",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T17:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "V03CLSE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LX",
                                    "caption": "Свисс",
                                    "airlineCode": "LX"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                }
                            },
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                },
                                "departureCity": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                },
                                "aircraft": {
                                    "uid": "221",
                                    "caption": "221"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-11T09:25:00",
                                "flightNumber": "460",
                                "techStopInfos": [],
                                "departureDate": "2020-07-11T08:45:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "V03CLSE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LX",
                                    "caption": "Свисс",
                                    "airlineCode": "LX"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LCY",
                                    "caption": "Лондон-Сити"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": true
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "AZ",
                    "caption": "Алиталия Экспресс",
                    "airlineCode": "AZ"
                },
                "price": {
                    "total": {
                        "amount": "16398",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "7548.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "226.18",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "254.23",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "16398.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "16398.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "7148.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "8850.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 990,
                        "segments": [
                            {
                                "classOfServiceCode": "S",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "320",
                                    "caption": "А320"
                                },
                                "travelDuration": 235,
                                "arrivalCity": {
                                    "uid": "ROM",
                                    "caption": "Рим"
                                },
                                "arrivalDate": "2020-07-10T11:30:00",
                                "flightNumber": "7161",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T08:35:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "SOCLEU1"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AZ",
                                    "caption": "Алиталия Экспресс",
                                    "airlineCode": "AZ"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FCO",
                                    "caption": "Фьюмичино/Леонардо Да Винчи"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "S",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "FCO",
                                    "caption": "Фьюмичино/Леонардо Да Винчи"
                                },
                                "departureCity": {
                                    "uid": "ROM",
                                    "caption": "Рим"
                                },
                                "aircraft": {
                                    "uid": "32С",
                                    "caption": "Аэробус А318/А319/А320/А321 Пассажирский"
                                },
                                "travelDuration": 165,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T23:05:00",
                                "flightNumber": "210",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T21:20:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "SOCLEU1"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AZ",
                                    "caption": "Алиталия Экспресс",
                                    "airlineCode": "AZ"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5135",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5135",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LO",
                    "caption": "ЛОТ",
                    "airlineCode": "LO"
                },
                "price": {
                    "total": {
                        "amount": "15217",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3837.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "209.89",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "235.92",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "15217.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "15217.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "3437.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "11380.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 335,
                        "segments": [
                            {
                                "classOfServiceCode": "T",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "Е95",
                                    "caption": "ЭМБРАЕР 195"
                                },
                                "travelDuration": 135,
                                "arrivalCity": {
                                    "uid": "WAW",
                                    "caption": "Варшава"
                                },
                                "arrivalDate": "2020-07-10T15:50:00",
                                "flightNumber": "676",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T14:35:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY SAVER",
                                    "fareBasis": {
                                        "ADULT": "T1SAV0"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LO",
                                    "caption": "ЛОТ",
                                    "airlineCode": "LO"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "WAW",
                                    "caption": "Фредерих Шопен Интернешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "T",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "WAW",
                                    "caption": "Фредерих Шопен Интернешинл"
                                },
                                "departureCity": {
                                    "uid": "WAW",
                                    "caption": "Варшава"
                                },
                                "aircraft": {
                                    "uid": "Е90",
                                    "caption": "ЭМБРАЕР 190"
                                },
                                "travelDuration": 160,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T18:10:00",
                                "flightNumber": "289",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T16:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY SAVER",
                                    "fareBasis": {
                                        "ADULT": "T1SAV0"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LO",
                                    "caption": "ЛОТ",
                                    "airlineCode": "LO"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LCY",
                                    "caption": "Лондон-Сити"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LO",
                    "caption": "ЛОТ",
                    "airlineCode": "LO"
                },
                "price": {
                    "total": {
                        "amount": "23845",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3540.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "328.90",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "369.69",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "23845.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "23845.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "3140.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "20305.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 785,
                        "segments": [
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "СУ9",
                                    "caption": "Сухой Суперджет 100-95"
                                },
                                "travelDuration": 130,
                                "arrivalCity": {
                                    "uid": "WAW",
                                    "caption": "Варшава"
                                },
                                "arrivalDate": "2020-07-10T11:50:00",
                                "flightNumber": "5678",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T10:40:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY STANDARD",
                                    "fareBasis": {
                                        "ADULT": "V1STDOF0"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LO",
                                    "caption": "ЛОТ",
                                    "airlineCode": "LO"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "WAW",
                                    "caption": "Фредерих Шопен Интернешинл"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "WAW",
                                    "caption": "Фредерих Шопен Интернешинл"
                                },
                                "departureCity": {
                                    "uid": "WAW",
                                    "caption": "Варшава"
                                },
                                "aircraft": {
                                    "uid": "738",
                                    "caption": "Б737-800"
                                },
                                "travelDuration": 165,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T21:45:00",
                                "flightNumber": "285",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T20:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY STANDARD",
                                    "fareBasis": {
                                        "ADULT": "V1STDOF0"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LO",
                                    "caption": "ЛОТ",
                                    "airlineCode": "LO"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\ny2fDfwvTLbpHNsR0/BGO/weymT2T63QAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "TP",
                    "caption": "ТАП",
                    "airlineCode": "TP"
                },
                "price": {
                    "total": {
                        "amount": "15663",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "5708.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "216.04",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "242.84",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "15663.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "15663.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "5308.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "9955.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 1015,
                        "segments": [
                            {
                                "classOfServiceCode": "T",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32Q",
                                    "caption": "32Q"
                                },
                                "travelDuration": 350,
                                "arrivalCity": {
                                    "uid": "LIS",
                                    "caption": "Лиссабон"
                                },
                                "arrivalDate": "2020-07-10T11:50:00",
                                "flightNumber": "1201",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T08:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "DISCOUNT",
                                    "fareBasis": {
                                        "ADULT": "T01DSC0B"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "TP",
                                    "caption": "ТАП",
                                    "airlineCode": "TP"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "LIS",
                                    "caption": "Да Портела де Сакавем"
                                }
                            },
                            {
                                "classOfServiceCode": "T",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "LIS",
                                    "caption": "Да Портела де Сакавем"
                                },
                                "departureCity": {
                                    "uid": "LIS",
                                    "caption": "Лиссабон"
                                },
                                "aircraft": {
                                    "uid": "319",
                                    "caption": "AirbusA319"
                                },
                                "travelDuration": 155,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T22:55:00",
                                "flightNumber": "1366",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T20:20:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "DISCOUNT",
                                    "fareBasis": {
                                        "ADULT": "T02DSC0A"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "TP",
                                    "caption": "ТАП",
                                    "airlineCode": "TP"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": false
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\nmOb7izZzaqXjQSOpMpJO4RlkNATMMlls7z2zen2M9L1Emy21EfQxoownayY4Rzo6ixQTxEJgJESo\nsxA0pvkeo81SZ0JDkIOkNhlizESkRQTxdISZABGQj3VPwhU031+0WXqmtJECQSYMEWSWsmCcFugg\njqSScCbnfjdkKc1v0eZ3iDZH7Z1JQIYgYLAZJ+nsHYPkO3CvCecysDrw6XBCbumwVWVPFcfWS0Yg\nU4E/LKgsbUqHMIXoKERU6ZqfupnA4PgVw8XWuRUXmowrjVGRmhhJUamWcFaddCm6dvfhd0uCIYFY\nRH1x/ksppK2DNJ4SmkFAyV3l5UGV9G4Kv0PGciu4+7/0X0G+Nv79ps/7v0wg5tsE3kfw7jsB3lfd\nT71g6//0YeH7dB5gVSt1DjQPMyiJM2czJEkY7tdRIv0WSbSZThv7WVyUOjTyEK/aPl06shN7Id8L\n6ceurvLxneEL3y8j9TDETjrrvZDWbIF5YmEA1i7u2OICS4nNtjz8Fb7FBRZSmy15i85nsNVDCGMV\nF0jjtM/RkAxpSikKMgZho1AsLP25noE2LXcwtZ3KmEXL+bPyjvkKXW10p2+7WTvoSLflHOcj7Zu9\nlWGQXDviKbEWSSpw+q05jVSkCgnJJCWQZotQtdh2N0+UDX8r1C07HFbiaaNjE6Y2ax1vdmLv6CHQ\nqrBFA2dstKDGMkRj2nRJIaLTOGQIU+ech2QyE5X3918020A1ierw08xr89no9eDTXZ6j6WmYYv34\nNpn/B5FTQyyYdwAA"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "SU",
                    "caption": "Аэрофлот",
                    "airlineCode": "SU"
                },
                "price": {
                    "total": {
                        "amount": "19123",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "6953.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "263.77",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "296.48",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "19123.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "19123.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "6553.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "12170.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 385,
                        "segments": [
                            {
                                "classOfServiceCode": "L",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "73Х",
                                    "caption": "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                },
                                "travelDuration": 85,
                                "arrivalCity": {
                                    "uid": "LED",
                                    "caption": "Санкт-Петербург"
                                },
                                "arrivalDate": "2020-07-10T13:00:00",
                                "flightNumber": "16",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T11:35:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "size": "55x40x25",
                                            "weight": 10
                                        }
                                    },
                                    "paidCabinLuggage": {},
                                    "tariffName": "ЭКОНОМ ЛАЙТ",
                                    "fareBasis": {
                                        "ADULT": "LNO"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "LED",
                                    "caption": "Пулково"
                                }
                            },
                            {
                                "classOfServiceCode": "L",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "LED",
                                    "caption": "Пулково"
                                },
                                "departureCity": {
                                    "uid": "LED",
                                    "caption": "Санкт-Петербург"
                                },
                                "aircraft": {
                                    "uid": "319",
                                    "caption": "AirbusA319"
                                },
                                "travelDuration": 210,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:00:00",
                                "flightNumber": "6619",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T14:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "size": "55x40x25",
                                            "weight": 10
                                        }
                                    },
                                    "paidCabinLuggage": {},
                                    "tariffName": "ЭКОНОМ ЛАЙТ",
                                    "fareBasis": {
                                        "ADULT": "LNO"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LGW",
                                    "caption": "Гатвик"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "2923",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "2923",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "IB",
                    "caption": "Иберия",
                    "airlineCode": "IB"
                },
                "price": {
                    "total": {
                        "amount": "14912",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "2822.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "205.68",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "231.19",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "14912.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "14912.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2422.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "12090.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 545,
                        "segments": [
                            {
                                "classOfServiceCode": "O",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 275,
                                "arrivalCity": {
                                    "uid": "BCN",
                                    "caption": "Барселона, Испания"
                                },
                                "arrivalDate": "2020-07-10T04:50:00",
                                "flightNumber": "5739",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T01:15:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "ORTNVY"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "IB",
                                    "caption": "Иберия",
                                    "airlineCode": "IB"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "BCN",
                                    "caption": "Барселона"
                                },
                                "operatingAirline": {
                                    "uid": "VY",
                                    "caption": "Vueling Airlines S.A.",
                                    "airlineCode": "VY"
                                }
                            },
                            {
                                "classOfServiceCode": "O",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "BCN",
                                    "caption": "Барселона"
                                },
                                "departureCity": {
                                    "uid": "BCN",
                                    "caption": "Барселона, Испания"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 140,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T08:20:00",
                                "flightNumber": "5482",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T07:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "ORTNVY"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "IB",
                                    "caption": "Иберия",
                                    "airlineCode": "IB"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LGW",
                                    "caption": "Гатвик"
                                },
                                "operatingAirline": {
                                    "uid": "VY",
                                    "caption": "Vueling Airlines S.A.",
                                    "airlineCode": "VY"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*O",
                    "caption": "Oneworld"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\nckwnFyf9P0ifQTzrewAA"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "BT",
                    "caption": "Эйр Балтик",
                    "airlineCode": "BT"
                },
                "price": {
                    "total": {
                        "amount": "16297",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "5707.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "224.79",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "252.67",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "16297.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "16297.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "5307.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "10590.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "PAID",
                        "caption": "Платно"
                    }
                },
                "legs": [
                    {
                        "duration": 410,
                        "segments": [
                            {
                                "classOfServiceCode": "A",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "СУ9",
                                    "caption": "Сухой Суперджет 100-95"
                                },
                                "travelDuration": 105,
                                "arrivalCity": {
                                    "uid": "RIX",
                                    "caption": "Рига"
                                },
                                "arrivalDate": "2020-07-10T13:35:00",
                                "flightNumber": "7427",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T11:50:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY GREEN CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "ARU3CLS"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "BT",
                                    "caption": "Эйр Балтик",
                                    "airlineCode": "BT"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "RIX",
                                    "caption": "Скульте"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "A",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "RIX",
                                    "caption": "Скульте"
                                },
                                "departureCity": {
                                    "uid": "RIX",
                                    "caption": "Рига"
                                },
                                "aircraft": {
                                    "uid": "223",
                                    "caption": "223"
                                },
                                "travelDuration": 170,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:40:00",
                                "flightNumber": "653",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T15:50:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY GREEN CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "ARU3CLS"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "BT",
                                    "caption": "Эйр Балтик",
                                    "airlineCode": "BT"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LGW",
                                    "caption": "Гатвик"
                                }
                            }
                        ]
                    }
                ],
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundBeforeDeparture": {
                            "amount": "3950",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundAfterDeparture": {
                            "amount": "3950",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundableBeforeDeparture": true,
                        "refundableAfterDeparture": true
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "IB",
                    "caption": "Иберия",
                    "airlineCode": "IB"
                },
                "price": {
                    "total": {
                        "amount": "17360",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "2585.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "239.45",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "269.15",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "17360.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "17360.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2185.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "14775.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 830,
                        "segments": [
                            {
                                "classOfServiceCode": "O",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 275,
                                "arrivalCity": {
                                    "uid": "BCN",
                                    "caption": "Барселона, Испания"
                                },
                                "arrivalDate": "2020-07-10T04:50:00",
                                "flightNumber": "5739",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T01:15:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "ORTNVY"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "IB",
                                    "caption": "Иберия",
                                    "airlineCode": "IB"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "BCN",
                                    "caption": "Барселона"
                                },
                                "operatingAirline": {
                                    "uid": "VY",
                                    "caption": "Vueling Airlines S.A.",
                                    "airlineCode": "VY"
                                }
                            },
                            {
                                "classOfServiceCode": "O",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "BCN",
                                    "caption": "Барселона"
                                },
                                "departureCity": {
                                    "uid": "BCN",
                                    "caption": "Барселона, Испания"
                                },
                                "aircraft": {
                                    "uid": "320",
                                    "caption": "А320"
                                },
                                "travelDuration": 145,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T13:05:00",
                                "flightNumber": "7480",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T11:40:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "OHV2A"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "IB",
                                    "caption": "Иберия",
                                    "airlineCode": "IB"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                },
                                "operatingAirline": {
                                    "uid": "BA",
                                    "caption": "Британские Авиалинии",
                                    "airlineCode": "BA"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*O",
                    "caption": "Oneworld"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "9140",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "9140",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\nAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "KL",
                    "caption": "КЛМ",
                    "airlineCode": "KL"
                },
                "price": {
                    "total": {
                        "amount": "16491",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3216.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "227.46",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "255.67",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "16491.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "16491.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2816.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "13275.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 490,
                        "segments": [
                            {
                                "classOfServiceCode": "H",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "73В",
                                    "caption": "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "AMS",
                                    "caption": "Амстердам"
                                },
                                "arrivalDate": "2020-07-10T15:55:00",
                                "flightNumber": "902",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T13:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "HS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "KL",
                                    "caption": "КЛМ",
                                    "airlineCode": "KL"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "AMS",
                                    "caption": "Схипхол"
                                }
                            },
                            {
                                "classOfServiceCode": "H",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "AMS",
                                    "caption": "Схипхол"
                                },
                                "departureCity": {
                                    "uid": "AMS",
                                    "caption": "Амстердам"
                                },
                                "aircraft": {
                                    "uid": "Е90",
                                    "caption": "ЭМБРАЕР 190"
                                },
                                "travelDuration": 70,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T19:40:00",
                                "flightNumber": "997",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T19:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "HS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "KL",
                                    "caption": "КЛМ",
                                    "airlineCode": "KL"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LCY",
                                    "caption": "Лондон-Сити"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "H4sIAAAAAAAAAO1dW28jyXV+z69Q5sl+KKmu3VULrgCJ0szKnpEUSbPOxjAGddXQS5FykxrvOAjg\n2dwQJMDaTowAtgHbb3kJML5sPF7b679A/aOc6uadTbKpkWYlz+4CGrK76lTVV6fO5euqZq1tvu1t\nd802dafz7j3bPls/zRqu1Wj59Y+6WeN8HS6dtVvrp66zftZ2vrl+v9k4fdq9t/lXa/Bf7aLhNr2z\nUlsZkOPGI84wQYZph5z0htlEScZcbSOWLOqArM3jre2j3dpG/FhctBedbvvsMGuf+6zb8P3L+a1G\n158t72HRu87zDpRe39dn3r2vmxf+3kjQsMOcKWsSFRBRRCMekgQZoi1SnhFJUxwEl2MdHtZtgdTN\nnUYGiDXarb0WjCq/NFnqWWx2s/bX36zvbJ1sffNgf/fJN7Y++Na3Nmsbxa3RyDbi0PoAbJQjUOs2\n7Ie+W29ftLqbpLYx/rUo0Gg1uju66zcpphjhFOFkjbB3KH5H4PUEM2hlUKKoYJq69eHBd1s+q4rq\nbqvb6D4/8sFnvmXHMc3xxFYSjVOPggEt4IETpIgjSGohvAlaYp1O4VnrPj/3m8vaPc/aodH06wfZ\nqW41vqcj7ABBrDqSZPV5vD5CfPv4MEd7cKOP72jYA5XTWdaIIBTl3r3X+0nvp72f3auKimvY7vpW\nI2vC/TFsvv4wNp2L7jfUhI63jvxpo9PN8jFsdrMLX9uYvV6U98Uk90sNvhX3tLVx7uvQg63z82bD\nu36xkhuD6W7bD+tPddaFDgXd7PiIxdi1oljnwnQarvE970501ghhUHTmel/rTlvtzNfbLei67Xbu\nt7PjqYL3m/p0IKRi6aF9qF9kEc3ncTSbR4+3c0sxcXFYdKsY9zWpsqDe4tRqWEccTANYL6SlMcgr\nK5xlwhOmV1TlaDo72mS+34Pj+PnBsOPL9TmvsFbfPTpZ+4p6eFz/6hpau/y49+nlC/j7ee/Xl//e\n+/3a5fd7n/b+r/eq98cy3R/hNLAq0EGYfbA/g0nZ8V3daHaq4mja7Q8brdP1k3mCZoxEUMYKTZF3\n0iJuEo8MlQbxBLBlxifWmWlkW+1u1OXns410Bpq1qMiYC+l0Lrx73HI+Y26olBMX+0jNBaZfoOVB\nY9t5k4cXptmw93XmdxqdAtxiKS4u019uuuk7sAIbrVURPx7WnIEYe+2Vkwgb7KMdNkhRFhAmWHtw\nbDTldBpi5zsWmorK8vpLaNiTfHTIxk6ig2/slznTlRzAaMw7o/5Or5zy1dP7JayRX+Vr5dewRP4E\n/7+8/GSt92dYMZ/3ftt7Cavm5eyaKbRhDJ3xFdrXjHbWmWp9lVBlMJ/1obQpJEfzalNKWJCICFg1\n3BuOVGJTRCVRmFKqBQ0lEN/M/E70bIQEOn58ePhwb/doTkdWn/MRLkvmfP7c//1rtfXO2uO9nXef\n+awDXxBGJYP9h3LFWaJAJYp0A3Nzhajs6pO1KEJbPEel0dokiCOYppbbWPw8vHYzS5C6FDuWMogG\nggIw4Y80MkUucVITpYN388B8c0tw68Hufv2Dt2IBFkO9zcvPW68d2G2kradx+VlkEi0Q86lLBbPO\ncXsLll/vP8EL/iGGkeAYP+99utb7Qe830U9eftz3mZ/fgeWpuHPGM41kogjiLKVIpxJsHTOBgcFz\nTnzxHrIOHmP/5K1YnsVQb/Py5MokmECELKRjiBOGwaAbi4iy2nMnjJHiNizPX8Ci/B0szVeX/wpr\nMmZ6vc9gvb4qluh1Lc3xkoNMZ2OUogy4h5ZtNJs6e37f+86R/86F73T3Idfxw5RqQYlCRMjZw5gP\ndY69zuxTSIu0aY4kzC9QCHiqOwUD975vuXY2SvaK1Gvu7aL2edZ4prs+ih8bvIdCz6cA+tA/HyOG\nftT7XUwXLl/0/hDnoDJFNLBgh1Dat059dgJzP6afWzuPH4JFgMZKScQ+JjO04ViHaxszY6p1/OkZ\nFCmIldWZ1Gmu93hcXFm256gTmNEUYeEhODLGIRUShRIDySjnUmqTlKWA/X52SjT3tXq6MCqGjipl\nMBJBGMSFoMiYRCKmWewsJjLgReu+jLyeKTSfzL7iQKuR26UD1oSkxmqDUh8nJzgKho46ZEUaDOcA\nR1ALBjyUlTPdjyKvqU/9g+y8jPueqTTNhZex4DOVSsKG0b1q0NZ0QcveBLfbFz2n4cJ+7V+cGZ9t\nQnY+sGj9K+WV4mAiF3y6dXPdnm5jWVfuzwyk/Fa5mGbb5t5u259Ghms4nP/pfZozlX+Efz++/A/4\nBAHmasN74NsP+9LHhgizct7OumvH7x/UNiZaX9LD3ZYb698vL/8ZfOuf4S9ExdfZr61Hx6N+QZtz\neuXAkhe9HjzNITg+zWH4HYzXMQbbNCoyX0RsYFyAeEeICQHze9D12VmjpZtFE2DmJi+UVzJtnY3D\n+EOA7xVELb9ZS1mKUozXvgITnV+B4CVO/YuvrvV+3nsJOcaLnIJ7dfl9+PQZlPn9xvb218jKKm8z\nHbpjwKes96PaRt6xeSPN9DPf3LnoP3uhWET6d+LaHOPyTDeaMSiBCAW8F5jPqSvl1cBwnXc2YQKK\nD/MKRfa5ddqPZ4Zf5+Gexxf1CNXme3G4Y9/nVKn0OGim2pnXzWOfPWtYv9cCzHUelg8n/Of5qv5t\nDJEgaXwJk/2Hy0+Kib78ZLW5fFTS0ti8PqptlPVlvrvec/G5afFhDuaFrAK13frB/sGjDwD68atz\njD3EXHut0H59Bz8WyfRlVvHtDGtLbdBIsfjkHRuFtKYJZMGU+SA0Yd5X8e3n4+Hpmwt7J5pd0sUI\n9bbuNEDNjwXe3n74ADzr8Nriupk/09mH/XwipgT+o+4oKKmtsgeieJD31DfBF3aKR3lHJdIH2yMg\nwu27SRIV6nTcZ9bO82Fv7UQkCgTAx+Z92czjpNJuLx5p8+L0FMKzqD+rzhU4qvWHo+pL1C9vLWde\nqGDE6wRZojDijjCkU0tQwlLMtQo69WWxf6m8VqM5eIIGnxaPdGNsqBVUp/LTzcmFOPssczEYmCda\na4m04AJxyyVSacpRooKnqfEa80WkwoQ8k+mWi6H+wCKtPdx78N4JxGGjO8ulQHJoYXYPdQblwbqv\njMDhtIAKWAzxoIaLhEiOiE0g2QpEoBweIizWXKgQUl4Rj1ym80FfNLv9Pg2819TVaqJyEMEjTIA6\nz0NM1NyYwXSZqo4p4DJD7CHQimnNKis4TtjheMXK6grJeZLauGfLcsRpEEiRuPfBW5+mSYLT0ry9\nBJHx1q+a2S1wpvMq3hxNQINNGNMUBUIcmLVUIUiaJcKUMibAk1Eyj1DOZdw5moAnklPnBUpFohAn\n3iKDjUPCKqITH6mc6e0ZpbKugybYe9toApXeWZqgX6zePjvXrefHTyHXzV3TxtcfPlqr75188N7B\n4WHcFbC0xkp8RETsOviIN5Pvr85D/BT686eYT/X+hHq/hOz4496r6+zew/ic+Kp0hHpdOkK9w3FF\nOmKaWfjf3s96P+z9oveD3o97vwBJ+LWJgt6PFV6JKEjxbeIJBts07whR8N+9l73PLv8x53peXisx\ncHwFYoD+hRIDHGMhvBIIIjkI76w0yCgIZAghwROJcUorefMviYEbJwboXSMG1kBt3r1XJe+/t3Fr\nMnOuvNFYQj7udQrhbaBI09QjmRghvafYkso0xV9CZu61wImIZ3ZMxCNNNNI+KMSY454JyM1FVTxy\nmV9m5teamRPFvIDoCGHCGOIa4iYpuUTBc06pZkK56WMIcxD5AjLz3KBNPdifPOpUtkEhNwavv1kh\nroyyPQrEe+VToRAYKbBXCj7pVBGkqCbSOxMIK9vAeQs9YM1/56IByTEAuHVWHAtjNBW1jZnrk9WM\n7vjixopEwqN2yz+ft/POm0RBPMEQVQo01VmFJCFgXeGPMME66tm8nXdFhk8SuR7zgDn5fs32j/1s\n7j4+iol9/9uUyo1GN0/pxvSr1tUfXYOuneiPylRNJdYKDes2oR5sq2EUKXCViIAPEjIhYHhLt8Pc\nQlWz8ahV/Wtxe5hbqoZCyEVKOLPn7FpBlyRglRqIc6lwiDOVIm14gmgMdlNwaSSZPvtyq0E/2qsG\nehqH9UWB7lKhCacWKcYD4l5xpLXzKHBtncTWBHOnQP/gb6qBrvgXqOmeWPBVYGJTHo8ogv9C0lKC\nmDKg+4oSKe8U6Ef7Fc1LddBrG2MGvqabzfZ3vTvUz/OgA7oxbfo3H2yd7D7c2999Uj/a3dk7eVLf\nOtopncXNsQJPDvbzOsd7R7v7W+XF9/bfP9ir786RtXX8Xvmd3cOtD77+dydP4J/tg7+dHNrc4Qw3\nTB/5Zk5LjQ/ztu5xHbTybf1Mr190G831rSzTzx82OmXPZ1ZeSQ9cpz6Fyo7u6kWPfhQzNImprAwm\nHgH2Jj4JgVRRsZRbKSzzC3eI3th5gmEPs/5IhsfQnpwcPFl6+CevfqUTBkPkqp0zyBua3cn+X73P\ne7/JD5p8fvn9tcsXa70/j7YLXf5b71XvM7hbcnx5RvbicwN5kVPf8pluxrm+6mmTwagfjEQtmxgi\nE5sIClEHi5Ffqj0y+a5bljJnTBpkuujMTx+4pr0YamrZWx3oumA8YjRZcIHIfsy8Ets6OG0fE78x\nzcwP45cH4RNtZtClqu0N9G33I/tUgwU5grpL4B5CrpVKMZYEBWEtAJ1IpCyTyGjpqTaOSVn2Lo/S\n/n6j0X1ab/sQGrYB9nITr8NCL7uxWJSdFmErV220XH56ISJwv5F1usOz6jM3FuTy2RJ16Ct41enZ\n95AGuuo2Km8kP/sEYbhMPCTZPr5nRRmHdFABUnBsOeU2SLfoIfpQ1pWM1jILVUDx2iei6vmDZp/F\nZVIciJLWBpsKDKGwFTEjpshIrRAlRAjumA4uLDkZNdHH1hj8j2OmU0F+fAfBZK3qbZxcBe1xGCYb\nX0zhjw4eVVDY67Dm9TFZVXTYacVTCSY9ST2kOBRHbYaQ25pEisQLEfg8fqN0DNcfEkx095qWXC7v\nxpZdAciSAGHpufAJaVXUaGNcjxbFSJludUBb/PFF/iKdLB5m629MLL83J0wZC0IWP2C8DsU+Hola\nFqYw6UWwXiKu05i26wRBzoiRZCIopo0Bv7k0kGx3dTMS+5HAwyq+mWp0ZX618yJrmag4cW1+VedB\nfv8Q5TWCtTMmtopBUA5TK1OOOHYAHtMMqSTxyNugMU+tYXhRejCUFenIAXMbJs4jluM9yVjOLXeV\n89XHjbPzpp+lGxbiwFKJwQ1JhIMETTLEI8UZmBsjjA4mSbWogsNQ5gKqcW4dPUY86hLOu7TSgkcd\nE+XeGJJJQoz03CDnRcwVEgsaxWFNYq2JxsYEu9Iu2QX84dw6eoxNvLtIijQhImCKUh9DI8AOKaId\nuG0VuAVvHfyiV57MyFxACs6to8cowruLpKQSpzxJEYWcFUwd50jaAGGPTIKgjBuZVtlAMpS5gOmb\nW0eP8X7XieQEO1heYNzXzPPuY757TpE4HY1OZ5KJmyl1JUprILiKx/KOEhXfvCaiaeHewKrwsEiM\n1ilcYULbKquiPx/X9PCwtKeYBGeFDUjhwBBPIJnX1HqkHWEMAtp4uqJq9Np/uLg+/8niTJUhrVGR\n5MgrVVLNkme2sWOLn9jO9m847aONzTecT+BUp5R5jVKmaHwfIuhOkAnCKfFKOoMZrmpRq+UTA6s1\nGut6vWTYr5Fm/CSyjL1X+cnTV5efxERj7SuX/xT5x8sXX10t55jtWMU0MM+K39/d3zk4GuUly1Ll\nhRveF9maazs/cQU63VlqmLLgRLgGn4w9RkoSh6zCLCReY6oXJRtvkk4vKPRIpi99VU9e+VaR6WNv\nhbnrNHrQngrpKSIsbk7zVCKTGIWIUMZgIblYeqawGo3O07eCRi92bFZhyhft2HyDvDEEK8qwFHkR\nEyIPYajRqUaCkNSFJCScVzqXdsd4Y0lDIhUk1Fbmb6QKSHttEdGptRRjMKLqtXjjCvK/5I2vizem\nVONEB4hdcXz7ZgrpvWYEfJ9OsdTwl5JKz6XeFG98PUsul/emeePRK9L+pfdybZvWyZfE8c0QxwlP\nrTcQvKl8s6cwBBkPX40TkJwRm6ZLH4a8vcSxANBw0BIFzCGq0R5sQwBP7BNIpoTmyspKL+u468Sx\nclgICL0gAzCQUmpLkUq5iAkBhTQfc8FWp5beSuIYEirPpYCITpGYX0XOmAiLhDNSUUZkkq5Owb+V\nxHFqpTEmuEiMQZKaWoF04g3CgpEgUqIMXrZxZ0Lm20sc+8QRrBjkWgFLiDIFRJkJ9khYSX3Q3PmZ\nH9BYKPNL4nhuYzdOHHOI/QQXEiJXSBu4SAwyglIkcZIkCsJCzCrlYTdPHAssMJNOIis5jr41QUpS\njZKEcqupkZ5VibZzeQVbzDG+rdRxv2u3nzw2xGviiUHMEQL6E49fGguBI4PwRVojLCM3TR5DmH0t\nrPEPey8hyRj+2s6L3q8i8/Ym2eIBJ/mFsMXLXkI8Z+v55LHJu7QffVkrVY52FqYpgPF0lIPp1DYe\nlE6QTiFm4ylYVyxMQpN5QVot8+Gi5eL7IrZC12c7Pv400UU2fDH03PuLRG370I6nXufKmi4wK8wX\nDGNJw/2fLJt7f6Gs6YZnhFXu2VSz1+h6in3eRhhvAsSHiQ2IJ1xDkGM8pDBK2pRLl6aLDFvfxSx2\nL5VdyhChylhP43jd8HiRMBbfJSUSCnkJNSnScQulJdo5yzHHYpE3vil4lmuP1V2SHE0thL4alt9b\nKiOfk3IRxa2VzGyZOa11Jt8ls3JcGN9Fc5gNDOT0awQKNlPiQLl2CLJzBwpPFDJeQeLJ0yAwBq1X\nZcTP7Txz1v8lTbvo/NgYprW2iVzdtAO72pm+g22QVeIu+q9qd4YrIlDK415jIiALTSHejk/DEqms\nxr4sC62dNVogNS6Y/qep2/qjwe3i022eo8lpmIB++BKU/weu6Q4ZtnYAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "AF",
                    "caption": "Эйр Франс",
                    "airlineCode": "AF"
                },
                "price": {
                    "total": {
                        "amount": "22685",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3090.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "312.90",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "351.71",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "22685.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "22685.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2690.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "19595.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 400,
                        "segments": [
                            {
                                "classOfServiceCode": "E",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32Б",
                                    "caption": "Аэробус А321 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 240,
                                "arrivalCity": {
                                    "uid": "PAR",
                                    "caption": "Париж"
                                },
                                "arrivalDate": "2020-07-10T14:45:00",
                                "flightNumber": "4855",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T11:45:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "ES50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AF",
                                    "caption": "Эйр Франс",
                                    "airlineCode": "AF"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "CDG",
                                    "caption": "Шарль-де-Голль"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "E",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "CDG",
                                    "caption": "Шарль-де-Голль"
                                },
                                "departureCity": {
                                    "uid": "PAR",
                                    "caption": "Париж"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 85,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:25:00",
                                "flightNumber": "1280",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T16:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "ES50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AF",
                                    "caption": "Эйр Франс",
                                    "airlineCode": "AF"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LH",
                    "caption": "Люфтганза",
                    "airlineCode": "LH"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "53382",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "13012.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "736.30",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "827.63",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "53382.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "53382.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "12612.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "40370.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 815,
                        "segments": [
                            {
                                "classOfServiceCode": "C",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "arrivalDate": "2020-07-10T08:30:00",
                                "flightNumber": "1451",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T06:05:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "C10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "C",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                },
                                "departureCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "aircraft": {
                                    "uid": "32Q",
                                    "caption": "32Q"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T17:40:00",
                                "flightNumber": "916",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T17:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "C10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "AF",
                    "caption": "Эйр Франс",
                    "airlineCode": "AF"
                },
                "price": {
                    "total": {
                        "amount": "22685",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3090.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "312.90",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "351.71",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "22685.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "22685.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2690.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "19595.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 490,
                        "segments": [
                            {
                                "classOfServiceCode": "E",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32Б",
                                    "caption": "Аэробус А321 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 240,
                                "arrivalCity": {
                                    "uid": "PAR",
                                    "caption": "Париж"
                                },
                                "arrivalDate": "2020-07-10T10:35:00",
                                "flightNumber": "9233",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T07:35:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "ES50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AF",
                                    "caption": "Эйр Франс",
                                    "airlineCode": "AF"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "CDG",
                                    "caption": "Шарль-де-Голль"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "E",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "CDG",
                                    "caption": "Шарль-де-Голль"
                                },
                                "departureCity": {
                                    "uid": "PAR",
                                    "caption": "Париж"
                                },
                                "aircraft": {
                                    "uid": "320",
                                    "caption": "А320"
                                },
                                "travelDuration": 85,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T13:45:00",
                                "flightNumber": "1780",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T13:20:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "ES50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "AF",
                                    "caption": "Эйр Франс",
                                    "airlineCode": "AF"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\njLF+cAnK/wPZhDEsDncAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LH",
                    "caption": "Люфтганза",
                    "airlineCode": "LH"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "28813",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "10168.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "397.42",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "446.71",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "28813.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "28813.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "9768.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "18645.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 455,
                        "segments": [
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "arrivalDate": "2020-07-10T15:35:00",
                                "flightNumber": "1445",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T13:10:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "V03CLSE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                },
                                "departureCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "aircraft": {
                                    "uid": "Е90",
                                    "caption": "ЭМБРАЕР 190"
                                },
                                "travelDuration": 90,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T18:45:00",
                                "flightNumber": "936",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T18:15:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "V03CLSE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LCY",
                                    "caption": "Лондон-Сити"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "KL",
                    "caption": "КЛМ",
                    "airlineCode": "KL"
                },
                "price": {
                    "total": {
                        "amount": "16491",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "3216.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "227.46",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "255.67",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "16491.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "16491.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "2816.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "13275.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 475,
                        "segments": [
                            {
                                "classOfServiceCode": "H",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "73В",
                                    "caption": "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "AMS",
                                    "caption": "Амстердам"
                                },
                                "arrivalDate": "2020-07-10T15:55:00",
                                "flightNumber": "902",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T13:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "HS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "KL",
                                    "caption": "КЛМ",
                                    "airlineCode": "KL"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "AMS",
                                    "caption": "Схипхол"
                                }
                            },
                            {
                                "classOfServiceCode": "H",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "AMS",
                                    "caption": "Схипхол"
                                },
                                "departureCity": {
                                    "uid": "AMS",
                                    "caption": "Амстердам"
                                },
                                "aircraft": {
                                    "uid": "73В",
                                    "caption": "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                },
                                "travelDuration": 80,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T19:25:00",
                                "flightNumber": "1027",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T19:05:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "ECONOMY LIGHT2",
                                    "fareBasis": {
                                        "ADULT": "HS50BBLG"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "nil": true
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "KL",
                                    "caption": "КЛМ",
                                    "airlineCode": "KL"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "UX",
                    "caption": "Эйр Европа",
                    "airlineCode": "UX"
                },
                "price": {
                    "total": {
                        "amount": "18636",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "1806.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "257.05",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "288.93",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "18636.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "18636.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "1406.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "16830.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 705,
                        "segments": [
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "SVO",
                                    "caption": "Шереметьево"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32Б",
                                    "caption": "Аэробус А321 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 320,
                                "arrivalCity": {
                                    "uid": "MAD",
                                    "caption": "Мадрид"
                                },
                                "arrivalDate": "2020-07-10T11:00:00",
                                "flightNumber": "3286",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T06:40:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "VEXRU"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "UX",
                                    "caption": "Эйр Европа",
                                    "airlineCode": "UX"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "MAD",
                                    "caption": "Барахас"
                                },
                                "operatingAirline": {
                                    "uid": "SU",
                                    "caption": "Аэрофлот",
                                    "airlineCode": "SU"
                                }
                            },
                            {
                                "classOfServiceCode": "Z",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "MAD",
                                    "caption": "Барахас"
                                },
                                "departureCity": {
                                    "uid": "MAD",
                                    "caption": "Мадрид"
                                },
                                "aircraft": {
                                    "uid": "73Х",
                                    "caption": "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                },
                                "travelDuration": 145,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:25:00",
                                "flightNumber": "1015",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T15:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "LITE",
                                    "fareBasis": {
                                        "ADULT": "ZFLY5L"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "UX",
                                    "caption": "Эйр Европа",
                                    "airlineCode": "UX"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LGW",
                                    "caption": "Гатвик"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*S",
                    "caption": "Skyteam"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "4740",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "4740",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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\nxnQAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "TK",
                    "caption": "Турецкие Авиалинии",
                    "airlineCode": "TK"
                },
                "price": {
                    "total": {
                        "amount": "19241",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "8416.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "265.39",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "298.31",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "19241.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "19241.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "8016.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "10825.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "PAID",
                        "caption": "Платно"
                    }
                },
                "legs": [
                    {
                        "duration": 735,
                        "segments": [
                            {
                                "classOfServiceCode": "Q",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "VKO",
                                    "caption": "Внуково"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "332",
                                    "caption": "A330-200"
                                },
                                "travelDuration": 185,
                                "arrivalCity": {
                                    "uid": "IST",
                                    "caption": "Стамбул"
                                },
                                "arrivalDate": "2020-07-10T15:15:00",
                                "flightNumber": "414",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T12:10:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "QN2PXOW"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 30,
                                            "nil": false,
                                            "unit": "кг"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "TK",
                                    "caption": "Турецкие Авиалинии",
                                    "airlineCode": "TK"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "IST",
                                    "caption": "Ататюрк"
                                }
                            },
                            {
                                "classOfServiceCode": "Q",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "IST",
                                    "caption": "Ататюрк"
                                },
                                "departureCity": {
                                    "uid": "IST",
                                    "caption": "Стамбул"
                                },
                                "aircraft": {
                                    "uid": "321",
                                    "caption": "АЭРОБУС321"
                                },
                                "travelDuration": 250,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T22:25:00",
                                "flightNumber": "1987",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T20:15:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "QN2PXOW"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 30,
                                            "nil": false,
                                            "unit": "кг"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "TK",
                                    "caption": "Турецкие Авиалинии",
                                    "airlineCode": "TK"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundBeforeDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundableBeforeDeparture": true,
                        "refundableAfterDeparture": true
                    }
                }
            },
            "flightToken": "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\nI5lO6tn/H24ly53ybwAA"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LX",
                    "caption": "Свисс",
                    "airlineCode": "LX"
                },
                "price": {
                    "total": {
                        "amount": "28788",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "8878.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "397.08",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "446.33",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "28788.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "28788.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "8478.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "19910.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    }
                },
                "legs": [
                    {
                        "duration": 755,
                        "segments": [
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "320",
                                    "caption": "А320"
                                },
                                "travelDuration": 215,
                                "arrivalCity": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                },
                                "arrivalDate": "2020-07-10T11:40:00",
                                "flightNumber": "1325",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T09:05:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "V03CLSE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LX",
                                    "caption": "Свисс",
                                    "airlineCode": "LX"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                }
                            },
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                },
                                "departureCity": {
                                    "uid": "ZRH",
                                    "caption": "Цюрих"
                                },
                                "aircraft": {
                                    "uid": "Е90",
                                    "caption": "ЭМБРАЕР 190"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T19:40:00",
                                "flightNumber": "454",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T19:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "CLASSIC",
                                    "fareBasis": {
                                        "ADULT": "V03CLSE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LX",
                                    "caption": "Свисс",
                                    "airlineCode": "LX"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LCY",
                                    "caption": "Лондон-Сити"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": true
                    }
                }
            },
            "flightToken": "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"
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "S7",
                    "caption": "Сибирь",
                    "airlineCode": "S7"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "21396",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "4646.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "295.12",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "331.72",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "21396.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "21396.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "4246.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "16750.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "PAID",
                        "caption": "Платно"
                    }
                },
                "legs": [
                    {
                        "duration": 375,
                        "segments": [
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "321",
                                    "caption": "АЭРОБУС321"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "DUS",
                                    "caption": "Дюссельдорф"
                                },
                                "arrivalDate": "2020-07-10T15:05:00",
                                "flightNumber": "3571",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T12:40:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "VBADUSV"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "S7",
                                    "caption": "Сибирь",
                                    "airlineCode": "S7"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "DUS",
                                    "caption": "Рейн-Рур"
                                }
                            },
                            {
                                "classOfServiceCode": "V",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "DUS",
                                    "caption": "Рейн-Рур"
                                },
                                "departureCity": {
                                    "uid": "DUS",
                                    "caption": "Дюссельдорф"
                                },
                                "aircraft": {
                                    "uid": "319",
                                    "caption": "AirbusA319"
                                },
                                "travelDuration": 85,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:55:00",
                                "flightNumber": "941",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T16:30:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "VBADUSV"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 1,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "BA",
                                    "caption": "Британские Авиалинии",
                                    "airlineCode": "BA"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*O",
                    "caption": "Oneworld"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundBeforeDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundAfterDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundableBeforeDeparture": true,
                        "refundableAfterDeparture": true
                    }
                }
            },
            "flightToken": "H4sIAAAAAAAAAO1dW28cR3Z+z69g9LT7UGR1Xbq6BJoARVJaYWVKISk7ymIh1JXq9XCG7hlqrQ0C\n+ALkgl1k19k8O14EeQwge6NYvmn/wvAf5VT3XHpmenp6eJHJyLZlzXRXnao6dW7fqcusd/SvnOmt\nmJbqdt+6YTpHq4dZattp261+0MvS41V4dNRprx7a7upRx7rW6u1Wevikd2Pjr1bgn/WT1G4woayh\nKkHEUY0Y8QpJzwhKiNGWWYZ5ZNbXQsmiDtDa2N+8tbezvhY+Fg/NSbfXOXqQdY5d1kvd4HH+Ku25\no8U9LHrXfdaF0qu76sjZd1TrxN0YExp1mHqfWK4s8g476LBlKMEJRVhqRbzHMTNRqcOjum2gurGd\nZsCxtNO+27bra/mjyVJPQ7Mb63/9i63tzYPNX9zf3Xn87uajX/5yY32teDUe2VoY2oABa9UcWO+l\n5j3X2+qctHsb0Kvy16JA2k5726rnNggmGGGBcLwS0ZsE3+R4NY4ItDIsUVTQLdV+7/6v2y5rytWd\ndi/tPdtz3mWubco8zflpE2OFdARpLBLEEhshzWKCqOPceiqdwGyKn+u9Z8duY1G7x1nHpy23ej87\nVO30NyqwHVgQqo4pGXUcno85vi/QZpq1gGY35/qwwIDP4+EPRU9lWRqYUZR760b/T/2X/S/6L08/\nPP3djaY8sqnprQ7aLXFqX4QO5A0MmmvBMNp77jDt9rJ8RBu97MStr80+L8q7YsoHpYbfhsJx5O6l\nR2mvPPkY38z/W8UYB4EZFimqKGOC8GxBpzePj1upswPKFS+G8tIx7209UVkPxuBVq+sCE0vPimLd\nE91NbfobZw9Ulno/LDrzfCC2h+1O5rY6bRit6XVvd7L9qYK3W+pwSKRh6ZGB2TrJwgQ8C6PZ2Ht4\nKzc1Ew9HRTeLcV+QLnDiDBZGwVwwhZiJJVKJ1shJw8FKchdRtaQuBNvbVTpzgx7sh893Rh1voBCh\nwsrWzt7Byk/kvf2tn66gldOP+y9OP4L/v+p/efrb/tcrpx/2X/T/FwT/uyqlGfNpKHnQQZh9MGDD\nSdl2PZW2uk35qDud99L24erBPEIzVoZrkghuEfEsRkwTcDMSa2RiIgmLrTaYT3O23ekFWX4220h3\nKFl1RUo+qNs9cfZh27qM2pFQTjwccGouYwYF2g4ktpM3+eBEt1JzW2VuO+0WzC1Usb7MQN1Uy3VB\nA9P2shzfH9WcZrGh2gsCnjwSjIIhJwRJIwSy1vlIRsIJK6ZZbF3XQFNBWM6vQqOe5KNDJnQS3X93\nt8obL+VBxmPeHvd3WnOqtQe8wav+F7mufAkq8j38+/z09yv9v4DGvOr/T/85aM3zWZ0ppKHEnbKG\nDiSjk3WnWl8m1hnO59aI2hQnR9xUXtKYKIk8pQQxmEyUWCWQ0By7KNGREKaCxZczv5MSN+o72n/4\n4MG9uzt7czqy/JyP+bJgzufP/d+fq62bKw/vbr/11GVd+IIwqhjsP1QLzgIBqhCkS5ibM4R1Z5+s\nuhCvfo5qw71JZo7ZNaV2pUB89OxyVJFQZ6iF0ADLxCDGE4gPFGWAQhKa+Fg4qvQProqbd3Z2tx69\nEYpYDPUqq6EzTllBIqQM6CLzzCAdKw5qCN6YU2Mtm2e8l5+qs6th/4/gDb8N4SQ4yFf9Fyv9P/T/\nHPzl6ccD3/nqOqinxYRTSVBMFQ6pAY4SRSECkoxHxlIv1HQENKr/2tRzCzzH7sEboZ7FUK+yejKp\nYxwxjXhiIWaOKEaA9wyKpFGOAWjRyTQsOftUnUM9Pwel/ApU8+XpP4FOBsTX/wb09WWhohelmuWS\nQ8SzNoYqwxxE26Stlsqe3Xauu+feP3Hd3i5gHjeCVjUlChI+T0MGXNTddyozTwAeKd0aU5hfoCDw\nRHWLVN47rm072Rj0FRBs7uui9vH7B4tTL+VCg2pZ+lT1XOhViWcOaD+b4ut77lkpIfVv/a8C2jj9\nqP9tmLrGSamh4XsApV370GUHIDIlsd7cfngPDAk0VpnEHLByJm1Z6jCMcnpM6113eARFirzM8pnc\n6VzzfplcFVjkPlYxIQx5Ds6RaUqRFhgjxeNYQxCrI2KrEOSgn90KgT9XT+vMBThyHikWI8K0BHMh\nMdIOUxThhMlYOYBk8xxMTqMqeT5TaH4y/YwDbZZcrxwwkYZzxUQwiBDmWgMDxolFXlCtecJFMpNT\nqKSVZ9rfDplUdejuZMdVufeZStO5+Kos/Eylimhj/K4Za9dVgUguL6c8aGBO84Xx2z050i7boFxE\nQ3s4eFRdK4wpJKEPNy+799MtLerQ7dnxVL+rptPqmNxl3nKHIV02GtW/g0/8Lk/ivIA/IXR9tdzo\n7rjOvQHt0ghhbo47WW9l+23Q0om2F/Rvp21LvfscevV1/3vU//z0k9MPL7RjD/fHHYNG53TLglkv\nuj10cRFeichNNnZx4yLzSYQGygT4TcwnCMzvge6orMySP/T/G9jyWf/T/n/2/0RJtLQsmkz5Xokj\nQGN9LW9lXniWqaeutX0yWJIhIcc89WyOBXiq0lYIOCD6ABcjQWUnn1RXA+ty3N0AxhQf5hUKGeb2\n4SBWGX2dx8Q8CNgKnNp4Jwy39H1OlUZLPjPVjpxq7bvsaWrc3TawXOUh92j2PgMTAoq23KS9XUGz\nNIH31teqWp3vPe/asIxafJjD3YJWwZ+drfu7999+BEwuP51jdSEEutv2nfP721JgMaDZxNV6S7nT\njCBJKUdMCI8kiSXClnsmHPGcxE1c7XE5Wnx9UehEswu6GFh9S3VTEOhbUH0fxHr8qL5q5o5U9t4A\nFIS43n3QG4cI68vsiChW5Z64FviibrEut1dBfbhZAuLNgZuKgjwdln3W+nE+6s3twIiCAeDj8r5s\n5FFLZbfrR9o6OTyEYCmIz7JTBZ5i9d64+gLpy1sLcpUYRpnzHHEHxp6J2CFFnEcUzD+JrPbENZHA\nnF47bY3W6ODj4grvn6gctgfujj436Hc77Y2F/PSfTz9ezkAN2PQQyJRk+sEWjLOdLpqitdIcNRD5\nxmuskwZkdkV1PjdC4l9QmbAoQbE0HjFHYiQTR1BkvIhEogXxpIkdWSt1eZHJcW3VCvH0MsIaBvmg\nXLHpAJnUAEmSGOEwLABhFqkEcyRVFDvJvbJGNhrgRLfPCilq3Ma8ipeHT6lSmCRGIqIZBtbwBMnA\nHyq8UBTU10e12eZrh0+pcVLiOCxy8yALyiOFE4G49xEHFxqRyL8J+PRTcO0vTz/uP+9/Dw7+m5AY\nDCn8L+HD8zxP+D38eXle8HdrcynoKtm5kevrG9e5QG0+0ovAtK8JNS4PZ/8rTEMeP35ykb2697O9\ns2PZ+CY9H5aNb/KmWBZg01EK7iKUCCCy9LUR+AWp0ifdTRrJ86PeSC6FepMrBXqH+wqvCer9j2Kf\n0Okn/W9A/n+70v/L0B7B379f6b9cCTuKBk+/CV+/6j9fyfNRf8mXVL/P37wA0PU7sGGfnP5rIPFt\n/zlQW1KTFmDpO2fA0uT/KZa2jhgVNoUnDOAMs4IjreKwKU7ISGkcKdEoRPwRS182libXDUuvgNS8\ndaMJVL6xdmUwISXcYgZaQATRiGktkdZEIKWJoc7FGADUtcaEJIlUohKGXARaz7SKUEIogF6nnBfG\nR1g0wgE/CCbMVWBqLXPydEnVmmwuPudfnw3SVLUsKyJsMdYexRIAJDOJQVqwGHlPksRSLYSrPGZz\n9Uzmunv/JAVYBgzcPCpO4sSCg7zPPJ+splXXFS+WhLBvd9ru2bw9SpFW3FsGrikmwSFFEiU4ZojJ\nxDHOjPFknioOACeJyGoIWOcgTcDnxUGJjZ2HewFSDr5Nidx4dPOEriRf6z31wQXI2oH6oErUTEK8\nwlIh6hVYJxky3xIkT4Lieqqdp7xqV+VVFDUTDqds74SNNHahGLKwWWC+EM7szrlQpmtlE2u9RphQ\ng8CbgUuIEgseQikLlpQbXZUmvLJM37vbjOkRIT8c04WPKcXgfWUSgfL7JEIaxwaYjqlnDjNHps8X\nXWmmP/qbZkwXstbcXi7TZRKiA6EQkVE4PxEJlEBMgIw0mgmiYqOvlXl5tNdQ0qXgPxzXsWdecZGg\niCiFGKYaKUkt0ow7zTGDYKJyW9dV5freZjOuS9zYvqyvldzqumq1Or929oF6lod60I1ph7txZ/Ng\n597d3Z3HW3s723cPHm9t7m1XzuJGqcDj+7t5nf27ezu7m9XF7+6+c//u1s4cWpv7P6t+s/Ng89HP\n/+7gMfx16/7fTg5t7nDWn6ZdFTaFpgDkpoLeZSXwnUlSVXJoNUAfCjYWxA6CC0MTlCjQ/kjxJFaC\nGhVVan9+Wi8rb+P8Y/8FSOB3w9zPcsmbrYJcSfCKKOGkYveo7ZjOYLtssUWk9GCmpJouqSpLFisL\ntzvZ0eRW3Znnk9XS9vFJ75bzncwd5EeXSym8ynezI9mHiRlWGX2fHcZUMTVZbFK2qiVotFN8z7Xy\nNGdZsq7qLt1hK79ST9XqSS9trW5mmXp2L+1WLfQtrSB3bHdriivbqqfq1hCVkoCWE4UiGfbjcgmG\nmyiMsMRcOEUj5pK6NcRLO0gx6mE2GMnoHN7jg/uPF556yquf6WjFiHPNDljkDc1u4Q/bFf9cbFM8\n/XDl9KOQB36VH6553v/y9F/6L/vfhA2N9Xv5c9r1BybyIoeu7TLVCnN91mM2w1HfGZNaNDHWxVoI\n65DjLlzNQRRSsY0QUUYKZXFM4yqfP8W4ljkZSWrVvRhklccs8GiyYA3JAQRezmAPKoU8Tkky89sI\nqjH1RJsZdKlpe0N52/nAPFFgQfag7gJ2j1iupBQYA47w3AQYFydIBh+nVQJYQluaJHXaOtHfd9Pe\nk62O8z41abC+eBWi9qoX9aTMNAnTuGratvmxjcCB22nW7Y19zfSLmtRctkAcBgLedHp2XbfnbHMb\nlTdSnGzg3AmToNh6DyFwZJH0EIlQaq2NpeeuMgSeoXUmo7XIQhWsOPdRsK08fnBZUJPiJFhkReI9\nRPqWScC4sQL/QSlFztHIxRRHEHktOBI20cd2if0PQwKtAf1wCcNkreZtHJyF22U2TDZev4QzPnHV\nQGAvwppvlWg1si+x9iZhFJGwfMBIHCHFowT5SCuw54KD7Wkiw8sq3XLqNuruBalcTu/S1K5gSIMA\n4bMQHuQL0PCs/83KTyBUGJ3KzXfDfP3TJTSpiaytlYWtLpDKVLsLIuX2T/LrhrJw1G8AQqrfzYll\nSpFK/Sr0RUj//pjUolhGUEaosxxZzghiibdIhQtrIhERby3XTtedDC2Y1Omp1oMMWoQwRsoYWDN+\nMr/acYGZJypOPJtf1TqgPzhieoHM2i6RbWI1RBzuZbOAIUi4HYH5GCUCSxQb4KE1XsS4Ks85Qyss\nQQxXa/zEsctqfk+uUswtd5bT5/vp0XHLzSa7avlAHFNcRQyZRENAHHOHtAQ7qrTnKrgqRxcJ0QTN\nmuWFuXVUabFBVaxzVVaqWd6cKPfaOCkp54Zaj2KsQaIwV+GUKMl10jHpYp80WeAd0axZM5hbR5VW\nEK4vJ0HsqJCRQJYSAfjeGZRw6pBKeOyNYbGxTV1kTrNmIWBuHVVaFri+nEx0yIlEGDkiIBKVALuU\nMA7FQnAWa8l03ORw7IhmTXZ/bh1VzvVfX1Z6TRLlPEYgEizcVuSRxJFBwkJILyIvbKNDCyOaNSn7\nuXVUKYF/kZycSPNXFyi77XmBUikMqkgMXtRRgzMkDAVVoAU+vyURnJyNCZJOxWBQCFVCU+FN7R0a\nrzFhWCQJQ7pw4S0seeUrlS4sXfhx3ROFRBhqqFKIx4AlmWcCaSbBmxtOMQ33CrhFlvPHRGEpUVhs\nSmySC6zblPj6MmOGKyLBMiDHuUTMxTD/YYWeRxFY+tjHjDU663q9MmNJQnycyARhk+SXDXmknApL\nkcIYgjGVRp4nM9aE/o+ZsYvKjBnHPTMEdIxBoMKcDiE0yHDsBRUCC1A6d4UyYxekcjm9150ZG99+\n9Y/95yu3yFb0Y9brcrJelOBYUKkAFwoNMJthlFiMUeSIE8RJwebeNTtm0pua9fLYJrHFFryu4RDV\nOI8SxyC+AVTNPE8M9ouYl9O67lkv4zRlAqIxGe4qZtYzpGInkYhjbAm3JK69JWuG5pub9XLGCxUz\njnBgIpPBo2tvEGcscszKiMzdLF5J883NeoHh8oIAPjVMhvt6cch6GY8I1p7ZCATTLc/JNzLrpQQh\nsTcAtCgD7Y5iQPpUOiSljWkiMZN8+Zz2m5n1goicJXHwEDQKx7JIuL0g3H/oo4jbSGOj6+7onqH5\npmW98iJhOtJud3K/30ypM+XBhoSbOH+ZWIalAr8fRRicf5jGxEukjA6XEttwIUUT568u8sRRZU+Z\nlMxIDp10NEZMKAUBi08QRHwmJiyxWjcJU3J6xRkkhvN9PguuvhhVGmVFGuZI8kqNhLPijE3Rtfqj\nXrM9HE39+C6OS8ZnOnIqcmAGqI2icLU8AEttaDANlCRGc0ObbLTI6TXCZ0PLNR7rKiCW8XjPgdc+\n7T8HvDb6bZqP+l+EJOZymG12Ahri6DytMEzvTjysMUW1l7LUGZjq85z1d+7O2ac8eWT2Om1eXtRK\nk2O9xeFIF4NxgmAixgIwqJUcKcIocjyhAuBThMXcC9wz50/aNlxWsel7Ltt24Yd8TgA9FfB87us6\nSsXu9vmkpt/P0nJFqnZut+a/r6VV3bGaAvNGOdnoBbqdYkNwLLXSXCMMwSFE3coi5XSEhCcCQp+I\nAoSpWxoq9AgC5nrv0tijDOeuoQhMMfGiuSM1piT8QlOiPIR/CuCIZBFFVlinNLhhwHo/BHcaS7W7\nXOkhlkU+BunRiQi7iKhEMhzqN4RoSyMSW1x3i8cl8Kd63DUMumQJCr94yblKkIidCb9XR1ESfv8C\nOIcjEyuAFLVnNS6PQ7UytPBS+gpHuN6dvIJo6Yg+XGH0IBu6tumrMwbQVuIYLBMC8QpXJ4KlUjj2\nKBJGkfDbP5hV4bGreWZx8JOjpu784YCno/tV/g+YWzYcUnYAAA=="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "TK",
                    "caption": "Турецкие Авиалинии",
                    "airlineCode": "TK"
                },
                "price": {
                    "total": {
                        "amount": "19241",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "8416.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "265.39",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "298.31",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "19241.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "19241.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "8016.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "10825.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "refund": {
                        "uid": "PAID",
                        "caption": "Платно"
                    }
                },
                "legs": [
                    {
                        "duration": 635,
                        "segments": [
                            {
                                "classOfServiceCode": "Q",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "VKO",
                                    "caption": "Внуково"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "332",
                                    "caption": "A330-200"
                                },
                                "travelDuration": 185,
                                "arrivalCity": {
                                    "uid": "IST",
                                    "caption": "Стамбул"
                                },
                                "arrivalDate": "2020-07-10T15:15:00",
                                "flightNumber": "414",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T12:10:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "QN2PXOW"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 30,
                                            "nil": false,
                                            "unit": "кг"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "TK",
                                    "caption": "Турецкие Авиалинии",
                                    "airlineCode": "TK"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "IST",
                                    "caption": "Ататюрк"
                                }
                            },
                            {
                                "classOfServiceCode": "Q",
                                "classOfService": {
                                    "uid": "ECONOMY",
                                    "caption": "Эконом"
                                },
                                "departureAirport": {
                                    "uid": "IST",
                                    "caption": "Ататюрк"
                                },
                                "departureCity": {
                                    "uid": "IST",
                                    "caption": "Стамбул"
                                },
                                "aircraft": {
                                    "uid": "321",
                                    "caption": "АЭРОБУС321"
                                },
                                "travelDuration": 250,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T20:45:00",
                                "flightNumber": "1983",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T18:35:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "fareBasis": {
                                        "ADULT": "QN2PXOW"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 30,
                                            "nil": false,
                                            "unit": "кг"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "TK",
                                    "caption": "Турецкие Авиалинии",
                                    "airlineCode": "TK"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundBeforeDeparture": {
                            "amount": "7900",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundAfterDeparture": {
                            "amount": "0",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "refundableBeforeDeparture": true,
                        "refundableAfterDeparture": true
                    }
                }
            },
            "flightToken": "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\n/f8BP+s1APJvAAA="
        },
        {
            "hasExtendedFare": false,
            "flight": {
                "carrier": {
                    "uid": "LH",
                    "caption": "Люфтганза",
                    "airlineCode": "LH"
                },
                "docoDocaNeededInfo": {
                    "country": {
                        "uid": "DE",
                        "caption": "Германия"
                    },
                    "isDocaNeeded": true,
                    "isDocoNeeded": true
                },
                "price": {
                    "total": {
                        "amount": "42482",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "totalFeeAndTaxes": {
                        "amount": "13012.00",
                        "currency": "руб.",
                        "currencyCode": "RUB"
                    },
                    "rates": {
                        "totalUsd": {
                            "amount": "585.96",
                            "currency": "Евро",
                            "currencyCode": "EUR"
                        },
                        "totalEur": {
                            "amount": "658.64",
                            "currencyCode": "USD"
                        }
                    },
                    "passengerPrices": [
                        {
                            "total": {
                                "amount": "42482.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerType": {
                                "uid": "ADULT",
                                "caption": "Взрослый"
                            },
                            "singlePassengerTotal": {
                                "amount": "42482.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "passengerCount": 1,
                            "fee": {
                                "amount": "400.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "feeDetails": {
                                "agencyFees": {
                                    "amount": "400.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                },
                                "supplierFees": {
                                    "amount": "0.00",
                                    "currency": "руб.",
                                    "currencyCode": "RUB"
                                }
                            },
                            "taxes": {
                                "amount": "12612.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            },
                            "tariff": {
                                "amount": "29470.00",
                                "currency": "руб.",
                                "currencyCode": "RUB"
                            }
                        }
                    ]
                },
                "servicesStatuses": {
                    "baggage": {
                        "uid": "FREE",
                        "caption": "Бесплатно"
                    },
                    "exchange": {
                        "uid": "PAID",
                        "caption": "Платно"
                    },
                    "refund": {
                        "uid": "OFF",
                        "caption": "Недоступно"
                    }
                },
                "legs": [
                    {
                        "duration": 755,
                        "segments": [
                            {
                                "classOfServiceCode": "D",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "DME",
                                    "caption": "Домодедово"
                                },
                                "departureCity": {
                                    "uid": "MOW",
                                    "caption": "Москва"
                                },
                                "aircraft": {
                                    "uid": "32А",
                                    "caption": "Аэробус А320 Пассажирский (шарклетс)"
                                },
                                "travelDuration": 205,
                                "arrivalCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "arrivalDate": "2020-07-10T08:30:00",
                                "flightNumber": "1451",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T06:05:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "D10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": true,
                                "arrivalAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                }
                            },
                            {
                                "classOfServiceCode": "D",
                                "classOfService": {
                                    "uid": "BUSINESS",
                                    "caption": "Бизнес"
                                },
                                "departureAirport": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт Интерешинл"
                                },
                                "departureCity": {
                                    "uid": "FRA",
                                    "caption": "Франкфурт"
                                },
                                "aircraft": {
                                    "uid": "32N",
                                    "caption": "32N"
                                },
                                "travelDuration": 100,
                                "arrivalCity": {
                                    "uid": "LON",
                                    "caption": "Лондон"
                                },
                                "arrivalDate": "2020-07-10T16:40:00",
                                "flightNumber": "914",
                                "techStopInfos": [],
                                "departureDate": "2020-07-10T16:00:00",
                                "stops": 0,
                                "servicesDetails": {
                                    "freeCabinLuggage": {},
                                    "paidCabinLuggage": {},
                                    "tariffName": "BUSINESS SAVER",
                                    "fareBasis": {
                                        "ADULT": "D10BXXE9"
                                    },
                                    "freeLuggage": {
                                        "ADULT": {
                                            "pieces": 2,
                                            "nil": false,
                                            "unit": "шт"
                                        }
                                    },
                                    "paidLuggage": {}
                                },
                                "airline": {
                                    "uid": "LH",
                                    "caption": "Люфтганза",
                                    "airlineCode": "LH"
                                },
                                "starting": false,
                                "arrivalAirport": {
                                    "uid": "LHR",
                                    "caption": "Хитроу"
                                }
                            }
                        ]
                    }
                ],
                "airlineAlliance": {
                    "uid": "*A",
                    "caption": "Star Alliance"
                },
                "exchange": {
                    "ADULT": {
                        "exchangeableBeforeDeparture": true,
                        "exchangeAfterDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeBeforeDeparture": {
                            "amount": "5530",
                            "currency": "руб.",
                            "currencyCode": "RUB"
                        },
                        "exchangeableAfterDeparture": true
                    }
                },
                "isTripartiteContractDiscountApplied": false,
                "international": false,
                "seats": [
                    {
                        "count": 1,
                        "type": {
                            "uid": "ADULT",
                            "caption": "Взрослый"
                        }
                    }
                ],
                "refund": {
                    "ADULT": {
                        "refundableBeforeDeparture": false,
                        "refundableAfterDeparture": false
                    }
                }
            },
            "flightToken": "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"
        }
    ]
}
}
