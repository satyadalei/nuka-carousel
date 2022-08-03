// base64 representations of example slide images
const slide1 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEV3Mrv///+IS8O7mN3dy+7u5faZZcyqftTMsuXB1an8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD6klEQVR4nO3ZzU8TQRjH8elS2h4dYZVjCygcbYJ3GoNwZH0/FpXokRIOHm2ixj/bnZdnd2ZBoyYmD/X7ubTT7iTPr7MvM1NjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP9Xz9rf/FC5Pw3St3f+ZTl/L9Rs88p/EWSyKkEWqxJkuSJBCrsiQUarEmShPMjvfOjs21UIUnw4sCsRpGft7QkyPCqP0w93jso3F+2h2oIUB1X5ZO7f5kGGVV3pq/bD967yMibRF6SY+frm7n2oWSqf+lLH0lwLpW+FbvqCLEJFG+59FiQW/kyCLEPbfvat0feapiDDWJ59ZDpBYsKt2GwOvN921hTkTOq7Z/IghXwxCUGaA8u2s6Yg9RXyev7wytpNkwdxZ9bxeK+ysxCkftm8LD7GsQsUBRnEq6O+sMd5kEk4iUY2zFiG8YZwbu1p01tRkPp3P3Svff9Dp0HqS8TfaWchyHp92btmEU7CQFGQOsDcvQ58oDTIzJ9sfmTiAPkD67HbanorCrLuTynjajrNg8gvPwpBpjFX/W17tSsK0pMgRy/zIAO5FgYhSCVn1Eh6GFVB1uWM8ZIgQ3ny1RHCAMVrfJj0UBSkHy/2IAkyam6zyzhAn0OzSO6/ioKM2mmgyYL0mx9+GgdIym8iqQriJh7lN2klQZq7gLsP+8CSt2rHUFGQovLzqcvQujHIWQzSap6IioLI1PCpbyRB2qXJ5FqQpnpNQWRS+9w1fh6krz5IWPfZMAG5MUjvWpC70ldVELNfhdn5uHuNxO9vTRAzeOzLO/zJxS6n1sX1nsqCGLNThZVV/hwZhy8n+fMxpS6IKZZ+VyF/sschOLtNQdwUpMyCrDWVL/KpV0pRkO3tcXgzbW9VnUnjNJsMJ11UBankFjTpBCmaymdx9htrLnTOtWayu9PrnFrNAqSQ9Ug8cJjcvxQFWYa9BzcinSCypF3rrBD7OhdWC1m4Ljp3LXezGrsvumv2hSQyqoJM5ETxp04aRJZccRelL7soVbLVqCjIetwC3fUTjzTIIOzZ7cZ9LdccG737WkO/nygbiNnebz0Uz9++a3Ya60fmxtviyqZzFUVBTJVu6WZBHuR7v9JMtrVUBZlIfZ1pfNgHsu1ufCGRD9vOmoIMYn1uFt/5o+c81C3N3WsDoiqI/5O5zuEnVnkQ/1/WZvOPVfgHq0xn86qCmL2vVXlyw2KjTvKlejFP2p+OypP5TQcCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDWD5IhhB6xSXTyAAAAAElFTkSuQmCC';
const slide2 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEUEfMD///8jjMeBvd/A3u/f7vdCnM9irdegzefi+gpiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEnUlEQVR4nO3Zz2/bNhjGcVtxJB/HNl5ztNp06bFGt7vd1muPU3/uaHcNsGNd9LBjDGz7uyeSLylSsQsrQGQC+34usWzHeB9LJF/RgwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/zVU6sAntctl9e7fuy3otjoFuVDaxzsu6XZszSqufE+QE2U976WyjroEmUmQybSPyjrqEMSdEKXmvZTWTYcgpQ9yv5/aOukQZKHU2dfBZf1HTXuprZPDg+T1m77I36f9FNfF4dPvWKkH5kF9if12x1XdwuFBTpW6Ng8KpX6826Ju4/Agaz80qhRHe6vmYjl5FT75aDn5/Yt9uFETeXKmzvor8Luyn6vJi5V5GAcpqnokf2ie/GzWP5tk68/D2kc6smxh6lvpx7ZmV7ldu6fuUJbAc3OwkLGuR3siQTbBshYFkcLfuCBbWQCv9UHlh/je5rhnhVug9WoQBZGE53Lo32hORaXuyQekEmTt6tPfcBgkcy+UtlL/RnMlKfWDfECZSJB6hHxc/fRNmbknDKKvrFfTy0otbKWmJ8n+lHP38uVcPiCRwZ7L6JiZdSEMUtqLaKxsx1LIhHDVXsk3aUy/J9KGj8wXHQbZ2GZKnwl9WC/lb/Rh1l7JE1kQ6wAr/Tc3gcIgC/mmS+VOkHljfe7Oww9IpUU5da2GuWLCIK7AsQ3iF/BhPCbWiTSNQxdk+T4OkrsCcxvELxzj6AbEtfNHd+quGCMIUrj2to5gT5B88UX0HzOVxljXY2TeHAVBxv6GaSsn6NoeZuGdlN4SujdIwdi3gVoQZOS/+JmcIFe+j1TH023lqq9av0s3HhO/XRgE8bOAnodNYJe3as7hViUyZ9UXSmX6qa/2aGeQtQRpuGnqKqVtLWkNfzUHQZCmFyxvBJE2y7THyWw0uqb2rT7YH2R0M4g5mQ/2fOwRfJbqdAOyM8jwRhA7T21SurC0J5XtzqftMSKv7wliTmVaW1r5L6a8+Z7B7i6t1gJez8r1DX1iHlV2Ho3Xkal9sYzXR6F7kyTa3li2NbsK8coup2C9M8jjVJqsltzcwgZBTnzlm7j1Egu5P0nFw4dT+2DWTFWtpnEWNcPyL3kyvYnwuyFlK0jmK19I9yvLYGYSjpLpTYTfaBu2Li1/A5K5+xF5Y2HGRtm+1I7Nb32W7SDulvakdYdop7NZWmthsBm9ac1afr+9fc9ud00S2XJolG4SNZdOGMTdcskuysjtopg33thLObpT6fsuTOMRBsntTeyF7Gvpw+nA7WvVA+X8mXe88huF2U90G4jR3m99Kt5++sPvNNZL5v1P2Te7DjY/TkvO46tcNXqsREEeywtlfGjmgHF6QUpXTauNt2ueanbjMxd5Pmg1w2kEyaU+M5vGP/Rc2brd4UVzQvTQSi3I4InNYRqrOIj5LevM/2JlGnfZcxkmGGRw+U81eb2zkc3+rt6tguO/lpPXq11vBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjf8A3jya1ZJxHyAAAAAASUVORK5CYII=';
const slide3 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEUAiEv///8flmF/w6W/4dLf8Og/pXhftI6f0rv7VjBSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEuElEQVR4nO3azY/bRBjH8azz4hwZuoEe4+3C9kgQcF4LhfZYt9vCMelSiWNT9dBjIgF/N5mXZzzjJst6pdiD+H5OcbORnl88L48nHQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/68zpe75j9rtUt38dNqCHqpVkN+V9suJS3oYW7OKKz8SZKis7zqprKU2QRYuyONOKmupRZCJEu+7qa2VFkHGPsiX3dTWSosgG6XOPwyeVGmOrRZBSjvN9ZSfd1FaO/dffjOlHpkXuyQnyf2D5Eq9MC/2c2V72qIe4v5BprKB7MfW9WmLeohGzfly9iz8xyfL2W9uHI2UWpkXE7k1/ct+qGY/r8zLOEi+X5LUm/ofTU8yex//5X6yfNFZqXfKSlPfSr+25UmRdu+ey+Uw3MnP1Mx9PpkgG1ufWYOiIK7wlxJk5zbArb4o1Ln9eJbK0Mplg9ZzNwriEj52l/4Pv9ZXa9kHJ6lM9rXU99UgDpLJG4UN4v/QjKns4sJ+fpjK8rufIb+uvv2ozFAJg+iR9Wx+VanSBil1T5L90Wzcx4lsiBM3Oxam0wiDFHYQTZXtWHK3ILxrzInFsefHjsl+NjJfdBhk477q0gbZf/Mv9WVmB2Hw+Ucdl3yYbGx2zoZBSrcuFUpukPnD/S2o293stkplro+leTUjJgwi3/zUBlnIelvvIOZmqfN5pwUfcyZBlq/jIL71mNgglYyoad23lwk9II5lxBhBkNwvq5W7QW6O5/UnTJA3XZV6t1E0xoMgvr3VO7q5L1t7mdXrb5nQMcrUt4FaEMS3t3aBzeuC6x2wrJub3unGY/a3XAVB/Cqg12ETWPJWwT280g3Yqqti75JVpp/6YK8OBlm7ILUX8efTaBpda2hPPoMg9aNJ8VmQsG8fxxtkf6SpfaUvjgcZHQuSpTJJ3Fm0bUAOBjn7LEh0JLeTnbJ3Tyvbnc+bc8S9/y9BNskEGUx+NOVdH5nsMrSObOFF3bL0T5986jkb7yNz+2YR749G8IB79HegXmQ7c6oQ7+zuFqwPBAmOHNIKoluQWRRk6CvfxK2XVfkgiQyti4u5fbGol6pG07iImmH3kdLvHus0JnslS1DRCFLPgtJ1v+4WZCbhzu8eizR+Vyjt6Y57XgofrOQBJJPnEfeHuZk89aLr3+iX/2aLZhD5poeNJ0S7nPkn32EiLcpGpuqmsWrpxWqu32g+s9t7MZaRt06kaSxklTUjJAwij1zuFGUkpyh2KA3dw3qeypPV2B2BXprGIwwysWd2l+5ca+Iql3Mt/UT1NjM7aV+1R3JznigHiNHZ7/5WvHp7608ad6byj3LcsPCdVxJz3RwtWHquREG+cW8U8aVbA+qfp7d9lR4rpJ5GG+//S4CcxmcS+XoQvKvS2A73Jq4+3cU3fuh5Z+uWy8vwhtR3aNtD0Qc9tTnM0hMHMb9lnftfrOy08Gcuus9USf3voKu/qtnzgw8b2Z/VzSq4/rScPa+vs0+v1c33p60NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/oH8AhXqePiq6fSoAAAAASUVORK5CYII=';
const slide4 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEXjvBP////mxDDx3Yn47sT79uHqzE7t1Wv05aaMUrrcAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEMElEQVR4nO3Zz2/TSBjG8ambODl2oGY52rS7cCQS3ButuuVYt7C7x4QFiWODOHBsJODvXs+8M/aMCSt2pRUv4fu5JGPH0jyZHx6PjQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+XAfWfuVB5f59kIU9+v+q899JnW1e838KUtg9CTLflyDrfQmy3JMgM7snQaa6g3zNQbHYkyDd5LsfQSb2+PsIMjuvLtKDJ+fVnzfJ+bW9pylI8aStfl35r3mQWdv1nN+Hg69cT6qSJK29VRSkWPr6rdx3qXOsuRvK1taxeOiL9n5/ZXegVhRkI/W7675nQULFr2KQrZTtbbyy6S7SE2QWqmcfm1GQkPB+KPY//CleurWXioKsY/3umTxIEU80EqT/YRWuLK29URSkGyF/rH55Z+2xyYO4nnVRP2ztUoJ0H8dvizeh7YyffI2eIGUYHd3ArvMgjXSiuZUVyyxMCK9t16G8jWtENUG6//3MfU78H50G2bieY3xLuGK3rLpyxUI6ofGTr6IgXYCV+yx9oDTI0nc23zKhgfwPu7aTCfjQt6GaIFNfHeNqdJkHif/8XIIsQq7urIz2xvdJNUEOYpDzF3mQMo6FUoK0sUfNwxVb39XUBJnGHuMlQWb9na8NDRTG+EyuKGUIqQkyCYNdJEHm/TS7DQ10K8VCTkylh6kJMs+WgUmQSd9Ui9BAIZeRSBvpamqCuIVH9SmWkiD9LODmYR845m1dGxattKSaIEXr11NvpbQzyDoEGVwOQ15NkLg0/M0XkiDDo0nzWZAjd1DuJnqCxEXttSt8OchkFGRp7/iTeoLIc5+VBcjOIAefBbkzjH1FQcyjVlbn9XiMhPO7gkziYl5TEFM+9dU7+8Jgj10r3XbIcg3PjN/cSStPVvl9pJaTTX5/9LQGMcXW7yrkd/bQBOvvKYhbglRZkMO+5pt86eXpC/LgQS1fFsNUNVo0LrLFsFyiL0gb7gcyEpIgRV/zZVj9humpyCquZtZaxt2dg1HX6h9A3G6KL4YfzrL5S02Qrew9uBYZBUkeabMnxGE6c9QE2cQ722Y0a7nJqnYnxs/sm5jIUxOkiR3Fd500SHzkCrsok7iL0g5bjUZRkGnYAj11C48sSCl7dqfW9sXapPtanpogbvF7UccNxGzvt2uK65d/9TuN3S3z7svinc3XKmqCmDbeDNxYyYL8HE40eTF5r2A0BWli/UbLeNkHssNufBEjn6WX6wlShvq5VfzoRc9rqXcsnu5oEEVBzCPJ4RdWeRD/Luu4f2Mlb7DSV29GVRDz8GNbPbvZdab40D5fJeX359Wz1a4fAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAwd/dw5AJ/aPAOQAAAABJRU5ErkJggg==';
const slide5 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEXbfAD////fjB/tvX/23r/67t/knD/orV/xzZ+6XcdCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEmElEQVR4nO3ZzXPaRhjHcSFAcOzWpvVRSkiTY+gkdzS16xyjJn05gptMezSZTKfHMNP2765299mVVoEkeMZox/5+LrYQzDw/tO8kCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHB/DZT6whcjd8eCqLDyPUGUMztKaYe5j0HSuxIkuytBJnclyFCpc3Gc2g5ywPA7VWe3Xs7NHRBkpE5uvZybOyDIWH176+XcXKfmycXssv3iw4vZb9f+rd8ct7bPS59Vsx9W5t8wyKSqu/0vzYtvzBglSQr19TGL/AJpaepb6f9tza7yhRldc3c5tKOt9PG1+qqPaj9hY+szXTcIIoX/5IJsZd74IB972U+9+/iJ7WnSCSIJz+TSv9F28oVa9lXybmtXn+677SB+MVXYIP6NdiZfyJOJRt1Dfl19916p0yQMolvWZf64UqUNUv85fZf+Kc+ubmhP61Hi9fc9lh7IpHfUHTsPgxS2EU2VXbFMZEB4q2znKNW1GQx+7Knwrvp7X+q/I/NFt4PUXcSMtKUNMq67vb5MbSNMKvW26VsRqAOs9N/MBGoHKU1jM09GHpB5Y/3szACsVNUa7vo3Nk0q0YW9DIPIN2/aVqLrt7nqu7q3N/uqSB7JwAW5+DkMkklfMDuoRDclWZJMzSeafVUkS5WxazFGK8jEzXx1BPuAZAKcmE/oWeX0ygxicWysRqo9sbWCTH2b2coD+mAvU3NjKIPYXAXfRH+mzTIwCYKMfIELeUCuL5hIUxnE9KC2PGK9e+kmMvvPXbWC+FFAj8OmcJe30pX7nPX7olgGp2YQPXtnr3YGWUuQRt1b0j/+snczFckOS5aGdoJuBWm2JsVHQYIFfBXJ5t0tal/pi/1BRnuD+Ammb2+kOt13dwYZfBQk6BTrSMbfJHli1xqzvNtH5P5nghTxHNZnz015yz2d3TWt692fjihIkjys7FIjnEdye9N19j1rqkE0TUtLt+ZUIZzZ5RGsPx2kiCqIng5mQZChr3wTLr26ijhGrQcPcvvPohmqOovGRbAYth9Jz8/lbp0zinmkckNQ0QmS+spLWf3K7JGahM1kso1jZi9dGYNO0/IbkNTtR+SNE9N5Sr8NqeLYkGzdVrXoBpEtrTlNSVoTuB3Otq5BTVQcJ3UbN+ZsOqOWHqxyfaO7Z9+YRO5u8iiSvW7hRlnTdNpB3JZLTlFG7hTFtrGx24aUfr7p11hW4XOz8GgHyeyZ3VzOtfRlnvhzraFczmM5RtGL38vcHSAGZ7/1d/3q6nd/0lhPmSdX6XtlH6EeAk7snj2KLmKOFizdV4Igj+RGEV5KL9/4JeSqr9JDhauns4z3Jz7uND51kZfmc36nFcXgW8ukPr2K7/zQY89El+5y3n4g7mcg+YUoBk9sPWYMDYOY37JO/S9WtnR/5pKV5oNRjL3W43+r2Yudm430n+r1qnX998XsRXOdPdv3OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7rX/AfqRnDiDqypuAAAAAElFTkSuQmCC';
const slide6 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEWqIx////+0PjvUkY/pyMf04+O/WlfJdXPfrKvtq9n9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEzklEQVR4nO3ZzW/bNhjHcVt25BzLJup8lNuszXEeunu9LUuPVbu3o5N1QI9z0QE7xsDav3viw4c0qTjFFCAKh30/l0SRAzw/81XUaAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8f42N+Zd/FO+a6ry+y3purV+QP03r6G4ruiVXs0krvynIoREvBqirt15Bti7I8RCF9dUniDaIMV8NUlo/fYJc+CAPBymtnz5BmrZXXZbtgJ8PUlo/PYJM2k/90f5cGVMPUVo/PabfA2O+sD8XLk9megTZ6MTbtszVndZ0Kz2C+C5VGPPqbou6jU7Ns7PqPP7jk7PqV+1HRVhAGvNgwAo/p3jeVN+t5dc0yKydmMzPuz++tZNt5ZLMdIiMRs+//3awUj+rWEl9a/u7q9lXvpRlovaXE7dsuNm2XQ5zaQhv4+qTzV8SRAt/7YPolsSN7YPsNlmzeKeRBNGEc70MH/SzbmZbk7DTeDRKgxT+xsIFCR+s9Gp9f0Xv046QX9ZPP7hJKA5ie9Z5/awxKxek/XH8vninbbexs++pzGp5KHV0LGVZiIMsXCeSTe5IepZMCL+7daP9vLuVy4PVRAftVL7oOMhG9x4rF6Qd3a/tZeE64bZtQZnuTCaT71T7eimB4iArXfEWxjeQfLBti7ncnesDSVUPX/UeB37zKj0mDuK+ede3RrZ+XcnHMtobM9dZLZNpeOyDnP2UBin9Hqp0QRrNZYPV9vKoiafje3eQTKNRkFnY1TbaQLo3nMl/NKayk9pTu0rWQxZ8k2nSNaIgh2HF22oDXbnLQm74pihzeWg/DNtAKwoyDU211Aby9UokG0TuX2Syjbcbj+qTv4qChFnAzsMS2OdtbBuGFWTiJ4V7VsiQnb93V3uDXGiQnVcSRE9PchntOon+IBdRkN2jyeJakAcyA1y529tMjlH8pvaNvbg5yPR6EO1qm1zOGt9qdXYDsjfI+FqQhxKkdrcXbjucgdMmbDXSMaL39wZZRUFueuswuPIbv9XYO9h910qOr7Zpzlw8sY3yqLuO1O6mH+zJureMguTStaxiK6cK6cquTXCxL8gmwzEiSnmEjYJMQuWbdOvlhF19mzOLWevx49r9stxNVZ1N4zLZDOu/jEPOZR7rSOMX6EUnyO4odKW7Xz3HKiThYdhsrvJY2UMZ407XCg8ghX8e0Q/OZPDM/BalyORNz9afHiy6QXyXmXSeEN10Fs5+DzPZ/W78nLPpzFp2sqrtje4zu25JVjpINpk8j4T3NNJ14iD+kUtPUab+FEX72IXbx89yeUL0L55OpKvHQUrXeU6MCZf1KJxryZ6lfdRd5XKyNZN6/AFicvbb1vjm8rdw0tgumUeXxQejTVjGTyc58GchMlaSIF/qjUV66ZeNpb9e31PlHQtfT2cbH75zfxpf+Mgv3D/6R60sVpFWqfXJgWESxA4HW7e/PEkaJDRJNu90T10OmUPTIPIu6zi8sXKV785c5M1cLke/1rOPTfVy7/da/N38uI6u/zqrXkbXZXv76zstDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/6J/AH4ppZh2spNNAAAAAElFTkSuQmCC';
const slide7 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEXjrEr////mtmDx1aT46tH79OjqwHfty43037v7W6oWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEKklEQVR4nO3Zu2/TQADH8cRJ7IwcraFj3BbakUiwN4LQjjXlNSallRhJ1YGRSMDfje/pO8eRSqQ2J/h+luYaW7qffe90OgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/qyvEHf8ZuX8siAhr3hpE+H48TO3+AkFiQ5DY3D3IG2cixLcHqt7dbTL8zsXufVVnc5sEKcXj+6rO5jYI0ouxZTXrnE3zU/+fB9P8c7PWRTwtK3lZ5q9n6mMYJCurbv+x/ueVHKHyRpJJNC0rmaj6zeRnXWdb87EaW0e22NNj7V5wdybEiwet7noLXb8d+TkIYir+zgZZts0aA5E/cH3XyeysJh9sEMQk3DNFd+FT//ZxWNyiua3fk04YJLFfFDqIu9B/BdVFJ1uodJuqh3yaPb8VavDxg8iWdTo6KsVEB6n+7N4kX0XQKYZCzLZR61Wp6R1Vxx6FQQrdiIZCr1gyMyBcC3Fe3x7P4NszbaOvHrQfZGFmuokOMqi6vSwmuhEaS7+wVX3TNlIVyA8yMQ+7EPYFqQurd1cPwBF1kYFqUh255D0Pg9gnP9RBxrYRdb3ePoxnfdK1QaYfwiCp7QupDlLaRjS0d3Tka4plFpFvZFaXvCCZm/lK84JMH8+8O8Z6pIhBP2jlXpChG2aX5gX90MXEG38jWsIPg2WgF6TvHvzYvCBb/XqRkkW0y5ULj/y3LXlB3Cggx+GgW5fuHfajmQ6rhlKq9dSNLrUGmZsgNTsjRtTX3dLwrSp4QeqtSbES5JH5JqK+Xi9qL2RhfZB+W5AymnldujK1kwuQ1iDdlSBmqEqDZdf2HZd6dT5q9hHz/dogw3h2h1r6SlXvZE1nt01rZTHSjWjQMg5KvbMK55GR/rII58faPMIfTpKlOlUIZ3bzCubrgiwbBxFRSNUW1gvSczVfhEuvWhnNfr2yvz/SH8b1UNVYNI6DxXB9SyLiWWl5y76iESRxNZ+Y1a+ZPRKbsBfV6DuxzaPbaFputkvsfsRcmNnO049oySg7rFllFM0gdkvba+wQ3XDWjWd72JE9ObcfwlFLDlYj+UVzz76wiQpvq7h9hX2squn4QeyWy5yi9O0pimtji6imkYE5Aj1UQ5AfJNVndofmXEsWRx3/XGsZzZmWlKnzRHuAGJz9Vq/i4vKLO2mspsydy+RWuJ5RxjUflv6RbhDkWXj2a4uu+iKm+VD35bZlvD4HEvVpfGIjn+gbwyPH7UtN/eQqvvFDz7Wuty0ehi8krTdYcTjWOdTCKgyifsvadb9YybWKd+YS18QuHf0q87PWqS35Wb6feeXv0/xs1nYhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo/QFo05ESIEGYPwAAAABJRU5ErkJggg==';
const slide8 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEXbfD7////fjFbtvZ723s767ubknG7orYbxzbYi41F5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE1klEQVR4nO3azXPTRhjHcUWxZR9RiNscJZKQHGum3KN23HBEkAJHG+hMjzXDoce4U/i7q332RbvCZqLMRN6Zfj8XLL/MPD9p30OSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9fB3l+xzeV00V+8+xhC7qvXkEuc+WfBy7pfnTNeVj5jiBZrv01SGU99QmyNkEeD1JZTz2CpLm1HKS0fnoEGbsgr4aprZceQZqWdfwpPa3jbFs9gtS6m0/zfDZIaf3cffjN7JPYRNlJ7h7kMM9fyoumr/z0wFXdw92DjGz9TaKrhy3qPjo1Txaza//N08XsnZn/xrZFZfbR7F/6cz37dSkvwyCTpkPnb9o3P6rBdqaTNEEK/es8fzRYqd+VVlLfUr3WNdvK5zJNFPbyUE8bJ0mS+JGjCbL2VhpBEFP4K1vzxkyAt+abhbybxtK0JnaCVn03CGISnphL98Uf1ZXfR672UnjXytb3QxIGcYupUgdxX5QJ0I1a01iCND3k7fLp52bBkYRBVMu6Li7qvNJBKlmT/GmeXfPpkfy+jGQhb2foubR5P0ipG9E01yuWiRkQ/tB9ItXJJV+xj8K77Hymm4ofZG1udaWDjM0yN9WNUL192/xzZoexfRuZTqv7rB+kMre8zO0Dki82z04qP2+e0LPkQx3LoOUmNinID2LuvLStRNWvczWfSm/Patv3i8GL3sbNB4vfwyBu6ZHpILXJpYLJLy5NkF+GL3qbcbAK94JMzMwnO4/EPDFlYn5h55Xb4Yr9nlEwDXhBpm55vjEP6FZfpuYDO9EfF0PWu9PULQMVL8jIPaq5eUB226EjnUe2Z1cNZPbVXnlB3CigxmEJbPPW8gxrNT8mF1Usw28qg8/JJ321NcjKBGm9lPlH5sesjmRmt0vD3+TCC9Ku08tvgjySj3WTOo9lIrGDz2t1sTvIqBPEzvtqFDjaU+kdH70+uzXIwTdBjtSYZebHprPEcrB1WbsZOuwj5vOtQSq9LUm8KX//sudS3tWOzm6bVtCna9egVjGd0KmTT7UECeeRQn9YhvOj1gYpYwqSpBuZD8KZ3TyC1bYg7ZHDzj9o7UcmW1gvyKGrfB0uvbT2iRzE8USePCn0i3k7VHUWjfNgMWx+4hbDsTQtd2fLTpD2mKcyq1/TllJJWLlBdx3HqOWG0YNO03L3PLX7EfPFiXSeuXsOmzjmEVdG2Q1itrRympJ404UezlZ2LLB7+H1b2zu77oxaqtRCfdDds6/twZFuk6NIjkzdsZQ0HT+I3XKZU5SRPUXRbUw9J/XDtIpkjzg2R6Bncof9IJk+uToz51qZ2Qu251rNfqR42gxpcZxrqcXvdWEPEIOz3+Zev37/wZ00NlPm4/fpZ/MkzFG9EkVfl52epvpKEMRuZsvw0owB7Soyju2I9OVty3j3fzTsaXxqI1/J7/SfVfJozrXcQZvUEwRR3UHVbS/P/AfS7hkjOdeyB20zWViFQeSmH7u/WOlu0Z656B3Z2+Er3uXiSz17sfUAIf23vll6138vZi+869NFffM1AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAof8AJK2mOYokTFEAAAAASUVORK5CYII=';
const slide9 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEWrI/////+1Pv/Vkf/qyP/04//AWv/Kdf/frP/TR9NGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEx0lEQVR4nO3avW/bRhjHcYmSKI29RnQ9komTdCyBdg9ROM4Y5n2UnBrIWAUeMlpAGvTPLu/lOR4ZKZAESD6g389S0ZKD+/nenjt1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+v4ZK7fhD7dNl9mJx1PYcbK8gN6qR/X3kJh3Gtll1W74lyEgZ5ydp2L72CbK2QdSzUzRsX3sEcR0SaZfsEaSQICrGWbJHkEqp+efkU/PZl6dp2152D5K6rmiWrl9O07a97L78zpQ60/9tAmXHbtUBdg/S/PDOvCiVWhy1TQfZPchSqVze/e24jTpEr83Ty+wq/OGjy+yDW6NKNbcvZvHM9uT3OvtzYV52g0zrZka/a3/4V1CTVOqB+5BSP5+sqT+UVKZ9C/3atllaXpptIpfHTk1S27luZvvZydu80cq2z/yBO0Fcw19JEKlJ7vRDLf2QxLL+TmWD1lO2E8QlPHeP/oOm3Ur95P4BJYPsni2lfXqAhEESeaOwQfwHzb4RBpnfT8t7mhnyfvHk1jYnDKJH1lX+tFaVDdLWJLrvfJAkkiCpGxml2RfCIIUdRDNlK5apWxBu7HLr50gsW/vIHSjG5g8dBlm5urayQSbNtNePiR2ElaxV00iCjF2FkZpAYZDKDZlCSQeZDzZ9pxfgtUzxmdq08Z/eREoNM2LCILI/uJb6rXxoemAl/TCMJMhQgly+7QZJpfRIbUv9Djgzv7FsOyiOIJNO8RoEmUp520SwHeRKqqn5DZkyqYokyLhzexAEmfmqdu066M4+JuaNZpGY5wN7JxTFZJ91rqaCIGPfVaXrIKnWTSS9XZ5f622ljiOILjyyb/IUBPGrgF6HTWDJW5s+LGWjL+MIktSmnvpsnzYGWbogLT1bJu71fBXHzi6l4XPzEARpjybFd0F0dWL/As0aXUZysyVF7Wv9sD3IuB9k8Ni+XqwjqX7tuU/Z1XRjkOF3QWyZVdqerCI5jwwGv9pBkuX9OeLe3xYkua3ffGsrgAikf5jmPdsy2WVobb4aTaI5s2uPdKec9feR3L5ZdPfHnml7xIpBsja3Ct2d3XXB8odBRpF9sWDPR0GQkW/5qlt69YwjuaB7+DC3L8p2qeoVjWWnGHa/8uVfVw4UkVyZ+iNr0QuS+JZXrvptD+l3upvc7rGKo0Jpd4Fhb2j5A0gi5xH3wamZPEvZz6tINna/Lxf9IFJ6jHonRLucFa4joll9/chY9VYtf9/eP7PbIlEOZLNYFq1CVlkzdMIgcuRytyhjuUWp5ZbIvLuM5TvEibsCvTBDJAyS2pu3C3eWTdsj4Uv7qEdeWkdSxJvi9yqXC8TO3W/TFa+vP/qbxmbLfHCd3Kr2uut9/mQdyxQxVwuWniudIK5Ol7tfeXRrQCGPcYysoEG9Mt5dkLS38XKScpNbzjGRHEbMKPdVfO+Lnhvbbnm8CDvEHy1j6ZDmOGJzmIKpG8R8lzX331jZk5S/c0n1u+rdPbR4m6f/1NmLjX/Y5Gv9ZhE8f+n8D1rp17q9fwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOI/866lJ++dUAkAAAAASUVORK5CYII=';
const slide10 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEXMzMz////Y2Njl5eXy8vL4+Pjr6+vf39/S0tIkPqt9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAELklEQVR4nO3aS2/UVhiH8cnc7GVeyIQuM2q4LJmqSCzjqGm6xBKJWGIpRCwZJAJLW9DSj12f+7GnKJ6qk5zF81sk+MQjvX+Pz8XHjEYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP/Rnuzf2tKXX5W/1zuq5z/TZe+J9Fo2NeGUSkQOd17ZlgYHWftTvonyx+5r28rgIJU/pdBBDnZf21YGByndKRMxnt9BdVsYGmTiT2lETv8+FvnpLsobbuiotfRBKnnY/lzpnwkZGOSr+CAiJ+3PuSx2W9i2BgX5+Ux8kEykbn/lIh92Xtw2BgWpJASZ2ymkkrc7Lm2Q9hpf6ivaKftJ+fqDb8l/LV+/NO1xkJk80L+X8uruyv2hv1Rhi6ORH7V07XPVWNuDvApjbByksTn3Uhi2xqWu7NGoEyTXrW9skMfRtHdzfX3tgqx1Xx+Npvrj9+xPO6cddYJMddthnEpCR3BBVrZpnsL4W9kgrzpB1qZxqQ9m9pQH7jMuSGVHqyyBdWM7dB4+y5/oeysKUsrBl/yTFPpgJXJefy/DksoFKdT32BonsNqamKmgUdc0BMn0fZS3S8J9nVV1ganYskOQ0ge5/xnR9tNMlRKCTM0lbnSQiZ3vSt9JQpBa/84TCDKzI6eqLQRpTH+Y6CAze+Os/WyRYhA35V39VkdBbM25RKmi2cIFidZcd1jyv5uFsSgK4sbVIkoVzRYpBpmaSV0LQQo7rq7UgVtJTfxskWKQthscuKVrCOKGo7VJZRYnmR9kUwySq5nuvNb/3gyyNAcmaRhkU+zsZg5f6KVtCCK2wsYcOEkHGZsaT0fdIOaPvSD9OymlCbG99Qu3EbIZRB3kPw7ilihZAkuUVn4jZrsw7iO1/lM/iGlNctGojV/odfxmEHtr9Z/Ik1zGG8dqlRjPI0e6+ZYgST1YWUVbUwji7pm1+Xr6G4kpPuo+vjjSv5t2HRKvtd7qVjuzn+iD/PNH+6H+5sM6gc2Hpb3cqv4QxG2LFGbhZa773HfpFLeDGnu5l51vxF5qs/pd2h4w21g0prRB527vqtNH5mZimNrnkUVtTukv4+2z1jSF+XBqqszUjBiCjM0u1to9Iao3ORPZeEK029dJbGK3CR4+y58W6iaJNh8KVZt6+7Gvd4MWv4yelpvP7Em9VrB7Vt2ZXVV4eS1SxXtDYfr2QVJ60eOqfNMJkplGM1HM7Skn7jPh8SOhV2/2oqqeEu/9rlTjI3tgNvEOaveZECSll6Gf/M0RB9FfyXN3UHbvn+iBMKXX0zcXcvllo/Xr2eK9P8jeiXut0JNfXaT3HwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQtH8AIVmWsn7iEYAAAAAASUVORK5CYII=';
const slide11 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEXd3d3////l5eXu7u729vb6+vry8vLp6enh4eG6ZqVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADkElEQVR4nO3ZzWsaQRjH8YkvcY+ZRtMclTYvx6S00GMsDemxC0nIUaGVHrWQNMeV0Pbf7s4zs+uMIhVayCN8Pxcz4yw8P93dedwYAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4j3bs3l9ntoKUvWPt0syquV030GHjIDO7bqDDxkHGdt1Ah42D5HbdQIdNgzTjJclAiU3vWoO49sH2BnmyUe3JQIuNgry6tIvak4EeGwUZ26j2ZPDsyo/1dur+SMo+zq+n9Uz2Nr9+7+f1Bvnlaun1TX3Xktp33WQRBpkUfCbL1QZp5FLMS5MEyWT2LgQ5kiVdWf8wmUzq2pPBM/tpvX4SpCVzB3Eqa0fVMUntWoKMQ5DPSZCZnxzIoB2WvKiO0RgkKz/30+xYzq0oSG67j9m9Hcrg3Nqr4ncezi2jM0jZYRTG9eIHcZCOnEfZ0LpB5q+glpx+QmOQlhRZVt6Lg7T8pz+XIGVWuTvn9UWiMUjbHsqrK2cRZO6vh6YEaYdzauauo3pxTUmQasv78rGIgoSaMxulKt85DAdpDNJe3IuiIOfhLBpGqaqz0OgM0vKbulgEGfqrogy0527QIxk07X5YqDFIeRl0p+HvRZA83KBmPpVvTjr1/VdjkMztdFeF/L0aZOAHPmnD3dmExiB+D+9Ja7sI4jcXd53LoKI6SMPX+MGkQfybS0GqklUGMZ2hDU36ahA3yLYliMkepNNNr5FC3loO4me1BilPr3fSx68GCafWdGm92iDGvHZdYryP9GV6+4KUpV9EQcah9pn/es6WFmsMcnTTl9d52YfEvdZIZsPOfiGD7Mf3cJDGIIPwcbv6F0EGob0a+sbL95W77oYgNAaZh497kHwjoZX03e8gNItt1U1j1ZuPk2tk17dVrfB7pFf4JZrb+JavsuN2xEWQhn+KNat+IX4y8jIKB2kMUibYP81Ohm6zix4+DF3LXpYuv9lz23tjTnLdv9lNeGaV7uzu1/rtxNpx/GyovtZ1BqmqvEuCdPykbIjy+NS5qI5RGaQZOvQiffZ7Ls9Rw8A/xOsW1TEqg5j7qvlNgshXclYN8mqJpzOIebixt48rs0+XvW/1oPPVVv9WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7RHzSHfP37tX8FAAAAAElFTkSuQmCC';
const slide12 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEUAAAD///8/Pz9/f3+/v7/f39+fn59fX18fHx9/0oskAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAER0lEQVR4nO3ZzY/TRhjHcZNXH/uUzbLHWC0vR4JaiWNcsaLHWoIVRyy1qx4JgoWjoxXwb9cz84w9dlrWgW4yh+/n4rVjS8/P9rx4NkkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+jO/LDjUf6rs/lYnlL9XwzW/Ydkd6RXdvmlJnUTqpbL20/g4Ns/ClpYYLIjwcobh+Dg5T+lE/iLG+/uH0MDlL4U0oN8scBqtvD0CBjf0pat4+P6TuRuwepb7ChvVbmg9RN/XFimszilivb08Ag1+KDTOXUbMaxNZJBQX46lyZIJmd2W9gHE49BQVz7dn+vZN3ZHll9jy/emD86ZT8oXrxpjqS/FC+euuNhkFKfRBZFt/XZFLZYJk2vZWs3Q/ai0p3UVu+KDoPk2ja2MQQZucH5XtIJ4obsVxrkvj3lxJ5/dXl56YMUUtntzVOyAwgG5yDIxB47DVOJvPbX9INsYwgSDM5BkI07mNmdqZ7STKl8EL+N4dWqB+fTR+kD+24FQQozZL+X3O6sRJ5XXwp9t5I2gLeJoNeqB7MqMff0NAwyt+9RmovZSV0LmrTDXj9I3r51RzOxRdaVL8IgE3f3tzZIndX2zkVTbi/ISE84qqkOzqa2NsjWtYexDTLVd2rTtIRekK1ooz8m33P++awKgmjNqQSp6l/O9KJukLpTi2D2Ow0+79ogK32L8iCVfwuTfpBNFN8jEzeoW22QXF/6ldkpNdW4ufGdIGMzBThIrV9Vl3HiW2obpNAOauNSucnJvOl/wyCma4vhmz01I93zyv69GyRzOy7pqPl+CoNs4nggOoYv7NS2DSLh3EMa/xJkFk5djmrkavwt6QZxP/aC+PrbIGYaFkGXZc1z0Un6bhCzk34tSCZBZ3Fs6ZWd6XbbSGV/6gdxR9sg5nH+foya/8PoVzuP3w2ir1Z/AtIE+STN2BKJn02TDceRpT18U5A8tvUTU9I6CFJq7Rv3ePprJD5I/WadJZG4/3Jpt+bbKJxrvbZHdWRf2530w1u9qF3XiueBZHq7Tf1tEL8skruJl5tXztxyXNIGyaLpes2TWNtt1nkiOpV0s99MG/R0Z9JYxjBbVH5uXnbayMxNqyb6PeLmIOXOND6mFcaJq3JuRsQ2yMivTusXohkrxtL/QkwjaiImwd1H6cPcDHbB4kNu3v66dPvNXsjiSfKw2Plmr699ptZHKj+ga1bdkd18vV5cipTh2lDT1n2QcTvkR7Cu5at81QkydwfdyttMT1n7azTILKogeltNSwnXflfm4D3dcYt4J5W/JsogyXs/+e0EsY/ksd8p/CmOBpnEFSS5eikXH3eOXp8v/m525n+J/7cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8J3+AZIZk7StaB24AAAAAElFTkSuQmCC';
const slide13 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEURERH///9MTEyIiIjDw8Ph4eGlpaVqamouLi6o12J0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEbUlEQVR4nO3azW/TSBjHcTdxEh87S0z3GKtQemxXuxLHGlGxRyy1VY+NtFvtkaygcHTUBf5tPG+esV2ogzbxHL6fS/Bb9fwce+axQxQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP5He2L/0TVt9+fi4tO2CvpZquw9IVprutb1LmNRSd9tv7aN9A6yqnfJZRDxdPu1baR3kKXdZSq0m+0Xt4neQQq7y8oE+WUH1W2gb5BxvUsh0pfRoRDzXZTXX99RK7NBRkJcVx+fhVhst7IN9QxyL2yQ6hYpq49EiJMtl7aZXkEOz0UdZGLGq6U423Jpm+kVZClckD1zl6/E223X1kd1jq/UlNYo+6i4eFevSX4vLl7q9X6QzGxeP9oA7MIXNTkvonrUUkXJGSItzUKiqtf3gR/EfhOPdzI7MCpUZQdRI0ii1l6bCp+rXfQYe3d7e+uCnKnPdQiX1mczpy0aQWLdevipvPnbBnn/Wn9LWQg3+9IEedsIYqZsfRNM2vO3P2dKpwH0KNUc8PQ4OVLXlhekEPNPyQeRq4VTId6UXws3f7eCJCFMiGM9p63ljOCCzNR1lFS97b6qU95BsSu3FeQ/ke605gfFqsiq8tQPEuuzv1ZBqqxqdC7qC6gRJKl6rV93WvODJqYIWZsLstb3w1gFmZhryk17fpCVHbwHZqeAv16XXhBTcyK8VNUWe+LbQULo4ideFS6IHYZyL5W9CqNukBB6xti7LlyQXN8VVaB9OUDfqIWxeGJ27AQJ4Fm3ug3m9t2BC1KYAWqlU+kTPqvH3+ao9TU3o8GgEnlC35Tq390gmV7QZY7qUbY1/M5ECL2WujRS1dq6IHpyMW2tqH0nSPU3DqLBjXSNr6JmEL2xFcTW3w4Sh3CTRDP9burkoSByIXk8yCyMtw/JnRl4/HukVJvaQfTaTpAkhB5FGv2h+vhuEHNptcckE2R0edlcEYBnskv055GFWv3jIMl3v6IB5dWzkQuyNLWv9NfTnrht3bYfDuHSen65UJ/yadXvtW7UWjOzn6mF5OO/5iAbpDvDDCczp1vW74Jkpr3KdeOlp7tpPcjaILZ5mQYw/K7N6c4a34hpJXX3m5npbtJpGlf166DhJ0Tbmy8b98hUTwyxeR5JS71Lu41fmzYyD+DJKtZVzuSM6IKMdGe+sk+If0bq48YcZIPEekCbigDeolQJnhwnL3I5knovH3J5ruXvavvqbVD6W/Si6D6zVwfPj6NDb8uAzDur5swun9avboVY+u+G3B3t/T7S2jIgW+V1I8hMr9Qvde0PbGf2mDpI5l6KDW5sOvSy+e73VK48MAv6Jd68tMfUQUxet2VIH2zz2wiiSjyxC0Xzwdx1JM9Ec8ug7i7FVfc3//vz9J96Yfa3sD8rtByF+B8GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAELRvgFaVm0ddaSQAAAAASUVORK5CYII=';
const slide14 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAG1BMVEUiIiL///9ZWVmQkJDHx8fj4+OsrKx0dHQ9PT3mWl4SAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD5klEQVR4nO3ZQW/TMBiHca9L2xxntm47roINjisCiWODmOC4SNu04yrBxHFF2tgxFQK+NvFrO7HTiiGBmCs9v8tqN0HvP3VsJygFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiHNvTWgz1rQcre0LrTs2yho+ZMrzroEf1xkHlUeU+vbZD4J+ivb5AyqnyytkE2o8pznWaQB3qMcVR5trZBvsWVz9c0yNMTHVdejtYzyEzHQQZ6L5Ug9TW+uDEforKPyrObpid/VZ69sf3dIGM9TSTID1PY6EA1s5bUPjCdlWvkUv2xHN4NUugqjSC9UirbU1GQXHovXZBDOWRHjr+7vr4OKh/qbZVGkO/aOoiCZNK3G6bS+sqfE1S+0KeJBJm5IKdRkLntHEuj7w554s8JKp/VVyCJIPW6vPsiP5KxFQQp9c59fqsLadR7kPfVz9KNLRUG6ZnOJILU241KmRGyGwYZyjjKC20aub2DMhl+oq28r/cTCZJJkXXlozBIZq/+QoLUWWV2LpubpK18YuayJILIJVW2mDbIwt4PmxKk78bU3NxHzcEiN/nTCOKXvI/vqiCIqznXQar6m313UlN5Jl8lEaTfzkVBkIkbRUWQyo9CFVQ+11OVSJDMLuqiDVLYu6IOtGVm2CtpbNZrn9VUXspMkUSQ+jbYuXGf2yClm6DmNpXdnAyb+ddXPrDRkghinu/qVUI+LwcZ24ZN2pM72/CVj+2gSyKIXcNHsrVtg9jFxdzn0vC6QQqbN40gPVvjWxUHsV92gviC3YehWUVVKkHUsNBuk74cxDTy3wRpna7+x/+r/E52uvE9UslX3SC2N9Ug9fB6Lfv45SBuaN10jk82iFLPzC4xXEcOpHv9gtSlT4MgM1f73P48x52DUwxyeH4gf82TXrjXupJet7JPpZF//eJO6kxTScxaY3e5Tf1tELfS2b3WxO0rB262TTPIwl3ucfSLuK2k3f2O3Waxv7xpXNl8HH5vPovukYHdVmXueWRU2UOWtvErm48js1UOzYrYBunZt1hz/4T4QcmfK3dSikHqBNsv8ueFWeyClw+F2dfWpcsze6lHL9XzctUz+6rmI3HvrOKV3TytX1xrPQvfDTX3eppBfJWXURC3RMiCKK9Pjak/J8kgm26HXsXvfiemc8817Eu8ncqfk2QQdes3v1EQ+UmOfaP0h1hpBlF35/rifqn328noc9MYftL+vxUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAv/QLJj6EYlg0fh4AAAAASUVORK5CYII=';

export const slideImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14
];