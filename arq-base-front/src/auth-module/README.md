# Autentication module

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Introducción](#introducción)
- [Especificaciones](#especificaciones)

<!-- /code_chunk_output -->

## Introducción

Este módulo se encargará de gestionar la autenticación con los servicios requeridos.

## Especificaciones

* Si el usuario no tiene un token será redirigido al login del CAS para validarse con su usuario y password u obtener un service-ticket si el         usuario  ya se ha validado previamente.

* El usuario recibe un service-ticket tras validarse en el CAS. 

* Con el service ticket obtenemos un access_token y un refresh_token del OAuth con una duración limitada.

* Si el access_token ha caducado se ha de renovar con le refresh_token. 
  Está renovación se lleva a cabo en el módulo de comunicaciones mediante el interceptor adjunto al cliente http de axios.



[<-- volver](../../README.md)