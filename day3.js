let rucksackReorganization = (items) => {
  items = items.split('\n');

  let total = 0;

  let badges = {};

  let priority = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
    'A': 27,
    'B': 28,
    'C': 29,
    'D': 30,
    'E': 31,
    'F': 32,
    'G': 33,
    'H': 34,
    'I': 35,
    'J': 36,
    'K': 37,
    'L': 38,
    'M': 39,
    'N': 40,
    'O': 41,
    'P': 42,
    'Q': 43,
    'R': 44,
    'S': 45,
    'T': 46,
    'U': 47,
    'V': 48,
    'W': 49,
    'X': 50,
    'Y': 51,
    'Z': 52
  }



  for (var i = 0; i < 300; i++) {
    badges[i] = {};

    if (badges?.[i-1] === undefined) {
      for (var j = 0; j < items[i].length; j++) {
        badges[i][items[i][j]] = items[i][j];
      }

      continue;

    }

    for (var j = 0; j < items[i].length; j++) {

      if (badges?.[i-1][items[i][j]]) {
        badges[i][items[i][j]] = items[i][j];
      }
    }

    if ((i+1) % 3 === 0) {
      for (let key in badges[i]) {
        total += priority[badges[i][key]];

      }

      badges = {};
    }

  }

  // let findDuplicate = (strOne, strTwo) => {
  //   for (var j = 0; j < strOne.length; j++) {
  //     if (strTwo.indexOf(strOne[j]) !== -1) {
  //       return strOne[j];

  //     }
  //   }
  // }

  // for (var i = 0; i < items.length; i++) {
  //   let firstHalf = items[i].substring(0, items[i].length/2);
  //   let secondHalf = items[i].substring(items[i].length/2, items[i].length);

  //   total += priority[findDuplicate(firstHalf, secondHalf)];

  // }

  // return total;

};


let input = `DsPhSBQQQhqmBDhPDsFwjwsLjlRjlttvjvvtRb
rNJMNNbrHrtjHLHjvwtg
fNbNzZdrZnMnMPnQShFPDmnqFm
QWVCFfQffgQCVZzVVpHsHJBqtpspJFRHqq
mwDbmnnGNlNcwNDDNRbnNDlJTpBJBtJGtPTLsBGqTqqsqp
MlSdnScRnnmmDjSdNSdCzvggWzrgzjvfvrgVzW
gsMljbrjlZlWcWMJrWwTwbmwQbmmLDQQLhwL
CdgpzdgpgnfThHfFRwhfRf
SptgpSpnCNpVSGNPvPGSddcMWjMrjqBsJcWqMcBWcVlZ
JcJLQQFWhQJPJpWcwjHvMQvnnlMvzBHd
tCtGZrmVRmVGTVTtCfRTCHHNNvdNzmdMvMlNzvwdvw
CTGGRftfSGtGTGDLbFchSgSWWWcM
QcMFQrvrQbvtczbVbjbMzZzRpqmDDmqqnNzCDCDC
SHHfPJssGLPSdHThLhHdRmqNmNssnNmNCNnpjmsn
LhLJfTdLJwfgPTdfGccrtjcMrccwvcrrFr
jFLLLqDGjbtqLCChpMMhMBvpwMTmffpZ
ZnJHRncHHgnrsrZffTdMdMBfmMvfvR
NWWPnZrVHrZPCDDQtzDCPLCq
jpFjvBZhDFHZdwcmslcslBLLNl
dVtTVVCzzfrrMPNLLcnVcPLRns
CrzWzTqdWtGCzJtbJCrMjjDFHZQjZSpvFGFgHhHp
JjJqMctnhtDZDQtf
TrFFlrrCCHPwHwlPHFPzDhsffQQDsVfWwVJQJB
HHHGdFlHldTpCCFFlLHdCRJccMnqvqMgnNjjMjjvLMLcSv
cMfFcMFcrqgJLFZdrTDdthPGsGmtGs
WwjNwnjjBQzVVQHwRDnmtPGhPPsPnnTGld
bWHBjWVzpbRzbmScqgZMFcqf
RJjPTBJhTNNjfPhRBdqtlgdbGldwtCPgdb
ZmrHHmzpvSvvpzvmvDVCGlWVwCWtGtWCddggqf
QQpzFrHHQnzHvfTcNshcLRNFJhcR
QrPQDrppBQmCmFQm
TzqzsLfmsfSTfqzVLftNdJJNJGCwwGdgCwSGNC
TVHTfzWsfftsZstnbvrbWbrbppPbrmmP
BQrfqrLtJnttqqtQBJDDtBnDzRgldhVVpJlgzpzhpzsgslhV
TTNcPZCvZjmPFZjvPHLlWdNLghVhzzlllpVd
jcFPbTcZTFcmcjMjjFjbLwbnDBtfqbtBwfwSBnrbGw
SZJNJtrNzjjNCzlBBmqmQDBBmDBBjB
PGPbGwhLsnvwnVbGPVMZsDsTBBgcZgBBDBfDBf
pnnhhvphGVpvRPnJlSFRNNJHZHSdSR
hbmDDmwnnVGbhmjNrrWwLNLsWBrw
dMrgvcQqdjlBLlfW
HzzPSrcHqFHQgzpPcMpQqrtmbbbRhHHVGnZDnVHhVbVZ
RwtvdPRvSlTQmHHBQBRL
FjVSjrsFVnFQnTHmnT
VCVVMrWWjVGgbcNVGCCVdlvfdqfvwbSzwqfwZzwv
fmPDwJPDFRmRgPdwwwDNwgwPzhSQzVSzVTQdzHZzHhzQMQzQ
sWtGCWtpcqqpNnQjjzhVTTVQczhj
tWBGntsCNlqrWswDRfFrbFrPDbPf
dmzmjcbQjjQztFNqsqBcMJqNPF
nlTWnClWwQDTVnTrsMsCRBPZRJRJqRJq
wTrhwpVVvgvlDpTvVWVDdLfzgbLtbzSQLSzzjzLz
RWZdHvRdBRGbbvCjJnbn
pqqpSwzpSSbCwPwjlwjl
gDzzqSVzqrThpDBtRtCZdQRQLrQQ
GRqTGqtmTVdGHHVVNNlhPlMqbNqNDbqW
LzQSdFnfznfwBcLcnFppBBDDMPMPhDbhlwbWPlbWMjrD
QznFnLZFvVvHRgsddG
BBHBfBHFdSltmWJvqtNtHq
TQDrrVMzVDnWnNZDJc
gWzprTCrCMQzGGjjhwFwdffjfl
LLLSSSzBBlBLsszncCBZSPSMMMpdWTdrmmnfVGVmMfmrmm
DghttvwhHRvjJthNJwhVtDHGpddMWdMmrMmfGdppjWTfpq
gbJRthQDDRvwtDhQhDFPcVcbPczLzPBScBBF
sZsZpTtLCsbspZtTwrCwrwtDmNNdJmmqSJfqmfNGNmHqGdqb
nQvjTcjQglFVlllMFMVFqWfNqnNHHHdfSfHqfSJq
hFvvgFcFVzphpTrrwZDp
qJqfhsBpfSpchpqcrqwCDvvCDQndmpwDtnRQ
jWHPZWWjZsCmCWRDmQ
PPzMGHlzMNsPLPlZsllgsNrhNVBqhFVBbBSqFFBFrV
RnRsFFdSzmgwvQsqwc
lbgHGMBHlWWWlfWGGBtGwqDpDwmcpMrrqrQDZrMZ
GGJLBVJbVGjGtHVfJtWGHBLLPdzdCghnRnRnSShgNnhnddhj
VgzLFjjwhhSwFhVZgRhRgHHCCvdZdrqqCTvBCrqvvr
ncnNbGMcPpvHFrssdBHM
cnctcNNbQGWFJctftgVmzShzzwwVwgmwfR
pFWmSSFGQlvTbwWTwH
jdBgNhRgMftNBhPbhHnZHlTTZcwZ
lfBNRjCtCfMjsBfCjgfNBRMppGpJqsJQGrrmmJDpGmDDFG
GznngnhzccVdgjbbVjVjVbVLwwQJmQMrLTZhJmZLQTJWmm
pDBSslPCFPCpvCqvpPBQTlQLrdlJWrLJLmrlrr
psSsBptpCBdjtcjNVcGG
sssppsmchwspFLtvHhQJMtFb
rRLDqRVLNSMvFSSV
WDrLnzrDqzRqRzzfLgRnzrnsssZZZsZBgCwwmBppwBspZc
MtPbwvzzVtzfsqGGVpdSjsLd
DnNRCDJBnHJDHDnrDTRcnNZpZSsSLqjpdqqqSMqdddTj
CFRFRFHgDRnRgMtfFvvwzwvwvzWv
PNpFPncvvchPpNjpFhvPhPLmBwMgDRRwRgMDhBmLzBDD
trHSrdTtslWrSWmfzgmMnfBzmn
JsrQsJHHlsVqTjjpbbNnQNNpGG
sVQCdsmGlnlCmnGmQQhGCJJNvNjpgqhqhvPgpgPqjpcpcW
DMSfSbHLHbSDBBzLNvccWRcddvPjNj
FSwHfTFdFsmJlnTTmV
FctwtTTCScvShFqtwScrcTSCJQGNndGHWJNQHWHZdgJrJgGN
jspLlfPlpfsDjBspfllWgdWHQggZHngHNGdsWJ
lRMpBlPmSFRTcvZv
TVZpRRVvFRVpTZRfFhFvvzGVwrwwwdDBMwQrgcDtMtDDwZrL
jsNsWqWjNQCNWbjPMcBLPgBtrdMwdrdL
SJSsmqlSNljbmlNjsbQVffzGRvzmmVhQpVGz
BFFMvcwMwwpFFfpbDMqPVgLVgmLDPR
JtSsSzJssQJJWjRZzgLnDgqLPZgzbg
dsdtWQWdRGjTRNQNQvGfHCCFpvfGwlCfCp
zzWGqWnqnwWCvCrHffHRpBpBBRSJzRFFDhSQFR
VPVsZMNTLsMvPsmBJhllFpFBTJFQpl
sZtsNsZtdZgjbwggjnbvqr
QpTvrphmDvvddfcJJHTTncMlMG
bRZZPRwjgzzlSSjGlnlSJS
BZzBzssWgwzzwNBsgsPBgszmQptqrrGdvdWmqdhhFQDpQF
FfMtzSqlDlzfMhPFhPtffNRsCgSgCCGspRpRGSsgsg
WTcWLTTVnWmrVdLrcHmNGNCZwCCggpgDRwpCnR
JcdWJHTJWdJdjJccrLvlFltFQQvPFDMjqqlP
NfjFNNZPDQVJVWpCbQpJ
lcmdzlmzBtRSTlTTcncsVSbhpLWpWgsWghgsVS
mBTRRmGccRtBwDbrGPbrMMrF
VVQqlsGrVsMWBNFNMQHF
TfzZfDgjgnLGjjztTncCFwwNmdvNcwwNBvHNFwvd
jzjDgZzjntGJZzCnhrrSlPVsJslpslPq
dVhpjGPdjHhqHgtHJJ
sFzrzllQswDwFbcmBlgvZTCgvqTCfgHQJtqT
nDbBsFzzrrtFrlwzPdSVMWMVVMSnGNLd
wqJCjqChmwMLmMmprNgG
DNTtdsdWcHdNspGQggnrgLnQpc
SZvFftdddDsDTtttTDJNCCwJJZzbbCjwwVPj
VstwZCwslBZQDBjfDDBDfS
rvHnmMRrTzmMrmhRppbhDfpjfbjbctjD
rPFLRLmFvvLvHvTCtqsVVwldGZGPGV
SNZDJGfvwgMgfgmLmLcmBqgWgQWr
hPnPTnVGsPRqLWpTmQqQ
tsbnFhhjhSdGJNCjSf
QSbGgBjfTCMWFNPFFtDghPrP
JqHqJVzZzwJJHLlqQptDhPrctpPDtnLF
zZmwJwdwdvHddVJvZqdzHlfGBbsCmMTsWCBCjsGGBbMQ
gVmLtpWrFTFBLtpcFNbvhNNnTnvnQRlQQv
GHjjqsMqwZZJdqGfZjfZGjQDDhvQNzznzRzRwDNbvgzv
sZGPgssMqHZpPptmCcpCrP
CZCNNLmwzwCGMZQMQsFNWplvpsJBWpFHBp
SPbSbDRRbnDqggnbVbVrbRWHJFTlBBcTvWvsPvFpHTcl
tVgSvqVbnqDdgQzMQMGMmzthCw
mpbPQlblbwSlfSPGBpBGPpBFgMMtLFSHMLVVDVdtHLNctF
WnhZsrJhTnWrgZdZgHNLcLtt
hjCsCWRhjzhTjnWnQBbmPQQPLBGfqjwQ
BFrzdtmRmpFtFwwmjjzNQllPshqHvjNh
fWCLLCMJnCDbgfMJhPsPHvqvqVsssQ
WbLnCZnvprpmZrGd
gjMzTGBjWFBCCSSrBC
bddJJndbdJfwPPthrrSSSsFSSg
NJHbZbbvvWGgjWgT
dpfphMggHdQcwftMMgdtzWGfGWnDBnmvnVJVvfmn
CqPFTZPSNCTsZZZRLzGmcGVzDLGvLWBWJm
TCrTNSScPlplpHrQrQ
lqrCvhWFvMGWgfHPgLfjfdgG
zjmbjSnzRzVVRmzBRtwjVQnNLfdPgfLdfTtNLPHTNNpppf
mbSZRzQRBnnzbQJbmjmSbmVhlslZMrclWFrrqWCWsFhchF
mpfNshshflNthWfJCBBdmnQbQBZQdn
VFVRccgGTqTrHTbWBFjJBCFFJCCQ
PvTDHqHqPPGVqqhwfNlWlDhMltlh
HmLLgWVjJwhwWLgjjhmVHLLLlSzBlBlSvBvBFGvtdStJSSvq
TRRrPMsfQTbRRCZRnTMRZZTCcvSccqBqBBlzdFvBqFsGBcts
bRNPbRCZMCrQNfPLdhVpLDVgDhNHWV
sPJFDsSsVLgHjLHPbj
vCnRQhhRQdVQZlZdbHNMlqNNjgjbpbBL
ChhCCCWTWnnmvmGtztStzScwrcVcFW
NRBTNDBglSSgDwCClQQSFFHdLLsFbPFFLt
McpmWccMWHZPcLstbt
MWnWphVMvvzJzpWJWmVphjrDDBBTRwRDDDRRCnPDnqgg
hsnnhhLljLPTmZwvdZdZjmmz
RQNNDpNMSZwvsmqstN
QFMFRDVDsHSpRpHSMRHfGGGTLhCChBGhBhBFBJ
TTbltCvClzvzCZtwtwLTtQQQgjNgmjgQRRRQSjQLjR
HPpnZHcJsdnnfsdVHHSSqghhmqBSSqSmBfNj
VMJJdnMPrMGVrzvCZwZWCzCt
CcQnBBCfBvRzDlsS
PdbPPCbhGGpDSDlDDhvDJl
HmHWPWdbHnCwCHCr
JHlmJcMWHQcPmlmJMmMZPfwTTRDfgdDBfRtgQgdfBw
zVvFrqGjzWGVrqvjvNFpspvVBgNNddtTgghhRTwgdDwwwBfT
bVFrrvsvjWGVsCsqpSHZmMPJlJnCcLcPZZ
QrrQZFZnRtnFRTrnlFTtRZwpGGwzGszhjzbsGzzhmjjhhmhf
SgvpDSJSgPBSDPDNgpggmsMhMmffsMmzfJmzHHMj
WNVcCPgSSDCddSdWCpNBclCQQFRQQlnTLFLRZQnLtt
tgvqWqzvntdlzNzzHrbPrMhHMhhrVrjPmC
FGTGGRGTffcJRpQcJJwmjhPLhjnCQPrLPVQrMr
SppRSDRwFnJJwwswTDdtzBzqWWzZDldNgtvl
sjzPjLphMSrlppSp
fbGqgwTqgVTFFcgGTTGcQvfHQZRlSrSlSmMNMBRNNNrZmm
MVcFGTFtqjsJLjjtCd
jVJqTRHjjtDjZnVJVVjnNdwfCFPZmPgCCgCZGCFFrrFg
LSLBMBWsbBBCgfdrFd
ShbbzdzQRNNNVhDN
JwbSRqmSwRwcpmbSSVfhNBTVGGRnNNzRNh
ZPfQPjZZrffQZszhzTnVGBvntsNz
rLjggjQgQgFdPQjLFQZgwLMbWccLSwWHqHfSqpwc
cBhzNpztzHNrpHSHQrhZjZqdJRRgPqjhjqqP
bQwsMTswwVjdZMVRJM
vGWCTDCTQvvtlvQQ
mHVmTTsmzRmRHffmmfMGBzSPMhSWWdDWDSGB
VNcnNbtqqJbcbvgvWhShDBDPhjgPhSjB
FrrbCnqJcbCJcFFbnqJlppCTfQmfmZQTLVswRLZp
rWWppSStfRBLfHPdHHDzlldZ
QrTnQmmVCqvrvJvzJZPHvzHsDs
qgMMmrTTCcnQQmCNQNQmgTpwRWRtwtpcBWwjSRSSpttW
SzWQwwqVbQzwGSfVwffVwbqhFGFFMgGLGMlNMcnNgcvlMg
ddZHHsrCdBssDsHmChFLNNnMvmNnnnFncL
rpJJdHZJdZHQSRJbSfVhww
jLtFhNwNNvHnjFVvQLQLHhfbGDMPfffpllpttZMPPZZb
VmrqszVmgCWWggbPGclPlZbcZCbf
JdrTmVTVsqsRJHvQnnhwhBLH
vpdBvsvdVvSPhvQFCgrRmhjqqRgWcWWgmf
tJDGbZHbjRHNrrBj
DnMnzGJJwtzVSzzBzTBSTF
hZMDbQhMhlMDJrDrPMJRRqGJSvFvSwFSVdvGvwSFqq
HjjzcRTnpGVSGGFWHH
pssmjctLzpsRRnhlQbPfPrgDbZls
FJMhPhnTMGmBFdnmlrfqfCcwlwCwCv
pjHLsLbjjRHsHsjDjVsgDRjzCnfCfzqrqvwgflcvcvvgqz
njtpHZnLLQGhTtTWSSSh
NMddMTDrrjNnrnMWMrlnPwNwftBtGvptGjBHgBgpfCCSfgvf
mqRqLFZRVFbtgBSCbGWWHp
LZZRmQhVLLFzZdTQPndPNTTnQW
CprQrcpqhHhpppchpphdcdpLMRMGsVGGsMsLbZbtbfMRmtbG
DzlgTjwPTlSSSCDSlggNmMRtbsstsMfbwtVssMmt
TNCNSBNJJTNPJjCTBDzjlJrvvcQrrhphWBqHhHdqrnrr
ScbcbglMPRSmvclTlzMTdhVHhhjfdsdhrVDzfjrD
LJGtpQwpQBBCttJLGqtqGHhPfDdHwjjhrVrhdrdshr
WCpZQCGqtqQWtQWplZPcvMmgmvPccbvT
tGWqthqGVdzBWwdd
BZvZHFFHZrHZvZNRRHHZNHrMMTzRMTdTzbgDVMVssTDTwg
JnNmrHHNrCGBPPnGGc
wvFvZBmppBdSLcvshcLrgl
bTQqJJHJzJjDQjQtzRVJztDHslgNNVLcgSrsSsWrSslWgrgL
TqHHjQnbHTbbmZBBcFMpmBwn
ZFCqSlCPdCRTLWWTQQLLQS
GjggHcvsggHVTVBLnlcpBQ
hvGhlrtjmjrHHhjsMPFNPdtqMPqqRfCf
cgRwVfVzrgqqwZctTztFMFMTCdPmmF
bWJsSJHpTDRDTWMC
sHHNbshnlJhJjBsjsbnBHbZcqrZZQwqvvZcrwwvRcZnr
ttgVBtMbttngmHJVpzlzZlppzw
cPcsRPmPPQfGcccRQSSZzzvzlflzZHvJppzJzT
sQPSCPPWccWWWqsQqRCQFNRMmnbnjjNbgDdBjhBrdbdDbd
gSsZDSgdQZgWSgddwLDLLfCDBqvlhBlClqtqjhvBhB
RMcsVMcsbVsrPrmJcPHHVvfjjCnvvfCqhlqvqqqq
NFMRRpHPgzszGppG
WmmZZNJCgCBZCzPvmBCmjWjjqFtFqjFjbVwqwjtt
ppDMpdMfSfSSNtlwqbqwwq
dTGDhdnfLMLhfDDpQvZNZgmrmrQJgrLQ
jrqRqfNNhrVvcTVdpTscpd
tGWBlLggWGddTspZZd
JJzWtQgQsDbBgDWsgbFrPrRJNMJMPqMNfHjH
GdvVbbWsWdvWGDvWZcbFBTBZCzCjwzrhPBJjzF
nQPfSHnglfpnMSngnMgJTprJCCwwrwCwpTpCFj
SQQHSttRqggmlVsNcvWdRvbWPN
WLNLCWLsSJgHFrSHrM
gDbzRTcmbzPPgPPdtBctfHfrMMQfGFJrhQnMfGJR
dmmzzqZdDqqTLLwjgZgNljws
TCqsDHssmDsDGVGlVcMccGDV
FLntWWnnFzFgzzbtbznLBtlfjGZmcfFGVNFGlVZcMNlN
PpbLLmpgbRzqpCHwChQqwh
lVBPVgflgBVVrVTTwgwBPmgflDQjnnGvqjGDDFjGlGnvqHHJ
ScCLzdCZdbLSbFdFqvDDdGMQGQ
bchNCLRWSbzCbNRzbWRmsrhQwVVwBhmQpPwpgV
GmfHCCPqWqHLWLCfRJpbrrbQphwZbZ
STVDQzNnzMzNdstMDzzNtZwFhrlwVJJrJlFFJRFwFR
DzSvzstnszMnjQcqggjPqQBcqq
BzNwLTqwTjrBrljWpBlrQpBpsCGGCtpssCMttDtHsttMDCHp
mnrJVmRhhvJVcHtsGHMCnZCPZM
bvSmVbRhbgmmSJflzNLrzqzfWfqBWr
qsZLqqFNhfrGnJFv
DVjVmWlcjVjdDTDlbbTDTzmrCnMmJGnHnmCHfJGfvnfM
lVRdDglTlTgVlVjbWWVzVjvNZqSBsLZNtqRsLBqLqQtL
ffRRfLVHZHfJHVJcMrMZZwwTzGBBzBTBjGTwrwdSCj
qmWbWQbqnbvWhbQPGnGNnpvwSzltpBldtSdzllptCSjTTt
vWsbnbWnNvQQQQvsRRLfJRRVGfDcfV
PpqrvswPvvvPsNqmDLDttCCcHHZVrCtW
hgSddBhghQMdbhbwhgSdQgCCctZcDtLntLttCVLtSLCc
dGzdQMFzQMdgGGlGJMzBgBwRqNNfmmTsvfRfJTpwjmpP
pcphpdrWDmTgHWMtRWqHRVVH
SbGcGGQnvNQGvsjBtVHBLjvqVPVB
lzbQCzbZllSzQslpCJpJJDggcggfDT
ffrTlhrVrfCsDVTsWzGBBZcBRBqRBWtGtZcq
QNFmFHrHNSSmSLJdJrNGZLbGjbcBjBGjqcbgjc
ddQvPnHddnQJHSHSFPdnFfDDTfDMMCrwMlPTwDCsrC
NBnrNHQHBscvhfBM
bbGtgWWWqZFmnZGZbmVCdMzvvShfzfGcdcfMSS
WqbjnmbnjWgmFFgtWVbWZwNTNLjNprNwQLDwrTrHQr
lwwlcjlzQRBcBccbdLCVnNVWJJzfLndd
pZDMtZpSDMZpMZMsPtHVNJVfRCRddVndnJLSJd
mDTZvTqtDDHttRPcqhQlwgGlghbqBh
DTspTqssqTbdmCMwVmnmlfCD
PLPWjjrSjvPzqZvjvRqjLtPwnnHCmWVcncMnnwmncHcHll
RFztFjjqjQFQTbdTbQ
hTFSVSdhMMVMFjjgbthcbzczcg
DvwCJVJWWJDRnfmbDmccfmmgfb
QrJvPGWWnpVMqdZsZpqM
gRLcHbgnfpgpJjlqqp
SFwrTHFBqlZtBPZq
HTzDwmSvCvCmsmmvTSwvFwcfRRNRLcQRWNssNNbRWLWL
PpMgDMDnsWSnjBQnrjbn
LFcVVGChCFdhdVFZVpVCdVbvQbRrbvBBbBjQSJZrrJrR
FNwGNCCFHcVTHcFdHHHTDzMzfsgzwpPWMmPflmtt`

console.log(rucksackReorganization(input));