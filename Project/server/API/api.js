const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
//     if (!req.headers.authorization) {
//         res.json({ message: "Unauthorized request", status: 401 })
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if (token === 'null') {
//         res.json({ message: "Unauthorized request", status: 401 })
//     }
//     let payload = jwt.verify(token, 'secret')
//     if (!payload) {
//         res.json({ message: "Unauthorized request", status: 401 })
//     }
//     req.userId = payload.subject
//     next();
// }

router.get('', (req, res) => {
    let data = [
        {
            "_id": 1,
            "source": "Andhra Pradesh",
            "des": "Arunachal Pradesh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 250
                    }
                ]
        },

        {
            "_id": 2,
            "source": "Arunachal Pradesh",
            "des": "Assam",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 250
                    }
                ]
        },

        {
            "_id": 3,
            "source": "Assam",
            "des": "Bihar",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 4,
            "source": "Bihar",
            "des": "Chhattisgarh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },

        {
            "_id": 5,
            "source": "Chhattisgarh",
            "des": "Goa",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },

        {
            "_id": 6,
            "source": "Goa",
            "des": "Gujarat",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },

        {
            "_id": 7,
            "source": "Gujarat",
            "des": "Haryana",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 8,
            "source": "Haryana",
            "des": "Himachal Pradesh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 9,
            "source": "Himachal Pradesh",
            "des": "Jharkhand",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 10,
            "source": "Jharkhand",
            "des": "Karnataka",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 11,
            "source": "Karnataka",
            "des": "Kerala",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 12,
            "source": "Karnataka",
            "des": "Kerala",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 13,
            "source": "Kerala",
            "des": "Madhya Pradesh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 14,
            "source": "Madhya Pradesh",
            "des": "Maharashtra",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 15,
            "source": "Maharashtra",
            "des": "Manipur",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 16,
            "source": "Maharashtra",
            "des": "Manipur",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 17,
            "source": "Manipur",
            "des": "Meghalaya",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 18,
            "source": "Meghalaya",
            "des": "Mizoram",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 19,
            "source": "Mizoram",
            "des": "Nagaland",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 20,
            "source": "Nagaland",
            "des": "Odhisa",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 21,
            "source": "Odhisa",
            "des": "Punjab",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 20,
            "source": "Punjab",
            "des": "Rajasthan",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 21,
            "source": "Rajasthan",
            "des": "Sikkim",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 21,
            "source": "Sikkim",
            "des": "Tamil Nadu",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 22,
            "source": "Tamil Nadu",
            "des": "Telangana",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 23,
            "source": "Telangana",
            "des": "Tripura",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 24,
            "source": "Tripura",
            "des": "Uttarakhand",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 25,
            "source": "Uttarakhand",
            "des": "West Bengal",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 26,
            "source": "Andaman and Nicobar Islands",
            "des": "Chandigarh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 27,
            "source": "Chandigarh",
            "des": "Dadra and Nagar Haveli and Daman & Diu",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 28,
            "source": "Dadra and Nagar Haveli and Daman & Diu",
            "des": "Delhi",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 29,
            "source": "Delhi",
            "des": "Jammu & Kashmir",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 29,
            "source": "Jammu & Kashmir",
            "des": "Ladakh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 30,
            "source": "Ladakh",
            "des": "Lakshadweep",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 30,
            "source": "Lakshadweep",
            "des": "Puducherry",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
        {
            "_id": 31,
            "source": "Puducherry",
            "des": "Andhra Pradesh",
            "price":
                [
                    {
                        "upto": 5,
                        "price": 250
                    },
                    {
                        "upto": 7,
                        "price": 500
                    }
                ]
        },
    ]
    res.json(data);
})

module.exports = router;