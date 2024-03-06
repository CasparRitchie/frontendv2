const questions_json = {
    "title": "Expérience convive",
    "showProgressBar": "top",
    "pages": [
        {
            "name": "CreateAudit",
            "title": "PAGE D'ACCUEIL",
            "elements": [
                {
                    "type": "text",
                    "name": "audit_date",
                    "title": "Date de l'audit",
                    "inputType": "date"
                },
                {
                    "type": "dropdown",
                    "name": "gestionnaire_nom",
                    "startWithNewLine": false,
                    "title": "Gestionnaire",
                    "choices": [
                        {
                            "value": "1",
                            "text": "Sodexo"
                        },
                        {
                            "value": "2",
                            "text": "MRS"
                        },
                        {
                            "value": "3",
                            "text": "Dupont Restauration"
                        },
                        {
                            "value": "6",
                            "text": "Eurest"
                        },
                        {
                            "value": "8",
                            "text": "Elior"
                        },
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "auditeur_nom",
                    "startWithNewLine": false,
                    "title": "Auditeur",
                    "choices": [
                        {
                            "value": "1",
                            "text": "Brun"
                        },
                        {
                            "value": "2",
                            "text": "Lefèvre"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "client_nom",
                    "startWithNewLine": false,
                    "title": "Client",
                    "choices": [
                        {
                            "value": "1",
                            "text": "Sodexo"
                        },
                        {
                            "value": "2",
                            "text": "Example Corp. 2"
                        },
                        {
                            "value": "3",
                            "text": "Example Corp. 3"
                        },
                        {
                            "value": "4",
                            "text": "Example Corp. 4"
                        },
                        {
                            "value": "5",
                            "text": "Example Corp. 5"
                        },
                        {
                            "value": "7",
                            "text": "Test customer 2"
                        }
                    ]
                },
                {
                    "type": "paneldynamic",
                    "name": "client_contacts",
                    "title": "Personnes rencontrées",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "client_contact_id",
                            "title": "client_contact_prenom",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Sauze"
                                },
                                {
                                    "value": "2",
                                    "text": "Vilmot"
                                },
                                {
                                    "value": "3",
                                    "text": "Renard"
                                },
                                {
                                    "value": "4",
                                    "text": "Kane"
                                },
                                {
                                    "value": "5",
                                    "text": "Leotard"
                                },
                                {
                                    "value": "6",
                                    "text": "Leopard"
                                },
                                {
                                    "value": "7",
                                    "text": "Letestier"
                                },
                                {
                                    "value": "9",
                                    "text": "Test 2"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "client_contact_role",
                            "startWithNewLine": false,
                            "title": "Fonction"
                        }
                    ],
                    "panelCount": 1,
                    "confirmDelete": true
                },
                {
                    "type": "paneldynamic",
                    "name": "restaurant_info",
                    "title": "Informations Restaurant",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "restaurant_id",
                            "title": "Nom du restaurant",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Café One"
                                },
                                {
                                    "value": "2",
                                    "text": "Bistro Two"
                                },
                                {
                                    "value": "3",
                                    "text": "Diner Three"
                                },
                                {
                                    "value": "4",
                                    "text": "Eatery Four"
                                },
                                {
                                    "value": "5",
                                    "text": "Restaurant Five"
                                },
                                {
                                    "value": "6",
                                    "text": "Restau TechHouse"
                                },
                                {
                                    "value": "7",
                                    "text": "Restaurant Tout Jeune Tout neuf"
                                },
                                {
                                    "value": "11",
                                    "text": "ioisziy"
                                },
                                {
                                    "value": "12",
                                    "text": "Test resto"
                                },
                                {
                                    "value": "15",
                                    "text": "Restau Phiphi"
                                },
                                {
                                    "value": "16",
                                    "text": "Test Restaurant"
                                },
                                {
                                    "value": "17",
                                    "text": "RESYRE"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "nombre_de_repas",
                            "title": "Nombre de repas servis en moyenne",
                            "inputType": "number"
                        },
                        {
                            "type": "text",
                            "name": "nb_places_assises",
                            "startWithNewLine": false,
                            "title": "Nombre de places assises",
                            "inputType": "number"
                        },
                        {
                            "type": "expression",
                            "name": "taux_de_rotation",
                            "startWithNewLine": false,
                            "title": "Taux de Rotation",
                            "expression": "{nb_places_assises}/{nombre_de_repas}",
                            "displayStyle": "percent"
                        },
                        {
                            "type": "paneldynamic",
                            "name": "Horaires du self",
                            "templateElements": [
                                {
                                    "type": "text",
                                    "name": "horaires_du_self_debut",
                                    "title": "Début",
                                    "inputType": "time"
                                },
                                {
                                    "type": "text",
                                    "name": "horaires_du_self_fin",
                                    "startWithNewLine": false,
                                    "title": "Fin",
                                    "inputType": "time"
                                }
                            ],
                            "allowAddPanel": false,
                            "allowRemovePanel": false,
                            "panelCount": 1,
                            "defaultPanelValue": {
                                "horaires_du_self_debut": "11:30",
                                "horaires_du_self_fin": "14:00"
                            }
                        },
                        {
                            "type": "paneldynamic",
                            "name": "date_precedent_audit",
                            "startWithNewLine": false,
                            "title": "Date(s) de(s) l'audit(s) précédent(s)",
                            "templateElements": [
                                {
                                    "type": "text",
                                    "name": "precedent_audit_date",
                                    "startWithNewLine": false,
                                    "title": "Date",
                                    "inputType": "date"
                                }
                            ],
                            "confirmDelete": true
                        }
                    ],
                    "panelCount": 1,
                    "allowAddPanel": false,
                    "allowRemovePanel": false
                }
            ]
        },
        {
            "name": "page_DISTRIBUTION ",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Le personnel",
                    "title": "Le personnel",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_La tenue de travail ",
                            "title": "La tenue de travail ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_La tenue de travail _3883",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_La tenue de travail _3883",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_La tenue de travail _3883",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_L'accueil, l'amabilité, le sourire ",
                            "title": "L'accueil, l'amabilité, le sourire ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_L'accueil, l'amabilité, le sourire _3884",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_L'accueil, l'amabilité, le sourire _3884",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_L'accueil, l'amabilité, le sourire _3884",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Les informations et le conseil ",
                            "title": "Les informations et le conseil ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Les informations et le conseil _3885",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Les informations et le conseil _3885",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Les informations et le conseil _3885",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_0",
                    "title": "0",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Disponibilité et état des couverts ",
                            "title": "Disponibilité et état des couverts ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Disponibilité et état des couverts _3870",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Disponibilité et état des couverts _3870",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Disponibilité et état des couverts _3870",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Le personnel ",
                            "title": "Le personnel ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Le personnel _3882",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Le personnel _3882",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Le personnel _3882",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Respect des horaires de service ",
                            "title": "Respect des horaires de service ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Respect des horaires de service _3881",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Respect des horaires de service _3881",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Respect des horaires de service _3881",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Environnement / décoration ",
                            "title": "Environnement / décoration ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Environnement / décoration _3880",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Environnement / décoration _3880",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Environnement / décoration _3880",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Temps d'attente aux stands ",
                            "title": "Temps d'attente aux stands ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Temps d'attente aux stands _3879",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Temps d'attente aux stands _3879",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Temps d'attente aux stands _3879",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Propreté et état du matériel de distribution ",
                            "title": "Propreté et état du matériel de distribution ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté et état du matériel de distribution _3878",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté et état du matériel de distribution _3878",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté et état du matériel de distribution _3878",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Propreté et état des locaux ",
                            "title": "Propreté et état des locaux ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté et état des locaux _3877",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté et état des locaux _3877",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté et état des locaux _3877",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Maîtrise des flux ",
                            "title": "Maîtrise des flux ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Maîtrise des flux _3876",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Maîtrise des flux _3876",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Maîtrise des flux _3876",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Uniformité de la vaisselle aux denrées ",
                            "title": "Uniformité de la vaisselle aux denrées ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Uniformité de la vaisselle aux denrées _3875",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Uniformité de la vaisselle aux denrées _3875",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Uniformité de la vaisselle aux denrées _3875",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage des stands ",
                            "title": "Affichage des stands ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage des stands _3874",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage des stands _3874",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage des stands _3874",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Disponibilité des informations sur les allergènes ",
                            "title": "Disponibilité des informations sur les allergènes ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Disponibilité des informations sur les allergènes _3873",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Disponibilité des informations sur les allergènes _3873",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Disponibilité des informations sur les allergènes _3873",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_État des assiettes ",
                            "title": "État des assiettes ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_État des assiettes _3872",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_État des assiettes _3872",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_État des assiettes _3872",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Disponibilité et état des verres ",
                            "title": "Disponibilité et état des verres ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Disponibilité et état des verres _3871",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Disponibilité et état des verres _3871",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Disponibilité et état des verres _3871",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Disponibilité et état des plateaux ",
                            "title": "Disponibilité et état des plateaux ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Disponibilité et état des plateaux _3869",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Disponibilité et état des plateaux _3869",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Disponibilité et état des plateaux _3869",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                }
            ],
            "title": "DISTRIBUTION "
        },
        {
            "name": "page_EN SALLE ",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_0_1",
                    "title": "0",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Propreté des chaises et des tables ",
                            "title": "Propreté des chaises et des tables ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté des chaises et des tables _3913",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté des chaises et des tables _3913",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté des chaises et des tables _3913",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Propreté des micro-ondes",
                            "title": "Propreté des micro-ondes",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté des micro-ondes_3914",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté des micro-ondes_3914",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté des micro-ondes_3914",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Propreté des fontaines à eau",
                            "title": "Propreté des fontaines à eau",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté des fontaines à eau_3915",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté des fontaines à eau_3915",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté des fontaines à eau_3915",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Disponibilité des places assises",
                            "title": "Disponibilité des places assises",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Disponibilité des places assises_3916",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Disponibilité des places assises_3916",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Disponibilité des places assises_3916",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Ambiance (acoustique, luminosité) ",
                            "title": "Ambiance (acoustique, luminosité) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Ambiance (acoustique, luminosité) _3917",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Ambiance (acoustique, luminosité) _3917",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Ambiance (acoustique, luminosité) _3917",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                }
            ],
            "title": "EN SALLE "
        },
        {
            "name": "page_ENTRÉE DU SELF ",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_0_2",
                    "title": "0",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Affichage des horaires d'ouverture du restaurant ",
                            "title": "Affichage des horaires d'ouverture du restaurant ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage des horaires d'ouverture du restaurant _3867",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage des horaires d'ouverture du restaurant _3867",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage des horaires d'ouverture du restaurant _3867",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage des plats / menus ",
                            "title": "Affichage des plats / menus ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage des plats / menus _3868",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage des plats / menus _3868",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage des plats / menus _3868",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                }
            ],
            "title": "ENTRÉE DU SELF "
        },
        {
            "name": "page_LES OFFRES ALIMENTAIRES ",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_0_3",
                    "title": "0",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Adaptation choix / espace ",
                            "title": "Adaptation choix / espace ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Adaptation choix / espace _3887",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Adaptation choix / espace _3887",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Adaptation choix / espace _3887",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Alignement et présentation ",
                            "title": "Alignement et présentation ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Alignement et présentation _3886",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Alignement et présentation _3886",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Alignement et présentation _3886",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Pain / Condiments ",
                    "title": "Pain / Condiments ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Affichage / réapprovisionnement pain ",
                            "title": "Affichage / réapprovisionnement pain ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage / réapprovisionnement pain _3910",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage / réapprovisionnement pain _3910",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage / réapprovisionnement pain _3910",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage / réapprovisionnement condiments ",
                            "title": "Affichage / réapprovisionnement condiments ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage / réapprovisionnement condiments _3911",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage / réapprovisionnement condiments _3911",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage / réapprovisionnement condiments _3911",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Qualité du pain / condiments ",
                            "title": "Qualité du pain / condiments ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Qualité du pain / condiments _3912",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Qualité du pain / condiments _3912",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Qualité du pain / condiments _3912",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les fruits ",
                    "title": "Les fruits ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) ",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3900",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3900",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3900",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Accessibilité / réapprovisionnement ",
                            "title": "Accessibilité / réapprovisionnement ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité / réapprovisionnement _3901",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité / réapprovisionnement _3901",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité / réapprovisionnement _3901",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les HO dressés ",
                    "title": "Les HO dressés ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _1",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3888",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3888",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3888",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Température de service ",
                            "title": "Température de service ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Température de service _3889",
                                    "startWithNewLine": false,
                                    "title": "Response",
                                    "titleLocation": "hidden",
                                    "rateCount": 0,
                                    "rateValues": []
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Température de service _3889",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Température de service _3889",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _2",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3890",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3890",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3890",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les desserts en libre-service ",
                    "title": "Les desserts en libre-service ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Température de service _1",
                            "title": "Température de service ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Température de service _3909",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Température de service _3909",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Température de service _3909",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Accessibilité / réapprovisionnement _1",
                            "title": "Accessibilité / réapprovisionnement ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité / réapprovisionnement _3908",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité / réapprovisionnement _3908",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité / réapprovisionnement _3908",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _3",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3907",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3907",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3907",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les desserts dressés ",
                    "title": "Les desserts dressés ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Température de service _2",
                            "title": "Température de service ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Température de service _3904",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Température de service _3904",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Température de service _3904",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Accessibilité / réapprovisionnement _2",
                            "title": "Accessibilité / réapprovisionnement ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité / réapprovisionnement _3903",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité / réapprovisionnement _3903",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité / réapprovisionnement _3903",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _4",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3902",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3902",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3902",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les fromages ",
                    "title": "Les fromages ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Accessibilité / réapprovisionnement _3",
                            "title": "Accessibilité / réapprovisionnement ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité / réapprovisionnement _3899",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité / réapprovisionnement _3899",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité / réapprovisionnement _3899",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _5",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3898",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3898",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3898",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les HO en libre-service ",
                    "title": "Les HO en libre-service ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Chaleur des assiettes ",
                            "title": "Chaleur des assiettes ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Chaleur des assiettes _3897",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Chaleur des assiettes _3897",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Chaleur des assiettes _3897",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Accessibilité / réapprovisionnement _4",
                            "title": "Accessibilité / réapprovisionnement ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité / réapprovisionnement _3891",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité / réapprovisionnement _3891",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité / réapprovisionnement _3891",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Température de service _3",
                            "title": "Température de service ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Température de service _3892",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Température de service _3892",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Température de service _3892",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage et information sur l'origine des viandes bovines ",
                            "title": "Affichage et information sur l'origine des viandes bovines ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage et information sur l'origine des viandes bovines _3893",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage et information sur l'origine des viandes bovines _3893",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage et information sur l'origine des viandes bovines _3893",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Dressage et présentation / gestes de service ",
                            "title": "Dressage et présentation / gestes de service ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Dressage et présentation / gestes de service _3894",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Dressage et présentation / gestes de service _3894",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Dressage et présentation / gestes de service _3894",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _6",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3895",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3895",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3895",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Adaptation choix / espace _1",
                            "title": "Adaptation choix / espace ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Adaptation choix / espace _3896",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Adaptation choix / espace _3896",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Adaptation choix / espace _3896",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                },
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_Les yaourts ",
                    "title": "Les yaourts ",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Affichage, lisibilité (nom, tarifs...) _7",
                            "title": "Affichage, lisibilité (nom, tarifs...) ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Affichage, lisibilité (nom, tarifs...) _3905",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Affichage, lisibilité (nom, tarifs...) _3905",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Affichage, lisibilité (nom, tarifs...) _3905",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Accessibilité / réapprovisionnement _5",
                            "title": "Accessibilité / réapprovisionnement ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité / réapprovisionnement _3906",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité / réapprovisionnement _3906",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité / réapprovisionnement _3906",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                }
            ],
            "title": "LES OFFRES ALIMENTAIRES "
        },
        {
            "name": "page_SORTIE DU SELF",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "sous_titre_0_4",
                    "title": "0",
                    "templateElements": [
                        {
                            "type": "panel",
                            "name": "element_Accessibilité convoyeurs / échelles ",
                            "title": "Accessibilité convoyeurs / échelles ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Accessibilité convoyeurs / échelles _3918",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Accessibilité convoyeurs / échelles _3918",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Accessibilité convoyeurs / échelles _3918",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Propreté des murs et des sols ",
                            "title": "Propreté des murs et des sols ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté des murs et des sols _3919",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté des murs et des sols _3919",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté des murs et des sols _3919",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "element_Propreté du convoyeur / échelles ",
                            "title": "Propreté du convoyeur / échelles ",
                            "elements": [
                                {
                                    "type": "rating",
                                    "name": "response_Propreté du convoyeur / échelles _3920",
                                    "startWithNewLine": false,
                                    "title": "Constat",
                                    "titleLocation": "hidden",
                                    "hideNumber": true,
                                    "rateType": "smileys",
                                    "scaleColorMode": "colored",
                                    "rateCount": 3,
                                    "rateMin": 0,
                                    "rateMax": 2
                                },
                                {
                                    "type": "comment",
                                    "name": "comment_Propreté du convoyeur / échelles _3920",
                                    "title": "Comments",
                                    "titleLocation": "hidden",
                                    "placeholder": "observations...",
                                    "startWithNewLine": false
                                },
                                {
                                    "type": "file",
                                    "allowMultiple": true,
                                    "name": "file_Propreté du convoyeur / échelles _3920",
                                    "title": "Ajouter photo",
                                    "titleLocation": "hidden",
                                    "startWithNewLine": false
                                }
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Auditer ce stand",
                    "panelRemoveText": "Retirer ce stand"
                }
            ],
            "title": "SORTIE DU SELF"
        }
    ],
    "sendResultOnPageNext": "true",
    "showPageNumbers": "true",
    "progressBarType": "questions",
    "showTOC": "true"
}
export default questions_json;
